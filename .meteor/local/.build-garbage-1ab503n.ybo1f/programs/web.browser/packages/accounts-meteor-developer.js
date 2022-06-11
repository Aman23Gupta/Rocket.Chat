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
var MeteorDeveloperAccounts = Package['meteor-developer-oauth'].MeteorDeveloperAccounts;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

var require = meteorInstall({"node_modules":{"meteor":{"accounts-meteor-developer":{"notice.js":function module(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/accounts-meteor-developer/notice.js                                                          //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
if (Package['accounts-ui'] && !Package['service-configuration'] && !Object.prototype.hasOwnProperty.call(Package, 'meteor-developer-config-ui')) {
  console.warn("Note: You're using accounts-ui and accounts-meteor-developer,\n" + "but didn't install the configuration UI for the Meteor Developer\n" + "Accounts OAuth. You can install it with:\n" + "\n" + "    meteor add meteor-developer-config-ui" + "\n");
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"meteor-developer.js":function module(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/accounts-meteor-developer/meteor-developer.js                                                //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
Accounts.oauth.registerService("meteor-developer");

if (Meteor.isClient) {
  const loginWithMeteorDeveloperAccount = (options, callback) => {
    // support a callback without options
    if (!callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    const credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    MeteorDeveloperAccounts.requestCredential(options, credentialRequestCompleteCallback);
  };

  Accounts.registerClientLoginFunction('meteor-developer', loginWithMeteorDeveloperAccount);

  Meteor.loginWithMeteorDeveloperAccount = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Accounts.applyLoginFunction('meteor-developer', args);
  };
} else {
  Accounts.addAutopublishFields({
    // publish all fields including access token, which can legitimately be used
    // from the client (if transmitted over ssl or on localhost).
    forLoggedInUser: ['services.meteor-developer'],
    forOtherUsers: ['services.meteor-developer.username', 'services.meteor-developer.profile', 'services.meteor-developer.id']
  });
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

require("/node_modules/meteor/accounts-meteor-developer/notice.js");
require("/node_modules/meteor/accounts-meteor-developer/meteor-developer.js");

/* Exports */
Package._define("accounts-meteor-developer");

})();
