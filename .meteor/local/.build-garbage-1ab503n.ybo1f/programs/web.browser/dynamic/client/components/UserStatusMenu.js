function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserStatusMenu.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onChange", "optionWidth", "initialStatus", "placement"];

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
let Button, PositionAnimated, Options, useCursor, Box;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  PositionAnimated(v) {
    PositionAnimated = v;
  },

  Options(v) {
    Options = v;
  },

  useCursor(v) {
    useCursor = v;
  },

  Box(v) {
    Box = v;
  }

}, 0);
let React, useRef, useCallback, useState, useMemo, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useRef(v) {
    useRef = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 1);
let useSetting;
module.link("../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 2);
let useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let UserStatus;
module.link("./UserStatus", {
  UserStatus(v) {
    UserStatus = v;
  }

}, 4);

const UserStatusMenu = _ref => {
  let {
    onChange,
    optionWidth = undefined,
    initialStatus = 'offline',
    placement = 'bottom-end'
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const [status, setStatus] = useState(initialStatus);
  const allowInvisibleStatus = useSetting('Accounts_AllowInvisibleStatusOption');
  const options = useMemo(() => {
    const renderOption = (status, label) => /*#__PURE__*/React.createElement(Box, {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    }, /*#__PURE__*/React.createElement(Box, {
      marginInlineEnd: "x8"
    }, /*#__PURE__*/React.createElement(UserStatus, {
      status: status
    })), label);

    const statuses = [['online', renderOption('online', t('Online'))], ['away', renderOption('away', t('Away'))], ['busy', renderOption('busy', t('Busy'))]];

    if (allowInvisibleStatus) {
      statuses.push(['offline', renderOption('offline', t('Invisible'))]);
    }

    return statuses;
  }, [t, allowInvisibleStatus]);
  const [cursor, handleKeyDown, handleKeyUp, reset, [visible, hide, show]] = useCursor(-1, options, (_ref2, _ref3) => {
    let [selected] = _ref2;
    let [, hide] = _ref3;
    setStatus(selected);
    reset();
    hide();
  });
  const ref = useRef();
  const onClick = useCallback(() => {
    ref.current.focus() & show();
    ref.current.classList.add('focus-visible');
  }, [show]);
  const handleSelection = useCallback(_ref4 => {
    let [selected] = _ref4;
    setStatus(selected);
    reset();
    hide();
  }, [hide, reset]);
  useEffect(() => onChange(status), [status, onChange]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, _extends({
    ref: ref,
    small: true,
    square: true,
    ghost: true,
    onClick: onClick,
    onBlur: hide,
    onKeyUp: handleKeyUp,
    onKeyDown: handleKeyDown
  }, props), /*#__PURE__*/React.createElement(UserStatus, {
    status: status
  })), /*#__PURE__*/React.createElement(PositionAnimated, {
    width: "auto",
    visible: visible,
    anchor: ref,
    placement: placement
  }, /*#__PURE__*/React.createElement(Options, {
    width: optionWidth,
    onSelect: handleSelection,
    options: options,
    cursor: cursor
  })));
};

module.exportDefault(UserStatusMenu);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/fec6163bf9820fc82be63b5cac0a62e00244e032.map
