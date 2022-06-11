(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var check = Package.check.check;
var Match = Package.check.Match;
var _ = Package.underscore._;
var JsonRoutes = Package['simple:json-routes'].JsonRoutes;
var RestMiddleware = Package['simple:json-routes'].RestMiddleware;
var Promise = Package.promise.Promise;
var Accounts = Package['accounts-base'].Accounts;

/* Package-scope variables */
var __coffeescriptShare, ironRouterSendErrorToResponse, msg, headers, body, Restivus;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_restivus/lib/auth.coffee                                                                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
/*
  Return a MongoDB query selector for finding the given user
*/

/*
A password can be either in plain text or hashed
*/

/*
  A valid user will have exactly one of the following identification fields: id, username, or email
*/
var getUserQuerySelector, passwordValidator, userValidator;
this.Auth || (this.Auth = {});
userValidator = Match.Where(function (user) {
  check(user, {
    id: Match.Optional(String),
    username: Match.Optional(String),
    email: Match.Optional(String)
  });

  if (_.keys(user).length === !1) {
    throw new Match.Error('User must have exactly one identifier field');
  }

  return true;
});
passwordValidator = Match.OneOf(String, {
  digest: String,
  algorithm: String
});

getUserQuerySelector = function (user) {
  if (user.id) {
    return {
      '_id': user.id
    };
  } else if (user.username) {
    return {
      'username': user.username
    };
  } else if (user.email) {
    return {
      'emails.address': user.email
    };
  } // We shouldn't be here if the user object was properly validated


  throw new Error('Cannot create selector from invalid user');
};
/*
Log a user in with their password
*/


this.Auth.loginWithPassword = function (user, password) {
  var authToken, authenticatingUser, authenticatingUserSelector, hashedToken, passwordVerification, ref;

  if (!user || !password) {
    throw new Meteor.Error(401, 'Unauthorized');
  } // Validate the login input types


  check(user, userValidator);
  check(password, passwordValidator); // Retrieve the user from the database

  authenticatingUserSelector = getUserQuerySelector(user);
  authenticatingUser = Meteor.users.findOne(authenticatingUserSelector);

  if (!authenticatingUser) {
    throw new Meteor.Error(401, 'Unauthorized');
  }

  if (!((ref = authenticatingUser.services) != null ? ref.password : void 0)) {
    throw new Meteor.Error(401, 'Unauthorized');
  } // Authenticate the user's password


  passwordVerification = Accounts._checkPassword(authenticatingUser, password);

  if (passwordVerification.error) {
    throw new Meteor.Error(401, 'Unauthorized');
  } // Add a new auth token to the user's account


  authToken = Accounts._generateStampedLoginToken();
  hashedToken = Accounts._hashLoginToken(authToken.token);

  Accounts._insertHashedLoginToken(authenticatingUser._id, {
    hashedToken
  });

  return {
    authToken: authToken.token,
    userId: authenticatingUser._id
  };
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_restivus/lib/iron-router-error-to-response.js                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// We need a function that treats thrown errors exactly like Iron Router would.
// This file is written in JavaScript to enable copy-pasting Iron Router code.

// Taken from: https://github.com/iron-meteor/iron-router/blob/9c369499c98af9fd12ef9e68338dee3b1b1276aa/lib/router_server.js#L3
var env = process.env.NODE_ENV || 'development';

// Taken from: https://github.com/iron-meteor/iron-router/blob/9c369499c98af9fd12ef9e68338dee3b1b1276aa/lib/router_server.js#L47
ironRouterSendErrorToResponse = function (err, req, res) {
  if (res.statusCode < 400)
    res.statusCode = 500;

  if (err.status)
    res.statusCode = err.status;

  if (env === 'development')
    msg = (err.stack || err.toString()) + '\n';
  else
    //XXX get this from standard dict of error messages?
    msg = 'Server error.';

  console.error(err.stack || err.toString());

  if (res.headersSent)
    return req.socket.destroy();

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(msg));
  if (req.method === 'HEAD')
    return res.end();
  res.end(msg);
  return;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_restivus/lib/route.coffee                                                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
share.Route = function () {
  class Route {
    constructor(api, path, options, endpoints1) {
      this.api = api;
      this.path = path;
      this.options = options;
      this.endpoints = endpoints1; // Check if options were provided

      if (!this.endpoints) {
        this.endpoints = this.options;
        this.options = {};
      }
    }
    /*
      Convert all endpoints on the given route into our expected endpoint object if it is a bare
      function
       @param {Route} route The route the endpoints belong to
    */


    _resolveEndpoints() {
      _.each(this.endpoints, function (endpoint, method, endpoints) {
        if (_.isFunction(endpoint)) {
          return endpoints[method] = {
            action: endpoint
          };
        }
      });
    }
    /*
    Configure the authentication and role requirement on all endpoints (except OPTIONS, which must
    be configured directly on the endpoint)
     Authentication can be required on an entire route or individual endpoints. If required on an
    entire route, that serves as the default. If required in any individual endpoints, that will
    override the default.
     After the endpoint is configured, all authentication and role requirements of an endpoint can be
    accessed at <code>endpoint.authRequired</code> and <code>endpoint.roleRequired</code>,
    respectively.
     @param {Route} route The route the endpoints belong to
    @param {Endpoint} endpoint The endpoint to configure
    */


    _configureEndpoints() {
      _.each(this.endpoints, function (endpoint, method) {
        var ref, ref1;

        if (method !== 'options') {
          // Configure acceptable roles
          if (!((ref = this.options) != null ? ref.roleRequired : void 0)) {
            this.options.roleRequired = [];
          }

          if (!endpoint.roleRequired) {
            endpoint.roleRequired = [];
          }

          endpoint.roleRequired = _.union(endpoint.roleRequired, this.options.roleRequired); // Make it easier to check if no roles are required

          if (_.isEmpty(endpoint.roleRequired)) {
            endpoint.roleRequired = false;
          } // Configure auth requirement


          if (endpoint.authRequired === void 0) {
            if (((ref1 = this.options) != null ? ref1.authRequired : void 0) || endpoint.roleRequired) {
              endpoint.authRequired = true;
            } else {
              endpoint.authRequired = false;
            }
          }
        }
      }, this);
    }
    /*
    Authenticate an endpoint if required, and return the result of calling it
     @returns The endpoint response or a 401 if authentication fails
    */


    _callEndpoint(endpointContext, endpoint) {
      var auth; // Call the endpoint if authentication doesn't fail

      auth = this._authAccepted(endpointContext, endpoint);

      if (auth.success) {
        if (this._roleAccepted(endpointContext, endpoint)) {
          return endpoint.action.call(endpointContext);
        } else {
          return {
            statusCode: 403,
            body: {
              status: 'error',
              message: 'You do not have permission to do this.' // Auth failed

            }
          };
        }
      } else {
        if (auth.data) {
          return auth.data;
        } else {
          return {
            statusCode: 401,
            body: {
              status: 'error',
              message: 'You must be logged in to do this.'
            }
          };
        }
      }
    }
    /*
      Authenticate the given endpoint if required
       Once it's globally configured in the API, authentication can be required on an entire route or
      individual endpoints. If required on an entire endpoint, that serves as the default. If required
      in any individual endpoints, that will override the default.
       @returns An object of the following format:
     {
      success: Boolean
      data: String or Object
    }
     where `success` is `true` if all required authentication checks pass and the optional `data`
    will contain the auth data when successful and an optional error response when auth fails.
    */


    _authAccepted(endpointContext, endpoint) {
      if (endpoint.authRequired) {
        return this._authenticate(endpointContext);
      } else {
        return {
          success: true
        };
      }
    }
    /*
    Verify the request is being made by an actively logged in user
     If verified, attach the authenticated user to the context.
     @returns An object of the following format:
       {
        success: Boolean
        data: String or Object
      }
     where `success` is `true` if all required authentication checks pass and the optional `data`
    will contain the auth data when successful and an optional error response when auth fails.
    */


    _authenticate(endpointContext) {
      var auth, userSelector; // Get auth info

      auth = this.api._config.auth.user.call(endpointContext);

      if (!auth) {
        return {
          success: false
        };
      } // Get the user from the database


      if (auth.userId && auth.token && !auth.user) {
        userSelector = {};
        userSelector._id = auth.userId;
        userSelector[this.api._config.auth.token] = auth.token;
        auth.user = Meteor.users.findOne(userSelector);
      }

      if (auth.error) {
        return {
          success: false,
          data: auth.error
        };
      } // Attach the user and their ID to the context if the authentication was successful


      if (auth.user) {
        endpointContext.user = auth.user;
        endpointContext.userId = auth.user._id;
        return {
          success: true,
          data: auth
        };
      } else {
        return {
          success: false
        };
      }
    }
    /*
    Authenticate the user role if required
     Must be called after _authAccepted().
     @returns True if the authenticated user belongs to <i>any</i> of the acceptable roles on the
           endpoint
    */


    _roleAccepted(endpointContext, endpoint) {
      if (endpoint.roleRequired) {
        if (_.isEmpty(_.intersection(endpoint.roleRequired, endpointContext.user.roles))) {
          return false;
        }
      }

      return true;
    }
    /*
    Respond to an HTTP request
    */


    _respond(response, body, statusCode = 200, headers = {}) {
      var defaultHeaders, delayInMilliseconds, minimumDelayInMilliseconds, randomMultiplierBetweenOneAndTwo, sendResponse; // Override any default headers that have been provided (keys are normalized to be case insensitive)
      // TODO: Consider only lowercasing the header keys we need normalized, like Content-Type

      defaultHeaders = this._lowerCaseKeys(this.api._config.defaultHeaders);
      headers = this._lowerCaseKeys(headers);
      headers = _.extend(defaultHeaders, headers); // Prepare JSON body for response when Content-Type indicates JSON type

      if (headers['content-type'].match(/json|javascript/) !== null) {
        if (this.api._config.prettyJson) {
          body = JSON.stringify(body, void 0, 2);
        } else {
          body = JSON.stringify(body);
        }
      } // Send response


      sendResponse = function () {
        response.writeHead(statusCode, headers);
        response.write(body);
        return response.end();
      };

      if (statusCode === 401 || statusCode === 403) {
        // Hackers can measure the response time to determine things like whether the 401 response was 
        // caused by bad user id vs bad password.
        // In doing so, they can first scan for valid user ids regardless of valid passwords.
        // Delay by a random amount to reduce the ability for a hacker to determine the response time.
        // See https://www.owasp.org/index.php/Blocking_Brute_Force_Attacks#Finding_Other_Countermeasures
        // See https://en.wikipedia.org/wiki/Timing_attack
        minimumDelayInMilliseconds = 500;
        randomMultiplierBetweenOneAndTwo = 1 + Math.random();
        delayInMilliseconds = minimumDelayInMilliseconds * randomMultiplierBetweenOneAndTwo;
        return Meteor.setTimeout(sendResponse, delayInMilliseconds);
      } else {
        return sendResponse();
      }
    }
    /*
      Return the object with all of the keys converted to lowercase
    */


    _lowerCaseKeys(object) {
      return _.chain(object).pairs().map(function (attr) {
        return [attr[0].toLowerCase(), attr[1]];
      }).object().value();
    }

  }

  ;

  Route.prototype.addToApi = function () {
    var availableMethods;
    availableMethods = ['get', 'post', 'put', 'patch', 'delete', 'options'];
    return function () {
      var allowedMethods, fullPath, rejectedMethods, self;
      self = this; // Throw an error if a route has already been added at this path
      // TODO: Check for collisions with paths that follow same pattern with different parameter names

      if (_.contains(this.api._config.paths, this.path)) {
        throw new Error(`Cannot add a route at an existing path: ${this.path}`);
      } // Override the default OPTIONS endpoint with our own


      this.endpoints = _.extend({
        options: this.api._config.defaultOptionsEndpoint
      }, this.endpoints); // Configure each endpoint on this route

      this._resolveEndpoints();

      this._configureEndpoints(); // Add to our list of existing paths


      this.api._config.paths.push(this.path);

      allowedMethods = _.filter(availableMethods, function (method) {
        return _.contains(_.keys(self.endpoints), method);
      });
      rejectedMethods = _.reject(availableMethods, function (method) {
        return _.contains(_.keys(self.endpoints), method);
      }); // Setup endpoints on route

      fullPath = this.api._config.apiPath + this.path;

      _.each(allowedMethods, function (method) {
        var endpoint;
        endpoint = self.endpoints[method];
        return JsonRoutes.add(method, fullPath, function (req, res) {
          var doneFunc, endpointContext, error, responseData, responseInitiated; // Add function to endpoint context for indicating a response has been initiated manually

          responseInitiated = false;

          doneFunc = function () {
            return responseInitiated = true;
          };

          endpointContext = {
            urlParams: req.params,
            queryParams: req.query,
            bodyParams: req.body,
            request: req,
            response: res,
            done: doneFunc
          }; // Add endpoint config options to context

          _.extend(endpointContext, endpoint); // Run the requested endpoint


          responseData = null;

          try {
            responseData = self._callEndpoint(endpointContext, endpoint);
          } catch (error1) {
            error = error1; // Do exactly what Iron Router would have done, to avoid changing the API

            ironRouterSendErrorToResponse(error, req, res);
            return;
          }

          if (responseInitiated) {
            // Ensure the response is properly completed
            res.end();
            return;
          } else {
            if (res.headersSent) {
              throw new Error(`Must call this.done() after handling endpoint response manually: ${method} ${fullPath}`);
            } else if (responseData === null || responseData === void 0) {
              throw new Error(`Cannot return null or undefined from an endpoint: ${method} ${fullPath}`);
            }
          } // Generate and return the http response, handling the different endpoint response types


          if (responseData.body && (responseData.statusCode || responseData.headers)) {
            return self._respond(res, responseData.body, responseData.statusCode, responseData.headers);
          } else {
            return self._respond(res, responseData);
          }
        });
      });

      return _.each(rejectedMethods, function (method) {
        return JsonRoutes.add(method, fullPath, function (req, res) {
          var headers, responseData;
          responseData = {
            status: 'error',
            message: 'API endpoint does not exist'
          };
          headers = {
            'Allow': allowedMethods.join(', ').toUpperCase()
          };
          return self._respond(res, responseData, 405, headers);
        });
      });
    };
  }();

  return Route;
}.call(this);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_restivus/lib/restivus.coffee                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var indexOf = [].indexOf;

this.Restivus = function () {
  class Restivus {
    constructor(options) {
      var corsHeaders;
      this._routes = [];
      this._config = {
        paths: [],
        useDefaultAuth: false,
        apiPath: 'api/',
        version: null,
        prettyJson: false,
        auth: {
          token: 'services.resume.loginTokens.hashedToken',
          user: function () {
            var token;

            if (this.request.headers['x-auth-token']) {
              token = Accounts._hashLoginToken(this.request.headers['x-auth-token']);
            }

            return {
              userId: this.request.headers['x-user-id'],
              token: token
            };
          }
        },
        defaultHeaders: {
          'Content-Type': 'application/json'
        },
        enableCors: true
      }; // Configure API with the given options

      _.extend(this._config, options);

      if (this._config.enableCors) {
        corsHeaders = {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        };

        if (this._config.useDefaultAuth) {
          corsHeaders['Access-Control-Allow-Headers'] += ', X-User-Id, X-Auth-Token';
        } // Set default header to enable CORS if configured


        _.extend(this._config.defaultHeaders, corsHeaders);

        if (!this._config.defaultOptionsEndpoint) {
          this._config.defaultOptionsEndpoint = function () {
            this.response.writeHead(200, corsHeaders);
            return this.done();
          };
        }
      } // Normalize the API path


      if (this._config.apiPath[0] === '/') {
        this._config.apiPath = this._config.apiPath.slice(1);
      }

      if (_.last(this._config.apiPath) !== '/') {
        this._config.apiPath = this._config.apiPath + '/';
      } // URL path versioning is the only type of API versioning currently available, so if a version is
      // provided, append it to the base path of the API


      if (this._config.version) {
        this._config.apiPath += this._config.version + '/';
      } // Add default login and logout endpoints if auth is configured


      if (this._config.useDefaultAuth) {
        this._initAuth();
      } else if (this._config.useAuth) {
        this._initAuth();

        console.warn('Warning: useAuth API config option will be removed in Restivus v1.0 ' + '\n    Use the useDefaultAuth option instead');
      }

      return this;
    }
    /**
    Add endpoints for the given HTTP methods at the given path
     @param path {String} The extended URL path (will be appended to base path of the API)
    @param options {Object} Route configuration options
    @param options.authRequired {Boolean} The default auth requirement for each endpoint on the route
    @param options.roleRequired {String or String[]} The default role required for each endpoint on the route
    @param endpoints {Object} A set of endpoints available on the new route (get, post, put, patch, delete, options)
    @param endpoints.<method> {Function or Object} If a function is provided, all default route
      configuration options will be applied to the endpoint. Otherwise an object with an `action`
      and all other route config options available. An `action` must be provided with the object.
    */


    addRoute(path, options, endpoints) {
      var route; // Create a new route and add it to our list of existing routes

      route = new share.Route(this, path, options, endpoints);

      this._routes.push(route);

      route.addToApi();
      return this;
    }
    /**
    Generate routes for the Meteor Collection with the given name
    */


    addCollection(collection, options = {}) {
      var collectionEndpoints, collectionRouteEndpoints, endpointsAwaitingConfiguration, entityRouteEndpoints, excludedEndpoints, methods, methodsOnCollection, path, routeOptions;
      methods = ['get', 'post', 'put', 'patch', 'delete', 'getAll'];
      methodsOnCollection = ['post', 'getAll']; // Grab the set of endpoints

      if (collection === Meteor.users) {
        collectionEndpoints = this._userCollectionEndpoints;
      } else {
        collectionEndpoints = this._collectionEndpoints;
      } // Flatten the options and set defaults if necessary


      endpointsAwaitingConfiguration = options.endpoints || {};
      routeOptions = options.routeOptions || {};
      excludedEndpoints = options.excludedEndpoints || []; // Use collection name as default path

      path = options.path || collection._name; // Separate the requested endpoints by the route they belong to (one for operating on the entire
      // collection and one for operating on a single entity within the collection)

      collectionRouteEndpoints = {};
      entityRouteEndpoints = {};

      if (_.isEmpty(endpointsAwaitingConfiguration) && _.isEmpty(excludedEndpoints)) {
        // Generate all endpoints on this collection
        _.each(methods, function (method) {
          // Partition the endpoints into their respective routes
          if (indexOf.call(methodsOnCollection, method) >= 0) {
            _.extend(collectionRouteEndpoints, collectionEndpoints[method].call(this, collection));
          } else {
            _.extend(entityRouteEndpoints, collectionEndpoints[method].call(this, collection));
          }
        }, this);
      } else {
        // Generate any endpoints that haven't been explicitly excluded
        _.each(methods, function (method) {
          var configuredEndpoint, endpointOptions;

          if (indexOf.call(excludedEndpoints, method) < 0 && endpointsAwaitingConfiguration[method] !== false) {
            // Configure endpoint and map to it's http method
            // TODO: Consider predefining a map of methods to their http method type (e.g., getAll: get)
            endpointOptions = endpointsAwaitingConfiguration[method];
            configuredEndpoint = {};

            _.each(collectionEndpoints[method].call(this, collection), function (action, methodType) {
              return configuredEndpoint[methodType] = _.chain(action).clone().extend(endpointOptions).value();
            }); // Partition the endpoints into their respective routes


            if (indexOf.call(methodsOnCollection, method) >= 0) {
              _.extend(collectionRouteEndpoints, configuredEndpoint);
            } else {
              _.extend(entityRouteEndpoints, configuredEndpoint);
            }
          }
        }, this);
      } // Add the routes to the API


      this.addRoute(path, routeOptions, collectionRouteEndpoints);
      this.addRoute(`${path}/:id`, routeOptions, entityRouteEndpoints);
      return this;
    }
    /*
      Add /login and /logout endpoints to the API
    */


    _initAuth() {
      var logout, self;
      self = this;
      /*
        Add a login endpoint to the API
         After the user is logged in, the onLoggedIn hook is called (see Restfully.configure() for
        adding hook).
      */

      this.addRoute('login', {
        authRequired: false
      }, {
        post: function () {
          var auth, e, extraData, password, ref, ref1, response, searchQuery, user; // Grab the username or email that the user is logging in with

          user = {};

          if (this.bodyParams.user) {
            if (this.bodyParams.user.indexOf('@') === -1) {
              user.username = this.bodyParams.user;
            } else {
              user.email = this.bodyParams.user;
            }
          } else if (this.bodyParams.username) {
            user.username = this.bodyParams.username;
          } else if (this.bodyParams.email) {
            user.email = this.bodyParams.email;
          }

          password = this.bodyParams.password;

          if (this.bodyParams.hashed) {
            password = {
              digest: password,
              algorithm: 'sha-256'
            };
          }

          try {
            // Try to log the user into the user's account (if successful we'll get an auth token back)
            auth = Auth.loginWithPassword(user, password);
          } catch (error) {
            e = error;
            return ({} = {
              statusCode: e.error,
              body: {
                status: 'error',
                message: e.reason
              }
            });
          } // Get the authenticated user
          // TODO: Consider returning the user in Auth.loginWithPassword(), instead of fetching it again here


          if (auth.userId && auth.authToken) {
            searchQuery = {};
            searchQuery[self._config.auth.token] = Accounts._hashLoginToken(auth.authToken);
            this.user = Meteor.users.findOne({
              '_id': auth.userId
            }, searchQuery);
            this.userId = (ref = this.user) != null ? ref._id : void 0;
          }

          response = {
            status: 'success',
            data: auth
          }; // Call the login hook with the authenticated user attached

          extraData = (ref1 = self._config.onLoggedIn) != null ? ref1.call(this) : void 0;

          if (extraData != null) {
            _.extend(response.data, {
              extra: extraData
            });
          }

          return response;
        }
      });

      logout = function () {
        var authToken, extraData, hashedToken, index, ref, response, tokenFieldName, tokenLocation, tokenPath, tokenRemovalQuery, tokenToRemove; // Remove the given auth token from the user's account

        authToken = this.request.headers['x-auth-token'];
        hashedToken = Accounts._hashLoginToken(authToken);
        tokenLocation = self._config.auth.token;
        index = tokenLocation.lastIndexOf('.');
        tokenPath = tokenLocation.substring(0, index);
        tokenFieldName = tokenLocation.substring(index + 1);
        tokenToRemove = {};
        tokenToRemove[tokenFieldName] = hashedToken;
        tokenRemovalQuery = {};
        tokenRemovalQuery[tokenPath] = tokenToRemove;
        Meteor.users.update(this.user._id, {
          $pull: tokenRemovalQuery
        });
        response = {
          status: 'success',
          data: {
            message: 'You\'ve been logged out!'
          }
        }; // Call the logout hook with the authenticated user attached

        extraData = (ref = self._config.onLoggedOut) != null ? ref.call(this) : void 0;

        if (extraData != null) {
          _.extend(response.data, {
            extra: extraData
          });
        }

        return response;
      };
      /*
      Add a logout endpoint to the API
       After the user is logged out, the onLoggedOut hook is called (see Restfully.configure() for
      adding hook).
      */


      return this.addRoute('logout', {
        authRequired: true
      }, {
        get: function () {
          console.warn("Warning: Default logout via GET will be removed in Restivus v1.0. Use POST instead.");
          console.warn("    See https://github.com/kahmali/meteor-restivus/issues/100");
          return logout.call(this);
        },
        post: logout
      });
    }

  }

  ;
  /**
  A set of endpoints that can be applied to a Collection Route
  */

  Restivus.prototype._collectionEndpoints = {
    get: function (collection) {
      return {
        get: {
          action: function () {
            var entity;
            entity = collection.findOne(this.urlParams.id);

            if (entity) {
              return {
                status: 'success',
                data: entity
              };
            } else {
              return {
                statusCode: 404,
                body: {
                  status: 'fail',
                  message: 'Item not found'
                }
              };
            }
          }
        }
      };
    },
    put: function (collection) {
      return {
        put: {
          action: function () {
            var entity, entityIsUpdated;
            entityIsUpdated = collection.update(this.urlParams.id, this.bodyParams);

            if (entityIsUpdated) {
              entity = collection.findOne(this.urlParams.id);
              return {
                status: 'success',
                data: entity
              };
            } else {
              return {
                statusCode: 404,
                body: {
                  status: 'fail',
                  message: 'Item not found'
                }
              };
            }
          }
        }
      };
    },
    patch: function (collection) {
      return {
        patch: {
          action: function () {
            var entity, entityIsUpdated;
            entityIsUpdated = collection.update(this.urlParams.id, {
              $set: this.bodyParams
            });

            if (entityIsUpdated) {
              entity = collection.findOne(this.urlParams.id);
              return {
                status: 'success',
                data: entity
              };
            } else {
              return {
                statusCode: 404,
                body: {
                  status: 'fail',
                  message: 'Item not found'
                }
              };
            }
          }
        }
      };
    },
    delete: function (collection) {
      return {
        delete: {
          action: function () {
            if (collection.remove(this.urlParams.id)) {
              return {
                status: 'success',
                data: {
                  message: 'Item removed'
                }
              };
            } else {
              return {
                statusCode: 404,
                body: {
                  status: 'fail',
                  message: 'Item not found'
                }
              };
            }
          }
        }
      };
    },
    post: function (collection) {
      return {
        post: {
          action: function () {
            var entity, entityId;
            entityId = collection.insert(this.bodyParams);
            entity = collection.findOne(entityId);

            if (entity) {
              return {
                statusCode: 201,
                body: {
                  status: 'success',
                  data: entity
                }
              };
            } else {
              return {
                statusCode: 400,
                body: {
                  status: 'fail',
                  message: 'No item added'
                }
              };
            }
          }
        }
      };
    },
    getAll: function (collection) {
      return {
        get: {
          action: function () {
            var entities;
            entities = collection.find().fetch();

            if (entities) {
              return {
                status: 'success',
                data: entities
              };
            } else {
              return {
                statusCode: 404,
                body: {
                  status: 'fail',
                  message: 'Unable to retrieve items from collection'
                }
              };
            }
          }
        }
      };
    }
  };
  /**
    A set of endpoints that can be applied to a Meteor.users Collection Route
  */

  Restivus.prototype._userCollectionEndpoints = {
    get: function (collection) {
      return {
        get: {
          action: function () {
            var entity;
            entity = collection.findOne(this.urlParams.id, {
              fields: {
                profile: 1
              }
            });

            if (entity) {
              return {
                status: 'success',
                data: entity
              };
            } else {
              return {
                statusCode: 404,
                body: {
                  status: 'fail',
                  message: 'User not found'
                }
              };
            }
          }
        }
      };
    },
    put: function (collection) {
      return {
        put: {
          action: function () {
            var entity, entityIsUpdated;
            entityIsUpdated = collection.update(this.urlParams.id, {
              $set: {
                profile: this.bodyParams
              }
            });

            if (entityIsUpdated) {
              entity = collection.findOne(this.urlParams.id, {
                fields: {
                  profile: 1
                }
              });
              return {
                status: "success",
                data: entity
              };
            } else {
              return {
                statusCode: 404,
                body: {
                  status: 'fail',
                  message: 'User not found'
                }
              };
            }
          }
        }
      };
    },
    delete: function (collection) {
      return {
        delete: {
          action: function () {
            if (collection.remove(this.urlParams.id)) {
              return {
                status: 'success',
                data: {
                  message: 'User removed'
                }
              };
            } else {
              return {
                statusCode: 404,
                body: {
                  status: 'fail',
                  message: 'User not found'
                }
              };
            }
          }
        }
      };
    },
    post: function (collection) {
      return {
        post: {
          action: function () {
            var entity, entityId; // Create a new user account

            entityId = Accounts.createUser(this.bodyParams);
            entity = collection.findOne(entityId, {
              fields: {
                profile: 1
              }
            });

            if (entity) {
              return {
                statusCode: 201,
                body: {
                  status: 'success',
                  data: entity
                }
              };
            } else {
              ({
                statusCode: 400
              });
              return {
                status: 'fail',
                message: 'No user added'
              };
            }
          }
        }
      };
    },
    getAll: function (collection) {
      return {
        get: {
          action: function () {
            var entities;
            entities = collection.find({}, {
              fields: {
                profile: 1
              }
            }).fetch();

            if (entities) {
              return {
                status: 'success',
                data: entities
              };
            } else {
              return {
                statusCode: 404,
                body: {
                  status: 'fail',
                  message: 'Unable to retrieve users'
                }
              };
            }
          }
        }
      };
    }
  };
  return Restivus;
}.call(this);

Restivus = this.Restivus;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("rocketchat:restivus", {
  Restivus: Restivus
});

})();

//# sourceURL=meteor://💻app/packages/rocketchat_restivus.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2F1dGguY29mZmVlIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9yb2NrZXRjaGF0X3Jlc3RpdnVzL2xpYi9hdXRoLmNvZmZlZSIsIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvcm9ja2V0Y2hhdF9yZXN0aXZ1cy9saWIvcm91dGUuY29mZmVlIiwibWV0ZW9yOi8v8J+Su2FwcC9saWIvcm91dGUuY29mZmVlIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9yb2NrZXRjaGF0X3Jlc3RpdnVzL2xpYi9yZXN0aXZ1cy5jb2ZmZWUiLCJtZXRlb3I6Ly/wn5K7YXBwL2xpYi9yZXN0aXZ1cy5jb2ZmZWUiXSwibmFtZXMiOlsiZ2V0VXNlclF1ZXJ5U2VsZWN0b3IiLCJwYXNzd29yZFZhbGlkYXRvciIsInVzZXJWYWxpZGF0b3IiLCJBdXRoIiwiTWF0Y2giLCJXaGVyZSIsInVzZXIiLCJjaGVjayIsImlkIiwiT3B0aW9uYWwiLCJTdHJpbmciLCJ1c2VybmFtZSIsImVtYWlsIiwiXyIsImtleXMiLCJsZW5ndGgiLCJFcnJvciIsIk9uZU9mIiwiZGlnZXN0IiwiYWxnb3JpdGhtIiwibG9naW5XaXRoUGFzc3dvcmQiLCJwYXNzd29yZCIsImF1dGhUb2tlbiIsImF1dGhlbnRpY2F0aW5nVXNlciIsImF1dGhlbnRpY2F0aW5nVXNlclNlbGVjdG9yIiwiaGFzaGVkVG9rZW4iLCJwYXNzd29yZFZlcmlmaWNhdGlvbiIsInJlZiIsIk1ldGVvciIsInVzZXJzIiwiZmluZE9uZSIsInNlcnZpY2VzIiwiQWNjb3VudHMiLCJfY2hlY2tQYXNzd29yZCIsImVycm9yIiwiX2dlbmVyYXRlU3RhbXBlZExvZ2luVG9rZW4iLCJfaGFzaExvZ2luVG9rZW4iLCJ0b2tlbiIsIl9pbnNlcnRIYXNoZWRMb2dpblRva2VuIiwiX2lkIiwidXNlcklkIiwic2hhcmUiLCJSb3V0ZSIsImNvbnN0cnVjdG9yIiwiYXBpIiwicGF0aCIsIm9wdGlvbnMiLCJlbmRwb2ludHMxIiwiZW5kcG9pbnRzIiwiX3Jlc29sdmVFbmRwb2ludHMiLCJlYWNoIiwiZW5kcG9pbnQiLCJtZXRob2QiLCJpc0Z1bmN0aW9uIiwiYWN0aW9uIiwiX2NvbmZpZ3VyZUVuZHBvaW50cyIsInJlZjEiLCJyb2xlUmVxdWlyZWQiLCJ1bmlvbiIsImlzRW1wdHkiLCJhdXRoUmVxdWlyZWQiLCJfY2FsbEVuZHBvaW50IiwiZW5kcG9pbnRDb250ZXh0IiwiYXV0aCIsIl9hdXRoQWNjZXB0ZWQiLCJzdWNjZXNzIiwiX3JvbGVBY2NlcHRlZCIsImNhbGwiLCJzdGF0dXNDb2RlIiwiYm9keSIsInN0YXR1cyIsIm1lc3NhZ2UiLCJkYXRhIiwiX2F1dGhlbnRpY2F0ZSIsInVzZXJTZWxlY3RvciIsIl9jb25maWciLCJpbnRlcnNlY3Rpb24iLCJyb2xlcyIsIl9yZXNwb25kIiwicmVzcG9uc2UiLCJoZWFkZXJzIiwiZGVmYXVsdEhlYWRlcnMiLCJkZWxheUluTWlsbGlzZWNvbmRzIiwibWluaW11bURlbGF5SW5NaWxsaXNlY29uZHMiLCJyYW5kb21NdWx0aXBsaWVyQmV0d2Vlbk9uZUFuZFR3byIsInNlbmRSZXNwb25zZSIsIl9sb3dlckNhc2VLZXlzIiwiZXh0ZW5kIiwibWF0Y2giLCJwcmV0dHlKc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsIndyaXRlSGVhZCIsIndyaXRlIiwiZW5kIiwiTWF0aCIsInJhbmRvbSIsInNldFRpbWVvdXQiLCJvYmplY3QiLCJjaGFpbiIsInBhaXJzIiwibWFwIiwiYXR0ciIsInRvTG93ZXJDYXNlIiwidmFsdWUiLCJwcm90b3R5cGUiLCJhZGRUb0FwaSIsImF2YWlsYWJsZU1ldGhvZHMiLCJhbGxvd2VkTWV0aG9kcyIsImZ1bGxQYXRoIiwicmVqZWN0ZWRNZXRob2RzIiwic2VsZiIsImNvbnRhaW5zIiwicGF0aHMiLCJkZWZhdWx0T3B0aW9uc0VuZHBvaW50IiwicHVzaCIsImZpbHRlciIsInJlamVjdCIsImFwaVBhdGgiLCJKc29uUm91dGVzIiwiYWRkIiwicmVxIiwicmVzIiwiZG9uZUZ1bmMiLCJyZXNwb25zZURhdGEiLCJyZXNwb25zZUluaXRpYXRlZCIsInVybFBhcmFtcyIsInBhcmFtcyIsInF1ZXJ5UGFyYW1zIiwicXVlcnkiLCJib2R5UGFyYW1zIiwicmVxdWVzdCIsImRvbmUiLCJlcnJvcjEiLCJpcm9uUm91dGVyU2VuZEVycm9yVG9SZXNwb25zZSIsImhlYWRlcnNTZW50Iiwiam9pbiIsInRvVXBwZXJDYXNlIiwiaW5kZXhPZiIsIlJlc3RpdnVzIiwiY29yc0hlYWRlcnMiLCJfcm91dGVzIiwidXNlRGVmYXVsdEF1dGgiLCJ2ZXJzaW9uIiwiZW5hYmxlQ29ycyIsInNsaWNlIiwibGFzdCIsIl9pbml0QXV0aCIsInVzZUF1dGgiLCJjb25zb2xlIiwid2FybiIsImFkZFJvdXRlIiwicm91dGUiLCJhZGRDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsImNvbGxlY3Rpb25FbmRwb2ludHMiLCJjb2xsZWN0aW9uUm91dGVFbmRwb2ludHMiLCJlbmRwb2ludHNBd2FpdGluZ0NvbmZpZ3VyYXRpb24iLCJlbnRpdHlSb3V0ZUVuZHBvaW50cyIsImV4Y2x1ZGVkRW5kcG9pbnRzIiwibWV0aG9kcyIsIm1ldGhvZHNPbkNvbGxlY3Rpb24iLCJyb3V0ZU9wdGlvbnMiLCJfdXNlckNvbGxlY3Rpb25FbmRwb2ludHMiLCJfY29sbGVjdGlvbkVuZHBvaW50cyIsIl9uYW1lIiwiY29uZmlndXJlZEVuZHBvaW50IiwiZW5kcG9pbnRPcHRpb25zIiwibWV0aG9kVHlwZSIsImNsb25lIiwibG9nb3V0IiwicG9zdCIsImUiLCJleHRyYURhdGEiLCJzZWFyY2hRdWVyeSIsImhhc2hlZCIsInJlYXNvbiIsIm9uTG9nZ2VkSW4iLCJleHRyYSIsImluZGV4IiwidG9rZW5GaWVsZE5hbWUiLCJ0b2tlbkxvY2F0aW9uIiwidG9rZW5QYXRoIiwidG9rZW5SZW1vdmFsUXVlcnkiLCJ0b2tlblRvUmVtb3ZlIiwibGFzdEluZGV4T2YiLCJzdWJzdHJpbmciLCJ1cGRhdGUiLCIkcHVsbCIsIm9uTG9nZ2VkT3V0IiwiZ2V0IiwiZW50aXR5IiwicHV0IiwiZW50aXR5SXNVcGRhdGVkIiwicGF0Y2giLCIkc2V0IiwiZGVsZXRlIiwicmVtb3ZlIiwiZW50aXR5SWQiLCJpbnNlcnQiLCJnZXRBbGwiLCJlbnRpdGllcyIsImZpbmQiLCJmZXRjaCIsImZpZWxkcyIsInByb2ZpbGUiLCJjcmVhdGVVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBR0U7Ozs7QUFHQTs7O0FBR0YsSUNWQUEsb0JEVUEsRUNWQUMsaUJEVUEsRUNWQUMsYURVQTtBQ1ZBLEtBQUNDLElBQUQsVUFBQ0EsSUFBRCxHQUFVLEVBQVY7QUFLQUQsYUFBQSxHQUFnQkUsS0FBSyxDQUFDQyxLQUFOLENBQVksVUFBQ0MsSUFBRDtBQUMxQkMsT0FBQSxDQUFNRCxJQUFOLEVBQ0U7QUFBQUUsTUFBQSxFQUFJSixLQUFLLENBQUNLLFFBQU4sQ0FBZUMsTUFBZixDQUFKO0FBQ0FDLFlBQUEsRUFBVVAsS0FBSyxDQUFDSyxRQUFOLENBQWVDLE1BQWYsQ0FEVjtBQUVBRSxTQUFBLEVBQU9SLEtBQUssQ0FBQ0ssUUFBTixDQUFlQyxNQUFmO0FBRlAsR0FERjs7QUFLQSxNQUFHRyxDQUFDLENBQUNDLElBQUYsQ0FBT1IsSUFBUCxFQUFhUyxNQUFiLEtBQXVCLENBQUksQ0FBOUI7QUFDRSxVQUFNLElBQUlYLEtBQUssQ0FBQ1ksS0FBVixDQUFnQiw2Q0FBaEIsQ0FBTjtBRFVEOztBQ1JELFNBQU8sSUFBUDtBQVRjLEVBQWhCO0FBY0FmLGlCQUFBLEdBQW9CRyxLQUFLLENBQUNhLEtBQU4sQ0FBWVAsTUFBWixFQUNsQjtBQUFBUSxRQUFBLEVBQVFSLE1BQVI7QUFDQVMsV0FBQSxFQUFXVDtBQURYLENBRGtCLENBQXBCOztBQU9BVixvQkFBQSxHQUF1QixVQUFDTSxJQUFEO0FBQ3JCLE1BQUdBLElBQUksQ0FBQ0UsRUFBUjtBQUNFLFdBQU87QUFBQyxhQUFPRixJQUFJLENBQUNFO0FBQWIsS0FBUDtBQURGLFNB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SSxVQUFBLEVBQVEsVUFBQzlDLFVBQUQ7QUNxVE4sYURwVEE7QUFBQW9DLFdBQUEsRUFDRTtBQUFBeEksZ0JBQUEsRUFBUTtBQUNOLGdCQUFBbUosUUFBQTtBQUFBQSxvQkFBQSxHQUFXL0MsVUFBVSxDQUFDZ0QsSUFBWCxDQUFnQixFQUFoQixFQUFvQjtBQUFBRSxvQkFBQSxFQUFRO0FBQUFDLHVCQUFBLEVBQVM7QUFBVDtBQUFSLGFBQXBCLEVBQXdDRixLQUF4QyxFQUFYOztBQUNBLGdCQUFHRixRQUFIO0FDMlRJLHFCRDFURjtBQUFDbkksc0JBQUEsRUFBUSxTQUFUO0FBQW9CRSxvQkFBQSxFQUFNaUk7QUFBMUIsZUMwVEU7QUQzVEo7QUNnVUkscUJEN1RGO0FBQUFySSwwQkFBQSxFQUFZLEdBQVo7QUFDQUMsb0JBQUEsRUFBTTtBQUFDQyx3QkFBQSxFQUFRLE1BQVQ7QUFBaUJDLHlCQUFBLEVBQVM7QUFBMUI7QUFETixlQzZURTtBQU9EO0FEelVHO0FBQVI7QUFERixPQ29UQTtBRHJUTTtBQXZDUixHQ29PRjtBQXFKQSxTQUFPb0UsUUFBUDtBQUVELENEL2tCTSxDQytrQkp4RSxJRC9rQkksQ0Mra0JDLElEL2tCRCxDQUFEOztBQW9XTndFLFFBQUEsR0FBVyxLQUFDQSxRQUFaLEMiLCJmaWxlIjoiL3BhY2thZ2VzL3JvY2tldGNoYXRfcmVzdGl2dXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qXG4gIFJldHVybiBhIE1vbmdvREIgcXVlcnkgc2VsZWN0b3IgZm9yIGZpbmRpbmcgdGhlIGdpdmVuIHVzZXJcbiovXG4gIC8qXG4gIEEgcGFzc3dvcmQgY2FuIGJlIGVpdGhlciBpbiBwbGFpbiB0ZXh0IG9yIGhhc2hlZFxuICAqL1xuICAvKlxuICAgIEEgdmFsaWQgdXNlciB3aWxsIGhhdmUgZXhhY3RseSBvbmUgb2YgdGhlIGZvbGxvd2luZyBpZGVudGlmaWNhdGlvbiBmaWVsZHM6IGlkLCB1c2VybmFtZSwgb3IgZW1haWxcbiAgKi9cbnZhciBnZXRVc2VyUXVlcnlTZWxlY3RvciwgcGFzc3dvcmRWYWxpZGF0b3IsIHVzZXJWYWxpZGF0b3I7XG5cbnRoaXMuQXV0aCB8fCAodGhpcy5BdXRoID0ge30pO1xuXG51c2VyVmFsaWRhdG9yID0gTWF0Y2guV2hlcmUoZnVuY3Rpb24odXNlcikge1xuICBjaGVjayh1c2VyLCB7XG4gICAgaWQ6IE1hdGNoLk9wdGlvbmFsKFN0cmluZyksXG4gICAgdXNlcm5hbWU6IE1hdGNoLk9wdGlvbmFsKFN0cmluZyksXG4gICAgZW1haWw6IE1hdGNoLk9wdGlvbmFsKFN0cmluZylcbiAgfSk7XG4gIGlmIChfLmtleXModXNlcikubGVuZ3RoID09PSAhMSkge1xuICAgIHRocm93IG5ldyBNYXRjaC5FcnJvcignVXNlciBtdXN0IGhhdmUgZXhhY3RseSBvbmUgaWRlbnRpZmllciBmaWVsZCcpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufSk7XG5cbnBhc3N3b3JkVmFsaWRhdG9yID0gTWF0Y2guT25lT2YoU3RyaW5nLCB7XG4gIGRpZ2VzdDogU3RyaW5nLFxuICBhbGdvcml0aG06IFN0cmluZ1xufSk7XG5cbmdldFVzZXJRdWVyeVNlbGVjdG9yID0gZnVuY3Rpb24odXNlcikge1xuICBpZiAodXNlci5pZCkge1xuICAgIHJldHVybiB7XG4gICAgICAnX2lkJzogdXNlci5pZFxuICAgIH07XG4gIH0gZWxzZSBpZiAodXNlci51c2VybmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICAndXNlcm5hbWUnOiB1c2VyLnVzZXJuYW1lXG4gICAgfTtcbiAgfSBlbHNlIGlmICh1c2VyLmVtYWlsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdlbWFpbHMuYWRkcmVzcyc6IHVzZXIuZW1haWxcbiAgICB9O1xuICB9XG4gIC8vIFdlIHNob3VsZG4ndCBiZSBoZXJlIGlmIHRoZSB1c2VyIG9iamVjdCB3YXMgcHJvcGVybHkgdmFsaWRhdGVkXG4gIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNyZWF0ZSBzZWxlY3RvciBmcm9tIGludmFsaWQgdXNlcicpO1xufTtcblxuLypcbkxvZyBhIHVzZXIgaW4gd2l0aCB0aGVpciBwYXNzd29yZFxuKi9cbnRoaXMuQXV0aC5sb2dpbldpdGhQYXNzd29yZCA9IGZ1bmN0aW9uKHVzZXIsIHBhc3N3b3JkKSB7XG4gIHZhciBhdXRoVG9rZW4sIGF1dGhlbnRpY2F0aW5nVXNlciwgYXV0aGVudGljYXRpbmdVc2VyU2VsZWN0b3IsIGhhc2hlZFRva2VuLCBwYXNzd29yZFZlcmlmaWNhdGlvbiwgcmVmO1xuICBpZiAoIXVzZXIgfHwgIXBhc3N3b3JkKSB7XG4gICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcig0MDEsICdVbmF1dGhvcml6ZWQnKTtcbiAgfVxuICAvLyBWYWxpZGF0ZSB0aGUgbG9naW4gaW5wdXQgdHlwZXNcbiAgY2hlY2sodXNlciwgdXNlclZhbGlkYXRvcik7XG4gIGNoZWNrKHBhc3N3b3JkLCBwYXNzd29yZFZhbGlkYXRvcik7XG4gIC8vIFJldHJpZXZlIHRoZSB1c2VyIGZyb20gdGhlIGRhdGFiYXNlXG4gIGF1dGhlbnRpY2F0aW5nVXNlclNlbGVjdG9yID0gZ2V0VXNlclF1ZXJ5U2VsZWN0b3IodXNlcik7XG4gIGF1dGhlbnRpY2F0aW5nVXNlciA9IE1ldGVvci51c2Vycy5maW5kT25lKGF1dGhlbnRpY2F0aW5nVXNlclNlbGVjdG9yKTtcbiAgaWYgKCFhdXRoZW50aWNhdGluZ1VzZXIpIHtcbiAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKDQwMSwgJ1VuYXV0aG9yaXplZCcpO1xuICB9XG4gIGlmICghKChyZWYgPSBhdXRoZW50aWNhdGluZ1VzZXIuc2VydmljZXMpICE9IG51bGwgPyByZWYucGFzc3dvcmQgOiB2b2lkIDApKSB7XG4gICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcig0MDEsICdVbmF1dGhvcml6ZWQnKTtcbiAgfVxuICAvLyBBdXRoZW50aWNhdGUgdGhlIHVzZXIncyBwYXNzd29yZFxuICBwYXNzd29yZFZlcmlmaWNhdGlvbiA9IEFjY291bnRzLl9jaGVja1Bhc3N3b3JkKGF1dGhlbnRpY2F0aW5nVXNlciwgcGFzc3dvcmQpO1xuICBpZiAocGFzc3dvcmRWZXJpZmljYXRpb24uZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKDQwMSwgJ1VuYXV0aG9yaXplZCcpO1xuICB9XG4gIC8vIEFkZCBhIG5ldyBhdXRoIHRva2VuIHRvIHRoZSB1c2VyJ3MgYWNjb3VudFxuICBhdXRoVG9rZW4gPSBBY2NvdW50cy5fZ2VuZXJhdGVTdGFtcGVkTG9naW5Ub2tlbigpO1xuICBoYXNoZWRUb2tlbiA9IEFjY291bnRzLl9oYXNoTG9naW5Ub2tlbihhdXRoVG9rZW4udG9rZW4pO1xuICBBY2NvdW50cy5faW5zZXJ0SGFzaGVkTG9naW5Ub2tlbihhdXRoZW50aWNhdGluZ1VzZXIuX2lkLCB7aGFzaGVkVG9rZW59KTtcbiAgcmV0dXJuIHtcbiAgICBhdXRoVG9rZW46IGF1dGhUb2tlbi50b2tlbixcbiAgICB1c2VySWQ6IGF1dGhlbnRpY2F0aW5nVXNlci5faWRcbiAgfTtcbn07XG4iLCJAQXV0aCBvcj0ge31cblxuIyMjXG4gIEEgdmFsaWQgdXNlciB3aWxsIGhhdmUgZXhhY3RseSBvbmUgb2YgdGhlIGZvbGxvd2luZyBpZGVudGlmaWNhdGlvbiBmaWVsZHM6IGlkLCB1c2VybmFtZSwgb3IgZW1haWxcbiMjI1xudXNlclZhbGlkYXRvciA9IE1hdGNoLldoZXJlICh1c2VyKSAtPlxuICBjaGVjayB1c2VyLFxuICAgIGlkOiBNYXRjaC5PcHRpb25hbCBTdHJpbmdcbiAgICB1c2VybmFtZTogTWF0Y2guT3B0aW9uYWwgU3RyaW5nXG4gICAgZW1haWw6IE1hdGNoLk9wdGlvbmFsIFN0cmluZ1xuXG4gIGlmIF8ua2V5cyh1c2VyKS5sZW5ndGggaXMgbm90IDFcbiAgICB0aHJvdyBuZXcgTWF0Y2guRXJyb3IgJ1VzZXIgbXVzdCBoYXZlIGV4YWN0bHkgb25lIGlkZW50aWZpZXIgZmllbGQnXG5cbiAgcmV0dXJuIHRydWVcblxuIyMjXG4gIEEgcGFzc3dvcmQgY2FuIGJlIGVpdGhlciBpbiBwbGFpbiB0ZXh0IG9yIGhhc2hlZFxuIyMjXG5wYXNzd29yZFZhbGlkYXRvciA9IE1hdGNoLk9uZU9mKFN0cmluZyxcbiAgZGlnZXN0OiBTdHJpbmdcbiAgYWxnb3JpdGhtOiBTdHJpbmcpXG5cbiMjI1xuICBSZXR1cm4gYSBNb25nb0RCIHF1ZXJ5IHNlbGVjdG9yIGZvciBmaW5kaW5nIHRoZSBnaXZlbiB1c2VyXG4jIyNcbmdldFVzZXJRdWVyeVNlbGVjdG9yID0gKHVzZXIpIC0+XG4gIGlmIHVzZXIuaWRcbiAgICByZXR1cm4geydfaWQnOiB1c2VyLmlkfVxuICBlbHNlIGlmIHVzZXIudXNlcm5hbWVcbiAgICByZXR1cm4geyd1c2VybmFtZSc6IHVzZXIudXNlcm5hbWV9XG4gIGVsc2UgaWYgdXNlci5lbWFpbFxuICAgIHJldHVybiB7J2VtYWlscy5hZGRyZXNzJzogdXNlci5lbWFpbH1cblxuICAjIFdlIHNob3VsZG4ndCBiZSBoZXJlIGlmIHRoZSB1c2VyIG9iamVjdCB3YXMgcHJvcGVybHkgdmFsaWRhdGVkXG4gIHRocm93IG5ldyBFcnJvciAnQ2Fubm90IGNyZWF0ZSBzZWxlY3RvciBmcm9tIGludmFsaWQgdXNlcidcblxuIyMjXG4gIExvZyBhIHVzZXIgaW4gd2l0aCB0aGVpciBwYXNzd29yZFxuIyMjXG5AQXV0aC5sb2dpbldpdGhQYXNzd29yZCA9ICh1c2VyLCBwYXNzd29yZCkgLT5cbiAgaWYgbm90IHVzZXIgb3Igbm90IHBhc3N3b3JkXG4gICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvciA0MDEsICdVbmF1dGhvcml6ZWQnXG5cbiAgIyBWYWxpZGF0ZSB0aGUgbG9naW4gaW5wdXQgdHlwZXNcbiAgY2hlY2sgdXNlciwgdXNlclZhbGlkYXRvclxuICBjaGVjayBwYXNzd29yZCwgcGFzc3dvcmRWYWxpZGF0b3JcblxuICAjIFJldHJpZXZlIHRoZSB1c2VyIGZyb20gdGhlIGRhdGFiYXNlXG4gIGF1dGhlbnRpY2F0aW5nVXNlclNlbGVjdG9yID0gZ2V0VXNlclF1ZXJ5U2VsZWN0b3IodXNlcilcbiAgYXV0aGVudGljYXRpbmdVc2VyID0gTWV0ZW9yLnVzZXJzLmZpbmRPbmUoYXV0aGVudGljYXRpbmdVc2VyU2VsZWN0b3IpXG5cbiAgaWYgbm90IGF1dGhlbnRpY2F0aW5nVXNlclxuICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IgNDAxLCAnVW5hdXRob3JpemVkJ1xuICBpZiBub3QgYXV0aGVudGljYXRpbmdVc2VyLnNlcnZpY2VzPy5wYXNzd29yZFxuICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IgNDAxLCAnVW5hdXRob3JpemVkJ1xuXG4gICMgQXV0aGVudGljYXRlIHRoZSB1c2VyJ3MgcGFzc3dvcmRcbiAgcGFzc3dvcmRWZXJpZmljYXRpb24gPSBBY2NvdW50cy5fY2hlY2tQYXNzd29yZCBhdXRoZW50aWNhdGluZ1VzZXIsIHBhc3N3b3JkXG4gIGlmIHBhc3N3b3JkVmVyaWZpY2F0aW9uLmVycm9yXG4gICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvciA0MDEsICdVbmF1dGhvcml6ZWQnXG5cbiAgIyBBZGQgYSBuZXcgYXV0aCB0b2tlbiB0byB0aGUgdXNlcidzIGFjY291bnRcbiAgYXV0aFRva2VuID0gQWNjb3VudHMuX2dlbmVyYXRlU3RhbXBlZExvZ2luVG9rZW4oKVxuICBoYXNoZWRUb2tlbiA9IEFjY291bnRzLl9oYXNoTG9naW5Ub2tlbiBhdXRoVG9rZW4udG9rZW5cbiAgQWNjb3VudHMuX2luc2VydEhhc2hlZExvZ2luVG9rZW4gYXV0aGVudGljYXRpbmdVc2VyLl9pZCwge2hhc2hlZFRva2VufVxuXG4gIHJldHVybiB7YXV0aFRva2VuOiBhdXRoVG9rZW4udG9rZW4sIHVzZXJJZDogYXV0aGVudGljYXRpbmdVc2VyLl9pZH1cbiIsImNsYXNzIHNoYXJlLlJvdXRlXG5cbiAgY29uc3RydWN0b3I6IChAYXBpLCBAcGF0aCwgQG9wdGlvbnMsIEBlbmRwb2ludHMpIC0+XG4gICAgIyBDaGVjayBpZiBvcHRpb25zIHdlcmUgcHJvdmlkZWRcbiAgICBpZiBub3QgQGVuZHBvaW50c1xuICAgICAgQGVuZHBvaW50cyA9IEBvcHRpb25zXG4gICAgICBAb3B0aW9ucyA9IHt9XG5cblxuICBhZGRUb0FwaTogZG8gLT5cbiAgICBhdmFpbGFibGVNZXRob2RzID0gWydnZXQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnZGVsZXRlJywgJ29wdGlvbnMnXVxuXG4gICAgcmV0dXJuIC0+XG4gICAgICBzZWxmID0gdGhpc1xuXG4gICAgICAjIFRocm93IGFuIGVycm9yIGlmIGEgcm91dGUgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCBhdCB0aGlzIHBhdGhcbiAgICAgICMgVE9ETzogQ2hlY2sgZm9yIGNvbGxpc2lvbnMgd2l0aCBwYXRocyB0aGF0IGZvbGxvdyBzYW1lIHBhdHRlcm4gd2l0aCBkaWZmZXJlbnQgcGFyYW1ldGVyIG5hbWVzXG4gICAgICBpZiBfLmNvbnRhaW5zIEBhcGkuX2NvbmZpZy5wYXRocywgQHBhdGhcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yIFwiQ2Fubm90IGFkZCBhIHJvdXRlIGF0IGFuIGV4aXN0aW5nIHBhdGg6ICN7QHBhdGh9XCJcblxuICAgICAgIyBPdmVycmlkZSB0aGUgZGVmYXVsdCBPUFRJT05TIGVuZHBvaW50IHdpdGggb3VyIG93blxuICAgICAgQGVuZHBvaW50cyA9IF8uZXh0ZW5kIG9wdGlvbnM6IEBhcGkuX2NvbmZpZy5kZWZhdWx0T3B0aW9uc0VuZHBvaW50LCBAZW5kcG9pbnRzXG5cbiAgICAgICMgQ29uZmlndXJlIGVhY2ggZW5kcG9pbnQgb24gdGhpcyByb3V0ZVxuICAgICAgQF9yZXNvbHZlRW5kcG9pbnRzKClcbiAgICAgIEBfY29uZmlndXJlRW5kcG9pbnRzKClcblxuICAgICAgIyBBZGQgdG8gb3VyIGxpc3Qgb2YgZXhpc3RpbmcgcGF0aHNcbiAgICAgIEBhcGkuX2NvbmZpZy5wYXRocy5wdXNoIEBwYXRoXG5cbiAgICAgIGFsbG93ZWRNZXRob2RzID0gXy5maWx0ZXIgYXZhaWxhYmxlTWV0aG9kcywgKG1ldGhvZCkgLT5cbiAgICAgICAgXy5jb250YWlucyhfLmtleXMoc2VsZi5lbmRwb2ludHMpLCBtZXRob2QpXG4gICAgICByZWplY3RlZE1ldGhvZHMgPSBfLnJlamVjdCBhdmFpbGFibGVNZXRob2RzLCAobWV0aG9kKSAtPlxuICAgICAgICBfLmNvbnRhaW5zKF8ua2V5cyhzZWxmLmVuZHBvaW50cyksIG1ldGhvZClcblxuICAgICAgIyBTZXR1cCBlbmRwb2ludHMgb24gcm91dGVcbiAgICAgIGZ1bGxQYXRoID0gQGFwaS5fY29uZmlnLmFwaVBhdGggKyBAcGF0aFxuICAgICAgXy5lYWNoIGFsbG93ZWRNZXRob2RzLCAobWV0aG9kKSAtPlxuICAgICAgICBlbmRwb2ludCA9IHNlbGYuZW5kcG9pbnRzW21ldGhvZF1cbiAgICAgICAgSnNvblJvdXRlcy5hZGQgbWV0aG9kLCBmdWxsUGF0aCwgKHJlcSwgcmVzKSAtPlxuICAgICAgICAgICMgQWRkIGZ1bmN0aW9uIHRvIGVuZHBvaW50IGNvbnRleHQgZm9yIGluZGljYXRpbmcgYSByZXNwb25zZSBoYXMgYmVlbiBpbml0aWF0ZWQgbWFudWFsbHlcbiAgICAgICAgICByZXNwb25zZUluaXRpYXRlZCA9IGZhbHNlXG4gICAgICAgICAgZG9uZUZ1bmMgPSAtPlxuICAgICAgICAgICAgcmVzcG9uc2VJbml0aWF0ZWQgPSB0cnVlXG5cbiAgICAgICAgICBlbmRwb2ludENvbnRleHQgPVxuICAgICAgICAgICAgdXJsUGFyYW1zOiByZXEucGFyYW1zXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogcmVxLnF1ZXJ5XG4gICAgICAgICAgICBib2R5UGFyYW1zOiByZXEuYm9keVxuICAgICAgICAgICAgcmVxdWVzdDogcmVxXG4gICAgICAgICAgICByZXNwb25zZTogcmVzXG4gICAgICAgICAgICBkb25lOiBkb25lRnVuY1xuICAgICAgICAgICMgQWRkIGVuZHBvaW50IGNvbmZpZyBvcHRpb25zIHRvIGNvbnRleHRcbiAgICAgICAgICBfLmV4dGVuZCBlbmRwb2ludENvbnRleHQsIGVuZHBvaW50XG5cbiAgICAgICAgICAjIFJ1biB0aGUgcmVxdWVzdGVkIGVuZHBvaW50XG4gICAgICAgICAgcmVzcG9uc2VEYXRhID0gbnVsbFxuICAgICAgICAgIHRyeVxuICAgICAgICAgICAgcmVzcG9uc2VEYXRhID0gc2VsZi5fY2FsbEVuZHBvaW50IGVuZHBvaW50Q29udGV4dCwgZW5kcG9pbnRcbiAgICAgICAgICBjYXRjaCBlcnJvclxuICAgICAgICAgICAgIyBEbyBleGFjdGx5IHdoYXQgSXJvbiBSb3V0ZXIgd291bGQgaGF2ZSBkb25lLCB0byBhdm9pZCBjaGFuZ2luZyB0aGUgQVBJXG4gICAgICAgICAgICBpcm9uUm91dGVyU2VuZEVycm9yVG9SZXNwb25zZShlcnJvciwgcmVxLCByZXMpO1xuICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgICBpZiByZXNwb25zZUluaXRpYXRlZFxuICAgICAgICAgICAgIyBFbnN1cmUgdGhlIHJlc3BvbnNlIGlzIHByb3Blcmx5IGNvbXBsZXRlZFxuICAgICAgICAgICAgcmVzLmVuZCgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBpZiByZXMuaGVhZGVyc1NlbnRcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIFwiTXVzdCBjYWxsIHRoaXMuZG9uZSgpIGFmdGVyIGhhbmRsaW5nIGVuZHBvaW50IHJlc3BvbnNlIG1hbnVhbGx5OiAje21ldGhvZH0gI3tmdWxsUGF0aH1cIlxuICAgICAgICAgICAgZWxzZSBpZiByZXNwb25zZURhdGEgaXMgbnVsbCBvciByZXNwb25zZURhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciBcIkNhbm5vdCByZXR1cm4gbnVsbCBvciB1bmRlZmluZWQgZnJvbSBhbiBlbmRwb2ludDogI3ttZXRob2R9ICN7ZnVsbFBhdGh9XCJcblxuICAgICAgICAgICMgR2VuZXJhdGUgYW5kIHJldHVybiB0aGUgaHR0cCByZXNwb25zZSwgaGFuZGxpbmcgdGhlIGRpZmZlcmVudCBlbmRwb2ludCByZXNwb25zZSB0eXBlc1xuICAgICAgICAgIGlmIHJlc3BvbnNlRGF0YS5ib2R5IGFuZCAocmVzcG9uc2VEYXRhLnN0YXR1c0NvZGUgb3IgcmVzcG9uc2VEYXRhLmhlYWRlcnMpXG4gICAgICAgICAgICBzZWxmLl9yZXNwb25kIHJlcywgcmVzcG9uc2VEYXRhLmJvZHksIHJlc3BvbnNlRGF0YS5zdGF0dXNDb2RlLCByZXNwb25zZURhdGEuaGVhZGVyc1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHNlbGYuX3Jlc3BvbmQgcmVzLCByZXNwb25zZURhdGFcblxuICAgICAgXy5lYWNoIHJlamVjdGVkTWV0aG9kcywgKG1ldGhvZCkgLT5cbiAgICAgICAgSnNvblJvdXRlcy5hZGQgbWV0aG9kLCBmdWxsUGF0aCwgKHJlcSwgcmVzKSAtPlxuICAgICAgICAgIHJlc3BvbnNlRGF0YSA9IHN0YXR1czogJ2Vycm9yJywgbWVzc2FnZTogJ0FQSSBlbmRwb2ludCBkb2VzIG5vdCBleGlzdCdcbiAgICAgICAgICBoZWFkZXJzID0gJ0FsbG93JzogYWxsb3dlZE1ldGhvZHMuam9pbignLCAnKS50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgc2VsZi5fcmVzcG9uZCByZXMsIHJlc3BvbnNlRGF0YSwgNDA1LCBoZWFkZXJzXG5cblxuICAjIyNcbiAgICBDb252ZXJ0IGFsbCBlbmRwb2ludHMgb24gdGhlIGdpdmVuIHJvdXRlIGludG8gb3VyIGV4cGVjdGVkIGVuZHBvaW50IG9iamVjdCBpZiBpdCBpcyBhIGJhcmVcbiAgICBmdW5jdGlvblxuXG4gICAgQHBhcmFtIHtSb3V0ZX0gcm91dGUgVGhlIHJvdXRlIHRoZSBlbmRwb2ludHMgYmVsb25nIHRvXG4gICMjI1xuICBfcmVzb2x2ZUVuZHBvaW50czogLT5cbiAgICBfLmVhY2ggQGVuZHBvaW50cywgKGVuZHBvaW50LCBtZXRob2QsIGVuZHBvaW50cykgLT5cbiAgICAgIGlmIF8uaXNGdW5jdGlvbihlbmRwb2ludClcbiAgICAgICAgZW5kcG9pbnRzW21ldGhvZF0gPSB7YWN0aW9uOiBlbmRwb2ludH1cbiAgICByZXR1cm5cblxuXG4gICMjI1xuICAgIENvbmZpZ3VyZSB0aGUgYXV0aGVudGljYXRpb24gYW5kIHJvbGUgcmVxdWlyZW1lbnQgb24gYWxsIGVuZHBvaW50cyAoZXhjZXB0IE9QVElPTlMsIHdoaWNoIG11c3RcbiAgICBiZSBjb25maWd1cmVkIGRpcmVjdGx5IG9uIHRoZSBlbmRwb2ludClcblxuICAgIEF1dGhlbnRpY2F0aW9uIGNhbiBiZSByZXF1aXJlZCBvbiBhbiBlbnRpcmUgcm91dGUgb3IgaW5kaXZpZHVhbCBlbmRwb2ludHMuIElmIHJlcXVpcmVkIG9uIGFuXG4gICAgZW50aXJlIHJvdXRlLCB0aGF0IHNlcnZlcyBhcyB0aGUgZGVmYXVsdC4gSWYgcmVxdWlyZWQgaW4gYW55IGluZGl2aWR1YWwgZW5kcG9pbnRzLCB0aGF0IHdpbGxcbiAgICBvdmVycmlkZSB0aGUgZGVmYXVsdC5cblxuICAgIEFmdGVyIHRoZSBlbmRwb2ludCBpcyBjb25maWd1cmVkLCBhbGwgYXV0aGVudGljYXRpb24gYW5kIHJvbGUgcmVxdWlyZW1lbnRzIG9mIGFuIGVuZHBvaW50IGNhbiBiZVxuICAgIGFjY2Vzc2VkIGF0IDxjb2RlPmVuZHBvaW50LmF1dGhSZXF1aXJlZDwvY29kZT4gYW5kIDxjb2RlPmVuZHBvaW50LnJvbGVSZXF1aXJlZDwvY29kZT4sXG4gICAgcmVzcGVjdGl2ZWx5LlxuXG4gICAgQHBhcmFtIHtSb3V0ZX0gcm91dGUgVGhlIHJvdXRlIHRoZSBlbmRwb2ludHMgYmVsb25nIHRvXG4gICAgQHBhcmFtIHtFbmRwb2ludH0gZW5kcG9pbnQgVGhlIGVuZHBvaW50IHRvIGNvbmZpZ3VyZVxuICAjIyNcbiAgX2NvbmZpZ3VyZUVuZHBvaW50czogLT5cbiAgICBfLmVhY2ggQGVuZHBvaW50cywgKGVuZHBvaW50LCBtZXRob2QpIC0+XG4gICAgICBpZiBtZXRob2QgaXNudCAnb3B0aW9ucydcbiAgICAgICAgIyBDb25maWd1cmUgYWNjZXB0YWJsZSByb2xlc1xuICAgICAgICBpZiBub3QgQG9wdGlvbnM/LnJvbGVSZXF1aXJlZFxuICAgICAgICAgIEBvcHRpb25zLnJvbGVSZXF1aXJlZCA9IFtdXG4gICAgICAgIGlmIG5vdCBlbmRwb2ludC5yb2xlUmVxdWlyZWRcbiAgICAgICAgICBlbmRwb2ludC5yb2xlUmVxdWlyZWQgPSBbXVxuICAgICAgICBlbmRwb2ludC5yb2xlUmVxdWlyZWQgPSBfLnVuaW9uIGVuZHBvaW50LnJvbGVSZXF1aXJlZCwgQG9wdGlvbnMucm9sZVJlcXVpcmVkXG4gICAgICAgICMgTWFrZSBpdCBlYXNpZXIgdG8gY2hlY2sgaWYgbm8gcm9sZXMgYXJlIHJlcXVpcmVkXG4gICAgICAgIGlmIF8uaXNFbXB0eSBlbmRwb2ludC5yb2xlUmVxdWlyZWRcbiAgICAgICAgICBlbmRwb2ludC5yb2xlUmVxdWlyZWQgPSBmYWxzZVxuXG4gICAgICAgICMgQ29uZmlndXJlIGF1dGggcmVxdWlyZW1lbnRcbiAgICAgICAgaWYgZW5kcG9pbnQuYXV0aFJlcXVpcmVkIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGlmIEBvcHRpb25zPy5hdXRoUmVxdWlyZWQgb3IgZW5kcG9pbnQucm9sZVJlcXVpcmVkXG4gICAgICAgICAgICBlbmRwb2ludC5hdXRoUmVxdWlyZWQgPSB0cnVlXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZW5kcG9pbnQuYXV0aFJlcXVpcmVkID0gZmFsc2VcbiAgICAgICAgcmV0dXJuXG4gICAgLCB0aGlzXG4gICAgcmV0dXJuXG5cblxuICAjIyNcbiAgICBBdXRoZW50aWNhdGUgYW4gZW5kcG9pbnQgaWYgcmVxdWlyZWQsIGFuZCByZXR1cm4gdGhlIHJlc3VsdCBvZiBjYWxsaW5nIGl0XG5cbiAgICBAcmV0dXJucyBUaGUgZW5kcG9pbnQgcmVzcG9uc2Ugb3IgYSA0MDEgaWYgYXV0aGVudGljYXRpb24gZmFpbHNcbiAgIyMjXG4gIF9jYWxsRW5kcG9pbnQ6IChlbmRwb2ludENvbnRleHQsIGVuZHBvaW50KSAtPlxuICAgICMgQ2FsbCB0aGUgZW5kcG9pbnQgaWYgYXV0aGVudGljYXRpb24gZG9lc24ndCBmYWlsXG4gICAgYXV0aCA9IEBfYXV0aEFjY2VwdGVkIGVuZHBvaW50Q29udGV4dCwgZW5kcG9pbnRcbiAgICBpZiBhdXRoLnN1Y2Nlc3NcbiAgICAgIGlmIEBfcm9sZUFjY2VwdGVkIGVuZHBvaW50Q29udGV4dCwgZW5kcG9pbnRcbiAgICAgICAgcmV0dXJuIGVuZHBvaW50LmFjdGlvbi5jYWxsIGVuZHBvaW50Q29udGV4dFxuICAgICAgZWxzZSByZXR1cm4ge1xuICAgICAgICBzdGF0dXNDb2RlOiA0MDNcbiAgICAgICAgYm9keToge3N0YXR1czogJ2Vycm9yJywgbWVzc2FnZTogJ1lvdSBkbyBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGRvIHRoaXMuJ31cbiAgICAgIH1cbiAgICBlbHNlICMgQXV0aCBmYWlsZWRcbiAgICAgIGlmIGF1dGguZGF0YSB0aGVuIHJldHVybiBhdXRoLmRhdGFcbiAgICAgIGVsc2UgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzQ29kZTogNDAxXG4gICAgICAgIGJvZHk6IHtzdGF0dXM6ICdlcnJvcicsIG1lc3NhZ2U6ICdZb3UgbXVzdCBiZSBsb2dnZWQgaW4gdG8gZG8gdGhpcy4nfVxuICAgICAgfVxuXG5cbiAgIyMjXG4gICAgQXV0aGVudGljYXRlIHRoZSBnaXZlbiBlbmRwb2ludCBpZiByZXF1aXJlZFxuXG4gICAgT25jZSBpdCdzIGdsb2JhbGx5IGNvbmZpZ3VyZWQgaW4gdGhlIEFQSSwgYXV0aGVudGljYXRpb24gY2FuIGJlIHJlcXVpcmVkIG9uIGFuIGVudGlyZSByb3V0ZSBvclxuICAgIGluZGl2aWR1YWwgZW5kcG9pbnRzLiBJZiByZXF1aXJlZCBvbiBhbiBlbnRpcmUgZW5kcG9pbnQsIHRoYXQgc2VydmVzIGFzIHRoZSBkZWZhdWx0LiBJZiByZXF1aXJlZFxuICAgIGluIGFueSBpbmRpdmlkdWFsIGVuZHBvaW50cywgdGhhdCB3aWxsIG92ZXJyaWRlIHRoZSBkZWZhdWx0LlxuXG4gICAgQHJldHVybnMgQW4gb2JqZWN0IG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxuXG4gICAgICAgIHtcbiAgICAgICAgICBzdWNjZXNzOiBCb29sZWFuXG4gICAgICAgICAgZGF0YTogU3RyaW5nIG9yIE9iamVjdFxuICAgICAgICB9XG5cbiAgICAgIHdoZXJlIGBzdWNjZXNzYCBpcyBgdHJ1ZWAgaWYgYWxsIHJlcXVpcmVkIGF1dGhlbnRpY2F0aW9uIGNoZWNrcyBwYXNzIGFuZCB0aGUgb3B0aW9uYWwgYGRhdGFgXG4gICAgICB3aWxsIGNvbnRhaW4gdGhlIGF1dGggZGF0YSB3aGVuIHN1Y2Nlc3NmdWwgYW5kIGFuIG9wdGlvbmFsIGVycm9yIHJlc3BvbnNlIHdoZW4gYXV0aCBmYWlscy5cbiAgIyMjXG4gIF9hdXRoQWNjZXB0ZWQ6IChlbmRwb2ludENvbnRleHQsIGVuZHBvaW50KSAtPlxuICAgIGlmIGVuZHBvaW50LmF1dGhSZXF1aXJlZFxuICAgICAgcmV0dXJuIEBfYXV0aGVudGljYXRlIGVuZHBvaW50Q29udGV4dFxuICAgIGVsc2UgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG5cblxuICAjIyNcbiAgICBWZXJpZnkgdGhlIHJlcXVlc3QgaXMgYmVpbmcgbWFkZSBieSBhbiBhY3RpdmVseSBsb2dnZWQgaW4gdXNlclxuXG4gICAgSWYgdmVyaWZpZWQsIGF0dGFjaCB0aGUgYXV0aGVudGljYXRlZCB1c2VyIHRvIHRoZSBjb250ZXh0LlxuXG4gICAgQHJldHVybnMgQW4gb2JqZWN0IG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxuXG4gICAgICAgIHtcbiAgICAgICAgICBzdWNjZXNzOiBCb29sZWFuXG4gICAgICAgICAgZGF0YTogU3RyaW5nIG9yIE9iamVjdFxuICAgICAgICB9XG5cbiAgICAgIHdoZXJlIGBzdWNjZXNzYCBpcyBgdHJ1ZWAgaWYgYWxsIHJlcXVpcmVkIGF1dGhlbnRpY2F0aW9uIGNoZWNrcyBwYXNzIGFuZCB0aGUgb3B0aW9uYWwgYGRhdGFgXG4gICAgICB3aWxsIGNvbnRhaW4gdGhlIGF1dGggZGF0YSB3aGVuIHN1Y2Nlc3NmdWwgYW5kIGFuIG9wdGlvbmFsIGVycm9yIHJlc3BvbnNlIHdoZW4gYXV0aCBmYWlscy5cbiAgIyMjXG4gIF9hdXRoZW50aWNhdGU6IChlbmRwb2ludENvbnRleHQpIC0+XG4gICAgIyBHZXQgYXV0aCBpbmZvXG4gICAgYXV0aCA9IEBhcGkuX2NvbmZpZy5hdXRoLnVzZXIuY2FsbChlbmRwb2ludENvbnRleHQpXG5cbiAgICBpZiBub3QgYXV0aCB0aGVuIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH1cblxuICAgICMgR2V0IHRoZSB1c2VyIGZyb20gdGhlIGRhdGFiYXNlXG4gICAgaWYgYXV0aC51c2VySWQgYW5kIGF1dGgudG9rZW4gYW5kIG5vdCBhdXRoLnVzZXJcbiAgICAgIHVzZXJTZWxlY3RvciA9IHt9XG4gICAgICB1c2VyU2VsZWN0b3IuX2lkID0gYXV0aC51c2VySWRcbiAgICAgIHVzZXJTZWxlY3RvcltAYXBpLl9jb25maWcuYXV0aC50b2tlbl0gPSBhdXRoLnRva2VuXG4gICAgICBhdXRoLnVzZXIgPSBNZXRlb3IudXNlcnMuZmluZE9uZSB1c2VyU2VsZWN0b3JcblxuICAgIGlmIGF1dGguZXJyb3IgdGhlbiByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogYXV0aC5lcnJvciB9XG5cbiAgICAjIEF0dGFjaCB0aGUgdXNlciBhbmQgdGhlaXIgSUQgdG8gdGhlIGNvbnRleHQgaWYgdGhlIGF1dGhlbnRpY2F0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAgaWYgYXV0aC51c2VyXG4gICAgICBlbmRwb2ludENvbnRleHQudXNlciA9IGF1dGgudXNlclxuICAgICAgZW5kcG9pbnRDb250ZXh0LnVzZXJJZCA9IGF1dGgudXNlci5faWRcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgLCBkYXRhOiBhdXRoIH1cbiAgICBlbHNlIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH1cblxuXG4gICMjI1xuICAgIEF1dGhlbnRpY2F0ZSB0aGUgdXNlciByb2xlIGlmIHJlcXVpcmVkXG5cbiAgICBNdXN0IGJlIGNhbGxlZCBhZnRlciBfYXV0aEFjY2VwdGVkKCkuXG5cbiAgICBAcmV0dXJucyBUcnVlIGlmIHRoZSBhdXRoZW50aWNhdGVkIHVzZXIgYmVsb25ncyB0byA8aT5hbnk8L2k+IG9mIHRoZSBhY2NlcHRhYmxlIHJvbGVzIG9uIHRoZVxuICAgICAgICAgICAgIGVuZHBvaW50XG4gICMjI1xuICBfcm9sZUFjY2VwdGVkOiAoZW5kcG9pbnRDb250ZXh0LCBlbmRwb2ludCkgLT5cbiAgICBpZiBlbmRwb2ludC5yb2xlUmVxdWlyZWRcbiAgICAgIGlmIF8uaXNFbXB0eSBfLmludGVyc2VjdGlvbihlbmRwb2ludC5yb2xlUmVxdWlyZWQsIGVuZHBvaW50Q29udGV4dC51c2VyLnJvbGVzKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB0cnVlXG5cblxuICAjIyNcbiAgICBSZXNwb25kIHRvIGFuIEhUVFAgcmVxdWVzdFxuICAjIyNcbiAgX3Jlc3BvbmQ6IChyZXNwb25zZSwgYm9keSwgc3RhdHVzQ29kZT0yMDAsIGhlYWRlcnM9e30pIC0+XG4gICAgIyBPdmVycmlkZSBhbnkgZGVmYXVsdCBoZWFkZXJzIHRoYXQgaGF2ZSBiZWVuIHByb3ZpZGVkIChrZXlzIGFyZSBub3JtYWxpemVkIHRvIGJlIGNhc2UgaW5zZW5zaXRpdmUpXG4gICAgIyBUT0RPOiBDb25zaWRlciBvbmx5IGxvd2VyY2FzaW5nIHRoZSBoZWFkZXIga2V5cyB3ZSBuZWVkIG5vcm1hbGl6ZWQsIGxpa2UgQ29udGVudC1UeXBlXG4gICAgZGVmYXVsdEhlYWRlcnMgPSBAX2xvd2VyQ2FzZUtleXMgQGFwaS5fY29uZmlnLmRlZmF1bHRIZWFkZXJzXG4gICAgaGVhZGVycyA9IEBfbG93ZXJDYXNlS2V5cyBoZWFkZXJzXG4gICAgaGVhZGVycyA9IF8uZXh0ZW5kIGRlZmF1bHRIZWFkZXJzLCBoZWFkZXJzXG5cbiAgICAjIFByZXBhcmUgSlNPTiBib2R5IGZvciByZXNwb25zZSB3aGVuIENvbnRlbnQtVHlwZSBpbmRpY2F0ZXMgSlNPTiB0eXBlXG4gICAgaWYgaGVhZGVyc1snY29udGVudC10eXBlJ10ubWF0Y2goL2pzb258amF2YXNjcmlwdC8pIGlzbnQgbnVsbFxuICAgICAgaWYgQGFwaS5fY29uZmlnLnByZXR0eUpzb25cbiAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5IGJvZHksIHVuZGVmaW5lZCwgMlxuICAgICAgZWxzZVxuICAgICAgICBib2R5ID0gSlNPTi5zdHJpbmdpZnkgYm9keVxuXG4gICAgIyBTZW5kIHJlc3BvbnNlXG4gICAgc2VuZFJlc3BvbnNlID0gLT5cbiAgICAgIHJlc3BvbnNlLndyaXRlSGVhZCBzdGF0dXNDb2RlLCBoZWFkZXJzXG4gICAgICByZXNwb25zZS53cml0ZSBib2R5XG4gICAgICByZXNwb25zZS5lbmQoKVxuICAgIGlmIHN0YXR1c0NvZGUgaW4gWzQwMSwgNDAzXVxuICAgICAgIyBIYWNrZXJzIGNhbiBtZWFzdXJlIHRoZSByZXNwb25zZSB0aW1lIHRvIGRldGVybWluZSB0aGluZ3MgbGlrZSB3aGV0aGVyIHRoZSA0MDEgcmVzcG9uc2Ugd2FzIFxuICAgICAgIyBjYXVzZWQgYnkgYmFkIHVzZXIgaWQgdnMgYmFkIHBhc3N3b3JkLlxuICAgICAgIyBJbiBkb2luZyBzbywgdGhleSBjYW4gZmlyc3Qgc2NhbiBmb3IgdmFsaWQgdXNlciBpZHMgcmVnYXJkbGVzcyBvZiB2YWxpZCBwYXNzd29yZHMuXG4gICAgICAjIERlbGF5IGJ5IGEgcmFuZG9tIGFtb3VudCB0byByZWR1Y2UgdGhlIGFiaWxpdHkgZm9yIGEgaGFja2VyIHRvIGRldGVybWluZSB0aGUgcmVzcG9uc2UgdGltZS5cbiAgICAgICMgU2VlIGh0dHBzOi8vd3d3Lm93YXNwLm9yZy9pbmRleC5waHAvQmxvY2tpbmdfQnJ1dGVfRm9yY2VfQXR0YWNrcyNGaW5kaW5nX090aGVyX0NvdW50ZXJtZWFzdXJlc1xuICAgICAgIyBTZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVGltaW5nX2F0dGFja1xuICAgICAgbWluaW11bURlbGF5SW5NaWxsaXNlY29uZHMgPSA1MDBcbiAgICAgIHJhbmRvbU11bHRpcGxpZXJCZXR3ZWVuT25lQW5kVHdvID0gMSArIE1hdGgucmFuZG9tKClcbiAgICAgIGRlbGF5SW5NaWxsaXNlY29uZHMgPSBtaW5pbXVtRGVsYXlJbk1pbGxpc2Vjb25kcyAqIHJhbmRvbU11bHRpcGxpZXJCZXR3ZWVuT25lQW5kVHdvXG4gICAgICBNZXRlb3Iuc2V0VGltZW91dCBzZW5kUmVzcG9uc2UsIGRlbGF5SW5NaWxsaXNlY29uZHNcbiAgICBlbHNlXG4gICAgICBzZW5kUmVzcG9uc2UoKVxuXG4gICMjI1xuICAgIFJldHVybiB0aGUgb2JqZWN0IHdpdGggYWxsIG9mIHRoZSBrZXlzIGNvbnZlcnRlZCB0byBsb3dlcmNhc2VcbiAgIyMjXG4gIF9sb3dlckNhc2VLZXlzOiAob2JqZWN0KSAtPlxuICAgIF8uY2hhaW4gb2JqZWN0XG4gICAgLnBhaXJzKClcbiAgICAubWFwIChhdHRyKSAtPlxuICAgICAgW2F0dHJbMF0udG9Mb3dlckNhc2UoKSwgYXR0clsxXV1cbiAgICAub2JqZWN0KClcbiAgICAudmFsdWUoKVxuIiwic2hhcmUuUm91dGUgPSAoZnVuY3Rpb24oKSB7XG4gIGNsYXNzIFJvdXRlIHtcbiAgICBjb25zdHJ1Y3RvcihhcGksIHBhdGgsIG9wdGlvbnMsIGVuZHBvaW50czEpIHtcbiAgICAgIHRoaXMuYXBpID0gYXBpO1xuICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICB0aGlzLmVuZHBvaW50cyA9IGVuZHBvaW50czE7XG4gICAgICAvLyBDaGVjayBpZiBvcHRpb25zIHdlcmUgcHJvdmlkZWRcbiAgICAgIGlmICghdGhpcy5lbmRwb2ludHMpIHtcbiAgICAgICAgdGhpcy5lbmRwb2ludHMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICBDb252ZXJ0IGFsbCBlbmRwb2ludHMgb24gdGhlIGdpdmVuIHJvdXRlIGludG8gb3VyIGV4cGVjdGVkIGVuZHBvaW50IG9iamVjdCBpZiBpdCBpcyBhIGJhcmVcbiAgICAgIGZ1bmN0aW9uXG5cbiAgICAgIEBwYXJhbSB7Um91dGV9IHJvdXRlIFRoZSByb3V0ZSB0aGUgZW5kcG9pbnRzIGJlbG9uZyB0b1xuICAgICovXG4gICAgX3Jlc29sdmVFbmRwb2ludHMoKSB7XG4gICAgICBfLmVhY2godGhpcy5lbmRwb2ludHMsIGZ1bmN0aW9uKGVuZHBvaW50LCBtZXRob2QsIGVuZHBvaW50cykge1xuICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGVuZHBvaW50KSkge1xuICAgICAgICAgIHJldHVybiBlbmRwb2ludHNbbWV0aG9kXSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogZW5kcG9pbnRcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgIENvbmZpZ3VyZSB0aGUgYXV0aGVudGljYXRpb24gYW5kIHJvbGUgcmVxdWlyZW1lbnQgb24gYWxsIGVuZHBvaW50cyAoZXhjZXB0IE9QVElPTlMsIHdoaWNoIG11c3RcbiAgICBiZSBjb25maWd1cmVkIGRpcmVjdGx5IG9uIHRoZSBlbmRwb2ludClcblxuICAgIEF1dGhlbnRpY2F0aW9uIGNhbiBiZSByZXF1aXJlZCBvbiBhbiBlbnRpcmUgcm91dGUgb3IgaW5kaXZpZHVhbCBlbmRwb2ludHMuIElmIHJlcXVpcmVkIG9uIGFuXG4gICAgZW50aXJlIHJvdXRlLCB0aGF0IHNlcnZlcyBhcyB0aGUgZGVmYXVsdC4gSWYgcmVxdWlyZWQgaW4gYW55IGluZGl2aWR1YWwgZW5kcG9pbnRzLCB0aGF0IHdpbGxcbiAgICBvdmVycmlkZSB0aGUgZGVmYXVsdC5cblxuICAgIEFmdGVyIHRoZSBlbmRwb2ludCBpcyBjb25maWd1cmVkLCBhbGwgYXV0aGVudGljYXRpb24gYW5kIHJvbGUgcmVxdWlyZW1lbnRzIG9mIGFuIGVuZHBvaW50IGNhbiBiZVxuICAgIGFjY2Vzc2VkIGF0IDxjb2RlPmVuZHBvaW50LmF1dGhSZXF1aXJlZDwvY29kZT4gYW5kIDxjb2RlPmVuZHBvaW50LnJvbGVSZXF1aXJlZDwvY29kZT4sXG4gICAgcmVzcGVjdGl2ZWx5LlxuXG4gICAgQHBhcmFtIHtSb3V0ZX0gcm91dGUgVGhlIHJvdXRlIHRoZSBlbmRwb2ludHMgYmVsb25nIHRvXG4gICAgQHBhcmFtIHtFbmRwb2ludH0gZW5kcG9pbnQgVGhlIGVuZHBvaW50IHRvIGNvbmZpZ3VyZVxuICAgICovXG4gICAgX2NvbmZpZ3VyZUVuZHBvaW50cygpIHtcbiAgICAgIF8uZWFjaCh0aGlzLmVuZHBvaW50cywgZnVuY3Rpb24oZW5kcG9pbnQsIG1ldGhvZCkge1xuICAgICAgICB2YXIgcmVmLCByZWYxO1xuICAgICAgICBpZiAobWV0aG9kICE9PSAnb3B0aW9ucycpIHtcbiAgICAgICAgICAvLyBDb25maWd1cmUgYWNjZXB0YWJsZSByb2xlc1xuICAgICAgICAgIGlmICghKChyZWYgPSB0aGlzLm9wdGlvbnMpICE9IG51bGwgPyByZWYucm9sZVJlcXVpcmVkIDogdm9pZCAwKSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJvbGVSZXF1aXJlZCA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWVuZHBvaW50LnJvbGVSZXF1aXJlZCkge1xuICAgICAgICAgICAgZW5kcG9pbnQucm9sZVJlcXVpcmVkID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIGVuZHBvaW50LnJvbGVSZXF1aXJlZCA9IF8udW5pb24oZW5kcG9pbnQucm9sZVJlcXVpcmVkLCB0aGlzLm9wdGlvbnMucm9sZVJlcXVpcmVkKTtcbiAgICAgICAgICAvLyBNYWtlIGl0IGVhc2llciB0byBjaGVjayBpZiBubyByb2xlcyBhcmUgcmVxdWlyZWRcbiAgICAgICAgICBpZiAoXy5pc0VtcHR5KGVuZHBvaW50LnJvbGVSZXF1aXJlZCkpIHtcbiAgICAgICAgICAgIGVuZHBvaW50LnJvbGVSZXF1aXJlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBDb25maWd1cmUgYXV0aCByZXF1aXJlbWVudFxuICAgICAgICAgIGlmIChlbmRwb2ludC5hdXRoUmVxdWlyZWQgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgaWYgKCgocmVmMSA9IHRoaXMub3B0aW9ucykgIT0gbnVsbCA/IHJlZjEuYXV0aFJlcXVpcmVkIDogdm9pZCAwKSB8fCBlbmRwb2ludC5yb2xlUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgZW5kcG9pbnQuYXV0aFJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVuZHBvaW50LmF1dGhSZXF1aXJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG4gICAgfVxuXG4gICAgLypcbiAgICBBdXRoZW50aWNhdGUgYW4gZW5kcG9pbnQgaWYgcmVxdWlyZWQsIGFuZCByZXR1cm4gdGhlIHJlc3VsdCBvZiBjYWxsaW5nIGl0XG5cbiAgICBAcmV0dXJucyBUaGUgZW5kcG9pbnQgcmVzcG9uc2Ugb3IgYSA0MDEgaWYgYXV0aGVudGljYXRpb24gZmFpbHNcbiAgICAqL1xuICAgIF9jYWxsRW5kcG9pbnQoZW5kcG9pbnRDb250ZXh0LCBlbmRwb2ludCkge1xuICAgICAgdmFyIGF1dGg7XG4gICAgICAvLyBDYWxsIHRoZSBlbmRwb2ludCBpZiBhdXRoZW50aWNhdGlvbiBkb2Vzbid0IGZhaWxcbiAgICAgIGF1dGggPSB0aGlzLl9hdXRoQWNjZXB0ZWQoZW5kcG9pbnRDb250ZXh0LCBlbmRwb2ludCk7XG4gICAgICBpZiAoYXV0aC5zdWNjZXNzKSB7XG4gICAgICAgIGlmICh0aGlzLl9yb2xlQWNjZXB0ZWQoZW5kcG9pbnRDb250ZXh0LCBlbmRwb2ludCkpIHtcbiAgICAgICAgICByZXR1cm4gZW5kcG9pbnQuYWN0aW9uLmNhbGwoZW5kcG9pbnRDb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzQ29kZTogNDAzLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdZb3UgZG8gbm90IGhhdmUgcGVybWlzc2lvbiB0byBkbyB0aGlzLicgLy8gQXV0aCBmYWlsZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoYXV0aC5kYXRhKSB7XG4gICAgICAgICAgcmV0dXJuIGF1dGguZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzQ29kZTogNDAxLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdZb3UgbXVzdCBiZSBsb2dnZWQgaW4gdG8gZG8gdGhpcy4nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICBBdXRoZW50aWNhdGUgdGhlIGdpdmVuIGVuZHBvaW50IGlmIHJlcXVpcmVkXG5cbiAgICAgIE9uY2UgaXQncyBnbG9iYWxseSBjb25maWd1cmVkIGluIHRoZSBBUEksIGF1dGhlbnRpY2F0aW9uIGNhbiBiZSByZXF1aXJlZCBvbiBhbiBlbnRpcmUgcm91dGUgb3JcbiAgICAgIGluZGl2aWR1YWwgZW5kcG9pbnRzLiBJZiByZXF1aXJlZCBvbiBhbiBlbnRpcmUgZW5kcG9pbnQsIHRoYXQgc2VydmVzIGFzIHRoZSBkZWZhdWx0LiBJZiByZXF1aXJlZFxuICAgICAgaW4gYW55IGluZGl2aWR1YWwgZW5kcG9pbnRzLCB0aGF0IHdpbGwgb3ZlcnJpZGUgdGhlIGRlZmF1bHQuXG5cbiAgICAgIEByZXR1cm5zIEFuIG9iamVjdCBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdDpcblxuICAgIHtcbiAgICAgIHN1Y2Nlc3M6IEJvb2xlYW5cbiAgICAgIGRhdGE6IFN0cmluZyBvciBPYmplY3RcbiAgICB9XG5cbiAgICB3aGVyZSBgc3VjY2Vzc2AgaXMgYHRydWVgIGlmIGFsbCByZXF1aXJlZCBhdXRoZW50aWNhdGlvbiBjaGVja3MgcGFzcyBhbmQgdGhlIG9wdGlvbmFsIGBkYXRhYFxuICAgIHdpbGwgY29udGFpbiB0aGUgYXV0aCBkYXRhIHdoZW4gc3VjY2Vzc2Z1bCBhbmQgYW4gb3B0aW9uYWwgZXJyb3IgcmVzcG9uc2Ugd2hlbiBhdXRoIGZhaWxzLlxuICAgICovXG4gICAgX2F1dGhBY2NlcHRlZChlbmRwb2ludENvbnRleHQsIGVuZHBvaW50KSB7XG4gICAgICBpZiAoZW5kcG9pbnQuYXV0aFJlcXVpcmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoZW50aWNhdGUoZW5kcG9pbnRDb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgVmVyaWZ5IHRoZSByZXF1ZXN0IGlzIGJlaW5nIG1hZGUgYnkgYW4gYWN0aXZlbHkgbG9nZ2VkIGluIHVzZXJcblxuICAgIElmIHZlcmlmaWVkLCBhdHRhY2ggdGhlIGF1dGhlbnRpY2F0ZWQgdXNlciB0byB0aGUgY29udGV4dC5cblxuICAgIEByZXR1cm5zIEFuIG9iamVjdCBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdDpcblxuICAgICAge1xuICAgICAgICBzdWNjZXNzOiBCb29sZWFuXG4gICAgICAgIGRhdGE6IFN0cmluZyBvciBPYmplY3RcbiAgICAgIH1cblxuICAgIHdoZXJlIGBzdWNjZXNzYCBpcyBgdHJ1ZWAgaWYgYWxsIHJlcXVpcmVkIGF1dGhlbnRpY2F0aW9uIGNoZWNrcyBwYXNzIGFuZCB0aGUgb3B0aW9uYWwgYGRhdGFgXG4gICAgd2lsbCBjb250YWluIHRoZSBhdXRoIGRhdGEgd2hlbiBzdWNjZXNzZnVsIGFuZCBhbiBvcHRpb25hbCBlcnJvciByZXNwb25zZSB3aGVuIGF1dGggZmFpbHMuXG4gICAgKi9cbiAgICBfYXV0aGVudGljYXRlKGVuZHBvaW50Q29udGV4dCkge1xuICAgICAgdmFyIGF1dGgsIHVzZXJTZWxlY3RvcjtcbiAgICAgIC8vIEdldCBhdXRoIGluZm9cbiAgICAgIGF1dGggPSB0aGlzLmFwaS5fY29uZmlnLmF1dGgudXNlci5jYWxsKGVuZHBvaW50Q29udGV4dCk7XG4gICAgICBpZiAoIWF1dGgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gR2V0IHRoZSB1c2VyIGZyb20gdGhlIGRhdGFiYXNlXG4gICAgICBpZiAoYXV0aC51c2VySWQgJiYgYXV0aC50b2tlbiAmJiAhYXV0aC51c2VyKSB7XG4gICAgICAgIHVzZXJTZWxlY3RvciA9IHt9O1xuICAgICAgICB1c2VyU2VsZWN0b3IuX2lkID0gYXV0aC51c2VySWQ7XG4gICAgICAgIHVzZXJTZWxlY3Rvclt0aGlzLmFwaS5fY29uZmlnLmF1dGgudG9rZW5dID0gYXV0aC50b2tlbjtcbiAgICAgICAgYXV0aC51c2VyID0gTWV0ZW9yLnVzZXJzLmZpbmRPbmUodXNlclNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICAgIGlmIChhdXRoLmVycm9yKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgZGF0YTogYXV0aC5lcnJvclxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gQXR0YWNoIHRoZSB1c2VyIGFuZCB0aGVpciBJRCB0byB0aGUgY29udGV4dCBpZiB0aGUgYXV0aGVudGljYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgIGlmIChhdXRoLnVzZXIpIHtcbiAgICAgICAgZW5kcG9pbnRDb250ZXh0LnVzZXIgPSBhdXRoLnVzZXI7XG4gICAgICAgIGVuZHBvaW50Q29udGV4dC51c2VySWQgPSBhdXRoLnVzZXIuX2lkO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgZGF0YTogYXV0aFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgQXV0aGVudGljYXRlIHRoZSB1c2VyIHJvbGUgaWYgcmVxdWlyZWRcblxuICAgIE11c3QgYmUgY2FsbGVkIGFmdGVyIF9hdXRoQWNjZXB0ZWQoKS5cblxuICAgIEByZXR1cm5zIFRydWUgaWYgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlciBiZWxvbmdzIHRvIDxpPmFueTwvaT4gb2YgdGhlIGFjY2VwdGFibGUgcm9sZXMgb24gdGhlXG4gICAgICAgICAgIGVuZHBvaW50XG4gICAgKi9cbiAgICBfcm9sZUFjY2VwdGVkKGVuZHBvaW50Q29udGV4dCwgZW5kcG9pbnQpIHtcbiAgICAgIGlmIChlbmRwb2ludC5yb2xlUmVxdWlyZWQpIHtcbiAgICAgICAgaWYgKF8uaXNFbXB0eShfLmludGVyc2VjdGlvbihlbmRwb2ludC5yb2xlUmVxdWlyZWQsIGVuZHBvaW50Q29udGV4dC51c2VyLnJvbGVzKSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qXG4gICAgUmVzcG9uZCB0byBhbiBIVFRQIHJlcXVlc3RcbiAgICAqL1xuICAgIF9yZXNwb25kKHJlc3BvbnNlLCBib2R5LCBzdGF0dXNDb2RlID0gMjAwLCBoZWFkZXJzID0ge30pIHtcbiAgICAgIHZhciBkZWZhdWx0SGVhZGVycywgZGVsYXlJbk1pbGxpc2Vjb25kcywgbWluaW11bURlbGF5SW5NaWxsaXNlY29uZHMsIHJhbmRvbU11bHRpcGxpZXJCZXR3ZWVuT25lQW5kVHdvLCBzZW5kUmVzcG9uc2U7XG4gICAgICAvLyBPdmVycmlkZSBhbnkgZGVmYXVsdCBoZWFkZXJzIHRoYXQgaGF2ZSBiZWVuIHByb3ZpZGVkIChrZXlzIGFyZSBub3JtYWxpemVkIHRvIGJlIGNhc2UgaW5zZW5zaXRpdmUpXG4gICAgICAvLyBUT0RPOiBDb25zaWRlciBvbmx5IGxvd2VyY2FzaW5nIHRoZSBoZWFkZXIga2V5cyB3ZSBuZWVkIG5vcm1hbGl6ZWQsIGxpa2UgQ29udGVudC1UeXBlXG4gICAgICBkZWZhdWx0SGVhZGVycyA9IHRoaXMuX2xvd2VyQ2FzZUtleXModGhpcy5hcGkuX2NvbmZpZy5kZWZhdWx0SGVhZGVycyk7XG4gICAgICBoZWFkZXJzID0gdGhpcy5fbG93ZXJDYXNlS2V5cyhoZWFkZXJzKTtcbiAgICAgIGhlYWRlcnMgPSBfLmV4dGVuZChkZWZhdWx0SGVhZGVycywgaGVhZGVycyk7XG4gICAgICAvLyBQcmVwYXJlIEpTT04gYm9keSBmb3IgcmVzcG9uc2Ugd2hlbiBDb250ZW50LVR5cGUgaW5kaWNhdGVzIEpTT04gdHlwZVxuICAgICAgaWYgKGhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddLm1hdGNoKC9qc29ufGphdmFzY3JpcHQvKSAhPT0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5hcGkuX2NvbmZpZy5wcmV0dHlKc29uKSB7XG4gICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHksIHZvaWQgMCwgMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBTZW5kIHJlc3BvbnNlXG4gICAgICBzZW5kUmVzcG9uc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzcG9uc2Uud3JpdGVIZWFkKHN0YXR1c0NvZGUsIGhlYWRlcnMpO1xuICAgICAgICByZXNwb25zZS53cml0ZShib2R5KTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmVuZCgpO1xuICAgICAgfTtcbiAgICAgIGlmIChzdGF0dXNDb2RlID09PSA0MDEgfHwgc3RhdHVzQ29kZSA9PT0gNDAzKSB7XG4gICAgICAgIC8vIEhhY2tlcnMgY2FuIG1lYXN1cmUgdGhlIHJlc3BvbnNlIHRpbWUgdG8gZGV0ZXJtaW5lIHRoaW5ncyBsaWtlIHdoZXRoZXIgdGhlIDQwMSByZXNwb25zZSB3YXMgXG4gICAgICAgIC8vIGNhdXNlZCBieSBiYWQgdXNlciBpZCB2cyBiYWQgcGFzc3dvcmQuXG4gICAgICAgIC8vIEluIGRvaW5nIHNvLCB0aGV5IGNhbiBmaXJzdCBzY2FuIGZvciB2YWxpZCB1c2VyIGlkcyByZWdhcmRsZXNzIG9mIHZhbGlkIHBhc3N3b3Jkcy5cbiAgICAgICAgLy8gRGVsYXkgYnkgYSByYW5kb20gYW1vdW50IHRvIHJlZHVjZSB0aGUgYWJpbGl0eSBmb3IgYSBoYWNrZXIgdG8gZGV0ZXJtaW5lIHRoZSByZXNwb25zZSB0aW1lLlxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly93d3cub3dhc3Aub3JnL2luZGV4LnBocC9CbG9ja2luZ19CcnV0ZV9Gb3JjZV9BdHRhY2tzI0ZpbmRpbmdfT3RoZXJfQ291bnRlcm1lYXN1cmVzXG4gICAgICAgIC8vIFNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9UaW1pbmdfYXR0YWNrXG4gICAgICAgIG1pbmltdW1EZWxheUluTWlsbGlzZWNvbmRzID0gNTAwO1xuICAgICAgICByYW5kb21NdWx0aXBsaWVyQmV0d2Vlbk9uZUFuZFR3byA9IDEgKyBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBkZWxheUluTWlsbGlzZWNvbmRzID0gbWluaW11bURlbGF5SW5NaWxsaXNlY29uZHMgKiByYW5kb21NdWx0aXBsaWVyQmV0d2Vlbk9uZUFuZFR3bztcbiAgICAgICAgcmV0dXJuIE1ldGVvci5zZXRUaW1lb3V0KHNlbmRSZXNwb25zZSwgZGVsYXlJbk1pbGxpc2Vjb25kcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgIFJldHVybiB0aGUgb2JqZWN0IHdpdGggYWxsIG9mIHRoZSBrZXlzIGNvbnZlcnRlZCB0byBsb3dlcmNhc2VcbiAgICAqL1xuICAgIF9sb3dlckNhc2VLZXlzKG9iamVjdCkge1xuICAgICAgcmV0dXJuIF8uY2hhaW4ob2JqZWN0KS5wYWlycygpLm1hcChmdW5jdGlvbihhdHRyKSB7XG4gICAgICAgIHJldHVybiBbYXR0clswXS50b0xvd2VyQ2FzZSgpLCBhdHRyWzFdXTtcbiAgICAgIH0pLm9iamVjdCgpLnZhbHVlKCk7XG4gICAgfVxuXG4gIH07XG5cbiAgUm91dGUucHJvdG90eXBlLmFkZFRvQXBpID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBhdmFpbGFibGVNZXRob2RzO1xuICAgIGF2YWlsYWJsZU1ldGhvZHMgPSBbJ2dldCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdkZWxldGUnLCAnb3B0aW9ucyddO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhbGxvd2VkTWV0aG9kcywgZnVsbFBhdGgsIHJlamVjdGVkTWV0aG9kcywgc2VsZjtcbiAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgLy8gVGhyb3cgYW4gZXJyb3IgaWYgYSByb3V0ZSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIGF0IHRoaXMgcGF0aFxuICAgICAgLy8gVE9ETzogQ2hlY2sgZm9yIGNvbGxpc2lvbnMgd2l0aCBwYXRocyB0aGF0IGZvbGxvdyBzYW1lIHBhdHRlcm4gd2l0aCBkaWZmZXJlbnQgcGFyYW1ldGVyIG5hbWVzXG4gICAgICBpZiAoXy5jb250YWlucyh0aGlzLmFwaS5fY29uZmlnLnBhdGhzLCB0aGlzLnBhdGgpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGFkZCBhIHJvdXRlIGF0IGFuIGV4aXN0aW5nIHBhdGg6ICR7dGhpcy5wYXRofWApO1xuICAgICAgfVxuICAgICAgLy8gT3ZlcnJpZGUgdGhlIGRlZmF1bHQgT1BUSU9OUyBlbmRwb2ludCB3aXRoIG91ciBvd25cbiAgICAgIHRoaXMuZW5kcG9pbnRzID0gXy5leHRlbmQoe1xuICAgICAgICBvcHRpb25zOiB0aGlzLmFwaS5fY29uZmlnLmRlZmF1bHRPcHRpb25zRW5kcG9pbnRcbiAgICAgIH0sIHRoaXMuZW5kcG9pbnRzKTtcbiAgICAgIC8vIENvbmZpZ3VyZSBlYWNoIGVuZHBvaW50IG9uIHRoaXMgcm91dGVcbiAgICAgIHRoaXMuX3Jlc29sdmVFbmRwb2ludHMoKTtcbiAgICAgIHRoaXMuX2NvbmZpZ3VyZUVuZHBvaW50cygpO1xuICAgICAgLy8gQWRkIHRvIG91ciBsaXN0IG9mIGV4aXN0aW5nIHBhdGhzXG4gICAgICB0aGlzLmFwaS5fY29uZmlnLnBhdGhzLnB1c2godGhpcy5wYXRoKTtcbiAgICAgIGFsbG93ZWRNZXRob2RzID0gXy5maWx0ZXIoYXZhaWxhYmxlTWV0aG9kcywgZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBfLmNvbnRhaW5zKF8ua2V5cyhzZWxmLmVuZHBvaW50cyksIG1ldGhvZCk7XG4gICAgICB9KTtcbiAgICAgIHJlamVjdGVkTWV0aG9kcyA9IF8ucmVqZWN0KGF2YWlsYWJsZU1ldGhvZHMsIGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICByZXR1cm4gXy5jb250YWlucyhfLmtleXMoc2VsZi5lbmRwb2ludHMpLCBtZXRob2QpO1xuICAgICAgfSk7XG4gICAgICAvLyBTZXR1cCBlbmRwb2ludHMgb24gcm91dGVcbiAgICAgIGZ1bGxQYXRoID0gdGhpcy5hcGkuX2NvbmZpZy5hcGlQYXRoICsgdGhpcy5wYXRoO1xuICAgICAgXy5lYWNoKGFsbG93ZWRNZXRob2RzLCBmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgdmFyIGVuZHBvaW50O1xuICAgICAgICBlbmRwb2ludCA9IHNlbGYuZW5kcG9pbnRzW21ldGhvZF07XG4gICAgICAgIHJldHVybiBKc29uUm91dGVzLmFkZChtZXRob2QsIGZ1bGxQYXRoLCBmdW5jdGlvbihyZXEsIHJlcykge1xuICAgICAgICAgIHZhciBkb25lRnVuYywgZW5kcG9pbnRDb250ZXh0LCBlcnJvciwgcmVzcG9uc2VEYXRhLCByZXNwb25zZUluaXRpYXRlZDtcbiAgICAgICAgICAvLyBBZGQgZnVuY3Rpb24gdG8gZW5kcG9pbnQgY29udGV4dCBmb3IgaW5kaWNhdGluZyBhIHJlc3BvbnNlIGhhcyBiZWVuIGluaXRpYXRlZCBtYW51YWxseVxuICAgICAgICAgIHJlc3BvbnNlSW5pdGlhdGVkID0gZmFsc2U7XG4gICAgICAgICAgZG9uZUZ1bmMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZUluaXRpYXRlZCA9IHRydWU7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBlbmRwb2ludENvbnRleHQgPSB7XG4gICAgICAgICAgICB1cmxQYXJhbXM6IHJlcS5wYXJhbXMsXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogcmVxLnF1ZXJ5LFxuICAgICAgICAgICAgYm9keVBhcmFtczogcmVxLmJvZHksXG4gICAgICAgICAgICByZXF1ZXN0OiByZXEsXG4gICAgICAgICAgICByZXNwb25zZTogcmVzLFxuICAgICAgICAgICAgZG9uZTogZG9uZUZ1bmNcbiAgICAgICAgICB9O1xuICAgICAgICAgIC8vIEFkZCBlbmRwb2ludCBjb25maWcgb3B0aW9ucyB0byBjb250ZXh0XG4gICAgICAgICAgXy5leHRlbmQoZW5kcG9pbnRDb250ZXh0LCBlbmRwb2ludCk7XG4gICAgICAgICAgLy8gUnVuIHRoZSByZXF1ZXN0ZWQgZW5kcG9pbnRcbiAgICAgICAgICByZXNwb25zZURhdGEgPSBudWxsO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZURhdGEgPSBzZWxmLl9jYWxsRW5kcG9pbnQoZW5kcG9pbnRDb250ZXh0LCBlbmRwb2ludCk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IxKSB7XG4gICAgICAgICAgICBlcnJvciA9IGVycm9yMTtcbiAgICAgICAgICAgIC8vIERvIGV4YWN0bHkgd2hhdCBJcm9uIFJvdXRlciB3b3VsZCBoYXZlIGRvbmUsIHRvIGF2b2lkIGNoYW5naW5nIHRoZSBBUElcbiAgICAgICAgICAgIGlyb25Sb3V0ZXJTZW5kRXJyb3JUb1Jlc3BvbnNlKGVycm9yLCByZXEsIHJlcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXNwb25zZUluaXRpYXRlZCkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIHRoZSByZXNwb25zZSBpcyBwcm9wZXJseSBjb21wbGV0ZWRcbiAgICAgICAgICAgIHJlcy5lbmQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJlcy5oZWFkZXJzU2VudCkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11c3QgY2FsbCB0aGlzLmRvbmUoKSBhZnRlciBoYW5kbGluZyBlbmRwb2ludCByZXNwb25zZSBtYW51YWxseTogJHttZXRob2R9ICR7ZnVsbFBhdGh9YCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlRGF0YSA9PT0gbnVsbCB8fCByZXNwb25zZURhdGEgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCByZXR1cm4gbnVsbCBvciB1bmRlZmluZWQgZnJvbSBhbiBlbmRwb2ludDogJHttZXRob2R9ICR7ZnVsbFBhdGh9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEdlbmVyYXRlIGFuZCByZXR1cm4gdGhlIGh0dHAgcmVzcG9uc2UsIGhhbmRsaW5nIHRoZSBkaWZmZXJlbnQgZW5kcG9pbnQgcmVzcG9uc2UgdHlwZXNcbiAgICAgICAgICBpZiAocmVzcG9uc2VEYXRhLmJvZHkgJiYgKHJlc3BvbnNlRGF0YS5zdGF0dXNDb2RlIHx8IHJlc3BvbnNlRGF0YS5oZWFkZXJzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuX3Jlc3BvbmQocmVzLCByZXNwb25zZURhdGEuYm9keSwgcmVzcG9uc2VEYXRhLnN0YXR1c0NvZGUsIHJlc3BvbnNlRGF0YS5oZWFkZXJzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuX3Jlc3BvbmQocmVzLCByZXNwb25zZURhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBfLmVhY2gocmVqZWN0ZWRNZXRob2RzLCBmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIEpzb25Sb3V0ZXMuYWRkKG1ldGhvZCwgZnVsbFBhdGgsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gICAgICAgICAgdmFyIGhlYWRlcnMsIHJlc3BvbnNlRGF0YTtcbiAgICAgICAgICByZXNwb25zZURhdGEgPSB7XG4gICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICBtZXNzYWdlOiAnQVBJIGVuZHBvaW50IGRvZXMgbm90IGV4aXN0J1xuICAgICAgICAgIH07XG4gICAgICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgICAgICdBbGxvdyc6IGFsbG93ZWRNZXRob2RzLmpvaW4oJywgJykudG9VcHBlckNhc2UoKVxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHNlbGYuX3Jlc3BvbmQocmVzLCByZXNwb25zZURhdGEsIDQwNSwgaGVhZGVycyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSkoKTtcblxuICByZXR1cm4gUm91dGU7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCJjbGFzcyBAUmVzdGl2dXNcblxuICBjb25zdHJ1Y3RvcjogKG9wdGlvbnMpIC0+XG4gICAgQF9yb3V0ZXMgPSBbXVxuICAgIEBfY29uZmlnID1cbiAgICAgIHBhdGhzOiBbXVxuICAgICAgdXNlRGVmYXVsdEF1dGg6IGZhbHNlXG4gICAgICBhcGlQYXRoOiAnYXBpLydcbiAgICAgIHZlcnNpb246IG51bGxcbiAgICAgIHByZXR0eUpzb246IGZhbHNlXG4gICAgICBhdXRoOlxuICAgICAgICB0b2tlbjogJ3NlcnZpY2VzLnJlc3VtZS5sb2dpblRva2Vucy5oYXNoZWRUb2tlbidcbiAgICAgICAgdXNlcjogLT5cbiAgICAgICAgICBpZiBAcmVxdWVzdC5oZWFkZXJzWyd4LWF1dGgtdG9rZW4nXVxuICAgICAgICAgICAgdG9rZW4gPSBBY2NvdW50cy5faGFzaExvZ2luVG9rZW4gQHJlcXVlc3QuaGVhZGVyc1sneC1hdXRoLXRva2VuJ11cbiAgICAgICAgICB1c2VySWQ6IEByZXF1ZXN0LmhlYWRlcnNbJ3gtdXNlci1pZCddXG4gICAgICAgICAgdG9rZW46IHRva2VuXG4gICAgICBkZWZhdWx0SGVhZGVyczpcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgZW5hYmxlQ29yczogdHJ1ZVxuXG4gICAgIyBDb25maWd1cmUgQVBJIHdpdGggdGhlIGdpdmVuIG9wdGlvbnNcbiAgICBfLmV4dGVuZCBAX2NvbmZpZywgb3B0aW9uc1xuXG4gICAgaWYgQF9jb25maWcuZW5hYmxlQ29yc1xuICAgICAgY29yc0hlYWRlcnMgPVxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJzogJ09yaWdpbiwgWC1SZXF1ZXN0ZWQtV2l0aCwgQ29udGVudC1UeXBlLCBBY2NlcHQnXG5cbiAgICAgIGlmIEBfY29uZmlnLnVzZURlZmF1bHRBdXRoXG4gICAgICAgIGNvcnNIZWFkZXJzWydBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJ10gKz0gJywgWC1Vc2VyLUlkLCBYLUF1dGgtVG9rZW4nXG5cbiAgICAgICMgU2V0IGRlZmF1bHQgaGVhZGVyIHRvIGVuYWJsZSBDT1JTIGlmIGNvbmZpZ3VyZWRcbiAgICAgIF8uZXh0ZW5kIEBfY29uZmlnLmRlZmF1bHRIZWFkZXJzLCBjb3JzSGVhZGVyc1xuXG4gICAgICBpZiBub3QgQF9jb25maWcuZGVmYXVsdE9wdGlvbnNFbmRwb2ludFxuICAgICAgICBAX2NvbmZpZy5kZWZhdWx0T3B0aW9uc0VuZHBvaW50ID0gLT5cbiAgICAgICAgICBAcmVzcG9uc2Uud3JpdGVIZWFkIDIwMCwgY29yc0hlYWRlcnNcbiAgICAgICAgICBAZG9uZSgpXG5cbiAgICAjIE5vcm1hbGl6ZSB0aGUgQVBJIHBhdGhcbiAgICBpZiBAX2NvbmZpZy5hcGlQYXRoWzBdIGlzICcvJ1xuICAgICAgQF9jb25maWcuYXBpUGF0aCA9IEBfY29uZmlnLmFwaVBhdGguc2xpY2UgMVxuICAgIGlmIF8ubGFzdChAX2NvbmZpZy5hcGlQYXRoKSBpc250ICcvJ1xuICAgICAgQF9jb25maWcuYXBpUGF0aCA9IEBfY29uZmlnLmFwaVBhdGggKyAnLydcblxuICAgICMgVVJMIHBhdGggdmVyc2lvbmluZyBpcyB0aGUgb25seSB0eXBlIG9mIEFQSSB2ZXJzaW9uaW5nIGN1cnJlbnRseSBhdmFpbGFibGUsIHNvIGlmIGEgdmVyc2lvbiBpc1xuICAgICMgcHJvdmlkZWQsIGFwcGVuZCBpdCB0byB0aGUgYmFzZSBwYXRoIG9mIHRoZSBBUElcbiAgICBpZiBAX2NvbmZpZy52ZXJzaW9uXG4gICAgICBAX2NvbmZpZy5hcGlQYXRoICs9IEBfY29uZmlnLnZlcnNpb24gKyAnLydcblxuICAgICMgQWRkIGRlZmF1bHQgbG9naW4gYW5kIGxvZ291dCBlbmRwb2ludHMgaWYgYXV0aCBpcyBjb25maWd1cmVkXG4gICAgaWYgQF9jb25maWcudXNlRGVmYXVsdEF1dGhcbiAgICAgIEBfaW5pdEF1dGgoKVxuICAgIGVsc2UgaWYgQF9jb25maWcudXNlQXV0aFxuICAgICAgQF9pbml0QXV0aCgpXG4gICAgICBjb25zb2xlLndhcm4gJ1dhcm5pbmc6IHVzZUF1dGggQVBJIGNvbmZpZyBvcHRpb24gd2lsbCBiZSByZW1vdmVkIGluIFJlc3RpdnVzIHYxLjAgJyArXG4gICAgICAgICAgJ1xcbiAgICBVc2UgdGhlIHVzZURlZmF1bHRBdXRoIG9wdGlvbiBpbnN0ZWFkJ1xuXG4gICAgcmV0dXJuIHRoaXNcblxuXG4gICMjIypcbiAgICBBZGQgZW5kcG9pbnRzIGZvciB0aGUgZ2l2ZW4gSFRUUCBtZXRob2RzIGF0IHRoZSBnaXZlbiBwYXRoXG5cbiAgICBAcGFyYW0gcGF0aCB7U3RyaW5nfSBUaGUgZXh0ZW5kZWQgVVJMIHBhdGggKHdpbGwgYmUgYXBwZW5kZWQgdG8gYmFzZSBwYXRoIG9mIHRoZSBBUEkpXG4gICAgQHBhcmFtIG9wdGlvbnMge09iamVjdH0gUm91dGUgY29uZmlndXJhdGlvbiBvcHRpb25zXG4gICAgQHBhcmFtIG9wdGlvbnMuYXV0aFJlcXVpcmVkIHtCb29sZWFufSBUaGUgZGVmYXVsdCBhdXRoIHJlcXVpcmVtZW50IGZvciBlYWNoIGVuZHBvaW50IG9uIHRoZSByb3V0ZVxuICAgIEBwYXJhbSBvcHRpb25zLnJvbGVSZXF1aXJlZCB7U3RyaW5nIG9yIFN0cmluZ1tdfSBUaGUgZGVmYXVsdCByb2xlIHJlcXVpcmVkIGZvciBlYWNoIGVuZHBvaW50IG9uIHRoZSByb3V0ZVxuICAgIEBwYXJhbSBlbmRwb2ludHMge09iamVjdH0gQSBzZXQgb2YgZW5kcG9pbnRzIGF2YWlsYWJsZSBvbiB0aGUgbmV3IHJvdXRlIChnZXQsIHBvc3QsIHB1dCwgcGF0Y2gsIGRlbGV0ZSwgb3B0aW9ucylcbiAgICBAcGFyYW0gZW5kcG9pbnRzLjxtZXRob2Q+IHtGdW5jdGlvbiBvciBPYmplY3R9IElmIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIGFsbCBkZWZhdWx0IHJvdXRlXG4gICAgICAgIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGVuZHBvaW50LiBPdGhlcndpc2UgYW4gb2JqZWN0IHdpdGggYW4gYGFjdGlvbmBcbiAgICAgICAgYW5kIGFsbCBvdGhlciByb3V0ZSBjb25maWcgb3B0aW9ucyBhdmFpbGFibGUuIEFuIGBhY3Rpb25gIG11c3QgYmUgcHJvdmlkZWQgd2l0aCB0aGUgb2JqZWN0LlxuICAjIyNcbiAgYWRkUm91dGU6IChwYXRoLCBvcHRpb25zLCBlbmRwb2ludHMpIC0+XG4gICAgIyBDcmVhdGUgYSBuZXcgcm91dGUgYW5kIGFkZCBpdCB0byBvdXIgbGlzdCBvZiBleGlzdGluZyByb3V0ZXNcbiAgICByb3V0ZSA9IG5ldyBzaGFyZS5Sb3V0ZSh0aGlzLCBwYXRoLCBvcHRpb25zLCBlbmRwb2ludHMpXG4gICAgQF9yb3V0ZXMucHVzaChyb3V0ZSlcblxuICAgIHJvdXRlLmFkZFRvQXBpKClcblxuICAgIHJldHVybiB0aGlzXG5cblxuICAjIyMqXG4gICAgR2VuZXJhdGUgcm91dGVzIGZvciB0aGUgTWV0ZW9yIENvbGxlY3Rpb24gd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuICAjIyNcbiAgYWRkQ29sbGVjdGlvbjogKGNvbGxlY3Rpb24sIG9wdGlvbnM9e30pIC0+XG4gICAgbWV0aG9kcyA9IFsnZ2V0JywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2RlbGV0ZScsICdnZXRBbGwnXVxuICAgIG1ldGhvZHNPbkNvbGxlY3Rpb24gPSBbJ3Bvc3QnLCAnZ2V0QWxsJ11cblxuICAgICMgR3JhYiB0aGUgc2V0IG9mIGVuZHBvaW50c1xuICAgIGlmIGNvbGxlY3Rpb24gaXMgTWV0ZW9yLnVzZXJzXG4gICAgICBjb2xsZWN0aW9uRW5kcG9pbnRzID0gQF91c2VyQ29sbGVjdGlvbkVuZHBvaW50c1xuICAgIGVsc2VcbiAgICAgIGNvbGxlY3Rpb25FbmRwb2ludHMgPSBAX2NvbGxlY3Rpb25FbmRwb2ludHNcblxuICAgICMgRmxhdHRlbiB0aGUgb3B0aW9ucyBhbmQgc2V0IGRlZmF1bHRzIGlmIG5lY2Vzc2FyeVxuICAgIGVuZHBvaW50c0F3YWl0aW5nQ29uZmlndXJhdGlvbiA9IG9wdGlvbnMuZW5kcG9pbnRzIG9yIHt9XG4gICAgcm91dGVPcHRpb25zID0gb3B0aW9ucy5yb3V0ZU9wdGlvbnMgb3Ige31cbiAgICBleGNsdWRlZEVuZHBvaW50cyA9IG9wdGlvbnMuZXhjbHVkZWRFbmRwb2ludHMgb3IgW11cbiAgICAjIFVzZSBjb2xsZWN0aW9uIG5hbWUgYXMgZGVmYXVsdCBwYXRoXG4gICAgcGF0aCA9IG9wdGlvbnMucGF0aCBvciBjb2xsZWN0aW9uLl9uYW1lXG5cbiAgICAjIFNlcGFyYXRlIHRoZSByZXF1ZXN0ZWQgZW5kcG9pbnRzIGJ5IHRoZSByb3V0ZSB0aGV5IGJlbG9uZyB0byAob25lIGZvciBvcGVyYXRpbmcgb24gdGhlIGVudGlyZVxuICAgICMgY29sbGVjdGlvbiBhbmQgb25lIGZvciBvcGVyYXRpbmcgb24gYSBzaW5nbGUgZW50aXR5IHdpdGhpbiB0aGUgY29sbGVjdGlvbilcbiAgICBjb2xsZWN0aW9uUm91dGVFbmRwb2ludHMgPSB7fVxuICAgIGVudGl0eVJvdXRlRW5kcG9pbnRzID0ge31cbiAgICBpZiBfLmlzRW1wdHkoZW5kcG9pbnRzQXdhaXRpbmdDb25maWd1cmF0aW9uKSBhbmQgXy5pc0VtcHR5KGV4Y2x1ZGVkRW5kcG9pbnRzKVxuICAgICAgIyBHZW5lcmF0ZSBhbGwgZW5kcG9pbnRzIG9uIHRoaXMgY29sbGVjdGlvblxuICAgICAgXy5lYWNoIG1ldGhvZHMsIChtZXRob2QpIC0+XG4gICAgICAgICMgUGFydGl0aW9uIHRoZSBlbmRwb2ludHMgaW50byB0aGVpciByZXNwZWN0aXZlIHJvdXRlc1xuICAgICAgICBpZiBtZXRob2QgaW4gbWV0aG9kc09uQ29sbGVjdGlvblxuICAgICAgICAgIF8uZXh0ZW5kIGNvbGxlY3Rpb25Sb3V0ZUVuZHBvaW50cywgY29sbGVjdGlvbkVuZHBvaW50c1ttZXRob2RdLmNhbGwodGhpcywgY29sbGVjdGlvbilcbiAgICAgICAgZWxzZSBfLmV4dGVuZCBlbnRpdHlSb3V0ZUVuZHBvaW50cywgY29sbGVjdGlvbkVuZHBvaW50c1ttZXRob2RdLmNhbGwodGhpcywgY29sbGVjdGlvbilcbiAgICAgICAgcmV0dXJuXG4gICAgICAsIHRoaXNcbiAgICBlbHNlXG4gICAgICAjIEdlbmVyYXRlIGFueSBlbmRwb2ludHMgdGhhdCBoYXZlbid0IGJlZW4gZXhwbGljaXRseSBleGNsdWRlZFxuICAgICAgXy5lYWNoIG1ldGhvZHMsIChtZXRob2QpIC0+XG4gICAgICAgIGlmIG1ldGhvZCBub3QgaW4gZXhjbHVkZWRFbmRwb2ludHMgYW5kIGVuZHBvaW50c0F3YWl0aW5nQ29uZmlndXJhdGlvblttZXRob2RdIGlzbnQgZmFsc2VcbiAgICAgICAgICAjIENvbmZpZ3VyZSBlbmRwb2ludCBhbmQgbWFwIHRvIGl0J3MgaHR0cCBtZXRob2RcbiAgICAgICAgICAjIFRPRE86IENvbnNpZGVyIHByZWRlZmluaW5nIGEgbWFwIG9mIG1ldGhvZHMgdG8gdGhlaXIgaHR0cCBtZXRob2QgdHlwZSAoZS5nLiwgZ2V0QWxsOiBnZXQpXG4gICAgICAgICAgZW5kcG9pbnRPcHRpb25zID0gZW5kcG9pbnRzQXdhaXRpbmdDb25maWd1cmF0aW9uW21ldGhvZF1cbiAgICAgICAgICBjb25maWd1cmVkRW5kcG9pbnQgPSB7fVxuICAgICAgICAgIF8uZWFjaCBjb2xsZWN0aW9uRW5kcG9pbnRzW21ldGhvZF0uY2FsbCh0aGlzLCBjb2xsZWN0aW9uKSwgKGFjdGlvbiwgbWV0aG9kVHlwZSkgLT5cbiAgICAgICAgICAgIGNvbmZpZ3VyZWRFbmRwb2ludFttZXRob2RUeXBlXSA9XG4gICAgICAgICAgICAgIF8uY2hhaW4gYWN0aW9uXG4gICAgICAgICAgICAgIC5jbG9uZSgpXG4gICAgICAgICAgICAgIC5leHRlbmQgZW5kcG9pbnRPcHRpb25zXG4gICAgICAgICAgICAgIC52YWx1ZSgpXG4gICAgICAgICAgIyBQYXJ0aXRpb24gdGhlIGVuZHBvaW50cyBpbnRvIHRoZWlyIHJlc3BlY3RpdmUgcm91dGVzXG4gICAgICAgICAgaWYgbWV0aG9kIGluIG1ldGhvZHNPbkNvbGxlY3Rpb25cbiAgICAgICAgICAgIF8uZXh0ZW5kIGNvbGxlY3Rpb25Sb3V0ZUVuZHBvaW50cywgY29uZmlndXJlZEVuZHBvaW50XG4gICAgICAgICAgZWxzZSBfLmV4dGVuZCBlbnRpdHlSb3V0ZUVuZHBvaW50cywgY29uZmlndXJlZEVuZHBvaW50XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAsIHRoaXNcblxuICAgICMgQWRkIHRoZSByb3V0ZXMgdG8gdGhlIEFQSVxuICAgIEBhZGRSb3V0ZSBwYXRoLCByb3V0ZU9wdGlvbnMsIGNvbGxlY3Rpb25Sb3V0ZUVuZHBvaW50c1xuICAgIEBhZGRSb3V0ZSBcIiN7cGF0aH0vOmlkXCIsIHJvdXRlT3B0aW9ucywgZW50aXR5Um91dGVFbmRwb2ludHNcblxuICAgIHJldHVybiB0aGlzXG5cblxuICAjIyMqXG4gICAgQSBzZXQgb2YgZW5kcG9pbnRzIHRoYXQgY2FuIGJlIGFwcGxpZWQgdG8gYSBDb2xsZWN0aW9uIFJvdXRlXG4gICMjI1xuICBfY29sbGVjdGlvbkVuZHBvaW50czpcbiAgICBnZXQ6IChjb2xsZWN0aW9uKSAtPlxuICAgICAgZ2V0OlxuICAgICAgICBhY3Rpb246IC0+XG4gICAgICAgICAgZW50aXR5ID0gY29sbGVjdGlvbi5maW5kT25lIEB1cmxQYXJhbXMuaWRcbiAgICAgICAgICBpZiBlbnRpdHlcbiAgICAgICAgICAgIHtzdGF0dXM6ICdzdWNjZXNzJywgZGF0YTogZW50aXR5fVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDQwNFxuICAgICAgICAgICAgYm9keToge3N0YXR1czogJ2ZhaWwnLCBtZXNzYWdlOiAnSXRlbSBub3QgZm91bmQnfVxuICAgIHB1dDogKGNvbGxlY3Rpb24pIC0+XG4gICAgICBwdXQ6XG4gICAgICAgIGFjdGlvbjogLT5cbiAgICAgICAgICBlbnRpdHlJc1VwZGF0ZWQgPSBjb2xsZWN0aW9uLnVwZGF0ZSBAdXJsUGFyYW1zLmlkLCBAYm9keVBhcmFtc1xuICAgICAgICAgIGlmIGVudGl0eUlzVXBkYXRlZFxuICAgICAgICAgICAgZW50aXR5ID0gY29sbGVjdGlvbi5maW5kT25lIEB1cmxQYXJhbXMuaWRcbiAgICAgICAgICAgIHtzdGF0dXM6ICdzdWNjZXNzJywgZGF0YTogZW50aXR5fVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDQwNFxuICAgICAgICAgICAgYm9keToge3N0YXR1czogJ2ZhaWwnLCBtZXNzYWdlOiAnSXRlbSBub3QgZm91bmQnfVxuICAgIHBhdGNoOiAoY29sbGVjdGlvbikgLT5cbiAgICAgIHBhdGNoOlxuICAgICAgICBhY3Rpb246IC0+XG4gICAgICAgICAgZW50aXR5SXNVcGRhdGVkID0gY29sbGVjdGlvbi51cGRhdGUgQHVybFBhcmFtcy5pZCwgJHNldDogQGJvZHlQYXJhbXNcbiAgICAgICAgICBpZiBlbnRpdHlJc1VwZGF0ZWRcbiAgICAgICAgICAgIGVudGl0eSA9IGNvbGxlY3Rpb24uZmluZE9uZSBAdXJsUGFyYW1zLmlkXG4gICAgICAgICAgICB7c3RhdHVzOiAnc3VjY2VzcycsIGRhdGE6IGVudGl0eX1cbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBzdGF0dXNDb2RlOiA0MDRcbiAgICAgICAgICAgIGJvZHk6IHtzdGF0dXM6ICdmYWlsJywgbWVzc2FnZTogJ0l0ZW0gbm90IGZvdW5kJ31cbiAgICBkZWxldGU6IChjb2xsZWN0aW9uKSAtPlxuICAgICAgZGVsZXRlOlxuICAgICAgICBhY3Rpb246IC0+XG4gICAgICAgICAgaWYgY29sbGVjdGlvbi5yZW1vdmUgQHVybFBhcmFtcy5pZFxuICAgICAgICAgICAge3N0YXR1czogJ3N1Y2Nlc3MnLCBkYXRhOiBtZXNzYWdlOiAnSXRlbSByZW1vdmVkJ31cbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBzdGF0dXNDb2RlOiA0MDRcbiAgICAgICAgICAgIGJvZHk6IHtzdGF0dXM6ICdmYWlsJywgbWVzc2FnZTogJ0l0ZW0gbm90IGZvdW5kJ31cbiAgICBwb3N0OiAoY29sbGVjdGlvbikgLT5cbiAgICAgIHBvc3Q6XG4gICAgICAgIGFjdGlvbjogLT5cbiAgICAgICAgICBlbnRpdHlJZCA9IGNvbGxlY3Rpb24uaW5zZXJ0IEBib2R5UGFyYW1zXG4gICAgICAgICAgZW50aXR5ID0gY29sbGVjdGlvbi5maW5kT25lIGVudGl0eUlkXG4gICAgICAgICAgaWYgZW50aXR5XG4gICAgICAgICAgICBzdGF0dXNDb2RlOiAyMDFcbiAgICAgICAgICAgIGJvZHk6IHtzdGF0dXM6ICdzdWNjZXNzJywgZGF0YTogZW50aXR5fVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDQwMFxuICAgICAgICAgICAgYm9keToge3N0YXR1czogJ2ZhaWwnLCBtZXNzYWdlOiAnTm8gaXRlbSBhZGRlZCd9XG4gICAgZ2V0QWxsOiAoY29sbGVjdGlvbikgLT5cbiAgICAgIGdldDpcbiAgICAgICAgYWN0aW9uOiAtPlxuICAgICAgICAgIGVudGl0aWVzID0gY29sbGVjdGlvbi5maW5kKCkuZmV0Y2goKVxuICAgICAgICAgIGlmIGVudGl0aWVzXG4gICAgICAgICAgICB7c3RhdHVzOiAnc3VjY2VzcycsIGRhdGE6IGVudGl0aWVzfVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDQwNFxuICAgICAgICAgICAgYm9keToge3N0YXR1czogJ2ZhaWwnLCBtZXNzYWdlOiAnVW5hYmxlIHRvIHJldHJpZXZlIGl0ZW1zIGZyb20gY29sbGVjdGlvbid9XG5cblxuICAjIyMqXG4gICAgQSBzZXQgb2YgZW5kcG9pbnRzIHRoYXQgY2FuIGJlIGFwcGxpZWQgdG8gYSBNZXRlb3IudXNlcnMgQ29sbGVjdGlvbiBSb3V0ZVxuICAjIyNcbiAgX3VzZXJDb2xsZWN0aW9uRW5kcG9pbnRzOlxuICAgIGdldDogKGNvbGxlY3Rpb24pIC0+XG4gICAgICBnZXQ6XG4gICAgICAgIGFjdGlvbjogLT5cbiAgICAgICAgICBlbnRpdHkgPSBjb2xsZWN0aW9uLmZpbmRPbmUgQHVybFBhcmFtcy5pZCwgZmllbGRzOiBwcm9maWxlOiAxXG4gICAgICAgICAgaWYgZW50aXR5XG4gICAgICAgICAgICB7c3RhdHVzOiAnc3VjY2VzcycsIGRhdGE6IGVudGl0eX1cbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBzdGF0dXNDb2RlOiA0MDRcbiAgICAgICAgICAgIGJvZHk6IHtzdGF0dXM6ICdmYWlsJywgbWVzc2FnZTogJ1VzZXIgbm90IGZvdW5kJ31cbiAgICBwdXQ6IChjb2xsZWN0aW9uKSAtPlxuICAgICAgcHV0OlxuICAgICAgICBhY3Rpb246IC0+XG4gICAgICAgICAgZW50aXR5SXNVcGRhdGVkID0gY29sbGVjdGlvbi51cGRhdGUgQHVybFBhcmFtcy5pZCwgJHNldDogcHJvZmlsZTogQGJvZHlQYXJhbXNcbiAgICAgICAgICBpZiBlbnRpdHlJc1VwZGF0ZWRcbiAgICAgICAgICAgIGVudGl0eSA9IGNvbGxlY3Rpb24uZmluZE9uZSBAdXJsUGFyYW1zLmlkLCBmaWVsZHM6IHByb2ZpbGU6IDFcbiAgICAgICAgICAgIHtzdGF0dXM6IFwic3VjY2Vzc1wiLCBkYXRhOiBlbnRpdHl9XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgc3RhdHVzQ29kZTogNDA0XG4gICAgICAgICAgICBib2R5OiB7c3RhdHVzOiAnZmFpbCcsIG1lc3NhZ2U6ICdVc2VyIG5vdCBmb3VuZCd9XG4gICAgZGVsZXRlOiAoY29sbGVjdGlvbikgLT5cbiAgICAgIGRlbGV0ZTpcbiAgICAgICAgYWN0aW9uOiAtPlxuICAgICAgICAgIGlmIGNvbGxlY3Rpb24ucmVtb3ZlIEB1cmxQYXJhbXMuaWRcbiAgICAgICAgICAgIHtzdGF0dXM6ICdzdWNjZXNzJywgZGF0YTogbWVzc2FnZTogJ1VzZXIgcmVtb3ZlZCd9XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgc3RhdHVzQ29kZTogNDA0XG4gICAgICAgICAgICBib2R5OiB7c3RhdHVzOiAnZmFpbCcsIG1lc3NhZ2U6ICdVc2VyIG5vdCBmb3VuZCd9XG4gICAgcG9zdDogKGNvbGxlY3Rpb24pIC0+XG4gICAgICBwb3N0OlxuICAgICAgICBhY3Rpb246IC0+XG4gICAgICAgICAgIyBDcmVhdGUgYSBuZXcgdXNlciBhY2NvdW50XG4gICAgICAgICAgZW50aXR5SWQgPSBBY2NvdW50cy5jcmVhdGVVc2VyIEBib2R5UGFyYW1zXG4gICAgICAgICAgZW50aXR5ID0gY29sbGVjdGlvbi5maW5kT25lIGVudGl0eUlkLCBmaWVsZHM6IHByb2ZpbGU6IDFcbiAgICAgICAgICBpZiBlbnRpdHlcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMVxuICAgICAgICAgICAgYm9keToge3N0YXR1czogJ3N1Y2Nlc3MnLCBkYXRhOiBlbnRpdHl9XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgc3RhdHVzQ29kZTogNDAwXG4gICAgICAgICAgICB7c3RhdHVzOiAnZmFpbCcsIG1lc3NhZ2U6ICdObyB1c2VyIGFkZGVkJ31cbiAgICBnZXRBbGw6IChjb2xsZWN0aW9uKSAtPlxuICAgICAgZ2V0OlxuICAgICAgICBhY3Rpb246IC0+XG4gICAgICAgICAgZW50aXRpZXMgPSBjb2xsZWN0aW9uLmZpbmQoe30sIGZpZWxkczogcHJvZmlsZTogMSkuZmV0Y2goKVxuICAgICAgICAgIGlmIGVudGl0aWVzXG4gICAgICAgICAgICB7c3RhdHVzOiAnc3VjY2VzcycsIGRhdGE6IGVudGl0aWVzfVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDQwNFxuICAgICAgICAgICAgYm9keToge3N0YXR1czogJ2ZhaWwnLCBtZXNzYWdlOiAnVW5hYmxlIHRvIHJldHJpZXZlIHVzZXJzJ31cblxuXG4gICMjI1xuICAgIEFkZCAvbG9naW4gYW5kIC9sb2dvdXQgZW5kcG9pbnRzIHRvIHRoZSBBUElcbiAgIyMjXG4gIF9pbml0QXV0aDogLT5cbiAgICBzZWxmID0gdGhpc1xuICAgICMjI1xuICAgICAgQWRkIGEgbG9naW4gZW5kcG9pbnQgdG8gdGhlIEFQSVxuXG4gICAgICBBZnRlciB0aGUgdXNlciBpcyBsb2dnZWQgaW4sIHRoZSBvbkxvZ2dlZEluIGhvb2sgaXMgY2FsbGVkIChzZWUgUmVzdGZ1bGx5LmNvbmZpZ3VyZSgpIGZvclxuICAgICAgYWRkaW5nIGhvb2spLlxuICAgICMjI1xuICAgIEBhZGRSb3V0ZSAnbG9naW4nLCB7YXV0aFJlcXVpcmVkOiBmYWxzZX0sXG4gICAgICBwb3N0OiAtPlxuICAgICAgICAjIEdyYWIgdGhlIHVzZXJuYW1lIG9yIGVtYWlsIHRoYXQgdGhlIHVzZXIgaXMgbG9nZ2luZyBpbiB3aXRoXG4gICAgICAgIHVzZXIgPSB7fVxuICAgICAgICBpZiBAYm9keVBhcmFtcy51c2VyXG4gICAgICAgICAgaWYgQGJvZHlQYXJhbXMudXNlci5pbmRleE9mKCdAJykgaXMgLTFcbiAgICAgICAgICAgIHVzZXIudXNlcm5hbWUgPSBAYm9keVBhcmFtcy51c2VyXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgdXNlci5lbWFpbCA9IEBib2R5UGFyYW1zLnVzZXJcbiAgICAgICAgZWxzZSBpZiBAYm9keVBhcmFtcy51c2VybmFtZVxuICAgICAgICAgIHVzZXIudXNlcm5hbWUgPSBAYm9keVBhcmFtcy51c2VybmFtZVxuICAgICAgICBlbHNlIGlmIEBib2R5UGFyYW1zLmVtYWlsXG4gICAgICAgICAgdXNlci5lbWFpbCA9IEBib2R5UGFyYW1zLmVtYWlsXG5cbiAgICAgICAgcGFzc3dvcmQgPSBAYm9keVBhcmFtcy5wYXNzd29yZFxuICAgICAgICBpZiBAYm9keVBhcmFtcy5oYXNoZWRcbiAgICAgICAgICBwYXNzd29yZCA9XG4gICAgICAgICAgICBkaWdlc3Q6IHBhc3N3b3JkXG4gICAgICAgICAgICBhbGdvcml0aG06ICdzaGEtMjU2J1xuXG4gICAgICAgICMgVHJ5IHRvIGxvZyB0aGUgdXNlciBpbnRvIHRoZSB1c2VyJ3MgYWNjb3VudCAoaWYgc3VjY2Vzc2Z1bCB3ZSdsbCBnZXQgYW4gYXV0aCB0b2tlbiBiYWNrKVxuICAgICAgICB0cnlcbiAgICAgICAgICBhdXRoID0gQXV0aC5sb2dpbldpdGhQYXNzd29yZCB1c2VyLCBwYXNzd29yZFxuICAgICAgICBjYXRjaCBlXG4gICAgICAgICAgcmV0dXJuIHt9ID1cbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IGUuZXJyb3JcbiAgICAgICAgICAgIGJvZHk6IHN0YXR1czogJ2Vycm9yJywgbWVzc2FnZTogZS5yZWFzb25cblxuICAgICAgICAjIEdldCB0aGUgYXV0aGVudGljYXRlZCB1c2VyXG4gICAgICAgICMgVE9ETzogQ29uc2lkZXIgcmV0dXJuaW5nIHRoZSB1c2VyIGluIEF1dGgubG9naW5XaXRoUGFzc3dvcmQoKSwgaW5zdGVhZCBvZiBmZXRjaGluZyBpdCBhZ2FpbiBoZXJlXG4gICAgICAgIGlmIGF1dGgudXNlcklkIGFuZCBhdXRoLmF1dGhUb2tlblxuICAgICAgICAgIHNlYXJjaFF1ZXJ5ID0ge31cbiAgICAgICAgICBzZWFyY2hRdWVyeVtzZWxmLl9jb25maWcuYXV0aC50b2tlbl0gPSBBY2NvdW50cy5faGFzaExvZ2luVG9rZW4gYXV0aC5hdXRoVG9rZW5cbiAgICAgICAgICBAdXNlciA9IE1ldGVvci51c2Vycy5maW5kT25lXG4gICAgICAgICAgICAnX2lkJzogYXV0aC51c2VySWRcbiAgICAgICAgICAgIHNlYXJjaFF1ZXJ5XG4gICAgICAgICAgQHVzZXJJZCA9IEB1c2VyPy5faWRcblxuICAgICAgICByZXNwb25zZSA9IHtzdGF0dXM6ICdzdWNjZXNzJywgZGF0YTogYXV0aH1cblxuICAgICAgICAjIENhbGwgdGhlIGxvZ2luIGhvb2sgd2l0aCB0aGUgYXV0aGVudGljYXRlZCB1c2VyIGF0dGFjaGVkXG4gICAgICAgIGV4dHJhRGF0YSA9IHNlbGYuX2NvbmZpZy5vbkxvZ2dlZEluPy5jYWxsKHRoaXMpXG4gICAgICAgIGlmIGV4dHJhRGF0YT9cbiAgICAgICAgICBfLmV4dGVuZChyZXNwb25zZS5kYXRhLCB7ZXh0cmE6IGV4dHJhRGF0YX0pXG5cbiAgICAgICAgcmVzcG9uc2VcblxuICAgIGxvZ291dCA9IC0+XG4gICAgICAjIFJlbW92ZSB0aGUgZ2l2ZW4gYXV0aCB0b2tlbiBmcm9tIHRoZSB1c2VyJ3MgYWNjb3VudFxuICAgICAgYXV0aFRva2VuID0gQHJlcXVlc3QuaGVhZGVyc1sneC1hdXRoLXRva2VuJ11cbiAgICAgIGhhc2hlZFRva2VuID0gQWNjb3VudHMuX2hhc2hMb2dpblRva2VuIGF1dGhUb2tlblxuICAgICAgdG9rZW5Mb2NhdGlvbiA9IHNlbGYuX2NvbmZpZy5hdXRoLnRva2VuXG4gICAgICBpbmRleCA9IHRva2VuTG9jYXRpb24ubGFzdEluZGV4T2YgJy4nXG4gICAgICB0b2tlblBhdGggPSB0b2tlbkxvY2F0aW9uLnN1YnN0cmluZyAwLCBpbmRleFxuICAgICAgdG9rZW5GaWVsZE5hbWUgPSB0b2tlbkxvY2F0aW9uLnN1YnN0cmluZyBpbmRleCArIDFcbiAgICAgIHRva2VuVG9SZW1vdmUgPSB7fVxuICAgICAgdG9rZW5Ub1JlbW92ZVt0b2tlbkZpZWxkTmFtZV0gPSBoYXNoZWRUb2tlblxuICAgICAgdG9rZW5SZW1vdmFsUXVlcnkgPSB7fVxuICAgICAgdG9rZW5SZW1vdmFsUXVlcnlbdG9rZW5QYXRoXSA9IHRva2VuVG9SZW1vdmVcbiAgICAgIE1ldGVvci51c2Vycy51cGRhdGUgQHVzZXIuX2lkLCB7JHB1bGw6IHRva2VuUmVtb3ZhbFF1ZXJ5fVxuXG4gICAgICByZXNwb25zZSA9IHtzdGF0dXM6ICdzdWNjZXNzJywgZGF0YToge21lc3NhZ2U6ICdZb3VcXCd2ZSBiZWVuIGxvZ2dlZCBvdXQhJ319XG5cbiAgICAgICMgQ2FsbCB0aGUgbG9nb3V0IGhvb2sgd2l0aCB0aGUgYXV0aGVudGljYXRlZCB1c2VyIGF0dGFjaGVkXG4gICAgICBleHRyYURhdGEgPSBzZWxmLl9jb25maWcub25Mb2dnZWRPdXQ/LmNhbGwodGhpcylcbiAgICAgIGlmIGV4dHJhRGF0YT9cbiAgICAgICAgXy5leHRlbmQocmVzcG9uc2UuZGF0YSwge2V4dHJhOiBleHRyYURhdGF9KVxuXG4gICAgICByZXNwb25zZVxuXG4gICAgIyMjXG4gICAgICBBZGQgYSBsb2dvdXQgZW5kcG9pbnQgdG8gdGhlIEFQSVxuXG4gICAgICBBZnRlciB0aGUgdXNlciBpcyBsb2dnZWQgb3V0LCB0aGUgb25Mb2dnZWRPdXQgaG9vayBpcyBjYWxsZWQgKHNlZSBSZXN0ZnVsbHkuY29uZmlndXJlKCkgZm9yXG4gICAgICBhZGRpbmcgaG9vaykuXG4gICAgIyMjXG4gICAgQGFkZFJvdXRlICdsb2dvdXQnLCB7YXV0aFJlcXVpcmVkOiB0cnVlfSxcbiAgICAgIGdldDogLT5cbiAgICAgICAgY29uc29sZS53YXJuIFwiV2FybmluZzogRGVmYXVsdCBsb2dvdXQgdmlhIEdFVCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVzdGl2dXMgdjEuMC4gVXNlIFBPU1QgaW5zdGVhZC5cIlxuICAgICAgICBjb25zb2xlLndhcm4gXCIgICAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9rYWhtYWxpL21ldGVvci1yZXN0aXZ1cy9pc3N1ZXMvMTAwXCJcbiAgICAgICAgcmV0dXJuIGxvZ291dC5jYWxsKHRoaXMpXG4gICAgICBwb3N0OiBsb2dvdXRcblxuUmVzdGl2dXMgPSBAUmVzdGl2dXNcbiIsInZhciAgICAgICAgICBcbiAgaW5kZXhPZiA9IFtdLmluZGV4T2Y7XG5cbnRoaXMuUmVzdGl2dXMgPSAoZnVuY3Rpb24oKSB7XG4gIGNsYXNzIFJlc3RpdnVzIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICB2YXIgY29yc0hlYWRlcnM7XG4gICAgICB0aGlzLl9yb3V0ZXMgPSBbXTtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgICAgcGF0aHM6IFtdLFxuICAgICAgICB1c2VEZWZhdWx0QXV0aDogZmFsc2UsXG4gICAgICAgIGFwaVBhdGg6ICdhcGkvJyxcbiAgICAgICAgdmVyc2lvbjogbnVsbCxcbiAgICAgICAgcHJldHR5SnNvbjogZmFsc2UsXG4gICAgICAgIGF1dGg6IHtcbiAgICAgICAgICB0b2tlbjogJ3NlcnZpY2VzLnJlc3VtZS5sb2dpblRva2Vucy5oYXNoZWRUb2tlbicsXG4gICAgICAgICAgdXNlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgICAgICBpZiAodGhpcy5yZXF1ZXN0LmhlYWRlcnNbJ3gtYXV0aC10b2tlbiddKSB7XG4gICAgICAgICAgICAgIHRva2VuID0gQWNjb3VudHMuX2hhc2hMb2dpblRva2VuKHRoaXMucmVxdWVzdC5oZWFkZXJzWyd4LWF1dGgtdG9rZW4nXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB1c2VySWQ6IHRoaXMucmVxdWVzdC5oZWFkZXJzWyd4LXVzZXItaWQnXSxcbiAgICAgICAgICAgICAgdG9rZW46IHRva2VuXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdEhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGVuYWJsZUNvcnM6IHRydWVcbiAgICAgIH07XG4gICAgICAvLyBDb25maWd1cmUgQVBJIHdpdGggdGhlIGdpdmVuIG9wdGlvbnNcbiAgICAgIF8uZXh0ZW5kKHRoaXMuX2NvbmZpZywgb3B0aW9ucyk7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmVuYWJsZUNvcnMpIHtcbiAgICAgICAgY29yc0hlYWRlcnMgPSB7XG4gICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6ICdPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0J1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLnVzZURlZmF1bHRBdXRoKSB7XG4gICAgICAgICAgY29yc0hlYWRlcnNbJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnXSArPSAnLCBYLVVzZXItSWQsIFgtQXV0aC1Ub2tlbic7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IGRlZmF1bHQgaGVhZGVyIHRvIGVuYWJsZSBDT1JTIGlmIGNvbmZpZ3VyZWRcbiAgICAgICAgXy5leHRlbmQodGhpcy5fY29uZmlnLmRlZmF1bHRIZWFkZXJzLCBjb3JzSGVhZGVycyk7XG4gICAgICAgIGlmICghdGhpcy5fY29uZmlnLmRlZmF1bHRPcHRpb25zRW5kcG9pbnQpIHtcbiAgICAgICAgICB0aGlzLl9jb25maWcuZGVmYXVsdE9wdGlvbnNFbmRwb2ludCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5yZXNwb25zZS53cml0ZUhlYWQoMjAwLCBjb3JzSGVhZGVycyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kb25lKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gTm9ybWFsaXplIHRoZSBBUEkgcGF0aFxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5hcGlQYXRoWzBdID09PSAnLycpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnLmFwaVBhdGggPSB0aGlzLl9jb25maWcuYXBpUGF0aC5zbGljZSgxKTtcbiAgICAgIH1cbiAgICAgIGlmIChfLmxhc3QodGhpcy5fY29uZmlnLmFwaVBhdGgpICE9PSAnLycpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnLmFwaVBhdGggPSB0aGlzLl9jb25maWcuYXBpUGF0aCArICcvJztcbiAgICAgIH1cbiAgICAgIC8vIFVSTCBwYXRoIHZlcnNpb25pbmcgaXMgdGhlIG9ubHkgdHlwZSBvZiBBUEkgdmVyc2lvbmluZyBjdXJyZW50bHkgYXZhaWxhYmxlLCBzbyBpZiBhIHZlcnNpb24gaXNcbiAgICAgIC8vIHByb3ZpZGVkLCBhcHBlbmQgaXQgdG8gdGhlIGJhc2UgcGF0aCBvZiB0aGUgQVBJXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnZlcnNpb24pIHtcbiAgICAgICAgdGhpcy5fY29uZmlnLmFwaVBhdGggKz0gdGhpcy5fY29uZmlnLnZlcnNpb24gKyAnLyc7XG4gICAgICB9XG4gICAgICAvLyBBZGQgZGVmYXVsdCBsb2dpbiBhbmQgbG9nb3V0IGVuZHBvaW50cyBpZiBhdXRoIGlzIGNvbmZpZ3VyZWRcbiAgICAgIGlmICh0aGlzLl9jb25maWcudXNlRGVmYXVsdEF1dGgpIHtcbiAgICAgICAgdGhpcy5faW5pdEF1dGgoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fY29uZmlnLnVzZUF1dGgpIHtcbiAgICAgICAgdGhpcy5faW5pdEF1dGgoKTtcbiAgICAgICAgY29uc29sZS53YXJuKCdXYXJuaW5nOiB1c2VBdXRoIEFQSSBjb25maWcgb3B0aW9uIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZXN0aXZ1cyB2MS4wICcgKyAnXFxuICAgIFVzZSB0aGUgdXNlRGVmYXVsdEF1dGggb3B0aW9uIGluc3RlYWQnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgIEFkZCBlbmRwb2ludHMgZm9yIHRoZSBnaXZlbiBIVFRQIG1ldGhvZHMgYXQgdGhlIGdpdmVuIHBhdGhcblxuICAgIEBwYXJhbSBwYXRoIHtTdHJpbmd9IFRoZSBleHRlbmRlZCBVUkwgcGF0aCAod2lsbCBiZSBhcHBlbmRlZCB0byBiYXNlIHBhdGggb2YgdGhlIEFQSSlcbiAgICBAcGFyYW0gb3B0aW9ucyB7T2JqZWN0fSBSb3V0ZSBjb25maWd1cmF0aW9uIG9wdGlvbnNcbiAgICBAcGFyYW0gb3B0aW9ucy5hdXRoUmVxdWlyZWQge0Jvb2xlYW59IFRoZSBkZWZhdWx0IGF1dGggcmVxdWlyZW1lbnQgZm9yIGVhY2ggZW5kcG9pbnQgb24gdGhlIHJvdXRlXG4gICAgQHBhcmFtIG9wdGlvbnMucm9sZVJlcXVpcmVkIHtTdHJpbmcgb3IgU3RyaW5nW119IFRoZSBkZWZhdWx0IHJvbGUgcmVxdWlyZWQgZm9yIGVhY2ggZW5kcG9pbnQgb24gdGhlIHJvdXRlXG4gICAgQHBhcmFtIGVuZHBvaW50cyB7T2JqZWN0fSBBIHNldCBvZiBlbmRwb2ludHMgYXZhaWxhYmxlIG9uIHRoZSBuZXcgcm91dGUgKGdldCwgcG9zdCwgcHV0LCBwYXRjaCwgZGVsZXRlLCBvcHRpb25zKVxuICAgIEBwYXJhbSBlbmRwb2ludHMuPG1ldGhvZD4ge0Z1bmN0aW9uIG9yIE9iamVjdH0gSWYgYSBmdW5jdGlvbiBpcyBwcm92aWRlZCwgYWxsIGRlZmF1bHQgcm91dGVcbiAgICAgIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGVuZHBvaW50LiBPdGhlcndpc2UgYW4gb2JqZWN0IHdpdGggYW4gYGFjdGlvbmBcbiAgICAgIGFuZCBhbGwgb3RoZXIgcm91dGUgY29uZmlnIG9wdGlvbnMgYXZhaWxhYmxlLiBBbiBgYWN0aW9uYCBtdXN0IGJlIHByb3ZpZGVkIHdpdGggdGhlIG9iamVjdC5cbiAgICAqL1xuICAgIGFkZFJvdXRlKHBhdGgsIG9wdGlvbnMsIGVuZHBvaW50cykge1xuICAgICAgdmFyIHJvdXRlO1xuICAgICAgLy8gQ3JlYXRlIGEgbmV3IHJvdXRlIGFuZCBhZGQgaXQgdG8gb3VyIGxpc3Qgb2YgZXhpc3Rpbmcgcm91dGVzXG4gICAgICByb3V0ZSA9IG5ldyBzaGFyZS5Sb3V0ZSh0aGlzLCBwYXRoLCBvcHRpb25zLCBlbmRwb2ludHMpO1xuICAgICAgdGhpcy5fcm91dGVzLnB1c2gocm91dGUpO1xuICAgICAgcm91dGUuYWRkVG9BcGkoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgIEdlbmVyYXRlIHJvdXRlcyBmb3IgdGhlIE1ldGVvciBDb2xsZWN0aW9uIHdpdGggdGhlIGdpdmVuIG5hbWVcbiAgICAqL1xuICAgIGFkZENvbGxlY3Rpb24oY29sbGVjdGlvbiwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICB2YXIgY29sbGVjdGlvbkVuZHBvaW50cywgY29sbGVjdGlvblJvdXRlRW5kcG9pbnRzLCBlbmRwb2ludHNBd2FpdGluZ0NvbmZpZ3VyYXRpb24sIGVudGl0eVJvdXRlRW5kcG9pbnRzLCBleGNsdWRlZEVuZHBvaW50cywgbWV0aG9kcywgbWV0aG9kc09uQ29sbGVjdGlvbiwgcGF0aCwgcm91dGVPcHRpb25zO1xuICAgICAgbWV0aG9kcyA9IFsnZ2V0JywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2RlbGV0ZScsICdnZXRBbGwnXTtcbiAgICAgIG1ldGhvZHNPbkNvbGxlY3Rpb24gPSBbJ3Bvc3QnLCAnZ2V0QWxsJ107XG4gICAgICAvLyBHcmFiIHRoZSBzZXQgb2YgZW5kcG9pbnRzXG4gICAgICBpZiAoY29sbGVjdGlvbiA9PT0gTWV0ZW9yLnVzZXJzKSB7XG4gICAgICAgIGNvbGxlY3Rpb25FbmRwb2ludHMgPSB0aGlzLl91c2VyQ29sbGVjdGlvbkVuZHBvaW50cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxlY3Rpb25FbmRwb2ludHMgPSB0aGlzLl9jb2xsZWN0aW9uRW5kcG9pbnRzO1xuICAgICAgfVxuICAgICAgLy8gRmxhdHRlbiB0aGUgb3B0aW9ucyBhbmQgc2V0IGRlZmF1bHRzIGlmIG5lY2Vzc2FyeVxuICAgICAgZW5kcG9pbnRzQXdhaXRpbmdDb25maWd1cmF0aW9uID0gb3B0aW9ucy5lbmRwb2ludHMgfHwge307XG4gICAgICByb3V0ZU9wdGlvbnMgPSBvcHRpb25zLnJvdXRlT3B0aW9ucyB8fCB7fTtcbiAgICAgIGV4Y2x1ZGVkRW5kcG9pbnRzID0gb3B0aW9ucy5leGNsdWRlZEVuZHBvaW50cyB8fCBbXTtcbiAgICAgIC8vIFVzZSBjb2xsZWN0aW9uIG5hbWUgYXMgZGVmYXVsdCBwYXRoXG4gICAgICBwYXRoID0gb3B0aW9ucy5wYXRoIHx8IGNvbGxlY3Rpb24uX25hbWU7XG4gICAgICAvLyBTZXBhcmF0ZSB0aGUgcmVxdWVzdGVkIGVuZHBvaW50cyBieSB0aGUgcm91dGUgdGhleSBiZWxvbmcgdG8gKG9uZSBmb3Igb3BlcmF0aW5nIG9uIHRoZSBlbnRpcmVcbiAgICAgIC8vIGNvbGxlY3Rpb24gYW5kIG9uZSBmb3Igb3BlcmF0aW5nIG9uIGEgc2luZ2xlIGVudGl0eSB3aXRoaW4gdGhlIGNvbGxlY3Rpb24pXG4gICAgICBjb2xsZWN0aW9uUm91dGVFbmRwb2ludHMgPSB7fTtcbiAgICAgIGVudGl0eVJvdXRlRW5kcG9pbnRzID0ge307XG4gICAgICBpZiAoXy5pc0VtcHR5KGVuZHBvaW50c0F3YWl0aW5nQ29uZmlndXJhdGlvbikgJiYgXy5pc0VtcHR5KGV4Y2x1ZGVkRW5kcG9pbnRzKSkge1xuICAgICAgICAvLyBHZW5lcmF0ZSBhbGwgZW5kcG9pbnRzIG9uIHRoaXMgY29sbGVjdGlvblxuICAgICAgICBfLmVhY2gobWV0aG9kcywgZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICAgICAgLy8gUGFydGl0aW9uIHRoZSBlbmRwb2ludHMgaW50byB0aGVpciByZXNwZWN0aXZlIHJvdXRlc1xuICAgICAgICAgIGlmIChpbmRleE9mLmNhbGwobWV0aG9kc09uQ29sbGVjdGlvbiwgbWV0aG9kKSA+PSAwKSB7XG4gICAgICAgICAgICBfLmV4dGVuZChjb2xsZWN0aW9uUm91dGVFbmRwb2ludHMsIGNvbGxlY3Rpb25FbmRwb2ludHNbbWV0aG9kXS5jYWxsKHRoaXMsIGNvbGxlY3Rpb24pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5leHRlbmQoZW50aXR5Um91dGVFbmRwb2ludHMsIGNvbGxlY3Rpb25FbmRwb2ludHNbbWV0aG9kXS5jYWxsKHRoaXMsIGNvbGxlY3Rpb24pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gR2VuZXJhdGUgYW55IGVuZHBvaW50cyB0aGF0IGhhdmVuJ3QgYmVlbiBleHBsaWNpdGx5IGV4Y2x1ZGVkXG4gICAgICAgIF8uZWFjaChtZXRob2RzLCBmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICB2YXIgY29uZmlndXJlZEVuZHBvaW50LCBlbmRwb2ludE9wdGlvbnM7XG4gICAgICAgICAgaWYgKGluZGV4T2YuY2FsbChleGNsdWRlZEVuZHBvaW50cywgbWV0aG9kKSA8IDAgJiYgZW5kcG9pbnRzQXdhaXRpbmdDb25maWd1cmF0aW9uW21ldGhvZF0gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAvLyBDb25maWd1cmUgZW5kcG9pbnQgYW5kIG1hcCB0byBpdCdzIGh0dHAgbWV0aG9kXG4gICAgICAgICAgICAvLyBUT0RPOiBDb25zaWRlciBwcmVkZWZpbmluZyBhIG1hcCBvZiBtZXRob2RzIHRvIHRoZWlyIGh0dHAgbWV0aG9kIHR5cGUgKGUuZy4sIGdldEFsbDogZ2V0KVxuICAgICAgICAgICAgZW5kcG9pbnRPcHRpb25zID0gZW5kcG9pbnRzQXdhaXRpbmdDb25maWd1cmF0aW9uW21ldGhvZF07XG4gICAgICAgICAgICBjb25maWd1cmVkRW5kcG9pbnQgPSB7fTtcbiAgICAgICAgICAgIF8uZWFjaChjb2xsZWN0aW9uRW5kcG9pbnRzW21ldGhvZF0uY2FsbCh0aGlzLCBjb2xsZWN0aW9uKSwgZnVuY3Rpb24oYWN0aW9uLCBtZXRob2RUeXBlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjb25maWd1cmVkRW5kcG9pbnRbbWV0aG9kVHlwZV0gPSBfLmNoYWluKGFjdGlvbikuY2xvbmUoKS5leHRlbmQoZW5kcG9pbnRPcHRpb25zKS52YWx1ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBQYXJ0aXRpb24gdGhlIGVuZHBvaW50cyBpbnRvIHRoZWlyIHJlc3BlY3RpdmUgcm91dGVzXG4gICAgICAgICAgICBpZiAoaW5kZXhPZi5jYWxsKG1ldGhvZHNPbkNvbGxlY3Rpb24sIG1ldGhvZCkgPj0gMCkge1xuICAgICAgICAgICAgICBfLmV4dGVuZChjb2xsZWN0aW9uUm91dGVFbmRwb2ludHMsIGNvbmZpZ3VyZWRFbmRwb2ludCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfLmV4dGVuZChlbnRpdHlSb3V0ZUVuZHBvaW50cywgY29uZmlndXJlZEVuZHBvaW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgfVxuICAgICAgLy8gQWRkIHRoZSByb3V0ZXMgdG8gdGhlIEFQSVxuICAgICAgdGhpcy5hZGRSb3V0ZShwYXRoLCByb3V0ZU9wdGlvbnMsIGNvbGxlY3Rpb25Sb3V0ZUVuZHBvaW50cyk7XG4gICAgICB0aGlzLmFkZFJvdXRlKGAke3BhdGh9LzppZGAsIHJvdXRlT3B0aW9ucywgZW50aXR5Um91dGVFbmRwb2ludHMpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgIEFkZCAvbG9naW4gYW5kIC9sb2dvdXQgZW5kcG9pbnRzIHRvIHRoZSBBUElcbiAgICAqL1xuICAgIF9pbml0QXV0aCgpIHtcbiAgICAgIHZhciBsb2dvdXQsIHNlbGY7XG4gICAgICBzZWxmID0gdGhpcztcbiAgICAgIC8qXG4gICAgICAgIEFkZCBhIGxvZ2luIGVuZHBvaW50IHRvIHRoZSBBUElcblxuICAgICAgICBBZnRlciB0aGUgdXNlciBpcyBsb2dnZWQgaW4sIHRoZSBvbkxvZ2dlZEluIGhvb2sgaXMgY2FsbGVkIChzZWUgUmVzdGZ1bGx5LmNvbmZpZ3VyZSgpIGZvclxuICAgICAgICBhZGRpbmcgaG9vaykuXG4gICAgICAqL1xuICAgICAgdGhpcy5hZGRSb3V0ZSgnbG9naW4nLCB7XG4gICAgICAgIGF1dGhSZXF1aXJlZDogZmFsc2VcbiAgICAgIH0sIHtcbiAgICAgICAgcG9zdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGF1dGgsIGUsIGV4dHJhRGF0YSwgcGFzc3dvcmQsIHJlZiwgcmVmMSwgcmVzcG9uc2UsIHNlYXJjaFF1ZXJ5LCB1c2VyO1xuICAgICAgICAgIC8vIEdyYWIgdGhlIHVzZXJuYW1lIG9yIGVtYWlsIHRoYXQgdGhlIHVzZXIgaXMgbG9nZ2luZyBpbiB3aXRoXG4gICAgICAgICAgdXNlciA9IHt9O1xuICAgICAgICAgIGlmICh0aGlzLmJvZHlQYXJhbXMudXNlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMuYm9keVBhcmFtcy51c2VyLmluZGV4T2YoJ0AnKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgdXNlci51c2VybmFtZSA9IHRoaXMuYm9keVBhcmFtcy51c2VyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdXNlci5lbWFpbCA9IHRoaXMuYm9keVBhcmFtcy51c2VyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5ib2R5UGFyYW1zLnVzZXJuYW1lKSB7XG4gICAgICAgICAgICB1c2VyLnVzZXJuYW1lID0gdGhpcy5ib2R5UGFyYW1zLnVzZXJuYW1lO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5ib2R5UGFyYW1zLmVtYWlsKSB7XG4gICAgICAgICAgICB1c2VyLmVtYWlsID0gdGhpcy5ib2R5UGFyYW1zLmVtYWlsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYXNzd29yZCA9IHRoaXMuYm9keVBhcmFtcy5wYXNzd29yZDtcbiAgICAgICAgICBpZiAodGhpcy5ib2R5UGFyYW1zLmhhc2hlZCkge1xuICAgICAgICAgICAgcGFzc3dvcmQgPSB7XG4gICAgICAgICAgICAgIGRpZ2VzdDogcGFzc3dvcmQsXG4gICAgICAgICAgICAgIGFsZ29yaXRobTogJ3NoYS0yNTYnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gVHJ5IHRvIGxvZyB0aGUgdXNlciBpbnRvIHRoZSB1c2VyJ3MgYWNjb3VudCAoaWYgc3VjY2Vzc2Z1bCB3ZSdsbCBnZXQgYW4gYXV0aCB0b2tlbiBiYWNrKVxuICAgICAgICAgICAgYXV0aCA9IEF1dGgubG9naW5XaXRoUGFzc3dvcmQodXNlciwgcGFzc3dvcmQpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBlID0gZXJyb3I7XG4gICAgICAgICAgICByZXR1cm4gKHt9ID0ge1xuICAgICAgICAgICAgICBzdGF0dXNDb2RlOiBlLmVycm9yLFxuICAgICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGUucmVhc29uXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBHZXQgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlclxuICAgICAgICAgIC8vIFRPRE86IENvbnNpZGVyIHJldHVybmluZyB0aGUgdXNlciBpbiBBdXRoLmxvZ2luV2l0aFBhc3N3b3JkKCksIGluc3RlYWQgb2YgZmV0Y2hpbmcgaXQgYWdhaW4gaGVyZVxuICAgICAgICAgIGlmIChhdXRoLnVzZXJJZCAmJiBhdXRoLmF1dGhUb2tlbikge1xuICAgICAgICAgICAgc2VhcmNoUXVlcnkgPSB7fTtcbiAgICAgICAgICAgIHNlYXJjaFF1ZXJ5W3NlbGYuX2NvbmZpZy5hdXRoLnRva2VuXSA9IEFjY291bnRzLl9oYXNoTG9naW5Ub2tlbihhdXRoLmF1dGhUb2tlbik7XG4gICAgICAgICAgICB0aGlzLnVzZXIgPSBNZXRlb3IudXNlcnMuZmluZE9uZSh7XG4gICAgICAgICAgICAgICdfaWQnOiBhdXRoLnVzZXJJZFxuICAgICAgICAgICAgfSwgc2VhcmNoUXVlcnkpO1xuICAgICAgICAgICAgdGhpcy51c2VySWQgPSAocmVmID0gdGhpcy51c2VyKSAhPSBudWxsID8gcmVmLl9pZCA6IHZvaWQgMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIGRhdGE6IGF1dGhcbiAgICAgICAgICB9O1xuICAgICAgICAgIC8vIENhbGwgdGhlIGxvZ2luIGhvb2sgd2l0aCB0aGUgYXV0aGVudGljYXRlZCB1c2VyIGF0dGFjaGVkXG4gICAgICAgICAgZXh0cmFEYXRhID0gKHJlZjEgPSBzZWxmLl9jb25maWcub25Mb2dnZWRJbikgIT0gbnVsbCA/IHJlZjEuY2FsbCh0aGlzKSA6IHZvaWQgMDtcbiAgICAgICAgICBpZiAoZXh0cmFEYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgIF8uZXh0ZW5kKHJlc3BvbnNlLmRhdGEsIHtcbiAgICAgICAgICAgICAgZXh0cmE6IGV4dHJhRGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBsb2dvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGF1dGhUb2tlbiwgZXh0cmFEYXRhLCBoYXNoZWRUb2tlbiwgaW5kZXgsIHJlZiwgcmVzcG9uc2UsIHRva2VuRmllbGROYW1lLCB0b2tlbkxvY2F0aW9uLCB0b2tlblBhdGgsIHRva2VuUmVtb3ZhbFF1ZXJ5LCB0b2tlblRvUmVtb3ZlO1xuICAgICAgICAvLyBSZW1vdmUgdGhlIGdpdmVuIGF1dGggdG9rZW4gZnJvbSB0aGUgdXNlcidzIGFjY291bnRcbiAgICAgICAgYXV0aFRva2VuID0gdGhpcy5yZXF1ZXN0LmhlYWRlcnNbJ3gtYXV0aC10b2tlbiddO1xuICAgICAgICBoYXNoZWRUb2tlbiA9IEFjY291bnRzLl9oYXNoTG9naW5Ub2tlbihhdXRoVG9rZW4pO1xuICAgICAgICB0b2tlbkxvY2F0aW9uID0gc2VsZi5fY29uZmlnLmF1dGgudG9rZW47XG4gICAgICAgIGluZGV4ID0gdG9rZW5Mb2NhdGlvbi5sYXN0SW5kZXhPZignLicpO1xuICAgICAgICB0b2tlblBhdGggPSB0b2tlbkxvY2F0aW9uLnN1YnN0cmluZygwLCBpbmRleCk7XG4gICAgICAgIHRva2VuRmllbGROYW1lID0gdG9rZW5Mb2NhdGlvbi5zdWJzdHJpbmcoaW5kZXggKyAxKTtcbiAgICAgICAgdG9rZW5Ub1JlbW92ZSA9IHt9O1xuICAgICAgICB0b2tlblRvUmVtb3ZlW3Rva2VuRmllbGROYW1lXSA9IGhhc2hlZFRva2VuO1xuICAgICAgICB0b2tlblJlbW92YWxRdWVyeSA9IHt9O1xuICAgICAgICB0b2tlblJlbW92YWxRdWVyeVt0b2tlblBhdGhdID0gdG9rZW5Ub1JlbW92ZTtcbiAgICAgICAgTWV0ZW9yLnVzZXJzLnVwZGF0ZSh0aGlzLnVzZXIuX2lkLCB7XG4gICAgICAgICAgJHB1bGw6IHRva2VuUmVtb3ZhbFF1ZXJ5XG4gICAgICAgIH0pO1xuICAgICAgICByZXNwb25zZSA9IHtcbiAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnWW91XFwndmUgYmVlbiBsb2dnZWQgb3V0ISdcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIENhbGwgdGhlIGxvZ291dCBob29rIHdpdGggdGhlIGF1dGhlbnRpY2F0ZWQgdXNlciBhdHRhY2hlZFxuICAgICAgICBleHRyYURhdGEgPSAocmVmID0gc2VsZi5fY29uZmlnLm9uTG9nZ2VkT3V0KSAhPSBudWxsID8gcmVmLmNhbGwodGhpcykgOiB2b2lkIDA7XG4gICAgICAgIGlmIChleHRyYURhdGEgIT0gbnVsbCkge1xuICAgICAgICAgIF8uZXh0ZW5kKHJlc3BvbnNlLmRhdGEsIHtcbiAgICAgICAgICAgIGV4dHJhOiBleHRyYURhdGFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9O1xuICAgICAgLypcbiAgICAgIEFkZCBhIGxvZ291dCBlbmRwb2ludCB0byB0aGUgQVBJXG5cbiAgICAgIEFmdGVyIHRoZSB1c2VyIGlzIGxvZ2dlZCBvdXQsIHRoZSBvbkxvZ2dlZE91dCBob29rIGlzIGNhbGxlZCAoc2VlIFJlc3RmdWxseS5jb25maWd1cmUoKSBmb3JcbiAgICAgIGFkZGluZyBob29rKS5cbiAgICAgICovXG4gICAgICByZXR1cm4gdGhpcy5hZGRSb3V0ZSgnbG9nb3V0Jywge1xuICAgICAgICBhdXRoUmVxdWlyZWQ6IHRydWVcbiAgICAgIH0sIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJXYXJuaW5nOiBEZWZhdWx0IGxvZ291dCB2aWEgR0VUIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZXN0aXZ1cyB2MS4wLiBVc2UgUE9TVCBpbnN0ZWFkLlwiKTtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCIgICAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9rYWhtYWxpL21ldGVvci1yZXN0aXZ1cy9pc3N1ZXMvMTAwXCIpO1xuICAgICAgICAgIHJldHVybiBsb2dvdXQuY2FsbCh0aGlzKTtcbiAgICAgICAgfSxcbiAgICAgICAgcG9zdDogbG9nb3V0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfTtcblxuICAvKipcbiAgQSBzZXQgb2YgZW5kcG9pbnRzIHRoYXQgY2FuIGJlIGFwcGxpZWQgdG8gYSBDb2xsZWN0aW9uIFJvdXRlXG4gICovXG4gIFJlc3RpdnVzLnByb3RvdHlwZS5fY29sbGVjdGlvbkVuZHBvaW50cyA9IHtcbiAgICBnZXQ6IGZ1bmN0aW9uKGNvbGxlY3Rpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGdldDoge1xuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZW50aXR5O1xuICAgICAgICAgICAgZW50aXR5ID0gY29sbGVjdGlvbi5maW5kT25lKHRoaXMudXJsUGFyYW1zLmlkKTtcbiAgICAgICAgICAgIGlmIChlbnRpdHkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBlbnRpdHlcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogNDA0LFxuICAgICAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICAgIHN0YXR1czogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0l0ZW0gbm90IGZvdW5kJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICBwdXQ6IGZ1bmN0aW9uKGNvbGxlY3Rpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHB1dDoge1xuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZW50aXR5LCBlbnRpdHlJc1VwZGF0ZWQ7XG4gICAgICAgICAgICBlbnRpdHlJc1VwZGF0ZWQgPSBjb2xsZWN0aW9uLnVwZGF0ZSh0aGlzLnVybFBhcmFtcy5pZCwgdGhpcy5ib2R5UGFyYW1zKTtcbiAgICAgICAgICAgIGlmIChlbnRpdHlJc1VwZGF0ZWQpIHtcbiAgICAgICAgICAgICAgZW50aXR5ID0gY29sbGVjdGlvbi5maW5kT25lKHRoaXMudXJsUGFyYW1zLmlkKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBlbnRpdHlcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogNDA0LFxuICAgICAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICAgIHN0YXR1czogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0l0ZW0gbm90IGZvdW5kJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICBwYXRjaDogZnVuY3Rpb24oY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGF0Y2g6IHtcbiAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVudGl0eSwgZW50aXR5SXNVcGRhdGVkO1xuICAgICAgICAgICAgZW50aXR5SXNVcGRhdGVkID0gY29sbGVjdGlvbi51cGRhdGUodGhpcy51cmxQYXJhbXMuaWQsIHtcbiAgICAgICAgICAgICAgJHNldDogdGhpcy5ib2R5UGFyYW1zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlbnRpdHlJc1VwZGF0ZWQpIHtcbiAgICAgICAgICAgICAgZW50aXR5ID0gY29sbGVjdGlvbi5maW5kT25lKHRoaXMudXJsUGFyYW1zLmlkKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBlbnRpdHlcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogNDA0LFxuICAgICAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICAgIHN0YXR1czogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0l0ZW0gbm90IGZvdW5kJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICBkZWxldGU6IGZ1bmN0aW9uKGNvbGxlY3Rpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRlbGV0ZToge1xuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoY29sbGVjdGlvbi5yZW1vdmUodGhpcy51cmxQYXJhbXMuaWQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0l0ZW0gcmVtb3ZlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IDQwNCxcbiAgICAgICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgICBzdGF0dXM6ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdJdGVtIG5vdCBmb3VuZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG4gICAgcG9zdDogZnVuY3Rpb24oY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcG9zdDoge1xuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZW50aXR5LCBlbnRpdHlJZDtcbiAgICAgICAgICAgIGVudGl0eUlkID0gY29sbGVjdGlvbi5pbnNlcnQodGhpcy5ib2R5UGFyYW1zKTtcbiAgICAgICAgICAgIGVudGl0eSA9IGNvbGxlY3Rpb24uZmluZE9uZShlbnRpdHlJZCk7XG4gICAgICAgICAgICBpZiAoZW50aXR5KSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogMjAxLFxuICAgICAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgZGF0YTogZW50aXR5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiA0MDAsXG4gICAgICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTm8gaXRlbSBhZGRlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG4gICAgZ2V0QWxsOiBmdW5jdGlvbihjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBnZXQ6IHtcbiAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVudGl0aWVzO1xuICAgICAgICAgICAgZW50aXRpZXMgPSBjb2xsZWN0aW9uLmZpbmQoKS5mZXRjaCgpO1xuICAgICAgICAgICAgaWYgKGVudGl0aWVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgZGF0YTogZW50aXRpZXNcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogNDA0LFxuICAgICAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICAgIHN0YXR1czogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1VuYWJsZSB0byByZXRyaWV2ZSBpdGVtcyBmcm9tIGNvbGxlY3Rpb24nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAgQSBzZXQgb2YgZW5kcG9pbnRzIHRoYXQgY2FuIGJlIGFwcGxpZWQgdG8gYSBNZXRlb3IudXNlcnMgQ29sbGVjdGlvbiBSb3V0ZVxuICAqL1xuICBSZXN0aXZ1cy5wcm90b3R5cGUuX3VzZXJDb2xsZWN0aW9uRW5kcG9pbnRzID0ge1xuICAgIGdldDogZnVuY3Rpb24oY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0OiB7XG4gICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbnRpdHk7XG4gICAgICAgICAgICBlbnRpdHkgPSBjb2xsZWN0aW9uLmZpbmRPbmUodGhpcy51cmxQYXJhbXMuaWQsIHtcbiAgICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgcHJvZmlsZTogMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlbnRpdHkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBlbnRpdHlcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogNDA0LFxuICAgICAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICAgIHN0YXR1czogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1VzZXIgbm90IGZvdW5kJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICBwdXQ6IGZ1bmN0aW9uKGNvbGxlY3Rpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHB1dDoge1xuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZW50aXR5LCBlbnRpdHlJc1VwZGF0ZWQ7XG4gICAgICAgICAgICBlbnRpdHlJc1VwZGF0ZWQgPSBjb2xsZWN0aW9uLnVwZGF0ZSh0aGlzLnVybFBhcmFtcy5pZCwge1xuICAgICAgICAgICAgICAkc2V0OiB7XG4gICAgICAgICAgICAgICAgcHJvZmlsZTogdGhpcy5ib2R5UGFyYW1zXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVudGl0eUlzVXBkYXRlZCkge1xuICAgICAgICAgICAgICBlbnRpdHkgPSBjb2xsZWN0aW9uLmZpbmRPbmUodGhpcy51cmxQYXJhbXMuaWQsIHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgIHByb2ZpbGU6IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1czogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgZGF0YTogZW50aXR5XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IDQwNCxcbiAgICAgICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgICBzdGF0dXM6ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVc2VyIG5vdCBmb3VuZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG4gICAgZGVsZXRlOiBmdW5jdGlvbihjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGNvbGxlY3Rpb24ucmVtb3ZlKHRoaXMudXJsUGFyYW1zLmlkKSkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVc2VyIHJlbW92ZWQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiA0MDQsXG4gICAgICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVXNlciBub3QgZm91bmQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuICAgIHBvc3Q6IGZ1bmN0aW9uKGNvbGxlY3Rpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBvc3Q6IHtcbiAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVudGl0eSwgZW50aXR5SWQ7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgdXNlciBhY2NvdW50XG4gICAgICAgICAgICBlbnRpdHlJZCA9IEFjY291bnRzLmNyZWF0ZVVzZXIodGhpcy5ib2R5UGFyYW1zKTtcbiAgICAgICAgICAgIGVudGl0eSA9IGNvbGxlY3Rpb24uZmluZE9uZShlbnRpdHlJZCwge1xuICAgICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICBwcm9maWxlOiAxXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVudGl0eSkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMSxcbiAgICAgICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IGVudGl0eVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogNDAwXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1czogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdObyB1c2VyIGFkZGVkJ1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuICAgIGdldEFsbDogZnVuY3Rpb24oY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0OiB7XG4gICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbnRpdGllcztcbiAgICAgICAgICAgIGVudGl0aWVzID0gY29sbGVjdGlvbi5maW5kKHt9LCB7XG4gICAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICAgIHByb2ZpbGU6IDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuZmV0Y2goKTtcbiAgICAgICAgICAgIGlmIChlbnRpdGllcykge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIGRhdGE6IGVudGl0aWVzXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IDQwNCxcbiAgICAgICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgICBzdGF0dXM6ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVbmFibGUgdG8gcmV0cmlldmUgdXNlcnMnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFJlc3RpdnVzO1xuXG59KS5jYWxsKHRoaXMpO1xuXG5SZXN0aXZ1cyA9IHRoaXMuUmVzdGl2dXM7XG4iXX0=
