function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/ConnectionStatusProvider.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let ConnectionStatusContext;
module.link("../contexts/ConnectionStatusContext", {
  ConnectionStatusContext(v) {
    ConnectionStatusContext = v;
  }

}, 2);
let useReactiveValue;
module.link("../hooks/useReactiveValue", {
  useReactiveValue(v) {
    useReactiveValue = v;
  }

}, 3);

const getValue = () => _objectSpread(_objectSpread({}, Meteor.status()), {}, {
  reconnect: Meteor.reconnect
});

const ConnectionStatusProvider = _ref => {
  let {
    children
  } = _ref;
  const status = useReactiveValue(getValue);
  return /*#__PURE__*/React.createElement(ConnectionStatusContext.Provider, {
    children: children,
    value: status
  });
};

module.exportDefault(ConnectionStatusProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/9c68de84b9780fa33d6731ca9c5ac237f565cea7.map
