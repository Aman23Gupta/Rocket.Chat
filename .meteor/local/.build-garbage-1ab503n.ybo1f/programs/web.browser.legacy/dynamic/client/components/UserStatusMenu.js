function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserStatusMenu.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onChange", "optionWidth", "initialStatus", "placement"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
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
var Button, PositionAnimated, Options, useCursor, Box;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  PositionAnimated: function (v) {
    PositionAnimated = v;
  },
  Options: function (v) {
    Options = v;
  },
  useCursor: function (v) {
    useCursor = v;
  },
  Box: function (v) {
    Box = v;
  }
}, 0);
var React, useRef, useCallback, useState, useMemo, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useRef: function (v) {
    useRef = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 1);
var useSetting;
module.link("../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 2);
var useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var UserStatus;
module.link("./UserStatus", {
  UserStatus: function (v) {
    UserStatus = v;
  }
}, 4);

var UserStatusMenu = function (_ref) {
  var onChange = _ref.onChange,
      _ref$optionWidth = _ref.optionWidth,
      optionWidth = _ref$optionWidth === void 0 ? undefined : _ref$optionWidth,
      _ref$initialStatus = _ref.initialStatus,
      initialStatus = _ref$initialStatus === void 0 ? 'offline' : _ref$initialStatus,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'bottom-end' : _ref$placement,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();

  var _useState = useState(initialStatus),
      _useState2 = _slicedToArray(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  var allowInvisibleStatus = useSetting('Accounts_AllowInvisibleStatusOption');
  var options = useMemo(function () {
    var renderOption = function (status, label) {
      return /*#__PURE__*/React.createElement(Box, {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
      }, /*#__PURE__*/React.createElement(Box, {
        marginInlineEnd: "x8"
      }, /*#__PURE__*/React.createElement(UserStatus, {
        status: status
      })), label);
    };

    var statuses = [['online', renderOption('online', t('Online'))], ['away', renderOption('away', t('Away'))], ['busy', renderOption('busy', t('Busy'))]];

    if (allowInvisibleStatus) {
      statuses.push(['offline', renderOption('offline', t('Invisible'))]);
    }

    return statuses;
  }, [t, allowInvisibleStatus]);

  var _useCursor = useCursor(-1, options, function (_ref2, _ref3) {
    var _ref4 = _slicedToArray(_ref2, 1),
        selected = _ref4[0];

    var _ref5 = _slicedToArray(_ref3, 2),
        hide = _ref5[1];

    setStatus(selected);
    reset();
    hide();
  }),
      _useCursor2 = _slicedToArray(_useCursor, 5),
      cursor = _useCursor2[0],
      handleKeyDown = _useCursor2[1],
      handleKeyUp = _useCursor2[2],
      reset = _useCursor2[3],
      _useCursor2$ = _slicedToArray(_useCursor2[4], 3),
      visible = _useCursor2$[0],
      hide = _useCursor2$[1],
      show = _useCursor2$[2];

  var ref = useRef();
  var onClick = useCallback(function () {
    ref.current.focus() & show();
    ref.current.classList.add('focus-visible');
  }, [show]);
  var handleSelection = useCallback(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 1),
        selected = _ref7[0];

    setStatus(selected);
    reset();
    hide();
  }, [hide, reset]);
  useEffect(function () {
    return onChange(status);
  }, [status, onChange]);
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
//# sourceMappingURL=/dynamic/client/components/419dd1531982194302c774704e4c42ee9444fda5.map
