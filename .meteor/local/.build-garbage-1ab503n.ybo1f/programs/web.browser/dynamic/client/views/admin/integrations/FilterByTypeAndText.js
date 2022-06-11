function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/FilterByTypeAndText.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["setFilter"];

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
let Box, TextInput, Icon;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let React, useCallback, useState, useEffect, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);

const FilterByTypeAndText = _ref => {
  let {
    setFilter
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const [text, setText] = useState('');
  const handleChange = useCallback(event => setText(event.currentTarget.value), []);
  useEffect(() => {
    setFilter({
      text
    });
  }, [setFilter, text]);
  return /*#__PURE__*/React.createElement(Box, _extends({
    mb: "x16",
    is: "form",
    onSubmit: useCallback(e => e.preventDefault(), []),
    display: "flex",
    flexDirection: "column"
  }, props), /*#__PURE__*/React.createElement(TextInput, {
    placeholder: t('Search_Integrations'),
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "magnifier",
      size: "x20"
    }),
    onChange: handleChange,
    value: text
  }));
};

module.exportDefault( /*#__PURE__*/memo(FilterByTypeAndText));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/8b760da8cb11854ee44679ff9167dadaaed3aba1.map
