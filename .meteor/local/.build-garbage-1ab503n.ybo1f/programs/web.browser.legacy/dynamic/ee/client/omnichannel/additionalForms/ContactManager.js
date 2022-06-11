function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/ContactManager.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  ContactManager: function () {
    return ContactManager;
  }
});
var Field;
module.link("@rocket.chat/fuselage", {
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
var UserAutoComplete;
module.link("../../../../client/components/UserAutoComplete", {
  "default": function (v) {
    UserAutoComplete = v;
  }
}, 2);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

var ContactManager = function (_ref) {
  var value = _ref.value,
      handler = _ref.handler;
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Contact_Manager')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(UserAutoComplete, {
    value: value,
    onChange: handler
  })));
};

module.exportDefault(ContactManager);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/5a1bc2ad52736431fe5f218b242098140f7ffc5f.map
