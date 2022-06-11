function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppDetailsPage.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var Button, ButtonGroup, Icon, Box, Throbber;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Box: function (v) {
    Box = v;
  },
  Throbber: function (v) {
    Throbber = v;
  }
}, 0);
var React, useState, useCallback, useRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 1);
var Apps;
module.link("../../../../app/apps/client/orchestrator", {
  Apps: function (v) {
    Apps = v;
  }
}, 2);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 3);
var useRoute, useCurrentRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  },
  useCurrentRoute: function (v) {
    useCurrentRoute = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var APIsDisplay;
module.link("./APIsDisplay", {
  "default": function (v) {
    APIsDisplay = v;
  }
}, 6);
var AppDetailsPageContent;
module.link("./AppDetailsPageContent", {
  "default": function (v) {
    AppDetailsPageContent = v;
  }
}, 7);
var LoadingDetails;
module.link("./LoadingDetails", {
  "default": function (v) {
    LoadingDetails = v;
  }
}, 8);
var SettingsDisplay;
module.link("./SettingsDisplay", {
  "default": function (v) {
    SettingsDisplay = v;
  }
}, 9);
var handleAPIError;
module.link("./helpers", {
  handleAPIError: function (v) {
    handleAPIError = v;
  }
}, 10);
var useAppInfo;
module.link("./hooks/useAppInfo", {
  useAppInfo: function (v) {
    useAppInfo = v;
  }
}, 11);

var AppDetailsPage = function () {
  function AppDetailsPage(_ref) {
    var id = _ref.id;
    var t = useTranslation();

    var _useState = useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        hasUnsavedChanges = _useState2[0],
        setHasUnsavedChanges = _useState2[1];

    var _useState3 = useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        isSaving = _useState4[0],
        setIsSaving = _useState4[1];

    var settingsRef = useRef({});
    var data = useAppInfo(id);

    var _useCurrentRoute = useCurrentRoute(),
        _useCurrentRoute2 = _slicedToArray(_useCurrentRoute, 1),
        currentRouteName = _useCurrentRoute2[0];

    if (!currentRouteName) {
      throw new Error('No current route name');
    }

    var router = useRoute(currentRouteName);

    var handleReturn = function () {
      return router.push({});
    };

    var _settings$apis$data = _objectSpread({
      settings: {},
      apis: []
    }, data),
        settings = _settings$apis$data.settings,
        apis = _settings$apis$data.apis;

    var showSettings = Object.values(settings).length;
    var showApis = apis.length;
    var saveAppSettings = useCallback(function () {
      function _callee() {
        var current;
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  current = settingsRef.current;
                  setIsSaving(true);
                  _context.prev = 2;
                  _context.next = 5;
                  return _regeneratorRuntime.awrap(Apps.setAppSettings(id, Object.values(settings).map(function (value) {
                    return _objectSpread(_objectSpread({}, value), {}, {
                      value: current === null || current === void 0 ? void 0 : current[value.id]
                    });
                  })));

                case 5:
                  _context.next = 10;
                  break;

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](2);
                  handleAPIError(_context.t0);

                case 10:
                  setIsSaving(false);

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, [[2, 7]], Promise);
      }

      return _callee;
    }(), [id, settings]);
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
  }

  return AppDetailsPage;
}();

module.exportDefault(AppDetailsPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/2e4526397af37294f01499fcf1c112687499dad7.map
