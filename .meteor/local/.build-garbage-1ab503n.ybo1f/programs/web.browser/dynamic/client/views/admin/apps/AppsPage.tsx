function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppsPage.tsx                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Button, ButtonGroup, Icon, Skeleton, Tabs;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Icon(v) {
    Icon = v;
  },

  Skeleton(v) {
    Skeleton = v;
  },

  Tabs(v) {
    Tabs = v;
  }

}, 0);
let React, useEffect, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 2);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 3);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 4);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 5);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let AppsTable;
module.link("./AppsTable", {
  default(v) {
    AppsTable = v;
  }

}, 7);

const AppsPage = _ref => {
  let {
    isMarketplace
  } = _ref;
  const t = useTranslation();
  const isDevelopmentMode = useSetting('Apps_Framework_Development_Mode');
  const marketplaceRoute = useRoute('admin-marketplace');
  const appsRoute = useRoute('admin-apps');
  const cloudRoute = useRoute('cloud');
  const checkUserLoggedIn = useMethod('cloud:checkUserLoggedIn');
  const [isLoggedInCloud, setIsLoggedInCloud] = useState();
  useEffect(() => {
    const initialize = async () => {
      setIsLoggedInCloud(await checkUserLoggedIn());
    };

    initialize();
  }, [checkUserLoggedIn]);

  const handleLoginButtonClick = () => {
    cloudRoute.push();
  };

  const handleUploadButtonClick = () => {
    appsRoute.push({
      context: 'install'
    });
  };

  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Apps')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, isMarketplace && !isLoggedInCloud && /*#__PURE__*/React.createElement(Button, {
    disabled: isLoggedInCloud === undefined,
    onClick: handleLoginButtonClick
  }, isLoggedInCloud === undefined ? /*#__PURE__*/React.createElement(Skeleton, {
    width: "x80"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    name: "download"
  }), " ", t('Login'))), Boolean(isDevelopmentMode) && /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleUploadButtonClick
  }, /*#__PURE__*/React.createElement(Icon, {
    size: "x20",
    name: "upload"
  }), " ", t('Upload_app')))), /*#__PURE__*/React.createElement(Tabs, null, /*#__PURE__*/React.createElement(Tabs.Item, {
    onClick: () => marketplaceRoute.push({
      context: ''
    }),
    selected: isMarketplace
  }, t('Marketplace')), /*#__PURE__*/React.createElement(Tabs.Item, {
    onClick: () => marketplaceRoute.push({
      context: 'installed'
    }),
    selected: !isMarketplace
  }, t('Installed'))), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(AppsTable, {
    isMarketplace: isMarketplace
  })));
};

module.exportDefault(AppsPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/5164418eeadb823e5d7715e12e13236ad885711f.map
