function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/RoomMenu.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["label"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 2);
let Option, Menu;
module.link("@rocket.chat/fuselage", {
  Option(v) {
    Option = v;
  },

  Menu(v) {
    Menu = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, memo, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 2);
let RoomManager;
module.link("../../app/ui-utils/client/lib/RoomManager", {
  RoomManager(v) {
    RoomManager = v;
  }

}, 3);
let roomTypes, UiTextContext;
module.link("../../app/utils/client", {
  roomTypes(v) {
    roomTypes = v;
  },

  UiTextContext(v) {
    UiTextContext = v;
  }

}, 4);
let GenericModalDoNotAskAgain;
module.link("../components/GenericModal", {
  GenericModalDoNotAskAgain(v) {
    GenericModalDoNotAskAgain = v;
  }

}, 5);
let usePermission;
module.link("../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 6);
let useSetModal;
module.link("../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 7);
let useRoute;
module.link("../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 8);
let useMethod;
module.link("../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 9);
let useSetting;
module.link("../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 10);
let useToastMessageDispatch;
module.link("../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 11);
let useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 12);
let useUserSubscription;
module.link("../contexts/UserContext", {
  useUserSubscription(v) {
    useUserSubscription = v;
  }

}, 13);
let useDontAskAgain;
module.link("../hooks/useDontAskAgain", {
  useDontAskAgain(v) {
    useDontAskAgain = v;
  }

}, 14);
let WarningModal;
module.link("../views/admin/apps/WarningModal", {
  default(v) {
    WarningModal = v;
  }

}, 15);
const fields = {
  f: 1,
  t: 1,
  name: 1
};

const RoomMenu = _ref => {
  let {
    rid,
    unread,
    threadUnread,
    alert,
    roomOpen,
    type,
    cl,
    name = ''
  } = _ref;
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const setModal = useSetModal();
  const closeModal = useMutableCallback(() => setModal());
  const router = useRoute('home');
  const subscription = useUserSubscription(rid, fields);
  const canFavorite = useSetting('Favorite_Rooms');
  const isFavorite = (subscription != null ? subscription.f : undefined) != null && subscription.f;
  const dontAskHideRoom = useDontAskAgain('hideRoom');
  const hideRoom = useMethod('hideRoom');
  const readMessages = useMethod('readMessages');
  const unreadMessages = useMethod('unreadMessages');
  const toggleFavorite = useMethod('toggleFavorite');
  const leaveRoom = useMethod('leaveRoom');
  const isUnread = alert || unread || threadUnread;
  const canLeaveChannel = usePermission('leave-c');
  const canLeavePrivate = usePermission('leave-p');

  const canLeave = (() => {
    if (type === 'c' && !canLeaveChannel) {
      return false;
    }

    if (type === 'p' && !canLeavePrivate) {
      return false;
    }

    return !(cl != null && !cl || ['d', 'l'].includes(type));
  })();

  const handleLeave = useMutableCallback(() => {
    const leave = async () => {
      try {
        await leaveRoom(rid);

        if (roomOpen) {
          router.push({});
        }

        RoomManager.close(rid);
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }

      closeModal();
    };

    const warnText = roomTypes.getConfig(type).getUiText(UiTextContext.LEAVE_WARNING);
    setModal( /*#__PURE__*/React.createElement(WarningModal, {
      text: t(warnText, name),
      confirmText: t('Leave_room'),
      close: closeModal,
      cancel: closeModal,
      cancelText: t('Cancel'),
      confirm: leave
    }));
  });
  const handleHide = useMutableCallback(async () => {
    const hide = async () => {
      try {
        await hideRoom(rid);
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }

      closeModal();
    };

    const warnText = roomTypes.getConfig(type).getUiText(UiTextContext.HIDE_WARNING);

    if (dontAskHideRoom) {
      return hide();
    }

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
    }, t(warnText, name)));
  });
  const handleToggleRead = useMutableCallback(async () => {
    try {
      if (isUnread) {
        await readMessages(rid);
        return;
      }

      await unreadMessages(null, rid);

      if (subscription == null) {
        return;
      }

      RoomManager.close(subscription.t + subscription.name);
      router.push({});
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  });
  const handleToggleFavorite = useMutableCallback(async () => {
    try {
      await toggleFavorite(rid, !isFavorite);
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  });
  const menuOptions = useMemo(() => _objectSpread(_objectSpread({
    hideRoom: {
      label: {
        label: t('Hide'),
        icon: 'eye-off'
      },
      action: handleHide
    },
    toggleRead: {
      label: {
        label: isUnread ? t('Mark_read') : t('Mark_unread'),
        icon: 'flag'
      },
      action: handleToggleRead
    }
  }, canFavorite && {
    toggleFavorite: {
      label: {
        label: isFavorite ? t('Unfavorite') : t('Favorite'),
        icon: isFavorite ? 'star-filled' : 'star'
      },
      action: handleToggleFavorite
    }
  }), canLeave && {
    leaveRoom: {
      label: {
        label: t('Leave_room'),
        icon: 'sign-out'
      },
      action: handleLeave
    }
  }), [t, handleHide, isUnread, handleToggleRead, canFavorite, isFavorite, handleToggleFavorite, canLeave, handleLeave]);
  return /*#__PURE__*/React.createElement(Menu, {
    "rcx-sidebar-item__menu": true,
    mini: true,
    "aria-keyshortcuts": "alt",
    tabIndex: -1,
    options: menuOptions,
    renderItem: _ref2 => {
      let {
        label: {
          label,
          icon
        }
      } = _ref2,
          props = _objectWithoutProperties(_ref2, _excluded);

      return /*#__PURE__*/React.createElement(Option, _extends({
        label: label,
        title: label,
        icon: icon
      }, props));
    }
  });
};

module.exportDefault( /*#__PURE__*/memo(RoomMenu));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/7a674d527615fe1d338a4e37e83bbbb08e0af65f.map
