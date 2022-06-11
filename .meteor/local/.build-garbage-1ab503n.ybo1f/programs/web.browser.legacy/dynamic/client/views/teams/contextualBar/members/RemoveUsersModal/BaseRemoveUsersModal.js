function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/members/RemoveUsersModal/BaseRemoveUsersModal.js                                   //
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
var usePermission;
module.link("../../../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 2);
var RemoveUsersFirstStep;
module.link("./RemoveUsersFirstStep", {
  "default": function (v) {
    RemoveUsersFirstStep = v;
  }
}, 3);
var RemoveUsersSecondStep;
module.link("./RemoveUsersSecondStep", {
  "default": function (v) {
    RemoveUsersSecondStep = v;
  }
}, 4);
var STEPS = {
  LIST_ROOMS: 'LIST_ROOMS',
  CONFIRM_DELETE: 'CONFIRM_DELETE'
};

var BaseRemoveUsersModal = function (_ref) {
  var onClose = _ref.onClose,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm,
      rooms = _ref.rooms,
      _ref$currentStep = _ref.currentStep,
      currentStep = _ref$currentStep === void 0 ? (rooms === null || rooms === void 0 ? void 0 : rooms.length) === 0 ? STEPS.CONFIRM_DELETE : STEPS.LIST_ROOMS : _ref$currentStep,
      username = _ref.username;

  var _useState = useState(currentStep),
      _useState2 = _slicedToArray(_useState, 2),
      step = _useState2[0],
      setStep = _useState2[1];

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedRooms = _useState4[0],
      setSelectedRooms = _useState4[1];

  var onContinue = useMutableCallback(function () {
    return setStep(STEPS.CONFIRM_DELETE);
  });
  var onReturn = useMutableCallback(function () {
    return setStep(STEPS.LIST_ROOMS);
  });
  var canViewUserRooms = usePermission('view-all-team-channels');
  var eligibleRooms = rooms.filter(function (_ref2) {
    var isLastOwner = _ref2.isLastOwner;
    return !isLastOwner;
  });
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
    if (Object.values(selectedRooms).filter(Boolean).length === 0) {
      return setSelectedRooms(Object.fromEntries(eligibleRooms.map(function (room) {
        return [room._id, room];
      })));
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
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/members/RemoveUsersModal/0bfc01cad5163e14a7246ff540d722182987b275.map
