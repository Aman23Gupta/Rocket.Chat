function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Omnichannel/modals/ModalSeparator/ModalSeparator.tsx                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["text"];

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
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
module.link("./style.css");

var ModalSeparator = function (_ref) {
  var text = _ref.text,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("h6", _extends({
    className: "modal-separator"
  }, props), text);
};

module.exportDefault(ModalSeparator);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Omnichannel/modals/ModalSeparator/54ce7bfcc720681d0c3b99528814598163c0e202.map
