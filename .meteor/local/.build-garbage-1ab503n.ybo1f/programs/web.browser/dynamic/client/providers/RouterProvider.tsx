function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/RouterProvider.tsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FlowRouter;
module.link("meteor/kadira:flow-router", {
  FlowRouter(v) {
    FlowRouter = v;
  }

}, 0);
let Tracker;
module.link("meteor/tracker", {
  Tracker(v) {
    Tracker = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let RouterContext;
module.link("../contexts/RouterContext", {
  RouterContext(v) {
    RouterContext = v;
  }

}, 3);

const createSubscription = function (getValue) {
  let currentValue = Tracker.nonreactive(getValue);
  return {
    getCurrentValue: () => currentValue,
    subscribe: callback => {
      const computation = Tracker.autorun(() => {
        currentValue = getValue();
        callback();
      });
      return () => {
        computation.stop();
      };
    }
  };
};

const queryRoutePath = (name, parameters, queryStringParameters) => createSubscription(() => FlowRouter.path(name, parameters, queryStringParameters));

const queryRouteUrl = (name, parameters, queryStringParameters) => createSubscription(() => FlowRouter.url(name, parameters, queryStringParameters));

const pushRoute = (name, parameters, queryStringParameters) => {
  FlowRouter.go(name, parameters, queryStringParameters);
};

const replaceRoute = (name, parameters, queryStringParameters) => {
  FlowRouter.withReplaceState(() => {
    FlowRouter.go(name, parameters, queryStringParameters);
  });
};

const queryRouteParameter = name => createSubscription(() => FlowRouter.getParam(name));

const queryQueryStringParameter = name => createSubscription(() => FlowRouter.getQueryParam(name));

const queryCurrentRoute = () => createSubscription(() => {
  var _route$group;

  FlowRouter.watchPathChange();
  const {
    route,
    params,
    queryParams
  } = FlowRouter.current();
  return [route === null || route === void 0 ? void 0 : route.name, params, queryParams, route === null || route === void 0 ? void 0 : (_route$group = route.group) === null || _route$group === void 0 ? void 0 : _route$group.name];
});

const contextValue = {
  queryRoutePath,
  queryRouteUrl,
  pushRoute,
  replaceRoute,
  queryRouteParameter,
  queryQueryStringParameter,
  queryCurrentRoute
};

const RouterProvider = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(RouterContext.Provider, {
    children: children,
    value: contextValue
  });
};

module.exportDefault(RouterProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/771f91d792b07325ce0b451d046ce2aff12e50d3.map
