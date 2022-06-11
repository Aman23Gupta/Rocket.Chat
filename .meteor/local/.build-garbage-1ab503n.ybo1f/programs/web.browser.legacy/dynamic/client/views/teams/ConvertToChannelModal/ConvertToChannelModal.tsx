function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/ConvertToChannelModal/ConvertToChannelModal.tsx                                                  //
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
module.link("../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 4);
var AsyncStatePhase;
module.link("../../../lib/asyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 5);
var BaseConvertToChannelModal;
module.link("./BaseConvertToChannelModal", {
  "default": function (v) {
    BaseConvertToChannelModal = v;
  }
}, 6);

var ConvertToChannelModal = function (_ref) {
  var onClose = _ref.onClose,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm,
      teamId = _ref.teamId,
      userId = _ref.userId;
  var t = useTranslation();

  var _useEndpointData = useEndpointData('teams.listRoomsOfUser', useMemo(function () {
    return {
      teamId: teamId,
      userId: userId,
      canUserDelete: true
    };
  }, [teamId, userId])),
      value = _useEndpointData.value,
      phase = _useEndpointData.phase;

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
//# sourceMappingURL=/dynamic/client/views/teams/ConvertToChannelModal/86536f2023488eb2962827f35361c36d7e00e15f.map
