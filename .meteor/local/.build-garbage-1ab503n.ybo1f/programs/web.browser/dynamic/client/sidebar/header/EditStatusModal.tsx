function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/EditStatusModal.tsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Field, TextInput, FieldGroup, Modal, Icon, ButtonGroup, Button;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  },

  Modal(v) {
    Modal = v;
  },

  Icon(v) {
    Icon = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useState, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 2);
let USER_STATUS_TEXT_MAX_LENGTH;
module.link("../../components/UserStatus", {
  USER_STATUS_TEXT_MAX_LENGTH(v) {
    USER_STATUS_TEXT_MAX_LENGTH = v;
  }

}, 3);
let UserStatusMenu;
module.link("../../components/UserStatusMenu", {
  default(v) {
    UserStatusMenu = v;
  }

}, 4);
let useMethod;
module.link("../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 5);
let useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 6);
let useToastMessageDispatch;
module.link("../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 7);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 8);

const EditStatusModal = _ref => {
  let {
    onClose,
    userStatus,
    userStatusText
  } = _ref;
  const allowUserStatusMessageChange = useSetting('Accounts_AllowUserStatusMessageChange');
  const setUserStatus = useMethod('setUserStatus');
  const dispatchToastMessage = useToastMessageDispatch();
  const t = useTranslation();
  const [statusText, setStatusText] = useState(userStatusText);
  const [statusType, setStatusType] = useState(userStatus);
  const [statusTextError, setStatusTextError] = useState();
  const handleStatusText = useMutableCallback(e => {
    setStatusText(e.currentTarget.value);

    if (statusText && statusText.length > USER_STATUS_TEXT_MAX_LENGTH) {
      return setStatusTextError(t('Max_length_is', USER_STATUS_TEXT_MAX_LENGTH));
    }

    return setStatusTextError(undefined);
  });

  const handleStatusType = type => setStatusType(type);

  const handleSaveStatus = useCallback(async () => {
    try {
      await setUserStatus(statusType, statusText);
      dispatchToastMessage({
        type: 'success',
        message: t('StatusMessage_Changed_Successfully')
      });
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }

    onClose();
  }, [dispatchToastMessage, statusType, statusText, setUserStatus, onClose, t]);
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
//# sourceMappingURL=/dynamic/client/sidebar/header/18f0e86ef33e4da1190f5756cfe7074375a631b7.map
