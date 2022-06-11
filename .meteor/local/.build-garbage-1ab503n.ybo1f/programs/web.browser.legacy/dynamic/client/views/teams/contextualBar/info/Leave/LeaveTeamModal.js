function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/Leave/LeaveTeamModal.js                                                       //
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
module.export({
  LeaveTeamModal: function () {
    return LeaveTeamModal;
  }
});
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
var StepOne, StepTwo;
module.link(".", {
  StepOne: function (v) {
    StepOne = v;
  },
  StepTwo: function (v) {
    StepTwo = v;
  }
}, 2);
var STEPS = {
  LIST_ROOMS: 'LIST_ROOMS',
  CONFIRM_LEAVE: 'CONFIRM_LEAVE'
};

var LeaveTeamModal = function (_ref) {
  var onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm,
      rooms = _ref.rooms;

  var _useState = useState(function () {
    if (rooms.length === 0) {
      return STEPS.CONFIRM_LEAVE;
    }

    return STEPS.LIST_ROOMS;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      step = _useState2[0],
      setStep = _useState2[1];

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedRooms = _useState4[0],
      setSelectedRooms = _useState4[1];

  var lastOwnerRooms = rooms.filter(function (_ref2) {
    var isLastOwner = _ref2.isLastOwner;
    return isLastOwner;
  });
  var onContinue = useCallback(function () {
    return setStep(STEPS.CONFIRM_LEAVE);
  }, []);
  var onReturn = useCallback(function () {
    return setStep(STEPS.LIST_ROOMS);
  }, []);
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
    setSelectedRooms(function (selectedRooms) {
      if (Object.values(selectedRooms).filter(Boolean).length === 0) {
        return Object.fromEntries(rooms.filter(function (_ref3) {
          var isLastOwner = _ref3.isLastOwner;
          return !isLastOwner;
        }).map(function (room) {
          return [room._id, room];
        }));
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
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/Leave/7a2e70ddedd1ffde78048674a52270311329c245.map
