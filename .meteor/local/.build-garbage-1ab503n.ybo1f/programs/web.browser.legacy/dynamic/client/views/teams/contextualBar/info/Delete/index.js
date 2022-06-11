function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/Delete/index.js                                                               //
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
var AsyncStatePhase;
module.link("../../../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 4);
var useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 5);
var DeleteTeamModal;
module.link("./DeleteTeamModal", {
  "default": function (v) {
    DeleteTeamModal = v;
  }
}, 6);
var StepOne;
module.link("./StepOne", {
  "default": function (v) {
    StepOne = v;
  }
}, 7);
var StepTwo;
module.link("./StepTwo", {
  "default": function (v) {
    StepTwo = v;
  }
}, 8);

var DeleteTeamModalWithRooms = function (_ref) {
  var teamId = _ref.teamId,
      onConfirm = _ref.onConfirm,
      onCancel = _ref.onCancel;

  var _useEndpointData = useEndpointData('teams.listRooms', useMemo(function () {
    return {
      teamId: teamId
    };
  }, [teamId])),
      value = _useEndpointData.value,
      phase = _useEndpointData.phase;

  var t = useTranslation();

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
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/Delete/dddb8dc90bcea66df621363019376c33807d3225.map
