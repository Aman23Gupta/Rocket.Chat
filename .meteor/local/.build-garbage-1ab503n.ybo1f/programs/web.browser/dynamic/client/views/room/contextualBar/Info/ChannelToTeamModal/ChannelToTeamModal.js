function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Info/ChannelToTeamModal/ChannelToTeamModal.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  }

}, 0);
let StepOne;
module.link("./StepOne", {
  default(v) {
    StepOne = v;
  }

}, 1);
let StepTwo;
module.link("./StepTwo", {
  default(v) {
    StepTwo = v;
  }

}, 2);

const ChannelToTeamModal = _ref => {
  let {
    onClose,
    onConfirm
  } = _ref;
  const [step, setStep] = useState(1);
  const [teamId, setTeamId] = useState();

  const nextStep = () => setStep(step + 1);

  if (step === 2) {
    return /*#__PURE__*/React.createElement(StepTwo, {
      onClose: onClose,
      onCancel: onClose,
      onConfirm: () => onConfirm(teamId)
    });
  }

  return /*#__PURE__*/React.createElement(StepOne, {
    onClose: onClose,
    onCancel: onClose,
    onConfirm: nextStep,
    onChange: setTeamId,
    teamId: teamId
  });
};

module.exportDefault(ChannelToTeamModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Info/ChannelToTeamModal/a6c9e16884d507b459788e18bbbed9c2cc57a414.map
