function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/tokens/AccountTokensRow.tsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Button, ButtonGroup, Icon, Table;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Icon(v) {
    Icon = v;
  },

  Table(v) {
    Table = v;
  }

}, 0);
let React, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let useFormatDateAndTime;
module.link("../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime(v) {
    useFormatDateAndTime = v;
  }

}, 3);

const AccountTokensRow = _ref => {
  let {
    bypassTwoFactor,
    createdAt,
    isMedium,
    lastTokenPart,
    name,
    onRegenerate,
    onRemove
  } = _ref;
  const t = useTranslation();
  const formatDateAndTime = useFormatDateAndTime();
  const handleRegenerate = useCallback(() => onRegenerate(name), [name, onRegenerate]);
  const handleRemove = useCallback(() => onRemove(name), [name, onRemove]);
  return /*#__PURE__*/React.createElement(Table.Row, {
    key: name,
    tabIndex: 0,
    role: "link",
    action: true,
    "qa-token-name": name
  }, /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true,
    color: "default",
    fontScale: "p2m"
  }, name), isMedium && /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, formatDateAndTime(createdAt)), /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, "...", lastTokenPart), /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, bypassTwoFactor ? t('Ignore') : t('Require')), /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleRegenerate,
    small: true
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "refresh",
    size: "x16"
  })), /*#__PURE__*/React.createElement(Button, {
    onClick: handleRemove,
    small: true
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: "x16"
  })))));
};

module.exportDefault(AccountTokensRow);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/tokens/5be3c9fbf70558be8dc5c74b5dd88fe78562f3b9.map
