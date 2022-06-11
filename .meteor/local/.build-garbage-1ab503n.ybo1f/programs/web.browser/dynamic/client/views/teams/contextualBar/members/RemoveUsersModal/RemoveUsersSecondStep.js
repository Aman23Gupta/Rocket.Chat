function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/members/RemoveUsersModal/RemoveUsersSecondStep.js                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onClose", "onCancel", "onConfirm", "deletedRooms", "username", "rooms"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Icon;
module.link("@rocket.chat/fuselage", {
  Icon(v) {
    Icon = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
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

const RemoveUsersSecondStep = _ref => {
  let {
    onClose,
    onCancel,
    onConfirm,
    deletedRooms = {},
    username,
    rooms = []
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  return /*#__PURE__*/React.createElement(GenericModal, _extends({
    variant: "danger",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "modal-warning",
      size: 24,
      color: "warning"
    }),
    cancelText: (rooms === null || rooms === void 0 ? void 0 : rooms.length) > 0 ? t('Back') : t('Cancel'),
    confirmText: t('Remove'),
    title: t('Confirmation'),
    onClose: onClose,
    onCancel: onCancel,
    onConfirm: () => onConfirm(deletedRooms)
  }, props), t('Teams_removing__username__from_team', {
    username
  }));
};

module.exportDefault(RemoveUsersSecondStep);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/members/RemoveUsersModal/595fecec8dfe5272164ff7f2f8935f120bb56676.map
