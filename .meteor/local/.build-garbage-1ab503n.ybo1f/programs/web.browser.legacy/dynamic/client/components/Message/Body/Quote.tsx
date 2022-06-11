function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Quote.tsx                                                                            //
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
var colors;
module.link("@rocket.chat/fuselage-tokens/colors", {
  "default": function (v) {
    colors = v;
  }
}, 2);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 3);
var Paragraph;
module.link("./Paragraph", {
  "default": function (v) {
    Paragraph = v;
  }
}, 4);
var hover = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t&:hover,\n\t&:focus {\n\t\tbackground: ", " !important;\n\t\tborder-color: ", " !important;\n\t\tborder-inline-start-color: ", " !important;\n\t}\n"])), colors.n200, colors.n300, colors.n600);

var Quote = function (_ref) {
  var value = _ref.value;
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
  }, value.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Paragraph, {
      key: index,
      value: item.value,
      mentions: []
    });
  }));
};

module.exportDefault(Quote);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/a386d4ad79a5375f812a6d6ed35cf26314f82176.map
