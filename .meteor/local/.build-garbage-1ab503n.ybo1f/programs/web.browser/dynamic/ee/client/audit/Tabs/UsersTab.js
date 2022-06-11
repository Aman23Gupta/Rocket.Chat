function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/Tabs/UsersTab.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Field;
module.link("@rocket.chat/fuselage", {
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
let UserAutoCompleteMultiple;
module.link("../../../../client/components/UserAutoCompleteMultiple", {
  default(v) {
    UserAutoCompleteMultiple = v;
  }

}, 2);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

const UsersTab = _ref => {
  let {
    errors,
    users,
    onChangeUsers
  } = _ref;
  const t = useTranslation();
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
//# sourceMappingURL=/dynamic/ee/client/audit/Tabs/351ff658cedb2db8b3e1b49674e8630f59a4ce65.map
