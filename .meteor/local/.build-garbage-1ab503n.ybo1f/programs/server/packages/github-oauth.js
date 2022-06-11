(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var OAuth = Package.oauth.OAuth;
var fetch = Package.fetch.fetch;
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var Github;

var require = meteorInstall({"node_modules":{"meteor":{"github-oauth":{"github_server.js":function module(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/github-oauth/github_server.js                                                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Github = {};
OAuth.registerService('github', 2, null, query => {
  const accessTokenCall = Meteor.wrapAsync(getAccessToken);
  const accessToken = accessTokenCall(query);
  const identityCall = Meteor.wrapAsync(getIdentity);
  const identity = identityCall(accessToken);
  const emailsCall = Meteor.wrapAsync(getEmails);
  const emails = emailsCall(accessToken);
  const primaryEmail = emails.find(email => email.primary);
  return {
    serviceData: {
      id: identity.id,
      accessToken: OAuth.sealSecret(accessToken),
      email: identity.email || primaryEmail && primaryEmail.email || '',
      username: identity.login,
      emails
    },
    options: {
      profile: {
        name: identity.name
      }
    }
  };
}); // http://developer.github.com/v3/#user-agent-required

let userAgent = 'Meteor';
if (Meteor.release) userAgent += "/".concat(Meteor.release);

const getAccessToken = (query, callback) => Promise.asyncApply(() => {
  const config = ServiceConfiguration.configurations.findOne({
    service: 'github'
  });
  if (!config) throw new ServiceConfiguration.ConfigError();
  let response;

  try {
    const content = new URLSearchParams({
      client_id: config.clientId,
      client_secret: config.secret,
      code: query.code,
      redirect_uri: OAuth._redirectUri('github', config)
    });
    const request = Promise.await(fetch("https://github.com/login/oauth/access_token?".concat(content.toString()), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'User-Agent': userAgent
      }
    }));
    response = Promise.await(request.json());
  } catch (err) {
    throw Object.assign(new Error("Failed to complete OAuth handshake with Github. ".concat(err.message)), {
      response: err.response
    });
  }

  if (response.error) {
    callback(response.error); // if the http response was a json object with an error attribute

    throw new Error("Failed to complete OAuth handshake with GitHub. ".concat(response.error));
  } else {
    callback(null, response.access_token);
    return response.access_token;
  }
});

const getIdentity = (accessToken, callback) => Promise.asyncApply(() => {
  try {
    const request = Promise.await(fetch('https://api.github.com/user', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'User-Agent': userAgent,
        Authorization: "token ".concat(accessToken)
      } // http://developer.github.com/v3/#user-agent-required

    }));
    const response = Promise.await(request.json());
    callback(null, response);
    return response;
  } catch (err) {
    callback(err.message);
    throw Object.assign(new Error("Failed to fetch identity from Github. ".concat(err.message)), {
      response: err.response
    });
  }
});

const getEmails = (accessToken, callback) => Promise.asyncApply(() => {
  try {
    const request = Promise.await(fetch('https://api.github.com/user/emails', {
      method: 'GET',
      headers: {
        'User-Agent': userAgent,
        Accept: 'application/json',
        Authorization: "token ".concat(accessToken)
      } // http://developer.github.com/v3/#user-agent-required

    }));
    const response = Promise.await(request.json());
    callback(null, response);
    return response;
  } catch (err) {
    callback(err.message, []);
    return [];
  }
});

Github.retrieveCredential = (credentialToken, credentialSecret) => OAuth.retrieveCredential(credentialToken, credentialSecret);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

require("/node_modules/meteor/github-oauth/github_server.js");

/* Exports */
Package._define("github-oauth", {
  Github: Github
});

})();

//# sourceURL=meteor://💻app/packages/github-oauth.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvZ2l0aHViLW9hdXRoL2dpdGh1Yl9zZXJ2ZXIuanMiXSwibmFtZXMiOlsiR2l0aHViIiwiT0F1dGgiLCJyZWdpc3RlclNlcnZpY2UiLCJxdWVyeSIsImFjY2Vzc1Rva2VuQ2FsbCIsIk1ldGVvciIsIndyYXBBc3luYyIsImdldEFjY2Vzc1Rva2VuIiwiYWNjZXNzVG9rZW4iLCJpZGVudGl0eUNhbGwiLCJnZXRJZGVudGl0eSIsImlkZW50aXR5IiwiZW1haWxzQ2FsbCIsImdldEVtYWlscyIsImVtYWlscyIsInByaW1hcnlFbWFpbCIsImZpbmQiLCJlbWFpbCIsInByaW1hcnkiLCJzZXJ2aWNlRGF0YSIsImlkIiwic2VhbFNlY3JldCIsInVzZXJuYW1lIiwibG9naW4iLCJvcHRpb25zIiwicHJvZmlsZSIsIm5hbWUiLCJ1c2VyQWdlbnQiLCJyZWxlYXNlIiwiY2FsbGJhY2siLCJjb25maWciLCJTZXJ2aWNlQ29uZmlndXJhdGlvbiIsImNvbmZpZ3VyYXRpb25zIiwiZmluZE9uZSIsInNlcnZpY2UiLCJDb25maWdFcnJvciIsInJlc3BvbnNlIiwiY29udGVudCIsIlVSTFNlYXJjaFBhcmFtcyIsImNsaWVudF9pZCIsImNsaWVudElkIiwiY2xpZW50X3NlY3JldCIsInNlY3JldCIsImNvZGUiLCJyZWRpcmVjdF91cmkiLCJfcmVkaXJlY3RVcmkiLCJyZXF1ZXN0IiwiZmV0Y2giLCJ0b1N0cmluZyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJqc29uIiwiZXJyIiwiT2JqZWN0IiwiYXNzaWduIiwiRXJyb3IiLCJtZXNzYWdlIiwiZXJyb3IiLCJhY2Nlc3NfdG9rZW4iLCJBdXRob3JpemF0aW9uIiwicmV0cmlldmVDcmVkZW50aWFsIiwiY3JlZGVudGlhbFRva2VuIiwiY3JlZGVudGlhbFNlY3JldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sR0FBRyxFQUFUO0FB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RDtBQUVoRUMsYUFBTyxFQUFFO0FBQ1Asc0JBQWN2QixTQURQO0FBRVB3QixjQUFNLEVBQUUsa0JBRkQ7QUFHUFMscUJBQWEsa0JBQVdwRCxXQUFYO0FBSE4sT0FGdUQsQ0FNOUQ7O0FBTjhELEtBQXZDLENBQWQsQ0FBYjtBQVFBLFVBQU00QixRQUFRLGlCQUFTVSxPQUFPLENBQUNNLElBQVIsRUFBVCxDQUFkO0FBQ0F2QixZQUFRLENBQUMsSUFBRCxFQUFPTyxRQUFQLENBQVI7QUFDQSxXQUFPQSxRQUFQO0FBQ0QsR0FaRCxDQVlFLE9BQU9pQixHQUFQLEVBQVk7QUFDWnhCLFlBQVEsQ0FBQ3dCLEdBQUcsQ0FBQ0ksT0FBTCxFQUFjLEVBQWQsQ0FBUjtBQUNBLFdBQU8sRUFBUDtBQUNEO0FBQ0YsQ0FqQmlCLENBQWxCOztBQW1CQXpELE1BQU0sQ0FBQzZELGtCQUFQLEdBQTRCLENBQUNDLGVBQUQsRUFBa0JDLGdCQUFsQixLQUMxQjlELEtBQUssQ0FBQzRELGtCQUFOLENBQXlCQyxlQUF6QixFQUEwQ0MsZ0JBQTFDLENBREYsQyIsImZpbGUiOiIvcGFja2FnZXMvZ2l0aHViLW9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiR2l0aHViID0ge307XG5cbk9BdXRoLnJlZ2lzdGVyU2VydmljZSgnZ2l0aHViJywgMiwgbnVsbCwgKHF1ZXJ5KSA9PiB7XG4gIGNvbnN0IGFjY2Vzc1Rva2VuQ2FsbCA9IE1ldGVvci53cmFwQXN5bmMoZ2V0QWNjZXNzVG9rZW4pO1xuICBjb25zdCBhY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuQ2FsbChxdWVyeSk7XG4gIGNvbnN0IGlkZW50aXR5Q2FsbCA9IE1ldGVvci53cmFwQXN5bmMoZ2V0SWRlbnRpdHkpO1xuICBjb25zdCBpZGVudGl0eSA9IGlkZW50aXR5Q2FsbChhY2Nlc3NUb2tlbik7XG4gIGNvbnN0IGVtYWlsc0NhbGwgPSBNZXRlb3Iud3JhcEFzeW5jKGdldEVtYWlscyk7XG4gIGNvbnN0IGVtYWlscyA9IGVtYWlsc0NhbGwoYWNjZXNzVG9rZW4pO1xuICBjb25zdCBwcmltYXJ5RW1haWwgPSBlbWFpbHMuZmluZCgoZW1haWwpID0+IGVtYWlsLnByaW1hcnkpO1xuXG4gIHJldHVybiB7XG4gICAgc2VydmljZURhdGE6IHtcbiAgICAgIGlkOiBpZGVudGl0eS5pZCxcbiAgICAgIGFjY2Vzc1Rva2VuOiBPQXV0aC5zZWFsU2VjcmV0KGFjY2Vzc1Rva2VuKSxcbiAgICAgIGVtYWlsOiBpZGVudGl0eS5lbWFpbCB8fCAocHJpbWFyeUVtYWlsICYmIHByaW1hcnlFbWFpbC5lbWFpbCkgfHwgJycsXG4gICAgICB1c2VybmFtZTogaWRlbnRpdHkubG9naW4sXG4gICAgICBlbWFpbHNcbiAgICB9LFxuICAgIG9wdGlvbnM6IHsgcHJvZmlsZTogeyBuYW1lOiBpZGVudGl0eS5uYW1lIH0gfVxuICB9O1xufSk7XG5cbi8vIGh0dHA6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My8jdXNlci1hZ2VudC1yZXF1aXJlZFxubGV0IHVzZXJBZ2VudCA9ICdNZXRlb3InO1xuaWYgKE1ldGVvci5yZWxlYXNlKSB1c2VyQWdlbnQgKz0gYC8ke01ldGVvci5yZWxlYXNlfWA7XG5cbmNvbnN0IGdldEFjY2Vzc1Rva2VuID0gYXN5bmMgKHF1ZXJ5LCBjYWxsYmFjaykgPT4ge1xuICBjb25zdCBjb25maWcgPSBTZXJ2aWNlQ29uZmlndXJhdGlvbi5jb25maWd1cmF0aW9ucy5maW5kT25lKHtcbiAgICBzZXJ2aWNlOiAnZ2l0aHViJ1xuICB9KTtcbiAgaWYgKCFjb25maWcpIHRocm93IG5ldyBTZXJ2aWNlQ29uZmlndXJhdGlvbi5Db25maWdFcnJvcigpO1xuXG4gIGxldCByZXNwb25zZTtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb250ZW50ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICBjbGllbnRfaWQ6IGNvbmZpZy5jbGllbnRJZCxcbiAgICAgIGNsaWVudF9zZWNyZXQ6IGNvbmZpZy5zZWNyZXQsXG4gICAgICBjb2RlOiBxdWVyeS5jb2RlLFxuICAgICAgcmVkaXJlY3RfdXJpOiBPQXV0aC5fcmVkaXJlY3RVcmkoXG4gICAgICAgICdnaXRodWInLFxuICAgICAgICBjb25maWdcbiAgICAgIClcbiAgICB9KTtcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9naXRodWIuY29tL2xvZ2luL29hdXRoL2FjY2Vzc190b2tlbj8ke2NvbnRlbnQudG9TdHJpbmcoKX1gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdVc2VyLUFnZW50JzogdXNlckFnZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICAgIHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93IE9iamVjdC5hc3NpZ24oXG4gICAgICBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gY29tcGxldGUgT0F1dGggaGFuZHNoYWtlIHdpdGggR2l0aHViLiAke2Vyci5tZXNzYWdlfWBcbiAgICAgICksXG4gICAgICB7IHJlc3BvbnNlOiBlcnIucmVzcG9uc2UgfVxuICAgICk7XG4gIH1cbiAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgY2FsbGJhY2socmVzcG9uc2UuZXJyb3IpO1xuICAgIC8vIGlmIHRoZSBodHRwIHJlc3BvbnNlIHdhcyBhIGpzb24gb2JqZWN0IHdpdGggYW4gZXJyb3IgYXR0cmlidXRlXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEZhaWxlZCB0byBjb21wbGV0ZSBPQXV0aCBoYW5kc2hha2Ugd2l0aCBHaXRIdWIuICR7cmVzcG9uc2UuZXJyb3J9YFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UuYWNjZXNzX3Rva2VuKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuYWNjZXNzX3Rva2VuO1xuICB9XG59O1xuXG5jb25zdCBnZXRJZGVudGl0eSA9IGFzeW5jIChhY2Nlc3NUb2tlbiwgY2FsbGJhY2spID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcicsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnVXNlci1BZ2VudCc6IHVzZXJBZ2VudCxcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7YWNjZXNzVG9rZW59YFxuICAgICAgfSAvLyBodHRwOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvI3VzZXItYWdlbnQtcmVxdWlyZWRcbiAgICB9KTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNhbGxiYWNrKGVyci5tZXNzYWdlKTtcbiAgICB0aHJvdyBPYmplY3QuYXNzaWduKFxuICAgICAgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggaWRlbnRpdHkgZnJvbSBHaXRodWIuICR7ZXJyLm1lc3NhZ2V9YCksXG4gICAgICB7IHJlc3BvbnNlOiBlcnIucmVzcG9uc2UgfVxuICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IGdldEVtYWlscyA9IGFzeW5jIChhY2Nlc3NUb2tlbiwgY2FsbGJhY2spID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlci9lbWFpbHMnLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnVXNlci1BZ2VudCc6IHVzZXJBZ2VudCxcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGB0b2tlbiAke2FjY2Vzc1Rva2VufWBcbiAgICAgIH0gLy8gaHR0cDovL2RldmVsb3Blci5naXRodWIuY29tL3YzLyN1c2VyLWFnZW50LXJlcXVpcmVkXG4gICAgfSk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjYWxsYmFjayhlcnIubWVzc2FnZSwgW10pO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuR2l0aHViLnJldHJpZXZlQ3JlZGVudGlhbCA9IChjcmVkZW50aWFsVG9rZW4sIGNyZWRlbnRpYWxTZWNyZXQpID0+XG4gIE9BdXRoLnJldHJpZXZlQ3JlZGVudGlhbChjcmVkZW50aWFsVG9rZW4sIGNyZWRlbnRpYWxTZWNyZXQpO1xuIl19
