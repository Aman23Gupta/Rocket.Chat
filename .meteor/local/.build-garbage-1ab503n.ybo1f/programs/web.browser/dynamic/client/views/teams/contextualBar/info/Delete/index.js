function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/Delete/index.js                                                               //
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
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let GenericModal;
module.link("../../../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 2);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let AsyncStatePhase;
module.link("../../../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 4);
let useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 5);
let DeleteTeamModal;
module.link("./DeleteTeamModal", {
  default(v) {
    DeleteTeamModal = v;
  }

}, 6);
let StepOne;
module.link("./StepOne", {
  default(v) {
    StepOne = v;
  }

}, 7);
let StepTwo;
module.link("./StepTwo", {
  default(v) {
    StepTwo = v;
  }

}, 8);

const DeleteTeamModalWithRooms = _ref => {
  let {
    teamId,
    onConfirm,
    onCancel
  } = _ref;
  const {
    value,
    phase
  } = useEndpointData('teams.listRooms', useMemo(() => ({
    teamId
  }), [teamId]));
  const t = useTranslation();

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

  return /*#__PURE__*/React.createElement(DeleteTeamModal, {
    onCancel: onCancel,
    onConfirm: onConfirm,
    rooms: value === null || value === void 0 ? void 0 : value.rooms
  });
};

module.exportDefault(DeleteTeamModalWithRooms);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/Delete/741af313fb516bb7ace7ae027be7cbff40f43d01.map
