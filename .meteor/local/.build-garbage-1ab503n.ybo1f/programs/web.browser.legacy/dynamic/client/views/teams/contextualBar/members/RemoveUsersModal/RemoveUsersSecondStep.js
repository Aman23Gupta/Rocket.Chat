function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/members/RemoveUsersModal/RemoveUsersSecondStep.js                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onClose", "onCancel", "onConfirm", "deletedRooms", "username", "rooms"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Icon;
module.link("@rocket.chat/fuselage", {
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
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

var RemoveUsersSecondStep = function (_ref) {
  var onClose = _ref.onClose,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm,
      _ref$deletedRooms = _ref.deletedRooms,
      deletedRooms = _ref$deletedRooms === void 0 ? {} : _ref$deletedRooms,
      username = _ref.username,
      _ref$rooms = _ref.rooms,
      rooms = _ref$rooms === void 0 ? [] : _ref$rooms,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
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
    onConfirm: function () {
      return onConfirm(deletedRooms);
    }
  }, props), t('Teams_removing__username__from_team', {
    username: username
  }));
};

module.exportDefault(RemoveUsersSecondStep);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/members/RemoveUsersModal/0aa7ade619d32ba47f9f4c49ee4178f4166d0e94.map
