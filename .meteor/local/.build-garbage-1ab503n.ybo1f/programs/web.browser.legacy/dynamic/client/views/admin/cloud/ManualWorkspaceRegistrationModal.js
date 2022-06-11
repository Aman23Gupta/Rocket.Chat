function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/cloud/ManualWorkspaceRegistrationModal.js                                                        //
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
var React, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var CopyStep;
module.link("./CopyStep", {
  "default": function (v) {
    CopyStep = v;
  }
}, 3);
var PasteStep;
module.link("./PasteStep", {
  "default": function (v) {
    PasteStep = v;
  }
}, 4);
var Steps = {
  COPY: 'copy',
  PASTE: 'paste'
};

function ManualWorkspaceRegistrationModal(_ref) {
  var onClose = _ref.onClose,
      props = _ref.props;
  var t = useTranslation();

  var _useState = useState(Steps.COPY),
      _useState2 = _slicedToArray(_useState, 2),
      step = _useState2[0],
      setStep = _useState2[1];

  var handleNextButtonClick = function () {
    setStep(Steps.PASTE);
  };

  var handleBackButtonClick = function () {
    setStep(Steps.COPY);
  };

  return /*#__PURE__*/React.createElement(Modal, props, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, t('Cloud_Register_manually')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onClose
  })), step === Steps.COPY && /*#__PURE__*/React.createElement(CopyStep, {
    onNextButtonClick: handleNextButtonClick
  }) || step === Steps.PASTE && /*#__PURE__*/React.createElement(PasteStep, {
    onBackButtonClick: handleBackButtonClick,
    onFinish: onClose
  }));
}

module.exportDefault(ManualWorkspaceRegistrationModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/cloud/a3fb1411f5382f2fca0ba4860120a2403f828686.map
