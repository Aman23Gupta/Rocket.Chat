function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppsPage.tsx                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var Button, ButtonGroup, Icon, Skeleton, Tabs;
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
  Skeleton: function (v) {
    Skeleton = v;
  },
  Tabs: function (v) {
    Tabs = v;
  }
}, 0);
var React, useEffect, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 2);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 3);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 4);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 5);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var AppsTable;
module.link("./AppsTable", {
  "default": function (v) {
    AppsTable = v;
  }
}, 7);

var AppsPage = function (_ref) {
  var isMarketplace = _ref.isMarketplace;
  var t = useTranslation();
  var isDevelopmentMode = useSetting('Apps_Framework_Development_Mode');
  var marketplaceRoute = useRoute('admin-marketplace');
  var appsRoute = useRoute('admin-apps');
  var cloudRoute = useRoute('cloud');
  var checkUserLoggedIn = useMethod('cloud:checkUserLoggedIn');

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      isLoggedInCloud = _useState2[0],
      setIsLoggedInCloud = _useState2[1];

  useEffect(function () {
    var initialize = function () {
      function _callee() {
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.t0 = setIsLoggedInCloud;
                  _context.next = 3;
                  return _regeneratorRuntime.awrap(checkUserLoggedIn());

                case 3:
                  _context.t1 = _context.sent;
                  (0, _context.t0)(_context.t1);

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, null, Promise);
      }

      return _callee;
    }();

    initialize();
  }, [checkUserLoggedIn]);

  var handleLoginButtonClick = function () {
    cloudRoute.push();
  };

  var handleUploadButtonClick = function () {
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
    onClick: function () {
      return marketplaceRoute.push({
        context: ''
      });
    },
    selected: isMarketplace
  }, t('Marketplace')), /*#__PURE__*/React.createElement(Tabs.Item, {
    onClick: function () {
      return marketplaceRoute.push({
        context: 'installed'
      });
    },
    selected: !isMarketplace
  }, t('Installed'))), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(AppsTable, {
    isMarketplace: isMarketplace
  })));
};

module.exportDefault(AppsPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/5b2c9a64a42462cb4f0f13167b270e0db4d608a1.map
