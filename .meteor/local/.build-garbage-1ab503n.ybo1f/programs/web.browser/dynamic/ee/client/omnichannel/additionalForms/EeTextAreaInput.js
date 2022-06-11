function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/EeTextAreaInput.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  EeTextAreaInput: () => EeTextAreaInput
});
let TextAreaInput, Field;
module.link("@rocket.chat/fuselage", {
  TextAreaInput(v) {
    TextAreaInput = v;
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

const EeTextAreaInput = _ref => {
  let {
    value,
    handler,
    label,
    placeholder
  } = _ref;
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t(label)), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    flexGrow: 1,
    value: value,
    onChange: handler,
    placeholder: t(placeholder)
  })));
};

module.exportDefault(EeTextAreaInput);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/112551b42606724aa63542e7dea6e2a67776684f.map
