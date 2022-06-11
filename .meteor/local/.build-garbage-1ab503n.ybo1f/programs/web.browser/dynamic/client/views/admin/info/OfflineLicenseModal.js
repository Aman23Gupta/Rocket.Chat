function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/OfflineLicenseModal.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onClose", "license", "licenseStatus"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
let Modal, Box, ButtonGroup, Button, Scrollable, Callout, Margins, Icon;
module.link("@rocket.chat/fuselage", {
  Modal(v) {
    Modal = v;
  },

  Box(v) {
    Box = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  Scrollable(v) {
    Scrollable = v;
  },

  Callout(v) {
    Callout = v;
  },

  Margins(v) {
    Margins = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let useEndpointActionExperimental;
module.link("../../../hooks/useEndpointActionExperimental", {
  useEndpointActionExperimental(v) {
    useEndpointActionExperimental = v;
  }

}, 5);

const OfflineLicenseModal = _ref => {
  let {
    onClose,
    license,
    licenseStatus
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const [newLicense, setNewLicense] = useState(license);
  const [isUpdating, setIsUpdating] = useState(false);
  const [status, setStatus] = useState(licenseStatus);
  const [lastSetLicense, setLastSetLicense] = useState(license);

  const handleNewLicense = e => {
    setNewLicense(e.currentTarget.value);
  };

  const hasChanges = lastSetLicense !== newLicense;
  const addLicense = useEndpointActionExperimental('POST', 'licenses.add', t('Cloud_License_applied_successfully'));
  const handlePaste = useMutableCallback(async () => {
    try {
      const text = await navigator.clipboard.readText();
      setNewLicense(text);
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: "".concat(t('Paste_error'), ": ").concat(error)
      });
    }
  });
  const handleApplyLicense = useMutableCallback(async () => {
    setIsUpdating(true);
    setLastSetLicense(newLicense);
    const data = await addLicense({
      license: newLicense
    });

    if (data.success) {
      onClose();
      return;
    }

    setIsUpdating(false);
    setStatus('invalid');
  });
  return /*#__PURE__*/React.createElement(Modal, props, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, t('Cloud_Apply_Offline_License')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(Box, {
    withRichContent: true
  }, /*#__PURE__*/React.createElement("p", null, t('Cloud_register_offline_finish_helper'))), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    paddingInline: "x16",
    pb: "x8",
    flexGrow: 1,
    backgroundColor: "neutral-800",
    mb: status === 'invalid' && 'x8'
  }, /*#__PURE__*/React.createElement(Margins, {
    block: "x8"
  }, /*#__PURE__*/React.createElement(Scrollable, {
    vertical: true
  }, /*#__PURE__*/React.createElement(Box, {
    is: "textarea",
    height: "x108",
    fontFamily: "mono",
    fontScale: "p2",
    color: "alternative",
    style: {
      wordBreak: 'break-all',
      resize: 'none'
    },
    placeholder: t('Paste_here'),
    disabled: isUpdating,
    value: newLicense,
    autoComplete: "off",
    autoCorrect: "off",
    autoCapitalize: "off",
    spellCheck: "false",
    onChange: handleNewLicense
  })), /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "start"
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    small: true,
    disabled: isUpdating,
    onClick: handlePaste
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clipboard"
  }), t('Paste'))))), status === 'invalid' && /*#__PURE__*/React.createElement(Callout, {
    type: "danger"
  }, t('Cloud_Invalid_license'))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: !hasChanges || isUpdating,
    onClick: handleApplyLicense
  }, t('Cloud_Apply_license')))));
};

module.exportDefault(OfflineLicenseModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/a2d2a8833dc9c7d7f4c73f84ca6f1c0538e6b5c2.map
