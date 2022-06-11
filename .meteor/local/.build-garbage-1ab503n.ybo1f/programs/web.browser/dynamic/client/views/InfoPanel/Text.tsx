function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/InfoPanel/Text.tsx                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _taggedTemplateLiteral;

module.link("@babel/runtime/helpers/taggedTemplateLiteral", {
  default(v) {
    _taggedTemplateLiteral = v;
  }

}, 1);
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
const wordBreak = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tword-break: break-word;\n"])));

const Text = props => /*#__PURE__*/React.createElement(Box, _extends({
  mb: "x8",
  fontScale: "p2",
  color: "hint",
  withTruncatedText: true,
  className: wordBreak
}, props));

module.exportDefault(Text);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/InfoPanel/d85f581e13cfb4df59a7c7ea4f9b683d88fe6792.map
