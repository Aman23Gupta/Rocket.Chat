function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomMembers/AddUsers/AddUsers.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Field, Button;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  Button: function (v) {
    Button = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var UserAutoCompleteMultiple;
module.link("../../../../../components/UserAutoCompleteMultiple", {
  "default": function (v) {
    UserAutoCompleteMultiple = v;
  }
}, 2);
var VerticalBar;
module.link("../../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 3);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);

var AddUsers = function (_ref) {
  var onClickClose = _ref.onClickClose,
      onClickBack = _ref.onClickBack,
      onClickSave = _ref.onClickSave,
      value = _ref.value,
      onChange = _ref.onChange;
  var t = useTranslation();
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomMembers/AddUsers/871e163190c1b273ec899a936290d71d7b17c766.map
