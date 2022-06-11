function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/TeamsInfoWithData.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 1);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 2);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var React, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var roomTypes, UiTextContext;
module.link("../../../../../app/utils/client", {
  roomTypes: function (v) {
    roomTypes = v;
  },
  UiTextContext: function (v) {
    UiTextContext = v;
  }
}, 2);
var GenericModalDoNotAskAgain;
module.link("../../../../components/GenericModal", {
  GenericModalDoNotAskAgain: function (v) {
    GenericModalDoNotAskAgain = v;
  }
}, 3);
var MarkdownText;
module.link("../../../../components/MarkdownText", {
  "default": function (v) {
    MarkdownText = v;
  }
}, 4);
var usePermission;
module.link("../../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 5);
var useSetModal;
module.link("../../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 6);
var useRoute;
module.link("../../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 7);
var useMethod;
module.link("../../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 8);
var useSetting;
module.link("../../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 9);
var useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 10);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 11);
var useUserId;
module.link("../../../../contexts/UserContext", {
  useUserId: function (v) {
    useUserId = v;
  }
}, 12);
var useDontAskAgain;
module.link("../../../../hooks/useDontAskAgain", {
  useDontAskAgain: function (v) {
    useDontAskAgain = v;
  }
}, 13);
var useEndpointActionExperimental;
module.link("../../../../hooks/useEndpointActionExperimental", {
  useEndpointActionExperimental: function (v) {
    useEndpointActionExperimental = v;
  }
}, 14);
var useTabBarClose, useTabBarOpen;
module.link("../../../room/providers/ToolboxProvider", {
  useTabBarClose: function (v) {
    useTabBarClose = v;
  },
  useTabBarOpen: function (v) {
    useTabBarOpen = v;
  }
}, 15);
var ConvertToChannelModal;
module.link("../../ConvertToChannelModal", {
  "default": function (v) {
    ConvertToChannelModal = v;
  }
}, 16);
var DeleteTeamModal;
module.link("./Delete", {
  "default": function (v) {
    DeleteTeamModal = v;
  }
}, 17);
var LeaveTeamModal;
module.link("./Leave", {
  "default": function (v) {
    LeaveTeamModal = v;
  }
}, 18);
var TeamsInfo;
module.link("./TeamsInfo", {
  "default": function (v) {
    TeamsInfo = v;
  }
}, 19);
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

var TeamsInfoWithLogic = function (_ref) {
  var room = _ref.room,
      openEditing = _ref.openEditing;
  var onClickClose = useTabBarClose();
  var openTabbar = useTabBarOpen();
  var t = useTranslation();
  var userId = useUserId();
  room.type = room.t;
  room.rid = room._id;
  var broadcast = room.broadcast,
      archived = room.archived; // TODO implement joined

  var retentionPolicyEnabled = useSetting('RetentionPolicy_Enabled');
  var retentionPolicy = {
    retentionPolicyEnabled: retentionPolicyEnabled,
    maxAgeDefault: useSetting(retentionPolicyMaxAge[room.t]) || 30,
    retentionEnabledDefault: useSetting(retentionPolicyAppliesTo[room.t]),
    excludePinnedDefault: useSetting('RetentionPolicy_DoNotPrunePinned'),
    filesOnlyDefault: useSetting('RetentionPolicy_FilesOnly')
  };
  var dontAskHideRoom = useDontAskAgain('hideRoom');
  var dispatchToastMessage = useToastMessageDispatch();
  var setModal = useSetModal();
  var closeModal = useMutableCallback(function () {
    return setModal();
  });
  var deleteTeam = useEndpointActionExperimental('POST', 'teams.delete');
  var leaveTeam = useEndpointActionExperimental('POST', 'teams.leave');
  var convertTeamToChannel = useEndpointActionExperimental('POST', 'teams.convertToChannel');
  var hideTeam = useMethod('hideRoom');
  var router = useRoute('home');
  var canDelete = usePermission('delete-team', room._id);
  var canEdit = usePermission('edit-team-channel', room._id); // const canLeave = usePermission('leave-team'); /* && room.cl !== false && joined */

  var onClickDelete = useMutableCallback(function () {
    var onConfirm = function () {
      function _callee(deletedRooms) {
        var roomsToRemove;
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  roomsToRemove = Array.isArray(deletedRooms) && deletedRooms.length > 0 ? deletedRooms : [];
                  _context.prev = 1;
                  _context.next = 4;
                  return _regeneratorRuntime.awrap(deleteTeam(_objectSpread({
                    teamId: room.teamId
                  }, roomsToRemove.length && {
                    roomsToRemove: roomsToRemove
                  })));

                case 4:
                  dispatchToastMessage({
                    type: 'success',
                    message: t('Team_has_been_deleted')
                  });
                  router.push({});
                  _context.next = 11;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](1);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context.t0
                  });

                case 11:
                  _context.prev = 11;
                  closeModal();
                  return _context.finish(11);

                case 14:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, [[1, 8, 11, 14]], Promise);
      }

      return _callee;
    }();

    setModal( /*#__PURE__*/React.createElement(DeleteTeamModal, {
      onConfirm: onConfirm,
      onCancel: closeModal,
      teamId: room.teamId
    }));
  });
  var onClickLeave = useMutableCallback(function () {
    var onConfirm = function () {
      function _callee2(roomsLeft) {
        var roomsToLeave;
        return _regeneratorRuntime.async(function () {
          function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  roomsToLeave = Array.isArray(roomsLeft) && roomsLeft.length > 0 ? roomsLeft : [];
                  _context2.prev = 1;
                  _context2.next = 4;
                  return _regeneratorRuntime.awrap(leaveTeam(_objectSpread({
                    teamId: room.teamId
                  }, roomsToLeave.length && {
                    rooms: roomsToLeave
                  })));

                case 4:
                  dispatchToastMessage({
                    type: 'success',
                    message: t('Teams_left_team_successfully')
                  });
                  router.push({});
                  _context2.next = 11;
                  break;

                case 8:
                  _context2.prev = 8;
                  _context2.t0 = _context2["catch"](1);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context2.t0
                  });

                case 11:
                  _context2.prev = 11;
                  closeModal();
                  return _context2.finish(11);

                case 14:
                case "end":
                  return _context2.stop();
              }
            }
          }

          return _callee2$;
        }(), null, null, [[1, 8, 11, 14]], Promise);
      }

      return _callee2;
    }();

    setModal( /*#__PURE__*/React.createElement(LeaveTeamModal, {
      onConfirm: onConfirm,
      onCancel: closeModal,
      teamId: room.teamId
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
                              return _regeneratorRuntime.awrap(hideTeam(room._id));

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
                              _context3.prev = 9;
                              closeModal();
                              return _context3.finish(9);

                            case 12:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }

                      return _callee3$;
                    }(), null, null, [[0, 6, 9, 12]], Promise);
                  }

                  return _callee3;
                }();

                warnText = roomTypes.getConfig(room.t).getUiText(UiTextContext.HIDE_WARNING);

                if (!dontAskHideRoom) {
                  _context4.next = 4;
                  break;
                }

                return _context4.abrupt("return", hide());

              case 4:
                setModal( /*#__PURE__*/React.createElement(GenericModalDoNotAskAgain, {
                  variant: "danger",
                  confirmText: t('Yes_hide_it'),
                  cancelText: t('Cancel'),
                  onClose: closeModal,
                  onCancel: closeModal,
                  onConfirm: hide,
                  dontAskAgain: {
                    action: 'hideRoom',
                    label: t('Hide_room')
                  }
                }, t(warnText, room.fname)));

              case 5:
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
  var onClickViewChannels = useCallback(function () {
    return openTabbar('team-channels');
  }, [openTabbar]);
  var onClickConvertToChannel = useMutableCallback(function () {
    var onConfirm = function () {
      function _callee5(roomsToRemove) {
        return _regeneratorRuntime.async(function () {
          function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.prev = 0;
                  _context5.next = 3;
                  return _regeneratorRuntime.awrap(convertTeamToChannel({
                    teamId: room.teamId,
                    roomsToRemove: Object.keys(roomsToRemove)
                  }));

                case 3:
                  dispatchToastMessage({
                    type: 'success',
                    message: t('Success')
                  });
                  _context5.next = 9;
                  break;

                case 6:
                  _context5.prev = 6;
                  _context5.t0 = _context5["catch"](0);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context5.t0
                  });

                case 9:
                  _context5.prev = 9;
                  closeModal();
                  return _context5.finish(9);

                case 12:
                case "end":
                  return _context5.stop();
              }
            }
          }

          return _callee5$;
        }(), null, null, [[0, 6, 9, 12]], Promise);
      }

      return _callee5;
    }();

    setModal( /*#__PURE__*/React.createElement(ConvertToChannelModal, {
      onClose: closeModal,
      onCancel: closeModal,
      onConfirm: onConfirm,
      teamId: room.teamId,
      userId: userId
    }));
  });
  return /*#__PURE__*/React.createElement(TeamsInfo, _extends({}, room, {
    archived: archived,
    broadcast: broadcast,
    icon: 'team',
    retentionPolicy: retentionPolicyEnabled && retentionPolicy,
    onClickEdit: canEdit && openEditing,
    onClickClose: onClickClose,
    onClickDelete: canDelete && onClickDelete,
    onClickLeave:
    /* canLeave && */
    onClickLeave,
    onClickHide:
    /* joined && */
    handleHide,
    onClickViewChannels: onClickViewChannels,
    onClickConvertToChannel: canEdit && onClickConvertToChannel,
    announcement: room.announcement && /*#__PURE__*/React.createElement(MarkdownText, {
      variant: "inline",
      content: room.announcement
    }),
    description: room.description && /*#__PURE__*/React.createElement(MarkdownText, {
      variant: "inline",
      content: room.description
    }),
    topic: room.topic && /*#__PURE__*/React.createElement(MarkdownText, {
      variant: "inline",
      content: room.topic
    })
  }));
};

module.exportDefault(TeamsInfoWithLogic);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/32ffdd1dafe6c91c1ae6c35b403294b8bd1899fe.map
