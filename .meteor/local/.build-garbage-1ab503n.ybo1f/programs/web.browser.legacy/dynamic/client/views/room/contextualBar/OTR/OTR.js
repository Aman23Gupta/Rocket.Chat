function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/OTR/OTR.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Button, ButtonGroup, Throbber;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Throbber: function (v) {
    Throbber = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var VerticalBar;
module.link("../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 2);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

var OTR = function (_ref) {
  var isEstablishing = _ref.isEstablishing,
      isEstablished = _ref.isEstablished,
      isOnline = _ref.isOnline,
      onClickClose = _ref.onClickClose,
      onClickStart = _ref.onClickStart,
      onClickEnd = _ref.onClickEnd,
      onClickRefresh = _ref.onClickRefresh;
  var t = useTranslation();
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/OTR/b7b256e6bb48c7fdb0b993b4e84b16d13cfe8125.map
