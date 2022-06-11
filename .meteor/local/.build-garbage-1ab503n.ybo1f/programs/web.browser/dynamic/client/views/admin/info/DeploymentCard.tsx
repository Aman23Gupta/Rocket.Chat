function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/DeploymentCard.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let ButtonGroup, Button;
module.link("@rocket.chat/fuselage", {
  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 2);
let Card;
module.link("../../../components/Card", {
  default(v) {
    Card = v;
  }

}, 3);
let useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let useFormatDateAndTime;
module.link("../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime(v) {
    useFormatDateAndTime = v;
  }

}, 6);
let InstancesModal;
module.link("./InstancesModal", {
  default(v) {
    InstancesModal = v;
  }

}, 7);

const DeploymentCard = _ref => {
  let {
    info,
    statistics,
    instances
  } = _ref;
  const t = useTranslation();
  const formatDateAndTime = useFormatDateAndTime();
  const setModal = useSetModal();
  const {
    commit = {}
  } = info;
  const appsEngineVersion = info === null || info === void 0 ? void 0 : info.marketplaceApiVersion;
  const handleInstancesModal = useMutableCallback(() => {
    setModal( /*#__PURE__*/React.createElement(InstancesModal, {
      instances: instances,
      onClose: () => setModal()
    }));
  });
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Card.Title, null, t('Deployment')), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(Card.Col, null, /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(Card.Col.Title, null, t('Version')), statistics.version), /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(Card.Col.Title, null, t('Deployment_ID')), statistics.uniqueId), appsEngineVersion && /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(Card.Col.Title, null, t('Apps_Engine_Version')), appsEngineVersion), /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(Card.Col.Title, null, t('Node_version')), statistics.process.nodeVersion), /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(Card.Col.Title, null, t('DB_Migration')), "".concat(statistics.migration.version, " (").concat(formatDateAndTime(statistics.migration.lockedAt), ")")), /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(Card.Col.Title, null, t('MongoDB')), "".concat(statistics.mongoVersion, " / ").concat(statistics.mongoStorageEngine, " (oplog ").concat(statistics.oplogEnabled ? t('Enabled') : t('Disabled'), ")")), /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(Card.Col.Title, null, t('Commit_details')), t('github_HEAD'), ": (", commit.hash ? commit.hash.slice(0, 9) : '', ") ", /*#__PURE__*/React.createElement("br", null), t('Branch'), ": ", commit.branch), /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(Card.Col.Title, null, t('PID')), statistics.process.pid))), !!instances.length && /*#__PURE__*/React.createElement(Card.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    small: true,
    onClick: handleInstancesModal
  }, t('Instances')))));
};

module.exportDefault( /*#__PURE__*/memo(DeploymentCard));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/21cc61b77704bdfc9c2ce8567a08f95ad1e9bec9.map
