function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/EeTextInput.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  EeTextInput: function () {
    return EeTextInput;
  }
});
var TextInput, Field;
module.link("@rocket.chat/fuselage", {
  TextInput: function (v) {
    TextInput = v;
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

var EeTextInput = function (_ref) {
  var value = _ref.value,
      handler = _ref.handler,
      label = _ref.label,
      placeholder = _ref.placeholder;
  var t = useTranslation();
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/8e3ec8352e7f44e804dcb5f578f2fd75683e6e4c.map
