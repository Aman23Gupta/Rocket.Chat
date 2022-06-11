function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/helpers/followSyle.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

var _taggedTemplateLiteralLoose;

module.link("@babel/runtime/helpers/taggedTemplateLiteralLoose", {
  default: function (v) {
    _taggedTemplateLiteralLoose = v;
  }
}, 0);
module.export({
  anchor: function () {
    return anchor;
  },
  followStyle: function () {
    return followStyle;
  }
});
var css;
module.link("@rocket.chat/css-in-js", {
  css: function (v) {
    css = v;
  }
}, 0);
var anchor = 'rcx-contextual-message__follow';
var followStyle = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t& .", " {\n\t\topacity: 0;\n\t}\n\t.", ":focus, &:hover .", ", &:focus .", " {\n\t\topacity: 1;\n\t}\n"])), anchor, anchor, anchor, anchor);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/helpers/1e9cc2d8846497d378611199c512f521e26f4f09.map
