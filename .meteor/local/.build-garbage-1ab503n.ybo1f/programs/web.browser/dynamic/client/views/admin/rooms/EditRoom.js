function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/rooms/EditRoom.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Box, Button, ButtonGroup, TextInput, Field, ToggleSwitch, Icon, Callout, TextAreaInput;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
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

  Icon(v) {
    Icon = v;
  },

  Callout(v) {
    Callout = v;
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
let React, useState, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 2);
let roomTypes, RoomSettingsEnum;
module.link("../../../../app/utils/client", {
  roomTypes(v) {
    roomTypes = v;
  },

  RoomSettingsEnum(v) {
    RoomSettingsEnum = v;
  }

}, 3);
let GenericModal;
module.link("../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 4);
let VerticalBar;
module.link("../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 5);
let RoomAvatarEditor;
module.link("../../../components/avatar/RoomAvatarEditor", {
  default(v) {
    RoomAvatarEditor = v;
  }

}, 6);
let usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 7);
let useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 8);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 9);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 10);
let useEndpointActionExperimental;
module.link("../../../hooks/useEndpointActionExperimental", {
  useEndpointActionExperimental(v) {
    useEndpointActionExperimental = v;
  }

}, 11);
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 12);

const getInitialValues = room => {
  var _room$topic, _room$description, _room$announcement;

  return {
    roomName: room.t === 'd' ? room.usernames.join(' x ') : roomTypes.getRoomName(room.t, _objectSpread({
      type: room.t
    }, room)),
    roomType: room.t,
    readOnly: !!room.ro,
    archived: !!room.archived,
    isDefault: !!room.default,
    favorite: !!room.favorite,
    featured: !!room.featured,
    roomTopic: (_room$topic = room.topic) !== null && _room$topic !== void 0 ? _room$topic : '',
    roomDescription: (_room$description = room.description) !== null && _room$description !== void 0 ? _room$description : '',
    roomAnnouncement: (_room$announcement = room.announcement) !== null && _room$announcement !== void 0 ? _room$announcement : '',
    roomAvatar: undefined
  };
};

function EditRoom(_ref) {
  var _room$u;

  let {
    room,
    onChange
  } = _ref;
  const t = useTranslation();
  const [deleted, setDeleted] = useState(false);
  const setModal = useSetModal();
  const {
    values,
    handlers,
    hasUnsavedChanges,
    reset
  } = useForm(getInitialValues(room));
  const [canViewName, canViewTopic, canViewAnnouncement, canViewArchived, canViewDescription, canViewType, canViewReadOnly] = useMemo(() => {
    const isAllowed = roomTypes.getConfig(room.t).allowRoomSettingChange;
    return [isAllowed(room, RoomSettingsEnum.NAME), isAllowed(room, RoomSettingsEnum.TOPIC), isAllowed(room, RoomSettingsEnum.ANNOUNCEMENT), isAllowed(room, RoomSettingsEnum.ARCHIVE_OR_UNARCHIVE), isAllowed(room, RoomSettingsEnum.DESCRIPTION), isAllowed(room, RoomSettingsEnum.TYPE), isAllowed(room, RoomSettingsEnum.READ_ONLY)];
  }, [room]);
  const {
    roomName,
    roomType,
    readOnly,
    archived,
    isDefault,
    favorite,
    featured,
    roomTopic,
    roomAvatar,
    roomDescription,
    roomAnnouncement
  } = values;
  const {
    handleIsDefault,
    handleFavorite,
    handleFeatured,
    handleRoomName,
    handleRoomType,
    handleReadOnly,
    handleArchived,
    handleRoomAvatar,
    handleRoomTopic,
    handleRoomDescription,
    handleRoomAnnouncement
  } = handlers;
  const changeArchivation = archived !== !!room.archived;
  const canDelete = usePermission("delete-".concat(room.t));
  const archiveSelector = room.archived ? 'unarchive' : 'archive';
  const archiveMessage = room.archived ? 'Room_has_been_unarchived' : 'Room_has_been_archived';
  const saveAction = useEndpointActionExperimental('POST', 'rooms.saveRoomSettings', t('Room_updated_successfully'));
  const archiveAction = useEndpointActionExperimental('POST', 'rooms.changeArchivationState', t(archiveMessage));
  const handleSave = useMutableCallback(async () => {
    const save = () => saveAction({
      rid: room._id,
      roomName: roomType === 'd' ? undefined : roomName,
      roomTopic,
      roomType,
      readOnly,
      default: isDefault,
      favorite: {
        defaultValue: isDefault,
        favorite
      },
      featured,
      roomDescription,
      roomAnnouncement,
      roomAvatar
    });

    const archive = () => archiveAction({
      rid: room._id,
      action: archiveSelector
    });

    await Promise.all([hasUnsavedChanges && save(), changeArchivation && archive()].filter(Boolean));
    onChange();
  });
  const changeRoomType = useMutableCallback(() => {
    handleRoomType(roomType === 'p' ? 'c' : 'p');
  });
  const deleteRoom = useMethod('eraseRoom');
  const handleDelete = useMutableCallback(() => {
    const onCancel = () => setModal(undefined);

    const onConfirm = async () => {
      await deleteRoom(room._id);
      onCancel();
      setDeleted(true);
    };

    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: onConfirm,
      onCancel: onCancel,
      confirmText: t('Yes_delete_it')
    }, t('Delete_Room_Warning')));
  });
  return /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, {
    is: "form",
    onSubmit: useMutableCallback(e => e.preventDefault())
  }, deleted && /*#__PURE__*/React.createElement(Callout, {
    type: "danger",
    title: t('Room_has_been_deleted')
  }), room.t !== 'd' && /*#__PURE__*/React.createElement(Box, {
    pbe: "x24",
    display: "flex",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(RoomAvatarEditor, {
    roomAvatar: roomAvatar,
    room: room,
    onChangeAvatar: handleRoomAvatar
  })), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Name')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    disabled: deleted || !canViewName,
    value: roomName,
    onChange: handleRoomName,
    flexGrow: 1
  }))), room.t !== 'd' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Owner')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2"
  }, (_room$u = room.u) === null || _room$u === void 0 ? void 0 : _room$u.username))), canViewDescription && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Description')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    rows: 4,
    disabled: deleted,
    value: roomDescription,
    onChange: handleRoomDescription,
    flexGrow: 1
  }))), canViewAnnouncement && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Announcement')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    rows: 4,
    disabled: deleted,
    value: roomAnnouncement,
    onChange: handleRoomAnnouncement,
    flexGrow: 1
  }))), canViewTopic && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Topic')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    rows: 4,
    disabled: deleted,
    value: roomTopic,
    onChange: handleRoomTopic,
    flexGrow: 1
  }))), canViewType && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Private')), /*#__PURE__*/React.createElement(ToggleSwitch, {
    disabled: deleted,
    checked: roomType === 'p',
    onChange: changeRoomType
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Just_invited_people_can_access_this_channel'))), canViewReadOnly && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Read_only')), /*#__PURE__*/React.createElement(ToggleSwitch, {
    disabled: deleted,
    checked: readOnly,
    onChange: handleReadOnly
  }))), /*#__PURE__*/React.createElement(Field.Hint, null, t('Only_authorized_users_can_write_new_messages'))), canViewArchived && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Room_archivation_state_true')), /*#__PURE__*/React.createElement(ToggleSwitch, {
    disabled: deleted,
    checked: archived,
    onChange: handleArchived
  }))))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Default')), /*#__PURE__*/React.createElement(ToggleSwitch, {
    disabled: deleted,
    checked: isDefault,
    onChange: handleIsDefault
  })))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Favorite')), /*#__PURE__*/React.createElement(ToggleSwitch, {
    disabled: deleted,
    checked: favorite,
    onChange: handleFavorite
  })))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Featured')), /*#__PURE__*/React.createElement(ToggleSwitch, {
    disabled: deleted,
    checked: featured,
    onChange: handleFeatured
  })))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    w: "full"
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true,
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Button, {
    type: "reset",
    disabled: !hasUnsavedChanges || deleted,
    onClick: reset
  }, t('Reset')), /*#__PURE__*/React.createElement(Button, {
    flexGrow: 1,
    disabled: !hasUnsavedChanges || deleted,
    onClick: handleSave
  }, t('Save')))))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    flexGrow: 1,
    danger: true,
    disabled: deleted || !canDelete,
    onClick: handleDelete
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: "x16"
  }), t('Delete')))));
}

module.exportDefault(EditRoom);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/rooms/7d60ac2780759dd51698ccf26b0f96ae9fb7954d.map
