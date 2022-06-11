function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Info/EditRoomInfo/EditChannel.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["joinCodeRequired", "hideSysMes"];

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 3);
var Field, TextInput, PasswordInput, ToggleSwitch, MultiSelect, Accordion, Callout, NumberInput, FieldGroup, Button, ButtonGroup, Box, Icon, TextAreaInput;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  PasswordInput: function (v) {
    PasswordInput = v;
  },
  ToggleSwitch: function (v) {
    ToggleSwitch = v;
  },
  MultiSelect: function (v) {
    MultiSelect = v;
  },
  Accordion: function (v) {
    Accordion = v;
  },
  Callout: function (v) {
    Callout = v;
  },
  NumberInput: function (v) {
    NumberInput = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  TextAreaInput: function (v) {
    TextAreaInput = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useCallback, useMemo, useRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 2);
var e2e;
module.link("../../../../../../app/e2e/client/rocketchat.e2e", {
  e2e: function (v) {
    e2e = v;
  }
}, 3);
var MessageTypesValues;
module.link("../../../../../../app/lib/lib/MessageTypes", {
  MessageTypesValues: function (v) {
    MessageTypesValues = v;
  }
}, 4);
var roomTypes, RoomSettingsEnum;
module.link("../../../../../../app/utils/client", {
  roomTypes: function (v) {
    roomTypes = v;
  },
  RoomSettingsEnum: function (v) {
    RoomSettingsEnum = v;
  }
}, 5);
var GenericModal;
module.link("../../../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 6);
var RawText;
module.link("../../../../../components/RawText", {
  "default": function (v) {
    RawText = v;
  }
}, 7);
var VerticalBar;
module.link("../../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 8);
var RoomAvatarEditor;
module.link("../../../../../components/avatar/RoomAvatarEditor", {
  "default": function (v) {
    RoomAvatarEditor = v;
  }
}, 9);
var usePermission, useAtLeastOnePermission, useRole;
module.link("../../../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  },
  useAtLeastOnePermission: function (v) {
    useAtLeastOnePermission = v;
  },
  useRole: function (v) {
    useRole = v;
  }
}, 10);
var useSetModal;
module.link("../../../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 11);
var useMethod;
module.link("../../../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 12);
var useSetting;
module.link("../../../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 13);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 14);
var useEndpointActionExperimental;
module.link("../../../../../hooks/useEndpointActionExperimental", {
  useEndpointActionExperimental: function (v) {
    useEndpointActionExperimental = v;
  }
}, 15);
var useForm;
module.link("../../../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 16);
var typeMap = {
  c: 'Channels',
  p: 'Groups',
  d: 'DMs'
};

var useInitialValues = function (room, settings) {
  var t = room.t,
      ro = room.ro,
      archived = room.archived,
      topic = room.topic,
      description = room.description,
      announcement = room.announcement,
      joinCodeRequired = room.joinCodeRequired,
      sysMes = room.sysMes,
      encrypted = room.encrypted,
      _room$retention = room.retention,
      retention = _room$retention === void 0 ? {} : _room$retention;
  var retentionPolicyEnabled = settings.retentionPolicyEnabled,
      maxAgeDefault = settings.maxAgeDefault;
  var retentionEnabledDefault = useSetting("RetentionPolicy_AppliesTo" + typeMap[room.t]);
  var excludePinnedDefault = useSetting('RetentionPolicy_DoNotPrunePinned');
  var filesOnlyDefault = useSetting('RetentionPolicy_FilesOnly');
  return useMemo(function () {
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
      encrypted: encrypted
    }, retentionPolicyEnabled && {
      retentionEnabled: (_retention$enabled = retention.enabled) !== null && _retention$enabled !== void 0 ? _retention$enabled : retentionEnabledDefault,
      retentionOverrideGlobal: !!retention.overrideGlobal,
      retentionMaxAge: Math.min(retention.maxAge, maxAgeDefault) || maxAgeDefault,
      retentionExcludePinned: (_retention$excludePin = retention.excludePinned) !== null && _retention$excludePin !== void 0 ? _retention$excludePin : excludePinnedDefault,
      retentionFilesOnly: (_retention$filesOnly = retention.filesOnly) !== null && _retention$filesOnly !== void 0 ? _retention$filesOnly : filesOnlyDefault
    });
  }, [announcement, archived, description, excludePinnedDefault, filesOnlyDefault, joinCodeRequired, maxAgeDefault, retention.enabled, retention.excludePinned, retention.filesOnly, retention.maxAge, retention.overrideGlobal, retentionEnabledDefault, retentionPolicyEnabled, ro, room, sysMes, t, topic, encrypted]);
};

var getCanChangeType = function (room, canCreateChannel, canCreateGroup, isAdmin) {
  return (!room.default || isAdmin) && (room.t === 'p' && canCreateChannel || room.t === 'c' && canCreateGroup);
};

function EditChannel(_ref) {
  var room = _ref.room,
      onClickClose = _ref.onClickClose,
      onClickBack = _ref.onClickBack;
  var t = useTranslation();
  var setModal = useSetModal();
  var retentionPolicyEnabled = useSetting('RetentionPolicy_Enabled');
  var maxAgeDefault = useSetting("RetentionPolicy_MaxAge_" + typeMap[room.t]) || 30;
  var saveData = useRef({});
  var onChange = useCallback(function (_ref2) {
    var initialValue = _ref2.initialValue,
        value = _ref2.value,
        key = _ref2.key;
    var current = saveData.current;

    if (JSON.stringify(initialValue) !== JSON.stringify(value)) {
      if (key === 'systemMessages' && (value === null || value === void 0 ? void 0 : value.length) > 0) {
        current.hideSysMes = true;
      }

      current[key] = value;
    } else {
      delete current[key];
    }
  }, []);

  var _useForm = useForm(useInitialValues(room, {
    retentionPolicyEnabled: retentionPolicyEnabled,
    maxAgeDefault: maxAgeDefault
  }), onChange),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges,
      reset = _useForm.reset,
      commit = _useForm.commit;

  var sysMesOptions = useMemo(function () {
    return MessageTypesValues.map(function (_ref3) {
      var key = _ref3.key,
          i18nLabel = _ref3.i18nLabel;
      return [key, t(i18nLabel)];
    });
  }, [t]);
  var roomName = values.roomName,
      roomType = values.roomType,
      readOnly = values.readOnly,
      encrypted = values.encrypted,
      roomAvatar = values.roomAvatar,
      archived = values.archived,
      roomTopic = values.roomTopic,
      roomDescription = values.roomDescription,
      roomAnnouncement = values.roomAnnouncement,
      reactWhenReadOnly = values.reactWhenReadOnly,
      joinCode = values.joinCode,
      joinCodeRequired = values.joinCodeRequired,
      systemMessages = values.systemMessages,
      hideSysMes = values.hideSysMes,
      retentionEnabled = values.retentionEnabled,
      retentionOverrideGlobal = values.retentionOverrideGlobal,
      retentionMaxAge = values.retentionMaxAge,
      retentionExcludePinned = values.retentionExcludePinned,
      retentionFilesOnly = values.retentionFilesOnly;
  var handleJoinCode = handlers.handleJoinCode,
      handleJoinCodeRequired = handlers.handleJoinCodeRequired,
      handleSystemMessages = handlers.handleSystemMessages,
      handleEncrypted = handlers.handleEncrypted,
      handleHideSysMes = handlers.handleHideSysMes,
      handleRoomName = handlers.handleRoomName,
      handleReadOnly = handlers.handleReadOnly,
      handleArchived = handlers.handleArchived,
      handleRoomAvatar = handlers.handleRoomAvatar,
      handleReactWhenReadOnly = handlers.handleReactWhenReadOnly,
      handleRoomType = handlers.handleRoomType,
      handleRoomTopic = handlers.handleRoomTopic,
      handleRoomDescription = handlers.handleRoomDescription,
      handleRoomAnnouncement = handlers.handleRoomAnnouncement,
      handleRetentionEnabled = handlers.handleRetentionEnabled,
      handleRetentionOverrideGlobal = handlers.handleRetentionOverrideGlobal,
      handleRetentionMaxAge = handlers.handleRetentionMaxAge,
      handleRetentionExcludePinned = handlers.handleRetentionExcludePinned,
      handleRetentionFilesOnly = handlers.handleRetentionFilesOnly;

  var _useMemo = useMemo(function () {
    var _roomTypes$getConfig;

    var isAllowed = ((_roomTypes$getConfig = roomTypes.getConfig(room.t)) === null || _roomTypes$getConfig === void 0 ? void 0 : _roomTypes$getConfig.allowRoomSettingChange) || function () {};

    return [isAllowed(room, RoomSettingsEnum.NAME), isAllowed(room, RoomSettingsEnum.TOPIC), isAllowed(room, RoomSettingsEnum.ANNOUNCEMENT), isAllowed(room, RoomSettingsEnum.ARCHIVE_OR_UNARCHIVE), isAllowed(room, RoomSettingsEnum.DESCRIPTION), isAllowed(room, RoomSettingsEnum.TYPE), isAllowed(room, RoomSettingsEnum.READ_ONLY), isAllowed(room, RoomSettingsEnum.SYSTEM_MESSAGES), isAllowed(room, RoomSettingsEnum.JOIN_CODE), isAllowed(room, RoomSettingsEnum.REACT_WHEN_READ_ONLY), isAllowed(room, RoomSettingsEnum.E2E)];
  }, [room]),
      _useMemo2 = _slicedToArray(_useMemo, 11),
      canViewName = _useMemo2[0],
      canViewTopic = _useMemo2[1],
      canViewAnnouncement = _useMemo2[2],
      canViewArchived = _useMemo2[3],
      canViewDescription = _useMemo2[4],
      canViewType = _useMemo2[5],
      canViewReadOnly = _useMemo2[6],
      canViewHideSysMes = _useMemo2[7],
      canViewJoinCode = _useMemo2[8],
      canViewReactWhenReadOnly = _useMemo2[9],
      canViewEncrypted = _useMemo2[10];

  var isAdmin = useRole('admin');
  var canCreateChannel = usePermission('create-c');
  var canCreateGroup = usePermission('create-p');
  var canChangeType = getCanChangeType(room, canCreateChannel, canCreateGroup, isAdmin);
  var canSetRo = usePermission('set-readonly', room._id);
  var canSetReactWhenRo = usePermission('set-react-when-readonly', room._id);
  var canEditRoomRetentionPolicy = usePermission('edit-room-retention-policy', room._id);
  var canArchiveOrUnarchive = useAtLeastOnePermission(useMemo(function () {
    return ['archive-room', 'unarchive-room'];
  }, []), room._id);
  var canDelete = usePermission("delete-" + room.t);
  var canToggleEncryption = usePermission('toggle-room-e2e-encryption', room._id) && (room.encrypted || e2e.isReady());
  var changeArchivation = archived !== !!room.archived;
  var archiveSelector = room.archived ? 'unarchive' : 'archive';
  var archiveMessage = room.archived ? 'Room_has_been_unarchived' : 'Room_has_been_archived';
  var saveAction = useEndpointActionExperimental('POST', 'rooms.saveRoomSettings', t('Room_updated_successfully'));
  var archiveAction = useEndpointActionExperimental('POST', 'rooms.changeArchivationState', t(archiveMessage));
  var handleSave = useMutableCallback(function () {
    function _callee() {
      var _saveData$current, joinCodeRequired, hideSysMes, data, save, archive;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _saveData$current = saveData.current, joinCodeRequired = _saveData$current.joinCodeRequired, hideSysMes = _saveData$current.hideSysMes, data = _objectWithoutProperties(_saveData$current, _excluded);
                delete data.archived;

                save = function () {
                  return saveAction(_objectSpread(_objectSpread(_objectSpread({
                    rid: room._id
                  }, data), joinCode && {
                    joinCode: joinCodeRequired ? joinCode : ''
                  }), (data.systemMessages || !hideSysMes) && {
                    systemMessages: hideSysMes && systemMessages
                  }));
                };

                archive = function () {
                  return archiveAction({
                    rid: room._id,
                    action: archiveSelector
                  });
                };

                _context.next = 6;
                return _regeneratorRuntime.awrap(Promise.all([hasUnsavedChanges && save(), changeArchivation && archive()].filter(Boolean)));

              case 6:
                saveData.current = {};
                commit();

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }());
  var deleteRoom = useMethod('eraseRoom');
  var handleDelete = useMutableCallback(function () {
    var onCancel = function () {
      return setModal(undefined);
    };

    var onConfirm = function () {
      function _callee2() {
        return _regeneratorRuntime.async(function () {
          function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _regeneratorRuntime.awrap(deleteRoom(room._id));

                case 2:
                  onCancel();

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }

          return _callee2$;
        }(), null, null, null, Promise);
      }

      return _callee2;
    }();

    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: onConfirm,
      onCancel: onCancel,
      confirmText: t('Yes_delete_it')
    }, t('Delete_Room_Warning')));
  });
  var changeRoomType = useMutableCallback(function () {
    handleRoomType(roomType === 'p' ? 'c' : 'p');
  });
  var onChangeMaxAge = useMutableCallback(function (e) {
    handleRetentionMaxAge(Math.max(1, Number(e.currentTarget.value)));
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, onClickBack && /*#__PURE__*/React.createElement(VerticalBar.Back, {
    onClick: onClickBack
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('edit-room')), onClickClose && /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: onClickClose
  })), /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, {
    p: "x24",
    is: "form",
    onSubmit: useMutableCallback(function (e) {
      return e.preventDefault();
    })
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Info/EditRoomInfo/0a5754fbd77a46fd0821b6dd73c8dcabc0cd449f.map
