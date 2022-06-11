function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Call/Jitsi/CallJitsiWithData.js                                                     //
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
var Skeleton;
module.link("@rocket.chat/fuselage", {
  Skeleton: function (v) {
    Skeleton = v;
  }
}, 0);
var useMutableCallback, useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  },
  useSafely: function (v) {
    useSafely = v;
  }
}, 1);
var clear;
module.link("@rocket.chat/memo", {
  clear: function (v) {
    clear = v;
  }
}, 2);
var React, useRef, useEffect, useState, useMemo, useLayoutEffect, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useRef: function (v) {
    useRef = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useLayoutEffect: function (v) {
    useLayoutEffect = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 3);
var HEARTBEAT, TIMEOUT, DEBOUNCE;
module.link("../../../../../../app/videobridge/constants", {
  HEARTBEAT: function (v) {
    HEARTBEAT = v;
  },
  TIMEOUT: function (v) {
    TIMEOUT = v;
  },
  DEBOUNCE: function (v) {
    DEBOUNCE = v;
  }
}, 4);
var useConnectionStatus;
module.link("../../../../../contexts/ConnectionStatusContext", {
  useConnectionStatus: function (v) {
    useConnectionStatus = v;
  }
}, 5);
var useSetModal;
module.link("../../../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 6);
var useMethod;
module.link("../../../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 7);
var useSettings;
module.link("../../../../../contexts/SettingsContext", {
  useSettings: function (v) {
    useSettings = v;
  }
}, 8);
var useToastMessageDispatch;
module.link("../../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 9);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 10);
var useUser;
module.link("../../../../../contexts/UserContext", {
  useUser: function (v) {
    useUser = v;
  }
}, 11);
var useRoom;
module.link("../../../contexts/RoomContext", {
  useRoom: function (v) {
    useRoom = v;
  }
}, 12);
var useTabBarClose;
module.link("../../../providers/ToolboxProvider", {
  useTabBarClose: function (v) {
    useTabBarClose = v;
  }
}, 13);
var CallJitsi;
module.link("./CallJitsi", {
  "default": function (v) {
    CallJitsi = v;
  }
}, 14);
var CallModal;
module.link("./components/CallModal", {
  "default": function (v) {
    CallModal = v;
  }
}, 15);
var JitsiBridge;
module.link("./lib/JitsiBridge", {
  JitsiBridge: function (v) {
    JitsiBridge = v;
  }
}, 16);
module.link("./CallJitsi", {
  "default": "CallJitsi"
}, 17);
var querySettings = {
  _id: ['Jitsi_Open_New_Window', 'Jitsi_Domain', 'Jitsi_URL_Room_Hash', 'uniqueID', 'Jitsi_URL_Room_Prefix', 'Jitsi_URL_Room_Suffix', 'Jitsi_Chrome_Extension', 'Jitsi_SSL', 'Jitsi_Enabled_TokenAuth']
};

var CallJitsiWithData = function (_ref) {
  var rid = _ref.rid;
  var user = useUser();

  var _useConnectionStatus = useConnectionStatus(),
      connected = _useConnectionStatus.connected;

  var _useSafely = useSafely(useState()),
      _useSafely2 = _slicedToArray(_useSafely, 2),
      accessToken = _useSafely2[0],
      setAccessToken = _useSafely2[1];

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      accepted = _useState2[0],
      setAccepted = _useState2[1];

  var room = useRoom();
  var setModal = useSetModal();
  var handleClose = useTabBarClose();
  var closeModal = useMutableCallback(function () {
    return setModal(null);
  });
  var generateAccessToken = useMethod('jitsi:generateAccessToken');
  var updateTimeout = useMethod('jitsi:updateTimeout');
  var dispatchToastMessage = useToastMessageDispatch();
  var t = useTranslation();
  var handleCancel = useMutableCallback(function () {
    closeModal();
    handleClose();
  });
  var ref = useRef();

  var _Object$fromEntries = Object.fromEntries(useSettings(querySettings).map(function (_ref2) {
    var _id = _ref2._id,
        value = _ref2.value;
    return [_id, value];
  })),
      openNewWindow = _Object$fromEntries.Jitsi_Open_New_Window,
      domain = _Object$fromEntries.Jitsi_Domain,
      ssl = _Object$fromEntries.Jitsi_SSL,
      desktopSharingChromeExtId = _Object$fromEntries.Jitsi_Chrome_Extension,
      useHashName = _Object$fromEntries.Jitsi_URL_Room_Hash,
      uniqueID = _Object$fromEntries.uniqueID,
      prefix = _Object$fromEntries.Jitsi_URL_Room_Prefix,
      sufix = _Object$fromEntries.Jitsi_URL_Room_Suffix,
      isEnabledTokenAuth = _Object$fromEntries.Jitsi_Enabled_TokenAuth;

  useEffect(function () {
    var ignore = false;

    if (!isEnabledTokenAuth) {
      setAccessToken();
      return;
    }

    (function () {
      function _callee() {
        var accessToken;
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _regeneratorRuntime.awrap(generateAccessToken(rid));

                case 2:
                  accessToken = _context.sent;
                  !ignore && setAccessToken(accessToken);

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, null, Promise);
      }

      return _callee;
    })()();
    return function () {
      ignore = true;
    };
  }, [generateAccessToken, isEnabledTokenAuth, rid, setAccessToken]);
  useLayoutEffect(function () {
    if (!connected) {
      handleClose();
    }
  }, [connected, handleClose]);
  var rname = useHashName ? uniqueID + rid : encodeURIComponent(room.t === 'd' ? room.usernames.join(' x ') : room.name);
  var jitsi = useMemo(function () {
    if (isEnabledTokenAuth && !accessToken) {
      return;
    }

    var jitsiRoomName = prefix + rname + sufix;
    return new JitsiBridge({
      openNewWindow: openNewWindow,
      ssl: ssl,
      domain: domain,
      jitsiRoomName: jitsiRoomName,
      accessToken: accessToken,
      desktopSharingChromeExtId: desktopSharingChromeExtId,
      name: user.name || user.username
    }, HEARTBEAT);
  }, [accessToken, desktopSharingChromeExtId, domain, isEnabledTokenAuth, openNewWindow, prefix, rname, ssl, sufix, user.name, user.username]);
  var testAndHandleTimeout = useMutableCallback(function () {
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
  useEffect(function () {
    if (!accepted || !jitsi) {
      return;
    }

    var clear = function () {
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
    return function () {
      if (!jitsi.openNewWindow) clear();
    };
  }, [accepted, jitsi, rid, testAndHandleTimeout, updateTimeout, dispatchToastMessage, handleClose, t]);
  var handleYes = useMutableCallback(function () {
    if (jitsi) {
      jitsi.needsStart = true;
    }

    setAccepted(true);

    if (openNewWindow) {
      handleClose();
    }
  });
  useLayoutEffect(function () {
    if (!accepted) {
      setModal(function () {
        return /*#__PURE__*/React.createElement(CallModal, {
          handleYes: handleYes,
          handleCancel: handleCancel
        });
      });
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Call/Jitsi/4633d11f7498c888bd1803d7ef81bc45e83e3494.map
