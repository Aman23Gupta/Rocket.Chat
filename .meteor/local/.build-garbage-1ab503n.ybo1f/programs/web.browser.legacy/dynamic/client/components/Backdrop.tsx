function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Backdrop.tsx                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
module.export({
  Backdrop: function () {
    return Backdrop;
  }
});
var Modal;
module.link("@rocket.chat/fuselage", {
  Modal: function (v) {
    Modal = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var Backdrop = function (props) {
  return /*#__PURE__*/React.createElement(Modal.Backdrop, _extends({
    bg: "transparent"
  }, props));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/2127e3d8e1d45e1c7a31bea9ea690a6037df866a.map
