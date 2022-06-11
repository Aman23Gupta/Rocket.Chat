function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/channels/RoomActions.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["label"];

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 0);

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 1);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 2);
var Box, CheckBox, Menu, Option;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  CheckBox: function (v) {
    CheckBox = v;
  },
  Menu: function (v) {
    Menu = v;
  },
  Option: function (v) {
    Option = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 2);
var roomTypes;
module.link("../../../../../app/utils/client", {
  roomTypes: function (v) {
    roomTypes = v;
  }
}, 3);
var usePermission;
module.link("../../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 4);
var useSetModal;
module.link("../../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 5);
var useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 6);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var useEndpointActionExperimental;
module.link("../../../../hooks/useEndpointActionExperimental", {
  useEndpointActionExperimental: function (v) {
    useEndpointActionExperimental = v;
  }
}, 8);
var ConfirmationModal;
module.link("./ConfirmationModal", {
  "default": function (v) {
    ConfirmationModal = v;
  }
}, 9);

var useReactModal = function (Component, props) {
  var setModal = useSetModal();
  return useMutableCallback(function () {
    var handleClose = function () {
      setModal(null);
    };

    setModal(function () {
      return /*#__PURE__*/React.createElement(Component, _extends({
        onClose: handleClose
      }, props));
    });
  });
};

var RoomActions = function (_ref) {
  var room = _ref.room,
      reload = _ref.reload;
  var t = useTranslation();
  var rid = room._id;
  var type = room.t;
  var dispatchToastMessage = useToastMessageDispatch();
  var canDeleteTeamChannel = usePermission(type === 'c' ? 'delete-c' : 'delete-p', rid);
  var canEditTeamChannel = usePermission('edit-team-channel', rid);
  var canRemoveTeamChannel = usePermission('remove-team-channel', rid);
  var updateRoomEndpoint = useEndpointActionExperimental('POST', 'teams.updateRoom');
  var removeRoomEndpoint = useEndpointActionExperimental('POST', 'teams.removeRoom', t('Room_has_been_removed'));
  var deleteRoomEndpoint = useEndpointActionExperimental('POST', room.t === 'c' ? 'channels.delete' : 'groups.delete', t('Room_has_been_deleted'));
  var RemoveFromTeamAction = useReactModal(ConfirmationModal, {
    onConfirmAction: function () {
      function _callee() {
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _regeneratorRuntime.awrap(removeRoomEndpoint({
                    teamId: room.teamId,
                    roomId: room._id
                  }));

                case 3:
                  _context.next = 8;
                  break;

                case 5:
                  _context.prev = 5;
                  _context.t0 = _context["catch"](0);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context.t0
                  });

                case 8:
                  reload();

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, [[0, 5]], Promise);
      }

      return _callee;
    }(),
    labelButton: t('Remove'),
    content: /*#__PURE__*/React.createElement(Box, {
      is: "span",
      size: "14px"
    }, t('Team_Remove_from_team_modal_content', {
      teamName: roomTypes.getRoomName(room.t, room)
    }))
  });
  var DeleteChannelAction = useReactModal(ConfirmationModal, {
    onConfirmAction: function () {
      function _callee2() {
        return _regeneratorRuntime.async(function () {
          function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _regeneratorRuntime.awrap(deleteRoomEndpoint({
                    roomId: room._id
                  }));

                case 3:
                  _context2.next = 8;
                  break;

                case 5:
                  _context2.prev = 5;
                  _context2.t0 = _context2["catch"](0);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context2.t0
                  });

                case 8:
                  reload();

                case 9:
                case "end":
                  return _context2.stop();
              }
            }
          }

          return _callee2$;
        }(), null, null, [[0, 5]], Promise);
      }

      return _callee2;
    }(),
    labelButton: t('Delete'),
    content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
      is: "span",
      size: "14px",
      color: "danger-500",
      fontWeight: "600"
    }, t('Team_Delete_Channel_modal_content_danger')), /*#__PURE__*/React.createElement(Box, {
      is: "span",
      size: "14px"
    }, ' ', t('Team_Delete_Channel_modal_content')))
  });
  var menuOptions = useMemo(function () {
    var AutoJoinAction = function () {
      function _callee3() {
        return _regeneratorRuntime.async(function () {
          function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return _regeneratorRuntime.awrap(updateRoomEndpoint({
                    roomId: rid,
                    isDefault: !room.teamDefault
                  }));

                case 3:
                  _context3.next = 8;
                  break;

                case 5:
                  _context3.prev = 5;
                  _context3.t0 = _context3["catch"](0);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context3.t0
                  });

                case 8:
                  reload();

                case 9:
                case "end":
                  return _context3.stop();
              }
            }
          }

          return _callee3$;
        }(), null, null, [[0, 5]], Promise);
      }

      return _callee3;
    }();

    return [canEditTeamChannel && {
      label: {
        label: t('Team_Auto-join'),
        icon: type === 'c' ? 'hash' : 'hashtag-lock'
      },
      action: AutoJoinAction
    }, canRemoveTeamChannel && {
      label: {
        label: t('Team_Remove_from_team'),
        icon: 'cross'
      },
      action: RemoveFromTeamAction
    }, canDeleteTeamChannel && {
      label: {
        label: t('Delete'),
        icon: 'trash'
      },
      action: DeleteChannelAction
    }].filter(Boolean);
  }, [DeleteChannelAction, RemoveFromTeamAction, rid, type, room.teamDefault, t, updateRoomEndpoint, reload, dispatchToastMessage, canDeleteTeamChannel, canRemoveTeamChannel, canEditTeamChannel]);
  return /*#__PURE__*/React.createElement(Menu, {
    flexShrink: 0,
    key: "menu",
    tiny: true,
    renderItem: function (_ref2) {
      var _ref2$label = _ref2.label,
          label = _ref2$label.label,
          icon = _ref2$label.icon,
          props = _objectWithoutProperties(_ref2, _excluded);

      return icon.match(/hash/) ? /*#__PURE__*/React.createElement(Option, _extends({}, props, {
        label: label,
        icon: icon
      }), /*#__PURE__*/React.createElement(CheckBox, {
        checked: room.teamDefault
      })) : /*#__PURE__*/React.createElement(Box, {
        color: "danger-600"
      }, /*#__PURE__*/React.createElement(Option, _extends({}, props, {
        label: label,
        icon: icon
      })));
    },
    options: (canEditTeamChannel || canRemoveTeamChannel || canDeleteTeamChannel) && menuOptions
  });
};

module.exportDefault(RoomActions);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/channels/1d33490502daa8877a525062f9fcbb5d055baba9.map
