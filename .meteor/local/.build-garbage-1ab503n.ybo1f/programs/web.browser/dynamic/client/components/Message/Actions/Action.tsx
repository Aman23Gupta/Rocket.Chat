function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Actions/Action.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Icon, Button;
module.link("@rocket.chat/fuselage", {
  Icon(v) {
    Icon = v;
  },

  Button(v) {
    Button = v;
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

const resolveLegacyIcon = legacyIcon => {
  if (legacyIcon === 'icon-videocam') {
    return 'video';
  }

  return legacyIcon === null || legacyIcon === void 0 ? void 0 : legacyIcon.replace(/^icon-/, '');
};

const Action = _ref => {
  let {
    id,
    icon,
    i18nLabel,
    label,
    mid,
    runAction,
    danger
  } = _ref;
  const t = useTranslation();
  const resolvedIcon = resolveLegacyIcon(icon);
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
//# sourceMappingURL=/dynamic/client/components/Message/Actions/ac630fb2d1178ac23b41fa909c63570fbf9ff6c3.map
