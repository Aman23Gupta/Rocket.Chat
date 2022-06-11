function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/members/RemoveUsersModal/BaseRemoveUsersModal.js                                   //
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
let usePermission;
module.link("../../../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 2);
let RemoveUsersFirstStep;
module.link("./RemoveUsersFirstStep", {
  default(v) {
    RemoveUsersFirstStep = v;
  }

}, 3);
let RemoveUsersSecondStep;
module.link("./RemoveUsersSecondStep", {
  default(v) {
    RemoveUsersSecondStep = v;
  }

}, 4);
const STEPS = {
  LIST_ROOMS: 'LIST_ROOMS',
  CONFIRM_DELETE: 'CONFIRM_DELETE'
};

const BaseRemoveUsersModal = _ref => {
  let {
    onClose,
    onCancel,
    onConfirm,
    rooms,
    currentStep = (rooms === null || rooms === void 0 ? void 0 : rooms.length) === 0 ? STEPS.CONFIRM_DELETE : STEPS.LIST_ROOMS,
    username
  } = _ref;
  const [step, setStep] = useState(currentStep);
  const [selectedRooms, setSelectedRooms] = useState({});
  const onContinue = useMutableCallback(() => setStep(STEPS.CONFIRM_DELETE));
  const onReturn = useMutableCallback(() => setStep(STEPS.LIST_ROOMS));
  const canViewUserRooms = usePermission('view-all-team-channels');
  const eligibleRooms = rooms.filter(_ref2 => {
    let {
      isLastOwner
    } = _ref2;
    return !isLastOwner;
  });
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
    if (Object.values(selectedRooms).filter(Boolean).length === 0) {
      return setSelectedRooms(Object.fromEntries(eligibleRooms.map(room => [room._id, room])));
    }

    setSelectedRooms({});
  });

  if (step === STEPS.CONFIRM_DELETE || !canViewUserRooms) {
    return /*#__PURE__*/React.createElement(RemoveUsersSecondStep, {
      onConfirm: onConfirm,
      onClose: onClose,
      onCancel: (rooms === null || rooms === void 0 ? void 0 : rooms.length) > 0 ? onReturn : onCancel,
      deletedRooms: selectedRooms,
      rooms: rooms,
      username: username
    });
  }

  return /*#__PURE__*/React.createElement(RemoveUsersFirstStep, {
    onConfirm: onContinue,
    onClose: onClose,
    onCancel: onCancel,
    rooms: rooms,
    params: {},
    selectedRooms: selectedRooms,
    onToggleAllRooms: onToggleAllRooms // onChangeParams={(...args) => console.log(args)}
    ,
    onChangeRoomSelection: onChangeRoomSelection,
    eligibleRoomsLength: eligibleRooms.length
  });
};

module.exportDefault(BaseRemoveUsersModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/members/RemoveUsersModal/387cf3d1afb0c8e0bf9bb23bd6d15f1b19c3edf9.map
