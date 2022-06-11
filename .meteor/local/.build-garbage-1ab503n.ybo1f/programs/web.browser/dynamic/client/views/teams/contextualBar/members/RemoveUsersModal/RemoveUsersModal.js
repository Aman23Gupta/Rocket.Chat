function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/members/RemoveUsersModal/RemoveUsersModal.js                                       //
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
let useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 4);
let AsyncStatePhase;
module.link("../../../../../lib/asyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 5);
let BaseRemoveUsersModal;
module.link("./BaseRemoveUsersModal", {
  default(v) {
    BaseRemoveUsersModal = v;
  }

}, 6);
const initialData = {
  user: {
    username: ''
  }
};

const RemoveUsersModal = _ref => {
  let {
    teamId,
    userId,
    onClose,
    onCancel,
    onConfirm
  } = _ref;
  const t = useTranslation();
  const {
    value,
    phase
  } = useEndpointData('teams.listRoomsOfUser', useMemo(() => ({
    teamId,
    userId
  }), [teamId, userId]));
  const userDataFetch = useEndpointData('users.info', useMemo(() => ({
    userId
  }), [userId]), initialData);
  const {
    user: {
      username
    }
  } = userDataFetch === null || userDataFetch === void 0 ? void 0 : userDataFetch.value;

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

  return /*#__PURE__*/React.createElement(BaseRemoveUsersModal, {
    onClose: onClose,
    username: username,
    onCancel: onCancel,
    onConfirm: onConfirm,
    rooms: value === null || value === void 0 ? void 0 : value.rooms
  });
};

module.exportDefault(RemoveUsersModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/members/RemoveUsersModal/55b3f76b7711330e9ddcbac619d96478838b867c.map
