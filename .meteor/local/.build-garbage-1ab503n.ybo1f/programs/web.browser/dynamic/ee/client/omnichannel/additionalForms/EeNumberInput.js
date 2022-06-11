function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/EeNumberInput.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  EeNumberInput: () => EeNumberInput
});
let NumberInput, Field;
module.link("@rocket.chat/fuselage", {
  NumberInput(v) {
    NumberInput = v;
  },

  Field(v) {
    Field = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);

const EeNumberInput = _ref => {
  let {
    value,
    handler,
    label,
    placeholder
  } = _ref;
  const t = useTranslation();
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/81daaa3b60c02df770b44070b35118ed5ef54bee.map
