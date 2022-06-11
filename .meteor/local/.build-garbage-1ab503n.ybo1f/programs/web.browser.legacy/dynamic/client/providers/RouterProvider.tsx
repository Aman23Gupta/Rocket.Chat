function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/RouterProvider.tsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var FlowRouter;
module.link("meteor/kadira:flow-router", {
  FlowRouter: function (v) {
    FlowRouter = v;
  }
}, 0);
var Tracker;
module.link("meteor/tracker", {
  Tracker: function (v) {
    Tracker = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var RouterContext;
module.link("../contexts/RouterContext", {
  RouterContext: function (v) {
    RouterContext = v;
  }
}, 3);

var createSubscription = function (getValue) {
  var currentValue = Tracker.nonreactive(getValue);
  return {
    getCurrentValue: function () {
      return currentValue;
    },
    subscribe: function (callback) {
      var computation = Tracker.autorun(function () {
        currentValue = getValue();
        callback();
      });
      return function () {
        computation.stop();
      };
    }
  };
};

var queryRoutePath = function (name, parameters, queryStringParameters) {
  return createSubscription(function () {
    return FlowRouter.path(name, parameters, queryStringParameters);
  });
};

var queryRouteUrl = function (name, parameters, queryStringParameters) {
  return createSubscription(function () {
    return FlowRouter.url(name, parameters, queryStringParameters);
  });
};

var pushRoute = function (name, parameters, queryStringParameters) {
  FlowRouter.go(name, parameters, queryStringParameters);
};

var replaceRoute = function (name, parameters, queryStringParameters) {
  FlowRouter.withReplaceState(function () {
    FlowRouter.go(name, parameters, queryStringParameters);
  });
};

var queryRouteParameter = function (name) {
  return createSubscription(function () {
    return FlowRouter.getParam(name);
  });
};

var queryQueryStringParameter = function (name) {
  return createSubscription(function () {
    return FlowRouter.getQueryParam(name);
  });
};

var queryCurrentRoute = function () {
  return createSubscription(function () {
    var _route$group;

    FlowRouter.watchPathChange();

    var _FlowRouter$current = FlowRouter.current(),
        route = _FlowRouter$current.route,
        params = _FlowRouter$current.params,
        queryParams = _FlowRouter$current.queryParams;

    return [route === null || route === void 0 ? void 0 : route.name, params, queryParams, route === null || route === void 0 ? void 0 : (_route$group = route.group) === null || _route$group === void 0 ? void 0 : _route$group.name];
  });
};

var contextValue = {
  queryRoutePath: queryRoutePath,
  queryRouteUrl: queryRouteUrl,
  pushRoute: pushRoute,
  replaceRoute: replaceRoute,
  queryRouteParameter: queryRouteParameter,
  queryQueryStringParameter: queryQueryStringParameter,
  queryCurrentRoute: queryCurrentRoute
};

var RouterProvider = function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(RouterContext.Provider, {
    children: children,
    value: contextValue
  });
};

module.exportDefault(RouterProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/e0888e00655b837bc772eba8173e340bdcb3a01a.map
