function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/EeTextAreaInput.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  EeTextAreaInput: function () {
    return EeTextAreaInput;
  }
});
var TextAreaInput, Field;
module.link("@rocket.chat/fuselage", {
  TextAreaInput: function (v) {
    TextAreaInput = v;
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

var EeTextAreaInput = function (_ref) {
  var value = _ref.value,
      handler = _ref.handler,
      label = _ref.label,
      placeholder = _ref.placeholder;
  var t = useTranslation();
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/f8680314393e00048583045e88ae061f98f4f643.map
