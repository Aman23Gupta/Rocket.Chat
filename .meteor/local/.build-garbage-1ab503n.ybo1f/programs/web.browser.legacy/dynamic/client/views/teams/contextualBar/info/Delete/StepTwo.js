function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/Delete/StepTwo.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  StepTwo: function () {
    return StepTwo;
  }
});
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var GenericModal;
module.link("../../../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 1);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var RoomLinkList;
module.link("../../RoomLinkList", {
  "default": function (v) {
    RoomLinkList = v;
  }
}, 3);

var StepTwo = function (_ref) {
  var deletedRooms = _ref.deletedRooms,
      keptRooms = _ref.keptRooms,
      onConfirm = _ref.onConfirm,
      onReturn = _ref.onReturn,
      onCancel = _ref.onCancel;
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(GenericModal, {
    variant: "danger",
    icon: "trash",
    title: t('Deleting'),
    onConfirm: function () {
      return onConfirm(Object.values(deletedRooms).map(function (_ref2) {
        var _id = _ref2._id;
        return _id;
      }));
    },
    onCancel: onReturn,
    confirmText: t('Remove'),
    cancelText: t('Back'),
    onClose: onCancel
  }, /*#__PURE__*/React.createElement("p", null, t('Teams_delete_team')), !!Object.values(deletedRooms).length && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, t('Teams_deleted_channels'), " ", /*#__PURE__*/React.createElement(RoomLinkList, {
    rooms: deletedRooms
  }))), !!Object.values(keptRooms).length && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, t('Teams_kept_channels'), " ", /*#__PURE__*/React.createElement(RoomLinkList, {
    rooms: keptRooms
  }))));
};

module.exportDefault(StepTwo);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/Delete/5fb9f20870dea4d9569c4873ee7704bad6631111.map
