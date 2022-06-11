function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/cloud/PasteStep.tsx                                                                              //
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
var Box, Button, ButtonGroup, Scrollable, Throbber, Modal;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Scrollable: function (v) {
    Scrollable = v;
  },
  Throbber: function (v) {
    Throbber = v;
  },
  Modal: function (v) {
    Modal = v;
  }
}, 0);
var React, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
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

var PasteStep = function (_ref) {
  var onBackButtonClick = _ref.onBackButtonClick,
      onFinish = _ref.onFinish;
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      cloudKey = _useState4[0],
      setCloudKey = _useState4[1];

  var handleCloudKeyChange = function (e) {
    setCloudKey(e.currentTarget.value);
  };

  var registerManually = useEndpoint('POST', 'cloud.manualRegister');

  var handleFinishButtonClick = function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setLoading(true);
                _context.prev = 1;
                _context.next = 4;
                return _regeneratorRuntime.awrap(registerManually({
                  cloudBlob: cloudKey
                }));

              case 4:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Cloud_register_success')
                });
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                dispatchToastMessage({
                  type: 'error',
                  message: t('Cloud_register_error')
                });

              case 10:
                _context.prev = 10;
                setLoading(false);
                onFinish === null || onFinish === void 0 ? void 0 : onFinish();
                return _context.finish(10);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[1, 7, 10, 14]], Promise);
    }

    return _callee;
  }();

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(Box, {
    withRichContent: true
  }, /*#__PURE__*/React.createElement("p", null, t('Cloud_register_offline_finish_helper'))), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    padding: "x16",
    flexGrow: 1,
    backgroundColor: "neutral-800"
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
    disabled: isLoading,
    value: cloudKey,
    autoComplete: "off",
    autoCorrect: "off",
    autoCapitalize: "off",
    spellCheck: "false",
    onChange: handleCloudKeyChange
  })))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    disabled: isLoading,
    onClick: onBackButtonClick
  }, t('Back')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: isLoading || !cloudKey.trim(),
    marginInlineStart: "auto",
    onClick: handleFinishButtonClick
  }, isLoading ? /*#__PURE__*/React.createElement(Throbber, {
    inheritColor: true
  }) : t('Finish_Registration')))));
};

module.exportDefault(PasteStep);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/cloud/8085aedbd21e917db7755af63924b95cc5af55d9.map
