function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Discussions/mapProps.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["msg", "username", "tcount", "ts"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
module.export({
  mapProps: function () {
    return mapProps;
  }
});
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);

function mapProps(Component) {
  var _ref2, _Component$displayNam;

  var WrappedComponent = function (_ref) {
    var msg = _ref.msg,
        username = _ref.username,
        tcount = _ref.tcount,
        ts = _ref.ts,
        props = _objectWithoutProperties(_ref, _excluded);

    return /*#__PURE__*/React.createElement(Component, _extends({
      replies: tcount,
      username: username,
      msg: msg,
      ts: ts
    }, props));
  };

  WrappedComponent.displayName = "mapProps(" + ((_ref2 = (_Component$displayNam = Component.displayName) !== null && _Component$displayNam !== void 0 ? _Component$displayNam : Component.name) !== null && _ref2 !== void 0 ? _ref2 : 'Component') + ")";
  return WrappedComponent;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Discussions/7c7f617c5ffdc6ab55d48a95b781591e6261e823.map
