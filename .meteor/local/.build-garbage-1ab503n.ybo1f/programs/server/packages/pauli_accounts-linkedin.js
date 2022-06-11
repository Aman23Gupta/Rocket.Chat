(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var Accounts = Package['accounts-base'].Accounts;
var HTTP = Package.http.HTTP;
var HTTPInternals = Package.http.HTTPInternals;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

var require = meteorInstall({"node_modules":{"meteor":{"pauli:accounts-linkedin":{"notice.js":function module(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/pauli_accounts-linkedin/notice.js                                                            //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
if (Package['accounts-ui'] && !Package['service-configuration'] && !Package.hasOwnProperty('pauli:linkedin-config-ui')) {
  console.warn("Note: You're using accounts-ui and pauli:accounts-linkedin,\n" + "but didn't install the configuration UI for the Linkedin\n" + 'OAuth. You can install it with:\n' + '\n' + '    meteor add pauli:linkedin-config-ui' + '\n');
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"linkedin.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/pauli_accounts-linkedin/linkedin.js                                                          //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
let Accounts;
module.link("meteor/accounts-base", {
  Accounts(v) {
    Accounts = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let Linkedin;
module.link("meteor/pauli:linkedin-oauth", {
  Linkedin(v) {
    Linkedin = v;
  }

}, 2);
Accounts.oauth.registerService('linkedin');

if (Meteor.isClient) {
  const loginWithLinkedin = function (options, callback) {
    // support a callback without options
    if (!callback && typeof options === 'function') {
      callback = options;
      options = null;
    }

    const credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//# sourceURL=meteor://💻app/packages/pauli_accounts-linkedin.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvcGF1bGk6YWNjb3VudHMtbGlua2VkaW4vbm90aWNlLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9wYXVsaTphY2NvdW50cy1saW5rZWRpbi9saW5rZWRpbi5qcyJdLCJuYW1lcyI6WyJQYWNrYWdlIiwiaGFzT3duUHJvcGVydHkiLCJjb25zb2xlIiwid2FybiIsIkFjY291bnRzIiwibW9kdWxlIiwibGluayIsInYiLCJNZXRlb3IiLCJMaW5rZWRpbiIsIm9hdXRoIiwicmVnaXN0ZXJTZXJ2aWNlIiwiaXNDbGllbnQiLCJsb2dpbldpdGhMaW5rZWRpbiIsIm9wdGlvbnMiLCJjYWxsYmFjayIsImNyZWRlbnRpYWxSZXF1ZXN0Q29tcGxldGVDYWxsYmFjayIsImNyZWRlbnRpYWxSZXF1ZXN0Q29tcGxldGVIYW5kbGVyIiwicmVxdWVzdENyZWRlbnRpYWwiLCJyZWdpc3RlckNsaWVudExvZ2luRnVuY3Rpb24iLCJhcmdzIiwiYXBwbHlMb2dpbkZ1bmN0aW9uIiwiYWRkQXV0b3B1Ymxpc2hGaWVsZHMiLCJmb3JMb2dnZWRJblVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE9BQU8sQ0FBQyxhQUFELENBQVAsSUFBMEIsQ0FBQ0EsT0FBTyxDQUFDLHVCQUFELENBQWxDLElBQStELENBQUNBLE9BQU8sQ0FBQ0MsY0FBUixDQUF1QiwwQkFBdkIsQ0FBcEUsRUFBd0g7QUFDdkhDLFNBQU8sQ0FBQ0MsSUFBUixDQUNDLGtFQUNDLDREQURELEdBRUMsbUNBRkQsR0FHQyxJQUhELEdBSUMseUNBSkQsR0FLQyxJQU5GO0FBUUEsQzs7Ozs7Ozs7Ozs7QUNURCxJQUFJQyxRQUFKO0FBQWFDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLHNCQUFaLEVBQW1DO0FBQUNGLFVBQVEsQ0FBQ0csQ0FBRCxFQUFHO0FBQUNILFlBQVEsR0FBQ0csQ0FBVDtBQUFXOztBQUF4QixDQUFuQyxFQUE2RCxDQUE3RDtBQUFnRSxJQUFJQyxNQUFKO0FBQVdILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGVBQVosRUFBNEI7QUFBQ0UsUUFBTSxDQUFDRCxDQUFELEVBQUc7QUFBQ0MsVUFBTSxHQUFDRCxDQUFQO0FBQVM7O0FBQXBCLENBQTVCLEVBQWtELENBQWxEO0FBQXFELElBQUlFLFFBQUo7QUFBYUosTUFBTSxDQUFDQyxJQUFQLENBQVksNkJBQVosRUFBMEM7QUFBQ0csVUFBUSxDQUFDRixDQUFELEVBQUc7QUFBQ0UsWUFBUSxHQUFDRixDQUFUO0FBQVc7O0FBQXhCLENBQTFDLEVBQW9FLENBQXBFO0FBSTFKSCxRQUFRLENBQUNNLEtBQVQsQ0FBZUMsZUFBZixDQUErQixVQUEvQjs7QUFFQSxJQUFJSCxNQUFNLENBQUNJLFFBQVgsRUFBcUI7QUFDcEIsUUFBTUMsaUJBQWlCLEdBQUcsVUFBVUMsT0FBVixFQUFtQkMsUUFBbkIsRUFBNkI7QUFDdEQ7QUFDQSxRQUFJLENBQUNBLFFBQUQsSUFBYSxPQUFPRCxPQUFQLEtBQW1CLFVBQXBDLEVBQWdEO0FBQy9DQyxjQUFRLEdBQUdELE9BQVg7QUFDQUEsYUFBTyxHQUFHLElBQVY7QUFDQTs7QUFDRCxVQUFNRSxpQ0FBaUMsR0FBR1osUUFBUSxDQUFDTSxLQUFULENBQWVPLGdDQUFmLENBQWdERixRQUFoRCxDQUExQztBQUNBTixZQUFRLENBQUNTLGlCQUFULENBQTJCSixPQUEzQixFQUFvQ0UsaUNBQXBDO0FBQ0EsR0FSRDs7QUFTQVosVUFBUSxDQUFDZSwyQkFBVCxDQUFxQyxVQUFyQyxFQUFpRE4saUJBQWpEOztBQUVBTCxRQUFNLENBQUNLLGlCQUFQLEdBQTJCO0FBQUEsc0NBQUlPLElBQUo7QUFBSUEsVUFBSjtBQUFBOztBQUFBLFdBQWFoQixRQUFRLENBQUNpQixrQkFBVCxDQUE0QixVQUE1QixFQUF3Q0QsSUFBeEMsQ0FBYjtBQUFBLEdBQTNCO0FBQ0EsQ0FiRCxNQWFPO0FBQ05oQixVQUFRLENBQUNrQixvQkFBVCxDQUE4QjtBQUM3QkMsbUJBQWUsRUFBRSxDQUFDLG1CQUFEO0FBRFksR0FBOUI7QUFHQSxDIiwiZmlsZSI6Ii9wYWNrYWdlcy9wYXVsaV9hY2NvdW50cy1saW5rZWRpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImlmIChQYWNrYWdlWydhY2NvdW50cy11aSddICYmICFQYWNrYWdlWydzZXJ2aWNlLWNvbmZpZ3VyYXRpb24nXSAmJiAhUGFja2FnZS5oYXNPd25Qcm9wZXJ0eSgncGF1bGk6bGlua2VkaW4tY29uZmlnLXVpJykpIHtcblx0Y29uc29sZS53YXJuKFxuXHRcdFwiTm90ZTogWW91J3JlIHVzaW5nIGFjY291bnRzLXVpIGFuZCBwYXVsaTphY2NvdW50cy1saW5rZWRpbixcXG5cIiArXG5cdFx0XHRcImJ1dCBkaWRuJ3QgaW5zdGFsbCB0aGUgY29uZmlndXJhdGlvbiBVSSBmb3IgdGhlIExpbmtlZGluXFxuXCIgK1xuXHRcdFx0J09BdXRoLiBZb3UgY2FuIGluc3RhbGwgaXQgd2l0aDpcXG4nICtcblx0XHRcdCdcXG4nICtcblx0XHRcdCcgICAgbWV0ZW9yIGFkZCBwYXVsaTpsaW5rZWRpbi1jb25maWctdWknICtcblx0XHRcdCdcXG4nLFxuXHQpO1xufVxuIiwiaW1wb3J0IHsgQWNjb3VudHMgfSBmcm9tICdtZXRlb3IvYWNjb3VudHMtYmFzZSc7XG5pbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IExpbmtlZGluIH0gZnJvbSAnbWV0ZW9yL3BhdWxpOmxpbmtlZGluLW9hdXRoJztcblxuQWNjb3VudHMub2F1dGgucmVnaXN0ZXJTZXJ2aWNlKCdsaW5rZWRpbicpO1xuXG5pZiAoTWV0ZW9yLmlzQ2xpZW50KSB7XG5cdGNvbnN0IGxvZ2luV2l0aExpbmtlZGluID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG5cdFx0Ly8gc3VwcG9ydCBhIGNhbGxiYWNrIHdpdGhvdXQgb3B0aW9uc1xuXHRcdGlmICghY2FsbGJhY2sgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNhbGxiYWNrID0gb3B0aW9ucztcblx0XHRcdG9wdGlvbnMgPSBudWxsO1xuXHRcdH1cblx0XHRjb25zdCBjcmVkZW50aWFsUmVxdWVzdENvbXBsZXRlQ2FsbGJhY2sgPSBBY2NvdW50cy5vYXV0aC5jcmVkZW50aWFsUmVxdWVzdENvbXBsZXRlSGFuZGxlcihjYWxsYmFjayk7XG5cdFx0TGlua2VkaW4ucmVxdWVzdENyZWRlbnRpYWwob3B0aW9ucywgY3JlZGVudGlhbFJlcXVlc3RDb21wbGV0ZUNhbGxiYWNrKTtcblx0fTtcblx0QWNjb3VudHMucmVnaXN0ZXJDbGllbnRMb2dpbkZ1bmN0aW9uKCdsaW5rZWRpbicsIGxvZ2luV2l0aExpbmtlZGluKTtcblxuXHRNZXRlb3IubG9naW5XaXRoTGlua2VkaW4gPSAoLi4uYXJncykgPT4gQWNjb3VudHMuYXBwbHlMb2dpbkZ1bmN0aW9uKCdsaW5rZWRpbicsIGFyZ3MpO1xufSBlbHNlIHtcblx0QWNjb3VudHMuYWRkQXV0b3B1Ymxpc2hGaWVsZHMoe1xuXHRcdGZvckxvZ2dlZEluVXNlcjogWydzZXJ2aWNlcy5saW5rZWRpbiddLFxuXHR9KTtcbn1cbiJdfQ==
