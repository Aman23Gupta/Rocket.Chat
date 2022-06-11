function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/Leave/index.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  StepOne: function () {
    return StepOne;
  },
  StepTwo: function () {
    return StepTwo;
  }
});
var Skeleton;
module.link("@rocket.chat/fuselage", {
  Skeleton: function (v) {
    Skeleton = v;
  }
}, 0);
var React, useEffect, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var GenericModal;
module.link("../../../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 2);
var useEndpoint;
module.link("../../../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 3);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var useUserId;
module.link("../../../../../contexts/UserContext", {
  useUserId: function (v) {
    useUserId = v;
  }
}, 5);
var useAsyncState;
module.link("../../../../../hooks/useAsyncState", {
  useAsyncState: function (v) {
    useAsyncState = v;
  }
}, 6);
var AsyncStatePhase;
module.link("../../../../../lib/asyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 7);
var LeaveTeamModal;
module.link("./LeaveTeamModal", {
  "default": function (v) {
    LeaveTeamModal = v;
  }
}, 8);
var StepOne;
module.link("./StepOne", {
  "default": function (v) {
    StepOne = v;
  }
}, 9);
var StepTwo;
module.link("./StepTwo", {
  "default": function (v) {
    StepTwo = v;
  }
}, 10);

var LeaveTeamModalWithRooms = function (_ref) {
  var teamId = _ref.teamId,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm;
  var t = useTranslation();
  var userId = useUserId();
  var listRooms = useEndpoint('GET', 'teams.listRoomsOfUser');

  var _useAsyncState = useAsyncState([]),
      resolve = _useAsyncState.resolve,
      reject = _useAsyncState.reject,
      reset = _useAsyncState.reset,
      phase = _useAsyncState.phase,
      value = _useAsyncState.value;

  var fetchData = useCallback(function () {
    reset();
    listRooms({
      teamId: teamId,
      userId: userId
    }).then(resolve).catch(function (error) {
      console.error(error);
      reject(error);
    });
  }, [reset, listRooms, teamId, userId, resolve, reject]);
  useEffect(function () {
    fetchData();
  }, [fetchData]);

  if (phase === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(GenericModal, {
      variant: "warning",
      onClose: onCancel,
      onConfirm: onCancel,
      title: /*#__PURE__*/React.createElement(Skeleton, {
        width: "50%"
      }),
      confirmText: t('Cancel')
    }, /*#__PURE__*/React.createElement(Skeleton, {
      width: "full"
    }));
  }

  return /*#__PURE__*/React.createElement(LeaveTeamModal, {
    onCancel: onCancel,
    onConfirm: onConfirm,
    rooms: (value === null || value === void 0 ? void 0 : value.rooms) || []
  });
};

module.exportDefault(LeaveTeamModalWithRooms);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/Leave/87e3a3dfce6107c43dcec7d9b3ca66981b5242df.map
