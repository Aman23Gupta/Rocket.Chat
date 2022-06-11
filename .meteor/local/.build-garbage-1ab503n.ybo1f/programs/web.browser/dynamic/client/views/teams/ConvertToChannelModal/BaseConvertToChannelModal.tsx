function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/ConvertToChannelModal/BaseConvertToChannelModal.tsx                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let React, useState, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let FirstStep;
module.link("./ModalSteps/FirstStep", {
  default(v) {
    FirstStep = v;
  }

}, 2);
let SecondStep;
module.link("./ModalSteps/SecondStep", {
  default(v) {
    SecondStep = v;
  }

}, 3);
const STEPS = {
  LIST_ROOMS: 'LIST_ROOMS',
  CONFIRM_CONVERT: 'CONFIRM_CONVERT'
};

const BaseConvertToChannelModal = _ref => {
  let {
    onClose,
    onCancel,
    onConfirm,
    rooms,
    currentStep = (rooms === null || rooms === void 0 ? void 0 : rooms.length) === 0 ? STEPS.CONFIRM_CONVERT : STEPS.LIST_ROOMS
  } = _ref;
  const [step, setStep] = useState(currentStep);
  const [selectedRooms, setSelectedRooms] = useState({});
  const onContinue = useMutableCallback(() => setStep(STEPS.CONFIRM_CONVERT));
  const onReturn = useMutableCallback(() => setStep(STEPS.LIST_ROOMS));
  const eligibleRooms = rooms;
  const onChangeRoomSelection = useCallback(room => {
    setSelectedRooms(selectedRooms => {
      if (selectedRooms[room._id]) {
        delete selectedRooms[room._id];
        return _objectSpread({}, selectedRooms);
      }

      return _objectSpread(_objectSpread({}, selectedRooms), {}, {
        [room._id]: room
      });
    });
  }, []);
  const onToggleAllRooms = useMutableCallback(() => {
    if (Object.values(selectedRooms).filter(Boolean).length === 0 && eligibleRooms) {
      return setSelectedRooms(Object.fromEntries(eligibleRooms.map(room => [room._id, room])));
    }

    setSelectedRooms({});
  });

  if (step === STEPS.CONFIRM_CONVERT) {
    return /*#__PURE__*/React.createElement(SecondStep, {
      onConfirm: onConfirm,
      onClose: onClose,
      onCancel: rooms && rooms.length > 0 ? onReturn : onCancel,
      deletedRooms: selectedRooms,
      rooms: rooms
    });
  }

  return /*#__PURE__*/React.createElement(FirstStep, {
    onConfirm: onContinue,
    onClose: onClose,
    onCancel: onCancel,
    rooms: rooms,
    selectedRooms: selectedRooms,
    onToggleAllRooms: onToggleAllRooms,
    onChangeRoomSelection: onChangeRoomSelection,
    eligibleRoomsLength: eligibleRooms === null || eligibleRooms === void 0 ? void 0 : eligibleRooms.length
  });
};

module.exportDefault(BaseConvertToChannelModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/ConvertToChannelModal/c5af017561dc34fdfd7066c98118fd85e71ae0ef.map
