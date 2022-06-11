function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/SessionProvider.tsx                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Session;
module.link("meteor/session", {
  Session(v) {
    Session = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let SessionContext;
module.link("../contexts/SessionContext", {
  SessionContext(v) {
    SessionContext = v;
  }

}, 2);
let createReactiveSubscriptionFactory;
module.link("./createReactiveSubscriptionFactory", {
  createReactiveSubscriptionFactory(v) {
    createReactiveSubscriptionFactory = v;
  }

}, 3);
const contextValue = {
  query: createReactiveSubscriptionFactory(name => Session.get(name)),
  dispatch: (name, value) => {
    Session.set(name, value);
  }
};

const SessionProvider = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(SessionContext.Provider, {
    children: children,
    value: contextValue
  });
};

module.exportDefault(SessionProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/f339e3a9ea16c3ee6159b53c4d8fbf3b1f9d2f0a.map
