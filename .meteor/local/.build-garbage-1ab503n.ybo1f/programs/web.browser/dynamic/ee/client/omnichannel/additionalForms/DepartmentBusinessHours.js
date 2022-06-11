function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/DepartmentBusinessHours.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  DepartmentBusinessHours: () => DepartmentBusinessHours
});
let Field, TextInput;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  TextInput(v) {
    TextInput = v;
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
let useEndpointData;
module.link("../../../../client/hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 3);

const DepartmentBusinessHours = _ref => {
  let {
    bhId
  } = _ref;
  const t = useTranslation();
  const {
    value: data
  } = useEndpointData('livechat/business-hour', useMemo(() => ({
    _id: bhId,
    type: 'custom'
  }), [bhId]));
  const name = data && data.businessHour && data.businessHour.name;
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Business_Hour')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    disabled: true,
    value: name || ''
  })));
};

module.exportDefault(DepartmentBusinessHours);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/58975736716007fcef489fa087e7ba9b9c1ed53c.map
