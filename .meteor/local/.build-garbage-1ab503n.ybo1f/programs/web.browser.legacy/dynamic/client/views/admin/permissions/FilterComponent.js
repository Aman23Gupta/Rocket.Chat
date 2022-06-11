function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/FilterComponent.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var TextInput;
module.link("@rocket.chat/fuselage", {
  TextInput: function (v) {
    TextInput = v;
  }
}, 0);
var useMutableCallback, useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  },
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
  }
}, 1);
var React, useState, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

var FilterComponent = function (_ref) {
  var onChange = _ref.onChange;
  var t = useTranslation();

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var debouncedFilter = useDebouncedValue(filter, 500);
  useEffect(function () {
    onChange(debouncedFilter);
  }, [debouncedFilter, onChange]);
  var handleFilter = useMutableCallback(function (_ref2) {
    var value = _ref2.currentTarget.value;
    setFilter(value);
  });
  return /*#__PURE__*/React.createElement(TextInput, {
    value: filter,
    onChange: handleFilter,
    placeholder: t('Search'),
    flexGrow: 0
  });
};

module.exportDefault(FilterComponent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/permissions/63c66c77d663cb154ca278f129c8f8c6060a6573.map
