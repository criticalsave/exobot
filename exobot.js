require("source-map-support").install();
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("cryptr"),require("eventemitter3"),require("fs-extra"),require("lodash/array"),require("log"),require("lowdb"),require("node-uuid"),require("readline"),require("superagent"),require("superagent-promise-plugin"),require("underscore-db")):"function"==typeof define&&define.amd?define(["cryptr","eventemitter3","fs-extra","lodash/array","log","lowdb","node-uuid","readline","superagent","superagent-promise-plugin","underscore-db"],t):"object"==typeof exports?exports["exobot.js"]=t(require("cryptr"),require("eventemitter3"),require("fs-extra"),require("lodash/array"),require("log"),require("lowdb"),require("node-uuid"),require("readline"),require("superagent"),require("superagent-promise-plugin"),require("underscore-db")):e["exobot.js"]=t(e.cryptr,e.eventemitter3,e["fs-extra"],e["lodash/array"],e.log,e.lowdb,e["node-uuid"],e.readline,e.superagent,e["superagent-promise-plugin"],e["underscore-db"])}(this,function(e,t,r,n,o,i,a,u,s,c,p){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,t,r){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=31)}([function(e,t,r){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,i){try{var a=t[o](i),u=a.value}catch(s){return void r(s)}return a.done?void e(u):Promise.resolve(u).then(function(e){return n("next",e)},function(e){return n("throw",e)})}return n("next")})}}function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=r(1),c=r(4),p=r(27);r.n(p);r.d(t,"d",function(){return v}),r.d(t,"c",function(){return b}),r.d(t,"e",function(){return y}),r.d(t,"a",function(){return m}),r.d(t,"b",function(){return g});var f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function e(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(s){o=!0,i=s}finally{try{!n&&u["return"]&&u["return"]()}finally{if(o)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),h=/.+/,v=function(e){function t(){i(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.regexp=h,e.respondFunctions=[],e.listenFunctions=[],e.help=[],e}return u(t,e),d(t,[{key:"helpText",value:function(){var e=this;return this.help.map(function(t){return"["+e[t].permissionGroup+"] "+e[t].help})}},{key:"register",value:function(e){var t=this;this.bot=e,this.botNameRegex=new RegExp("^(?:(?:@?"+e.name+"|"+e.alias+")[,\\s:.-]*)(.+)","i"),this.postConstructor&&this.postConstructor.forEach(function(e){var r=l(e,2),n=r[0],i=r[1];return n.bind(t).apply(void 0,o(i))}),e.emitter.on("receive-message",function(e){t.respondFunctions.forEach(function(r){return t.process.apply(t,o(r).concat([e,!0]))}),t.listenFunctions.forEach(function(r){return t.process.apply(t,o(r).concat([e]))})})}},{key:"process",value:function(){function e(e,r,n,o,i){return t.apply(this,arguments)}var t=n(regeneratorRuntime.mark(function r(e,t,n,o){var i,a,u,s,p,l=this,d=!(arguments.length<=4||void 0===arguments[4])&&arguments[4];return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!d){r.next=9;break}if(i=this.validateBotName(o),!i){r.next=6;break}o=new c.a(f({},o,{text:i,direct:!0})),r.next=7;break;case 6:return r.abrupt("return");case 7:r.next=11;break;case 9:a=this.validateBotName(o),a&&(o=new c.a(f({},o,{text:a,direct:!0})));case 11:if(e.exec&&(e=this.validate(e)),u=e(o),!u){r.next=19;break}return r.next=16,this.checkPermissions(o.user.id,this[n].permissionGroup);case 16:if(!r.sent){r.next=19;break}s=t.bind(this)(u,o),s&&(s instanceof Promise?s.then(function(e){var t=new c.a(f({},o,{text:e}));l.bot.send(t)}):(p=new c.a(f({},o,{text:s})),this.bot.send(p)));case 19:case"end":return r.stop()}},r,this)}));return e}()},{key:"checkPermissions",value:function(){function e(e,r){return t.apply(this,arguments)}var t=n(regeneratorRuntime.mark(function o(e,t){var n,i;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(this.bot.usePermissions){o.next=2;break}return o.abrupt("return",!0);case 2:if("permissions.public"!==t){o.next=4;break}return o.abrupt("return",!0);case 4:return o.next=6,this.databaseInitialized();case 6:if(n=this.bot.db.get("permissions.users."+e+".roles").value(),!n||!n.admin){o.next=9;break}return o.abrupt("return",!0);case 9:if(i=this.bot.db.get("permissions.groups."+t).value(),i&&Object.keys(i)){o.next=13;break}if(this.bot.requirePermissions){o.next=13;break}return o.abrupt("return",!0);case 13:if(!i["public"]){o.next=15;break}return o.abrupt("return",!0);case 15:if(!r.i(p.intersection)(Object.keys(n),Object.keys(i)).length){o.next=17;break}return o.abrupt("return",!0);case 17:return o.abrupt("return",!1);case 18:case"end":return o.stop()}},o,this)}));return e}()},{key:"validate",value:function(e){return function(t){return e.exec(t.text)}}},{key:"validateBotName",value:function(e){var t=this.botNameRegex.exec(e.text);if(t)return t[1]}},{key:"respond",value:function(e,t,r){this.respondFunctions.push([e,t,r])}},{key:"listen",value:function(e,t,r){this.listenFunctions.push([e,t,r])}},{key:"setHelp",value:function(e,t){this.help.push(t),this[t].help=e}},{key:"setPermissionGroup",value:function(e,t){this[e].permissionGroup=this.name+"."+t}}]),t}(s.a),b=function(e){return function(t,r,n){var o=n.value;o.permissionGroup||(o.permissionGoup=t.name+"."+r),t.postConstructor=t.postConstructor||[],t.postConstructor.push([t.listen,[e,o,r]])}},y=function(e){return function(t,r,n){var o=n.value;o.permissionGroup||(o.permissionGoup=t.name+"."+r),t.postConstructor=t.postConstructor||[],t.postConstructor.push([t.respond,[e,o,r]])}},m=function(e){return function(t,r){t.postConstructor.push([t.setHelp,[e,r]])}},g=function(e){return function(t,r){t.postConstructor.push([t.setPermissionGroup,[r,e]])}}},function(e,t,r){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,i){try{var a=t[o](i),u=a.value}catch(s){return void r(s)}return a.done?void e(u):Promise.resolve(u).then(function(e){return n("next",e)},function(e){return n("throw",e)})}return n("next")})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",function(){return a});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];o(this,e),this.help=void 0,this._requiresDatabase=!1,this.options=t}return i(e,[{key:"register",value:function(e){if(!e)throw new Error("No bot passed to register; fatal.");if(!this.name)throw new Error("This plugin has a missing `name` property; some functionality will not work.");this.bot=e,this.database()}},{key:"listen",value:function(){if(!this.bot)throw new Error("No bot to listen on; fatal.")}},{key:"database",value:function(){function e(){return t.apply(this,arguments)}var t=n(regeneratorRuntime.mark(function r(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.defaultDatabase){t.next=4;break}return t.next=3,this.databaseInitialized();case 3:Object.keys(this.defaultDatabase).forEach(function(t){var r=e.bot.db.get(t).value();"undefined"==typeof r&&e.bot.db.set(t,e.defaultDatabase[t]).value()});case 4:case"end":return t.stop()}},r,this)}));return e}()},{key:"databaseInitialized",value:function(){function e(){return t.apply(this,arguments)}var t=n(regeneratorRuntime.mark(function r(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this._requiresDatabase=!0,!this._requiresDatabase||!this.bot.db){t.next=3;break}return t.abrupt("return",!0);case 3:return t.abrupt("return",new Promise(function(t){e.bot.emitter.on("dbLoaded",t)}));case 4:case"end":return t.stop()}},r,this)}));return e}()}]),e}()},function(e,t,r){"use strict";var n=r(19);for(var o in n)"default"!==o&&function(e){r.d(t,e,function(){return n[e]})}(o)},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=r(9);r.n(o);r.d(t,"a",function(){return i});var i=function a(e){var t=e.user,i=e.channel,u=e.adapter,s=e.id,c=void 0===s?r.i(o.v4)():s;n(this,a),this.user=t,this.channel=i,this.adapter=u,this.id=c}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=r(3);r.d(t,"a",function(){return u});var u=function(e){function t(e){var r=e.text,i=e.whisper,a=void 0!==i&&i;n(this,t);var u=o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return u.text=r.trim(),u.whisper=!!a,u}return i(t,e),t}(a.a)},function(e,t,r){"use strict";var n=r(22),o=r(23),i=r(24);r.o(n,"a")&&r.d(t,"Greetings",function(){return n.a}),r.o(o,"a")&&r.d(t,"Help",function(){return o.a}),r.o(i,"a")&&r.d(t,"Permissions",function(){return i.a})},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",function(){return o});var o=function i(e){var t=arguments.length<=1||void 0===arguments[1]?e:arguments[1];n(this,i),this.name=e,this.id=t}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=r(9),i=(r.n(o),r(4)),a=r(8);r.d(t,"a",function(){return p});var u,s,c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),p=(s=u=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];n(this,e),this.options=t,this.id=t.id||r.i(o.v4)(),this.status=e.STATUS.UNINITIALIZED}return c(e,[{key:"register",value:function(t){if(!t)throw new Error("No bot passed to register; fatal.");if(!this.name)throw new Error("This adapter has no `name` property; some plugins will not work.");this.bot=t,this.status=e.STATUS.CONNECTING,this.listen()}},{key:"listen",value:function(){if(!this.bot)throw new Error("No bot to listen on; fatal.")}},{key:"receive",value:function(e){var t=e.user,r=e.text,n=e.channel,o=e.whisper,a=new i.a({user:t,text:r,channel:n,whisper:o,adapter:this.id});this.bot.emitter.emit("receive-message",a)}},{key:"receiveWhisper",value:function(e){var t=e.user,r=e.text,n=e.channel;r=this.bot.prependNameForWhisper(r),this.receive({user:t,text:r,channel:n,whisper:!0})}},{key:"enter",value:function(e){var t=e.user,r=e.channel,n=new a.a({user:t,channel:r,adapter:this.id,type:a.a.TYPES.ENTER});this.bot.emitter.emit("enter",n)}},{key:"leave",value:function(e){var t=e.user,r=e.channel,n=new a.a({user:t,channel:r,adapter:this.id,type:a.a.TYPES.LEAVE});this.bot.emitter.emit("leave",n)}},{key:"send",value:function(e){console.log(e.text)}},{key:"ping",value:function(){this.pong()}},{key:"pong",value:function(){console.log("Ping received, this.pong() not implemented.")}},{key:"getUserIdByUserName",value:function(e){return console.log("getUserIdByUserName not implemented by this adapter."),e}}]),e}(),u.STATUS={UNINITIALIZED:0,CONNECTING:1,CONNECTED:2,DISCONNECTED:3,RECONNECTING:4,ERROR:5},s)},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=r(3);r.d(t,"a",function(){return c});var u,s,c=(s=u=function(e){function t(e){var r=e.type;n(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return i.type=r,i}return i(t,e),t}(a.a),u.TYPES={ENTER:0,LEAVE:1},s)},function(e,t){e.exports=require("node-uuid")},function(e,t,r){"use strict";var n=r(7),o=r(17);r.d(t,"adapters",function(){return i}),r.o(n,"a")&&r.d(t,"Adapter",function(){return n.a});var i=o},function(e,t,r){"use strict";var n=r(3),o=r(8),i=r(4);r.o(n,"a")&&r.d(t,"Message",function(){return n.a}),r.o(o,"a")&&r.d(t,"PresenceMessage",function(){return o.a}),r.o(i,"a")&&r.d(t,"TextMessage",function(){return i.a})},function(e,t,r){"use strict";var n=r(1),o=r(20),i=r(21),a=r(0),u=r(5);r.d(t,"plugins",function(){return s}),r.o(n,"a")&&r.d(t,"Plugin",function(){return n.a}),r.o(o,"a")&&r.d(t,"EventPlugin",function(){return o.a}),r.o(i,"a")&&r.d(t,"HTTPPlugin",function(){return i.a}),r.o(a,"d")&&r.d(t,"ChatPlugin",function(){return a.d}),r.o(a,"e")&&r.d(t,"respond",function(){return a.e}),r.o(a,"c")&&r.d(t,"listen",function(){return a.c}),r.o(a,"a")&&r.d(t,"help",function(){return a.a}),r.o(a,"b")&&r.d(t,"permissionGroup",function(){return a.b});var s=u},function(e,t){e.exports=require("eventemitter3")},function(e,t){e.exports=require("log")},function(e,t){e.exports=require("superagent")},function(e,t){e.exports=require("superagent-promise-plugin")},function(e,t,r){"use strict";var n=r(18);r.o(n,"a")&&r.d(t,"Shell",function(){return n.a})},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=r(29),u=r.n(a),s=r(7),c=r(6);r.d(t,"a",function(){return v});var p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=function b(e,t,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var o=Object.getPrototypeOf(e);return null===o?void 0:b(o,t,r)}if("value"in n)return n.value;var i=n.get;if(void 0!==i)return i.call(r)},l="SHELL",d=new c.a("shell"),h=["exit","quit","q"],v=function(e){function t(){n(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.name="shell",e.rl=u.a.createInterface({input:process.stdin,output:process.stdout}),e}return i(t,e),p(t,[{key:"prompt",value:function(){var e=this;this.rl.question("Chat: ",function(r){return h.includes(r)?process.exit():(f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"receive",e).call(e,{text:r,channel:l,user:d}),void e.prompt())})}},{key:"register",value:function(e){f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"register",this).call(this,e),this.prompt(),this.status=s.a.STATUS.CONNECTED}},{key:"getUserIdByUserName",value:function(){return"shell"}}]),t}(s.a)},function(e,t,r){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,i){try{var a=t[o](i),u=a.value}catch(s){return void r(s)}return a.done?void e(u):Promise.resolve(u).then(function(e){return n("next",e)},function(e){return n("throw",e)})}return n("next")})}}var o=r(25),i=r.n(o),a=r(28),u=r.n(a),s=r(26),c=r.n(s),p=r(30),f=r.n(p);r.d(t,"deserialize",function(){return l}),r.d(t,"serialize",function(){return d}),r.d(t,"read",function(){return h}),r.d(t,"write",function(){return v}),r.d(t,"readLocal",function(){return b}),r.d(t,"writeLocal",function(){return y}),r.d(t,"DB",function(){return m});var l=function(e){return function(t){if(!t)return{};var r=e.decrypt(t),n=JSON.parse(r);return n}},d=function(e){return function(t){var r=JSON.stringify(t),n=e.encrypt(r);return n}},h=function(e){return function(t,r){return new Promise(function(n,o){e(t).then(function(e){try{n(r(e))}catch(t){o(t)}})})}},v=function(e){return function(t,r,n){return new Promise(function(o,i){try{var a=n(r);e(t,a).then(o,i)}catch(u){i(u)}})}},b=function(e){return new Promise(function(t,r){c.a.ensureFile(e,function(n){return n?r(n):void c.a.readFile(e,"utf8",function(e,n){return e?r(e):t(n)})})})},y=function(e,t){return new Promise(function(r,n){c.a.ensureFile(e,function(o){return o?n(o):void c.a.writeFile(e,t,"utf8",function(e){return e?n(e):r(t)})})})},m=function(){var e=n(regeneratorRuntime.mark(function t(e){var r,n,o,a=e.path,s=e.key,c=e.readFile,p=void 0===c?b:c,m=e.writeFile,g=void 0===m?y:m;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=new i.a(s||name),n=a||"./data/"+name+".json",e.next=4,new u.a(n,{storage:{read:h(p),write:v(g)},format:{deserialize:l(r),serialize:d(r)}});case 4:return o=e.sent,o._.mixin(f.a),e.abrupt("return",o);case 7:case"end":return e.stop()}},t,this)}));return function(t){return e.apply(this,arguments)}}()},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=r(1);r.d(t,"a",function(){return u});var u=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(a.a)},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=r(1);r.d(t,"a",function(){return u});var u=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(a.a)},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t,r,n,o){var i={};return Object.keys(n).forEach(function(e){i[e]=n[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce(function(r,n){return n(e,t,r)||r},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}var u=r(0);r.d(t,"a",function(){return w});var s,c,p,f,l,d,h,v=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),b=["hi","hello","sup","greetings","yo","hey"],y=["goodbye","farwell","bye","later","see ya","cya"],m=function(e){return b.includes(e.text.toLowerCase())},g=function(e){return y.includes(e.text.toLowerCase())},w=(s=r.i(u.a)("Greets you back when you greet the channel."),c=r.i(u.b)("greetings"),p=r.i(u.c)(m),f=r.i(u.a)("Says goodbye when you do."),l=r.i(u.b)("greetings"),d=r.i(u.c)(g),h=function(e){function t(){var e,r,i,a;n(this,t);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return r=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.name="greeting",a=r,o(i,a)}return i(t,e),v(t,[{key:"greeting",value:function(e,t){var r=b[parseInt(Math.random()*b.length)];return r+", "+t.user.name+"!"}},{key:"farewell",value:function(e,t){var r=y[parseInt(Math.random()*y.length)];return r+", "+t.user.name+"!"}}]),t}(u.d),a(h.prototype,"greeting",[s,c,p],Object.getOwnPropertyDescriptor(h.prototype,"greeting"),h.prototype),a(h.prototype,"farewell",[f,l,d],Object.getOwnPropertyDescriptor(h.prototype,"farewell"),h.prototype),h)},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t,r,n,o){var i={};return Object.keys(n).forEach(function(e){i[e]=n[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce(function(r,n){return n(e,t,r)||r},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}var u=r(0);r.d(t,"a",function(){return y});var s,c,p,f,l,d,h,v=function(){function e(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(s){o=!0,i=s}finally{try{!n&&u["return"]&&u["return"]()}finally{if(o)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),b=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),y=(s=r.i(u.a)("/help explains commands."),c=r.i(u.b)("help"),p=r.i(u.e)(/^help$/i),f=r.i(u.a)("/help <search> finds information about a specific command."),l=r.i(u.b)("help"),d=r.i(u.e)(/^help (\w+)$/i),h=function(e){function t(){var e,r,i,a;n(this,t);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return r=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.name="help",a=r,o(i,a)}return i(t,e),b(t,[{key:"pluginHelp",value:function(){return this.bot.plugins.filter(function(e){return e.help&&e.help.length>0}).map(function(e){return e.helpText().join("\n")},[]).join("\n")}},{key:"pluginHelpSearch",value:function(e){var t=v(e,2),r=t[1];return this.bot.plugins.filter(function(e){return e.help&&e.help.length>0}).map(function(e){return e.helpText().filter(function(e){return e.toLowerCase().indexOf(r.toLowerCase())>-1}).join("\n")},[]).join("\n")}}]),t}(u.d),a(h.prototype,"pluginHelp",[s,c,p],Object.getOwnPropertyDescriptor(h.prototype,"pluginHelp"),h.prototype),a(h.prototype,"pluginHelpSearch",[f,l,d],Object.getOwnPropertyDescriptor(h.prototype,"pluginHelpSearch"),h.prototype),h)},function(e,t,r){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,i){try{var a=t[o](i),u=a.value}catch(s){return void r(s)}return a.done?void e(u):Promise.resolve(u).then(function(e){return n("next",e)},function(e){return n("throw",e)})}return n("next")})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,r,n,o){var i={};return Object.keys(n).forEach(function(e){i[e]=n[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce(function(r,n){return n(e,t,r)||r},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}var s=r(0);r.d(t,"a",function(){return U});var c,p,f,l,d,h,v,b,y,m,g,w,O,x,P,j,k,_,E,T,R,C,N,I,q=function(){function e(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(s){o=!0,i=s}finally{try{!n&&u["return"]&&u["return"]()}finally{if(o)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),z=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),S=function L(e,t,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var o=Object.getPrototypeOf(e);return null===o?void 0:L(o,t,r)}if("value"in n)return n.value;var i=n.get;if(void 0!==i)return i.call(r)},U=(c=r.i(s.a)("/permissions authorize admin <password> to authorize yourself as an admin"),p=r.i(s.b)("public"),f=r.i(s.e)(/^permissions authorize admin (\S+)$/i),l=r.i(s.a)("/permissions add user <user> <role> to add a role to a user"),d=r.i(s.b)("role-management"),h=r.i(s.e)(/^permissions add user (\w+) (\w+)$/i),v=r.i(s.a)("/permissions view user <user> to view roles given to a user"),b=r.i(s.b)("role-management"),y=r.i(s.e)(/^permissions view user (\w+)$/i),m=r.i(s.a)("/permissions remove user <user> <role> to remove a role from a user"),g=r.i(s.b)("role-management"),w=r.i(s.e)(/^permissions remove user (\w+) (\w+)$/i),O=r.i(s.a)("/permissions add role <permissiongroup> <role> to allow access to a permissionGroup"),x=r.i(s.b)("role-management"),P=r.i(s.e)(/^permissions add role (\S+) (\w+)$/i),j=r.i(s.a)("/permissions remove group <permissionGroup> <role> to allow access to a permissionGroup"),k=r.i(s.b)("role-management"),_=r.i(s.e)(/^permissions remove role (\S+) (\w+)$/i),E=r.i(s.a)("/permissions view group <permissionGroup> to view roles with access to commands under that permissionGroup"),T=r.i(s.b)("role-management"),R=r.i(s.e)(/^permissions view group (\S+)$/i),I=N=function(e){function t(e){o(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return r.name="permissions",r.defaultDatabase={permissions:{}},e&&(r.adminPassword=e.adminPassword),r}return a(t,e),z(t,[{key:"register",value:function(e){S(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"register",this).call(this,e),this.adminPassword||e.log.error("No adminPassword provided to Permissions plugin")}},{key:"admin",value:function(){function e(e,t){return r.apply(this,arguments)}var r=n(regeneratorRuntime.mark(function o(e,r){var n,i=q(e,2),a=i[1];return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.databaseInitialized();case 2:if(!this.adminPassword||a!==this.adminPassword){e.next=7;break}return n=t.nameToId(r.user.id),this.bot.db.set("permissions.users."+n+".roles.admin",!0).value(),this.bot.db.write(),e.abrupt("return","User authorized as admin.");case 7:case"end":return e.stop()}},o,this)}));return e}()},{key:"addRoleToUser",value:function(){function e(e,t){return r.apply(this,arguments)}var r=n(regeneratorRuntime.mark(function o(e,r){var n,i=q(e,3),a=(i[0],i[1]),u=i[2];return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u=t.nameToId(u),e.next=3,this.databaseInitialized();case 3:if(n=t.nameToId(this.bot.adapters[r.adapter].getUserIdByUserName(a)),!n){e.next=8;break}return this.bot.db.set("permissions.users."+n+".roles."+u,!0).value(),this.bot.db.write(),e.abrupt("return",a+" added to role "+u+".");case 8:case"end":return e.stop()}},o,this)}));return e}()},{key:"viewUser",value:function(){function e(e,t){return r.apply(this,arguments)}var r=n(regeneratorRuntime.mark(function o(e,r){var n,i,a=q(e,2),u=(a[0],a[1]);return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.databaseInitialized();case 2:if(n=t.nameToId(this.bot.adapters[r.adapter].getUserIdByUserName(u)),!n){e.next=6;break}return i=Object.keys(this.bot.db.get("permissions.users."+n+".roles").value()),e.abrupt("return",i.join(", "));case 6:case"end":return e.stop()}},o,this)}));return e}()},{key:"removeRoleFromUser",
value:function(){function e(e,t){return r.apply(this,arguments)}var r=n(regeneratorRuntime.mark(function o(e,r){var n,i,a=q(e,3),u=(a[0],a[1]),s=a[2];return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.nameToId(s),e.next=3,this.databaseInitialized();case 3:if(n=t.nameToId(this.bot.adapters[r.adapter].getUserIdByUserName(u)),!n){e.next=10;break}return i=this.bot.db.get("permissions.users."+n+".roles").value(),delete i[s],this.bot.db.set("permissions.users."+n+".roles",i).value(),this.bot.db.write(),e.abrupt("return",u+" removed from role "+s+".");case 10:case"end":return e.stop()}},o,this)}));return e}()},{key:"addRoleToGroup",value:function(){function e(e){return r.apply(this,arguments)}var r=n(regeneratorRuntime.mark(function o(e){var r=q(e,3),n=r[1],i=r[2];return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.nameToId(i),e.next=3,this.databaseInitialized();case 3:return this.bot.db.set("permissions.groups."+n+"."+i,!0).value(),this.bot.db.write(),e.abrupt("return",'role "'+i+'" given permission to commands under group "'+n+'".');case 6:case"end":return e.stop()}},o,this)}));return e}()},{key:"removeRoleFromGroup",value:function(){function e(e){return r.apply(this,arguments)}var r=n(regeneratorRuntime.mark(function o(e){var r,n=q(e,3),i=n[1],a=n[2];return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.nameToId(a),e.next=3,this.databaseInitialized();case 3:return r=this.bot.db.get("permissions.groups."+i).value(),delete r[a],this.bot.db.set("permissions.groups."+i,r).value(),this.bot.db.write(),e.abrupt("return",'role "'+a+'" removed permission to commands under group "'+i+'".');case 8:case"end":return e.stop()}},o,this)}));return e}()},{key:"viewGroup",value:function(){function e(e){return t.apply(this,arguments)}var t=n(regeneratorRuntime.mark(function r(e){var t,n=q(e,2),o=n[1];return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.databaseInitialized();case 2:return t=Object.keys(this.bot.db.get("permissions.groups."+o).value()),e.abrupt("return",t.join(", "));case 4:case"end":return e.stop()}},r,this)}));return e}()}]),t}(s.d),N.nameToId=function(e){return e.replace(/[^\w]/g,"").toLowerCase()},C=I,u(C.prototype,"admin",[c,p,f],Object.getOwnPropertyDescriptor(C.prototype,"admin"),C.prototype),u(C.prototype,"addRoleToUser",[l,d,h],Object.getOwnPropertyDescriptor(C.prototype,"addRoleToUser"),C.prototype),u(C.prototype,"viewUser",[v,b,y],Object.getOwnPropertyDescriptor(C.prototype,"viewUser"),C.prototype),u(C.prototype,"removeRoleFromUser",[m,g,w],Object.getOwnPropertyDescriptor(C.prototype,"removeRoleFromUser"),C.prototype),u(C.prototype,"addRoleToGroup",[O,x,P],Object.getOwnPropertyDescriptor(C.prototype,"addRoleToGroup"),C.prototype),u(C.prototype,"removeRoleFromGroup",[j,k,_],Object.getOwnPropertyDescriptor(C.prototype,"removeRoleFromGroup"),C.prototype),u(C.prototype,"viewGroup",[E,T,R],Object.getOwnPropertyDescriptor(C.prototype,"viewGroup"),C.prototype),C)},function(e,t){e.exports=require("cryptr")},function(e,t){e.exports=require("fs-extra")},function(e,t){e.exports=require("lodash/array")},function(e,t){e.exports=require("lowdb")},function(e,t){e.exports=require("readline")},function(e,t){e.exports=require("underscore-db")},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=r(13),i=r.n(o),a=r(14),u=r.n(a),s=r(15),c=r.n(s),p=r(16),f=r.n(p),l=r(5),d=r(2),h=r(10),v=r(11),b=r(12),y=r(6);r.d(t,"Exobot",function(){return j}),r.d(t,"LogLevels",function(){return k});for(var m in h)["Exobot","User","LogLevels","default"].indexOf(m)<0&&function(e){r.d(t,e,function(){return h[e]})}(m);for(var m in v)["Exobot","User","LogLevels","default"].indexOf(m)<0&&function(e){r.d(t,e,function(){return v[e]})}(m);for(var m in b)["Exobot","User","LogLevels","default"].indexOf(m)<0&&function(e){r.d(t,e,function(){return b[e]})}(m);for(var m in d)["Exobot","User","LogLevels","default"].indexOf(m)<0&&function(e){r.d(t,e,function(){return d[e]})}(m);r.o(y,"a")&&r.d(t,"User",function(){return y.a});var g,w,O,x=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();f.a.Promise=Promise;var P=f.a.patch(c.a),j=(w=g=function(){function e(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];n(this,e),O.call(this),this.name=t,this.alias=r.alias,this.emitter=new i.a,this.http=P,this.requirePermissions=r.requirePermissions,this.initLog(r.logLevel||u.a.WARNING),this.initAdapters(r.adapters),this.initPlugins(r.plugins);var o=r.dbPath||"./data/"+t+".json";this.initDB(r.key,o,r.readFile,r.writeFile)}return x(e,[{key:"addPlugin",value:function(e){e.register(this),this.plugins.push(e)}},{key:"addAdapter",value:function(e){var t=e.name;this.getAdapterByName(t)&&this.log.warning('Multiple "'+t+'" adapters were initialized.'),e.register(this),this.adapters[e.id]=e}},{key:"prependNameForWhisper",value:function(e){return e.slice(0,this.name.length).toLowerCase()!==this.name.toLowerCase()&&e.slice(0,this.alias.length).toLowerCase()!==this.alias.toLowerCase()&&(e=this.name+" "+e),e}},{key:"send",value:function(e){if(e.text){var t=this.getAdapterByMessage(e);return t?void t.send(e):void this.bot.log.warning("Message sent with invalid adapter: "+e.adapter)}}},{key:"getAdapterByMessage",value:function(e){return this.adapters[e.adapter]}},{key:"getAdapterByName",value:function(e){var t=this;return Object.keys(this.adapters).map(function(e){return t.adapters[e]}).find(function(t){return t.name.toLowerCase()===e.toLowerCase()})}}]),e}(),O=function(){var e=this;this.plugins=[],this.adapters={},this.initAdapters=function(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0];t.forEach(function(t){return e.addAdapter(t)})},this.initPlugins=function(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0];t.forEach(function(t){e.addPlugin(t),t instanceof l.Permissions&&(e.usePermissions=!0)})},this.initLog=function(t){var r=new u.a(t||u.a.WARNING);e.log=r,e.logLevel=t,t===u.a.DEBUG&&setInterval(e.logProcess,1e4)},this.initDB=function(t,n,o,i){return t?void r.i(d.DB)({key:t,readFile:o,writeFile:i,path:n,emitter:e.emitter}).then(function(t){e.db=t,e.emitter.emit("dbLoaded",t)},e.log.critical):void e.log.critical("Pass options.key in to bot initializer. Database not initializing.")},this.logProcess=function(){e.log.debug(process.memoryUsage(),process.cpuUsage())}},w),k=u.a}])});
//# sourceMappingURL=exobot.js.map