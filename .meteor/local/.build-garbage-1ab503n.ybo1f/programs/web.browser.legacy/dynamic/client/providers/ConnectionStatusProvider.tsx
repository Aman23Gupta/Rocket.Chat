function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/ConnectionStatusProvider.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var ConnectionStatusContext;
module.link("../contexts/ConnectionStatusContext", {
  ConnectionStatusContext: function (v) {
    ConnectionStatusContext = v;
  }
}, 2);
var useReactiveValue;
module.link("../hooks/useReactiveValue", {
  useReactiveValue: function (v) {
    useReactiveValue = v;
  }
}, 3);

var getValue = function () {
  return _objectSpread(_objectSpread({}, Meteor.status()), {}, {
    reconnect: Meteor.reconnect
  });
};

var ConnectionStatusProvider = function (_ref) {
  var children = _ref.children;
  var status = useReactiveValue(getValue);
  return /*#__PURE__*/React.createElement(ConnectionStatusContext.Provider, {
    children: children,
    value: status
  });
};

module.exportDefault(ConnectionStatusProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/6d7973263424b8aef0e0ddbbe9f4ea2c608cd4f2.map
