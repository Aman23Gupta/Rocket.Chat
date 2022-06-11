function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/cloud/WorkspaceRegistrationSection.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["token", "workspaceId", "uniqueId", "onRegisterStatusChange"];

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 3);
var Box, Button, ButtonGroup, Field, Margins, TextInput;
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
  Field: function (v) {
    Field = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  TextInput: function (v) {
    TextInput = v;
  }
}, 0);
var useSafely, useUniqueId;
module.link("@rocket.chat/fuselage-hooks", {
  useSafely: function (v) {
    useSafely = v;
  },
  useUniqueId: function (v) {
    useUniqueId = v;
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
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 3);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);

function WorkspaceRegistrationSection(_ref) {
  var initialToken = _ref.token,
      workspaceId = _ref.workspaceId,
      uniqueId = _ref.uniqueId,
      onRegisterStatusChange = _ref.onRegisterStatusChange,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var connectWorkspace = useMethod('cloud:connectWorkspace');
  var syncWorkspace = useMethod('cloud:syncWorkspace');

  var _useSafely = useSafely(useState(false)),
      _useSafely2 = _slicedToArray(_useSafely, 2),
      isProcessing = _useSafely2[0],
      setProcessing = _useSafely2[1];

  var _useState = useState(initialToken),
      _useState2 = _slicedToArray(_useState, 2),
      token = _useState2[0],
      setToken = _useState2[1];

  var handleTokenChange = function (_ref2) {
    var value = _ref2.currentTarget.value;
    setToken(value);
  };

  var handleConnectButtonClick = function () {
    function _callee() {
      var isConnected, isSynced;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setProcessing(true);
                _context.prev = 1;
                _context.next = 4;
                return _regeneratorRuntime.awrap(connectWorkspace(token));

              case 4:
                isConnected = _context.sent;

                if (isConnected) {
                  _context.next = 7;
                  break;
                }

                throw Error(t('An error occured connecting'));

              case 7:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Connected')
                });
                _context.next = 10;
                return _regeneratorRuntime.awrap(syncWorkspace());

              case 10:
                isSynced = _context.sent;

                if (isSynced) {
                  _context.next = 13;
                  break;
                }

                throw Error(t('An error occured syncing'));

              case 13:
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](1);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 18:
                _context.prev = 18;
                _context.next = 21;
                return _regeneratorRuntime.awrap(onRegisterStatusChange && onRegisterStatusChange());

              case 21:
                setProcessing(false);
                return _context.finish(18);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[1, 15, 18, 23]], Promise);
    }

    return _callee;
  }();

  var tokenInputId = useUniqueId();
  return /*#__PURE__*/React.createElement(Box, _extends({
    marginBlock: "neg-x24"
  }, props), /*#__PURE__*/React.createElement(Margins, {
    block: "x24"
  }, /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    color: "neutral-800"
  }, /*#__PURE__*/React.createElement("p", null, t('Cloud_token_instructions'))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: tokenInputId
  }, t('Token')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    id: tokenInputId,
    disabled: isProcessing,
    value: token,
    onChange: handleTokenChange
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Cloud_manually_input_token'))), /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: isProcessing,
    onClick: handleConnectButtonClick
  }, t('Connect')))));
}

module.exportDefault(WorkspaceRegistrationSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/cloud/99a7b800cc21dbbe6a943f52d3c87d5de2b3a670.map
