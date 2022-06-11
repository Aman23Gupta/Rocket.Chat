function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/RoleForm.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Field, TextInput, Select, ToggleSwitch;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Field(v) {
    Field = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Select(v) {
    Select = v;
  },

  ToggleSwitch(v) {
    ToggleSwitch = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);

const RoleForm = _ref => {
  let {
    values,
    handlers,
    className,
    editing = false,
    isProtected = false
  } = _ref;
  const t = useTranslation();
  const {
    name,
    description,
    scope,
    mandatory2fa
  } = values;
  const {
    handleName,
    handleDescription,
    handleScope,
    handleMandatory2fa
  } = handlers;
  const options = useMemo(() => [['Users', t('Global')], ['Subscriptions', t('Rooms')]], [t]);
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
//# sourceMappingURL=/dynamic/client/views/admin/permissions/1162ac66825b545fb7db50368d8b115e1695a385.map
