function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Info/ChannelToTeamModal/StepOne.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Margins;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Margins(v) {
    Margins = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let GenericModal;
module.link("../../../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 2);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let TeamAutocomplete;
module.link("../../../../teams/contextualBar/TeamAutocomplete", {
  default(v) {
    TeamAutocomplete = v;
  }

}, 4);

const StepOne = _ref => {
  let {
    teamId = '',
    onChange,
    onClose,
    onCancel,
    onConfirm
  } = _ref;
  const t = useTranslation();
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Info/ChannelToTeamModal/0db21a690e231e2cc21f22c533b1f5c7cd82d2ef.map
