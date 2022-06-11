function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Attachment/Size.tsx                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["size"];

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
var useFormatMemorySize;
module.link("../../../../hooks/useFormatMemorySize", {
  useFormatMemorySize: function (v) {
    useFormatMemorySize = v;
  }
}, 1);
var Title;
module.link("./Title", {
  "default": function (v) {
    Title = v;
  }
}, 2);

var Size = function (_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, _excluded);

  var format = useFormatMemorySize();
  return /*#__PURE__*/React.createElement(Title, _extends({
    flexShrink: 0
  }, props), "(", format(size), ")");
};

module.exportDefault(Size);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Attachment/2af2245873db3c23c9fb4309ce20d50975d8b4ca.map
