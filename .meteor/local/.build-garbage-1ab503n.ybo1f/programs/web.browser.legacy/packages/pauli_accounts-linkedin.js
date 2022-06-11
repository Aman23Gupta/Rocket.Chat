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
var Accounts = Package['accounts-base'].Accounts;
var HTTP = Package.http.HTTP;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package.modules.meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"pauli:accounts-linkedin":{"notice.js":function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/pauli_accounts-linkedin/notice.js                                                          //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
if (Package['accounts-ui'] && !Package['service-configuration'] && !Package.hasOwnProperty('pauli:linkedin-config-ui')) {
  console.warn("Note: You're using accounts-ui and pauli:accounts-linkedin,\n" + "but didn't install the configuration UI for the Linkedin\n" + 'OAuth. You can install it with:\n' + '\n' + '    meteor add pauli:linkedin-config-ui' + '\n');
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"linkedin.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/pauli_accounts-linkedin/linkedin.js                                                        //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
var Accounts;
module.link("meteor/accounts-base", {
  Accounts: function (v) {
    Accounts = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 1);
var Linkedin;
module.link("meteor/pauli:linkedin-oauth", {
  Linkedin: function (v) {
    Linkedin = v;
  }
}, 2);
Accounts.oauth.registerService('linkedin');

if (Meteor.isClient) {
  var loginWithLinkedin = function (options, callback) {
    // support a callback without options
    if (!callback && typeof options === 'function') {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Linkedin.requestCredential(options, credentialRequestCompleteCallback);
  };

  Accounts.registerClientLoginFunction('linkedin', loginWithLinkedin);

  Meteor.loginWithLinkedin = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Accounts.applyLoginFunction('linkedin', args);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.linkedin']
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

require("/node_modules/meteor/pauli:accounts-linkedin/notice.js");
require("/node_modules/meteor/pauli:accounts-linkedin/linkedin.js");

/* Exports */
Package._define("pauli:accounts-linkedin");

})();
