function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/components/Load.tsx                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

var _excluded = ["load"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _taggedTemplateLiteralLoose;

module.link("@babel/runtime/helpers/taggedTemplateLiteralLoose", {
  default: function (v) {
    _taggedTemplateLiteralLoose = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
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

var Load = function (_ref) {
  var load = _ref.load,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var clickable = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t\tcursor: pointer;\n\t\tbackground: var(--rxc-color-neutral-100, ", ") !important;\n\n\t\t&:hover,\n\t\t&:focus {\n\t\t\tbackground: var(--rxc-color-neutral-300, ", ") !important;\n\t\t}\n\t"])), colors.n100, colors.n300);
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
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/components/4287ef0da1d2a53d6f5234a199b0f1687c098b7f.map
