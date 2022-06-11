function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/CannedResponse/modals/CreateCannedResponse/CreateCannedResponseModal.tsx           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Button, ButtonGroup, Modal;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Modal(v) {
    Modal = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let useTranslation;
module.link("../../../../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let CannedResponseForm;
module.link("../../../../cannedResponses/components/cannedResponseForm", {
  default(v) {
    CannedResponseForm = v;
  }

}, 3);

const CreateCannedResponseModal = _ref => {
  let {
    isManager,
    isMonitor,
    values,
    handlers,
    errors,
    hasUnsavedChanges,
    radioHandlers,
    radioDescription,
    onClose,
    onSave,
    onPreview,
    previewState
  } = _ref;
  const t = useTranslation();
  const {
    _id,
    shortcut,
    text,
    scope,
    departmentId
  } = values;
  const checkDepartment = scope !== 'department' || scope === 'department' && departmentId;
  const canSave = shortcut && text && checkDepartment;
  return /*#__PURE__*/React.createElement(Modal, null, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, _id ? t('Edit_Canned_Response') : t('Create_Canned_Response')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: () => {
      onClose(null);
    }
  })), /*#__PURE__*/React.createElement(Modal.Content, {
    fontScale: "p2"
  }, /*#__PURE__*/React.createElement(CannedResponseForm, {
    isManager: isManager,
    isMonitor: isMonitor,
    values: values,
    handlers: handlers,
    errors: errors,
    radioHandlers: radioHandlers,
    radioDescription: radioDescription,
    onPreview: onPreview,
    previewState: previewState
  })), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => {
      onClose(null);
    }
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: !hasUnsavedChanges || !canSave,
    onClick: onSave
  }, t('Save')))));
};

module.exportDefault( /*#__PURE__*/memo(CreateCannedResponseModal));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/CannedResponse/modals/CreateCannedResponse/0ca0a6954bcc0ef1c9fd215b31198e87937872cc.map
