function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/contexts/ModalContext.ts                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  ModalContext: () => ModalContext,
  useModal: () => useModal,
  useSetModal: () => useSetModal
});
let createContext, useContext;
module.link("react", {
  createContext(v) {
    createContext = v;
  },

  useContext(v) {
    useContext = v;
  }

}, 0);
let modal;
module.link("../../app/ui-utils/client", {
  modal(v) {
    modal = v;
  }

}, 1);
const ModalContext = /*#__PURE__*/createContext(Object.assign(modal, {
  setModal: () => undefined
}));

const useModal = () => useContext(ModalContext);

const useSetModal = () => useContext(ModalContext).setModal;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/contexts/10c29abd02cc7b72b602ae3c858b7973c190f084.map
