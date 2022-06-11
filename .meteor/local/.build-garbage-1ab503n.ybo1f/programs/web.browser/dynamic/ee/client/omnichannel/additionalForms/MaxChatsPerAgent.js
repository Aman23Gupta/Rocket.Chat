function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/MaxChatsPerAgent.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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

const MaxChatsPerAgent = _ref => {
  let {
    values,
    handlers
  } = _ref;
  const t = useTranslation();
  const {
    maxNumberSimultaneousChat
  } = values;
  const {
    handleMaxNumberSimultaneousChat
  } = handlers;
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Max_number_of_chats_per_agent')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(NumberInput, {
    value: maxNumberSimultaneousChat,
    onChange: handleMaxNumberSimultaneousChat,
    flexGrow: 1
  })));
};

module.exportDefault(MaxChatsPerAgent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/21cdcc0a53095499679549097476ccd843b85c74.map
