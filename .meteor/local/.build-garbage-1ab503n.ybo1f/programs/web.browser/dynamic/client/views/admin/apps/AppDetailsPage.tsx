function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppDetailsPage.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Button, ButtonGroup, Icon, Box, Throbber;
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

  Box(v) {
    Box = v;
  },

  Throbber(v) {
    Throbber = v;
  }

}, 0);
let React, useState, useCallback, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 1);
let Apps;
module.link("../../../../app/apps/client/orchestrator", {
  Apps(v) {
    Apps = v;
  }

}, 2);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 3);
let useRoute, useCurrentRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  },

  useCurrentRoute(v) {
    useCurrentRoute = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let APIsDisplay;
module.link("./APIsDisplay", {
  default(v) {
    APIsDisplay = v;
  }

}, 6);
let AppDetailsPageContent;
module.link("./AppDetailsPageContent", {
  default(v) {
    AppDetailsPageContent = v;
  }

}, 7);
let LoadingDetails;
module.link("./LoadingDetails", {
  default(v) {
    LoadingDetails = v;
  }

}, 8);
let SettingsDisplay;
module.link("./SettingsDisplay", {
  default(v) {
    SettingsDisplay = v;
  }

}, 9);
let handleAPIError;
module.link("./helpers", {
  handleAPIError(v) {
    handleAPIError = v;
  }

}, 10);
let useAppInfo;
module.link("./hooks/useAppInfo", {
  useAppInfo(v) {
    useAppInfo = v;
  }

}, 11);

const AppDetailsPage = function AppDetailsPage(_ref) {
  let {
    id
  } = _ref;
  const t = useTranslation();
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const settingsRef = useRef({});
  const data = useAppInfo(id);
  const [currentRouteName] = useCurrentRoute();

  if (!currentRouteName) {
    throw new Error('No current route name');
  }

  const router = useRoute(currentRouteName);

  const handleReturn = () => router.push({});

  const {
    settings,
    apis
  } = _objectSpread({
    settings: {},
    apis: []
  }, data);

  const showSettings = Object.values(settings).length;
  const showApis = apis.length;
  const saveAppSettings = useCallback(async () => {
    const {
      current
    } = settingsRef;
    setIsSaving(true);

    try {
      await Apps.setAppSettings(id, Object.values(settings).map(value => _objectSpread(_objectSpread({}, value), {}, {
        value: current === null || current === void 0 ? void 0 : current[value.id]
      })));
    } catch (e) {
      handleAPIError(e);
    }

    setIsSaving(false);
  }, [id, settings]);
  return /*#__PURE__*/React.createElement(Page, {
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('App_Details')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: !hasUnsavedChanges || isSaving,
    onClick: saveAppSettings
  }, !isSaving && t('Save_changes'), isSaving && /*#__PURE__*/React.createElement(Throbber, {
    inheritColor: true
  })), /*#__PURE__*/React.createElement(Button, {
    onClick: handleReturn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "back"
  }), t('Back')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    maxWidth: "x600",
    w: "full",
    alignSelf: "center"
  }, !data && /*#__PURE__*/React.createElement(LoadingDetails, null), data && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppDetailsPageContent, {
    app: data
  }), !!showApis && /*#__PURE__*/React.createElement(APIsDisplay, {
    apis: apis
  }), !!showSettings && /*#__PURE__*/React.createElement(SettingsDisplay, {
    settings: settings,
    setHasUnsavedChanges: setHasUnsavedChanges,
    settingsRef: settingsRef
  })))));
};

module.exportDefault(AppDetailsPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/6740dec628b2a0693570d2bf03b9c7896bc4f794.map
