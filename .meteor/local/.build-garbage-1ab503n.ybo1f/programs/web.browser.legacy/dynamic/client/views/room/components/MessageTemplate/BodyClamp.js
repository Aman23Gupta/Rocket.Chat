function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/components/MessageTemplate/BodyClamp.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["className"];

var _templateObject;

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);

var _taggedTemplateLiteralLoose;

module.link("@babel/runtime/helpers/taggedTemplateLiteralLoose", {
  default: function (v) {
    _taggedTemplateLiteralLoose = v;
  }
}, 3);
var css;
module.link("@rocket.chat/css-in-js", {
  css: function (v) {
    css = v;
  }
}, 0);
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var isIterable;
module.link("./isIterable", {
  isIterable: function (v) {
    isIterable = v;
  }
}, 3);
var style = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\tdisplay: -webkit-box;\n\toverflow: hidden;\n\t-webkit-line-clamp: 2;\n\t-webkit-box-orient: vertical;\n\tword-break: break-word;\n"])));

function BodyClamp(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Box, _extends({
    "rcx-message__body": true,
    className: [].concat(_toConsumableArray(isIterable(className) ? className : [className]), [style]).filter(Boolean),
    flexShrink: 1,
    lineHeight: "1.45",
    minHeight: "40px"
  }, props));
}

module.exportDefault(BodyClamp);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/components/MessageTemplate/b05dc9e2a9e11deb04fe0c261e26cd5f67b5e382.map
