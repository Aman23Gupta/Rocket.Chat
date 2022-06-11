function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/hooks/useUserInfoActions.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["text", "confirmText", "close", "confirm"];

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 2);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 3);
module.export({
  useUserInfoActions: function () {
    return useUserInfoActions;
  }
});
var Button, ButtonGroup, Icon, Modal, Box;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Modal: function (v) {
    Modal = v;
  },
  Box: function (v) {
    Box = v;
  }
}, 0);
var useAutoFocus, useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useAutoFocus: function (v) {
    useAutoFocus = v;
  },
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var escapeHTML;
module.link("@rocket.chat/string-helpers", {
  escapeHTML: function (v) {
    escapeHTML = v;
  }
}, 2);
var React, useCallback, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 3);
var RoomRoles;
module.link("../../../../app/models/client", {
  RoomRoles: function (v) {
    RoomRoles = v;
  }
}, 4);
var roomTypes, RoomMemberActions;
module.link("../../../../app/utils/client", {
  roomTypes: function (v) {
    roomTypes = v;
  },
  RoomMemberActions: function (v) {
    RoomMemberActions = v;
  }
}, 5);
var usePermission, useAllPermissions;
module.link("../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  },
  useAllPermissions: function (v) {
    useAllPermissions = v;
  }
}, 6);
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 7);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 8);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 9);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 10);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 11);
var useUserId, useUserSubscription, useUserSubscriptionByName;
module.link("../../../contexts/UserContext", {
  useUserId: function (v) {
    useUserId = v;
  },
  useUserSubscription: function (v) {
    useUserSubscription = v;
  },
  useUserSubscriptionByName: function (v) {
    useUserSubscriptionByName = v;
  }
}, 12);
var useEndpointActionExperimental;
module.link("../../../hooks/useEndpointActionExperimental", {
  useEndpointActionExperimental: function (v) {
    useEndpointActionExperimental = v;
  }
}, 13);
var useReactiveValue;
module.link("../../../hooks/useReactiveValue", {
  useReactiveValue: function (v) {
    useReactiveValue = v;
  }
}, 14);
var RemoveUsersModal;
module.link("../../teams/contextualBar/members/RemoveUsersModal", {
  "default": function (v) {
    RemoveUsersModal = v;
  }
}, 15);
var useUserRoom;
module.link("./useUserRoom", {
  useUserRoom: function (v) {
    useUserRoom = v;
  }
}, 16);
var useWebRTC;
module.link("./useWebRTC", {
  useWebRTC: function (v) {
    useWebRTC = v;
  }
}, 17);

var useUserHasRoomRole = function (uid, rid, role) {
  return useReactiveValue(useCallback(function () {
    return !!RoomRoles.findOne({
      rid: rid,
      'u._id': uid,
      'roles': role
    });
  }, [uid, rid, role]));
};

var getShouldOpenDirectMessage = function (currentSubscription, usernameSubscription, canOpenDirectMessage, username) {
  var canOpenDm = canOpenDirectMessage || usernameSubscription;
  var directMessageIsNotAlreadyOpen = currentSubscription && currentSubscription.name !== username;
  return canOpenDm && directMessageIsNotAlreadyOpen;
};

var getUserIsMuted = function (room, user, userCanPostReadonly) {
  if (room && room.ro) {
    if (Array.isArray(room.unmuted) && room.unmuted.indexOf(user && user.username) !== -1) {
      return false;
    }

    if (userCanPostReadonly) {
      return Array.isArray(room.muted) && room.muted.indexOf(user && user.username) !== -1;
    }

    return true;
  }

  return room && Array.isArray(room.muted) && room.muted.indexOf(user && user.username) > -1;
};

var WarningModal = function (_ref) {
  var text = _ref.text,
      confirmText = _ref.confirmText,
      close = _ref.close,
      confirm = _ref.confirm,
      props = _objectWithoutProperties(_ref, _excluded);

  var refAutoFocus = useAutoFocus(true);
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(Modal, props, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Icon, {
    color: "warning",
    name: "modal-warning",
    size: 20
  }), /*#__PURE__*/React.createElement(Modal.Title, null, t('Are_you_sure')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: close
  })), /*#__PURE__*/React.createElement(Modal.Content, {
    fontScale: "p2"
  }, text), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    ghost: true,
    onClick: close
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    ref: refAutoFocus,
    primary: true,
    danger: true,
    onClick: confirm
  }, confirmText))));
};

var useUserInfoActions = function () {
  var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var rid = arguments.length > 1 ? arguments[1] : undefined;
  var reload = arguments.length > 2 ? arguments[2] : undefined;
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var directRoute = useRoute('direct');
  var setModal = useSetModal();
  var uid = user._id;
  var ownUserId = useUserId();
  var closeModal = useMutableCallback(function () {
    return setModal(null);
  });
  var room = useUserRoom(rid);
  var currentSubscription = useUserSubscription(rid);
  var usernameSubscription = useUserSubscriptionByName(user.username);
  var isLeader = useUserHasRoomRole(uid, rid, 'leader');
  var isModerator = useUserHasRoomRole(uid, rid, 'moderator');
  var isOwner = useUserHasRoomRole(uid, rid, 'owner');
  var otherUserCanPostReadonly = useAllPermissions('post-readonly', rid);
  var isIgnored = currentSubscription && currentSubscription.ignored && currentSubscription.ignored.indexOf(uid) > -1;
  var isMuted = getUserIsMuted(room, user, otherUserCanPostReadonly);
  var endpointPrefix = room.t === 'p' ? 'groups' : 'channels';
  var roomConfig = room && room.t && roomTypes.getConfig(room.t);

  var _ref2 = _toConsumableArray(roomConfig && [roomConfig.allowMemberAction(room, RoomMemberActions.SET_AS_OWNER), roomConfig.allowMemberAction(room, RoomMemberActions.SET_AS_LEADER), roomConfig.allowMemberAction(room, RoomMemberActions.SET_AS_MODERATOR), roomConfig.allowMemberAction(room, RoomMemberActions.IGNORE), roomConfig.allowMemberAction(room, RoomMemberActions.BLOCK), roomConfig.allowMemberAction(room, RoomMemberActions.MUTE), roomConfig.allowMemberAction(room, RoomMemberActions.REMOVE_USER)]),
      roomCanSetOwner = _ref2[0],
      roomCanSetLeader = _ref2[1],
      roomCanSetModerator = _ref2[2],
      roomCanIgnore = _ref2[3],
      roomCanBlock = _ref2[4],
      roomCanMute = _ref2[5],
      roomCanRemove = _ref2[6];

  var roomName = room && room.t && escapeHTML(roomTypes.getRoomName(room.t, room));
  var userCanSetOwner = usePermission('set-owner', rid);
  var userCanSetLeader = usePermission('set-leader', rid);
  var userCanSetModerator = usePermission('set-moderator', rid);
  var userCanMute = usePermission('mute-user', rid);
  var userCanRemove = usePermission('remove-user', rid);
  var userCanDirectMessage = usePermission('create-d');

  var _useWebRTC = useWebRTC(rid),
      shouldAllowCalls = _useWebRTC.shouldAllowCalls,
      callInProgress = _useWebRTC.callInProgress,
      joinCall = _useWebRTC.joinCall,
      startCall = _useWebRTC.startCall;

  var shouldOpenDirectMessage = getShouldOpenDirectMessage(currentSubscription, usernameSubscription, userCanDirectMessage, user.username);
  var openDirectDm = useMutableCallback(function () {
    return directRoute.push({
      rid: user.username
    });
  });
  var openDirectMessageOption = useMemo(function () {
    return shouldOpenDirectMessage && {
      label: t('Direct_Message'),
      icon: 'balloon',
      action: openDirectDm
    };
  }, [openDirectDm, shouldOpenDirectMessage, t]);
  var videoCallOption = useMemo(function () {
    var handleJoinCall = function () {
      joinCall({
        audio: true,
        video: true
      });
    };

    var handleStartCall = function () {
      startCall({
        audio: true,
        video: true
      });
    };

    var action = callInProgress ? handleJoinCall : handleStartCall;
    return shouldAllowCalls && {
      label: t(callInProgress ? 'Join_video_call' : 'Start_video_call'),
      icon: 'video',
      action: action
    };
  }, [callInProgress, shouldAllowCalls, t, joinCall, startCall]);
  var audioCallOption = useMemo(function () {
    var handleJoinCall = function () {
      joinCall({
        audio: true,
        video: false
      });
    };

    var handleStartCall = function () {
      startCall({
        audio: true,
        video: false
      });
    };

    var action = callInProgress ? handleJoinCall : handleStartCall;
    return shouldAllowCalls && {
      label: t(callInProgress ? 'Join_audio_call' : 'Start_audio_call'),
      icon: 'mic',
      action: action
    };
  }, [callInProgress, shouldAllowCalls, t, joinCall, startCall]);
  var changeOwnerEndpoint = isOwner ? 'removeOwner' : 'addOwner';
  var changeOwnerMessage = isOwner ? 'User__username__removed_from__room_name__owners' : 'User__username__is_now_a_owner_of__room_name_';
  var changeOwner = useEndpointActionExperimental('POST', endpointPrefix + "." + changeOwnerEndpoint, t(changeOwnerMessage, {
    username: user.username,
    room_name: roomName
  }));
  var changeOwnerAction = useMutableCallback(function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", changeOwner({
                  roomId: rid,
                  userId: uid
                }));

              case 1:
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
  var changeOwnerOption = useMemo(function () {
    return roomCanSetOwner && userCanSetOwner && {
      label: t(isOwner ? 'Remove_as_owner' : 'Set_as_owner'),
      icon: 'shield-check',
      action: changeOwnerAction
    };
  }, [changeOwnerAction, isOwner, t, roomCanSetOwner, userCanSetOwner]);
  var changeLeaderEndpoint = isLeader ? 'removeLeader' : 'addLeader';
  var changeLeaderMessage = isLeader ? 'User__username__removed_from__room_name__leaders' : 'User__username__is_now_a_leader_of__room_name_';
  var changeLeader = useEndpointActionExperimental('POST', endpointPrefix + "." + changeLeaderEndpoint, t(changeLeaderMessage, {
    username: user.username,
    room_name: roomName
  }));
  var changeLeaderAction = useMutableCallback(function () {
    return changeLeader({
      roomId: rid,
      userId: uid
    });
  });
  var changeLeaderOption = useMemo(function () {
    return roomCanSetLeader && userCanSetLeader && {
      label: t(isLeader ? 'Remove_as_leader' : 'Set_as_leader'),
      icon: 'shield-alt',
      action: changeLeaderAction
    };
  }, [isLeader, roomCanSetLeader, t, userCanSetLeader, changeLeaderAction]);
  var changeModeratorEndpoint = isModerator ? 'removeModerator' : 'addModerator';
  var changeModeratorMessage = isModerator ? 'User__username__removed_from__room_name__moderators' : 'User__username__is_now_a_moderator_of__room_name_';
  var changeModerator = useEndpointActionExperimental('POST', endpointPrefix + "." + changeModeratorEndpoint, t(changeModeratorMessage, {
    username: user.username,
    room_name: roomName
  }));
  var changeModeratorAction = useMutableCallback(function () {
    return changeModerator({
      roomId: rid,
      userId: uid
    });
  });
  var changeModeratorOption = useMemo(function () {
    return roomCanSetModerator && userCanSetModerator && {
      label: t(isModerator ? 'Remove_as_moderator' : 'Set_as_moderator'),
      icon: 'shield',
      action: changeModeratorAction
    };
  }, [changeModeratorAction, isModerator, roomCanSetModerator, t, userCanSetModerator]);
  var ignoreUser = useMethod('ignoreUser');
  var ignoreUserAction = useMutableCallback(function () {
    function _callee2() {
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _regeneratorRuntime.awrap(ignoreUser({
                  rid: rid,
                  userId: uid,
                  ignore: !isIgnored
                }));

              case 3:
                if (isIgnored) {
                  dispatchToastMessage({
                    type: 'success',
                    message: t('User_has_been_unignored')
                  });
                } else {
                  dispatchToastMessage({
                    type: 'success',
                    message: t('User_has_been_ignored')
                  });
                }

                _context2.next = 9;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context2.t0
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, [[0, 6]], Promise);
    }

    return _callee2;
  }());
  var ignoreUserOption = useMemo(function () {
    return roomCanIgnore && uid !== ownUserId && {
      label: t(isIgnored ? 'Unignore' : 'Ignore'),
      icon: 'ban',
      action: ignoreUserAction
    };
  }, [ignoreUserAction, isIgnored, ownUserId, roomCanIgnore, t, uid]);
  var isUserBlocked = currentSubscription && currentSubscription.blocker;
  var toggleBlock = useMethod(isUserBlocked ? 'unblockUser' : 'blockUser');
  var toggleBlockUserAction = useMutableCallback(function () {
    function _callee3() {
      return _regeneratorRuntime.async(function () {
        function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _regeneratorRuntime.awrap(toggleBlock({
                  rid: rid,
                  blocked: uid
                }));

              case 3:
                dispatchToastMessage({
                  type: 'success',
                  message: t(isUserBlocked ? 'User_is_unblocked' : 'User_is_blocked')
                });
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
              case "end":
                return _context3.stop();
            }
          }
        }

        return _callee3$;
      }(), null, null, [[0, 6]], Promise);
    }

    return _callee3;
  }());
  var toggleBlockUserOption = useMemo(function () {
    return roomCanBlock && uid !== ownUserId && {
      label: t(isUserBlocked ? 'Unblock' : 'Block'),
      icon: 'ban',
      action: toggleBlockUserAction
    };
  }, [isUserBlocked, ownUserId, roomCanBlock, t, toggleBlockUserAction, uid]);
  var muteFn = useMethod(isMuted ? 'unmuteUserInRoom' : 'muteUserInRoom');
  var muteUserOption = useMemo(function () {
    var action = function () {
      var onConfirm = function () {
        function _callee4() {
          return _regeneratorRuntime.async(function () {
            function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    _context4.next = 3;
                    return _regeneratorRuntime.awrap(muteFn({
                      rid: rid,
                      username: user.username
                    }));

                  case 3:
                    closeModal();
                    dispatchToastMessage({
                      type: 'success',
                      message: t(isMuted ? 'User__username__unmuted_in_room__roomName__' : 'User__username__muted_in_room__roomName__', {
                        username: user.username,
                        roomName: roomName
                      })
                    });
                    _context4.next = 10;
                    break;

                  case 7:
                    _context4.prev = 7;
                    _context4.t0 = _context4["catch"](0);
                    dispatchToastMessage({
                      type: 'error',
                      message: _context4.t0
                    });

                  case 10:
                  case "end":
                    return _context4.stop();
                }
              }
            }

            return _callee4$;
          }(), null, null, [[0, 7]], Promise);
        }

        return _callee4;
      }();

      if (isMuted) {
        return onConfirm();
      }

      setModal( /*#__PURE__*/React.createElement(WarningModal, {
        text: t('The_user_wont_be_able_to_type_in_s', roomName),
        close: closeModal,
        confirmText: t('Yes_mute_user'),
        confirm: onConfirm
      }));
    };

    return roomCanMute && userCanMute && {
      label: t(isMuted ? 'Unmute_user' : 'Mute_user'),
      icon: isMuted ? 'mic' : 'mic-off',
      action: action
    };
  }, [closeModal, dispatchToastMessage, isMuted, muteFn, rid, roomCanMute, roomName, setModal, t, user.username, userCanMute]);
  var removeFromTeam = useEndpointActionExperimental('POST', 'teams.removeMember', t('User_has_been_removed_from_team'));
  var removeUserAction = useEndpointActionExperimental('POST', endpointPrefix + ".kick", t('User_has_been_removed_from_s', roomName));
  var removeUserOptionAction = useMutableCallback(function () {
    if (room.teamMain && room.teamId) {
      return setModal( /*#__PURE__*/React.createElement(RemoveUsersModal, {
        teamId: room === null || room === void 0 ? void 0 : room.teamId,
        userId: uid,
        onClose: closeModal,
        onCancel: closeModal,
        onConfirm: function () {
          function _callee5(rooms) {
            var roomKeys;
            return _regeneratorRuntime.async(function () {
              function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      roomKeys = Object.keys(rooms);
                      _context5.next = 3;
                      return _regeneratorRuntime.awrap(removeFromTeam(_objectSpread({
                        teamId: room.teamId,
                        userId: uid
                      }, roomKeys.length && {
                        rooms: roomKeys
                      })));

                    case 3:
                      closeModal();
                      reload && reload();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }

              return _callee5$;
            }(), null, null, null, Promise);
          }

          return _callee5;
        }()
      }));
    }

    setModal( /*#__PURE__*/React.createElement(WarningModal, {
      text: t('The_user_will_be_removed_from_s', roomName),
      close: closeModal,
      confirmText: t('Yes_remove_user'),
      confirm: function () {
        function _callee6() {
          return _regeneratorRuntime.async(function () {
            function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return _regeneratorRuntime.awrap(removeUserAction({
                      roomId: rid,
                      userId: uid
                    }));

                  case 2:
                    closeModal();
                    reload && reload();

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }

            return _callee6$;
          }(), null, null, null, Promise);
        }

        return _callee6;
      }()
    }));
  });
  var removeUserOption = useMemo(function () {
    return roomCanRemove && userCanRemove && {
      label: /*#__PURE__*/React.createElement(Box, {
        color: "danger"
      }, room.teamMain ? t('Remove_from_team') : t('Remove_from_room')),
      icon: 'sign-out',
      action: removeUserOptionAction
    };
  }, [room, roomCanRemove, userCanRemove, removeUserOptionAction, t]);
  return useMemo(function () {
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, openDirectMessageOption && {
      openDirectMessage: openDirectMessageOption
    }), videoCallOption && {
      video: videoCallOption
    }), audioCallOption && {
      audio: audioCallOption
    }), changeOwnerOption && {
      changeOwner: changeOwnerOption
    }), changeLeaderOption && {
      changeLeader: changeLeaderOption
    }), changeModeratorOption && {
      changeModerator: changeModeratorOption
    }), ignoreUserOption && {
      ignoreUser: ignoreUserOption
    }), muteUserOption && {
      muteUser: muteUserOption
    }), removeUserOption && {
      removeUser: removeUserOption
    }), toggleBlockUserOption && {
      toggleBlock: toggleBlockUserOption
    });
  }, [audioCallOption, changeLeaderOption, changeModeratorOption, changeOwnerOption, ignoreUserOption, muteUserOption, openDirectMessageOption, removeUserOption, videoCallOption, toggleBlockUserOption]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/hooks/c93380ff522352dfd92dd8f9b15d2d7d8d6089a8.map
