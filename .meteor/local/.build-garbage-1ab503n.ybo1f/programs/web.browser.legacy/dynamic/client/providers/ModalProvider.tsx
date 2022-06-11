function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/ModalProvider.tsx                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Modal;
module.link("@rocket.chat/fuselage", {
  Modal: function (v) {
    Modal = v;
  }
}, 0);
var React, useState, useMemo, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var modal;
module.link("../../app/ui-utils/client/lib/modal", {
  modal: function (v) {
    modal = v;
  }
}, 2);
var ModalPortal;
module.link("../components/ModalPortal", {
  "default": function (v) {
    ModalPortal = v;
  }
}, 3);
var ModalContext;
module.link("../contexts/ModalContext", {
  ModalContext: function (v) {
    ModalContext = v;
  }
}, 4);
var useImperativeModal;
module.link("../views/hooks/useImperativeModal", {
  useImperativeModal: function (v) {
    useImperativeModal = v;
  }
}, 5);

var ModalProvider = function (_ref) {
  var children = _ref.children;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      currentModal = _useState2[0],
      setCurrentModal = _useState2[1];

  var contextValue = useMemo(function () {
    return Object.assign(modal, {
      setModal: setCurrentModal
    });
  }, []);
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
//# sourceMappingURL=/dynamic/client/providers/33d45780d50ba105b03a19e344f8ec753762d1e3.map
