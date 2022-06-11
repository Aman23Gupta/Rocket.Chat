function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/Delete/DeleteTeamModal.js                                                     //
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
  DeleteTeamModal: function () {
    return DeleteTeamModal;
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
  CONFIRM_DELETE: 'CONFIRM_DELETE'
};

var DeleteTeamModal = function (_ref) {
  var onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm,
      rooms = _ref.rooms;
  var hasRooms = (rooms === null || rooms === void 0 ? void 0 : rooms.length) > 0;

  var _useState = useState(hasRooms ? STEPS.LIST_ROOMS : STEPS.CONFIRM_DELETE),
      _useState2 = _slicedToArray(_useState, 2),
      step = _useState2[0],
      setStep = _useState2[1];

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      deletedRooms = _useState4[0],
      setDeletedRooms = _useState4[1];

  var _useState5 = useState({}),
      _useState6 = _slicedToArray(_useState5, 2),
      keptRooms = _useState6[0],
      setKeptRooms = _useState6[1];

  var onContinue = useCallback(function () {
    setStep(STEPS.CONFIRM_DELETE);
  }, [setStep]);
  var onReturn = useCallback(function () {
    setStep(STEPS.LIST_ROOMS);
  }, [setStep]);
  var onChangeRoomSelection = useMutableCallback(function (room) {
    if (deletedRooms[room._id]) {
      setDeletedRooms(function (deletedRooms) {
        delete deletedRooms[room._id];
        return _objectSpread({}, deletedRooms);
      });
      return;
    }

    setDeletedRooms(function (deletedRooms) {
      var _objectSpread2;

      return _objectSpread(_objectSpread({}, deletedRooms), {}, (_objectSpread2 = {}, _objectSpread2[room._id] = room, _objectSpread2));
    });
  });
  var onToggleAllRooms = useMutableCallback(function () {
    if (Object.values(deletedRooms).filter(Boolean).length === 0) {
      return setDeletedRooms(Object.fromEntries(rooms.map(function (room) {
        return [room._id, room];
      })));
    }

    setDeletedRooms({});
  });
  var onSelectRooms = useMutableCallback(function () {
    var keptRooms = Object.fromEntries(rooms.filter(function (room) {
      return !deletedRooms[room._id];
    }).map(function (room) {
      return [room._id, room];
    }));
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
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/Delete/e634186c845e4c9f517097d3970b4bde4a74ccb0.map
