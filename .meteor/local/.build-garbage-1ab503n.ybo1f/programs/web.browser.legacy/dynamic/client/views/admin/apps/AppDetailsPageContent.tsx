function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppDetailsPageContent.tsx                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Box, Callout, Chip, Divider, Margins;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Callout: function (v) {
    Callout = v;
  },
  Chip: function (v) {
    Chip = v;
  },
  Divider: function (v) {
    Divider = v;
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
var ExternalLink;
module.link("../../../components/ExternalLink", {
  "default": function (v) {
    ExternalLink = v;
  }
}, 2);
var AppAvatar;
module.link("../../../components/avatar/AppAvatar", {
  "default": function (v) {
    AppAvatar = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var AppMenu;
module.link("./AppMenu", {
  "default": function (v) {
    AppMenu = v;
  }
}, 5);
var AppStatus;
module.link("./AppStatus", {
  "default": function (v) {
    AppStatus = v;
  }
}, 6);
var PriceDisplay;
module.link("./PriceDisplay", {
  "default": function (v) {
    PriceDisplay = v;
  }
}, 7);

var AppDetailsPageContent = function (_ref) {
  var app = _ref.app;
  var t = useTranslation();
  var _app$iconFileData = app.iconFileData,
      iconFileData = _app$iconFileData === void 0 ? '' : _app$iconFileData,
      name = app.name,
      _app$author = app.author,
      authorName = _app$author.name,
      homepage = _app$author.homepage,
      support = _app$author.support,
      description = app.description,
      _app$categories = app.categories,
      categories = _app$categories === void 0 ? [] : _app$categories,
      version = app.version,
      price = app.price,
      purchaseType = app.purchaseType,
      pricingPlans = app.pricingPlans,
      iconFileContent = app.iconFileContent,
      installed = app.installed,
      bundledIn = app.bundledIn;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    mbe: "x20",
    w: "full"
  }, /*#__PURE__*/React.createElement(AppAvatar, {
    size: "x124",
    mie: "x20",
    iconFileContent: iconFileContent,
    iconFileData: iconFileData
  }), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "h2"
  }, name), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    color: "hint",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2m",
    mie: "x4"
  }, t('By_author', {
    author: authorName
  })), "|", /*#__PURE__*/React.createElement(Box, {
    mis: "x4"
  }, t('Version_version', {
    version: version
  }))), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginInline: "neg-x8"
  }, /*#__PURE__*/React.createElement(AppStatus, {
    app: app,
    marginInline: "x8"
  }), !installed && /*#__PURE__*/React.createElement(PriceDisplay, {
    purchaseType: purchaseType,
    pricingPlans: pricingPlans,
    price: price,
    showType: false,
    marginInline: "x8"
  })), installed && /*#__PURE__*/React.createElement(AppMenu, {
    app: app
  })))), /*#__PURE__*/React.createElement(Divider, null), app.licenseValidation && /*#__PURE__*/React.createElement(React.Fragment, null, Object.entries(app.licenseValidation.warnings).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 1),
        key = _ref3[0];

    return /*#__PURE__*/React.createElement(Callout, {
      key: key,
      type: "warning"
    }, t("Apps_License_Message_" + key));
  }), Object.entries(app.licenseValidation.errors).map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 1),
        key = _ref5[0];

    return /*#__PURE__*/React.createElement(Callout, {
      key: key,
      type: "danger"
    }, t("Apps_License_Message_" + key));
  })), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Margins, {
    block: "x12"
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "h4"
  }, t('Categories')), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, categories === null || categories === void 0 ? void 0 : categories.map(function (current) {
    return /*#__PURE__*/React.createElement(Chip, {
      key: current,
      textTransform: "uppercase",
      mie: "x8"
    }, /*#__PURE__*/React.createElement(Box, {
      color: "hint"
    }, current));
  })), /*#__PURE__*/React.createElement(Box, {
    fontScale: "h4"
  }, t('Contact')), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-around",
    flexWrap: "wrap"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    mie: "x12",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "h4",
    color: "hint"
  }, t('Author_Site')), /*#__PURE__*/React.createElement(ExternalLink, {
    to: homepage
  })), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "h4",
    color: "hint"
  }, t('Support')), /*#__PURE__*/React.createElement(ExternalLink, {
    to: support
  }))), /*#__PURE__*/React.createElement(Box, {
    fontScale: "h4"
  }, t('Details')), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, description))), bundledIn && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Margins, {
    block: "x12"
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "h4"
  }, t('Bundles')), bundledIn.map(function (bundle) {
    return /*#__PURE__*/React.createElement(Box, {
      key: bundle.bundleId,
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    }, /*#__PURE__*/React.createElement(Box, {
      width: "x80",
      height: "x80",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      flexWrap: "wrap",
      flexShrink: 0
    }, bundle.apps.map(function (app) {
      return /*#__PURE__*/React.createElement(AppAvatar, {
        size: "x36",
        key: app.latest.name,
        iconFileContent: app.latest.iconFileContent,
        iconFileData: app.latest.iconFileData
      });
    })), /*#__PURE__*/React.createElement(Box, {
      display: "flex",
      flexDirection: "column",
      mis: "x12"
    }, /*#__PURE__*/React.createElement(Box, {
      fontScale: "p2m"
    }, bundle.bundleName), bundle.apps.map(function (app) {
      return /*#__PURE__*/React.createElement(Box, {
        key: app.latest.name
      }, app.latest.name, ",");
    })));
  })))));
};

module.exportDefault(AppDetailsPageContent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/2bbe1063c80a8d6a608f9f7e2ca34cbd81574e3c.map
