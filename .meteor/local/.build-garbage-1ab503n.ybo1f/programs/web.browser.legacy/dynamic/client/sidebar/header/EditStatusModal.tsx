function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/EditStatusModal.tsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var Field, TextInput, FieldGroup, Modal, Icon, ButtonGroup, Button;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  Modal: function (v) {
    Modal = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useState, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 2);
var USER_STATUS_TEXT_MAX_LENGTH;
module.link("../../components/UserStatus", {
  USER_STATUS_TEXT_MAX_LENGTH: function (v) {
    USER_STATUS_TEXT_MAX_LENGTH = v;
  }
}, 3);
var UserStatusMenu;
module.link("../../components/UserStatusMenu", {
  "default": function (v) {
    UserStatusMenu = v;
  }
}, 4);
var useMethod;
module.link("../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 5);
var useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 6);
var useToastMessageDispatch;
module.link("../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 7);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 8);

var EditStatusModal = function (_ref) {
  var onClose = _ref.onClose,
      userStatus = _ref.userStatus,
      userStatusText = _ref.userStatusText;
  var allowUserStatusMessageChange = useSetting('Accounts_AllowUserStatusMessageChange');
  var setUserStatus = useMethod('setUserStatus');
  var dispatchToastMessage = useToastMessageDispatch();
  var t = useTranslation();

  var _useState = useState(userStatusText),
      _useState2 = _slicedToArray(_useState, 2),
      statusText = _useState2[0],
      setStatusText = _useState2[1];

  var _useState3 = useState(userStatus),
      _useState4 = _slicedToArray(_useState3, 2),
      statusType = _useState4[0],
      setStatusType = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      statusTextError = _useState6[0],
      setStatusTextError = _useState6[1];

  var handleStatusText = useMutableCallback(function (e) {
    setStatusText(e.currentTarget.value);

    if (statusText && statusText.length > USER_STATUS_TEXT_MAX_LENGTH) {
      return setStatusTextError(t('Max_length_is', USER_STATUS_TEXT_MAX_LENGTH));
    }

    return setStatusTextError(undefined);
  });

  var handleStatusType = function (type) {
    return setStatusType(type);
  };

  var handleSaveStatus = useCallback(function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(setUserStatus(statusType, statusText));

              case 3:
                dispatchToastMessage({
                  type: 'success',
                  message: t('StatusMessage_Changed_Successfully')
                });
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 9:
                onClose();

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 6]], Promise);
    }

    return _callee;
  }(), [dispatchToastMessage, statusType, statusText, setUserStatus, onClose, t]);
  return /*#__PURE__*/React.createElement(Modal, null, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Icon, {
    size: 24,
    name: "info"
  }), /*#__PURE__*/React.createElement(Modal.Title, null, t('Edit_Status')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Modal.Content, {
    fontScale: "p2"
  }, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('StatusMessage')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    error: statusTextError,
    disabled: !allowUserStatusMessageChange,
    flexGrow: 1,
    value: statusText,
    onChange: handleStatusText,
    placeholder: t('StatusMessage_Placeholder'),
    addon: /*#__PURE__*/React.createElement(UserStatusMenu, {
      margin: "neg-x2",
      onChange: handleStatusType,
      initialStatus: statusType
    })
  })), !allowUserStatusMessageChange && /*#__PURE__*/React.createElement(Field.Hint, null, t('StatusMessage_Change_Disabled')), /*#__PURE__*/React.createElement(Field.Error, null, statusTextError)))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end",
    flexGrow: 1,
    maxWidth: "full"
  }, /*#__PURE__*/React.createElement(Button, {
    ghost: true,
    onClick: onClose
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleSaveStatus,
    disabled: !!statusTextError
  }, t('Save')))));
};

module.exportDefault(EditStatusModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/header/52728b935103f96dcfe4db23a2e646eda063075e.map
