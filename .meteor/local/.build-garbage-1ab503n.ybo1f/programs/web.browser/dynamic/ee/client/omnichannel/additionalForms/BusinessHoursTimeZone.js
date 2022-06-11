function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/BusinessHoursTimeZone.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let SelectFiltered, Field;
module.link("@rocket.chat/fuselage", {
  SelectFiltered(v) {
    SelectFiltered = v;
  },

  Field(v) {
    Field = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let useForm;
module.link("../../../../client/hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 3);
let useTimezoneNameList;
module.link("../../../../client/hooks/useTimezoneNameList", {
  useTimezoneNameList(v) {
    useTimezoneNameList = v;
  }

}, 4);

const getInitialData = function () {
  let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    name: data !== null && data !== void 0 ? data : ''
  };
};

const BusinessHoursTimeZone = _ref => {
  let {
    onChange,
    data,
    className,
    hasChanges = () => {}
  } = _ref;
  const t = useTranslation();
  const {
    values,
    handlers,
    hasUnsavedChanges
  } = useForm(getInitialData(data));
  const {
    name
  } = values;
  const {
    handleName
  } = handlers;
  const timeZones = useTimezoneNameList();
  const timeZonesOptions = useMemo(() => timeZones.map(name => [name, t(name)]), [t, timeZones]);
  onChange && onChange({
    name
  });
  hasChanges(hasUnsavedChanges);
  return /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Timezone')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(SelectFiltered, {
    options: timeZonesOptions,
    value: name,
    onChange: handleName
  })));
};

module.exportDefault(BusinessHoursTimeZone);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/c698af4a1b4938710013025861b5e309e1e3e39f.map
