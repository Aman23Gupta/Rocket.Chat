function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppsWhatIsIt.tsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Button, Box, Throbber;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  Box(v) {
    Box = v;
  },

  Throbber(v) {
    Throbber = v;
  }

}, 0);
let React, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let Apps;
module.link("../../../../app/apps/client", {
  Apps(v) {
    Apps = v;
  }

}, 2);
let ExternalLink;
module.link("../../../components/ExternalLink", {
  default(v) {
    ExternalLink = v;
  }

}, 3);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 4);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 5);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 6);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
const readMeUrl = 'https://go.rocket.chat/i/developing-an-app';

const AppsWhatIsIt = () => {
  const t = useTranslation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const appsRouter = useRoute('admin-marketplace');
  const enableAppsEngine = useMethod('apps/go-enable');
  const isAppsEngineEnabled = useMethod('apps/is-enabled');

  const handleClick = async () => {
    setLoading(true);

    try {
      await enableAppsEngine();

      if (await isAppsEngineEnabled()) {
        await Apps.getAppClientManager().initialize();
        await Apps.load(true);
      }

      appsRouter.push();
    } catch (error) {
      setError(error);
    }
  };

  return /*#__PURE__*/React.createElement(Page, {
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Apps_WhatIsIt')
  }), /*#__PURE__*/React.createElement(Page.ScrollableContent, null, error ? /*#__PURE__*/React.createElement(Box, {
    fontScale: "h4",
    maxWidth: "x600",
    alignSelf: "center"
  }, error.message) : /*#__PURE__*/React.createElement(Box, {
    alignSelf: "center",
    maxWidth: "x600",
    width: "full",
    withRichContent: true
  }, /*#__PURE__*/React.createElement("p", null, t('Apps_WhatIsIt_paragraph1')), /*#__PURE__*/React.createElement("p", null, t('Apps_WhatIsIt_paragraph2')), /*#__PURE__*/React.createElement("p", null, t('Apps_WhatIsIt_paragraph3'), " ", /*#__PURE__*/React.createElement(ExternalLink, {
    to: readMeUrl
  })), /*#__PURE__*/React.createElement("p", null, t('Apps_WhatIsIt_paragraph4')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: loading,
    minHeight: "x40",
    onClick: handleClick
  }, loading ? /*#__PURE__*/React.createElement(Throbber, {
    inheritColor: true
  }) : t('Enable')))));
};

module.exportDefault(AppsWhatIsIt);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/661d562aa53b91ee064bbb2b338a137002c64de9.map
