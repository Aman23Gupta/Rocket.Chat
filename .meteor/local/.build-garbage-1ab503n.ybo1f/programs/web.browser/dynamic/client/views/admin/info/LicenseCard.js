function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/LicenseCard.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let ButtonGroup, Button, Skeleton, Margins;
module.link("@rocket.chat/fuselage", {
  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  Skeleton(v) {
    Skeleton = v;
  },

  Margins(v) {
    Margins = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let Card;
module.link("../../../components/Card", {
  default(v) {
    Card = v;
  }

}, 3);
let PlanTag;
module.link("../../../components/PlanTag", {
  default(v) {
    PlanTag = v;
  }

}, 4);
let useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 5);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 6);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
let AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 8);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 9);
let Feature;
module.link("./Feature", {
  default(v) {
    Feature = v;
  }

}, 10);
let OfflineLicenseModal;
module.link("./OfflineLicenseModal", {
  default(v) {
    OfflineLicenseModal = v;
  }

}, 11);

const LicenseCard = () => {
  const t = useTranslation();
  const setModal = useSetModal();
  const currentLicense = useSetting('Enterprise_License');
  const licenseStatus = useSetting('Enterprise_License_Status');
  const isAirGapped = true;
  const {
    value,
    phase,
    error
  } = useEndpointData('licenses.get');
  const endpointLoading = phase === AsyncStatePhase.LOADING;
  const {
    modules = []
  } = endpointLoading || error || !value.licenses.length ? {} : value.licenses[0];
  const hasEngagement = modules.includes('engagement-dashboard');
  const hasOmnichannel = modules.includes('livechat-enterprise');
  const hasAuditing = modules.includes('auditing');
  const hasCannedResponses = modules.includes('canned-responses');
  const handleApplyLicense = useMutableCallback(() => setModal( /*#__PURE__*/React.createElement(OfflineLicenseModal, {
    onClose: () => {
      setModal();
    },
    license: currentLicense,
    licenseStatus: licenseStatus
  })));
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
//# sourceMappingURL=/dynamic/client/views/admin/info/5ae3ce4ce9a9380b483f523074b49dc6c28af69c.map
