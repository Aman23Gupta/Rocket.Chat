function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/MaxChatsPerAgent.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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

var MaxChatsPerAgent = function (_ref) {
  var values = _ref.values,
      handlers = _ref.handlers;
  var t = useTranslation();
  var maxNumberSimultaneousChat = values.maxNumberSimultaneousChat;
  var handleMaxNumberSimultaneousChat = handlers.handleMaxNumberSimultaneousChat;
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Max_number_of_chats_per_agent')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(NumberInput, {
    value: maxNumberSimultaneousChat,
    onChange: handleMaxNumberSimultaneousChat,
    flexGrow: 1
  })));
};

module.exportDefault(MaxChatsPerAgent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/76825089858db361e9dd88595196422d41a2cc7e.map
