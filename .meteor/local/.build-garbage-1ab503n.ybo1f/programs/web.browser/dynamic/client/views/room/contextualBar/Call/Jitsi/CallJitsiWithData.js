function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Call/Jitsi/CallJitsiWithData.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Skeleton;
module.link("@rocket.chat/fuselage", {
  Skeleton(v) {
    Skeleton = v;
  }

}, 0);
let useMutableCallback, useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  },

  useSafely(v) {
    useSafely = v;
  }

}, 1);
let clear;
module.link("@rocket.chat/memo", {
  clear(v) {
    clear = v;
  }

}, 2);
let React, useRef, useEffect, useState, useMemo, useLayoutEffect, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  useRef(v) {
    useRef = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useLayoutEffect(v) {
    useLayoutEffect = v;
  },

  memo(v) {
    memo = v;
  }

}, 3);
let HEARTBEAT, TIMEOUT, DEBOUNCE;
module.link("../../../../../../app/videobridge/constants", {
  HEARTBEAT(v) {
    HEARTBEAT = v;
  },

  TIMEOUT(v) {
    TIMEOUT = v;
  },

  DEBOUNCE(v) {
    DEBOUNCE = v;
  }

}, 4);
let useConnectionStatus;
module.link("../../../../../contexts/ConnectionStatusContext", {
  useConnectionStatus(v) {
    useConnectionStatus = v;
  }

}, 5);
let useSetModal;
module.link("../../../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 6);
let useMethod;
module.link("../../../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 7);
let useSettings;
module.link("../../../../../contexts/SettingsContext", {
  useSettings(v) {
    useSettings = v;
  }

}, 8);
let useToastMessageDispatch;
module.link("../../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 9);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 10);
let useUser;
module.link("../../../../../contexts/UserContext", {
  useUser(v) {
    useUser = v;
  }

}, 11);
let useRoom;
module.link("../../../contexts/RoomContext", {
  useRoom(v) {
    useRoom = v;
  }

}, 12);
let useTabBarClose;
module.link("../../../providers/ToolboxProvider", {
  useTabBarClose(v) {
    useTabBarClose = v;
  }

}, 13);
let CallJitsi;
module.link("./CallJitsi", {
  default(v) {
    CallJitsi = v;
  }

}, 14);
let CallModal;
module.link("./components/CallModal", {
  default(v) {
    CallModal = v;
  }

}, 15);
let JitsiBridge;
module.link("./lib/JitsiBridge", {
  JitsiBridge(v) {
    JitsiBridge = v;
  }

}, 16);
module.link("./CallJitsi", {
  default: "CallJitsi"
}, 17);
const querySettings = {
  _id: ['Jitsi_Open_New_Window', 'Jitsi_Domain', 'Jitsi_URL_Room_Hash', 'uniqueID', 'Jitsi_URL_Room_Prefix', 'Jitsi_URL_Room_Suffix', 'Jitsi_Chrome_Extension', 'Jitsi_SSL', 'Jitsi_Enabled_TokenAuth']
};

const CallJitsiWithData = _ref => {
  let {
    rid
  } = _ref;
  const user = useUser();
  const {
    connected
  } = useConnectionStatus();
  const [accessToken, setAccessToken] = useSafely(useState());
  const [accepted, setAccepted] = useState(false);
  const room = useRoom();
  const setModal = useSetModal();
  const handleClose = useTabBarClose();
  const closeModal = useMutableCallback(() => setModal(null));
  const generateAccessToken = useMethod('jitsi:generateAccessToken');
  const updateTimeout = useMethod('jitsi:updateTimeout');
  const dispatchToastMessage = useToastMessageDispatch();
  const t = useTranslation();
  const handleCancel = useMutableCallback(() => {
    closeModal();
    handleClose();
  });
  const ref = useRef();
  const {
    Jitsi_Open_New_Window: openNewWindow,
    Jitsi_Domain: domain,
    Jitsi_SSL: ssl,
    Jitsi_Chrome_Extension: desktopSharingChromeExtId,
    Jitsi_URL_Room_Hash: useHashName,
    uniqueID,
    Jitsi_URL_Room_Prefix: prefix,
    Jitsi_URL_Room_Suffix: sufix,
    Jitsi_Enabled_TokenAuth: isEnabledTokenAuth
  } = Object.fromEntries(useSettings(querySettings).map(_ref2 => {
    let {
      _id,
      value
    } = _ref2;
    return [_id, value];
  }));
  useEffect(() => {
    let ignore = false;

    if (!isEnabledTokenAuth) {
      setAccessToken();
      return;
    }

    (async () => {
      const accessToken = await generateAccessToken(rid);
      !ignore && setAccessToken(accessToken);
    })();

    return () => {
      ignore = true;
    };
  }, [generateAccessToken, isEnabledTokenAuth, rid, setAccessToken]);
  useLayoutEffect(() => {
    if (!connected) {
      handleClose();
    }
  }, [connected, handleClose]);
  const rname = useHashName ? uniqueID + rid : encodeURIComponent(room.t === 'd' ? room.usernames.join(' x ') : room.name);
  const jitsi = useMemo(() => {
    if (isEnabledTokenAuth && !accessToken) {
      return;
    }

    const jitsiRoomName = prefix + rname + sufix;
    return new JitsiBridge({
      openNewWindow,
      ssl,
      domain,
      jitsiRoomName,
      accessToken,
      desktopSharingChromeExtId,
      name: user.name || user.username
    }, HEARTBEAT);
  }, [accessToken, desktopSharingChromeExtId, domain, isEnabledTokenAuth, openNewWindow, prefix, rname, ssl, sufix, user.name, user.username]);
  const testAndHandleTimeout = useMutableCallback(() => {
    if (jitsi.openNewWindow) {
      var _jitsi$window;

      if ((_jitsi$window = jitsi.window) !== null && _jitsi$window !== void 0 && _jitsi$window.closed) {
        return jitsi.dispose();
      }

      try {
        return updateTimeout(rid, false);
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: t(error.reason)
        });
        clear();
        handleClose();
        return jitsi.dispose();
      }
    }

    if (new Date() - new Date(room.jitsiTimeout) > TIMEOUT) {
      return jitsi.dispose();
    }

    if (new Date() - new Date(room.jitsiTimeout) + TIMEOUT > DEBOUNCE) {
      try {
        return updateTimeout(rid, false);
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: t(error.reason)
        });
        clear();
        handleClose();
        return jitsi.dispose();
      }
    }
  });
  useEffect(() => {
    if (!accepted || !jitsi) {
      return;
    }

    const clear = () => {
      jitsi.off('HEARTBEAT', testAndHandleTimeout);
      jitsi.dispose();
    };

    try {
      if (jitsi.needsStart) {
        jitsi.start(ref.current);
        updateTimeout(rid, true);
      } else {
        updateTimeout(rid, false);
      }
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: t(error.reason)
      });
      clear();
      handleClose();
    }

    jitsi.on('HEARTBEAT', testAndHandleTimeout);
    return () => {
      if (!jitsi.openNewWindow) clear();
    };
  }, [accepted, jitsi, rid, testAndHandleTimeout, updateTimeout, dispatchToastMessage, handleClose, t]);
  const handleYes = useMutableCallback(() => {
    if (jitsi) {
      jitsi.needsStart = true;
    }

    setAccepted(true);

    if (openNewWindow) {
      handleClose();
    }
  });
  useLayoutEffect(() => {
    if (!accepted) {
      setModal(() => /*#__PURE__*/React.createElement(CallModal, {
        handleYes: handleYes,
        handleCancel: handleCancel
      }));
      return;
    }

    closeModal();
  }, [accepted, closeModal, handleCancel, handleYes, setModal]);
  return /*#__PURE__*/React.createElement(CallJitsi, {
    handleClose: handleClose,
    openNewWindow: openNewWindow,
    refContent: ref
  }, !accepted && /*#__PURE__*/React.createElement(Skeleton, null));
};

module.exportDefault( /*#__PURE__*/memo(CallJitsiWithData));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Call/Jitsi/c17a1265d9cc7deaa83d06cd1736cc3cb5f4632c.map
