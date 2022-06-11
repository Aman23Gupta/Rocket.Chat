function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/members/RemoveUsersModal/RemoveUsersModal.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Skeleton;
module.link("@rocket.chat/fuselage", {
  Skeleton: function (v) {
    Skeleton = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var GenericModal;
module.link("../../../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 2);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 4);
var AsyncStatePhase;
module.link("../../../../../lib/asyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 5);
var BaseRemoveUsersModal;
module.link("./BaseRemoveUsersModal", {
  "default": function (v) {
    BaseRemoveUsersModal = v;
  }
}, 6);
var initialData = {
  user: {
    username: ''
  }
};

var RemoveUsersModal = function (_ref) {
  var teamId = _ref.teamId,
      userId = _ref.userId,
      onClose = _ref.onClose,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm;
  var t = useTranslation();

  var _useEndpointData = useEndpointData('teams.listRoomsOfUser', useMemo(function () {
    return {
      teamId: teamId,
      userId: userId
    };
  }, [teamId, userId])),
      value = _useEndpointData.value,
      phase = _useEndpointData.phase;

  var userDataFetch = useEndpointData('users.info', useMemo(function () {
    return {
      userId: userId
    };
  }, [userId]), initialData);

  var _userDataFetch$value = userDataFetch === null || userDataFetch === void 0 ? void 0 : userDataFetch.value,
      username = _userDataFetch$value.user.username;

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
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/members/RemoveUsersModal/ec0fdad9a212c1de55797d828cc99d4a0ca680d5.map
