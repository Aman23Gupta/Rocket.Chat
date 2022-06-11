function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/components/MessageTemplate/BodyClamp.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["className"];

var _templateObject;

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

let _taggedTemplateLiteral;

module.link("@babel/runtime/helpers/taggedTemplateLiteral", {
  default(v) {
    _taggedTemplateLiteral = v;
  }

}, 2);
let css;
module.link("@rocket.chat/css-in-js", {
  css(v) {
    css = v;
  }

}, 0);
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let isIterable;
module.link("./isIterable", {
  isIterable(v) {
    isIterable = v;
  }

}, 3);
const style = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: -webkit-box;\n\toverflow: hidden;\n\t-webkit-line-clamp: 2;\n\t-webkit-box-orient: vertical;\n\tword-break: break-word;\n"])));

function BodyClamp(_ref) {
  let {
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Box, _extends({
    "rcx-message__body": true,
    className: [...(isIterable(className) ? className : [className]), style].filter(Boolean),
    flexShrink: 1,
    lineHeight: "1.45",
    minHeight: "40px"
  }, props));
}

module.exportDefault(BodyClamp);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/components/MessageTemplate/67e86d9da0a9d70a677a7aae9d436c5b2a2a0b3f.map
