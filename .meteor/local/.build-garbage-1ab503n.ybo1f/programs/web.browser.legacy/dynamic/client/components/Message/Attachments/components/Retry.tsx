function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/components/Retry.tsx                                                          //
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
var Box, Icon;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
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
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var ImageBox;
module.link("./ImageBox", {
  "default": function (v) {
    ImageBox = v;
  }
}, 5);

var Retry = function (_ref) {
  var retry = _ref.retry;
  var t = useTranslation();
  var clickable = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t\tcursor: pointer;\n\t\tbackground: var(--rxc-color-neutral-100, ", ") !important;\n\n\t\t&:hover,\n\t\t&:focus {\n\t\t\tbackground: var(--rxc-color-neutral-300, ", ") !important;\n\t\t}\n\t"])), colors.n100, colors.n300);
  return /*#__PURE__*/React.createElement(ImageBox, {
    className: clickable,
    onClick: retry,
    size: 160
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "refresh",
    color: "neutral-700",
    size: "x64"
  }), /*#__PURE__*/React.createElement(Box, {
    fontScale: "h2",
    color: "default"
  }, t('Retry')));
};

module.exportDefault(Retry);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/components/33838276ef4d446f2233e3a18273f742ba31783c.map
