import Emitter from 'eventemitter3';
import Log from 'log';
import superagent from 'superagent';
import sapp from 'superagent-promise-plugin';
import { intersection } from 'lodash/array';
import { merge } from 'lodash';
import T from 'proptypes';

export const PropTypes = T;

sapp.Promise = Promise;

import { Permissions } from './plugins/plugins';
import { TextMessage } from './messages';

const http = sapp.patch(superagent);
const USERS_DB = 'exobot-users';

import { DB } from './db';

export class Exobot {
  plugins = [];
  adapters = {};

  constructor (name, options={}) {
    this.name = name;
    this.alias = options.alias;
    this.botNameRegex =
      new RegExp(`^(?:(?:@?${name}|${options.alias || name})[,\\s:.-]*)(.+)`, 'i');

    this.emitter = new Emitter();
    this.http = http;
    this.requirePermissions = options.requirePermissions;

    this.initLog(options.logLevel || Log.WARNING);

    process.on('unhandledRejection', this.log.critical.bind(this.log));

    const dbPath = options.dbPath || `./data/${name}.json`;
    this.initDB(options.key, dbPath, options.readFile, options.writeFile);
    this.initUsers();

    this.initAdapters(options.adapters);
    this.initPlugins(options.plugins);

  }

  initAdapters = (adapters=[]) => {
    adapters.forEach(a => this.addAdapter(a));
  }

  initPlugins = (plugins=[]) => {
    plugins.forEach(p => {
      this.addPlugin(p);

      // if the Permissions plugin isn't initialized, we can optimize later on
      // by not waiting for DB initialization and permissions checking.
      if (p instanceof Permissions) {
        this.usePermissions = true;
      }
    });
  }

  initLog = (logLevel) => {
    const log = new Log(logLevel || Log.WARNING);
    this.log = log;
    this.logLevel = logLevel;

    if (logLevel === Log.DEBUG) {
      setInterval(this.logProcess, 10000);
    }
  }

  initDB = (key, dbPath, readFile, writeFile) => {
    if (!key) {
      this.log.critical('Pass options.key in to bot initializer. Database not initializing.');
      return;
    }

    DB({
      key,
      readFile,
      writeFile,
      path: dbPath,
      emitter: this.emitter,
    }).then((db) => {
      this.db = db;
      this.emitter.emit('dbLoaded', db);
    }, this.log.critical.bind(this.log));
  }

  async initUsers () {
    await this.databaseInitialized();

    this.users = this.db.get(USERS_DB).value();

    if (this.users) {
      this.log.debug(Object.keys(this.users.botUsers).length, 'exobot users');
      return;
    }

    this.db.set(USERS_DB, {botUsers: {}}).value();
    this.users = this.db.get(USERS_DB).value();
  }

  mergeUsers (destUser, srcUser) {
    if (destUser && srcUser) {
      merge(destUser.roles, srcUser.roles);

      Object.keys(srcUser.adapters).map(adapter => {
        this.users[adapter][srcUser.adapters[adapter].userId].botId = destUser.id;
      });

      merge(destUser.adapters, srcUser.adapters);

      delete this.users.botUsers[srcUser.id];

      this.db.write();
      return 'Login complete';
    }
  }

  addRole(userId, roleName) {
    this.users.botUsers[userId].roles[roleName] = true;
    this.db.write();
  }

  getRoles(userId) {
    return Object.keys(this.users.botUsers[userId].roles);
  }

  removeRole(userId, roleName) {
    const roles = this.users.botUsers[userId].roles;
    delete roles[roleName];
    this.db.write();
  }

  getUserRoles (userId) {
    const user = this.users.botUsers[userId];
    let roles = [];

    if (user) {
      Object.keys(user.adapters).map(adapter => {
        const adapterRoles = this.adapters[adapter].getRolesForUser(user.adapters[adapter].userId);
        if (adapterRoles) {
          roles = roles.concat(adapterRoles);
        }
      });

      roles = roles.concat(Object.keys(user.roles));
      return roles;
    }
  }

  async checkPermissions (userId, commandPermissionGroup) {
    if (!this.usePermissions) { return true; }
    // special group for admin authorization - otherwise you could never auth
    // in the first place when public commands are disabled
    if (commandPermissionGroup === 'permissions.public') { return true; }

    await this.databaseInitialized();

    // get user's roles
    const roles = this.getUserRoles(userId);
    // if user has `admin` role, allow it
    if (roles && roles.includes('admin')) { return true; }

    // get roles assigned to the command group
    const groups = this.db.get(`permissions.groups.${commandPermissionGroup}`).value();
    // if there are no groups, and requirePermissions is false, allow it
    // requirePermissions = false == (public by default)
    if (!groups || !Object.keys(groups)) {
      if (!this.requirePermissions) {
        return true;
      }

      // otherwise, if there are no groups, and we're not an admin, return
      // false.
      return false;
    }
    // if command is in `public`, allow it
    if (groups.public) { return true; }

    // check user's list of roles against list of groups that have the command
    // if there's a match (user is in a group with the command), allow it
    if (intersection(roles, Object.keys(groups)).length) {
      return true;
    }

    return false;
  }

  async databaseInitialized () {
    if (this.db) {
      return true;
    }
    return new Promise((resolve) => {
      this.emitter.on('dbLoaded', resolve);
    });
  }

  logProcess = () => {
    this.log.debug(process.memoryUsage(), process.cpuUsage());
  }

  addPlugin (plugin) {
    plugin.register(this);
    this.plugins.push(plugin);
  }

  addAdapter (adapter) {
    const name = adapter.name;

    if (this.getAdapterByName(name)) {
      this.log.warning(`Multiple "${name}" adapters were initialized.`);
    }

    adapter.register(this);
    this.adapters[adapter.name] = adapter;
  }

  send (message) {
    if (!message.text) { return; }
    const adapter = this.getAdapterByMessage(message);

    if (!adapter) {
      this.log.warning(`Message sent with invalid adapter: ${message.adapter}`);
      return;
    }

    adapter.send(message);
  }

  getAdapterByMessage (message) {
    return this.adapters[message.adapter];
  }

  getAdapterByName (name) {
    return Object
            .keys(this.adapters)
            .map(id => this.adapters[id])
            .find(a => a.name.toLowerCase() === name.toLowerCase());
  }

  parseMessage (message) {
    const { text } = message;

    if (message.whisper) {
      return new TextMessage({ ...message, respond: true });
    }

    const exec = this.botNameRegex.exec(text);

    if (exec) {
      return new TextMessage({ ...message, text: exec[1], respond: true });
    }

    return new TextMessage(message);
  }
}

export * from './adapters';
export * from './messages';
export * from './plugins';
export * from './db';
export { default as User } from './user';
export const LogLevels = Log;
