function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/ConvertToChannelModal/BaseConvertToChannelModal.tsx                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var React, useState, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var FirstStep;
module.link("./ModalSteps/FirstStep", {
  "default": function (v) {
    FirstStep = v;
  }
}, 2);
var SecondStep;
module.link("./ModalSteps/SecondStep", {
  "default": function (v) {
    SecondStep = v;
  }
}, 3);
var STEPS = {
  LIST_ROOMS: 'LIST_ROOMS',
  CONFIRM_CONVERT: 'CONFIRM_CONVERT'
};

var BaseConvertToChannelModal = function (_ref) {
  var onClose = _ref.onClose,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm,
      rooms = _ref.rooms,
      _ref$currentStep = _ref.currentStep,
      currentStep = _ref$currentStep === void 0 ? (rooms === null || rooms === void 0 ? void 0 : rooms.length) === 0 ? STEPS.CONFIRM_CONVERT : STEPS.LIST_ROOMS : _ref$currentStep;

  var _useState = useState(currentStep),
      _useState2 = _slicedToArray(_useState, 2),
      step = _useState2[0],
      setStep = _useState2[1];

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedRooms = _useState4[0],
      setSelectedRooms = _useState4[1];

  var onContinue = useMutableCallback(function () {
    return setStep(STEPS.CONFIRM_CONVERT);
  });
  var onReturn = useMutableCallback(function () {
    return setStep(STEPS.LIST_ROOMS);
  });
  var eligibleRooms = rooms;
  var onChangeRoomSelection = useCallback(function (room) {
    setSelectedRooms(function (selectedRooms) {
      var _objectSpread2;

      if (selectedRooms[room._id]) {
        delete selectedRooms[room._id];
        return _objectSpread({}, selectedRooms);
      }

      return _objectSpread(_objectSpread({}, selectedRooms), {}, (_objectSpread2 = {}, _objectSpread2[room._id] = room, _objectSpread2));
    });
  }, []);
  var onToggleAllRooms = useMutableCallback(function () {
    if (Object.values(selectedRooms).filter(Boolean).length === 0 && eligibleRooms) {
      return setSelectedRooms(Object.fromEntries(eligibleRooms.map(function (room) {
        return [room._id, room];
      })));
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
//# sourceMappingURL=/dynamic/client/views/teams/ConvertToChannelModal/9ca861b8438932e3af8f4904b6c1f0000eb20db6.map
