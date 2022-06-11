function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/OTR/OTRWithData.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var React, useEffect, useMemo, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var ORTInstance;
module.link("../../../../../app/otr/client/rocketchat.otr", {
  OTR: function (v) {
    ORTInstance = v;
  }
}, 2);
var useSetModal;
module.link("../../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 3);
var usePresence;
module.link("../../../../hooks/usePresence", {
  usePresence: function (v) {
    usePresence = v;
  }
}, 4);
var useReactiveValue;
module.link("../../../../hooks/useReactiveValue", {
  useReactiveValue: function (v) {
    useReactiveValue = v;
  }
}, 5);
var OTR;
module.link("./OTR", {
  "default": function (v) {
    OTR = v;
  }
}, 6);
var OTRModal;
module.link("./OTRModal", {
  "default": function (v) {
    OTRModal = v;
  }
}, 7);

var OTRWithData = function (_ref) {
  var _usePresence;

  var rid = _ref.rid,
      tabBar = _ref.tabBar;
  var onClickClose = useMutableCallback(function () {
    return tabBar && tabBar.close();
  });
  var setModal = useSetModal();
  var closeModal = useMutableCallback(function () {
    return setModal();
  });
  var otr = useMemo(function () {
    return ORTInstance.getInstanceByRoomId(rid);
  }, [rid]);

  var _useReactiveValue = useReactiveValue(useCallback(function () {
    return otr ? [otr.established.get(), otr.establishing.get()] : [false, false];
  }, [otr])),
      _useReactiveValue2 = _slicedToArray(_useReactiveValue, 2),
      isEstablished = _useReactiveValue2[0],
      isEstablishing = _useReactiveValue2[1];

  var userStatus = (_usePresence = usePresence(otr.peerId)) === null || _usePresence === void 0 ? void 0 : _usePresence.status;
  var isOnline = !['offline', 'loading'].includes(userStatus);

  var handleStart = function () {
    otr.handshake();
  };

  var handleEnd = function () {
    return otr === null || otr === void 0 ? void 0 : otr.end();
  };

  var handleReset = function () {
    otr.reset();
    otr.handshake(true);
  };

  useEffect(function () {
    if (isEstablished) {
      return closeModal();
    }

    if (!isEstablishing) {
      return;
    }

    var timeout = setTimeout(function () {
      otr.establishing.set(false);
      setModal( /*#__PURE__*/React.createElement(OTRModal, {
        onConfirm: closeModal,
        onCancel: closeModal
      }));
    }, 10000);
    return function () {
      return clearTimeout(timeout);
    };
  }, [closeModal, isEstablished, isEstablishing, setModal, otr]);
  return /*#__PURE__*/React.createElement(OTR, {
    isOnline: isOnline,
    isEstablishing: isEstablishing,
    isEstablished: isEstablished,
    onClickClose: onClickClose,
    onClickStart: handleStart,
    onClickEnd: handleEnd,
    onClickRefresh: handleReset
  });
};

module.exportDefault(OTRWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/OTR/80eaa4945fdd1345eff01c74cf2b4b9916a5b43d.map
