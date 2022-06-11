function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Info/RoomInfo/RoomInfoWithData.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var RoomManager;
module.link("../../../../../../app/ui-utils/client/lib/RoomManager", {
  RoomManager: function (v) {
    RoomManager = v;
  }
}, 2);
var roomTypes, UiTextContext;
module.link("../../../../../../app/utils/client", {
  roomTypes: function (v) {
    roomTypes = v;
  },
  UiTextContext: function (v) {
    UiTextContext = v;
  }
}, 3);
var GenericModal;
module.link("../../../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 4);
var usePermission;
module.link("../../../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 5);
var useSetModal;
module.link("../../../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 6);
var useRoute;
module.link("../../../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 7);
var useEndpoint, useMethod;
module.link("../../../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  },
  useMethod: function (v) {
    useMethod = v;
  }
}, 8);
var useSetting;
module.link("../../../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 9);
var useToastMessageDispatch;
module.link("../../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 10);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 11);
var useUserRoom;
module.link("../../../../../contexts/UserContext", {
  useUserRoom: function (v) {
    useUserRoom = v;
  }
}, 12);
var useEndpointActionExperimental;
module.link("../../../../../hooks/useEndpointActionExperimental", {
  useEndpointActionExperimental: function (v) {
    useEndpointActionExperimental = v;
  }
}, 13);
var WarningModal;
module.link("../../../../admin/apps/WarningModal", {
  "default": function (v) {
    WarningModal = v;
  }
}, 14);
var useTabBarClose;
module.link("../../../providers/ToolboxProvider", {
  useTabBarClose: function (v) {
    useTabBarClose = v;
  }
}, 15);
var ChannelToTeamModal;
module.link("../ChannelToTeamModal/ChannelToTeamModal", {
  "default": function (v) {
    ChannelToTeamModal = v;
  }
}, 16);
var RoomInfo;
module.link("./RoomInfo", {
  "default": function (v) {
    RoomInfo = v;
  }
}, 17);
var retentionPolicyMaxAge = {
  c: 'RetentionPolicy_MaxAge_Channels',
  p: 'RetentionPolicy_MaxAge_Groups',
  d: 'RetentionPolicy_MaxAge_DMs'
};
var retentionPolicyAppliesTo = {
  c: 'RetentionPolicy_AppliesToChannels',
  p: 'RetentionPolicy_AppliesToGroups',
  d: 'RetentionPolicy_AppliesToDMs'
};

var RoomInfoWithData = function (_ref) {
  var rid = _ref.rid,
      openEditing = _ref.openEditing,
      onClickBack = _ref.onClickBack,
      onEnterRoom = _ref.onEnterRoom,
      resetState = _ref.resetState;
  var onClickClose = useTabBarClose();
  var t = useTranslation();
  var room = useUserRoom(rid);
  room.type = room.t;
  room.rid = rid;
  var type = room.type,
      fname = room.fname,
      prid = room.prid,
      _room$joined = room.joined,
      joined = _room$joined === void 0 ? true : _room$joined; // TODO implement joined

  var retentionPolicyEnabled = useSetting('RetentionPolicy_Enabled');
  var retentionPolicy = {
    retentionPolicyEnabled: retentionPolicyEnabled,
    maxAgeDefault: useSetting(retentionPolicyMaxAge[room.t]) || 30,
    retentionEnabledDefault: useSetting(retentionPolicyAppliesTo[room.t]),
    excludePinnedDefault: useSetting('RetentionPolicy_DoNotPrunePinned'),
    filesOnlyDefault: useSetting('RetentionPolicy_FilesOnly')
  };
  var dispatchToastMessage = useToastMessageDispatch();
  var setModal = useSetModal();
  var closeModal = useMutableCallback(function () {
    return setModal();
  });
  var deleteRoom = useEndpoint('POST', room.t === 'c' ? 'channels.delete' : 'groups.delete');
  var hideRoom = useMethod('hideRoom');
  var leaveRoom = useMethod('leaveRoom');
  var router = useRoute('home');
  var moveChannelToTeam = useEndpointActionExperimental('POST', 'teams.addRooms', t('Success'));
  var convertRoomToTeam = useEndpointActionExperimental('POST', type === 'c' ? 'channels.convertToTeam' : 'groups.convertToTeam', t('Success'));
  var canDelete = usePermission(type === 'c' ? 'delete-c' : 'delete-p', rid);
  var canEdit = usePermission('edit-room', rid);
  var canConvertRoomToTeam = usePermission('create-team');
  var canLeave = usePermission(type === 'c' ? 'leave-c' : 'leave-p') && room.cl !== false && joined;
  var handleDelete = useMutableCallback(function () {
    var onConfirm = function () {
      function _callee() {
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  resetState && resetState({});
                  _context.next = 4;
                  return _regeneratorRuntime.awrap(deleteRoom({
                    roomId: rid
                  }));

                case 4:
                  dispatchToastMessage({
                    type: 'success',
                    message: t('Room_has_been_deleted')
                  });
                  !resetState && router.push({});
                  _context.next = 11;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](0);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context.t0
                  });

                case 11:
                  closeModal();

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, [[0, 8]], Promise);
      }

      return _callee;
    }();

    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: onConfirm,
      onCancel: closeModal,
      confirmText: t('Yes_delete_it')
    }, t('Delete_Room_Warning')));
  });
  var handleLeave = useMutableCallback(function () {
    var leave = function () {
      function _callee2() {
        return _regeneratorRuntime.async(function () {
          function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _regeneratorRuntime.awrap(leaveRoom(rid));

                case 3:
                  router.push({});
                  RoomManager.close(rid);
                  _context2.next = 10;
                  break;

                case 7:
                  _context2.prev = 7;
                  _context2.t0 = _context2["catch"](0);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context2.t0
                  });

                case 10:
                  closeModal();

                case 11:
                case "end":
                  return _context2.stop();
              }
            }
          }

          return _callee2$;
        }(), null, null, [[0, 7]], Promise);
      }

      return _callee2;
    }();

    var warnText = roomTypes.getConfig(type).getUiText(UiTextContext.LEAVE_WARNING);
    setModal( /*#__PURE__*/React.createElement(WarningModal, {
      text: t(warnText, fname),
      confirmText: t('Leave_room'),
      close: closeModal,
      cancel: closeModal,
      cancelText: t('Cancel'),
      confirm: leave
    }));
  });
  var handleHide = useMutableCallback(function () {
    function _callee4() {
      var hide, warnText;
      return _regeneratorRuntime.async(function () {
        function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                hide = function () {
                  function _callee3() {
                    return _regeneratorRuntime.async(function () {
                      function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              _context3.prev = 0;
                              _context3.next = 3;
                              return _regeneratorRuntime.awrap(hideRoom(rid));

                            case 3:
                              router.push({});
                              _context3.next = 9;
                              break;

                            case 6:
                              _context3.prev = 6;
                              _context3.t0 = _context3["catch"](0);
                              dispatchToastMessage({
                                type: 'error',
                                message: _context3.t0
                              });

                            case 9:
                              closeModal();

                            case 10:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }

                      return _callee3$;
                    }(), null, null, [[0, 6]], Promise);
                  }

                  return _callee3;
                }();

                warnText = roomTypes.getConfig(type).getUiText(UiTextContext.HIDE_WARNING);
                setModal( /*#__PURE__*/React.createElement(WarningModal, {
                  text: t(warnText, fname),
                  confirmText: t('Yes_hide_it'),
                  close: closeModal,
                  cancel: closeModal,
                  cancelText: t('Cancel'),
                  confirm: hide
                }));

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }

        return _callee4$;
      }(), null, null, null, Promise);
    }

    return _callee4;
  }());
  var onMoveToTeam = useMutableCallback(function () {
    function _callee6() {
      var onConfirm;
      return _regeneratorRuntime.async(function () {
        function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                onConfirm = function () {
                  function _callee5(teamId) {
                    return _regeneratorRuntime.async(function () {
                      function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              _context5.prev = 0;
                              _context5.next = 3;
                              return _regeneratorRuntime.awrap(moveChannelToTeam({
                                rooms: [rid],
                                teamId: teamId
                              }));

                            case 3:
                              _context5.next = 8;
                              break;

                            case 5:
                              _context5.prev = 5;
                              _context5.t0 = _context5["catch"](0);
                              dispatchToastMessage({
                                type: 'error',
                                message: _context5.t0
                              });

                            case 8:
                              _context5.prev = 8;
                              closeModal();
                              return _context5.finish(8);

                            case 11:
                            case "end":
                              return _context5.stop();
                          }
                        }
                      }

                      return _callee5$;
                    }(), null, null, [[0, 5, 8, 11]], Promise);
                  }

                  return _callee5;
                }();

                setModal( /*#__PURE__*/React.createElement(ChannelToTeamModal, {
                  rid: rid,
                  onClose: closeModal,
                  onCancel: closeModal,
                  onConfirm: onConfirm
                }));

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }

        return _callee6$;
      }(), null, null, null, Promise);
    }

    return _callee6;
  }());
  var onConvertToTeam = useMutableCallback(function () {
    function _callee8() {
      var data, onConfirm;
      return _regeneratorRuntime.async(function () {
        function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                data = type === 'c' ? {
                  channelId: rid
                } : {
                  roomId: rid
                };

                onConfirm = function () {
                  function _callee7() {
                    return _regeneratorRuntime.async(function () {
                      function _callee7$(_context7) {
                        while (1) {
                          switch (_context7.prev = _context7.next) {
                            case 0:
                              _context7.prev = 0;
                              _context7.next = 3;
                              return _regeneratorRuntime.awrap(convertRoomToTeam(data));

                            case 3:
                              _context7.next = 8;
                              break;

                            case 5:
                              _context7.prev = 5;
                              _context7.t0 = _context7["catch"](0);
                              dispatchToastMessage({
                                type: 'error',
                                message: _context7.t0
                              });

                            case 8:
                              _context7.prev = 8;
                              closeModal();
                              return _context7.finish(8);

                            case 11:
                            case "end":
                              return _context7.stop();
                          }
                        }
                      }

                      return _callee7$;
                    }(), null, null, [[0, 5, 8, 11]], Promise);
                  }

                  return _callee7;
                }();

                setModal( /*#__PURE__*/React.createElement(GenericModal, {
                  title: t('Confirmation'),
                  variant: "warning",
                  onClose: closeModal,
                  onCancel: closeModal,
                  onConfirm: onConfirm,
                  confirmText: t('Convert')
                }, t('Converting_channel_to_a_team')));

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }

        return _callee8$;
      }(), null, null, null, Promise);
    }

    return _callee8;
  }());
  var onClickEnterRoom = useMutableCallback(function () {
    return onEnterRoom(room);
  });
  var allowConvertToTeam = !room.teamId && !prid && canConvertRoomToTeam && canEdit;
  return /*#__PURE__*/React.createElement(RoomInfo, {
    room: room,
    icon: room.t === 'p' ? 'lock' : 'hashtag',
    retentionPolicy: retentionPolicyEnabled && retentionPolicy,
    onClickBack: onClickBack,
    onClickEdit: canEdit && openEditing,
    onClickClose: onClickClose,
    onClickDelete: canDelete && handleDelete,
    onClickLeave: canLeave && handleLeave,
    onClickHide: joined && handleHide,
    onClickMoveToTeam: !room.teamId && !prid && canEdit && onMoveToTeam,
    onClickConvertToTeam: allowConvertToTeam && onConvertToTeam,
    onClickEnterRoom: onEnterRoom && onClickEnterRoom
  });
};

module.exportDefault(RoomInfoWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Info/RoomInfo/0053b4dbf180508d18f5593979049f641d765bc2.map
