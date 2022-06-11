function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/BusinessHoursMultiple.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Field, TextInput, ToggleSwitch, Box;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  ToggleSwitch(v) {
    ToggleSwitch = v;
  },

  Box(v) {
    Box = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let AutoCompleteDepartmentMultiple;
module.link("../../../../client/components/AutoCompleteDepartmentMultiple", {
  default(v) {
    AutoCompleteDepartmentMultiple = v;
  }

}, 2);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

const BusinessHoursMultiple = _ref => {
  let {
    values = {},
    handlers = {},
    className
  } = _ref;
  const t = useTranslation();
  const {
    active,
    name,
    departments
  } = values;
  const {
    handleActive,
    handleName,
    handleDepartments
  } = handlers;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Enabled')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: active,
    onChange: handleActive
  })))), /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Name'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: name,
    onChange: handleName,
    placeholder: t('Name')
  }))), /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Departments')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(AutoCompleteDepartmentMultiple, {
    value: departments,
    onChange: handleDepartments
  }))));
};

module.exportDefault(BusinessHoursMultiple);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/8a3e896851cd93d5aa09810c0a85fb145109a881.map
