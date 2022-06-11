function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/ResetSettingButton.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var Button, Icon;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

function ResetSettingButton(props) {
  var t = useTranslation();
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
//# sourceMappingURL=/dynamic/client/views/admin/settings/2f39574074e39a3e2cb5e1d3afb03a695c0af746.map
