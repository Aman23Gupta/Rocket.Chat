function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Discussions/mapProps.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["msg", "username", "tcount", "ts"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
module.export({
  mapProps: () => mapProps
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);

function mapProps(Component) {
  var _ref2, _Component$displayNam;

  const WrappedComponent = _ref => {
    let {
      msg,
      username,
      tcount,
      ts
    } = _ref,
        props = _objectWithoutProperties(_ref, _excluded);

    return /*#__PURE__*/React.createElement(Component, _extends({
      replies: tcount,
      username: username,
      msg: msg,
      ts: ts
    }, props));
  };

  WrappedComponent.displayName = "mapProps(".concat((_ref2 = (_Component$displayNam = Component.displayName) !== null && _Component$displayNam !== void 0 ? _Component$displayNam : Component.name) !== null && _ref2 !== void 0 ? _ref2 : 'Component', ")");
  return WrappedComponent;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Discussions/357fca90e832365d6d6feec07c0289171d8e9d18.map
