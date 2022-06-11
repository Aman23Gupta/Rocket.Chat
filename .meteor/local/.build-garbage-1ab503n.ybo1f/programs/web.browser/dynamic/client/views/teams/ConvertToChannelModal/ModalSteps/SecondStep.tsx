function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/ConvertToChannelModal/ModalSteps/SecondStep.tsx                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onClose", "onCancel", "onConfirm", "deletedRooms", "rooms"];

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
module.link("../../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 2);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

const SecondStep = _ref => {
  let {
    onClose,
    onCancel,
    onConfirm,
    deletedRooms = {},
    rooms = []
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  return /*#__PURE__*/React.createElement(GenericModal, _extends({}, props, {
    variant: "warning",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "modal-warning",
      size: 24,
      color: "warning"
    }),
    cancelText: (rooms === null || rooms === void 0 ? void 0 : rooms.length) > 0 ? t('Back') : t('Cancel'),
    confirmText: t('Convert'),
    title: t('Confirmation'),
    onClose: onClose,
    onCancel: onCancel,
    onConfirm: () => onConfirm(deletedRooms)
  }), t('You_are_converting_team_to_channel'));
};

module.exportDefault(SecondStep);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/ConvertToChannelModal/ModalSteps/c5a807e0430a3ad8903c6bb82ab398904639f18e.map
