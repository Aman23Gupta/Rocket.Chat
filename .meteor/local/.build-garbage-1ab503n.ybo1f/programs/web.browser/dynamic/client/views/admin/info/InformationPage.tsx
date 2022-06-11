function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/InformationPage.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Button, ButtonGroup, Callout, Icon, Margins;
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

  Callout(v) {
    Callout = v;
  },

  Icon(v) {
    Icon = v;
  },

  Margins(v) {
    Margins = v;
  }

}, 0);
let useResizeObserver;
module.link("@rocket.chat/fuselage-hooks", {
  useResizeObserver(v) {
    useResizeObserver = v;
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
let SeatsCard;
module.link("../../../../ee/client/views/admin/info/SeatsCard", {
  default(v) {
    SeatsCard = v;
  }

}, 3);
let DOUBLE_COLUMN_CARD_WIDTH;
module.link("../../../components/Card", {
  DOUBLE_COLUMN_CARD_WIDTH(v) {
    DOUBLE_COLUMN_CARD_WIDTH = v;
  }

}, 4);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 5);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let DeploymentCard;
module.link("./DeploymentCard", {
  default(v) {
    DeploymentCard = v;
  }

}, 7);
let FederationCard;
module.link("./FederationCard", {
  default(v) {
    FederationCard = v;
  }

}, 8);
let LicenseCard;
module.link("./LicenseCard", {
  default(v) {
    LicenseCard = v;
  }

}, 9);
let UsageCard;
module.link("./UsageCard", {
  default(v) {
    UsageCard = v;
  }

}, 10);
const InformationPage = /*#__PURE__*/memo(function InformationPage(_ref) {
  let {
    canViewStatistics,
    info,
    statistics,
    instances,
    onClickRefreshButton,
    onClickDownloadInfo
  } = _ref;
  const t = useTranslation();
  const {
    ref,
    contentBoxSize: {
      inlineSize = DOUBLE_COLUMN_CARD_WIDTH
    } = {}
  } = useResizeObserver();
  const isSmall = inlineSize < DOUBLE_COLUMN_CARD_WIDTH;

  if (!info) {
    return null;
  }

  const alertOplogForMultipleInstances = statistics && statistics.instanceCount > 1 && !statistics.oplogEnabled;
  return /*#__PURE__*/React.createElement(Page, {
    "data-qa": "admin-info"
  }, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Info')
  }, canViewStatistics && /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    type: "button",
    onClick: onClickDownloadInfo
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download"
  }), " ", t('Download_Info')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    type: "button",
    onClick: onClickRefreshButton
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "reload"
  }), " ", t('Refresh')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    marginBlock: "none",
    marginInline: "auto",
    width: "full"
  }, alertOplogForMultipleInstances && /*#__PURE__*/React.createElement(Callout, {
    type: "danger",
    title: t('Error_RocketChat_requires_oplog_tailing_when_running_in_multiple_instances'),
    marginBlockEnd: "x16"
  }, /*#__PURE__*/React.createElement(Box, {
    withRichContent: true
  }, /*#__PURE__*/React.createElement("p", null, t('Error_RocketChat_requires_oplog_tailing_when_running_in_multiple_instances_details')), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    href: 'https://rocket.chat/docs/installation/manual-installation/multiple-instances-to-improve-' + 'performance/#running-multiple-instances-per-host-to-improve-performance'
  }, t('Click_here_for_more_info'))))), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    w: "full",
    flexWrap: "wrap",
    justifyContent: isSmall ? 'center' : 'flex-start',
    ref: ref
  }, /*#__PURE__*/React.createElement(Margins, {
    all: "x8"
  }, /*#__PURE__*/React.createElement(DeploymentCard, {
    info: info,
    statistics: statistics,
    instances: instances
  }), /*#__PURE__*/React.createElement(LicenseCard, null), /*#__PURE__*/React.createElement(UsageCard, {
    vertical: isSmall,
    statistics: statistics
  }), /*#__PURE__*/React.createElement(FederationCard, null), /*#__PURE__*/React.createElement(SeatsCard, null))))));
});
module.exportDefault(InformationPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/f9348ded2324a7c0804319a8bc9b93d264293565.map
