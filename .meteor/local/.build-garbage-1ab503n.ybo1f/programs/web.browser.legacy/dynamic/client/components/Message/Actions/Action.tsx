function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Actions/Action.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Icon, Button;
module.link("@rocket.chat/fuselage", {
  Icon: function (v) {
    Icon = v;
  },
  Button: function (v) {
    Button = v;
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

var resolveLegacyIcon = function (legacyIcon) {
  if (legacyIcon === 'icon-videocam') {
    return 'video';
  }

  return legacyIcon === null || legacyIcon === void 0 ? void 0 : legacyIcon.replace(/^icon-/, '');
};

var Action = function (_ref) {
  var id = _ref.id,
      icon = _ref.icon,
      i18nLabel = _ref.i18nLabel,
      label = _ref.label,
      mid = _ref.mid,
      runAction = _ref.runAction,
      danger = _ref.danger;
  var t = useTranslation();
  var resolvedIcon = resolveLegacyIcon(icon);
  return /*#__PURE__*/React.createElement(Button, {
    id: id,
    "data-mid": mid,
    "data-actionlink": id,
    onClick: runAction,
    marginInline: "x4",
    primary: true,
    small: true,
    danger: danger
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: resolvedIcon
  }), i18nLabel ? t(i18nLabel) : label);
};

module.exportDefault(Action);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Actions/ff54397e08f8374a1fe676cd943a191ab10eca18.map
