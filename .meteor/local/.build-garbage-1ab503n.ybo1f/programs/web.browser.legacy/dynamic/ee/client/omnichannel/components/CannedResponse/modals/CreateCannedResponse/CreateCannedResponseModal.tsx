function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/CannedResponse/modals/CreateCannedResponse/CreateCannedResponseModal.tsx           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Button, ButtonGroup, Modal;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Modal: function (v) {
    Modal = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var useTranslation;
module.link("../../../../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var CannedResponseForm;
module.link("../../../../cannedResponses/components/cannedResponseForm", {
  "default": function (v) {
    CannedResponseForm = v;
  }
}, 3);

var CreateCannedResponseModal = function (_ref) {
  var isManager = _ref.isManager,
      isMonitor = _ref.isMonitor,
      values = _ref.values,
      handlers = _ref.handlers,
      errors = _ref.errors,
      hasUnsavedChanges = _ref.hasUnsavedChanges,
      radioHandlers = _ref.radioHandlers,
      radioDescription = _ref.radioDescription,
      onClose = _ref.onClose,
      onSave = _ref.onSave,
      onPreview = _ref.onPreview,
      previewState = _ref.previewState;
  var t = useTranslation();
  var _id = values._id,
      shortcut = values.shortcut,
      text = values.text,
      scope = values.scope,
      departmentId = values.departmentId;
  var checkDepartment = scope !== 'department' || scope === 'department' && departmentId;
  var canSave = shortcut && text && checkDepartment;
  return /*#__PURE__*/React.createElement(Modal, null, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, _id ? t('Edit_Canned_Response') : t('Create_Canned_Response')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: function () {
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
    onClick: function () {
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/CannedResponse/modals/CreateCannedResponse/6aeb67e2ed4f5463c91a4d3243139a48ed96b371.map
