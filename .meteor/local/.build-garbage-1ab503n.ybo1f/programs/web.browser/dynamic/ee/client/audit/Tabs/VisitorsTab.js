function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/Tabs/VisitorsTab.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Field, Margins;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  Margins(v) {
    Margins = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let AutoCompleteAgent;
module.link("../../../../client/components/AutoCompleteAgent", {
  default(v) {
    AutoCompleteAgent = v;
  }

}, 2);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let VisitorAutoComplete;
module.link("../VisitorAutoComplete", {
  default(v) {
    VisitorAutoComplete = v;
  }

}, 4);

const VisitorsTab = _ref => {
  let {
    errors,
    visitor,
    handleVisitor,
    agent,
    handleAgent
  } = _ref;
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(Margins, {
    inline: "x4"
  }, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    flexGrow: 0
  }, t('Visitor')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(VisitorAutoComplete, {
    error: errors.visitor,
    value: visitor,
    onChange: handleVisitor,
    placeholder: t('Username_Placeholder')
  })), errors.visitor && /*#__PURE__*/React.createElement(Field.Error, null, errors.visitor)), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    flexGrow: 0
  }, t('Agent')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(AutoCompleteAgent, {
    error: errors.agent,
    value: agent,
    onChange: handleAgent,
    placeholder: t('Username_Placeholder')
  })), errors.agent && /*#__PURE__*/React.createElement(Field.Error, null, errors.agent)));
};

module.exportDefault(VisitorsTab);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/audit/Tabs/689cb220c3822b5a36e8d6efc13505a51b235cb2.map
