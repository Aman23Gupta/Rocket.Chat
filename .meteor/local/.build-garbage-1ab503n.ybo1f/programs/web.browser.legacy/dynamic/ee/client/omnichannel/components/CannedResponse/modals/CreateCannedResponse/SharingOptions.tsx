function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/CannedResponse/modals/CreateCannedResponse/SharingOptions.tsx                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, RadioButton;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  RadioButton: function (v) {
    RadioButton = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var useTranslation;
module.link("../../../../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

var SharingOptions = function (_ref) {
  var isMonitor = _ref.isMonitor,
      isManager = _ref.isManager,
      scope = _ref.scope,
      _ref$radioHandlers = _ref.radioHandlers,
      setPublic = _ref$radioHandlers.setPublic,
      setPrivate = _ref$radioHandlers.setPrivate,
      setDepartment = _ref$radioHandlers.setDepartment;
  var t = useTranslation();
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/CannedResponse/modals/CreateCannedResponse/96dc9ab43ba9fbf128e9c014770a6c137454d4d9.map
