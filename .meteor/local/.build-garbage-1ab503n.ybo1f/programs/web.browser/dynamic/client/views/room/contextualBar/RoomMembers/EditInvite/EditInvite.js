function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomMembers/EditInvite/EditInvite.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Field, Select, Button, InputBox;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Field(v) {
    Field = v;
  },

  Select(v) {
    Select = v;
  },

  Button(v) {
    Button = v;
  },

  InputBox(v) {
    InputBox = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let VerticalBar;
module.link("../../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 2);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

const EditInvite = _ref => {
  let {
    onClickBack,
    onClickClose,
    onClickNewLink,
    days,
    setDays,
    maxUses,
    setMaxUses
  } = _ref;
  const t = useTranslation();
  const daysOptions = useMemo(() => [[1, 1], [7, 7], [15, 15], [30, 30], [0, t('Never')]], [t]);
  const maxUsesOptions = useMemo(() => [[5, 5], [10, 10], [25, 25], [50, 50], [100, 100], [0, t('No_Limit')]], [t]);
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomMembers/EditInvite/534be998122a072c834e98d3b7d5179884d81b6a.map
