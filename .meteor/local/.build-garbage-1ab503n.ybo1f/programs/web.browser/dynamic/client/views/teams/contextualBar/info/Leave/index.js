function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/Leave/index.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  StepOne: () => StepOne,
  StepTwo: () => StepTwo
});
let Skeleton;
module.link("@rocket.chat/fuselage", {
  Skeleton(v) {
    Skeleton = v;
  }

}, 0);
let React, useEffect, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let GenericModal;
module.link("../../../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 2);
let useEndpoint;
module.link("../../../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 3);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let useUserId;
module.link("../../../../../contexts/UserContext", {
  useUserId(v) {
    useUserId = v;
  }

}, 5);
let useAsyncState;
module.link("../../../../../hooks/useAsyncState", {
  useAsyncState(v) {
    useAsyncState = v;
  }

}, 6);
let AsyncStatePhase;
module.link("../../../../../lib/asyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 7);
let LeaveTeamModal;
module.link("./LeaveTeamModal", {
  default(v) {
    LeaveTeamModal = v;
  }

}, 8);
let StepOne;
module.link("./StepOne", {
  default(v) {
    StepOne = v;
  }

}, 9);
let StepTwo;
module.link("./StepTwo", {
  default(v) {
    StepTwo = v;
  }

}, 10);

const LeaveTeamModalWithRooms = _ref => {
  let {
    teamId,
    onCancel,
    onConfirm
  } = _ref;
  const t = useTranslation();
  const userId = useUserId();
  const listRooms = useEndpoint('GET', 'teams.listRoomsOfUser');
  const {
    resolve,
    reject,
    reset,
    phase,
    value
  } = useAsyncState([]);
  const fetchData = useCallback(() => {
    reset();
    listRooms({
      teamId,
      userId
    }).then(resolve).catch(error => {
      console.error(error);
      reject(error);
    });
  }, [reset, listRooms, teamId, userId, resolve, reject]);
  useEffect(() => {
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
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/Leave/0f3fad765404621906f4ac9a44c32fcb159939ff.map
