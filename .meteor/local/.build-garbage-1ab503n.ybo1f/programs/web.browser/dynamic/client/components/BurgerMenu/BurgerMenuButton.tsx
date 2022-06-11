function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/BurgerMenu/BurgerMenuButton.tsx                                                                   //
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let BurgerBadge;
module.link("./BurgerBadge", {
  default(v) {
    BurgerBadge = v;
  }

}, 4);
let BurgerIcon;
module.link("./BurgerIcon", {
  default(v) {
    BurgerIcon = v;
  }

}, 5);

const BurgerMenuButton = _ref => {
  let {
    open,
    badge,
    onClick
  } = _ref;
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(Box, {
    is: "button",
    "aria-label": open ? t('Close_menu') : t('Open_menu'),
    type: "button",
    position: "relative",
    marginInlineEnd: "x8",
    className: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t\t\tcursor: pointer;\n\t\t\t"]))),
    onClick: onClick
  }, /*#__PURE__*/React.createElement(BurgerIcon, {
    open: open
  }), badge && /*#__PURE__*/React.createElement(BurgerBadge, null, badge));
};

module.exportDefault(BurgerMenuButton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/BurgerMenu/f6483dae7654e33582d8796075d4e5e3b03113f9.map
