function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/EeNumberInput.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  EeNumberInput: function () {
    return EeNumberInput;
  }
});
var NumberInput, Field;
module.link("@rocket.chat/fuselage", {
  NumberInput: function (v) {
    NumberInput = v;
  },
  Field: function (v) {
    Field = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

var EeNumberInput = function (_ref) {
  var value = _ref.value,
      handler = _ref.handler,
      label = _ref.label,
      placeholder = _ref.placeholder;
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t(label)), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(NumberInput, {
    value: value,
    onChange: handler,
    flexGrow: 1,
    placeholder: t(placeholder)
  })));
};

module.exportDefault(EeNumberInput);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/c87b952a304daf78327f914a9b75b1d2d22f4431.map
