function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/CreateChannel.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Modal, ButtonGroup, Button, TextInput, Icon, Field, ToggleSwitch, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Modal(v) {
    Modal = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Icon(v) {
    Icon = v;
  },

  Field(v) {
    Field = v;
  },

  ToggleSwitch(v) {
    ToggleSwitch = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  }

}, 0);
let useDebouncedCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedCallback(v) {
    useDebouncedCallback = v;
  }

}, 1);
let React, useEffect, useMemo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let UserAutoCompleteMultiple;
module.link("../../components/UserAutoCompleteMultiple", {
  default(v) {
    UserAutoCompleteMultiple = v;
  }

}, 3);
let useMethod;
module.link("../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 4);
let useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 5);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);

const CreateChannel = _ref => {
  let {
    values,
    handlers,
    hasUnsavedChanges,
    onChangeUsers,
    onChangeType,
    onChangeBroadcast,
    canOnlyCreateOneType,
    e2eEnabledForPrivateByDefault,
    onCreate,
    onClose
  } = _ref;
  const t = useTranslation();
  const e2eEnabled = useSetting('E2E_Enable');
  const namesValidation = useSetting('UTF8_Channel_Names_Validation');
  const allowSpecialNames = useSetting('UI_Allow_room_names_with_special_chars');
  const channelNameExists = useMethod('roomNameExists');
  const channelNameRegex = useMemo(() => new RegExp("^".concat(namesValidation, "$")), [namesValidation]);
  const [nameError, setNameError] = useState();
  const checkName = useDebouncedCallback(async name => {
    setNameError(false);

    if (hasUnsavedChanges) {
      return;
    }

    if (!name || name.length === 0) {
      return setNameError(t('Field_required'));
    }

    if (!allowSpecialNames && !channelNameRegex.test(name)) {
      return setNameError(t('error-invalid-name'));
    }

    const isNotAvailable = await channelNameExists(name);

    if (isNotAvailable) {
      return setNameError(t('Channel_already_exist', name));
    }
  }, 100, [channelNameRegex]);
  useEffect(() => {
    checkName(values.name);
  }, [checkName, values.name]);
  const e2edisabled = useMemo(() => !values.type || values.broadcast || !e2eEnabled || e2eEnabledForPrivateByDefault, [e2eEnabled, e2eEnabledForPrivateByDefault, values.broadcast, values.type]);
  const canSave = useMemo(() => hasUnsavedChanges && !nameError, [hasUnsavedChanges, nameError]);
  return /*#__PURE__*/React.createElement(Modal, null, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, t('Create_channel')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Name')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    error: hasUnsavedChanges ? nameError : undefined,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: values.type ? 'lock' : 'hash',
      size: "x20"
    }),
    placeholder: t('Channel_name'),
    onChange: handlers.handleName
  })), hasUnsavedChanges && nameError && /*#__PURE__*/React.createElement(Field.Error, null, nameError)), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Topic'), ' ', /*#__PURE__*/React.createElement(Box, {
    is: "span",
    color: "neutral-600"
  }, "(", t('optional'), ")")), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: t('Channel_what_is_this_channel_about'),
    onChange: handlers.handleDescription
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    width: "full"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Private')), /*#__PURE__*/React.createElement(Field.Description, null, values.type ? t('Only_invited_users_can_acess_this_channel') : t('Everyone_can_access_this_channel'))), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: values.type,
    disabled: !!canOnlyCreateOneType,
    onChange: onChangeType
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    width: "full"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Read_only')), /*#__PURE__*/React.createElement(Field.Description, null, values.readOnly ? t('Only_authorized_users_can_write_new_messages') : t('All_users_in_the_channel_can_write_new_messages'))), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: values.readOnly,
    disabled: values.broadcast,
    onChange: handlers.handleReadOnly
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    width: "full"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Encrypted')), /*#__PURE__*/React.createElement(Field.Description, null, values.type ? t('Encrypted_channel_Description') : t('Encrypted_not_available'))), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: values.encrypted,
    disabled: e2edisabled,
    onChange: handlers.handleEncrypted
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    width: "full"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Broadcast')), /*#__PURE__*/React.createElement(Field.Description, null, t('Broadcast_channel_Description'))), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: values.broadcast,
    onChange: onChangeBroadcast
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, "".concat(t('Add_members'), " (").concat(t('optional'), ")")), /*#__PURE__*/React.createElement(UserAutoCompleteMultiple, {
    value: values.users,
    onChange: onChangeUsers
  })))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onClose
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    disabled: !canSave,
    onClick: onCreate,
    primary: true
  }, t('Create')))));
};

module.exportDefault(CreateChannel);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/header/bff60c8a335cf4d38bbd58340504a1bf235508b3.map
