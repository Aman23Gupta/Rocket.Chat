(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var __coffeescriptShare, OAuth2Server;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rocketchat_oauth2-server/model.coffee                                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var AccessTokens, AuthCodes, Clients, Model, RefreshTokens, debug;
AccessTokens = void 0;
RefreshTokens = void 0;
Clients = void 0;
AuthCodes = void 0;
debug = void 0;

this.Model = Model = function () {
  class Model {
    constructor(config = {}) {
      if (config.accessTokensCollectionName == null) {
        config.accessTokensCollectionName = 'oauth_access_tokens';
      }

      if (config.refreshTokensCollectionName == null) {
        config.refreshTokensCollectionName = 'oauth_refresh_tokens';
      }

      if (config.clientsCollectionName == null) {
        config.clientsCollectionName = 'oauth_clients';
      }

      if (config.authCodesCollectionName == null) {
        config.authCodesCollectionName = 'oauth_auth_codes';
      }

      this.debug = debug = config.debug;
      this.AccessTokens = AccessTokens = config.accessTokensCollection || new Meteor.Collection(config.accessTokensCollectionName);
      this.RefreshTokens = RefreshTokens = config.refreshTokensCollection || new Meteor.Collection(config.refreshTokensCollectionName);
      this.Clients = Clients = config.clientsCollection || new Meteor.Collection(config.clientsCollectionName);
      this.AuthCodes = AuthCodes = config.authCodesCollection || new Meteor.Collection(config.authCodesCollectionName);
    }

    grantTypeAllowed(clientId, grantType, callback) {
      if (debug === true) {
        console.log('[OAuth2Server]', 'in grantTypeAllowed (clientId:', clientId, ', grantType:', grantType + ')');
      }

      return callback(false, grantType === 'authorization_code' || grantType === 'refresh_token');
    }

  }

  ;
  Model.prototype.getAccessToken = Meteor.bindEnvironment(function (bearerToken, callback) {
    var e, token;

    if (debug === true) {
      console.log('[OAuth2Server]', 'in getAccessToken (bearerToken:', bearerToken, ')');
    }

    try {
      token = AccessTokens.findOne({
        accessToken: bearerToken
      });
      return callback(null, token);
    } catch (error) {
      e = error;
      return callback(e);
    }
  });
  Model.prototype.getClient = Meteor.bindEnvironment(function (clientId, clientSecret, callback) {
    var client, e;

    if (debug === true) {
      console.log('[OAuth2Server]', 'in getClient (clientId:', clientId, ', clientSecret:', clientSecret, ')');
    }

    try {
      if (clientSecret == null) {
        client = Clients.findOne({
          active: true,
          clientId: clientId
        });
      } else {
        client = Clients.findOne({
          active: true,
          clientId: clientId,
          clientSecret: clientSecret
        });
      }

      return callback(null, client);
    } catch (error) {
      e = error;
      return callback(e);
    }
  });
  Model.prototype.saveAccessToken = Meteor.bindEnvironment(function (token, clientId, expires, user, callback) {
    var e, tokenId;

    if (debug === true) {
      console.log('[OAuth2Server]', 'in saveAccessToken (token:', token, ', clientId:', clientId, ', user:', user, ', expires:', expires, ')');
    }

    try {
      tokenId = AccessTokens.insert({
        accessToken: token,
        clientId: clientId,
        userId: user.id,
        expires: expires
      });
      return callback(null, tokenId);
    } catch (error) {
      e = error;
      return callback(e);
    }
  });
  Model.prototype.getAuthCode = Meteor.bindEnvironment(function (authCode, callback) {
    var code, e;

    if (debug === true) {
      console.log('[OAuth2Server]', 'in getAuthCode (authCode: ' + authCode + ')');
    }

    try {
      code = AuthCodes.findOne({
        authCode: authCode
      });
      return callback(null, code);
    } catch (error) {
      e = error;
      return callback(e);
    }
  });
  Model.prototype.saveAuthCode = Meteor.bindEnvironment(function (code, clientId, expires, user, callback) {
    var codeId, e;

    if (debug === true) {
      console.log('[OAuth2Server]', 'in saveAuthCode (code:', code, ', clientId:', clientId, ', expires:', expires, ', user:', user, ')');
    }

    try {
      codeId = AuthCodes.upsert({
        authCode: code
      }, {
        authCode: code,
        clientId: clientId,
        userId: user.id,
        expires: expires
      });
      return callback(null, codeId);
    } catch (error) {
      e = error;
      return callback(e);
    }
  });
  Model.prototype.saveRefreshToken = Meteor.bindEnvironment(function (token, clientId, expires, user, callback) {
    var e, tokenId;

    if (debug === true) {
      console.log('[OAuth2Server]', 'in saveRefreshToken (token:', token, ', clientId:', clientId, ', user:', user, ', expires:', expires, ')');
    }

    try {
      return tokenId = RefreshTokens.insert({
        refreshToken: token,
        clientId: clientId,
        userId: user.id,
        expires: expires
      }, callback(null, tokenId));
    } catch (error) {
      e = error;
      return callback(e);
    }
  });
  Model.prototype.getRefreshToken = Meteor.bindEnvironment(function (refreshToken, callback) {
    var e, token;

    if (debug === true) {
      console.log('[OAuth2Server]', 'in getRefreshToken (refreshToken: ' + refreshToken + ')');
    }

    try {
      token = RefreshTokens.findOne({
        refreshToken: refreshToken
      });
      return callback(null, token);
    } catch (error) {
      e = error;
      return callback(e);
    }
  });
  return Model;
}.call(this);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rocketchat_oauth2-server/oauth.coffee                                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var express, oauthserver;
oauthserver = Npm.require('oauth2-server');
express = Npm.require('express'); // WebApp.rawConnectHandlers.use app
// JsonRoutes.Middleware.use app

OAuth2Server = class OAuth2Server {
  constructor(config = {}) {
    this.config = config;
    this.app = express();
    this.routes = express();
    this.model = new Model(this.config);
    this.oauth = oauthserver({
      model: this.model,
      grants: ['authorization_code', 'refresh_token'],
      debug: this.config.debug
    });
    this.publishAuhorizedClients();
    this.initRoutes();
    return this;
  }

  publishAuhorizedClients() {
    return Meteor.publish('authorizedOAuth', function () {
      if (this.userId == null) {
        return this.ready();
      }

      return Meteor.users.find({
        _id: this.userId
      }, {
        fields: {
          'oauth.authorizedClients': 1
        }
      });
      return typeof user !== "undefined" && user !== null;
    });
  }

  initRoutes() {
    var debugMiddleware, self, transformRequestsNotUsingFormUrlencodedType;
    self = this;

    debugMiddleware = function (req, res, next) {
      if (self.config.debug === true) {
        console.log('[OAuth2Server]', req.method, req.url);
      }

      return next();
    }; // Transforms requests which are POST and aren't "x-www-form-urlencoded" content type
    // and they pass the required information as query strings


    transformRequestsNotUsingFormUrlencodedType = function (req, res, next) {
      if (!req.is('application/x-www-form-urlencoded') && req.method === 'POST') {
        if (self.config.debug === true) {
          console.log('[OAuth2Server]', 'Transforming a request to form-urlencoded with the query going to the body.');
        }

        req.headers['content-type'] = 'application/x-www-form-urlencoded';
        req.body = Object.assign({}, req.body, req.query);
      }

      return next();
    };

    this.app.all('/oauth/token', debugMiddleware, transformRequestsNotUsingFormUrlencodedType, this.oauth.grant());
    this.app.get('/oauth/authorize', debugMiddleware, Meteor.bindEnvironment(function (req, res, next) {
      var client;
      client = self.model.Clients.findOne({
        active: true,
        clientId: req.query.client_id
      });

      if (client == null) {
        return res.redirect('/oauth/error/404');
      }

      if (![].concat(client.redirectUri).includes(req.query.redirect_uri)) {
        return res.redirect('/oauth/error/invalid_redirect_uri');
      }

      return next();
    }));
    this.app.post('/oauth/authorize', debugMiddleware, Meteor.bindEnvironment(function (req, res, next) {
      var user;

      if (req.body.token == null) {
        return res.sendStatus(401).send('No token');
      }

      user = Meteor.users.findOne({
        'services.resume.loginTokens.hashedToken': Accounts._hashLoginToken(req.body.token)
      });

      if (user == null) {
        return res.sendStatus(401).send('Invalid token');
      }

      req.user = {
        id: user._id
      };
      return next();
    }));
    this.app.post('/oauth/authorize', debugMiddleware, this.oauth.authCodeGrant(function (req, next) {
      if (req.body.allow === 'yes') {
        Meteor.users.update(req.user.id, {
          $addToSet: {
            'oauth.authorizedClients': this.clientId
          }
        });
      }

      return next(null, req.body.allow === 'yes', req.user);
    }));
    this.app.use(this.routes);
    return this.app.all('/oauth/*', this.oauth.errorHandler());
  }

};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("rocketchat:oauth2-server", {
  OAuth2Server: OAuth2Server
});

})();

//# sourceURL=meteor://💻app/packages/rocketchat_oauth2-server.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvcm9ja2V0Y2hhdF9vYXV0aDItc2VydmVyL21vZGVsLmNvZmZlZSIsIm1ldGVvcjovL/CfkrthcHAvbW9kZWwuY29mZmVlIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9yb2NrZXRjaGF0X29hdXRoMi1zZXJ2ZXIvb2F1dGguY29mZmVlIiwibWV0ZW9yOi8v8J+Su2FwcC9vYXV0aC5jb2ZmZWUiXSwibmFtZXMiOlsiQWNjZXNzVG9rZW5zIiwiQXV0aENvZGVzIiwiQ2xpZW50cyIsIk1vZGVsIiwiUmVmcmVzaFRva2VucyIsImRlYnVnIiwiY29uc3RydWN0b3IiLCJjb25maWciLCJhY2Nlc3NUb2tlbnNDb2xsZWN0aW9uTmFtZSIsInJlZnJlc2hUb2tlbnNDb2xsZWN0aW9uTmFtZSIsImNsaWVudHNDb2xsZWN0aW9uTmFtZSIsImF1dGhDb2Rlc0NvbGxlY3Rpb25OYW1lIiwiYWNjZXNzVG9rZW5zQ29sbGVjdGlvbiIsIk1ldGVvciIsIkNvbGxlY3Rpb24iLCJyZWZyZXNoVG9rZW5zQ29sbGVjdGlvbiIsImNsaWVudHNDb2xsZWN0aW9uIiwiYXV0aENvZGVzQ29sbGVjdGlvbiIsImdyYW50VHlwZUFsbG93ZWQiLCJjbGllbnRJZCIsImdyYW50VHlwZSIsImNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsInByb3RvdHlwZSIsImdldEFjY2Vzc1Rva2VuIiwiYmluZEVudmlyb25tZW50IiwiYmVhcmVyVG9rZW4iLCJlIiwidG9rZW4iLCJmaW5kT25lIiwiYWNjZXNzVG9rZW4iLCJlcnJvciIsImdldENsaWVudCIsImNsaWVudFNlY3JldCIsImNsaWVudCIsImFjdGl2ZSIsInNhdmVBY2Nlc3NUb2tlbiIsImV4cGlyZXMiLCJ1c2VyIiwidG9rZW5JZCIsImluc2VydCIsInVzZXJJZCIsImlkIiwiZ2V0QXV0aENvZGUiLCJhdXRoQ29kZSIsImNvZGUiLCJzYXZlQXV0aENvZGUiLCJjb2RlSWQiLCJ1cHNlcnQiLCJzYXZlUmVmcmVzaFRva2VuIiwicmVmcmVzaFRva2VuIiwiZ2V0UmVmcmVzaFRva2VuIiwiY2FsbCIsImV4cHJlc3MiLCJvYXV0aHNlcnZlciIsIk5wbSIsInJlcXVpcmUiLCJPQXV0aDJTZXJ2ZXIiLCJhcHAiLCJyb3V0ZXMiLCJtb2RlbCIsIm9hdXRoIiwiZ3JhbnRzIiwicHVibGlzaEF1aG9yaXplZENsaWVudHMiLCJpbml0Um91dGVzIiwicHVibGlzaCIsInJlYWR5IiwidXNlcnMiLCJmaW5kIiwiX2lkIiwiZmllbGRzIiwiZGVidWdNaWRkbGV3YXJlIiwic2VsZiIsInRyYW5zZm9ybVJlcXVlc3RzTm90VXNpbmdGb3JtVXJsZW5jb2RlZFR5cGUiLCJyZXEiLCJyZXMiLCJuZXh0IiwibWV0aG9kIiwidXJsIiwiaXMiLCJoZWFkZXJzIiwiYm9keSIsIk9iamVjdCIsImFzc2lnbiIsInF1ZXJ5IiwiYWxsIiwiZ3JhbnQiLCJnZXQiLCJjbGllbnRfaWQiLCJyZWRpcmVjdCIsImNvbmNhdCIsInJlZGlyZWN0VXJpIiwiaW5jbHVkZXMiLCJyZWRpcmVjdF91cmkiLCJwb3N0Iiwic2VuZFN0YXR1cyIsInNlbmQiLCJBY2NvdW50cyIsIl9oYXNoTG9naW5Ub2tlbiIsImF1dGhDb2RlR3JhbnQiLCJhbGxvdyIsInVwZGF0ZSIsIiRhZGRUb1NldCIsInVzZSIsImVycm9ySGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxZQUFBLEVBQUFDLFNBQUEsRUFBQUMsT0FBQSxFQUFBQyxLQUFBLEVBQUFDLGFBQUEsRUFBQUMsS0FBQTtBQUFBTCxZQUFBLEdBQWUsTUFBZjtBQUNBSSxhQUFBLEdBQWdCLE1BQWhCO0FBQ0FGLE9BQUEsR0FBVSxNQUFWO0FBQ0FELFNBQUEsR0FBWSxNQUFaO0FBQ0FJLEtBQUEsR0FBUSxNQUFSOztBQUVBLEtBQUNGLEtBQUQsR0FBZUEsS0FBQTtBQUFOLFFBQUFBLEtBQUE7QUFDUkcsZUFBYSxDQUFDQyxNQUFBLEdBQU8sRUFBUjtBQ1FSLFVB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LEVBQU1FLElBQU47QUFDbkUsVUFBR0YsR0FBRyxDQUFDTyxJQUFKLENBQVNtQixLQUFULEtBQWtCLEtBQXJCO0FBQ0N4RixjQUFNLENBQUN1RCxLQUFQLENBQWFrQyxNQUFiLENBQW9CM0IsR0FBRyxDQUFDcEMsSUFBSixDQUFTSSxFQUE3QixFQUFpQztBQUFDNEQsbUJBQUEsRUFBVztBQUFDLHVDQUEyQixLQUFDcEY7QUFBN0I7QUFBWixTQUFqQztBQ1lHOztBQUNELGFEWEgwRCxJQUFBLENBQUssSUFBTCxFQUFXRixHQUFHLENBQUNPLElBQUosQ0FBU21CLEtBQVQsS0FBa0IsS0FBN0IsRUFBb0MxQixHQUFHLENBQUNwQyxJQUF4QyxDQ1dHO0FEZjJDLE1BQS9DO0FBTUEsU0FBQ29CLEdBQUQsQ0FBSzZDLEdBQUwsQ0FBUyxLQUFDNUMsTUFBVjtBQ1lFLFdEVkYsS0FBQ0QsR0FBRCxDQUFLMkIsR0FBTCxDQUFTLFVBQVQsRUFBcUIsS0FBQ3hCLEtBQUQsQ0FBTzJDLFlBQVAsRUFBckIsQ0NVRTtBRC9EUzs7QUFqQ2IsQ0FBTSxDIiwiZmlsZSI6Ii9wYWNrYWdlcy9yb2NrZXRjaGF0X29hdXRoMi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJBY2Nlc3NUb2tlbnMgPSB1bmRlZmluZWRcblJlZnJlc2hUb2tlbnMgPSB1bmRlZmluZWRcbkNsaWVudHMgPSB1bmRlZmluZWRcbkF1dGhDb2RlcyA9IHVuZGVmaW5lZFxuZGVidWcgPSB1bmRlZmluZWRcblxuQE1vZGVsID0gY2xhc3MgTW9kZWxcblx0Y29uc3RydWN0b3I6IChjb25maWc9e30pIC0+XG5cdFx0Y29uZmlnLmFjY2Vzc1Rva2Vuc0NvbGxlY3Rpb25OYW1lID89ICdvYXV0aF9hY2Nlc3NfdG9rZW5zJ1xuXHRcdGNvbmZpZy5yZWZyZXNoVG9rZW5zQ29sbGVjdGlvbk5hbWUgPz0gJ29hdXRoX3JlZnJlc2hfdG9rZW5zJ1xuXHRcdGNvbmZpZy5jbGllbnRzQ29sbGVjdGlvbk5hbWUgPz0gJ29hdXRoX2NsaWVudHMnXG5cdFx0Y29uZmlnLmF1dGhDb2Rlc0NvbGxlY3Rpb25OYW1lID89ICdvYXV0aF9hdXRoX2NvZGVzJ1xuXG5cdFx0QGRlYnVnID0gZGVidWcgPSBjb25maWcuZGVidWdcblxuXHRcdEBBY2Nlc3NUb2tlbnMgPSBBY2Nlc3NUb2tlbnMgPSBjb25maWcuYWNjZXNzVG9rZW5zQ29sbGVjdGlvbiBvciBuZXcgTWV0ZW9yLkNvbGxlY3Rpb24gY29uZmlnLmFjY2Vzc1Rva2Vuc0NvbGxlY3Rpb25OYW1lXG5cdFx0QFJlZnJlc2hUb2tlbnMgPSBSZWZyZXNoVG9rZW5zID0gY29uZmlnLnJlZnJlc2hUb2tlbnNDb2xsZWN0aW9uIG9yIG5ldyBNZXRlb3IuQ29sbGVjdGlvbiBjb25maWcucmVmcmVzaFRva2Vuc0NvbGxlY3Rpb25OYW1lXG5cdFx0QENsaWVudHMgPSBDbGllbnRzID0gY29uZmlnLmNsaWVudHNDb2xsZWN0aW9uIG9yIG5ldyBNZXRlb3IuQ29sbGVjdGlvbiBjb25maWcuY2xpZW50c0NvbGxlY3Rpb25OYW1lXG5cdFx0QEF1dGhDb2RlcyA9IEF1dGhDb2RlcyA9IGNvbmZpZy5hdXRoQ29kZXNDb2xsZWN0aW9uIG9yIG5ldyBNZXRlb3IuQ29sbGVjdGlvbiBjb25maWcuYXV0aENvZGVzQ29sbGVjdGlvbk5hbWVcblxuXG5cdGdldEFjY2Vzc1Rva2VuOiBNZXRlb3IuYmluZEVudmlyb25tZW50IChiZWFyZXJUb2tlbiwgY2FsbGJhY2spIC0+XG5cdFx0aWYgZGVidWcgaXMgdHJ1ZVxuXHRcdFx0Y29uc29sZS5sb2cgJ1tPQXV0aDJTZXJ2ZXJdJywgJ2luIGdldEFjY2Vzc1Rva2VuIChiZWFyZXJUb2tlbjonLCBiZWFyZXJUb2tlbiwgJyknXG5cblx0XHR0cnlcblx0XHRcdHRva2VuID0gQWNjZXNzVG9rZW5zLmZpbmRPbmUgYWNjZXNzVG9rZW46IGJlYXJlclRva2VuXG5cdFx0XHRjYWxsYmFjayBudWxsLCB0b2tlblxuXHRcdGNhdGNoIGVcblx0XHRcdGNhbGxiYWNrIGVcblxuXG5cdGdldENsaWVudDogTWV0ZW9yLmJpbmRFbnZpcm9ubWVudCAoY2xpZW50SWQsIGNsaWVudFNlY3JldCwgY2FsbGJhY2spIC0+XG5cdFx0aWYgZGVidWcgaXMgdHJ1ZVxuXHRcdFx0Y29uc29sZS5sb2cgJ1tPQXV0aDJTZXJ2ZXJdJywgJ2luIGdldENsaWVudCAoY2xpZW50SWQ6JywgY2xpZW50SWQsICcsIGNsaWVudFNlY3JldDonLCBjbGllbnRTZWNyZXQsICcpJ1xuXG5cdFx0dHJ5XG5cdFx0XHRpZiBub3QgY2xpZW50U2VjcmV0P1xuXHRcdFx0XHRjbGllbnQgPSBDbGllbnRzLmZpbmRPbmUgeyBhY3RpdmU6IHRydWUsIGNsaWVudElkOiBjbGllbnRJZCB9XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGNsaWVudCA9IENsaWVudHMuZmluZE9uZSB7IGFjdGl2ZTogdHJ1ZSwgY2xpZW50SWQ6IGNsaWVudElkLCBjbGllbnRTZWNyZXQ6IGNsaWVudFNlY3JldCB9XG5cdFx0XHRjYWxsYmFjayBudWxsLCBjbGllbnRcblx0XHRjYXRjaCBlXG5cdFx0XHRjYWxsYmFjayBlXG5cblxuXHRncmFudFR5cGVBbGxvd2VkOiAoY2xpZW50SWQsIGdyYW50VHlwZSwgY2FsbGJhY2spIC0+XG5cdFx0aWYgZGVidWcgaXMgdHJ1ZVxuXHRcdFx0Y29uc29sZS5sb2cgJ1tPQXV0aDJTZXJ2ZXJdJywgJ2luIGdyYW50VHlwZUFsbG93ZWQgKGNsaWVudElkOicsIGNsaWVudElkLCAnLCBncmFudFR5cGU6JywgZ3JhbnRUeXBlICsgJyknXG5cblx0XHRyZXR1cm4gY2FsbGJhY2soZmFsc2UsIGdyYW50VHlwZSBpbiBbJ2F1dGhvcml6YXRpb25fY29kZScsICdyZWZyZXNoX3Rva2VuJ10pXG5cblxuXHRzYXZlQWNjZXNzVG9rZW46IE1ldGVvci5iaW5kRW52aXJvbm1lbnQgKHRva2VuLCBjbGllbnRJZCwgZXhwaXJlcywgdXNlciwgY2FsbGJhY2spIC0+XG5cdFx0aWYgZGVidWcgaXMgdHJ1ZVxuXHRcdFx0Y29uc29sZS5sb2cgJ1tPQXV0aDJTZXJ2ZXJdJywgJ2luIHNhdmVBY2Nlc3NUb2tlbiAodG9rZW46JywgdG9rZW4sICcsIGNsaWVudElkOicsIGNsaWVudElkLCAnLCB1c2VyOicsIHVzZXIsICcsIGV4cGlyZXM6JywgZXhwaXJlcywgJyknXG5cblx0XHR0cnlcblx0XHRcdHRva2VuSWQgPSBBY2Nlc3NUb2tlbnMuaW5zZXJ0XG5cdFx0XHRcdGFjY2Vzc1Rva2VuOiB0b2tlblxuXHRcdFx0XHRjbGllbnRJZDogY2xpZW50SWRcblx0XHRcdFx0dXNlcklkOiB1c2VyLmlkXG5cdFx0XHRcdGV4cGlyZXM6IGV4cGlyZXNcblxuXHRcdFx0Y2FsbGJhY2sgbnVsbCwgdG9rZW5JZFxuXHRcdGNhdGNoIGVcblx0XHRcdGNhbGxiYWNrIGVcblxuXG5cdGdldEF1dGhDb2RlOiBNZXRlb3IuYmluZEVudmlyb25tZW50IChhdXRoQ29kZSwgY2FsbGJhY2spIC0+XG5cdFx0aWYgZGVidWcgaXMgdHJ1ZVxuXHRcdFx0Y29uc29sZS5sb2cgJ1tPQXV0aDJTZXJ2ZXJdJywgJ2luIGdldEF1dGhDb2RlIChhdXRoQ29kZTogJyArIGF1dGhDb2RlICsgJyknXG5cblx0XHR0cnlcblx0XHRcdGNvZGUgPSBBdXRoQ29kZXMuZmluZE9uZSBhdXRoQ29kZTogYXV0aENvZGVcblx0XHRcdGNhbGxiYWNrIG51bGwsIGNvZGVcblx0XHRjYXRjaCBlXG5cdFx0XHRjYWxsYmFjayBlXG5cblxuXHRzYXZlQXV0aENvZGU6IE1ldGVvci5iaW5kRW52aXJvbm1lbnQgKGNvZGUsIGNsaWVudElkLCBleHBpcmVzLCB1c2VyLCBjYWxsYmFjaykgLT5cblx0XHRpZiBkZWJ1ZyBpcyB0cnVlXG5cdFx0XHRjb25zb2xlLmxvZyAnW09BdXRoMlNlcnZlcl0nLCAnaW4gc2F2ZUF1dGhDb2RlIChjb2RlOicsIGNvZGUsICcsIGNsaWVudElkOicsIGNsaWVudElkLCAnLCBleHBpcmVzOicsIGV4cGlyZXMsICcsIHVzZXI6JywgdXNlciwgJyknXG5cblx0XHR0cnlcblx0XHRcdGNvZGVJZCA9IEF1dGhDb2Rlcy51cHNlcnRcblx0XHRcdFx0YXV0aENvZGU6IGNvZGVcblx0XHRcdCxcblx0XHRcdFx0YXV0aENvZGU6IGNvZGVcblx0XHRcdFx0Y2xpZW50SWQ6IGNsaWVudElkXG5cdFx0XHRcdHVzZXJJZDogdXNlci5pZFxuXHRcdFx0XHRleHBpcmVzOiBleHBpcmVzXG5cblx0XHRcdGNhbGxiYWNrIG51bGwsIGNvZGVJZFxuXHRcdGNhdGNoIGVcblx0XHRcdGNhbGxiYWNrIGVcblxuXG5cdHNhdmVSZWZyZXNoVG9rZW46IE1ldGVvci5iaW5kRW52aXJvbm1lbnQgKHRva2VuLCBjbGllbnRJZCwgZXhwaXJlcywgdXNlciwgY2FsbGJhY2spIC0+XG5cdFx0aWYgZGVidWcgaXMgdHJ1ZVxuXHRcdFx0Y29uc29sZS5sb2cgJ1tPQXV0aDJTZXJ2ZXJdJywgJ2luIHNhdmVSZWZyZXNoVG9rZW4gKHRva2VuOicsIHRva2VuLCAnLCBjbGllbnRJZDonLCBjbGllbnRJZCwgJywgdXNlcjonLCB1c2VyLCAnLCBleHBpcmVzOicsIGV4cGlyZXMsICcpJ1xuXG5cdFx0dHJ5XG5cdFx0XHR0b2tlbklkID0gUmVmcmVzaFRva2Vucy5pbnNlcnRcblx0XHRcdFx0cmVmcmVzaFRva2VuOiB0b2tlblxuXHRcdFx0XHRjbGllbnRJZDogY2xpZW50SWRcblx0XHRcdFx0dXNlcklkOiB1c2VyLmlkXG5cdFx0XHRcdGV4cGlyZXM6IGV4cGlyZXNcblxuXHRcdFx0XHRjYWxsYmFjayBudWxsLCB0b2tlbklkXG5cdFx0Y2F0Y2ggZVxuXHRcdFx0Y2FsbGJhY2sgZVxuXG5cblx0Z2V0UmVmcmVzaFRva2VuOiBNZXRlb3IuYmluZEVudmlyb25tZW50IChyZWZyZXNoVG9rZW4sIGNhbGxiYWNrKSAtPlxuXHRcdGlmIGRlYnVnIGlzIHRydWVcblx0XHRcdGNvbnNvbGUubG9nICdbT0F1dGgyU2VydmVyXScsICdpbiBnZXRSZWZyZXNoVG9rZW4gKHJlZnJlc2hUb2tlbjogJyArIHJlZnJlc2hUb2tlbiArICcpJ1xuXG5cdFx0dHJ5XG5cdFx0XHR0b2tlbiA9IFJlZnJlc2hUb2tlbnMuZmluZE9uZSByZWZyZXNoVG9rZW46IHJlZnJlc2hUb2tlblxuXHRcdFx0Y2FsbGJhY2sgbnVsbCwgdG9rZW5cblx0XHRjYXRjaCBlXG5cdFx0XHRjYWxsYmFjayBlXG4iLCJ2YXIgQWNjZXNzVG9rZW5zLCBBdXRoQ29kZXMsIENsaWVudHMsIE1vZGVsLCBSZWZyZXNoVG9rZW5zLCBkZWJ1ZztcblxuQWNjZXNzVG9rZW5zID0gdm9pZCAwO1xuXG5SZWZyZXNoVG9rZW5zID0gdm9pZCAwO1xuXG5DbGllbnRzID0gdm9pZCAwO1xuXG5BdXRoQ29kZXMgPSB2b2lkIDA7XG5cbmRlYnVnID0gdm9pZCAwO1xuXG50aGlzLk1vZGVsID0gTW9kZWwgPSAoZnVuY3Rpb24oKSB7XG4gIGNsYXNzIE1vZGVsIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xuICAgICAgaWYgKGNvbmZpZy5hY2Nlc3NUb2tlbnNDb2xsZWN0aW9uTmFtZSA9PSBudWxsKSB7XG4gICAgICAgIGNvbmZpZy5hY2Nlc3NUb2tlbnNDb2xsZWN0aW9uTmFtZSA9ICdvYXV0aF9hY2Nlc3NfdG9rZW5zJztcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcucmVmcmVzaFRva2Vuc0NvbGxlY3Rpb25OYW1lID09IG51bGwpIHtcbiAgICAgICAgY29uZmlnLnJlZnJlc2hUb2tlbnNDb2xsZWN0aW9uTmFtZSA9ICdvYXV0aF9yZWZyZXNoX3Rva2Vucyc7XG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLmNsaWVudHNDb2xsZWN0aW9uTmFtZSA9PSBudWxsKSB7XG4gICAgICAgIGNvbmZpZy5jbGllbnRzQ29sbGVjdGlvbk5hbWUgPSAnb2F1dGhfY2xpZW50cyc7XG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLmF1dGhDb2Rlc0NvbGxlY3Rpb25OYW1lID09IG51bGwpIHtcbiAgICAgICAgY29uZmlnLmF1dGhDb2Rlc0NvbGxlY3Rpb25OYW1lID0gJ29hdXRoX2F1dGhfY29kZXMnO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWJ1ZyA9IGRlYnVnID0gY29uZmlnLmRlYnVnO1xuICAgICAgdGhpcy5BY2Nlc3NUb2tlbnMgPSBBY2Nlc3NUb2tlbnMgPSBjb25maWcuYWNjZXNzVG9rZW5zQ29sbGVjdGlvbiB8fCBuZXcgTWV0ZW9yLkNvbGxlY3Rpb24oY29uZmlnLmFjY2Vzc1Rva2Vuc0NvbGxlY3Rpb25OYW1lKTtcbiAgICAgIHRoaXMuUmVmcmVzaFRva2VucyA9IFJlZnJlc2hUb2tlbnMgPSBjb25maWcucmVmcmVzaFRva2Vuc0NvbGxlY3Rpb24gfHwgbmV3IE1ldGVvci5Db2xsZWN0aW9uKGNvbmZpZy5yZWZyZXNoVG9rZW5zQ29sbGVjdGlvbk5hbWUpO1xuICAgICAgdGhpcy5DbGllbnRzID0gQ2xpZW50cyA9IGNvbmZpZy5jbGllbnRzQ29sbGVjdGlvbiB8fCBuZXcgTWV0ZW9yLkNvbGxlY3Rpb24oY29uZmlnLmNsaWVudHNDb2xsZWN0aW9uTmFtZSk7XG4gICAgICB0aGlzLkF1dGhDb2RlcyA9IEF1dGhDb2RlcyA9IGNvbmZpZy5hdXRoQ29kZXNDb2xsZWN0aW9uIHx8IG5ldyBNZXRlb3IuQ29sbGVjdGlvbihjb25maWcuYXV0aENvZGVzQ29sbGVjdGlvbk5hbWUpO1xuICAgIH1cblxuICAgIGdyYW50VHlwZUFsbG93ZWQoY2xpZW50SWQsIGdyYW50VHlwZSwgY2FsbGJhY2spIHtcbiAgICAgIGlmIChkZWJ1ZyA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnW09BdXRoMlNlcnZlcl0nLCAnaW4gZ3JhbnRUeXBlQWxsb3dlZCAoY2xpZW50SWQ6JywgY2xpZW50SWQsICcsIGdyYW50VHlwZTonLCBncmFudFR5cGUgKyAnKScpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNhbGxiYWNrKGZhbHNlLCBncmFudFR5cGUgPT09ICdhdXRob3JpemF0aW9uX2NvZGUnIHx8IGdyYW50VHlwZSA9PT0gJ3JlZnJlc2hfdG9rZW4nKTtcbiAgICB9XG5cbiAgfTtcblxuICBNb2RlbC5wcm90b3R5cGUuZ2V0QWNjZXNzVG9rZW4gPSBNZXRlb3IuYmluZEVudmlyb25tZW50KGZ1bmN0aW9uKGJlYXJlclRva2VuLCBjYWxsYmFjaykge1xuICAgIHZhciBlLCB0b2tlbjtcbiAgICBpZiAoZGVidWcgPT09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbT0F1dGgyU2VydmVyXScsICdpbiBnZXRBY2Nlc3NUb2tlbiAoYmVhcmVyVG9rZW46JywgYmVhcmVyVG9rZW4sICcpJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICB0b2tlbiA9IEFjY2Vzc1Rva2Vucy5maW5kT25lKHtcbiAgICAgICAgYWNjZXNzVG9rZW46IGJlYXJlclRva2VuXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCB0b2tlbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGUgPSBlcnJvcjtcbiAgICAgIHJldHVybiBjYWxsYmFjayhlKTtcbiAgICB9XG4gIH0pO1xuXG4gIE1vZGVsLnByb3RvdHlwZS5nZXRDbGllbnQgPSBNZXRlb3IuYmluZEVudmlyb25tZW50KGZ1bmN0aW9uKGNsaWVudElkLCBjbGllbnRTZWNyZXQsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGNsaWVudCwgZTtcbiAgICBpZiAoZGVidWcgPT09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbT0F1dGgyU2VydmVyXScsICdpbiBnZXRDbGllbnQgKGNsaWVudElkOicsIGNsaWVudElkLCAnLCBjbGllbnRTZWNyZXQ6JywgY2xpZW50U2VjcmV0LCAnKScpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgaWYgKGNsaWVudFNlY3JldCA9PSBudWxsKSB7XG4gICAgICAgIGNsaWVudCA9IENsaWVudHMuZmluZE9uZSh7XG4gICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgIGNsaWVudElkOiBjbGllbnRJZFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsaWVudCA9IENsaWVudHMuZmluZE9uZSh7XG4gICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgIGNsaWVudElkOiBjbGllbnRJZCxcbiAgICAgICAgICBjbGllbnRTZWNyZXQ6IGNsaWVudFNlY3JldFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBjbGllbnQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBlID0gZXJyb3I7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZSk7XG4gICAgfVxuICB9KTtcblxuICBNb2RlbC5wcm90b3R5cGUuc2F2ZUFjY2Vzc1Rva2VuID0gTWV0ZW9yLmJpbmRFbnZpcm9ubWVudChmdW5jdGlvbih0b2tlbiwgY2xpZW50SWQsIGV4cGlyZXMsIHVzZXIsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGUsIHRva2VuSWQ7XG4gICAgaWYgKGRlYnVnID09PSB0cnVlKSB7XG4gICAgICBjb25zb2xlLmxvZygnW09BdXRoMlNlcnZlcl0nLCAnaW4gc2F2ZUFjY2Vzc1Rva2VuICh0b2tlbjonLCB0b2tlbiwgJywgY2xpZW50SWQ6JywgY2xpZW50SWQsICcsIHVzZXI6JywgdXNlciwgJywgZXhwaXJlczonLCBleHBpcmVzLCAnKScpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgdG9rZW5JZCA9IEFjY2Vzc1Rva2Vucy5pbnNlcnQoe1xuICAgICAgICBhY2Nlc3NUb2tlbjogdG9rZW4sXG4gICAgICAgIGNsaWVudElkOiBjbGllbnRJZCxcbiAgICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgICAgICBleHBpcmVzOiBleHBpcmVzXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCB0b2tlbklkKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZSA9IGVycm9yO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgTW9kZWwucHJvdG90eXBlLmdldEF1dGhDb2RlID0gTWV0ZW9yLmJpbmRFbnZpcm9ubWVudChmdW5jdGlvbihhdXRoQ29kZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgY29kZSwgZTtcbiAgICBpZiAoZGVidWcgPT09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbT0F1dGgyU2VydmVyXScsICdpbiBnZXRBdXRoQ29kZSAoYXV0aENvZGU6ICcgKyBhdXRoQ29kZSArICcpJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb2RlID0gQXV0aENvZGVzLmZpbmRPbmUoe1xuICAgICAgICBhdXRoQ29kZTogYXV0aENvZGVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIGNvZGUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBlID0gZXJyb3I7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZSk7XG4gICAgfVxuICB9KTtcblxuICBNb2RlbC5wcm90b3R5cGUuc2F2ZUF1dGhDb2RlID0gTWV0ZW9yLmJpbmRFbnZpcm9ubWVudChmdW5jdGlvbihjb2RlLCBjbGllbnRJZCwgZXhwaXJlcywgdXNlciwgY2FsbGJhY2spIHtcbiAgICB2YXIgY29kZUlkLCBlO1xuICAgIGlmIChkZWJ1ZyA9PT0gdHJ1ZSkge1xuICAgICAgY29uc29sZS5sb2coJ1tPQXV0aDJTZXJ2ZXJdJywgJ2luIHNhdmVBdXRoQ29kZSAoY29kZTonLCBjb2RlLCAnLCBjbGllbnRJZDonLCBjbGllbnRJZCwgJywgZXhwaXJlczonLCBleHBpcmVzLCAnLCB1c2VyOicsIHVzZXIsICcpJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb2RlSWQgPSBBdXRoQ29kZXMudXBzZXJ0KHtcbiAgICAgICAgYXV0aENvZGU6IGNvZGVcbiAgICAgIH0sIHtcbiAgICAgICAgYXV0aENvZGU6IGNvZGUsXG4gICAgICAgIGNsaWVudElkOiBjbGllbnRJZCxcbiAgICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgICAgICBleHBpcmVzOiBleHBpcmVzXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBjb2RlSWQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBlID0gZXJyb3I7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZSk7XG4gICAgfVxuICB9KTtcblxuICBNb2RlbC5wcm90b3R5cGUuc2F2ZVJlZnJlc2hUb2tlbiA9IE1ldGVvci5iaW5kRW52aXJvbm1lbnQoZnVuY3Rpb24odG9rZW4sIGNsaWVudElkLCBleHBpcmVzLCB1c2VyLCBjYWxsYmFjaykge1xuICAgIHZhciBlLCB0b2tlbklkO1xuICAgIGlmIChkZWJ1ZyA9PT0gdHJ1ZSkge1xuICAgICAgY29uc29sZS5sb2coJ1tPQXV0aDJTZXJ2ZXJdJywgJ2luIHNhdmVSZWZyZXNoVG9rZW4gKHRva2VuOicsIHRva2VuLCAnLCBjbGllbnRJZDonLCBjbGllbnRJZCwgJywgdXNlcjonLCB1c2VyLCAnLCBleHBpcmVzOicsIGV4cGlyZXMsICcpJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdG9rZW5JZCA9IFJlZnJlc2hUb2tlbnMuaW5zZXJ0KHtcbiAgICAgICAgcmVmcmVzaFRva2VuOiB0b2tlbixcbiAgICAgICAgY2xpZW50SWQ6IGNsaWVudElkLFxuICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgICAgIGV4cGlyZXM6IGV4cGlyZXNcbiAgICAgIH0sIGNhbGxiYWNrKG51bGwsIHRva2VuSWQpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZSA9IGVycm9yO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgTW9kZWwucHJvdG90eXBlLmdldFJlZnJlc2hUb2tlbiA9IE1ldGVvci5iaW5kRW52aXJvbm1lbnQoZnVuY3Rpb24ocmVmcmVzaFRva2VuLCBjYWxsYmFjaykge1xuICAgIHZhciBlLCB0b2tlbjtcbiAgICBpZiAoZGVidWcgPT09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbT0F1dGgyU2VydmVyXScsICdpbiBnZXRSZWZyZXNoVG9rZW4gKHJlZnJlc2hUb2tlbjogJyArIHJlZnJlc2hUb2tlbiArICcpJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICB0b2tlbiA9IFJlZnJlc2hUb2tlbnMuZmluZE9uZSh7XG4gICAgICAgIHJlZnJlc2hUb2tlbjogcmVmcmVzaFRva2VuXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCB0b2tlbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGUgPSBlcnJvcjtcbiAgICAgIHJldHVybiBjYWxsYmFjayhlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBNb2RlbDtcblxufSkuY2FsbCh0aGlzKTtcbiIsIm9hdXRoc2VydmVyID0gTnBtLnJlcXVpcmUoJ29hdXRoMi1zZXJ2ZXInKVxuZXhwcmVzcyA9IE5wbS5yZXF1aXJlKCdleHByZXNzJylcblxuIyBXZWJBcHAucmF3Q29ubmVjdEhhbmRsZXJzLnVzZSBhcHBcbiMgSnNvblJvdXRlcy5NaWRkbGV3YXJlLnVzZSBhcHBcblxuXG5jbGFzcyBPQXV0aDJTZXJ2ZXJcblx0Y29uc3RydWN0b3I6IChAY29uZmlnPXt9KSAtPlxuXHRcdEBhcHAgPSBleHByZXNzKClcblxuXHRcdEByb3V0ZXMgPSBleHByZXNzKClcblxuXHRcdEBtb2RlbCA9IG5ldyBNb2RlbChAY29uZmlnKVxuXG5cdFx0QG9hdXRoID0gb2F1dGhzZXJ2ZXJcblx0XHRcdG1vZGVsOiBAbW9kZWxcblx0XHRcdGdyYW50czogWydhdXRob3JpemF0aW9uX2NvZGUnLCAncmVmcmVzaF90b2tlbiddXG5cdFx0XHRkZWJ1ZzogQGNvbmZpZy5kZWJ1Z1xuXG5cdFx0QHB1Ymxpc2hBdWhvcml6ZWRDbGllbnRzKClcblx0XHRAaW5pdFJvdXRlcygpXG5cblx0XHRyZXR1cm4gQFxuXG5cblx0cHVibGlzaEF1aG9yaXplZENsaWVudHM6IC0+XG5cdFx0TWV0ZW9yLnB1Ymxpc2ggJ2F1dGhvcml6ZWRPQXV0aCcsIC0+XG5cdFx0XHRcdGlmIG5vdCBAdXNlcklkP1xuXHRcdFx0XHRcdHJldHVybiBAcmVhZHkoKVxuXG5cdFx0XHRcdHJldHVybiBNZXRlb3IudXNlcnMuZmluZFxuXHRcdFx0XHRcdF9pZDogQHVzZXJJZFxuXHRcdFx0XHQsXG5cdFx0XHRcdFx0ZmllbGRzOlxuXHRcdFx0XHRcdFx0J29hdXRoLmF1dGhvcml6ZWRDbGllbnRzJzogMVxuXG5cdFx0XHRcdHJldHVybiB1c2VyP1xuXG5cblx0aW5pdFJvdXRlczogLT5cblx0XHRzZWxmID0gQFxuXHRcdGRlYnVnTWlkZGxld2FyZSA9IChyZXEsIHJlcywgbmV4dCkgLT5cblx0XHRcdGlmIHNlbGYuY29uZmlnLmRlYnVnIGlzIHRydWVcblx0XHRcdFx0Y29uc29sZS5sb2cgJ1tPQXV0aDJTZXJ2ZXJdJywgcmVxLm1ldGhvZCwgcmVxLnVybFxuXHRcdFx0bmV4dCgpXG5cblx0XHQjIFRyYW5zZm9ybXMgcmVxdWVzdHMgd2hpY2ggYXJlIFBPU1QgYW5kIGFyZW4ndCBcIngtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIGNvbnRlbnQgdHlwZVxuXHRcdCMgYW5kIHRoZXkgcGFzcyB0aGUgcmVxdWlyZWQgaW5mb3JtYXRpb24gYXMgcXVlcnkgc3RyaW5nc1xuXHRcdHRyYW5zZm9ybVJlcXVlc3RzTm90VXNpbmdGb3JtVXJsZW5jb2RlZFR5cGUgPSAocmVxLCByZXMsIG5leHQpIC0+XG5cdFx0XHRpZiBub3QgcmVxLmlzKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKSBhbmQgcmVxLm1ldGhvZCBpcyAnUE9TVCdcblx0XHRcdFx0aWYgc2VsZi5jb25maWcuZGVidWcgaXMgdHJ1ZVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nICdbT0F1dGgyU2VydmVyXScsICdUcmFuc2Zvcm1pbmcgYSByZXF1ZXN0IHRvIGZvcm0tdXJsZW5jb2RlZCB3aXRoIHRoZSBxdWVyeSBnb2luZyB0byB0aGUgYm9keS4nXG5cdFx0XHRcdHJlcS5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG5cdFx0XHRcdHJlcS5ib2R5ID0gT2JqZWN0LmFzc2lnbiB7fSwgcmVxLmJvZHksIHJlcS5xdWVyeVxuXHRcdFx0bmV4dCgpXG5cblx0XHRAYXBwLmFsbCAnL29hdXRoL3Rva2VuJywgZGVidWdNaWRkbGV3YXJlLCB0cmFuc2Zvcm1SZXF1ZXN0c05vdFVzaW5nRm9ybVVybGVuY29kZWRUeXBlLCBAb2F1dGguZ3JhbnQoKVxuXG5cdFx0QGFwcC5nZXQgJy9vYXV0aC9hdXRob3JpemUnLCBkZWJ1Z01pZGRsZXdhcmUsIE1ldGVvci5iaW5kRW52aXJvbm1lbnQgKHJlcSwgcmVzLCBuZXh0KSAtPlxuXHRcdFx0Y2xpZW50ID0gc2VsZi5tb2RlbC5DbGllbnRzLmZpbmRPbmUoeyBhY3RpdmU6IHRydWUsIGNsaWVudElkOiByZXEucXVlcnkuY2xpZW50X2lkIH0pXG5cdFx0XHRpZiBub3QgY2xpZW50P1xuXHRcdFx0XHRyZXR1cm4gcmVzLnJlZGlyZWN0ICcvb2F1dGgvZXJyb3IvNDA0J1xuXG5cdFx0XHRpZiBub3QgW10uY29uY2F0KGNsaWVudC5yZWRpcmVjdFVyaSkuaW5jbHVkZXMocmVxLnF1ZXJ5LnJlZGlyZWN0X3VyaSlcblx0XHRcdFx0cmV0dXJuIHJlcy5yZWRpcmVjdCAnL29hdXRoL2Vycm9yL2ludmFsaWRfcmVkaXJlY3RfdXJpJ1xuXG5cdFx0XHRuZXh0KClcblxuXHRcdEBhcHAucG9zdCAnL29hdXRoL2F1dGhvcml6ZScsIGRlYnVnTWlkZGxld2FyZSwgTWV0ZW9yLmJpbmRFbnZpcm9ubWVudCAocmVxLCByZXMsIG5leHQpIC0+XG5cdFx0XHRpZiBub3QgcmVxLmJvZHkudG9rZW4/XG5cdFx0XHRcdHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDEpLnNlbmQoJ05vIHRva2VuJylcblxuXHRcdFx0dXNlciA9IE1ldGVvci51c2Vycy5maW5kT25lXG5cdFx0XHRcdCdzZXJ2aWNlcy5yZXN1bWUubG9naW5Ub2tlbnMuaGFzaGVkVG9rZW4nOiBBY2NvdW50cy5faGFzaExvZ2luVG9rZW4gcmVxLmJvZHkudG9rZW5cblxuXHRcdFx0aWYgbm90IHVzZXI/XG5cdFx0XHRcdHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDEpLnNlbmQoJ0ludmFsaWQgdG9rZW4nKVxuXG5cdFx0XHRyZXEudXNlciA9XG5cdFx0XHRcdGlkOiB1c2VyLl9pZFxuXG5cdFx0XHRuZXh0KClcblxuXG5cdFx0QGFwcC5wb3N0ICcvb2F1dGgvYXV0aG9yaXplJywgZGVidWdNaWRkbGV3YXJlLCBAb2F1dGguYXV0aENvZGVHcmFudCAocmVxLCBuZXh0KSAtPlxuXHRcdFx0aWYgcmVxLmJvZHkuYWxsb3cgaXMgJ3llcydcblx0XHRcdFx0TWV0ZW9yLnVzZXJzLnVwZGF0ZSByZXEudXNlci5pZCwgeyRhZGRUb1NldDogeydvYXV0aC5hdXRob3JpemVkQ2xpZW50cyc6IEBjbGllbnRJZH19XG5cblx0XHRcdG5leHQobnVsbCwgcmVxLmJvZHkuYWxsb3cgaXMgJ3llcycsIHJlcS51c2VyKVxuXG5cdFx0QGFwcC51c2UgQHJvdXRlc1xuXG5cdFx0QGFwcC5hbGwgJy9vYXV0aC8qJywgQG9hdXRoLmVycm9ySGFuZGxlcigpXG4iLCJ2YXIgZXhwcmVzcywgb2F1dGhzZXJ2ZXI7ICAgICAgICAgICAgICBcblxub2F1dGhzZXJ2ZXIgPSBOcG0ucmVxdWlyZSgnb2F1dGgyLXNlcnZlcicpO1xuXG5leHByZXNzID0gTnBtLnJlcXVpcmUoJ2V4cHJlc3MnKTtcblxuLy8gV2ViQXBwLnJhd0Nvbm5lY3RIYW5kbGVycy51c2UgYXBwXG4vLyBKc29uUm91dGVzLk1pZGRsZXdhcmUudXNlIGFwcFxuT0F1dGgyU2VydmVyID0gY2xhc3MgT0F1dGgyU2VydmVyIHtcbiAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLmFwcCA9IGV4cHJlc3MoKTtcbiAgICB0aGlzLnJvdXRlcyA9IGV4cHJlc3MoKTtcbiAgICB0aGlzLm1vZGVsID0gbmV3IE1vZGVsKHRoaXMuY29uZmlnKTtcbiAgICB0aGlzLm9hdXRoID0gb2F1dGhzZXJ2ZXIoe1xuICAgICAgbW9kZWw6IHRoaXMubW9kZWwsXG4gICAgICBncmFudHM6IFsnYXV0aG9yaXphdGlvbl9jb2RlJywgJ3JlZnJlc2hfdG9rZW4nXSxcbiAgICAgIGRlYnVnOiB0aGlzLmNvbmZpZy5kZWJ1Z1xuICAgIH0pO1xuICAgIHRoaXMucHVibGlzaEF1aG9yaXplZENsaWVudHMoKTtcbiAgICB0aGlzLmluaXRSb3V0ZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1Ymxpc2hBdWhvcml6ZWRDbGllbnRzKCkge1xuICAgIHJldHVybiBNZXRlb3IucHVibGlzaCgnYXV0aG9yaXplZE9BdXRoJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy51c2VySWQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkeSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKHtcbiAgICAgICAgX2lkOiB0aGlzLnVzZXJJZFxuICAgICAgfSwge1xuICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAnb2F1dGguYXV0aG9yaXplZENsaWVudHMnOiAxXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHR5cGVvZiB1c2VyICE9PSBcInVuZGVmaW5lZFwiICYmIHVzZXIgIT09IG51bGw7XG4gICAgfSk7XG4gIH1cblxuICBpbml0Um91dGVzKCkge1xuICAgIHZhciBkZWJ1Z01pZGRsZXdhcmUsIHNlbGYsIHRyYW5zZm9ybVJlcXVlc3RzTm90VXNpbmdGb3JtVXJsZW5jb2RlZFR5cGU7XG4gICAgc2VsZiA9IHRoaXM7XG4gICAgZGVidWdNaWRkbGV3YXJlID0gZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgICAgIGlmIChzZWxmLmNvbmZpZy5kZWJ1ZyA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnW09BdXRoMlNlcnZlcl0nLCByZXEubWV0aG9kLCByZXEudXJsKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfTtcbiAgICAvLyBUcmFuc2Zvcm1zIHJlcXVlc3RzIHdoaWNoIGFyZSBQT1NUIGFuZCBhcmVuJ3QgXCJ4LXd3dy1mb3JtLXVybGVuY29kZWRcIiBjb250ZW50IHR5cGVcbiAgICAvLyBhbmQgdGhleSBwYXNzIHRoZSByZXF1aXJlZCBpbmZvcm1hdGlvbiBhcyBxdWVyeSBzdHJpbmdzXG4gICAgdHJhbnNmb3JtUmVxdWVzdHNOb3RVc2luZ0Zvcm1VcmxlbmNvZGVkVHlwZSA9IGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICBpZiAoIXJlcS5pcygnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJykgJiYgcmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5kZWJ1ZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdbT0F1dGgyU2VydmVyXScsICdUcmFuc2Zvcm1pbmcgYSByZXF1ZXN0IHRvIGZvcm0tdXJsZW5jb2RlZCB3aXRoIHRoZSBxdWVyeSBnb2luZyB0byB0aGUgYm9keS4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXEuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcbiAgICAgICAgcmVxLmJvZHkgPSBPYmplY3QuYXNzaWduKHt9LCByZXEuYm9keSwgcmVxLnF1ZXJ5KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfTtcbiAgICB0aGlzLmFwcC5hbGwoJy9vYXV0aC90b2tlbicsIGRlYnVnTWlkZGxld2FyZSwgdHJhbnNmb3JtUmVxdWVzdHNOb3RVc2luZ0Zvcm1VcmxlbmNvZGVkVHlwZSwgdGhpcy5vYXV0aC5ncmFudCgpKTtcbiAgICB0aGlzLmFwcC5nZXQoJy9vYXV0aC9hdXRob3JpemUnLCBkZWJ1Z01pZGRsZXdhcmUsIE1ldGVvci5iaW5kRW52aXJvbm1lbnQoZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgICAgIHZhciBjbGllbnQ7XG4gICAgICBjbGllbnQgPSBzZWxmLm1vZGVsLkNsaWVudHMuZmluZE9uZSh7XG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgY2xpZW50SWQ6IHJlcS5xdWVyeS5jbGllbnRfaWRcbiAgICAgIH0pO1xuICAgICAgaWYgKGNsaWVudCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoJy9vYXV0aC9lcnJvci80MDQnKTtcbiAgICAgIH1cbiAgICAgIGlmICghW10uY29uY2F0KGNsaWVudC5yZWRpcmVjdFVyaSkuaW5jbHVkZXMocmVxLnF1ZXJ5LnJlZGlyZWN0X3VyaSkpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnL29hdXRoL2Vycm9yL2ludmFsaWRfcmVkaXJlY3RfdXJpJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH0pKTtcbiAgICB0aGlzLmFwcC5wb3N0KCcvb2F1dGgvYXV0aG9yaXplJywgZGVidWdNaWRkbGV3YXJlLCBNZXRlb3IuYmluZEVudmlyb25tZW50KGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICB2YXIgdXNlcjtcbiAgICAgIGlmIChyZXEuYm9keS50b2tlbiA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDEpLnNlbmQoJ05vIHRva2VuJyk7XG4gICAgICB9XG4gICAgICB1c2VyID0gTWV0ZW9yLnVzZXJzLmZpbmRPbmUoe1xuICAgICAgICAnc2VydmljZXMucmVzdW1lLmxvZ2luVG9rZW5zLmhhc2hlZFRva2VuJzogQWNjb3VudHMuX2hhc2hMb2dpblRva2VuKHJlcS5ib2R5LnRva2VuKVxuICAgICAgfSk7XG4gICAgICBpZiAodXNlciA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDEpLnNlbmQoJ0ludmFsaWQgdG9rZW4nKTtcbiAgICAgIH1cbiAgICAgIHJlcS51c2VyID0ge1xuICAgICAgICBpZDogdXNlci5faWRcbiAgICAgIH07XG4gICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH0pKTtcbiAgICB0aGlzLmFwcC5wb3N0KCcvb2F1dGgvYXV0aG9yaXplJywgZGVidWdNaWRkbGV3YXJlLCB0aGlzLm9hdXRoLmF1dGhDb2RlR3JhbnQoZnVuY3Rpb24ocmVxLCBuZXh0KSB7XG4gICAgICBpZiAocmVxLmJvZHkuYWxsb3cgPT09ICd5ZXMnKSB7XG4gICAgICAgIE1ldGVvci51c2Vycy51cGRhdGUocmVxLnVzZXIuaWQsIHtcbiAgICAgICAgICAkYWRkVG9TZXQ6IHtcbiAgICAgICAgICAgICdvYXV0aC5hdXRob3JpemVkQ2xpZW50cyc6IHRoaXMuY2xpZW50SWRcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHQobnVsbCwgcmVxLmJvZHkuYWxsb3cgPT09ICd5ZXMnLCByZXEudXNlcik7XG4gICAgfSkpO1xuICAgIHRoaXMuYXBwLnVzZSh0aGlzLnJvdXRlcyk7XG4gICAgcmV0dXJuIHRoaXMuYXBwLmFsbCgnL29hdXRoLyonLCB0aGlzLm9hdXRoLmVycm9ySGFuZGxlcigpKTtcbiAgfVxuXG59O1xuIl19
