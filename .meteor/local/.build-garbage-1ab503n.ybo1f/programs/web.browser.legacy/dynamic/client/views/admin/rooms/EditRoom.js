function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/rooms/EditRoom.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 2);
var Box, Button, ButtonGroup, TextInput, Field, ToggleSwitch, Icon, Callout, TextAreaInput;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Field: function (v) {
    Field = v;
  },
  ToggleSwitch: function (v) {
    ToggleSwitch = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Callout: function (v) {
    Callout = v;
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
var React, useState, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 2);
var roomTypes, RoomSettingsEnum;
module.link("../../../../app/utils/client", {
  roomTypes: function (v) {
    roomTypes = v;
  },
  RoomSettingsEnum: function (v) {
    RoomSettingsEnum = v;
  }
}, 3);
var GenericModal;
module.link("../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 4);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 5);
var RoomAvatarEditor;
module.link("../../../components/avatar/RoomAvatarEditor", {
  "default": function (v) {
    RoomAvatarEditor = v;
  }
}, 6);
var usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 7);
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 8);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 9);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 10);
var useEndpointActionExperimental;
module.link("../../../hooks/useEndpointActionExperimental", {
  useEndpointActionExperimental: function (v) {
    useEndpointActionExperimental = v;
  }
}, 11);
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 12);

var getInitialValues = function (room) {
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

  var room = _ref.room,
      onChange = _ref.onChange;
  var t = useTranslation();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      deleted = _useState2[0],
      setDeleted = _useState2[1];

  var setModal = useSetModal();

  var _useForm = useForm(getInitialValues(room)),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges,
      reset = _useForm.reset;

  var _useMemo = useMemo(function () {
    var isAllowed = roomTypes.getConfig(room.t).allowRoomSettingChange;
    return [isAllowed(room, RoomSettingsEnum.NAME), isAllowed(room, RoomSettingsEnum.TOPIC), isAllowed(room, RoomSettingsEnum.ANNOUNCEMENT), isAllowed(room, RoomSettingsEnum.ARCHIVE_OR_UNARCHIVE), isAllowed(room, RoomSettingsEnum.DESCRIPTION), isAllowed(room, RoomSettingsEnum.TYPE), isAllowed(room, RoomSettingsEnum.READ_ONLY)];
  }, [room]),
      _useMemo2 = _slicedToArray(_useMemo, 7),
      canViewName = _useMemo2[0],
      canViewTopic = _useMemo2[1],
      canViewAnnouncement = _useMemo2[2],
      canViewArchived = _useMemo2[3],
      canViewDescription = _useMemo2[4],
      canViewType = _useMemo2[5],
      canViewReadOnly = _useMemo2[6];

  var roomName = values.roomName,
      roomType = values.roomType,
      readOnly = values.readOnly,
      archived = values.archived,
      isDefault = values.isDefault,
      favorite = values.favorite,
      featured = values.featured,
      roomTopic = values.roomTopic,
      roomAvatar = values.roomAvatar,
      roomDescription = values.roomDescription,
      roomAnnouncement = values.roomAnnouncement;
  var handleIsDefault = handlers.handleIsDefault,
      handleFavorite = handlers.handleFavorite,
      handleFeatured = handlers.handleFeatured,
      handleRoomName = handlers.handleRoomName,
      handleRoomType = handlers.handleRoomType,
      handleReadOnly = handlers.handleReadOnly,
      handleArchived = handlers.handleArchived,
      handleRoomAvatar = handlers.handleRoomAvatar,
      handleRoomTopic = handlers.handleRoomTopic,
      handleRoomDescription = handlers.handleRoomDescription,
      handleRoomAnnouncement = handlers.handleRoomAnnouncement;
  var changeArchivation = archived !== !!room.archived;
  var canDelete = usePermission("delete-" + room.t);
  var archiveSelector = room.archived ? 'unarchive' : 'archive';
  var archiveMessage = room.archived ? 'Room_has_been_unarchived' : 'Room_has_been_archived';
  var saveAction = useEndpointActionExperimental('POST', 'rooms.saveRoomSettings', t('Room_updated_successfully'));
  var archiveAction = useEndpointActionExperimental('POST', 'rooms.changeArchivationState', t(archiveMessage));
  var handleSave = useMutableCallback(function () {
    function _callee() {
      var save, archive;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                save = function () {
                  return saveAction({
                    rid: room._id,
                    roomName: roomType === 'd' ? undefined : roomName,
                    roomTopic: roomTopic,
                    roomType: roomType,
                    readOnly: readOnly,
                    "default": isDefault,
                    favorite: {
                      defaultValue: isDefault,
                      favorite: favorite
                    },
                    featured: featured,
                    roomDescription: roomDescription,
                    roomAnnouncement: roomAnnouncement,
                    roomAvatar: roomAvatar
                  });
                };

                archive = function () {
                  return archiveAction({
                    rid: room._id,
                    action: archiveSelector
                  });
                };

                _context.next = 4;
                return _regeneratorRuntime.awrap(Promise.all([hasUnsavedChanges && save(), changeArchivation && archive()].filter(Boolean)));

              case 4:
                onChange();

              case 5:
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
  var changeRoomType = useMutableCallback(function () {
    handleRoomType(roomType === 'p' ? 'c' : 'p');
  });
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
                  setDeleted(true);

                case 4:
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
  return /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, {
    is: "form",
    onSubmit: useMutableCallback(function (e) {
      return e.preventDefault();
    })
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
//# sourceMappingURL=/dynamic/client/views/admin/rooms/afe2a3ef61dd2e5bc717596ff2ec219644532e7d.map
