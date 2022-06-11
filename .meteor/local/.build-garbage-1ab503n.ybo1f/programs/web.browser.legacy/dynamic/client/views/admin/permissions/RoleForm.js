function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/RoleForm.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Field, TextInput, Select, ToggleSwitch;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Field: function (v) {
    Field = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Select: function (v) {
    Select = v;
  },
  ToggleSwitch: function (v) {
    ToggleSwitch = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

var RoleForm = function (_ref) {
  var values = _ref.values,
      handlers = _ref.handlers,
      className = _ref.className,
      _ref$editing = _ref.editing,
      editing = _ref$editing === void 0 ? false : _ref$editing,
      _ref$isProtected = _ref.isProtected,
      isProtected = _ref$isProtected === void 0 ? false : _ref$isProtected;
  var t = useTranslation();
  var name = values.name,
      description = values.description,
      scope = values.scope,
      mandatory2fa = values.mandatory2fa;
  var handleName = handlers.handleName,
      handleDescription = handlers.handleDescription,
      handleScope = handlers.handleScope,
      handleMandatory2fa = handlers.handleMandatory2fa;
  var options = useMemo(function () {
    return [['Users', t('Global')], ['Subscriptions', t('Rooms')]];
  }, [t]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Role')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    disabled: editing,
    value: name,
    onChange: handleName,
    placeholder: t('Role')
  }))), /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Description')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: description,
    onChange: handleDescription,
    placeholder: t('Description')
  })), /*#__PURE__*/React.createElement(Field.Hint, null, 'Leave the description field blank if you dont want to show the role')), /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Scope')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    disabled: isProtected,
    options: options,
    value: scope,
    onChange: handleScope,
    placeholder: t('Scope')
  }))), /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Users must use Two Factor Authentication')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: mandatory2fa,
    onChange: handleMandatory2fa
  })))));
};

module.exportDefault(RoleForm);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/permissions/d9ce32ade241d918a673e9ef3634fa3273685c22.map
