function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/TextCopy.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["text", "wrapper"];

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
var Box, Icon, Button, Scrollable;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Button: function (v) {
    Button = v;
  },
  Scrollable: function (v) {
    Scrollable = v;
  }
}, 0);
var React, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var useToastMessageDispatch;
module.link("../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 2);
var useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

var defaultWrapperRenderer = function (text) {
  return /*#__PURE__*/React.createElement(Box, {
    fontFamily: "mono",
    alignSelf: "center",
    fontScale: "p2",
    style: {
      wordBreak: 'break-all'
    },
    mie: "x4",
    flexGrow: 1,
    maxHeight: "x108"
  }, text);
};

var TextCopy = function (_ref) {
  var text = _ref.text,
      _ref$wrapper = _ref.wrapper,
      wrapper = _ref$wrapper === void 0 ? defaultWrapperRenderer : _ref$wrapper,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var onClick = useCallback(function () {
    try {
      navigator.clipboard.writeText(text);
      dispatchToastMessage({
        type: 'success',
        message: t('Copied')
      });
    } catch (e) {
      dispatchToastMessage({
        type: 'error',
        message: e
      });
    }
  }, [dispatchToastMessage, t, text]);
  return /*#__PURE__*/React.createElement(Box, _extends({
    display: "flex",
    flexDirection: "row",
    justifyContent: "stretch",
    alignItems: "flex-start",
    flexGrow: 1,
    padding: "x16",
    backgroundColor: "surface",
    width: "full"
  }, props), /*#__PURE__*/React.createElement(Scrollable, {
    vertical: true
  }, wrapper(text)), /*#__PURE__*/React.createElement(Button, {
    ghost: true,
    square: true,
    small: true,
    flexShrink: 0,
    onClick: onClick,
    title: t('Copy')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "copy",
    size: "x20"
  })));
};

module.exportDefault(TextCopy);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/3798cb7bdb3fdde01c4c171e52fad0e80d6fd464.map
