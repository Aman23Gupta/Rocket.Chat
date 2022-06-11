function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/DeploymentCard.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var ButtonGroup, Button;
module.link("@rocket.chat/fuselage", {
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 2);
var Card;
module.link("../../../components/Card", {
  "default": function (v) {
    Card = v;
  }
}, 3);
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var useFormatDateAndTime;
module.link("../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime: function (v) {
    useFormatDateAndTime = v;
  }
}, 6);
var InstancesModal;
module.link("./InstancesModal", {
  "default": function (v) {
    InstancesModal = v;
  }
}, 7);

var DeploymentCard = function (_ref) {
  var info = _ref.info,
      statistics = _ref.statistics,
      instances = _ref.instances;
  var t = useTranslation();
  var formatDateAndTime = useFormatDateAndTime();
  var setModal = useSetModal();
  var _info$commit = info.commit,
      commit = _info$commit === void 0 ? {} : _info$commit;
  var appsEngineVersion = info === null || info === void 0 ? void 0 : info.marketplaceApiVersion;
  var handleInstancesModal = useMutableCallback(function () {
    setModal( /*#__PURE__*/React.createElement(InstancesModal, {
      instances: instances,
      onClose: function () {
        return setModal();
      }
    }));
  });
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Card.Title, null, t('Deployment')), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(Card.Col, null, /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(Card.Col.Title, null, t('Version')), statistics.version), /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(Card.Col.Title, null, t('Deployment_ID')), statistics.uniqueId), appsEngineVersion && /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(Card.Col.Title, null, t('Apps_Engine_Version')), appsEngineVersion), /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(Card.Col.Title, null, t('Node_version')), statistics.process.nodeVersion), /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(Card.Col.Title, null, t('DB_Migration')), statistics.migration.version + " (" + formatDateAndTime(statistics.migration.lockedAt) + ")"), /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(Card.Col.Title, null, t('MongoDB')), statistics.mongoVersion + " / " + statistics.mongoStorageEngine + " (oplog " + (statistics.oplogEnabled ? t('Enabled') : t('Disabled')) + ")"), /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(Card.Col.Title, null, t('Commit_details')), t('github_HEAD'), ": (", commit.hash ? commit.hash.slice(0, 9) : '', ") ", /*#__PURE__*/React.createElement("br", null), t('Branch'), ": ", commit.branch), /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(Card.Col.Title, null, t('PID')), statistics.process.pid))), !!instances.length && /*#__PURE__*/React.createElement(Card.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    small: true,
    onClick: handleInstancesModal
  }, t('Instances')))));
};

module.exportDefault( /*#__PURE__*/memo(DeploymentCard));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/1332113308d9c1143b30fb0061b79ecf3599f669.map
