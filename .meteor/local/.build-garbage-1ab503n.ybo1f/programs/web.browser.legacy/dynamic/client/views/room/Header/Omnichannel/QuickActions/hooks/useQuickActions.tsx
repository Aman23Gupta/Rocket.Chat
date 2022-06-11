function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/Omnichannel/QuickActions/hooks/useQuickActions.tsx                                         //
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
module.export({
  useQuickActions: function () {
    return useQuickActions;
  }
});
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var FlowRouter;
module.link("meteor/kadira:flow-router", {
  FlowRouter: function (v) {
    FlowRouter = v;
  }
}, 1);
var Session;
module.link("meteor/session", {
  Session: function (v) {
    Session = v;
  }
}, 2);
var React, useCallback, useState, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 3);
var RoomManager;
module.link("../../../../../../../app/ui-utils/client", {
  RoomManager: function (v) {
    RoomManager = v;
  }
}, 4);
var PlaceChatOnHoldModal;
module.link("../../../../../../../ee/app/livechat-enterprise/client/components/modals/PlaceChatOnHoldModal", {
  "default": function (v) {
    PlaceChatOnHoldModal = v;
  }
}, 5);
var CloseChatModal;
module.link("../../../../../../components/Omnichannel/modals/CloseChatModal", {
  "default": function (v) {
    CloseChatModal = v;
  }
}, 6);
var CloseChatModalData;
module.link("../../../../../../components/Omnichannel/modals/CloseChatModalData", {
  "default": function (v) {
    CloseChatModalData = v;
  }
}, 7);
var ForwardChatModal;
module.link("../../../../../../components/Omnichannel/modals/ForwardChatModal", {
  "default": function (v) {
    ForwardChatModal = v;
  }
}, 8);
var ReturnChatQueueModal;
module.link("../../../../../../components/Omnichannel/modals/ReturnChatQueueModal", {
  "default": function (v) {
    ReturnChatQueueModal = v;
  }
}, 9);
var TranscriptModal;
module.link("../../../../../../components/Omnichannel/modals/TranscriptModal", {
  "default": function (v) {
    TranscriptModal = v;
  }
}, 10);
var usePermission, useRole;
module.link("../../../../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  },
  useRole: function (v) {
    useRole = v;
  }
}, 11);
var useSetModal;
module.link("../../../../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 12);
var useOmnichannelRouteConfig;
module.link("../../../../../../contexts/OmnichannelContext", {
  useOmnichannelRouteConfig: function (v) {
    useOmnichannelRouteConfig = v;
  }
}, 13);
var useEndpoint, useMethod;
module.link("../../../../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  },
  useMethod: function (v) {
    useMethod = v;
  }
}, 14);
var useSetting;
module.link("../../../../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 15);
var useToastMessageDispatch;
module.link("../../../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 16);
var useTranslation;
module.link("../../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 17);
var useUserId;
module.link("../../../../../../contexts/UserContext", {
  useUserId: function (v) {
    useUserId = v;
  }
}, 18);
var handleError;
module.link("../../../../../../lib/utils/handleError", {
  handleError: function (v) {
    handleError = v;
  }
}, 19);
var QuickActionsEnum;
module.link("../../../../lib/QuickActions", {
  QuickActionsEnum: function (v) {
    QuickActionsEnum = v;
  }
}, 20);
var useQuickActionsContext;
module.link("../../../../lib/QuickActions/QuickActionsContext", {
  useQuickActionsContext: function (v) {
    useQuickActionsContext = v;
  }
}, 21);

var useQuickActions = function (room) {
  var _room$u, _room$lastMessage, _room$lastMessage2;

  var setModal = useSetModal();
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var context = useQuickActionsContext();
  var actions = Array.from(context.actions.values()).sort(function (a, b) {
    return (a.order || 0) - (b.order || 0);
  });

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      onHoldModalActive = _useState2[0],
      setOnHoldModalActive = _useState2[1];

  var visitorRoomId = room.v._id;
  var rid = room._id;
  var uid = useUserId();
  var roomLastMessage = room.lastMessage;
  var getVisitorInfo = useEndpoint('GET', 'livechat/visitors.info');
  var getVisitorEmail = useMutableCallback(function () {
    function _callee() {
      var _await$getVisitorInfo, visitorEmails;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (visitorRoomId) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return _regeneratorRuntime.awrap(getVisitorInfo({
                  visitorId: visitorRoomId
                }));

              case 4:
                _await$getVisitorInfo = _context.sent;
                visitorEmails = _await$getVisitorInfo.visitor.visitorEmails;

                if (!(visitorEmails !== null && visitorEmails !== void 0 && visitorEmails.length && visitorEmails[0].address)) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", visitorEmails[0].address);

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
  useEffect(function () {
    if (onHoldModalActive && roomLastMessage !== null && roomLastMessage !== void 0 && roomLastMessage.token) {
      setModal(null);
    }
  }, [roomLastMessage, onHoldModalActive, setModal]);
  var closeModal = useCallback(function () {
    return setModal(null);
  }, [setModal]);
  var closeOnHoldModal = useCallback(function () {
    closeModal();
    setOnHoldModalActive(false);
  }, [closeModal]);
  var methodReturn = useMethod('livechat:returnAsInquiry');
  var handleMoveChat = useCallback(function () {
    function _callee2() {
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _regeneratorRuntime.awrap(methodReturn(rid));

              case 3:
                closeModal();
                Session.set('openedRoom', null);
                FlowRouter.go('/home');
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                handleError(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, [[0, 8]], Promise);
    }

    return _callee2;
  }(), [closeModal, methodReturn, rid]);
  var requestTranscript = useMethod('livechat:requestTranscript');
  var handleRequestTranscript = useCallback(function () {
    function _callee3(email, subject) {
      return _regeneratorRuntime.async(function () {
        function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _regeneratorRuntime.awrap(requestTranscript(rid, email, subject));

              case 3:
                closeModal();
                RoomManager.close("l" + rid);
                dispatchToastMessage({
                  type: 'success',
                  message: t('Livechat_transcript_has_been_requested')
                });
                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                handleError(_context3.t0);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }

        return _callee3$;
      }(), null, null, [[0, 8]], Promise);
    }

    return _callee3;
  }(), [closeModal, dispatchToastMessage, requestTranscript, rid, t]);
  var sendTranscript = useMethod('livechat:sendTranscript');
  var handleSendTranscript = useCallback(function () {
    function _callee4(email, subject, token) {
      return _regeneratorRuntime.async(function () {
        function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _regeneratorRuntime.awrap(sendTranscript(token, rid, email, subject));

              case 3:
                closeModal();
                _context4.next = 9;
                break;

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                handleError(_context4.t0);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }

        return _callee4$;
      }(), null, null, [[0, 6]], Promise);
    }

    return _callee4;
  }(), [closeModal, rid, sendTranscript]);
  var discardTranscript = useMethod('livechat:discardTranscript');
  var handleDiscardTranscript = useCallback(function () {
    function _callee5() {
      return _regeneratorRuntime.async(function () {
        function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _regeneratorRuntime.awrap(discardTranscript(rid));

              case 3:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Livechat_transcript_request_has_been_canceled')
                });
                closeModal();
                _context5.next = 10;
                break;

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                handleError(_context5.t0);

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }

        return _callee5$;
      }(), null, null, [[0, 7]], Promise);
    }

    return _callee5;
  }(), [closeModal, discardTranscript, dispatchToastMessage, rid, t]);
  var forwardChat = useMethod('livechat:transfer');
  var handleForwardChat = useCallback(function () {
    function _callee6(departmentId, userId, comment) {
      var transferData, result;
      return _regeneratorRuntime.async(function () {
        function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(departmentId && userId)) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return");

              case 2:
                transferData = {
                  roomId: rid,
                  comment: comment,
                  clientAction: true
                };

                if (departmentId) {
                  transferData.departmentId = departmentId;
                }

                if (userId) {
                  transferData.userId = userId;
                }

                _context6.prev = 5;
                _context6.next = 8;
                return _regeneratorRuntime.awrap(forwardChat(transferData));

              case 8:
                result = _context6.sent;

                if (result) {
                  _context6.next = 11;
                  break;
                }

                throw new Error(departmentId ? t('error-no-agents-online-in-department') : t('error-forwarding-chat'));

              case 11:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Transferred')
                });
                FlowRouter.go('/');
                closeModal();
                _context6.next = 19;
                break;

              case 16:
                _context6.prev = 16;
                _context6.t0 = _context6["catch"](5);
                handleError(_context6.t0);

              case 19:
              case "end":
                return _context6.stop();
            }
          }
        }

        return _callee6$;
      }(), null, null, [[5, 16]], Promise);
    }

    return _callee6;
  }(), [closeModal, dispatchToastMessage, forwardChat, rid, t]);
  var closeChat = useMethod('livechat:closeRoom');
  var handleClose = useCallback(function () {
    function _callee7(comment, tags) {
      return _regeneratorRuntime.async(function () {
        function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _regeneratorRuntime.awrap(closeChat(rid, comment, {
                  clientAction: true,
                  tags: tags
                }));

              case 3:
                closeModal();
                dispatchToastMessage({
                  type: 'success',
                  message: t('Chat_closed_successfully')
                });
                _context7.next = 10;
                break;

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](0);
                handleError(_context7.t0);

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }

        return _callee7$;
      }(), null, null, [[0, 7]], Promise);
    }

    return _callee7;
  }(), [closeChat, closeModal, dispatchToastMessage, rid, t]);
  var onHoldChat = useEndpoint('POST', 'livechat/room.onHold');
  var handleOnHoldChat = useCallback(function () {
    function _callee8() {
      return _regeneratorRuntime.async(function () {
        function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return _regeneratorRuntime.awrap(onHoldChat({
                  roomId: rid
                }));

              case 3:
                closeModal();
                dispatchToastMessage({
                  type: 'success',
                  message: t('Chat_On_Hold_Successfully')
                });
                _context8.next = 10;
                break;

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8["catch"](0);
                handleError(_context8.t0);

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }

        return _callee8$;
      }(), null, null, [[0, 7]], Promise);
    }

    return _callee8;
  }(), [onHoldChat, rid, closeModal, dispatchToastMessage, t]);
  var openModal = useMutableCallback(function () {
    function _callee9(id) {
      var visitorEmail;
      return _regeneratorRuntime.async(function () {
        function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.t0 = id;
                _context9.next = _context9.t0 === QuickActionsEnum.MoveQueue ? 3 : _context9.t0 === QuickActionsEnum.Transcript ? 5 : _context9.t0 === QuickActionsEnum.ChatForward ? 13 : _context9.t0 === QuickActionsEnum.CloseChat ? 15 : _context9.t0 === QuickActionsEnum.OnHoldChat ? 17 : 20;
                break;

              case 3:
                setModal( /*#__PURE__*/React.createElement(ReturnChatQueueModal, {
                  onMoveChat: handleMoveChat,
                  onCancel: closeModal
                }));
                return _context9.abrupt("break", 21);

              case 5:
                _context9.next = 7;
                return _regeneratorRuntime.awrap(getVisitorEmail());

              case 7:
                visitorEmail = _context9.sent;

                if (visitorEmail) {
                  _context9.next = 11;
                  break;
                }

                dispatchToastMessage({
                  type: 'error',
                  message: t('Customer_without_registered_email')
                });
                return _context9.abrupt("break", 21);

              case 11:
                setModal( /*#__PURE__*/React.createElement(TranscriptModal, {
                  room: room,
                  email: visitorEmail,
                  onRequest: handleRequestTranscript,
                  onSend: handleSendTranscript,
                  onDiscard: handleDiscardTranscript,
                  onCancel: closeModal
                }));
                return _context9.abrupt("break", 21);

              case 13:
                setModal( /*#__PURE__*/React.createElement(ForwardChatModal, {
                  room: room,
                  onForward: handleForwardChat,
                  onCancel: closeModal
                }));
                return _context9.abrupt("break", 21);

              case 15:
                setModal(room.departmentId ? /*#__PURE__*/React.createElement(CloseChatModalData, {
                  departmentId: room.departmentId,
                  onConfirm: handleClose,
                  onCancel: closeModal
                }) : /*#__PURE__*/React.createElement(CloseChatModal, {
                  onConfirm: handleClose,
                  onCancel: closeModal
                }));
                return _context9.abrupt("break", 21);

              case 17:
                setModal( /*#__PURE__*/React.createElement(PlaceChatOnHoldModal, {
                  onOnHoldChat: handleOnHoldChat,
                  onCancel: closeOnHoldModal
                }));
                setOnHoldModalActive(true);
                return _context9.abrupt("break", 21);

              case 20:
                return _context9.abrupt("break", 21);

              case 21:
              case "end":
                return _context9.stop();
            }
          }
        }

        return _callee9$;
      }(), null, null, null, Promise);
    }

    return _callee9;
  }());
  var omnichannelRouteConfig = useOmnichannelRouteConfig();
  var manualOnHoldAllowed = useSetting('Livechat_allow_manual_on_hold');
  var hasManagerRole = useRole('livechat-manager');
  var roomOpen = (room === null || room === void 0 ? void 0 : room.open) && (((_room$u = room.u) === null || _room$u === void 0 ? void 0 : _room$u._id) === uid || hasManagerRole) && (room === null || room === void 0 ? void 0 : (_room$lastMessage = room.lastMessage) === null || _room$lastMessage === void 0 ? void 0 : _room$lastMessage.t) !== 'livechat-close';
  var canMoveQueue = !!(omnichannelRouteConfig !== null && omnichannelRouteConfig !== void 0 && omnichannelRouteConfig.returnQueue) && (room === null || room === void 0 ? void 0 : room.u) !== undefined;
  var canForwardGuest = usePermission('transfer-livechat-guest');
  var canSendTranscript = usePermission('send-omnichannel-chat-transcript');
  var canCloseRoom = usePermission('close-livechat-room');
  var canCloseOthersRoom = usePermission('close-others-livechat-room');
  var canPlaceChatOnHold = Boolean(!room.onHold && room.u && !((_room$lastMessage2 = room.lastMessage) !== null && _room$lastMessage2 !== void 0 && _room$lastMessage2.token) && manualOnHoldAllowed);

  var hasPermissionButtons = function (id) {
    switch (id) {
      case QuickActionsEnum.MoveQueue:
        return !!roomOpen && canMoveQueue;

      case QuickActionsEnum.ChatForward:
        return !!roomOpen && canForwardGuest;

      case QuickActionsEnum.Transcript:
        return canSendTranscript;

      case QuickActionsEnum.CloseChat:
        return !!roomOpen && (canCloseRoom || canCloseOthersRoom);

      case QuickActionsEnum.OnHoldChat:
        return !!roomOpen && canPlaceChatOnHold;

      default:
        break;
    }

    return false;
  };

  var visibleActions = actions.filter(function (_ref) {
    var id = _ref.id;
    return hasPermissionButtons(id);
  });
  var actionDefault = useMutableCallback(function (e) {
    var index = e.currentTarget.getAttribute('data-quick-actions');
    var id = visibleActions[index].id;
    openModal(id);
  });
  var getAction = useMutableCallback(function (id) {
    openModal(id);
  });
  return {
    visibleActions: visibleActions,
    actionDefault: actionDefault,
    getAction: getAction
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/Omnichannel/QuickActions/hooks/21ceabe442e00b8ea10c113f3ca8528f73866bb2.map
