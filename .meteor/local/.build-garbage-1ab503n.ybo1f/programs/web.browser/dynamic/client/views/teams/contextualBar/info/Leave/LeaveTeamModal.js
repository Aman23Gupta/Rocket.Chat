function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/Leave/LeaveTeamModal.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
module.export({
  LeaveTeamModal: () => LeaveTeamModal
});
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
let StepOne, StepTwo;
module.link(".", {
  StepOne(v) {
    StepOne = v;
  },

  StepTwo(v) {
    StepTwo = v;
  }

}, 2);
const STEPS = {
  LIST_ROOMS: 'LIST_ROOMS',
  CONFIRM_LEAVE: 'CONFIRM_LEAVE'
};

const LeaveTeamModal = _ref => {
  let {
    onCancel,
    onConfirm,
    rooms
  } = _ref;
  const [step, setStep] = useState(() => {
    if (rooms.length === 0) {
      return STEPS.CONFIRM_LEAVE;
    }

    return STEPS.LIST_ROOMS;
  });
  const [selectedRooms, setSelectedRooms] = useState({});
  const lastOwnerRooms = rooms.filter(_ref2 => {
    let {
      isLastOwner
    } = _ref2;
    return isLastOwner;
  });
  const onContinue = useCallback(() => setStep(STEPS.CONFIRM_LEAVE), []);
  const onReturn = useCallback(() => setStep(STEPS.LIST_ROOMS), []);
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
    setSelectedRooms(selectedRooms => {
      if (Object.values(selectedRooms).filter(Boolean).length === 0) {
        return Object.fromEntries(rooms.filter(_ref3 => {
          let {
            isLastOwner
          } = _ref3;
          return !isLastOwner;
        }).map(room => [room._id, room]));
      }

      return {};
    });
  });

  if (step === STEPS.CONFIRM_LEAVE) {
    return /*#__PURE__*/React.createElement(StepTwo, {
      onConfirm: onConfirm,
      onCancel: rooms.length > 0 && onReturn,
      onClose: onCancel,
      rooms: rooms
    });
  }

  return /*#__PURE__*/React.createElement(StepOne, {
    rooms: rooms,
    onCancel: onCancel,
    params: {},
    eligibleRoomsLength: rooms.length - lastOwnerRooms.length,
    selectedRooms: selectedRooms,
    onToggleAllRooms: onToggleAllRooms,
    onChangeParams: function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return console.log(args);
    },
    onConfirm: onContinue,
    onChangeRoomSelection: onChangeRoomSelection
  });
};

module.exportDefault(LeaveTeamModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/Leave/d2b0f6586072cc8e9cc2bd86f0a7e5396ec02eae.map
