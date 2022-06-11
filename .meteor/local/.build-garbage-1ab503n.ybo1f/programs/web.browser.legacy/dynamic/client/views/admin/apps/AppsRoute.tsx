function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppsRoute.tsx                                                                               //
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
var React, useState, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 0);
var NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  "default": function (v) {
    NotAuthorizedPage = v;
  }
}, 1);
var PageSkeleton;
module.link("../../../components/PageSkeleton", {
  "default": function (v) {
    PageSkeleton = v;
  }
}, 2);
var usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 3);
var useRouteParameter, useRoute;
module.link("../../../contexts/RouterContext", {
  useRouteParameter: function (v) {
    useRouteParameter = v;
  },
  useRoute: function (v) {
    useRoute = v;
  }
}, 4);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 5);
var AppDetailsPage;
module.link("./AppDetailsPage", {
  "default": function (v) {
    AppDetailsPage = v;
  }
}, 6);
var AppInstallPage;
module.link("./AppInstallPage", {
  "default": function (v) {
    AppInstallPage = v;
  }
}, 7);
var AppLogsPage;
module.link("./AppLogsPage", {
  "default": function (v) {
    AppLogsPage = v;
  }
}, 8);
var AppsPage;
module.link("./AppsPage", {
  "default": function (v) {
    AppsPage = v;
  }
}, 9);
var AppsProvider;
module.link("./AppsProvider", {
  "default": function (v) {
    AppsProvider = v;
  }
}, 10);

var AppsRoute = function () {
  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  var canViewAppsAndMarketplace = usePermission('manage-apps');
  var isAppsEngineEnabled = useMethod('apps/is-enabled');
  var appsWhatIsItRoute = useRoute('admin-apps-disabled');
  useEffect(function () {
    var mounted = true;

    var initialize = function () {
      function _callee() {
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (canViewAppsAndMarketplace) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  _context.next = 4;
                  return _regeneratorRuntime.awrap(isAppsEngineEnabled());

                case 4:
                  if (_context.sent) {
                    _context.next = 7;
                    break;
                  }

                  appsWhatIsItRoute.push();
                  return _context.abrupt("return");

                case 7:
                  if (mounted) {
                    _context.next = 9;
                    break;
                  }

                  return _context.abrupt("return");

                case 9:
                  setLoading(false);

                case 10:
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
    return function () {
      mounted = false;
    };
  }, [canViewAppsAndMarketplace, isAppsEngineEnabled, appsWhatIsItRoute]);
  var context = useRouteParameter('context');
  var isMarketplace = !context;
  var id = useRouteParameter('id');

  if (!canViewAppsAndMarketplace) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  if (isLoading) {
    return /*#__PURE__*/React.createElement(PageSkeleton, null);
  }

  return /*#__PURE__*/React.createElement(AppsProvider, null, (!context || context === 'installed') && /*#__PURE__*/React.createElement(AppsPage, {
    isMarketplace: isMarketplace
  }) || id && context === 'details' && /*#__PURE__*/React.createElement(AppDetailsPage, {
    id: id
  }) || context === 'logs' && /*#__PURE__*/React.createElement(AppLogsPage, {
    id: id
  }) || context === 'install' && /*#__PURE__*/React.createElement(AppInstallPage, null));
};

module.exportDefault(AppsRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/6ac7d7fd22ac2047dc388b53c97cf83a74fae25b.map
