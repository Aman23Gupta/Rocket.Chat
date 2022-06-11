function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/cloud/CopyStep.tsx                                                                               //
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
var Box, Button, ButtonGroup, Icon, Scrollable, Modal;
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
  Icon: function (v) {
    Icon = v;
  },
  Scrollable: function (v) {
    Scrollable = v;
  },
  Modal: function (v) {
    Modal = v;
  }
}, 0);
var Clipboard;
module.link("clipboard", {
  "default": function (v) {
    Clipboard = v;
  }
}, 1);
var React, useEffect, useState, useRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 2);
var MarkdownText;
module.link("../../../components/MarkdownText", {
  "default": function (v) {
    MarkdownText = v;
  }
}, 3);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 4);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 5);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var cloudConsoleUrl;
module.link("./constants", {
  cloudConsoleUrl: function (v) {
    cloudConsoleUrl = v;
  }
}, 7);

var CopyStep = function (_ref) {
  var onNextButtonClick = _ref.onNextButtonClick;
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      clientKey = _useState2[0],
      setClientKey = _useState2[1];

  var getWorkspaceRegisterData = useMethod('cloud:getWorkspaceRegisterData');
  useEffect(function () {
    var loadWorkspaceRegisterData = function () {
      function _callee() {
        var clientKey;
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _regeneratorRuntime.awrap(getWorkspaceRegisterData());

                case 2:
                  clientKey = _context.sent;
                  setClientKey(clientKey);

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, null, Promise);
      }

      return _callee;
    }();

    loadWorkspaceRegisterData();
  }, [getWorkspaceRegisterData]);
  var copyRef = useRef();
  useEffect(function () {
    if (!copyRef.current) {
      return;
    }

    var clipboard = new Clipboard(copyRef.current);
    clipboard.on('success', function () {
      dispatchToastMessage({
        type: 'success',
        message: t('Copied')
      });
    });
    return function () {
      clipboard.destroy();
    };
  }, [dispatchToastMessage, t]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(Box, {
    withRichContent: true
  }, /*#__PURE__*/React.createElement("p", null, t('Cloud_register_offline_helper'))), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    padding: "x16",
    flexGrow: 1,
    backgroundColor: "neutral-800"
  }, /*#__PURE__*/React.createElement(Scrollable, {
    vertical: true
  }, /*#__PURE__*/React.createElement(Box, {
    height: "x108",
    fontFamily: "mono",
    fontScale: "p2",
    color: "alternative",
    style: {
      wordBreak: 'break-all'
    }
  }, clientKey)), /*#__PURE__*/React.createElement(Button, {
    ref: copyRef,
    primary: true,
    "data-clipboard-text": clientKey
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "copy"
  }), " ", t('Copy'))), /*#__PURE__*/React.createElement(MarkdownText, {
    preserveHtml: true,
    content: t('Cloud_click_here', {
      cloudConsoleUrl: cloudConsoleUrl
    })
  })), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: onNextButtonClick
  }, t('Next')))));
};

module.exportDefault(CopyStep);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/cloud/e393c46e02f15eefb6b1f86a3b21ee1c598b8f89.map
