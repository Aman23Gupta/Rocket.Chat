function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/LicenseCard.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var ButtonGroup, Button, Skeleton, Margins;
module.link("@rocket.chat/fuselage", {
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  Skeleton: function (v) {
    Skeleton = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var Card;
module.link("../../../components/Card", {
  "default": function (v) {
    Card = v;
  }
}, 3);
var PlanTag;
module.link("../../../components/PlanTag", {
  "default": function (v) {
    PlanTag = v;
  }
}, 4);
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 5);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 6);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 8);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 9);
var Feature;
module.link("./Feature", {
  "default": function (v) {
    Feature = v;
  }
}, 10);
var OfflineLicenseModal;
module.link("./OfflineLicenseModal", {
  "default": function (v) {
    OfflineLicenseModal = v;
  }
}, 11);

var LicenseCard = function () {
  var t = useTranslation();
  var setModal = useSetModal();
  var currentLicense = useSetting('Enterprise_License');
  var licenseStatus = useSetting('Enterprise_License_Status');
  var isAirGapped = true;

  var _useEndpointData = useEndpointData('licenses.get'),
      value = _useEndpointData.value,
      phase = _useEndpointData.phase,
      error = _useEndpointData.error;

  var endpointLoading = phase === AsyncStatePhase.LOADING;

  var _ref = endpointLoading || error || !value.licenses.length ? {} : value.licenses[0],
      _ref$modules = _ref.modules,
      modules = _ref$modules === void 0 ? [] : _ref$modules;

  var hasEngagement = modules.includes('engagement-dashboard');
  var hasOmnichannel = modules.includes('livechat-enterprise');
  var hasAuditing = modules.includes('auditing');
  var hasCannedResponses = modules.includes('canned-responses');
  var handleApplyLicense = useMutableCallback(function () {
    return setModal( /*#__PURE__*/React.createElement(OfflineLicenseModal, {
      onClose: function () {
        setModal();
      },
      license: currentLicense,
      licenseStatus: licenseStatus
    }));
  });
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Card.Title, null, t('License')), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(Card.Col, null, /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(PlanTag, null)), /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(Card.Col.Title, null, t('Features')), /*#__PURE__*/React.createElement(Margins, {
    block: "x4"
  }, endpointLoading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Skeleton, {
    width: "40x"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    width: "40x"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    width: "40x"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    width: "40x"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Feature, {
    label: t('Omnichannel'),
    enabled: hasOmnichannel
  }), /*#__PURE__*/React.createElement(Feature, {
    label: t('Auditing'),
    enabled: hasAuditing
  }), /*#__PURE__*/React.createElement(Feature, {
    label: t('Canned_Responses'),
    enabled: hasCannedResponses
  }), /*#__PURE__*/React.createElement(Feature, {
    label: t('Engagement_Dashboard'),
    enabled: hasEngagement
  })))))), /*#__PURE__*/React.createElement(Card.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, isAirGapped ? /*#__PURE__*/React.createElement(Button, {
    small: true,
    onClick: handleApplyLicense
  }, t(currentLicense ? 'Cloud_Change_Offline_License' : 'Cloud_Apply_Offline_License')) : /*#__PURE__*/React.createElement(Button, {
    small: true
  }, t('Cloud_connectivity')))));
};

module.exportDefault(LicenseCard);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/9f0d2ed292900ec0f6b4180bb4f7615cc5bd47e2.map
