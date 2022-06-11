function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/InformationPage.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Button, ButtonGroup, Callout, Icon, Margins;
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
  Callout: function (v) {
    Callout = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var useResizeObserver;
module.link("@rocket.chat/fuselage-hooks", {
  useResizeObserver: function (v) {
    useResizeObserver = v;
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
var SeatsCard;
module.link("../../../../ee/client/views/admin/info/SeatsCard", {
  "default": function (v) {
    SeatsCard = v;
  }
}, 3);
var DOUBLE_COLUMN_CARD_WIDTH;
module.link("../../../components/Card", {
  DOUBLE_COLUMN_CARD_WIDTH: function (v) {
    DOUBLE_COLUMN_CARD_WIDTH = v;
  }
}, 4);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 5);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var DeploymentCard;
module.link("./DeploymentCard", {
  "default": function (v) {
    DeploymentCard = v;
  }
}, 7);
var FederationCard;
module.link("./FederationCard", {
  "default": function (v) {
    FederationCard = v;
  }
}, 8);
var LicenseCard;
module.link("./LicenseCard", {
  "default": function (v) {
    LicenseCard = v;
  }
}, 9);
var UsageCard;
module.link("./UsageCard", {
  "default": function (v) {
    UsageCard = v;
  }
}, 10);
var InformationPage = /*#__PURE__*/memo(function () {
  function InformationPage(_ref) {
    var canViewStatistics = _ref.canViewStatistics,
        info = _ref.info,
        statistics = _ref.statistics,
        instances = _ref.instances,
        onClickRefreshButton = _ref.onClickRefreshButton,
        onClickDownloadInfo = _ref.onClickDownloadInfo;
    var t = useTranslation();

    var _useResizeObserver = useResizeObserver(),
        ref = _useResizeObserver.ref,
        _useResizeObserver$co = _useResizeObserver.contentBoxSize;

    _useResizeObserver$co = _useResizeObserver$co === void 0 ? {} : _useResizeObserver$co;
    var _useResizeObserver$co2 = _useResizeObserver$co.inlineSize,
        inlineSize = _useResizeObserver$co2 === void 0 ? DOUBLE_COLUMN_CARD_WIDTH : _useResizeObserver$co2;
    var isSmall = inlineSize < DOUBLE_COLUMN_CARD_WIDTH;

    if (!info) {
      return null;
    }

    var alertOplogForMultipleInstances = statistics && statistics.instanceCount > 1 && !statistics.oplogEnabled;
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
  }

  return InformationPage;
}());
module.exportDefault(InformationPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/50f7373e9e3d088a5bbc3b01a48eaa0b91f7a841.map
