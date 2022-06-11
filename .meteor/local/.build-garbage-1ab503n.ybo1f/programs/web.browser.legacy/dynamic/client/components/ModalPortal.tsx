function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/ModalPortal.tsx                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var memo, useState;
module.link("react", {
  memo: function (v) {
    memo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 0);
var createPortal;
module.link("react-dom", {
  createPortal: function (v) {
    createPortal = v;
  }
}, 1);

var getModalRoot = function () {
  var modalRoot = document.getElementById('modal-root');

  if (modalRoot) {
    return modalRoot;
  }

  var newElement = document.createElement('div');
  newElement.id = 'modal-root';
  document.body.appendChild(newElement);
  return newElement;
};

var ModalPortal = function (_ref) {
  var children = _ref.children;

  var _useState = useState(getModalRoot),
      _useState2 = _slicedToArray(_useState, 1),
      modalRoot = _useState2[0];

  return /*#__PURE__*/createPortal(children, modalRoot);
};

module.exportDefault( /*#__PURE__*/memo(ModalPortal));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/0d4fc2edcd3e687b4624bb0ffa9700b39013b0b7.map
