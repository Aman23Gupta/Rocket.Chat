function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/ModalPortal.tsx                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let memo, useState;
module.link("react", {
  memo(v) {
    memo = v;
  },

  useState(v) {
    useState = v;
  }

}, 0);
let createPortal;
module.link("react-dom", {
  createPortal(v) {
    createPortal = v;
  }

}, 1);

const getModalRoot = () => {
  const modalRoot = document.getElementById('modal-root');

  if (modalRoot) {
    return modalRoot;
  }

  const newElement = document.createElement('div');
  newElement.id = 'modal-root';
  document.body.appendChild(newElement);
  return newElement;
};

const ModalPortal = _ref => {
  let {
    children
  } = _ref;
  const [modalRoot] = useState(getModalRoot);
  return /*#__PURE__*/createPortal(children, modalRoot);
};

module.exportDefault( /*#__PURE__*/memo(ModalPortal));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/acd4d4897f36230b87f55d7a063cc570ae7c9ec0.map
