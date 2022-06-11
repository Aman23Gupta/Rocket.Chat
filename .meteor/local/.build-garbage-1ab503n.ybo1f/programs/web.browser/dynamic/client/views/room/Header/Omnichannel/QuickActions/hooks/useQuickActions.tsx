function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/Omnichannel/QuickActions/hooks/useQuickActions.tsx                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useQuickActions: () => useQuickActions
});
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let FlowRouter;
module.link("meteor/kadira:flow-router", {
  FlowRouter(v) {
    FlowRouter = v;
  }

}, 1);
let Session;
module.link("meteor/session", {
  Session(v) {
    Session = v;
  }

}, 2);
let React, useCallback, useState, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 3);
let RoomManager;
module.link("../../../../../../../app/ui-utils/client", {
  RoomManager(v) {
    RoomManager = v;
  }

}, 4);
let PlaceChatOnHoldModal;
module.link("../../../../../../../ee/app/livechat-enterprise/client/components/modals/PlaceChatOnHoldModal", {
  default(v) {
    PlaceChatOnHoldModal = v;
  }

}, 5);
let CloseChatModal;
module.link("../../../../../../components/Omnichannel/modals/CloseChatModal", {
  default(v) {
    CloseChatModal = v;
  }

}, 6);
let CloseChatModalData;
module.link("../../../../../../components/Omnichannel/modals/CloseChatModalData", {
  default(v) {
    CloseChatModalData = v;
  }

}, 7);
let ForwardChatModal;
module.link("../../../../../../components/Omnichannel/modals/ForwardChatModal", {
  default(v) {
    ForwardChatModal = v;
  }

}, 8);
let ReturnChatQueueModal;
module.link("../../../../../../components/Omnichannel/modals/ReturnChatQueueModal", {
  default(v) {
    ReturnChatQueueModal = v;
  }

}, 9);
let TranscriptModal;
module.link("../../../../../../components/Omnichannel/modals/TranscriptModal", {
  default(v) {
    TranscriptModal = v;
  }

}, 10);
let usePermission, useRole;
module.link("../../../../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  },

  useRole(v) {
    useRole = v;
  }

}, 11);
let useSetModal;
module.link("../../../../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 12);
let useOmnichannelRouteConfig;
module.link("../../../../../../contexts/OmnichannelContext", {
  useOmnichannelRouteConfig(v) {
    useOmnichannelRouteConfig = v;
  }

}, 13);
let useEndpoint, useMethod;
module.link("../../../../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  },

  useMethod(v) {
    useMethod = v;
  }

}, 14);
let useSetting;
module.link("../../../../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 15);
let useToastMessageDispatch;
module.link("../../../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 16);
let useTranslation;
module.link("../../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 17);
let useUserId;
module.link("../../../../../../contexts/UserContext", {
  useUserId(v) {
    useUserId = v;
  }

}, 18);
let handleError;
module.link("../../../../../../lib/utils/handleError", {
  handleError(v) {
    handleError = v;
  }

}, 19);
let QuickActionsEnum;
module.link("../../../../lib/QuickActions", {
  QuickActionsEnum(v) {
    QuickActionsEnum = v;
  }

}, 20);
let useQuickActionsContext;
module.link("../../../../lib/QuickActions/QuickActionsContext", {
  useQuickActionsContext(v) {
    useQuickActionsContext = v;
  }

}, 21);

const useQuickActions = room => {
  var _room$u, _room$lastMessage, _room$lastMessage2;

  const setModal = useSetModal();
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const context = useQuickActionsContext();
  const actions = Array.from(context.actions.values()).sort((a, b) => (a.order || 0) - (b.order || 0));
  const [onHoldModalActive, setOnHoldModalActive] = useState(false);
  const visitorRoomId = room.v._id;
  const rid = room._id;
  const uid = useUserId();
  const roomLastMessage = room.lastMessage;
  const getVisitorInfo = useEndpoint('GET', 'livechat/visitors.info');
  const getVisitorEmail = useMutableCallback(async () => {
    if (!visitorRoomId) {
      return;
    }

    const {
      visitor: {
        visitorEmails
      }
    } = await getVisitorInfo({
      visitorId: visitorRoomId
    });

    if (visitorEmails !== null && visitorEmails !== void 0 && visitorEmails.length && visitorEmails[0].address) {
      return visitorEmails[0].address;
    }
  });
  useEffect(() => {
    if (onHoldModalActive && roomLastMessage !== null && roomLastMessage !== void 0 && roomLastMessage.token) {
      setModal(null);
    }
  }, [roomLastMessage, onHoldModalActive, setModal]);
  const closeModal = useCallback(() => setModal(null), [setModal]);
  const closeOnHoldModal = useCallback(() => {
    closeModal();
    setOnHoldModalActive(false);
  }, [closeModal]);
  const methodReturn = useMethod('livechat:returnAsInquiry');
  const handleMoveChat = useCallback(async () => {
    try {
      await methodReturn(rid);
      closeModal();
      Session.set('openedRoom', null);
      FlowRouter.go('/home');
    } catch (error) {
      handleError(error);
    }
  }, [closeModal, methodReturn, rid]);
  const requestTranscript = useMethod('livechat:requestTranscript');
  const handleRequestTranscript = useCallback(async (email, subject) => {
    try {
      await requestTranscript(rid, email, subject);
      closeModal();
      RoomManager.close("l".concat(rid));
      dispatchToastMessage({
        type: 'success',
        message: t('Livechat_transcript_has_been_requested')
      });
    } catch (error) {
      handleError(error);
    }
  }, [closeModal, dispatchToastMessage, requestTranscript, rid, t]);
  const sendTranscript = useMethod('livechat:sendTranscript');
  const handleSendTranscript = useCallback(async (email, subject, token) => {
    try {
      await sendTranscript(token, rid, email, subject);
      closeModal();
    } catch (error) {
      handleError(error);
    }
  }, [closeModal, rid, sendTranscript]);
  const discardTranscript = useMethod('livechat:discardTranscript');
  const handleDiscardTranscript = useCallback(async () => {
    try {
      await discardTranscript(rid);
      dispatchToastMessage({
        type: 'success',
        message: t('Livechat_transcript_request_has_been_canceled')
      });
      closeModal();
    } catch (error) {
      handleError(error);
    }
  }, [closeModal, discardTranscript, dispatchToastMessage, rid, t]);
  const forwardChat = useMethod('livechat:transfer');
  const handleForwardChat = useCallback(async (departmentId, userId, comment) => {
    if (departmentId && userId) {
      return;
    }

    const transferData = {
      roomId: rid,
      comment,
      clientAction: true
    };

    if (departmentId) {
      transferData.departmentId = departmentId;
    }

    if (userId) {
      transferData.userId = userId;
    }

    try {
      const result = await forwardChat(transferData);

      if (!result) {
        throw new Error(departmentId ? t('error-no-agents-online-in-department') : t('error-forwarding-chat'));
      }

      dispatchToastMessage({
        type: 'success',
        message: t('Transferred')
      });
      FlowRouter.go('/');
      closeModal();
    } catch (error) {
      handleError(error);
    }
  }, [closeModal, dispatchToastMessage, forwardChat, rid, t]);
  const closeChat = useMethod('livechat:closeRoom');
  const handleClose = useCallback(async (comment, tags) => {
    try {
      await closeChat(rid, comment, {
        clientAction: true,
        tags
      });
      closeModal();
      dispatchToastMessage({
        type: 'success',
        message: t('Chat_closed_successfully')
      });
    } catch (error) {
      handleError(error);
    }
  }, [closeChat, closeModal, dispatchToastMessage, rid, t]);
  const onHoldChat = useEndpoint('POST', 'livechat/room.onHold');
  const handleOnHoldChat = useCallback(async () => {
    try {
      await onHoldChat({
        roomId: rid
      });
      closeModal();
      dispatchToastMessage({
        type: 'success',
        message: t('Chat_On_Hold_Successfully')
      });
    } catch (error) {
      handleError(error);
    }
  }, [onHoldChat, rid, closeModal, dispatchToastMessage, t]);
  const openModal = useMutableCallback(async id => {
    switch (id) {
      case QuickActionsEnum.MoveQueue:
        setModal( /*#__PURE__*/React.createElement(ReturnChatQueueModal, {
          onMoveChat: handleMoveChat,
          onCancel: closeModal
        }));
        break;

      case QuickActionsEnum.Transcript:
        const visitorEmail = await getVisitorEmail();

        if (!visitorEmail) {
          dispatchToastMessage({
            type: 'error',
            message: t('Customer_without_registered_email')
          });
          break;
        }

        setModal( /*#__PURE__*/React.createElement(TranscriptModal, {
          room: room,
          email: visitorEmail,
          onRequest: handleRequestTranscript,
          onSend: handleSendTranscript,
          onDiscard: handleDiscardTranscript,
          onCancel: closeModal
        }));
        break;

      case QuickActionsEnum.ChatForward:
        setModal( /*#__PURE__*/React.createElement(ForwardChatModal, {
          room: room,
          onForward: handleForwardChat,
          onCancel: closeModal
        }));
        break;

      case QuickActionsEnum.CloseChat:
        setModal(room.departmentId ? /*#__PURE__*/React.createElement(CloseChatModalData, {
          departmentId: room.departmentId,
          onConfirm: handleClose,
          onCancel: closeModal
        }) : /*#__PURE__*/React.createElement(CloseChatModal, {
          onConfirm: handleClose,
          onCancel: closeModal
        }));
        break;

      case QuickActionsEnum.OnHoldChat:
        setModal( /*#__PURE__*/React.createElement(PlaceChatOnHoldModal, {
          onOnHoldChat: handleOnHoldChat,
          onCancel: closeOnHoldModal
        }));
        setOnHoldModalActive(true);
        break;

      default:
        break;
    }
  });
  const omnichannelRouteConfig = useOmnichannelRouteConfig();
  const manualOnHoldAllowed = useSetting('Livechat_allow_manual_on_hold');
  const hasManagerRole = useRole('livechat-manager');
  const roomOpen = (room === null || room === void 0 ? void 0 : room.open) && (((_room$u = room.u) === null || _room$u === void 0 ? void 0 : _room$u._id) === uid || hasManagerRole) && (room === null || room === void 0 ? void 0 : (_room$lastMessage = room.lastMessage) === null || _room$lastMessage === void 0 ? void 0 : _room$lastMessage.t) !== 'livechat-close';
  const canMoveQueue = !!(omnichannelRouteConfig !== null && omnichannelRouteConfig !== void 0 && omnichannelRouteConfig.returnQueue) && (room === null || room === void 0 ? void 0 : room.u) !== undefined;
  const canForwardGuest = usePermission('transfer-livechat-guest');
  const canSendTranscript = usePermission('send-omnichannel-chat-transcript');
  const canCloseRoom = usePermission('close-livechat-room');
  const canCloseOthersRoom = usePermission('close-others-livechat-room');
  const canPlaceChatOnHold = Boolean(!room.onHold && room.u && !((_room$lastMessage2 = room.lastMessage) !== null && _room$lastMessage2 !== void 0 && _room$lastMessage2.token) && manualOnHoldAllowed);

  const hasPermissionButtons = id => {
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

  const visibleActions = actions.filter(_ref => {
    let {
      id
    } = _ref;
    return hasPermissionButtons(id);
  });
  const actionDefault = useMutableCallback(e => {
    const index = e.currentTarget.getAttribute('data-quick-actions');
    const {
      id
    } = visibleActions[index];
    openModal(id);
  });
  const getAction = useMutableCallback(id => {
    openModal(id);
  });
  return {
    visibleActions,
    actionDefault,
    getAction
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/Omnichannel/QuickActions/hooks/65fa5e6a1bf53998903f60214eb389520ba4e62b.map
