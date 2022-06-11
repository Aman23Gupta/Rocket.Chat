function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/FilterByTypeAndText.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["setFilter"];

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
var Box, TextInput, Icon;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var React, useCallback, useState, useEffect, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

var FilterByTypeAndText = function (_ref) {
  var setFilter = _ref.setFilter,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var handleChange = useCallback(function (event) {
    return setText(event.currentTarget.value);
  }, []);
  useEffect(function () {
    setFilter({
      text: text
    });
  }, [setFilter, text]);
  return /*#__PURE__*/React.createElement(Box, _extends({
    mb: "x16",
    is: "form",
    onSubmit: useCallback(function (e) {
      return e.preventDefault();
    }, []),
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
//# sourceMappingURL=/dynamic/client/views/admin/integrations/a43d5d8b42e17c5d168fcd0dae3816d428d734f8.map
