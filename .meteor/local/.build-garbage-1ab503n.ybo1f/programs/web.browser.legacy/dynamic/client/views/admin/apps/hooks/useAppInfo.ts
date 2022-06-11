function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/hooks/useAppInfo.ts                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 3);
module.export({
  useAppInfo: function () {
    return useAppInfo;
  }
});
var useState, useEffect, useContext;
module.link("react", {
  useState: function (v) {
    useState = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useContext: function (v) {
    useContext = v;
  }
}, 0);
var Apps;
module.link("../../../../../app/apps/client/orchestrator", {
  Apps: function (v) {
    Apps = v;
  }
}, 1);
var AppsContext;
module.link("../AppsContext", {
  AppsContext: function (v) {
    AppsContext = v;
  }
}, 2);
var handleAPIError;
module.link("../helpers", {
  handleAPIError: function (v) {
    handleAPIError = v;
  }
}, 3);

var getBundledIn = function () {
  function _callee2(appId, appVersion) {
    var _await$Apps$getLatest, bundledIn;

    return _regeneratorRuntime.async(function () {
      function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _regeneratorRuntime.awrap(Apps.getLatestAppFromMarketplace(appId, appVersion));

            case 3:
              _await$Apps$getLatest = _context2.sent;
              bundledIn = _await$Apps$getLatest.bundledIn;

              if (bundledIn) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt("return", []);

            case 7:
              _context2.next = 9;
              return _regeneratorRuntime.awrap(Promise.all(bundledIn.map(function () {
                function _callee(bundle) {
                  var apps;
                  return _regeneratorRuntime.async(function () {
                    function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _regeneratorRuntime.awrap(Apps.getAppsOnBundle(bundle.bundleId));

                          case 2:
                            apps = _context.sent;
                            bundle.apps = apps.slice(0, 4);
                            return _context.abrupt("return", bundle);

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
              }())));

            case 9:
              return _context2.abrupt("return", _context2.sent);

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              handleAPIError(_context2.t0);
              return _context2.abrupt("return", []);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }

      return _callee2$;
    }(), null, null, [[0, 12]], Promise);
  }

  return _callee2;
}();

var getSettings = function () {
  function _callee3(appId, installed) {
    return _regeneratorRuntime.async(function () {
      function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (installed) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return", {});

            case 2:
              _context3.prev = 2;
              return _context3.abrupt("return", Apps.getAppSettings(appId));

            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](2);
              handleAPIError(_context3.t0);
              return _context3.abrupt("return", {});

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }

      return _callee3$;
    }(), null, null, [[2, 6]], Promise);
  }

  return _callee3;
}();

var getApis = function () {
  function _callee4(appId, installed) {
    return _regeneratorRuntime.async(function () {
      function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (installed) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return", []);

            case 2:
              _context4.prev = 2;
              return _context4.abrupt("return", Apps.getAppApis(appId));

            case 6:
              _context4.prev = 6;
              _context4.t0 = _context4["catch"](2);
              handleAPIError(_context4.t0);
              return _context4.abrupt("return", []);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }

      return _callee4$;
    }(), null, null, [[2, 6]], Promise);
  }

  return _callee4;
}();

var useAppInfo = function (appId) {
  var _useContext = useContext(AppsContext),
      installedApps = _useContext.installedApps,
      marketplaceApps = _useContext.marketplaceApps;

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      appData = _useState2[0],
      setAppData = _useState2[1];

  useEffect(function () {
    var apps = [];

    if (marketplaceApps.value) {
      apps.push.apply(apps, _toConsumableArray(marketplaceApps.value.apps));
    }

    if (installedApps.value) {
      apps.push.apply(apps, _toConsumableArray(installedApps.value.apps));
    }

    var fetchAppInfo = function () {
      function _callee5() {
        var _apps$find;

        var app, _await$Promise$all, _await$Promise$all2, bundledIn, settings, apis;

        return _regeneratorRuntime.async(function () {
          function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (!(!(apps !== null && apps !== void 0 && apps.length) || !appId)) {
                    _context5.next = 2;
                    break;
                  }

                  return _context5.abrupt("return");

                case 2:
                  if (!((_apps$find = apps.find(function (app) {
                    return app.id === appId;
                  })) !== null && _apps$find !== void 0)) {
                    _context5.next = 6;
                    break;
                  }

                  _context5.t0 = _apps$find;
                  _context5.next = 16;
                  break;

                case 6:
                  _context5.t1 = _objectSpread;
                  _context5.t2 = _objectSpread;
                  _context5.t3 = {};
                  _context5.next = 11;
                  return _regeneratorRuntime.awrap(Apps.getApp(appId));

                case 11:
                  _context5.t4 = _context5.sent;
                  _context5.t5 = (0, _context5.t2)(_context5.t3, _context5.t4);
                  _context5.t6 = {};
                  _context5.t7 = {
                    installed: true,
                    marketplace: false
                  };
                  _context5.t0 = (0, _context5.t1)(_context5.t5, _context5.t6, _context5.t7);

                case 16:
                  app = _context5.t0;
                  _context5.next = 19;
                  return _regeneratorRuntime.awrap(Promise.all([app.marketplace === false ? [] : getBundledIn(app.id, app.version), getSettings(app.id, app.installed), getApis(app.id, app.installed)]));

                case 19:
                  _await$Promise$all = _context5.sent;
                  _await$Promise$all2 = _slicedToArray(_await$Promise$all, 3);
                  bundledIn = _await$Promise$all2[0];
                  settings = _await$Promise$all2[1];
                  apis = _await$Promise$all2[2];
                  setAppData(_objectSpread(_objectSpread({}, app), {}, {
                    bundledIn: bundledIn,
                    settings: settings,
                    apis: apis
                  }));

                case 25:
                case "end":
                  return _context5.stop();
              }
            }
          }

          return _callee5$;
        }(), null, null, null, Promise);
      }

      return _callee5;
    }();

    fetchAppInfo();
  }, [appId, installedApps, marketplaceApps]);
  return appData;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/hooks/8bd3af306e20235fb4113d805faaaa21c48c31c8.map
