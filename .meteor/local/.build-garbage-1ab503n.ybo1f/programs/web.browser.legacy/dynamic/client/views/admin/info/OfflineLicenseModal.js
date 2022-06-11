function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/OfflineLicenseModal.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onClose", "license", "licenseStatus"];

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

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var Modal, Box, ButtonGroup, Button, Scrollable, Callout, Margins, Icon;
module.link("@rocket.chat/fuselage", {
  Modal: function (v) {
    Modal = v;
  },
  Box: function (v) {
    Box = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  Scrollable: function (v) {
    Scrollable = v;
  },
  Callout: function (v) {
    Callout = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var useEndpointActionExperimental;
module.link("../../../hooks/useEndpointActionExperimental", {
  useEndpointActionExperimental: function (v) {
    useEndpointActionExperimental = v;
  }
}, 5);

var OfflineLicenseModal = function (_ref) {
  var onClose = _ref.onClose,
      license = _ref.license,
      licenseStatus = _ref.licenseStatus,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();

  var _useState = useState(license),
      _useState2 = _slicedToArray(_useState, 2),
      newLicense = _useState2[0],
      setNewLicense = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isUpdating = _useState4[0],
      setIsUpdating = _useState4[1];

  var _useState5 = useState(licenseStatus),
      _useState6 = _slicedToArray(_useState5, 2),
      status = _useState6[0],
      setStatus = _useState6[1];

  var _useState7 = useState(license),
      _useState8 = _slicedToArray(_useState7, 2),
      lastSetLicense = _useState8[0],
      setLastSetLicense = _useState8[1];

  var handleNewLicense = function (e) {
    setNewLicense(e.currentTarget.value);
  };

  var hasChanges = lastSetLicense !== newLicense;
  var addLicense = useEndpointActionExperimental('POST', 'licenses.add', t('Cloud_License_applied_successfully'));
  var handlePaste = useMutableCallback(function () {
    function _callee() {
      var text;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(navigator.clipboard.readText());

              case 3:
                text = _context.sent;
                setNewLicense(text);
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: t('Paste_error') + ": " + _context.t0
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 7]], Promise);
    }

    return _callee;
  }());
  var handleApplyLicense = useMutableCallback(function () {
    function _callee2() {
      var data;
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                setIsUpdating(true);
                setLastSetLicense(newLicense);
                _context2.next = 4;
                return _regeneratorRuntime.awrap(addLicense({
                  license: newLicense
                }));

              case 4:
                data = _context2.sent;

                if (!data.success) {
                  _context2.next = 8;
                  break;
                }

                onClose();
                return _context2.abrupt("return");

              case 8:
                setIsUpdating(false);
                setStatus('invalid');

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, null, Promise);
    }

    return _callee2;
  }());
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
//# sourceMappingURL=/dynamic/client/views/admin/info/214f22f5502c9139402ab23fb53f784a688a75b0.map
