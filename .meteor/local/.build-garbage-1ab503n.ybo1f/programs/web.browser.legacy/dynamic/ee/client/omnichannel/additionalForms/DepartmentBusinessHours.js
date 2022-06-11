function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/DepartmentBusinessHours.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  DepartmentBusinessHours: function () {
    return DepartmentBusinessHours;
  }
});
var Field, TextInput;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  TextInput: function (v) {
    TextInput = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var useEndpointData;
module.link("../../../../client/hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 3);

var DepartmentBusinessHours = function (_ref) {
  var bhId = _ref.bhId;
  var t = useTranslation();

  var _useEndpointData = useEndpointData('livechat/business-hour', useMemo(function () {
    return {
      _id: bhId,
      type: 'custom'
    };
  }, [bhId])),
      data = _useEndpointData.value;

  var name = data && data.businessHour && data.businessHour.name;
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Business_Hour')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    disabled: true,
    value: name || ''
  })));
};

module.exportDefault(DepartmentBusinessHours);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/ec21823675b4dd04f1283c42b3261601480f9221.map
