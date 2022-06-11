function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/components/Load.tsx                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

const _excluded = ["load"];

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

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 2);
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

const Load = _ref => {
  let {
    load
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const clickable = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\tcursor: pointer;\n\t\tbackground: var(--rxc-color-neutral-100, ", ") !important;\n\n\t\t&:hover,\n\t\t&:focus {\n\t\t\tbackground: var(--rxc-color-neutral-300, ", ") !important;\n\t\t}\n\t"])), colors.n100, colors.n300);
  return /*#__PURE__*/React.createElement(ImageBox, _extends({
    className: clickable
  }, props, {
    onClick: load
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "image",
    color: "neutral-700",
    size: "x64"
  }), /*#__PURE__*/React.createElement(Box, {
    fontScale: "h2",
    color: "default"
  }, t('Click_to_load')));
};

module.exportDefault(Load);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/components/d08b43644da4189529383d3c4869184eb0b1305c.map
