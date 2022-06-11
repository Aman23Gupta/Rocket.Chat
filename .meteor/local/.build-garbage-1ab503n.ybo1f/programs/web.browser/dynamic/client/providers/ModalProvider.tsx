function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/ModalProvider.tsx                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Modal;
module.link("@rocket.chat/fuselage", {
  Modal(v) {
    Modal = v;
  }

}, 0);
let React, useState, useMemo, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let modal;
module.link("../../app/ui-utils/client/lib/modal", {
  modal(v) {
    modal = v;
  }

}, 2);
let ModalPortal;
module.link("../components/ModalPortal", {
  default(v) {
    ModalPortal = v;
  }

}, 3);
let ModalContext;
module.link("../contexts/ModalContext", {
  ModalContext(v) {
    ModalContext = v;
  }

}, 4);
let useImperativeModal;
module.link("../views/hooks/useImperativeModal", {
  useImperativeModal(v) {
    useImperativeModal = v;
  }

}, 5);

const ModalProvider = _ref => {
  let {
    children
  } = _ref;
  const [currentModal, setCurrentModal] = useState(null);
  const contextValue = useMemo(() => Object.assign(modal, {
    setModal: setCurrentModal
  }), []);
  useImperativeModal(setCurrentModal);
  return /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: contextValue
  }, children, currentModal && /*#__PURE__*/React.createElement(ModalPortal, null, /*#__PURE__*/React.createElement(Modal.Backdrop, {
    zIndex: 9999
  }, currentModal)));
};

module.exportDefault( /*#__PURE__*/memo(ModalProvider));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/fda5788817d0da59cfae89262d6a86cdf86440f5.map
