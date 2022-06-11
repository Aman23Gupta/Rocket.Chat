function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Info/ChannelToTeamModal/ChannelToTeamModal.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
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
}, 0);
var StepOne;
module.link("./StepOne", {
  "default": function (v) {
    StepOne = v;
  }
}, 1);
var StepTwo;
module.link("./StepTwo", {
  "default": function (v) {
    StepTwo = v;
  }
}, 2);

var ChannelToTeamModal = function (_ref) {
  var onClose = _ref.onClose,
      onConfirm = _ref.onConfirm;

  var _useState = useState(1),
      _useState2 = _slicedToArray(_useState, 2),
      step = _useState2[0],
      setStep = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      teamId = _useState4[0],
      setTeamId = _useState4[1];

  var nextStep = function () {
    return setStep(step + 1);
  };

  if (step === 2) {
    return /*#__PURE__*/React.createElement(StepTwo, {
      onClose: onClose,
      onCancel: onClose,
      onConfirm: function () {
        return onConfirm(teamId);
      }
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Info/ChannelToTeamModal/069d26405dfbd42e5e9aca37d98b3c828a676844.map
