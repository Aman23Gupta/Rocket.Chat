function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/OTR/OTR.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Button, ButtonGroup, Throbber;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Throbber(v) {
    Throbber = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let VerticalBar;
module.link("../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 2);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

const OTR = _ref => {
  let {
    isEstablishing,
    isEstablished,
    isOnline,
    onClickClose,
    onClickStart,
    onClickEnd,
    onClickRefresh
  } = _ref;
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "shredder"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('OTR')), onClickClose && /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: onClickClose
  })), /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, {
    p: "x24"
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "h4"
  }, t('Off_the_record_conversation')), !isEstablishing && !isEstablished && isOnline && /*#__PURE__*/React.createElement(Button, {
    onClick: onClickStart,
    primary: true
  }, t('Start_OTR')), isEstablishing && !isEstablished && isOnline && /*#__PURE__*/React.createElement(React.Fragment, null, ' ', /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2"
  }, t('Please_wait_while_OTR_is_being_established')), " ", /*#__PURE__*/React.createElement(Throbber, {
    inheritColor: true
  }), ' '), isEstablished && isOnline && /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true
  }, onClickRefresh && /*#__PURE__*/React.createElement(Button, {
    width: "50%",
    onClick: onClickRefresh
  }, t('Refresh_keys')), onClickEnd && /*#__PURE__*/React.createElement(Button, {
    width: "50%",
    danger: true,
    onClick: onClickEnd
  }, t('End_OTR'))), !isOnline && /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2m"
  }, t('OTR_is_only_available_when_both_users_are_online'))));
};

module.exportDefault(OTR);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/OTR/3559deb39ea02127a7eac7c0f6aae5580edf11d5.map
