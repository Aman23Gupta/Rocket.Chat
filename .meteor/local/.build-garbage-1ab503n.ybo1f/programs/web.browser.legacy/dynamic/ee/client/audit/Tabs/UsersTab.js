function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/Tabs/UsersTab.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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
var UserAutoCompleteMultiple;
module.link("../../../../client/components/UserAutoCompleteMultiple", {
  "default": function (v) {
    UserAutoCompleteMultiple = v;
  }
}, 2);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

var UsersTab = function (_ref) {
  var errors = _ref.errors,
      users = _ref.users,
      onChangeUsers = _ref.onChangeUsers;
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Users')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(UserAutoCompleteMultiple, {
    error: errors.users,
    value: users,
    onChange: onChangeUsers,
    placeholder: t('Username_Placeholder')
  })), errors.users && /*#__PURE__*/React.createElement(Field.Error, null, errors.users));
};

module.exportDefault(UsersTab);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/audit/Tabs/05688cc89a673a704aaa37c9f8a8e95a7cde9acd.map
