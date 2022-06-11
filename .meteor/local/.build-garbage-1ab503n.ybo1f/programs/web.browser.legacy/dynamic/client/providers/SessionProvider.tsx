function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/SessionProvider.tsx                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Session;
module.link("meteor/session", {
  Session: function (v) {
    Session = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var SessionContext;
module.link("../contexts/SessionContext", {
  SessionContext: function (v) {
    SessionContext = v;
  }
}, 2);
var createReactiveSubscriptionFactory;
module.link("./createReactiveSubscriptionFactory", {
  createReactiveSubscriptionFactory: function (v) {
    createReactiveSubscriptionFactory = v;
  }
}, 3);
var contextValue = {
  query: createReactiveSubscriptionFactory(function (name) {
    return Session.get(name);
  }),
  dispatch: function (name, value) {
    Session.set(name, value);
  }
};

var SessionProvider = function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(SessionContext.Provider, {
    children: children,
    value: contextValue
  });
};

module.exportDefault(SessionProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/9a789b4eced8fb75e55392bde323c91557561ad8.map
