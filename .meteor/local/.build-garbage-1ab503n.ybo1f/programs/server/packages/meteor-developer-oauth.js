(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var OAuth = Package.oauth.OAuth;
var HTTP = Package.http.HTTP;
var HTTPInternals = Package.http.HTTPInternals;
var ECMAScript = Package.ecmascript.ECMAScript;
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var MeteorDeveloperAccounts;

var require = meteorInstall({"node_modules":{"meteor":{"meteor-developer-oauth":{"meteor_developer_common.js":function module(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/meteor-developer-oauth/meteor_developer_common.js                                                   //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
MeteorDeveloperAccounts = {};
MeteorDeveloperAccounts._server = "https://www.meteor.com"; // Options are:
//  - developerAccountsServer: defaults to "https://www.meteor.com"

MeteorDeveloperAccounts._config = options => {
  if (options.developerAccountsServer) {
    MeteorDeveloperAccounts._server = options.developerAccountsServer;
  }
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"meteor_developer_server.js":function module(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/meteor-developer-oauth/meteor_developer_server.js                                                   //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
OAuth.registerService("meteor-developer", 2, null, query => {
  const response = getTokens(query);
  const {
    accessToken
  } = response;
  const identity = getIdentity(accessToken);
  const serviceData = {
    accessToken: OAuth.sealSecret(accessToken),
    expiresAt: +new Date() + 1000 * response.expiresIn
  };
  Object.assign(serviceData, identity); // only set the token in serviceData if it's there. this ensures
  // that we don't lose old ones (since we only get this on the first
  // log in attempt)

  if (response.refreshToken) serviceData.refreshToken = OAuth.sealSecret(response.refreshToken);
  return {
    serviceData,
    options: {
      profile: {
        name: serviceData.username
      }
    } // XXX use username for name until meteor accounts has a profile with a name

  };
}); // returns an object containing:
// - accessToken
// - expiresIn: lifetime of token in seconds
// - refreshToken, if this is the first authorization request and we got a
//   refresh token from the server

const getTokens = query => {
  const config = ServiceConfiguration.configurations.findOne({
    service: 'meteor-developer'
  });
  if (!config) throw new ServiceConfiguration.ConfigError();
  let response;

  try {
    response = HTTP.post(MeteorDeveloperAccounts._server + "/oauth2/token", {
      params: {
        grant_type: "authorization_code",
        code: query.code,
        client_id: config.clientId,
        client_secret: OAuth.openSecret(config.secret),
        redirect_uri: OAuth._redirectUri('meteor-developer', config)
      }
    });
  } catch (err) {
    throw Object.assign(new Error("Failed to complete OAuth handshake with Meteor developer accounts. " + err.message), {
      response: err.response
    });
  }

  if (!response.data || response.data.error) {
    // if the http response was a json object with an error attribute
    throw new Error("Failed to complete OAuth handshake with Meteor developer accounts. " + (response.data ? response.data.error : "No response data"));
  } else {
    return {
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token,
      expiresIn: response.data.expires_in
    };
  }
};

const getIdentity = accessToken => {
  try {
    return HTTP.get("".concat(MeteorDeveloperAccounts._server, "/api/v1/identity"), {
      headers: {
        Authorization: "Bearer ".concat(accessToken)
      }
    }).data;
  } catch (err) {
    throw Object.assign(new Error("Failed to fetch identity from Meteor developer accounts. " + err.message), {
      response: err.response
    });
  }
};

MeteorDeveloperAccounts.retrieveCredential = (credentialToken, credentialSecret) => OAuth.retrieveCredential(credentialToken, credentialSecret);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

require("/node_modules/meteor/meteor-developer-oauth/meteor_developer_common.js");
require("/node_modules/meteor/meteor-developer-oauth/meteor_developer_server.js");

/* Exports */
Package._define("meteor-developer-oauth", {
  MeteorDeveloperAccounts: MeteorDeveloperAccounts
});

})();

//# sourceURL=meteor://💻app/packages/meteor-developer-oauth.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvbWV0ZW9yLWRldmVsb3Blci1vYXV0aC9tZXRlb3JfZGV2ZWxvcGVyX2NvbW1vbi5qcyIsIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvbWV0ZW9yLWRldmVsb3Blci1vYXV0aC9tZXRlb3JfZGV2ZWxvcGVyX3NlcnZlci5qcyJdLCJuYW1lcyI6WyJNZXRlb3JEZXZlbG9wZXJBY2NvdW50cyIsIl9zZXJ2ZXIiLCJfY29uZmlnIiwib3B0aW9ucyIsImRldmVsb3BlckFjY291bnRzU2VydmVyIiwiT0F1dGgiLCJyZWdpc3RlclNlcnZpY2UiLCJxdWVyeSIsInJlc3BvbnNlIiwiZ2V0VG9rZW5zIiwiYWNjZXNzVG9rZW4iLCJpZGVudGl0eSIsImdldElkZW50aXR5Iiwic2VydmljZURhdGEiLCJzZWFsU2VjcmV0IiwiZXhwaXJlc0F0IiwiRGF0ZSIsImV4cGlyZXNJbiIsIk9iamVjdCIsImFzc2lnbiIsInJlZnJlc2hUb2tlbiIsInByb2ZpbGUiLCJuYW1lIiwidXNlcm5hbWUiLCJjb25maWciLCJTZXJ2aWNlQ29uZmlndXJhdGlvbiIsImNvbmZpZ3VyYXRpb25zIiwiZmluZE9uZSIsInNlcnZpY2UiLCJDb25maWdFcnJvciIsIkhUVFAiLCJwb3N0IiwicGFyYW1zIiwiZ3JhbnRfdHlwZSIsImNvZGUiLCJjbGllbnRfaWQiLCJjbGllbnRJZCIsImNsaWVudF9zZWNyZXQiLCJvcGVuU2VjcmV0Iiwic2VjcmV0IiwicmVkaXJlY3RfdXJpIiwiX3JlZGlyZWN0VXJpIiwiZXJyIiwiRXJyb3IiLCJtZXNzYWdlIiwiZGF0YSIsImVycm9yIiwiYWNjZXNzX3Rva2VuIiwicmVmcmVzaF90b2tlbiIsImV4cGlyZXNfaW4iLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJldHJpZXZlQ3JlZGVudGlhbCIsImNyZWRlbnRpYWxUb2tlbiIsImNyZWRlbnRpYWxTZWNyZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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S0FBOUIsR0FDQSxrQkFGSCxDQURJLENBQU47QUFLRCxHQVBELE1BT087QUFDTCxXQUFPO0FBQ0xwQyxpQkFBVyxFQUFFRixRQUFRLENBQUNxQyxJQUFULENBQWNFLFlBRHRCO0FBRUwzQixrQkFBWSxFQUFFWixRQUFRLENBQUNxQyxJQUFULENBQWNHLGFBRnZCO0FBR0wvQixlQUFTLEVBQUVULFFBQVEsQ0FBQ3FDLElBQVQsQ0FBY0k7QUFIcEIsS0FBUDtBQUtEO0FBQ0YsQ0E1Q0Q7O0FBOENBLE1BQU1yQyxXQUFXLEdBQUdGLFdBQVcsSUFBSTtBQUNqQyxNQUFJO0FBQ0YsV0FBT29CLElBQUksQ0FBQ29CLEdBQUwsV0FDRmxELHVCQUF1QixDQUFDQyxPQUR0Qix1QkFFTDtBQUNFa0QsYUFBTyxFQUFFO0FBQUVDLHFCQUFhLG1CQUFZMUMsV0FBWjtBQUFmO0FBRFgsS0FGSyxFQUtMbUMsSUFMRjtBQU1ELEdBUEQsQ0FPRSxPQUFPSCxHQUFQLEVBQVk7QUFDWixVQUFNeEIsTUFBTSxDQUFDQyxNQUFQLENBQ0osSUFBSXdCLEtBQUosQ0FBVSw4REFDQUQsR0FBRyxDQUFDRSxPQURkLENBREksRUFHSjtBQUFDcEMsY0FBUSxFQUFFa0MsR0FBRyxDQUFDbEM7QUFBZixLQUhJLENBQU47QUFLRDtBQUNGLENBZkQ7O0FBaUJBUix1QkFBdUIsQ0FBQ3FELGtCQUF4QixHQUNFLENBQUNDLGVBQUQsRUFBa0JDLGdCQUFsQixLQUNFbEQsS0FBSyxDQUFDZ0Qsa0JBQU4sQ0FBeUJDLGVBQXpCLEVBQTBDQyxnQkFBMUMsQ0FGSixDIiwiZmlsZSI6Ii9wYWNrYWdlcy9tZXRlb3ItZGV2ZWxvcGVyLW9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiTWV0ZW9yRGV2ZWxvcGVyQWNjb3VudHMgPSB7fTtcblxuTWV0ZW9yRGV2ZWxvcGVyQWNjb3VudHMuX3NlcnZlciA9IFwiaHR0cHM6Ly93d3cubWV0ZW9yLmNvbVwiO1xuXG4vLyBPcHRpb25zIGFyZTpcbi8vICAtIGRldmVsb3BlckFjY291bnRzU2VydmVyOiBkZWZhdWx0cyB0byBcImh0dHBzOi8vd3d3Lm1ldGVvci5jb21cIlxuTWV0ZW9yRGV2ZWxvcGVyQWNjb3VudHMuX2NvbmZpZyA9IG9wdGlvbnMgPT4ge1xuICBpZiAob3B0aW9ucy5kZXZlbG9wZXJBY2NvdW50c1NlcnZlcikge1xuICAgIE1ldGVvckRldmVsb3BlckFjY291bnRzLl9zZXJ2ZXIgPSBvcHRpb25zLmRldmVsb3BlckFjY291bnRzU2VydmVyO1xuICB9XG59O1xuIiwiT0F1dGgucmVnaXN0ZXJTZXJ2aWNlKFwibWV0ZW9yLWRldmVsb3BlclwiLCAyLCBudWxsLCBxdWVyeSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gZ2V0VG9rZW5zKHF1ZXJ5KTtcbiAgY29uc3QgeyBhY2Nlc3NUb2tlbiB9ID0gcmVzcG9uc2U7XG4gIGNvbnN0IGlkZW50aXR5ID0gZ2V0SWRlbnRpdHkoYWNjZXNzVG9rZW4pO1xuXG4gIGNvbnN0IHNlcnZpY2VEYXRhID0ge1xuICAgIGFjY2Vzc1Rva2VuOiBPQXV0aC5zZWFsU2VjcmV0KGFjY2Vzc1Rva2VuKSxcbiAgICBleHBpcmVzQXQ6ICgrbmV3IERhdGUpICsgKDEwMDAgKiByZXNwb25zZS5leHBpcmVzSW4pXG4gIH07XG5cbiAgT2JqZWN0LmFzc2lnbihzZXJ2aWNlRGF0YSwgaWRlbnRpdHkpO1xuXG4gIC8vIG9ubHkgc2V0IHRoZSB0b2tlbiBpbiBzZXJ2aWNlRGF0YSBpZiBpdCdzIHRoZXJlLiB0aGlzIGVuc3VyZXNcbiAgLy8gdGhhdCB3ZSBkb24ndCBsb3NlIG9sZCBvbmVzIChzaW5jZSB3ZSBvbmx5IGdldCB0aGlzIG9uIHRoZSBmaXJzdFxuICAvLyBsb2cgaW4gYXR0ZW1wdClcbiAgaWYgKHJlc3BvbnNlLnJlZnJlc2hUb2tlbilcbiAgICBzZXJ2aWNlRGF0YS5yZWZyZXNoVG9rZW4gPSBPQXV0aC5zZWFsU2VjcmV0KHJlc3BvbnNlLnJlZnJlc2hUb2tlbik7XG5cbiAgcmV0dXJuIHtcbiAgICBzZXJ2aWNlRGF0YSxcbiAgICBvcHRpb25zOiB7cHJvZmlsZToge25hbWU6IHNlcnZpY2VEYXRhLnVzZXJuYW1lfX1cbiAgICAvLyBYWFggdXNlIHVzZXJuYW1lIGZvciBuYW1lIHVudGlsIG1ldGVvciBhY2NvdW50cyBoYXMgYSBwcm9maWxlIHdpdGggYSBuYW1lXG4gIH07XG59KTtcblxuLy8gcmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZzpcbi8vIC0gYWNjZXNzVG9rZW5cbi8vIC0gZXhwaXJlc0luOiBsaWZldGltZSBvZiB0b2tlbiBpbiBzZWNvbmRzXG4vLyAtIHJlZnJlc2hUb2tlbiwgaWYgdGhpcyBpcyB0aGUgZmlyc3QgYXV0aG9yaXphdGlvbiByZXF1ZXN0IGFuZCB3ZSBnb3QgYVxuLy8gICByZWZyZXNoIHRva2VuIGZyb20gdGhlIHNlcnZlclxuY29uc3QgZ2V0VG9rZW5zID0gcXVlcnkgPT4ge1xuICBjb25zdCBjb25maWcgPSBTZXJ2aWNlQ29uZmlndXJhdGlvbi5jb25maWd1cmF0aW9ucy5maW5kT25lKHtcbiAgICBzZXJ2aWNlOiAnbWV0ZW9yLWRldmVsb3BlcidcbiAgfSk7XG4gIGlmICghY29uZmlnKVxuICAgIHRocm93IG5ldyBTZXJ2aWNlQ29uZmlndXJhdGlvbi5Db25maWdFcnJvcigpO1xuXG4gIGxldCByZXNwb25zZTtcbiAgdHJ5IHtcbiAgICByZXNwb25zZSA9IEhUVFAucG9zdChcbiAgICAgIE1ldGVvckRldmVsb3BlckFjY291bnRzLl9zZXJ2ZXIgKyBcIi9vYXV0aDIvdG9rZW5cIiwge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBncmFudF90eXBlOiBcImF1dGhvcml6YXRpb25fY29kZVwiLFxuICAgICAgICAgIGNvZGU6IHF1ZXJ5LmNvZGUsXG4gICAgICAgICAgY2xpZW50X2lkOiBjb25maWcuY2xpZW50SWQsXG4gICAgICAgICAgY2xpZW50X3NlY3JldDogT0F1dGgub3BlblNlY3JldChjb25maWcuc2VjcmV0KSxcbiAgICAgICAgICByZWRpcmVjdF91cmk6IE9BdXRoLl9yZWRpcmVjdFVyaSgnbWV0ZW9yLWRldmVsb3BlcicsIGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93IE9iamVjdC5hc3NpZ24oXG4gICAgICBuZXcgRXJyb3IoXG4gICAgICAgIFwiRmFpbGVkIHRvIGNvbXBsZXRlIE9BdXRoIGhhbmRzaGFrZSB3aXRoIE1ldGVvciBkZXZlbG9wZXIgYWNjb3VudHMuIFwiXG4gICAgICAgICAgKyBlcnIubWVzc2FnZVxuICAgICAgKSxcbiAgICAgIHtyZXNwb25zZTogZXJyLnJlc3BvbnNlfVxuICAgICk7XG4gIH1cblxuICBpZiAoISByZXNwb25zZS5kYXRhIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3IpIHtcbiAgICAvLyBpZiB0aGUgaHR0cCByZXNwb25zZSB3YXMgYSBqc29uIG9iamVjdCB3aXRoIGFuIGVycm9yIGF0dHJpYnV0ZVxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiRmFpbGVkIHRvIGNvbXBsZXRlIE9BdXRoIGhhbmRzaGFrZSB3aXRoIE1ldGVvciBkZXZlbG9wZXIgYWNjb3VudHMuIFwiICtcbiAgICAgICAgKHJlc3BvbnNlLmRhdGEgPyByZXNwb25zZS5kYXRhLmVycm9yIDpcbiAgICAgICAgIFwiTm8gcmVzcG9uc2UgZGF0YVwiKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjY2Vzc1Rva2VuOiByZXNwb25zZS5kYXRhLmFjY2Vzc190b2tlbixcbiAgICAgIHJlZnJlc2hUb2tlbjogcmVzcG9uc2UuZGF0YS5yZWZyZXNoX3Rva2VuLFxuICAgICAgZXhwaXJlc0luOiByZXNwb25zZS5kYXRhLmV4cGlyZXNfaW5cbiAgICB9O1xuICB9XG59O1xuXG5jb25zdCBnZXRJZGVudGl0eSA9IGFjY2Vzc1Rva2VuID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSFRUUC5nZXQoXG4gICAgICBgJHtNZXRlb3JEZXZlbG9wZXJBY2NvdW50cy5fc2VydmVyfS9hcGkvdjEvaWRlbnRpdHlgLFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gfVxuICAgICAgfVxuICAgICkuZGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGhyb3cgT2JqZWN0LmFzc2lnbihcbiAgICAgIG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBpZGVudGl0eSBmcm9tIE1ldGVvciBkZXZlbG9wZXIgYWNjb3VudHMuIFwiICtcbiAgICAgICAgICAgICAgICBlcnIubWVzc2FnZSksXG4gICAgICB7cmVzcG9uc2U6IGVyci5yZXNwb25zZX1cbiAgICApO1xuICB9XG59O1xuXG5NZXRlb3JEZXZlbG9wZXJBY2NvdW50cy5yZXRyaWV2ZUNyZWRlbnRpYWwgPSBcbiAgKGNyZWRlbnRpYWxUb2tlbiwgY3JlZGVudGlhbFNlY3JldCkgPT4gXG4gICAgT0F1dGgucmV0cmlldmVDcmVkZW50aWFsKGNyZWRlbnRpYWxUb2tlbiwgY3JlZGVudGlhbFNlY3JldCk7XG4iXX0=
