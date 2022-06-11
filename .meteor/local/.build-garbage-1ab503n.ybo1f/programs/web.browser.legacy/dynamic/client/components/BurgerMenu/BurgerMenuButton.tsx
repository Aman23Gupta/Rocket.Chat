function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/BurgerMenu/BurgerMenuButton.tsx                                                                   //
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
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var BurgerBadge;
module.link("./BurgerBadge", {
  "default": function (v) {
    BurgerBadge = v;
  }
}, 4);
var BurgerIcon;
module.link("./BurgerIcon", {
  "default": function (v) {
    BurgerIcon = v;
  }
}, 5);

var BurgerMenuButton = function (_ref) {
  var open = _ref.open,
      badge = _ref.badge,
      onClick = _ref.onClick;
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(Box, {
    is: "button",
    "aria-label": open ? t('Close_menu') : t('Open_menu'),
    type: "button",
    position: "relative",
    marginInlineEnd: "x8",
    className: css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t\t\t\tcursor: pointer;\n\t\t\t"]))),
    onClick: onClick
  }, /*#__PURE__*/React.createElement(BurgerIcon, {
    open: open
  }), badge && /*#__PURE__*/React.createElement(BurgerBadge, null, badge));
};

module.exportDefault(BurgerMenuButton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/BurgerMenu/9556aded6b9e9ffe280413592720d0eedfd9e45d.map
