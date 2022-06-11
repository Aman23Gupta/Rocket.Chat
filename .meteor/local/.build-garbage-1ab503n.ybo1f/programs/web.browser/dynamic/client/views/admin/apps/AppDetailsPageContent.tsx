function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppDetailsPageContent.tsx                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Callout, Chip, Divider, Margins;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Callout(v) {
    Callout = v;
  },

  Chip(v) {
    Chip = v;
  },

  Divider(v) {
    Divider = v;
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
let ExternalLink;
module.link("../../../components/ExternalLink", {
  default(v) {
    ExternalLink = v;
  }

}, 2);
let AppAvatar;
module.link("../../../components/avatar/AppAvatar", {
  default(v) {
    AppAvatar = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let AppMenu;
module.link("./AppMenu", {
  default(v) {
    AppMenu = v;
  }

}, 5);
let AppStatus;
module.link("./AppStatus", {
  default(v) {
    AppStatus = v;
  }

}, 6);
let PriceDisplay;
module.link("./PriceDisplay", {
  default(v) {
    PriceDisplay = v;
  }

}, 7);

const AppDetailsPageContent = _ref => {
  let {
    app
  } = _ref;
  const t = useTranslation();
  const {
    iconFileData = '',
    name,
    author: {
      name: authorName,
      homepage,
      support
    },
    description,
    categories = [],
    version,
    price,
    purchaseType,
    pricingPlans,
    iconFileContent,
    installed,
    bundledIn
  } = app;
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
    version
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
  })))), /*#__PURE__*/React.createElement(Divider, null), app.licenseValidation && /*#__PURE__*/React.createElement(React.Fragment, null, Object.entries(app.licenseValidation.warnings).map(_ref2 => {
    let [key] = _ref2;
    return /*#__PURE__*/React.createElement(Callout, {
      key: key,
      type: "warning"
    }, t("Apps_License_Message_".concat(key)));
  }), Object.entries(app.licenseValidation.errors).map(_ref3 => {
    let [key] = _ref3;
    return /*#__PURE__*/React.createElement(Callout, {
      key: key,
      type: "danger"
    }, t("Apps_License_Message_".concat(key)));
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
  }, categories === null || categories === void 0 ? void 0 : categories.map(current => /*#__PURE__*/React.createElement(Chip, {
    key: current,
    textTransform: "uppercase",
    mie: "x8"
  }, /*#__PURE__*/React.createElement(Box, {
    color: "hint"
  }, current)))), /*#__PURE__*/React.createElement(Box, {
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
  }, t('Bundles')), bundledIn.map(bundle => /*#__PURE__*/React.createElement(Box, {
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
  }, bundle.apps.map(app => /*#__PURE__*/React.createElement(AppAvatar, {
    size: "x36",
    key: app.latest.name,
    iconFileContent: app.latest.iconFileContent,
    iconFileData: app.latest.iconFileData
  }))), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    mis: "x12"
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2m"
  }, bundle.bundleName), bundle.apps.map(app => /*#__PURE__*/React.createElement(Box, {
    key: app.latest.name
  }, app.latest.name, ",")))))))));
};

module.exportDefault(AppDetailsPageContent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/08c1b91227333b695a884922420319a44aac84bd.map
