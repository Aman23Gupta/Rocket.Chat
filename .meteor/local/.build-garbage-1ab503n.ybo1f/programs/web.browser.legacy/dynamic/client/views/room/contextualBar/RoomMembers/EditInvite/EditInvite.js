function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomMembers/EditInvite/EditInvite.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Field, Select, Button, InputBox;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Field: function (v) {
    Field = v;
  },
  Select: function (v) {
    Select = v;
  },
  Button: function (v) {
    Button = v;
  },
  InputBox: function (v) {
    InputBox = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var VerticalBar;
module.link("../../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 2);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

var EditInvite = function (_ref) {
  var onClickBack = _ref.onClickBack,
      onClickClose = _ref.onClickClose,
      onClickNewLink = _ref.onClickNewLink,
      days = _ref.days,
      setDays = _ref.setDays,
      maxUses = _ref.maxUses,
      setMaxUses = _ref.setMaxUses;
  var t = useTranslation();
  var daysOptions = useMemo(function () {
    return [[1, 1], [7, 7], [15, 15], [30, 30], [0, t('Never')]];
  }, [t]);
  var maxUsesOptions = useMemo(function () {
    return [[5, 5], [10, 10], [25, 25], [50, 50], [100, 100], [0, t('No_Limit')]];
  }, [t]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, onClickBack && /*#__PURE__*/React.createElement(VerticalBar.Back, {
    onClick: onClickBack
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('Invite_Users')), onClickClose && /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: onClickClose
  })), /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    flexGrow: 0
  }, t('Expiration_(Days)')), /*#__PURE__*/React.createElement(Field.Row, null, days === undefined ? /*#__PURE__*/React.createElement(InputBox.Skeleton, null) : /*#__PURE__*/React.createElement(Select, {
    value: days,
    onChange: setDays,
    options: daysOptions
  }))), /*#__PURE__*/React.createElement(Field, {
    pb: "x16"
  }, /*#__PURE__*/React.createElement(Field.Label, {
    flexGrow: 0
  }, t('Max_number_of_uses')), /*#__PURE__*/React.createElement(Field.Row, null, maxUses === undefined ? /*#__PURE__*/React.createElement(InputBox.Skeleton, null) : /*#__PURE__*/React.createElement(Select, {
    value: maxUses,
    onChange: setMaxUses,
    options: maxUsesOptions
  }))), /*#__PURE__*/React.createElement(Box, {
    pb: "x16"
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: onClickNewLink
  }, t('Generate_New_Link')))));
};

module.exportDefault(EditInvite);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomMembers/EditInvite/9db11f276cfbe67f70ce996b06957b4fbe27b863.map
