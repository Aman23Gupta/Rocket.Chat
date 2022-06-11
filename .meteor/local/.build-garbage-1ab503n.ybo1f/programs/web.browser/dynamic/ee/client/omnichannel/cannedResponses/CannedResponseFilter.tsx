function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/cannedResponses/CannedResponseFilter.tsx                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["sharingValue", "createdByValue", "shortcutValue", "setSharing", "setCreatedBy", "setShortcut"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Box, Icon, TextInput, Select;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Select(v) {
    Select = v;
  }

}, 0);
let React, memo, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let AutoCompleteAgent;
module.link("../../../../client/components/AutoCompleteAgent", {
  default(v) {
    AutoCompleteAgent = v;
  }

}, 2);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

const CannedResponsesFilter = _ref => {
  let {
    sharingValue = '',
    createdByValue = '',
    shortcutValue = '',
    setSharing,
    setCreatedBy,
    setShortcut
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const sharingList = [['', t('All')], ['user', t('Private')], ['global', t('Public')], ['department', t('Department')]];
  const handleFormSubmit = useCallback(event => {
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/cannedResponses/1c5bb231cce4677662d83fa7fedbf45545b33ecf.map
