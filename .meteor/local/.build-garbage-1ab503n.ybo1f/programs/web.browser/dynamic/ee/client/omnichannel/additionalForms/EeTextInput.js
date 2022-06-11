function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/EeTextInput.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  EeTextInput: () => EeTextInput
});
let TextInput, Field;
module.link("@rocket.chat/fuselage", {
  TextInput(v) {
    TextInput = v;
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

const EeTextInput = _ref => {
  let {
    value,
    handler,
    label,
    placeholder
  } = _ref;
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t(label)), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    value: value,
    onChange: handler,
    placeholder: t(placeholder)
  })));
};

module.exportDefault(EeTextInput);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/21d82660af8934a131708dd97093741366172965.map
