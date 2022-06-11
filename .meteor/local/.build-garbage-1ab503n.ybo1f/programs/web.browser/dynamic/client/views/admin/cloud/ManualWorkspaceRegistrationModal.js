function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/cloud/ManualWorkspaceRegistrationModal.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Modal;
module.link("@rocket.chat/fuselage", {
  Modal(v) {
    Modal = v;
  }

}, 0);
let React, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let CopyStep;
module.link("./CopyStep", {
  default(v) {
    CopyStep = v;
  }

}, 3);
let PasteStep;
module.link("./PasteStep", {
  default(v) {
    PasteStep = v;
  }

}, 4);
const Steps = {
  COPY: 'copy',
  PASTE: 'paste'
};

function ManualWorkspaceRegistrationModal(_ref) {
  let {
    onClose,
    props
  } = _ref;
  const t = useTranslation();
  const [step, setStep] = useState(Steps.COPY);

  const handleNextButtonClick = () => {
    setStep(Steps.PASTE);
  };

  const handleBackButtonClick = () => {
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
//# sourceMappingURL=/dynamic/client/views/admin/cloud/5635463c493f25e81257bdee2bc7e01bbc43b1b8.map
