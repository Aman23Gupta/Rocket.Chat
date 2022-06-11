function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Quote.tsx                                                                            //
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
let colors;
module.link("@rocket.chat/fuselage-tokens/colors", {
  default(v) {
    colors = v;
  }

}, 2);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 3);
let Paragraph;
module.link("./Paragraph", {
  default(v) {
    Paragraph = v;
  }

}, 4);
const hover = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t&:hover,\n\t&:focus {\n\t\tbackground: ", " !important;\n\t\tborder-color: ", " !important;\n\t\tborder-inline-start-color: ", " !important;\n\t}\n"])), colors.n200, colors.n300, colors.n600);

const Quote = _ref => {
  let {
    value
  } = _ref;
  return /*#__PURE__*/React.createElement(Box, {
    is: "blockquote",
    className: hover,
    pi: "x8",
    borderRadius: "x2",
    borderWidth: "x2",
    borderStyle: "solid",
    backgroundColor: "neutral-100",
    borderColor: "neutral-200",
    borderInlineStartColor: "neutral-600"
  }, value.map((item, index) => /*#__PURE__*/React.createElement(Paragraph, {
    key: index,
    value: item.value,
    mentions: []
  })));
};

module.exportDefault(Quote);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/29d69ad07b812d6dd5341c595ac804d89995bdc4.map
