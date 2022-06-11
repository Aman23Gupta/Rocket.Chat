function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/ConvertToChannelModal/ConvertToChannelModal.tsx                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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
module.link("../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 4);
let AsyncStatePhase;
module.link("../../../lib/asyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 5);
let BaseConvertToChannelModal;
module.link("./BaseConvertToChannelModal", {
  default(v) {
    BaseConvertToChannelModal = v;
  }

}, 6);

const ConvertToChannelModal = _ref => {
  let {
    onClose,
    onCancel,
    onConfirm,
    teamId,
    userId
  } = _ref;
  const t = useTranslation();
  const {
    value,
    phase
  } = useEndpointData('teams.listRoomsOfUser', useMemo(() => ({
    teamId,
    userId,
    canUserDelete: true
  }), [teamId, userId]));

  if (phase === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(GenericModal, {
      variant: "warning",
      onClose: onClose,
      title: /*#__PURE__*/React.createElement(Skeleton, {
        width: "50%"
      }),
      confirmText: t('Cancel'),
      onConfirm: onClose
    }, /*#__PURE__*/React.createElement(Skeleton, {
      width: "full"
    }));
  }

  return /*#__PURE__*/React.createElement(BaseConvertToChannelModal, {
    onClose: onClose,
    onCancel: onCancel,
    onConfirm: onConfirm,
    rooms: value === null || value === void 0 ? void 0 : value.rooms
  });
};

module.exportDefault(ConvertToChannelModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/ConvertToChannelModal/b6174467c59241c6e57e372d3df8ec060675743b.map
