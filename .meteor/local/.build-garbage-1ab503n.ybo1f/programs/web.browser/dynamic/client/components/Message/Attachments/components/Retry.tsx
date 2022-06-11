function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/components/Retry.tsx                                                          //
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
let Box, Icon;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
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
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let ImageBox;
module.link("./ImageBox", {
  default(v) {
    ImageBox = v;
  }

}, 5);

const Retry = _ref => {
  let {
    retry
  } = _ref;
  const t = useTranslation();
  const clickable = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\tcursor: pointer;\n\t\tbackground: var(--rxc-color-neutral-100, ", ") !important;\n\n\t\t&:hover,\n\t\t&:focus {\n\t\t\tbackground: var(--rxc-color-neutral-300, ", ") !important;\n\t\t}\n\t"])), colors.n100, colors.n300);
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
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/components/3d7150cfe754b9f21003b5dea00e69ceff1a3a9e.map
