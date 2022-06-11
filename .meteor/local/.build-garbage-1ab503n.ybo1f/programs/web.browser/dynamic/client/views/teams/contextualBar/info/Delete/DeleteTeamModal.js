function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/Delete/DeleteTeamModal.js                                                     //
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
  DeleteTeamModal: () => DeleteTeamModal
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
  CONFIRM_DELETE: 'CONFIRM_DELETE'
};

const DeleteTeamModal = _ref => {
  let {
    onCancel,
    onConfirm,
    rooms
  } = _ref;
  const hasRooms = (rooms === null || rooms === void 0 ? void 0 : rooms.length) > 0;
  const [step, setStep] = useState(hasRooms ? STEPS.LIST_ROOMS : STEPS.CONFIRM_DELETE);
  const [deletedRooms, setDeletedRooms] = useState({});
  const [keptRooms, setKeptRooms] = useState({});
  const onContinue = useCallback(() => {
    setStep(STEPS.CONFIRM_DELETE);
  }, [setStep]);
  const onReturn = useCallback(() => {
    setStep(STEPS.LIST_ROOMS);
  }, [setStep]);
  const onChangeRoomSelection = useMutableCallback(room => {
    if (deletedRooms[room._id]) {
      setDeletedRooms(deletedRooms => {
        delete deletedRooms[room._id];
        return _objectSpread({}, deletedRooms);
      });
      return;
    }

    setDeletedRooms(deletedRooms => _objectSpread(_objectSpread({}, deletedRooms), {}, {
      [room._id]: room
    }));
  });
  const onToggleAllRooms = useMutableCallback(() => {
    if (Object.values(deletedRooms).filter(Boolean).length === 0) {
      return setDeletedRooms(Object.fromEntries(rooms.map(room => [room._id, room])));
    }

    setDeletedRooms({});
  });
  const onSelectRooms = useMutableCallback(() => {
    const keptRooms = Object.fromEntries(rooms.filter(room => !deletedRooms[room._id]).map(room => [room._id, room]));
    setKeptRooms(keptRooms);
    onContinue();
  });

  if (step === STEPS.CONFIRM_DELETE) {
    return /*#__PURE__*/React.createElement(StepTwo, {
      onConfirm: onConfirm,
      onReturn: hasRooms && onReturn,
      onCancel: onCancel,
      deletedRooms: deletedRooms,
      keptRooms: keptRooms
    });
  }

  return /*#__PURE__*/React.createElement(StepOne, {
    rooms: rooms,
    onCancel: onCancel,
    params: {},
    selectedRooms: deletedRooms,
    onToggleAllRooms: onToggleAllRooms,
    onChangeParams: function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return console.log(args);
    },
    onConfirm: onSelectRooms,
    onChangeRoomSelection: onChangeRoomSelection
  });
};

module.exportDefault(DeleteTeamModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/Delete/fb84651328e62e4de6029a56d0cb6fa17fad80e9.map
