function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Info/ChannelToTeamModal/StepOne.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Margins;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
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
var GenericModal;
module.link("../../../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 2);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var TeamAutocomplete;
module.link("../../../../teams/contextualBar/TeamAutocomplete", {
  "default": function (v) {
    TeamAutocomplete = v;
  }
}, 4);

var StepOne = function (_ref) {
  var _ref$teamId = _ref.teamId,
      teamId = _ref$teamId === void 0 ? '' : _ref$teamId,
      onChange = _ref.onChange,
      onClose = _ref.onClose,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm;
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(GenericModal, {
    variant: "warning",
    cancelText: t('Cancel'),
    confirmText: t('Continue'),
    title: t('Teams_Select_a_team'),
    onClose: onClose,
    onCancel: onCancel,
    onConfirm: onConfirm,
    confirmDisabled: !teamId
  }, /*#__PURE__*/React.createElement(Margins, {
    blockEnd: "x20"
  }, /*#__PURE__*/React.createElement(Box, null, t('Teams_move_channel_to_team_description_first')), /*#__PURE__*/React.createElement(Box, null, t('Teams_move_channel_to_team_description_second')), /*#__PURE__*/React.createElement(Box, null, t('Teams_move_channel_to_team_description_third')), /*#__PURE__*/React.createElement(Box, null, t('Teams_move_channel_to_team_description_fourth'))), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    width: "100%"
  }, /*#__PURE__*/React.createElement(TeamAutocomplete, {
    onChange: onChange,
    value: teamId
  })));
};

module.exportDefault(StepOne);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Info/ChannelToTeamModal/fe27df0fea318ec56c14c851a7dd625d410812e6.map
