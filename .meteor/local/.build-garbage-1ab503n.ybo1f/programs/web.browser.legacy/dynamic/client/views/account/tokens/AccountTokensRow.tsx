function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/tokens/AccountTokensRow.tsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Button, ButtonGroup, Icon, Table;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Table: function (v) {
    Table = v;
  }
}, 0);
var React, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var useFormatDateAndTime;
module.link("../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime: function (v) {
    useFormatDateAndTime = v;
  }
}, 3);

var AccountTokensRow = function (_ref) {
  var bypassTwoFactor = _ref.bypassTwoFactor,
      createdAt = _ref.createdAt,
      isMedium = _ref.isMedium,
      lastTokenPart = _ref.lastTokenPart,
      name = _ref.name,
      onRegenerate = _ref.onRegenerate,
      onRemove = _ref.onRemove;
  var t = useTranslation();
  var formatDateAndTime = useFormatDateAndTime();
  var handleRegenerate = useCallback(function () {
    return onRegenerate(name);
  }, [name, onRegenerate]);
  var handleRemove = useCallback(function () {
    return onRemove(name);
  }, [name, onRemove]);
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
//# sourceMappingURL=/dynamic/client/views/account/tokens/12d443a66edf21cdc8043b23336bbd6001313c81.map
