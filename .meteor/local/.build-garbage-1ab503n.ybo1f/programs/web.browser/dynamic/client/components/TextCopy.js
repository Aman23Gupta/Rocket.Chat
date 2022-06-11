function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/TextCopy.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["text", "wrapper"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Box, Icon, Button, Scrollable;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  },

  Button(v) {
    Button = v;
  },

  Scrollable(v) {
    Scrollable = v;
  }

}, 0);
let React, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let useToastMessageDispatch;
module.link("../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 2);
let useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

const defaultWrapperRenderer = text => /*#__PURE__*/React.createElement(Box, {
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

const TextCopy = _ref => {
  let {
    text,
    wrapper = defaultWrapperRenderer
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const onClick = useCallback(() => {
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
//# sourceMappingURL=/dynamic/client/components/ad908170a4043c346f155b176596a4e0d53967f1.map
