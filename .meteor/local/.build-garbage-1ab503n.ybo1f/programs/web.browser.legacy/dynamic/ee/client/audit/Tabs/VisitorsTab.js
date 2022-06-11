function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/Tabs/VisitorsTab.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Field, Margins;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var AutoCompleteAgent;
module.link("../../../../client/components/AutoCompleteAgent", {
  "default": function (v) {
    AutoCompleteAgent = v;
  }
}, 2);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var VisitorAutoComplete;
module.link("../VisitorAutoComplete", {
  "default": function (v) {
    VisitorAutoComplete = v;
  }
}, 4);

var VisitorsTab = function (_ref) {
  var errors = _ref.errors,
      visitor = _ref.visitor,
      handleVisitor = _ref.handleVisitor,
      agent = _ref.agent,
      handleAgent = _ref.handleAgent;
  var t = useTranslation();
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
//# sourceMappingURL=/dynamic/ee/client/audit/Tabs/3172df420818df8bc8c42b09e7c6ce8ea7af1f09.map
