function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/contexts/ModalContext.ts                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  ModalContext: function () {
    return ModalContext;
  },
  useModal: function () {
    return useModal;
  },
  useSetModal: function () {
    return useSetModal;
  }
});
var createContext, useContext;
module.link("react", {
  createContext: function (v) {
    createContext = v;
  },
  useContext: function (v) {
    useContext = v;
  }
}, 0);
var modal;
module.link("../../app/ui-utils/client", {
  modal: function (v) {
    modal = v;
  }
}, 1);
var ModalContext = /*#__PURE__*/createContext(Object.assign(modal, {
  setModal: function () {
    return undefined;
  }
}));

var useModal = function () {
  return useContext(ModalContext);
};

var useSetModal = function () {
  return useContext(ModalContext).setModal;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/contexts/bdc052bffe73e918c2467d1cd4b53f293edc3735.map
