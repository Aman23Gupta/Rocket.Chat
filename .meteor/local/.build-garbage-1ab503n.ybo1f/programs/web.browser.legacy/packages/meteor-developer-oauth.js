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
var OAuth = Package.oauth.OAuth;
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
var Random = Package.random.Random;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package.modules.meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

/* Package-scope variables */
var MeteorDeveloperAccounts;

var require = meteorInstall({"node_modules":{"meteor":{"meteor-developer-oauth":{"meteor_developer_common.js":function module(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/meteor-developer-oauth/meteor_developer_common.js                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
MeteorDeveloperAccounts = {};
MeteorDeveloperAccounts._server = "https://www.meteor.com"; // Options are:
//  - developerAccountsServer: defaults to "https://www.meteor.com"

MeteorDeveloperAccounts._config = function (options) {
  if (options.developerAccountsServer) {
    MeteorDeveloperAccounts._server = options.developerAccountsServer;
  }
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"meteor_developer_client.js":function module(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/meteor-developer-oauth/meteor_developer_client.js                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// Request Meteor developer account credentials for the user
// @param credentialRequestCompleteCallback {Function} Callback function to call on
//   completion. Takes one argument, credentialToken on success, or Error on
//   error.
var requestCredential = function (options, credentialRequestCompleteCallback) {
  // support a callback without options
  if (!credentialRequestCompleteCallback && typeof options === "function") {
    credentialRequestCompleteCallback = options;
    options = null;
  }

  var config = ServiceConfiguration.configurations.findOne({
    service: 'meteor-developer'
  });

  if (!config) {
    credentialRequestCompleteCallback && credentialRequestCompleteCallback(new ServiceConfiguration.ConfigError());
    return;
  }

  var credentialToken = Random.secret();

  var loginStyle = OAuth._loginStyle('meteor-developer', config, options);

  var loginUrl = MeteorDeveloperAccounts._server + "/oauth2/authorize?" + ("state=" + OAuth._stateParam(loginStyle, credentialToken, options && options.redirectUrl)) + "&response_type=code&" + ("client_id=" + config.clientId + (options && options.details ? "&details=" + (options && options.details) : ''));
  /**
   * @deprecated in 1.3.0
   */

  if (options && options.userEmail && !options.loginHint) {
    options.loginHint = options.userEmail;
    delete options.userEmail;
  }

  if (options && options.loginHint) {
    loginUrl += "&user_email=" + encodeURIComponent(options.loginHint);
  }

  loginUrl += "&redirect_uri=" + OAuth._redirectUri('meteor-developer', config);
  OAuth.launchLogin({
    loginService: "meteor-developer",
    loginStyle: loginStyle,
    loginUrl: loginUrl,
    credentialRequestCompleteCallback: credentialRequestCompleteCallback,
    credentialToken: credentialToken,
    popupOptions: {
      width: 497,
      height: 749
    }
  });
};

MeteorDeveloperAccounts.requestCredential = requestCredential;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

require("/node_modules/meteor/meteor-developer-oauth/meteor_developer_common.js");
require("/node_modules/meteor/meteor-developer-oauth/meteor_developer_client.js");

/* Exports */
Package._define("meteor-developer-oauth", {
  MeteorDeveloperAccounts: MeteorDeveloperAccounts
});

})();
