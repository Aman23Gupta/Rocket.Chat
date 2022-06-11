function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/FilterByText.tsx                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["placeholder", "onChange", "inputRef", "children"];

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
var Box, Icon, TextInput, Button;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Button: function (v) {
    Button = v;
  }
}, 0);
var React, memo, useCallback, useEffect, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

var isFilterByTextPropsWithButton = function (props) {
  return 'displayButton' in props && props.displayButton === true;
};

var FilterByText = function (_ref) {
  var placeholder = _ref.placeholder,
      setFilter = _ref.onChange,
      inputRef = _ref.inputRef,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var handleInputChange = useCallback(function (event) {
    setText(event.currentTarget.value);
  }, []);
  useEffect(function () {
    setFilter({
      text: text
    });
  }, [setFilter, text]);
  var handleFormSubmit = useCallback(function (event) {
    event.preventDefault();
  }, []);
  return /*#__PURE__*/React.createElement(Box, _extends({
    mb: "x16",
    is: "form",
    onSubmit: handleFormSubmit,
    display: "flex",
    flexDirection: "row"
  }, props), /*#__PURE__*/React.createElement(TextInput, {
    placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : t('Search'),
    ref: inputRef,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "magnifier",
      size: "x20"
    }),
    onChange: handleInputChange,
    value: text
  }), isFilterByTextPropsWithButton(props) ? /*#__PURE__*/React.createElement(Button, {
    onClick: props.onButtonClick,
    mis: "x8",
    primary: true
  }, props.textButton) : children && /*#__PURE__*/React.createElement(Box, {
    mis: "x8"
  }, children, " "));
};

module.exportDefault( /*#__PURE__*/memo(FilterByText));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/6823ff6bcf3db81249030a7663caac08313d9fbe.map
