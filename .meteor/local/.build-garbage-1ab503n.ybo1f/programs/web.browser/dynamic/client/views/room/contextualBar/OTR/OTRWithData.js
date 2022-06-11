function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/OTR/OTRWithData.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let React, useEffect, useMemo, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let ORTInstance;
module.link("../../../../../app/otr/client/rocketchat.otr", {
  OTR(v) {
    ORTInstance = v;
  }

}, 2);
let useSetModal;
module.link("../../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 3);
let usePresence;
module.link("../../../../hooks/usePresence", {
  usePresence(v) {
    usePresence = v;
  }

}, 4);
let useReactiveValue;
module.link("../../../../hooks/useReactiveValue", {
  useReactiveValue(v) {
    useReactiveValue = v;
  }

}, 5);
let OTR;
module.link("./OTR", {
  default(v) {
    OTR = v;
  }

}, 6);
let OTRModal;
module.link("./OTRModal", {
  default(v) {
    OTRModal = v;
  }

}, 7);

const OTRWithData = _ref => {
  var _usePresence;

  let {
    rid,
    tabBar
  } = _ref;
  const onClickClose = useMutableCallback(() => tabBar && tabBar.close());
  const setModal = useSetModal();
  const closeModal = useMutableCallback(() => setModal());
  const otr = useMemo(() => ORTInstance.getInstanceByRoomId(rid), [rid]);
  const [isEstablished, isEstablishing] = useReactiveValue(useCallback(() => otr ? [otr.established.get(), otr.establishing.get()] : [false, false], [otr]));
  const userStatus = (_usePresence = usePresence(otr.peerId)) === null || _usePresence === void 0 ? void 0 : _usePresence.status;
  const isOnline = !['offline', 'loading'].includes(userStatus);

  const handleStart = () => {
    otr.handshake();
  };

  const handleEnd = () => otr === null || otr === void 0 ? void 0 : otr.end();

  const handleReset = () => {
    otr.reset();
    otr.handshake(true);
  };

  useEffect(() => {
    if (isEstablished) {
      return closeModal();
    }

    if (!isEstablishing) {
      return;
    }

    const timeout = setTimeout(() => {
      otr.establishing.set(false);
      setModal( /*#__PURE__*/React.createElement(OTRModal, {
        onConfirm: closeModal,
        onCancel: closeModal
      }));
    }, 10000);
    return () => clearTimeout(timeout);
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/OTR/29fcc4affa48170e1473c714498e77ba07f02225.map
