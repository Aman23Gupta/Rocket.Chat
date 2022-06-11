function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/BusinessHoursMultiple.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Field, TextInput, ToggleSwitch, Box;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  ToggleSwitch: function (v) {
    ToggleSwitch = v;
  },
  Box: function (v) {
    Box = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var AutoCompleteDepartmentMultiple;
module.link("../../../../client/components/AutoCompleteDepartmentMultiple", {
  "default": function (v) {
    AutoCompleteDepartmentMultiple = v;
  }
}, 2);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

var BusinessHoursMultiple = function (_ref) {
  var _ref$values = _ref.values,
      values = _ref$values === void 0 ? {} : _ref$values,
      _ref$handlers = _ref.handlers,
      handlers = _ref$handlers === void 0 ? {} : _ref$handlers,
      className = _ref.className;
  var t = useTranslation();
  var active = values.active,
      name = values.name,
      departments = values.departments;
  var handleActive = handlers.handleActive,
      handleName = handlers.handleName,
      handleDepartments = handlers.handleDepartments;
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/a7c07c37227157c634841277742e5ad044ce3c56.map
