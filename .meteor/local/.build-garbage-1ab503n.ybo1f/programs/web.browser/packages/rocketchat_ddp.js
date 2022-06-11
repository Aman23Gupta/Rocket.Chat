//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:ddp":{"client":{"index.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rocketchat_ddp/client/index.js                           //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
let ClientStream;
module.link("meteor/socket-stream-client", {
  ClientStream(v) {
    ClientStream = v;
  }

}, 0);
const {
  _launchConnection
} = ClientStream.prototype;

ClientStream.prototype.allowConnection = function () {
  _launchConnection.call(this);

  ClientStream.prototype._launchConnection = _launchConnection;
};

ClientStream.prototype._launchConnection = function () {};
///////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/rocketchat:ddp/client/index.js");

/* Exports */
Package._define("rocketchat:ddp", exports);

})();
