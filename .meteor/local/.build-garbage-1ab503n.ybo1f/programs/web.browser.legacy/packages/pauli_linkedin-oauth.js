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
var Random = Package.random.Random;
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package.modules.meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"pauli:linkedin-oauth":{"linkedin-client.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// packages/pauli_linkedin-oauth/linkedin-client.js                                  //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
var _excluded = ["requestPermissions"];

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
module.export({
  Linkedin: function () {
    return Linkedin;
  }
});
var ServiceConfiguration;
module.link("meteor/service-configuration", {
  ServiceConfiguration: function (v) {
    ServiceConfiguration = v;
  }
}, 0);
var Random;
module.link("meteor/random", {
  Random: function (v) {
    Random = v;
  }
}, 1);
var OAuth;
module.link("meteor/oauth", {
  OAuth: function (v) {
    OAuth = v;
  }
}, 2);
var Linkedin = {};

// Request LinkedIn credentials for the user
// @param options {optional}
// @param credentialRequestCompleteCallback {Function} Callback function to call on
//   completion. Takes one argument, credentialToken on success, or Error on
//   error.
Linkedin.requestCredential = function (options, credentialRequestCompleteCallback) {
  // support both (options, callback) and (callback).
  if (!credentialRequestCompleteCallback && typeof options === 'function') {
    credentialRequestCompleteCallback = options;
    options = {};
  }

  var config = ServiceConfiguration.configurations.findOne({
    service: 'linkedin'
  });

  if (!config) {
    credentialRequestCompleteCallback && credentialRequestCompleteCallback(new ServiceConfiguration.ConfigError('Service not configured'));
    return;
  }

  var credentialToken = Random.secret();
  var scope;

  var _options = options,
      requestPermissions = _options.requestPermissions,
      otherOptionsToPassThrough = _objectWithoutProperties(_options, _excluded);

  if (requestPermissions) {
    scope = requestPermissions.join('+');
  } else {
    // If extra permissions not passed, we need to request basic, available to all
    scope = 'r_emailaddress+r_liteprofile';
  }

  var loginStyle = OAuth._loginStyle('linkedin', config, options);

  if (!otherOptionsToPassThrough.popupOptions) {
    // the default dimensions (https://github.com/meteor/meteor/blob/release-1.6.1/packages/oauth/oauth_browser.js#L15) don't play well with the content shown by linkedin
    // so override popup dimensions to something appropriate (might have to change if LinkedIn login page changes its layout)
    otherOptionsToPassThrough.popupOptions = {
      width: 390,
      height: 628
    };
  }

  var loginUrl = "https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=" + config.clientId + "&redirect_uri=" + OAuth._redirectUri('linkedin', config) + "&state=" + OAuth._stateParam(loginStyle, credentialToken) + "&scope=" + scope;
  OAuth.launchLogin(_objectSpread({
    credentialRequestCompleteCallback: credentialRequestCompleteCallback,
    credentialToken: credentialToken,
    loginService: 'linkedin',
    loginStyle: loginStyle,
    loginUrl: loginUrl
  }, otherOptionsToPassThrough));
};
///////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/pauli:linkedin-oauth/linkedin-client.js");

/* Exports */
Package._define("pauli:linkedin-oauth", exports);

})();
