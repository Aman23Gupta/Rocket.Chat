function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/helpers/followSyle.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

let _taggedTemplateLiteral;

module.link("@babel/runtime/helpers/taggedTemplateLiteral", {
  default(v) {
    _taggedTemplateLiteral = v;
  }

}, 0);
module.export({
  anchor: () => anchor,
  followStyle: () => followStyle
});
let css;
module.link("@rocket.chat/css-in-js", {
  css(v) {
    css = v;
  }

}, 0);
const anchor = 'rcx-contextual-message__follow';
const followStyle = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t& .", " {\n\t\topacity: 0;\n\t}\n\t.", ":focus, &:hover .", ", &:focus .", " {\n\t\topacity: 1;\n\t}\n"])), anchor, anchor, anchor, anchor);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/helpers/22428aff86b3417d1a0925cb233d907c595afdda.map
