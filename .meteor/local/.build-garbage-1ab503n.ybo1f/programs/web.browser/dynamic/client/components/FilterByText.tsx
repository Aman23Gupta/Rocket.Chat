function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/FilterByText.tsx                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["placeholder", "onChange", "inputRef", "children"];

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
let Box, Icon, TextInput, Button;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Button(v) {
    Button = v;
  }

}, 0);
let React, memo, useCallback, useEffect, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);

const isFilterByTextPropsWithButton = props => 'displayButton' in props && props.displayButton === true;

const FilterByText = _ref => {
  let {
    placeholder,
    onChange: setFilter,
    inputRef,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const [text, setText] = useState('');
  const handleInputChange = useCallback(event => {
    setText(event.currentTarget.value);
  }, []);
  useEffect(() => {
    setFilter({
      text
    });
  }, [setFilter, text]);
  const handleFormSubmit = useCallback(event => {
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
//# sourceMappingURL=/dynamic/client/components/d5edff6a641913f269e92d6c5a224f4e398878ce.map
