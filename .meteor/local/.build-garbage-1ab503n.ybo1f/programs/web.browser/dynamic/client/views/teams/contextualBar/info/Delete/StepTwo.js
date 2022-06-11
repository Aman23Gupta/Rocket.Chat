function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/Delete/StepTwo.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  StepTwo: () => StepTwo
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let GenericModal;
module.link("../../../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 1);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let RoomLinkList;
module.link("../../RoomLinkList", {
  default(v) {
    RoomLinkList = v;
  }

}, 3);

const StepTwo = _ref => {
  let {
    deletedRooms,
    keptRooms,
    onConfirm,
    onReturn,
    onCancel
  } = _ref;
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(GenericModal, {
    variant: "danger",
    icon: "trash",
    title: t('Deleting'),
    onConfirm: () => onConfirm(Object.values(deletedRooms).map(_ref2 => {
      let {
        _id
      } = _ref2;
      return _id;
    })),
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
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/Delete/e5b663cc07cc868365b28b2b1f43e384cf8b8a06.map
