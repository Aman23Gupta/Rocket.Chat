function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Info/EditRoomInfo/EditChannel.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["joinCodeRequired", "hideSysMes"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 1);
let Field, TextInput, PasswordInput, ToggleSwitch, MultiSelect, Accordion, Callout, NumberInput, FieldGroup, Button, ButtonGroup, Box, Icon, TextAreaInput;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  PasswordInput(v) {
    PasswordInput = v;
  },

  ToggleSwitch(v) {
    ToggleSwitch = v;
  },

  MultiSelect(v) {
    MultiSelect = v;
  },

  Accordion(v) {
    Accordion = v;
  },

  Callout(v) {
    Callout = v;
  },

  NumberInput(v) {
    NumberInput = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  },

  TextAreaInput(v) {
    TextAreaInput = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useCallback, useMemo, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 2);
let e2e;
module.link("../../../../../../app/e2e/client/rocketchat.e2e", {
  e2e(v) {
    e2e = v;
  }

}, 3);
let MessageTypesValues;
module.link("../../../../../../app/lib/lib/MessageTypes", {
  MessageTypesValues(v) {
    MessageTypesValues = v;
  }

}, 4);
let roomTypes, RoomSettingsEnum;
module.link("../../../../../../app/utils/client", {
  roomTypes(v) {
    roomTypes = v;
  },

  RoomSettingsEnum(v) {
    RoomSettingsEnum = v;
  }

}, 5);
let GenericModal;
module.link("../../../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 6);
let RawText;
module.link("../../../../../components/RawText", {
  default(v) {
    RawText = v;
  }

}, 7);
let VerticalBar;
module.link("../../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 8);
let RoomAvatarEditor;
module.link("../../../../../components/avatar/RoomAvatarEditor", {
  default(v) {
    RoomAvatarEditor = v;
  }

}, 9);
let usePermission, useAtLeastOnePermission, useRole;
module.link("../../../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  },

  useAtLeastOnePermission(v) {
    useAtLeastOnePermission = v;
  },

  useRole(v) {
    useRole = v;
  }

}, 10);
let useSetModal;
module.link("../../../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 11);
let useMethod;
module.link("../../../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 12);
let useSetting;
module.link("../../../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 13);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 14);
let useEndpointActionExperimental;
module.link("../../../../../hooks/useEndpointActionExperimental", {
  useEndpointActionExperimental(v) {
    useEndpointActionExperimental = v;
  }

}, 15);
let useForm;
module.link("../../../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 16);
const typeMap = {
  c: 'Channels',
  p: 'Groups',
  d: 'DMs'
};

const useInitialValues = (room, settings) => {
  const {
    t,
    ro,
    archived,
    topic,
    description,
    announcement,
    joinCodeRequired,
    sysMes,
    encrypted,
    retention = {}
  } = room;
  const {
    retentionPolicyEnabled,
    maxAgeDefault
  } = settings;
  const retentionEnabledDefault = useSetting("RetentionPolicy_AppliesTo".concat(typeMap[room.t]));
  const excludePinnedDefault = useSetting('RetentionPolicy_DoNotPrunePinned');
  const filesOnlyDefault = useSetting('RetentionPolicy_FilesOnly');
  return useMemo(() => {
    var _retention$enabled, _retention$excludePin, _retention$filesOnly;

    return _objectSpread({
      roomName: t === 'd' ? room.usernames.join(' x ') : roomTypes.getRoomName(t, _objectSpread({
        type: t
      }, room)),
      roomType: t,
      readOnly: !!ro,
      reactWhenReadOnly: false,
      archived: !!archived,
      roomTopic: topic !== null && topic !== void 0 ? topic : '',
      roomDescription: description !== null && description !== void 0 ? description : '',
      roomAnnouncement: announcement !== null && announcement !== void 0 ? announcement : '',
      roomAvatar: undefined,
      joinCode: '',
      joinCodeRequired: !!joinCodeRequired,
      systemMessages: Array.isArray(sysMes) ? sysMes : [],
      hideSysMes: !!(sysMes !== null && sysMes !== void 0 && sysMes.length),
      encrypted
    }, retentionPolicyEnabled && {
      retentionEnabled: (_retention$enabled = retention.enabled) !== null && _retention$enabled !== void 0 ? _retention$enabled : retentionEnabledDefault,
      retentionOverrideGlobal: !!retention.overrideGlobal,
      retentionMaxAge: Math.min(retention.maxAge, maxAgeDefault) || maxAgeDefault,
      retentionExcludePinned: (_retention$excludePin = retention.excludePinned) !== null && _retention$excludePin !== void 0 ? _retention$excludePin : excludePinnedDefault,
      retentionFilesOnly: (_retention$filesOnly = retention.filesOnly) !== null && _retention$filesOnly !== void 0 ? _retention$filesOnly : filesOnlyDefault
    });
  }, [announcement, archived, description, excludePinnedDefault, filesOnlyDefault, joinCodeRequired, maxAgeDefault, retention.enabled, retention.excludePinned, retention.filesOnly, retention.maxAge, retention.overrideGlobal, retentionEnabledDefault, retentionPolicyEnabled, ro, room, sysMes, t, topic, encrypted]);
};

const getCanChangeType = (room, canCreateChannel, canCreateGroup, isAdmin) => (!room.default || isAdmin) && (room.t === 'p' && canCreateChannel || room.t === 'c' && canCreateGroup);

function EditChannel(_ref) {
  let {
    room,
    onClickClose,
    onClickBack
  } = _ref;
  const t = useTranslation();
  const setModal = useSetModal();
  const retentionPolicyEnabled = useSetting('RetentionPolicy_Enabled');
  const maxAgeDefault = useSetting("RetentionPolicy_MaxAge_".concat(typeMap[room.t])) || 30;
  const saveData = useRef({});
  const onChange = useCallback(_ref2 => {
    let {
      initialValue,
      value,
      key
    } = _ref2;
    const {
      current
    } = saveData;

    if (JSON.stringify(initialValue) !== JSON.stringify(value)) {
      if (key === 'systemMessages' && (value === null || value === void 0 ? void 0 : value.length) > 0) {
        current.hideSysMes = true;
      }

      current[key] = value;
    } else {
      delete current[key];
    }
  }, []);
  const {
    values,
    handlers,
    hasUnsavedChanges,
    reset,
    commit
  } = useForm(useInitialValues(room, {
    retentionPolicyEnabled,
    maxAgeDefault
  }), onChange);
  const sysMesOptions = useMemo(() => MessageTypesValues.map(_ref3 => {
    let {
      key,
      i18nLabel
    } = _ref3;
    return [key, t(i18nLabel)];
  }), [t]);
  const {
    roomName,
    roomType,
    readOnly,
    encrypted,
    roomAvatar,
    archived,
    roomTopic,
    roomDescription,
    roomAnnouncement,
    reactWhenReadOnly,
    joinCode,
    joinCodeRequired,
    systemMessages,
    hideSysMes,
    retentionEnabled,
    retentionOverrideGlobal,
    retentionMaxAge,
    retentionExcludePinned,
    retentionFilesOnly
  } = values;
  const {
    handleJoinCode,
    handleJoinCodeRequired,
    handleSystemMessages,
    handleEncrypted,
    handleHideSysMes,
    handleRoomName,
    handleReadOnly,
    handleArchived,
    handleRoomAvatar,
    handleReactWhenReadOnly,
    handleRoomType,
    handleRoomTopic,
    handleRoomDescription,
    handleRoomAnnouncement,
    handleRetentionEnabled,
    handleRetentionOverrideGlobal,
    handleRetentionMaxAge,
    handleRetentionExcludePinned,
    handleRetentionFilesOnly
  } = handlers;
  const [canViewName, canViewTopic, canViewAnnouncement, canViewArchived, canViewDescription, canViewType, canViewReadOnly, canViewHideSysMes, canViewJoinCode, canViewReactWhenReadOnly, canViewEncrypted] = useMemo(() => {
    var _roomTypes$getConfig;

    const isAllowed = ((_roomTypes$getConfig = roomTypes.getConfig(room.t)) === null || _roomTypes$getConfig === void 0 ? void 0 : _roomTypes$getConfig.allowRoomSettingChange) || (() => {});

    return [isAllowed(room, RoomSettingsEnum.NAME), isAllowed(room, RoomSettingsEnum.TOPIC), isAllowed(room, RoomSettingsEnum.ANNOUNCEMENT), isAllowed(room, RoomSettingsEnum.ARCHIVE_OR_UNARCHIVE), isAllowed(room, RoomSettingsEnum.DESCRIPTION), isAllowed(room, RoomSettingsEnum.TYPE), isAllowed(room, RoomSettingsEnum.READ_ONLY), isAllowed(room, RoomSettingsEnum.SYSTEM_MESSAGES), isAllowed(room, RoomSettingsEnum.JOIN_CODE), isAllowed(room, RoomSettingsEnum.REACT_WHEN_READ_ONLY), isAllowed(room, RoomSettingsEnum.E2E)];
  }, [room]);
  const isAdmin = useRole('admin');
  const canCreateChannel = usePermission('create-c');
  const canCreateGroup = usePermission('create-p');
  const canChangeType = getCanChangeType(room, canCreateChannel, canCreateGroup, isAdmin);
  const canSetRo = usePermission('set-readonly', room._id);
  const canSetReactWhenRo = usePermission('set-react-when-readonly', room._id);
  const canEditRoomRetentionPolicy = usePermission('edit-room-retention-policy', room._id);
  const canArchiveOrUnarchive = useAtLeastOnePermission(useMemo(() => ['archive-room', 'unarchive-room'], []), room._id);
  const canDelete = usePermission("delete-".concat(room.t));
  const canToggleEncryption = usePermission('toggle-room-e2e-encryption', room._id) && (room.encrypted || e2e.isReady());
  const changeArchivation = archived !== !!room.archived;
  const archiveSelector = room.archived ? 'unarchive' : 'archive';
  const archiveMessage = room.archived ? 'Room_has_been_unarchived' : 'Room_has_been_archived';
  const saveAction = useEndpointActionExperimental('POST', 'rooms.saveRoomSettings', t('Room_updated_successfully'));
  const archiveAction = useEndpointActionExperimental('POST', 'rooms.changeArchivationState', t(archiveMessage));
  const handleSave = useMutableCallback(async () => {
    const _saveData$current = saveData.current,
          {
      joinCodeRequired,
      hideSysMes
    } = _saveData$current,
          data = _objectWithoutProperties(_saveData$current, _excluded);

    delete data.archived;

    const save = () => saveAction(_objectSpread(_objectSpread(_objectSpread({
      rid: room._id
    }, data), joinCode && {
      joinCode: joinCodeRequired ? joinCode : ''
    }), (data.systemMessages || !hideSysMes) && {
      systemMessages: hideSysMes && systemMessages
    }));

    const archive = () => archiveAction({
      rid: room._id,
      action: archiveSelector
    });

    await Promise.all([hasUnsavedChanges && save(), changeArchivation && archive()].filter(Boolean));
    saveData.current = {};
    commit();
  });
  const deleteRoom = useMethod('eraseRoom');
  const handleDelete = useMutableCallback(() => {
    const onCancel = () => setModal(undefined);

    const onConfirm = async () => {
      await deleteRoom(room._id);
      onCancel();
    };

    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: onConfirm,
      onCancel: onCancel,
      confirmText: t('Yes_delete_it')
    }, t('Delete_Room_Warning')));
  });
  const changeRoomType = useMutableCallback(() => {
    handleRoomType(roomType === 'p' ? 'c' : 'p');
  });
  const onChangeMaxAge = useMutableCallback(e => {
    handleRetentionMaxAge(Math.max(1, Number(e.currentTarget.value)));
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, onClickBack && /*#__PURE__*/React.createElement(VerticalBar.Back, {
    onClick: onClickBack
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('edit-room')), onClickClose && /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: onClickClose
  })), /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, {
    p: "x24",
    is: "form",
    onSubmit: useMutableCallback(e => e.preventDefault())
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(RoomAvatarEditor, {
    room: room,
    roomAvatar: roomAvatar,
    onChangeAvatar: handleRoomAvatar
  })), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Name')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    disabled: !canViewName,
    value: roomName,
    onChange: handleRoomName,
    flexGrow: 1
  }))), canViewDescription && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Description')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    rows: 4,
    value: roomDescription,
    onChange: handleRoomDescription,
    flexGrow: 1
  }))), canViewAnnouncement && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Announcement')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    rows: 4,
    value: roomAnnouncement,
    onChange: handleRoomAnnouncement,
    flexGrow: 1
  }))), canViewTopic && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Topic')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    rows: 4,
    value: roomTopic,
    onChange: handleRoomTopic,
    flexGrow: 1
  }))), canViewType && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Private')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    disabled: !canChangeType,
    checked: roomType === 'p',
    onChange: changeRoomType
  }))), /*#__PURE__*/React.createElement(Field.Hint, null, t('Teams_New_Private_Description_Enabled'))), canViewReadOnly && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Read_only')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    disabled: !canSetRo,
    checked: readOnly,
    onChange: handleReadOnly
  }))), /*#__PURE__*/React.createElement(Field.Hint, null, t('Only_authorized_users_can_write_new_messages'))), canViewReactWhenReadOnly && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('React_when_read_only')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    disabled: !canSetReactWhenRo,
    checked: reactWhenReadOnly,
    onChange: handleReactWhenReadOnly
  }))), /*#__PURE__*/React.createElement(Field.Hint, null, t('Only_authorized_users_can_react_to_messages'))), canViewArchived && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Room_archivation_state_true')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    disabled: !canArchiveOrUnarchive,
    checked: archived,
    onChange: handleArchived
  })))), canViewJoinCode && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Password_to_access')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: joinCodeRequired,
    onChange: handleJoinCodeRequired
  }))), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(PasswordInput, {
    disabled: !joinCodeRequired,
    value: joinCode,
    onChange: handleJoinCode,
    placeholder: t('Reset_password'),
    flexGrow: 1
  }))), canViewHideSysMes && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Hide_System_Messages')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: hideSysMes,
    onChange: handleHideSysMes
  }))), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(MultiSelect, {
    maxWidth: "100%",
    options: sysMesOptions,
    disabled: !hideSysMes,
    value: systemMessages,
    onChange: handleSystemMessages,
    placeholder: t('Select_an_option'),
    flexGrow: 1
  }))), canViewEncrypted && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Encrypted')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    disabled: !canToggleEncryption,
    checked: encrypted,
    onChange: handleEncrypted
  })))), retentionPolicyEnabled && /*#__PURE__*/React.createElement(Accordion, null, /*#__PURE__*/React.createElement(Accordion.Item, {
    title: t('Prune')
  }, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('RetentionPolicyRoom_Enabled')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: retentionEnabled,
    onChange: handleRetentionEnabled
  })))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('RetentionPolicyRoom_OverrideGlobal')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    disabled: !retentionEnabled || !canEditRoomRetentionPolicy,
    checked: retentionOverrideGlobal,
    onChange: handleRetentionOverrideGlobal
  })))), retentionOverrideGlobal && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Callout, {
    type: "danger"
  }, /*#__PURE__*/React.createElement(RawText, null, t('RetentionPolicyRoom_ReadTheDocs'))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('RetentionPolicyRoom_MaxAge', {
    max: maxAgeDefault
  })), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(NumberInput, {
    value: retentionMaxAge,
    onChange: onChangeMaxAge,
    flexGrow: 1
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('RetentionPolicyRoom_ExcludePinned')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: retentionExcludePinned,
    onChange: handleRetentionExcludePinned
  })))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('RetentionPolicyRoom_FilesOnly')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: retentionFilesOnly,
    onChange: handleRetentionFilesOnly
  })))))))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    w: "full"
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true,
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Button, {
    type: "reset",
    disabled: !hasUnsavedChanges,
    onClick: reset
  }, t('Reset')), /*#__PURE__*/React.createElement(Button, {
    flexGrow: 1,
    disabled: !hasUnsavedChanges,
    onClick: handleSave
  }, t('Save')))))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Button, {
    flexGrow: 1,
    primary: true,
    danger: true,
    disabled: !canDelete,
    onClick: handleDelete
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: "x16"
  }), t('Delete'))))));
}

module.exportDefault(EditChannel);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Info/EditRoomInfo/7038cd97761373561d23a6992738e1932c024794.map
