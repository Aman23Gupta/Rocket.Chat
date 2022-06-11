function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/CreateTeamModal/CreateTeamModal.tsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Modal, ButtonGroup, Button, TextInput, Field, ToggleSwitch, FieldGroup;
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
let useMutableCallback, useDebouncedCallback, useAutoFocus;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  },

  useDebouncedCallback(v) {
    useDebouncedCallback = v;
  },

  useAutoFocus(v) {
    useAutoFocus = v;
  }

}, 1);
let React, memo, useCallback, useEffect, useMemo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useCallback(v) {
    useCallback = v;
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
let usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 3);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 4);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 5);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let useEndpointActionExperimental;
module.link("../../../hooks/useEndpointActionExperimental", {
  useEndpointActionExperimental(v) {
    useEndpointActionExperimental = v;
  }

}, 7);
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 8);
let goToRoomById;
module.link("../../../lib/utils/goToRoomById", {
  goToRoomById(v) {
    goToRoomById = v;
  }

}, 9);
let TeamNameInput;
module.link("./TeamNameInput", {
  default(v) {
    TeamNameInput = v;
  }

}, 10);
let UsersInput;
module.link("./UsersInput", {
  default(v) {
    UsersInput = v;
  }

}, 11);

const useCreateTeamModalState = onClose => {
  const e2eEnabled = useSetting('E2E_Enable');
  const e2eEnabledForPrivateByDefault = useSetting('E2E_Enabled_Default_PrivateRooms');
  const namesValidation = useSetting('UTF8_Channel_Names_Validation');
  const allowSpecialNames = useSetting('UI_Allow_room_names_with_special_chars');
  const {
    values,
    handlers,
    hasUnsavedChanges
  } = useForm({
    members: [],
    name: '',
    description: '',
    type: true,
    readOnly: false,
    encrypted: e2eEnabledForPrivateByDefault !== null && e2eEnabledForPrivateByDefault !== void 0 ? e2eEnabledForPrivateByDefault : false,
    broadcast: false
  });
  const {
    name,
    description,
    type,
    readOnly,
    broadcast,
    encrypted,
    members
  } = values;
  const {
    handleMembers,
    handleEncrypted,
    handleType,
    handleBroadcast,
    handleReadOnly
  } = handlers;
  const t = useTranslation();
  const teamNameRegex = useMemo(() => {
    if (allowSpecialNames) {
      return null;
    }

    return new RegExp("^".concat(namesValidation, "$"));
  }, [allowSpecialNames, namesValidation]);
  const [nameError, setNameError] = useState();
  const teamNameExists = useMethod('roomNameExists');
  const checkName = useDebouncedCallback(async name => {
    setNameError(undefined);

    if (!hasUnsavedChanges) {
      return;
    }

    if (!name || name.length === 0) {
      setNameError(t('Field_required'));
      return;
    }

    if (teamNameRegex && !teamNameRegex.test(name)) {
      setNameError(t('error-invalid-name'));
      return;
    }

    const isNotAvailable = await teamNameExists(name);

    if (isNotAvailable) {
      setNameError(t('Teams_Errors_team_name', {
        name
      }));
    }
  }, 230, [name]);
  useEffect(() => {
    checkName(name);
  }, [checkName, name]);
  const canChangeReadOnly = !broadcast;
  const canChangeEncrypted = type && !broadcast && e2eEnabled && !e2eEnabledForPrivateByDefault;
  const onChangeName = handlers.handleName;
  const onChangeDescription = handlers.handleDescription;
  const onChangeType = useMutableCallback(value => {
    handleEncrypted(!value);
    return handleType(value);
  });
  const onChangeReadOnly = handlers.handleReadOnly;
  const onChangeEncrypted = handlers.handleEncrypted;
  const onChangeBroadcast = useCallback(value => {
    handleEncrypted(!value);
    handleReadOnly(value);
    return handleBroadcast(value);
  }, [handleBroadcast, handleEncrypted, handleReadOnly]);
  const onChangeMembers = useCallback((value, action) => {
    if (!action) {
      if (members.includes(value)) {
        return;
      }

      return handleMembers([...members, value]);
    }

    handleMembers(members.filter(current => current !== value));
  }, [handleMembers, members]);
  const canSave = hasUnsavedChanges && !nameError;
  const canCreateTeam = usePermission('create-team');
  const isCreateButtonEnabled = canSave && canCreateTeam;
  const createTeam = useEndpointActionExperimental('POST', 'teams.create');
  const onCreate = useCallback(async () => {
    const params = {
      name,
      members,
      type: type ? 1 : 0,
      room: {
        readOnly,
        extraData: {
          description,
          broadcast,
          encrypted
        }
      }
    };
    const data = await createTeam(params);
    goToRoomById(data.team.roomId);
    onClose();
  }, [name, members, type, readOnly, description, broadcast, encrypted, createTeam, onClose]);
  return {
    name,
    nameError,
    onChangeName,
    description,
    onChangeDescription,
    type,
    onChangeType,
    readOnly,
    canChangeReadOnly,
    onChangeReadOnly,
    encrypted,
    canChangeEncrypted,
    onChangeEncrypted,
    broadcast,
    onChangeBroadcast,
    members,
    onChangeMembers,
    hasUnsavedChanges,
    isCreateButtonEnabled,
    onCreate
  };
};

const CreateTeamModal = _ref => {
  let {
    onClose
  } = _ref;
  const {
    name,
    nameError,
    onChangeName,
    description,
    onChangeDescription,
    type,
    onChangeType,
    readOnly,
    canChangeReadOnly,
    onChangeReadOnly,
    encrypted,
    canChangeEncrypted,
    onChangeEncrypted,
    broadcast,
    onChangeBroadcast,
    members,
    onChangeMembers,
    hasUnsavedChanges,
    isCreateButtonEnabled,
    onCreate
  } = useCreateTeamModalState(onClose);
  const t = useTranslation();
  const focusRef = useAutoFocus();
  return /*#__PURE__*/React.createElement(Modal, null, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, t('Teams_New_Title')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Teams_New_Name_Label')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TeamNameInput, {
    ref: focusRef,
    private: type,
    error: hasUnsavedChanges ? nameError : undefined,
    value: name,
    onChange: onChangeName
  })), hasUnsavedChanges && nameError && /*#__PURE__*/React.createElement(Field.Error, null, nameError)), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Teams_New_Description_Label'), ' ', /*#__PURE__*/React.createElement(Box, {
    is: "span",
    color: "neutral-600"
  }, "(", t('optional'), ")")), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: t('Teams_New_Description_Placeholder'),
    value: description,
    onChange: onChangeDescription
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    width: "full"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Teams_New_Private_Label')), /*#__PURE__*/React.createElement(Field.Description, null, type ? t('Teams_New_Private_Description_Enabled') : t('Teams_New_Private_Description_Disabled'))), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: type,
    onChange: onChangeType
  }))), /*#__PURE__*/React.createElement(Field, {
    disabled: !canChangeReadOnly
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    width: "full"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Teams_New_Read_only_Label')), /*#__PURE__*/React.createElement(Field.Description, null, readOnly ? t('Only_authorized_users_can_write_new_messages') : t('Teams_New_Read_only_Description'))), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: readOnly,
    disabled: !canChangeReadOnly,
    onChange: onChangeReadOnly
  }))), /*#__PURE__*/React.createElement(Field, {
    disabled: !canChangeEncrypted
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    width: "full"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Teams_New_Encrypted_Label')), /*#__PURE__*/React.createElement(Field.Description, null, type ? t('Teams_New_Encrypted_Description_Enabled') : t('Teams_New_Encrypted_Description_Disabled'))), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: encrypted,
    disabled: !canChangeEncrypted,
    onChange: onChangeEncrypted
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    width: "full"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Teams_New_Broadcast_Label')), /*#__PURE__*/React.createElement(Field.Description, null, t('Teams_New_Broadcast_Description'))), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: broadcast,
    onChange: onChangeBroadcast
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Teams_New_Add_members_Label'), ' ', /*#__PURE__*/React.createElement(Box, {
    is: "span",
    color: "neutral-600"
  }, "(", t('optional'), ")")), /*#__PURE__*/React.createElement(UsersInput, {
    value: members,
    onChange: onChangeMembers
  })))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onClose
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    disabled: !isCreateButtonEnabled,
    onClick: onCreate,
    primary: true
  }, t('Create')))));
};

module.exportDefault( /*#__PURE__*/memo(CreateTeamModal));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/CreateTeamModal/2547cc7939e0b1281d53b2a18dab00af8873729b.map
