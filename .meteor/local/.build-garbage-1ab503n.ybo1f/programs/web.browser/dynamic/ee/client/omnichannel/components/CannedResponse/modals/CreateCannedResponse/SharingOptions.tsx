function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/CannedResponse/modals/CreateCannedResponse/SharingOptions.tsx                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, RadioButton;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  RadioButton(v) {
    RadioButton = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let useTranslation;
module.link("../../../../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);

const SharingOptions = _ref => {
  let {
    isMonitor,
    isManager,
    scope,
    radioHandlers: {
      setPublic,
      setPrivate,
      setDepartment
    }
  } = _ref;
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mie: "12px"
  }, /*#__PURE__*/React.createElement(RadioButton, {
    onChange: setPublic,
    disabled: isMonitor && !isManager,
    checked: scope === 'global'
  }), /*#__PURE__*/React.createElement(Box, {
    mis: "8px"
  }, t('Public'))), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mie: "12px"
  }, /*#__PURE__*/React.createElement(RadioButton, {
    onChange: setDepartment,
    checked: scope === 'department'
  }), /*#__PURE__*/React.createElement(Box, {
    mis: "8px"
  }, t('Department'))), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mie: "12px"
  }, /*#__PURE__*/React.createElement(RadioButton, {
    onChange: setPrivate,
    checked: scope === 'user'
  }), /*#__PURE__*/React.createElement(Box, {
    mis: "8px"
  }, t('Private'))));
};

module.exportDefault( /*#__PURE__*/memo(SharingOptions));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/CannedResponse/modals/CreateCannedResponse/5186d7c165a356fe63c6b6ab8a1c74b77bf689ca.map
