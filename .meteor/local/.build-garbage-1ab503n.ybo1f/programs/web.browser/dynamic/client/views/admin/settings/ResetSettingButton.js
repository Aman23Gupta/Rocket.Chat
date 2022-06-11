function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/ResetSettingButton.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let Button, Icon;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);

function ResetSettingButton(props) {
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(Button, _extends({
    "aria-label": t('Reset'),
    danger: true,
    ghost: true,
    small: true,
    title: t('Reset'),
    style: {
      padding: 0
    }
  }, props), /*#__PURE__*/React.createElement(Icon, {
    name: "undo"
  }));
}

module.exportDefault(ResetSettingButton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/ea9e53740304dd75d1c8324a1348c9d9bbf72740.map
