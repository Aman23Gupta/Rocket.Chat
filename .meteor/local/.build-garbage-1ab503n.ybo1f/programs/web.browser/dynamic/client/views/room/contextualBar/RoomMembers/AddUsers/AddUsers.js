function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomMembers/AddUsers/AddUsers.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Field, Button;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  Button(v) {
    Button = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let UserAutoCompleteMultiple;
module.link("../../../../../components/UserAutoCompleteMultiple", {
  default(v) {
    UserAutoCompleteMultiple = v;
  }

}, 2);
let VerticalBar;
module.link("../../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 3);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);

const AddUsers = _ref => {
  let {
    onClickClose,
    onClickBack,
    onClickSave,
    value,
    onChange
  } = _ref;
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, onClickBack && /*#__PURE__*/React.createElement(VerticalBar.Back, {
    onClick: onClickBack
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('Add_users')), onClickClose && /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: onClickClose
  })), /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    flexGrow: 0
  }, t('Choose_users')), /*#__PURE__*/React.createElement(UserAutoCompleteMultiple, {
    value: value,
    onChange: onChange,
    placeholder: t('Choose_users')
  }))), /*#__PURE__*/React.createElement(VerticalBar.Footer, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: !value || value.length === 0,
    onClick: onClickSave
  }, t('Add_users'))));
};

module.exportDefault(AddUsers);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomMembers/AddUsers/801bdaffbdd6dd60c3559de81159d9294bbaa522.map
