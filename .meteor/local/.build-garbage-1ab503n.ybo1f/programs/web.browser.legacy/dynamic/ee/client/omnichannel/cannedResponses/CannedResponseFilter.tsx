function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/cannedResponses/CannedResponseFilter.tsx                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["sharingValue", "createdByValue", "shortcutValue", "setSharing", "setCreatedBy", "setShortcut"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Box, Icon, TextInput, Select;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Select: function (v) {
    Select = v;
  }
}, 0);
var React, memo, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var AutoCompleteAgent;
module.link("../../../../client/components/AutoCompleteAgent", {
  "default": function (v) {
    AutoCompleteAgent = v;
  }
}, 2);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

var CannedResponsesFilter = function (_ref) {
  var _ref$sharingValue = _ref.sharingValue,
      sharingValue = _ref$sharingValue === void 0 ? '' : _ref$sharingValue,
      _ref$createdByValue = _ref.createdByValue,
      createdByValue = _ref$createdByValue === void 0 ? '' : _ref$createdByValue,
      _ref$shortcutValue = _ref.shortcutValue,
      shortcutValue = _ref$shortcutValue === void 0 ? '' : _ref$shortcutValue,
      setSharing = _ref.setSharing,
      setCreatedBy = _ref.setCreatedBy,
      setShortcut = _ref.setShortcut,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var sharingList = [['', t('All')], ['user', t('Private')], ['global', t('Public')], ['department', t('Department')]];
  var handleFormSubmit = useCallback(function (event) {
    event.preventDefault();
  }, []);
  return /*#__PURE__*/React.createElement(Box, _extends({
    mb: "x16",
    is: "form",
    onSubmit: handleFormSubmit,
    display: "flex",
    flexDirection: "row"
  }, props), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mie: "x8",
    flexGrow: 1,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Box, {
    mb: "x4"
  }, t('Search')), /*#__PURE__*/React.createElement(TextInput, {
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "magnifier",
      size: "x20"
    }),
    onChange: setShortcut,
    value: shortcutValue
  })), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mie: "x8",
    flexGrow: 1,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Box, {
    mb: "x4"
  }, t('Sharing')), /*#__PURE__*/React.createElement(Select, {
    onChange: setSharing,
    options: sharingList,
    value: sharingValue
  })), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mie: "x8",
    flexGrow: 1,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Box, {
    mb: "x4"
  }, t('Created_by')), /*#__PURE__*/React.createElement(AutoCompleteAgent, {
    onChange: setCreatedBy,
    value: createdByValue,
    haveAll: true
  })));
};

module.exportDefault( /*#__PURE__*/memo(CannedResponsesFilter));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/cannedResponses/cb3a9cbc546421420dce1d7a66f94a11f9538da3.map
