function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/FilterComponent.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let TextInput;
module.link("@rocket.chat/fuselage", {
  TextInput(v) {
    TextInput = v;
  }

}, 0);
let useMutableCallback, useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  },

  useDebouncedValue(v) {
    useDebouncedValue = v;
  }

}, 1);
let React, useState, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

const FilterComponent = _ref => {
  let {
    onChange
  } = _ref;
  const t = useTranslation();
  const [filter, setFilter] = useState('');
  const debouncedFilter = useDebouncedValue(filter, 500);
  useEffect(() => {
    onChange(debouncedFilter);
  }, [debouncedFilter, onChange]);
  const handleFilter = useMutableCallback(_ref2 => {
    let {
      currentTarget: {
        value
      }
    } = _ref2;
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
//# sourceMappingURL=/dynamic/client/views/admin/permissions/75475d24063238507bb4ed00adf3406b3368c612.map
