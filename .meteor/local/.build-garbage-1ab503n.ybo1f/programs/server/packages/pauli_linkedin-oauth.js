(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var OAuth = Package.oauth.OAuth;
var HTTP = Package.http.HTTP;
var HTTPInternals = Package.http.HTTPInternals;
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

var require = meteorInstall({"node_modules":{"meteor":{"pauli:linkedin-oauth":{"linkedin-server.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/pauli_linkedin-oauth/linkedin-server.js                                                          //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
module.export({
  Linkedin: () => Linkedin
});
let HTTP;
module.link("meteor/http", {
  HTTP(v) {
    HTTP = v;
  }

}, 0);
let OAuth;
module.link("meteor/oauth", {
  OAuth(v) {
    OAuth = v;
  }

}, 1);
let ServiceConfiguration;
module.link("meteor/service-configuration", {
  ServiceConfiguration(v) {
    ServiceConfiguration = v;
  }

}, 2);
const Linkedin = {};

const getImage = profilePicture => {
  const image = [];

  if (profilePicture !== undefined) {
    for (const element of profilePicture['displayImage~'].elements) {
      for (const identifier of element.identifiers) {
        image.push(identifier.identifier);
      }
    }
  }

  return {
    displayImage: profilePicture ? profilePicture.displayImage : null,
    identifiersUrl: image
  };
}; // Request for email, returns array


const getEmails = function (accessToken) {
  const url = encodeURI("https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))&oauth2_access_token=".concat(accessToken));
  const response = HTTP.get(url).data;
  const emails = [];

  for (const element of response.elements) {
    emails.push(element['handle~'].emailAddress);
  }

  return emails;
}; // checks whether a string parses as JSON


const isJSON = function (str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}; // returns an object containing:
// - accessToken
// - expiresIn: lifetime of token in seconds


const getTokenResponse = function (query) {
  const config = ServiceConfiguration.configurations.findOne({
    service: 'linkedin'
  });
  if (!config) throw new ServiceConfiguration.ConfigError('Service not configured');
  let responseContent;

  try {
    // Request an access token
    responseContent = HTTP.post('https://api.linkedin.com/uas/oauth2/accessToken', {
      params: {
        grant_type: 'authorization_code',
        client_id: config.clientId,
        client_secret: OAuth.openSecret(config.secret),
        code: query.code,
        redirect_uri: OAuth._redirectUri('linkedin', config)
      }
    }).content;
  } catch (err) {
    throw new Error("Failed to complete OAuth handshake with Linkedin. ".concat(err.message));
  } // If 'responseContent' does not parse as JSON, it is an error.


  if (!isJSON(responseContent)) {
    throw new Error("Failed to complete OAuth handshake with Linkedin. ".concat(responseContent));
  } // Success! Extract access token and expiration


  const parsedResponse = JSON.parse(responseContent);
  const accessToken = parsedResponse.access_token;
  const expiresIn = parsedResponse.expires_in;

  if (!accessToken) {
    throw new Error("Failed to complete OAuth handshake with Linkedin -- can't find access token in HTTP response. ".concat(responseContent));
  }

  return {
    accessToken,
    expiresIn
  };
}; // Request available fields from r_liteprofile


const getIdentity = function (accessToken) {
  try {
    const url = encodeURI("https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))&oauth2_access_token=".concat(accessToken));
    return HTTP.get(url).data;
  } catch (err) {
    throw new Error("Failed to fetch identity from Linkedin. ".concat(err.message));
  }
};

OAuth.registerService('linkedin', 2, null, query => {
  const response = getTokenResponse(query);
  const {
    accessToken
  } = response;
  const identity = getIdentity(accessToken);
  const {
    id,
    firstName,
    lastName,
    profilePicture
  } = identity;

  if (!id) {
    throw new Error('Linkedin did not provide an id');
  }

  const emails = getEmails(accessToken);
  const fields = {
    linkedinId: id,
    firstName,
    lastName,
    profilePicture: getImage(profilePicture),
    emails
  };

  if (emails.length) {
    const primaryEmail = emails[0];
    fields.emailAddress = primaryEmail; // for backward compatibility with previous versions of this package

    fields.email = primaryEmail;
  }

  const serviceData = _objectSpread({
    id,
    accessToken,
    expiresAt: +new Date() + 1000 * response.expiresIn
  }, fields);

  return {
    serviceData,
    options: {
      profile: fields
    }
  };
});

Linkedin.retrieveCredential = function (credentialToken, credentialSecret) {
  return OAuth.retrieveCredential(credentialToken, credentialSecret);
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/pauli:linkedin-oauth/linkedin-server.js");

/* Exports */
Package._define("pauli:linkedin-oauth", exports);

})();

//# sourceURL=meteor://💻app/packages/pauli_linkedin-oauth.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvcGF1bGk6bGlua2VkaW4tb2F1dGgvbGlua2VkaW4tc2VydmVyLmpzIl0sIm5hbWVzIjpbIl9vYmplY3RTcHJlYWQiLCJtb2R1bGUiLCJsaW5rIiwiZGVmYXVsdCIsInYiLCJleHBvcnQiLCJMaW5rZWRpbiIsIkhUVFAiLCJPQXV0aCIsIlNlcnZpY2VDb25maWd1cmF0aW9uIiwiZ2V0SW1hZ2UiLCJwcm9maWxlUGljdHVyZSIsImltYWdlIiwidW5kZWZpbmVkIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaWRlbnRpZmllciIsImlkZW50aWZpZXJzIiwicHVzaCIsImRpc3BsYXlJbWFnZSIsImlkZW50aWZpZXJzVXJsIiwiZ2V0RW1haWxzIiwiYWNjZXNzVG9rZW4iLCJ1cmwiLCJlbmNvZGVVUkkiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlbWFpbHMiLCJlbWFpbEFkZHJlc3MiLCJpc0pTT04iLCJzdHIiLCJKU09OIiwicGFyc2UiLCJlIiwiZ2V0VG9rZW5SZXNwb25zZSIsInF1ZXJ5IiwiY29uZmlnIiwiY29uZmlndXJhdGlvbnMiLCJmaW5kT25lIiwic2VydmljZSIsIkNvbmZpZ0Vycm9yIiwicmVzcG9uc2VDb250ZW50IiwicG9zdCIsInBhcmFtcyIsImdyYW50X3R5cGUiLCJjbGllbnRfaWQiLCJjbGllbnRJZCIsImNsaWVudF9zZWNyZXQiLCJvcGVuU2VjcmV0Iiwic2VjcmV0IiwiY29kZSIsInJlZGlyZWN0X3VyaSIsIl9yZWRpcmVjdFVyaSIsImNvbnRlbnQiLCJlcnIiLCJFcnJvciIsIm1lc3NhZ2UiLCJwYXJzZWRSZXNwb25zZSIsImFjY2Vzc190b2tlbiIsImV4cGlyZXNJbiIsImV4cGlyZXNfaW4iLCJnZXRJZGVudGl0eSIsInJlZ2lzdGVyU2VydmljZSIsImlkZW50aXR5IiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImZpZWxkcyIsImxpbmtlZGluSWQiLCJsZW5ndGgiLCJwcmltYXJ5RW1haWwiLCJlbWFpbCIsInNlcnZpY2VEYXRhIiwiZXhwaXJlc0F0IiwiRGF0ZSIsIm9wdGlvbnMiLCJwcm9maWxlIiwicmV0cmlldmVDcmVkZW50aWFsIiwiY3JlZGVudGlhbFRva2VuIiwiY3JlZGVudGlhbFNlY3JldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQUo7O0FBQWtCQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxzQ0FBWixFQUFtRDtBQUFDQyxTQUFPLENBQUNDLENBQUQsRUFBRztBQUFDSixpQkFBYSxHQUFDSSxDQUFkO0FBQWdCOztBQUE1QixDQUFuRCxFQUFpRixDQUFqRjtBQUFsQkgsTUFBTSxDQUFDSSxNQUFQLENBQWM7QUFBQ0MsVUFBUSxFQUFDLE1BQUlBO0FBQWQsQ0FBZDtBQUF1QyxJQUFJQyxJQUFKO0FBQVNOLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGFBQVosRUFBMEI7QUFBQ0ssTUFBSSxDQUFDSCxDQUFELEVBQUc7QUFBQ0csUUFBSSxHQUFDSCxDQUFMO0FBQU87O0FBQWhCLENBQTFCLEVBQTRDLENBQTVDO0FBQStDLElBQUlJLEtBQUo7QUFBVVAsTUFBTSxDQUFDQyxJQUFQLENBQVksY0FBWixFQUEyQjtBQUFDTSxPQUFLLENBQUNKLENBQUQsRUFBRztBQUFDSSxTQUFLLEdBQUNKLENBQU47QUFBUTs7QUFBbEIsQ0FBM0IsRUFBK0MsQ0FBL0M7QUFBa0QsSUFBSUssb0JBQUo7QUFBeUJSLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLDhCQUFaLEVBQTJDO0FBQUNPLHNCQUFvQixDQUFDTCxDQUFELEVBQUc7QUFBQ0ssd0JBQW9CLEdBQUNMLENBQXJCO0FBQXVCOztBQUFoRCxDQUEzQyxFQUE2RixDQUE3RjtBQUk3SyxNQUFNRSxRQUFRLEdBQUcsRUFBakI7O0FBRVAsTUFBTUksUUFBUSxHQUFJQyxjQUFELElBQW9CO0FBQ3BDLFFBQU1DLEtBQUssR0FBRyxFQUFkOztBQUNBLE1BQUlELGNBQWMsS0FBS0UsU0FBdkIsRUFBa0M7QUFDakMs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QyxZQUFQLEdBQXNCMEMsWUFBdEIsQ0FGa0IsQ0FFa0I7O0FBQ3BDSCxVQUFNLENBQUNJLEtBQVAsR0FBZUQsWUFBZjtBQUNBOztBQUVELFFBQU1FLFdBQVc7QUFDaEJSLE1BRGdCO0FBRWhCM0MsZUFGZ0I7QUFHaEJvRCxhQUFTLEVBQUUsQ0FBQyxJQUFJQyxJQUFKLEVBQUQsR0FBYyxPQUFPbEQsUUFBUSxDQUFDbUM7QUFIekIsS0FJYlEsTUFKYSxDQUFqQjs7QUFPQSxTQUFPO0FBQ05LLGVBRE07QUFFTkcsV0FBTyxFQUFFO0FBQ1JDLGFBQU8sRUFBRVQ7QUFERDtBQUZILEdBQVA7QUFNQSxDQXhDRDs7QUEwQ0E5RCxRQUFRLENBQUN3RSxrQkFBVCxHQUE4QixVQUFVQyxlQUFWLEVBQTJCQyxnQkFBM0IsRUFBNkM7QUFDMUUsU0FBT3hFLEtBQUssQ0FBQ3NFLGtCQUFOLENBQXlCQyxlQUF6QixFQUEwQ0MsZ0JBQTFDLENBQVA7QUFDQSxDQUZELEMiLCJmaWxlIjoiL3BhY2thZ2VzL3BhdWxpX2xpbmtlZGluLW9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFRUUCB9IGZyb20gJ21ldGVvci9odHRwJztcbmltcG9ydCB7IE9BdXRoIH0gZnJvbSAnbWV0ZW9yL29hdXRoJztcbmltcG9ydCB7IFNlcnZpY2VDb25maWd1cmF0aW9uIH0gZnJvbSAnbWV0ZW9yL3NlcnZpY2UtY29uZmlndXJhdGlvbic7XG5cbmV4cG9ydCBjb25zdCBMaW5rZWRpbiA9IHt9O1xuXG5jb25zdCBnZXRJbWFnZSA9IChwcm9maWxlUGljdHVyZSkgPT4ge1xuXHRjb25zdCBpbWFnZSA9IFtdO1xuXHRpZiAocHJvZmlsZVBpY3R1cmUgIT09IHVuZGVmaW5lZCkge1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBwcm9maWxlUGljdHVyZVsnZGlzcGxheUltYWdlfiddLmVsZW1lbnRzKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGlkZW50aWZpZXIgb2YgZWxlbWVudC5pZGVudGlmaWVycykge1xuXHRcdFx0XHRpbWFnZS5wdXNoKGlkZW50aWZpZXIuaWRlbnRpZmllcik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB7XG5cdFx0ZGlzcGxheUltYWdlOiBwcm9maWxlUGljdHVyZSA/IHByb2ZpbGVQaWN0dXJlLmRpc3BsYXlJbWFnZSA6IG51bGwsXG5cdFx0aWRlbnRpZmllcnNVcmw6IGltYWdlLFxuXHR9O1xufTtcblxuLy8gUmVxdWVzdCBmb3IgZW1haWwsIHJldHVybnMgYXJyYXlcbmNvbnN0IGdldEVtYWlscyA9IGZ1bmN0aW9uIChhY2Nlc3NUb2tlbikge1xuXHRjb25zdCB1cmwgPSBlbmNvZGVVUkkoXG5cdFx0YGh0dHBzOi8vYXBpLmxpbmtlZGluLmNvbS92Mi9lbWFpbEFkZHJlc3M/cT1tZW1iZXJzJnByb2plY3Rpb249KGVsZW1lbnRzKihoYW5kbGV+KSkmb2F1dGgyX2FjY2Vzc190b2tlbj0ke2FjY2Vzc1Rva2VufWAsXG5cdCk7XG5cdGNvbnN0IHJlc3BvbnNlID0gSFRUUC5nZXQodXJsKS5kYXRhO1xuXHRjb25zdCBlbWFpbHMgPSBbXTtcblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHJlc3BvbnNlLmVsZW1lbnRzKSB7XG5cdFx0ZW1haWxzLnB1c2goZWxlbWVudFsnaGFuZGxlfiddLmVtYWlsQWRkcmVzcyk7XG5cdH1cblx0cmV0dXJuIGVtYWlscztcbn07XG5cbi8vIGNoZWNrcyB3aGV0aGVyIGEgc3RyaW5nIHBhcnNlcyBhcyBKU09OXG5jb25zdCBpc0pTT04gPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHRyeSB7XG5cdFx0SlNPTi5wYXJzZShzdHIpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG4vLyByZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nOlxuLy8gLSBhY2Nlc3NUb2tlblxuLy8gLSBleHBpcmVzSW46IGxpZmV0aW1lIG9mIHRva2VuIGluIHNlY29uZHNcbmNvbnN0IGdldFRva2VuUmVzcG9uc2UgPSBmdW5jdGlvbiAocXVlcnkpIHtcblx0Y29uc3QgY29uZmlnID0gU2VydmljZUNvbmZpZ3VyYXRpb24uY29uZmlndXJhdGlvbnMuZmluZE9uZSh7IHNlcnZpY2U6ICdsaW5rZWRpbicgfSk7XG5cdGlmICghY29uZmlnKSB0aHJvdyBuZXcgU2VydmljZUNvbmZpZ3VyYXRpb24uQ29uZmlnRXJyb3IoJ1NlcnZpY2Ugbm90IGNvbmZpZ3VyZWQnKTtcblxuXHRsZXQgcmVzcG9uc2VDb250ZW50O1xuXHR0cnkge1xuXHRcdC8vIFJlcXVlc3QgYW4gYWNjZXNzIHRva2VuXG5cdFx0cmVzcG9uc2VDb250ZW50ID0gSFRUUC5wb3N0KCdodHRwczovL2FwaS5saW5rZWRpbi5jb20vdWFzL29hdXRoMi9hY2Nlc3NUb2tlbicsIHtcblx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHRncmFudF90eXBlOiAnYXV0aG9yaXphdGlvbl9jb2RlJyxcblx0XHRcdFx0Y2xpZW50X2lkOiBjb25maWcuY2xpZW50SWQsXG5cdFx0XHRcdGNsaWVudF9zZWNyZXQ6IE9BdXRoLm9wZW5TZWNyZXQoY29uZmlnLnNlY3JldCksXG5cdFx0XHRcdGNvZGU6IHF1ZXJ5LmNvZGUsXG5cdFx0XHRcdHJlZGlyZWN0X3VyaTogT0F1dGguX3JlZGlyZWN0VXJpKCdsaW5rZWRpbicsIGNvbmZpZyksXG5cdFx0XHR9LFxuXHRcdH0pLmNvbnRlbnQ7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGNvbXBsZXRlIE9BdXRoIGhhbmRzaGFrZSB3aXRoIExpbmtlZGluLiAke2Vyci5tZXNzYWdlfWApO1xuXHR9XG5cblx0Ly8gSWYgJ3Jlc3BvbnNlQ29udGVudCcgZG9lcyBub3QgcGFyc2UgYXMgSlNPTiwgaXQgaXMgYW4gZXJyb3IuXG5cdGlmICghaXNKU09OKHJlc3BvbnNlQ29udGVudCkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBjb21wbGV0ZSBPQXV0aCBoYW5kc2hha2Ugd2l0aCBMaW5rZWRpbi4gJHtyZXNwb25zZUNvbnRlbnR9YCk7XG5cdH1cblxuXHQvLyBTdWNjZXNzISBFeHRyYWN0IGFjY2VzcyB0b2tlbiBhbmQgZXhwaXJhdGlvblxuXHRjb25zdCBwYXJzZWRSZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2VDb250ZW50KTtcblx0Y29uc3QgYWNjZXNzVG9rZW4gPSBwYXJzZWRSZXNwb25zZS5hY2Nlc3NfdG9rZW47XG5cdGNvbnN0IGV4cGlyZXNJbiA9IHBhcnNlZFJlc3BvbnNlLmV4cGlyZXNfaW47XG5cblx0aWYgKCFhY2Nlc3NUb2tlbikge1xuXHRcdHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGNvbXBsZXRlIE9BdXRoIGhhbmRzaGFrZSB3aXRoIExpbmtlZGluIC0tIGNhbid0IGZpbmQgYWNjZXNzIHRva2VuIGluIEhUVFAgcmVzcG9uc2UuICR7cmVzcG9uc2VDb250ZW50fWApO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRhY2Nlc3NUb2tlbixcblx0XHRleHBpcmVzSW4sXG5cdH07XG59O1xuXG4vLyBSZXF1ZXN0IGF2YWlsYWJsZSBmaWVsZHMgZnJvbSByX2xpdGVwcm9maWxlXG5jb25zdCBnZXRJZGVudGl0eSA9IGZ1bmN0aW9uIChhY2Nlc3NUb2tlbikge1xuXHR0cnkge1xuXHRcdGNvbnN0IHVybCA9IGVuY29kZVVSSShcblx0XHRcdGBodHRwczovL2FwaS5saW5rZWRpbi5jb20vdjIvbWU/cHJvamVjdGlvbj0oaWQsZmlyc3ROYW1lLGxhc3ROYW1lLHByb2ZpbGVQaWN0dXJlKGRpc3BsYXlJbWFnZX46cGxheWFibGVTdHJlYW1zKSkmb2F1dGgyX2FjY2Vzc190b2tlbj0ke2FjY2Vzc1Rva2VufWAsXG5cdFx0KTtcblx0XHRyZXR1cm4gSFRUUC5nZXQodXJsKS5kYXRhO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCBpZGVudGl0eSBmcm9tIExpbmtlZGluLiAke2Vyci5tZXNzYWdlfWApO1xuXHR9XG59O1xuXG5PQXV0aC5yZWdpc3RlclNlcnZpY2UoJ2xpbmtlZGluJywgMiwgbnVsbCwgKHF1ZXJ5KSA9PiB7XG5cdGNvbnN0IHJlc3BvbnNlID0gZ2V0VG9rZW5SZXNwb25zZShxdWVyeSk7XG5cdGNvbnN0IHsgYWNjZXNzVG9rZW4gfSA9IHJlc3BvbnNlO1xuXHRjb25zdCBpZGVudGl0eSA9IGdldElkZW50aXR5KGFjY2Vzc1Rva2VuKTtcblxuXHRjb25zdCB7IGlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBwcm9maWxlUGljdHVyZSB9ID0gaWRlbnRpdHk7XG5cblx0aWYgKCFpZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignTGlua2VkaW4gZGlkIG5vdCBwcm92aWRlIGFuIGlkJyk7XG5cdH1cblxuXHRjb25zdCBlbWFpbHMgPSBnZXRFbWFpbHMoYWNjZXNzVG9rZW4pO1xuXG5cdGNvbnN0IGZpZWxkcyA9IHtcblx0XHRsaW5rZWRpbklkOiBpZCxcblx0XHRmaXJzdE5hbWUsXG5cdFx0bGFzdE5hbWUsXG5cdFx0cHJvZmlsZVBpY3R1cmU6IGdldEltYWdlKHByb2ZpbGVQaWN0dXJlKSxcblx0XHRlbWFpbHMsXG5cdH07XG5cblx0aWYgKGVtYWlscy5sZW5ndGgpIHtcblx0XHRjb25zdCBwcmltYXJ5RW1haWwgPSBlbWFpbHNbMF07XG5cdFx0ZmllbGRzLmVtYWlsQWRkcmVzcyA9IHByaW1hcnlFbWFpbDsgLy8gZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBwcmV2aW91cyB2ZXJzaW9ucyBvZiB0aGlzIHBhY2thZ2Vcblx0XHRmaWVsZHMuZW1haWwgPSBwcmltYXJ5RW1haWw7XG5cdH1cblxuXHRjb25zdCBzZXJ2aWNlRGF0YSA9IHtcblx0XHRpZCxcblx0XHRhY2Nlc3NUb2tlbixcblx0XHRleHBpcmVzQXQ6ICtuZXcgRGF0ZSgpICsgMTAwMCAqIHJlc3BvbnNlLmV4cGlyZXNJbixcblx0XHQuLi5maWVsZHMsXG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRzZXJ2aWNlRGF0YSxcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRwcm9maWxlOiBmaWVsZHMsXG5cdFx0fSxcblx0fTtcbn0pO1xuXG5MaW5rZWRpbi5yZXRyaWV2ZUNyZWRlbnRpYWwgPSBmdW5jdGlvbiAoY3JlZGVudGlhbFRva2VuLCBjcmVkZW50aWFsU2VjcmV0KSB7XG5cdHJldHVybiBPQXV0aC5yZXRyaWV2ZUNyZWRlbnRpYWwoY3JlZGVudGlhbFRva2VuLCBjcmVkZW50aWFsU2VjcmV0KTtcbn07XG4iXX0=
