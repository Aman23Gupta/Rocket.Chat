function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppsProvider.tsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 1);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 2);

var _createForOfIteratorHelperLoose;

module.link("@babel/runtime/helpers/createForOfIteratorHelperLoose", {
  default: function (v) {
    _createForOfIteratorHelperLoose = v;
  }
}, 3);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 4);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var React, useEffect, useReducer, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useReducer: function (v) {
    useReducer = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var AppEvents;
module.link("../../../../app/apps/client/communication", {
  AppEvents: function (v) {
    AppEvents = v;
  }
}, 2);
var Apps;
module.link("../../../../app/apps/client/orchestrator", {
  Apps: function (v) {
    Apps = v;
  }
}, 3);
var AsyncStatePhase;
module.link("../../../lib/asyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 4);
var AppsContext;
module.link("./AppsContext", {
  AppsContext: function (v) {
    AppsContext = v;
  }
}, 5);
var handleAPIError;
module.link("./helpers", {
  handleAPIError: function (v) {
    handleAPIError = v;
  }
}, 6);

var registerListeners = function (listeners) {
  var entries = Object.entries(listeners);

  for (var _i = 0, _entries = entries; _i < _entries.length; _i++) {
    var _Apps$getWsListener;

    var _ref = _entries[_i];

    var _ref2 = _slicedToArray(_ref, 2);

    var event = _ref2[0];
    var callback = _ref2[1];
    (_Apps$getWsListener = Apps.getWsListener()) === null || _Apps$getWsListener === void 0 ? void 0 : _Apps$getWsListener.registerListener(AppEvents[event], callback);
  }

  return function () {
    for (var _iterator = _createForOfIteratorHelperLoose(entries), _step; !(_step = _iterator()).done;) {
      var _Apps$getWsListener2;

      var _ref3 = _step.value;

      var _ref4 = _slicedToArray(_ref3, 2);

      var _event = _ref4[0];
      var _callback = _ref4[1];
      (_Apps$getWsListener2 = Apps.getWsListener()) === null || _Apps$getWsListener2 === void 0 ? void 0 : _Apps$getWsListener2.unregisterListener(AppEvents[_event], _callback);
    }
  };
};

var sortByName = function (apps) {
  return apps.sort(function (a, b) {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  });
};

var reducer = function (state, action) {
  switch (action.type) {
    case 'invalidate':
      if (state.phase !== AsyncStatePhase.RESOLVED) {
        return state;
      }

      return {
        phase: AsyncStatePhase.RESOLVED,
        reload: action.reload,
        value: {
          apps: sortByName(state.value.apps.map(function (app) {
            if (app.id === action.appId) {
              return _objectSpread({}, app);
            }

            return app;
          }))
        },
        error: undefined
      };

    case 'update':
      if (state.phase !== AsyncStatePhase.RESOLVED) {
        return state;
      }

      return {
        phase: AsyncStatePhase.RESOLVED,
        reload: function () {
          function _callee() {
            return _regeneratorRuntime.async(function () {
              function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", undefined);

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }

              return _callee$;
            }(), null, null, null, Promise);
          }

          return _callee;
        }(),
        value: {
          apps: sortByName(state.value.apps.map(function (app) {
            if (app.id === action.app.id) {
              return action.app;
            }

            return app;
          }))
        },
        error: undefined
      };

    case 'request':
      return {
        reload: function () {
          function _callee2() {
            return _regeneratorRuntime.async(function () {
              function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      return _context2.abrupt("return", undefined);

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }

              return _callee2$;
            }(), null, null, null, Promise);
          }

          return _callee2;
        }(),
        phase: AsyncStatePhase.LOADING,
        value: undefined,
        error: undefined
      };

    case 'success':
      return {
        reload: action.reload,
        phase: AsyncStatePhase.RESOLVED,
        value: {
          apps: sortByName(action.apps)
        },
        error: undefined
      };

    case 'delete':
      if (state.phase !== AsyncStatePhase.RESOLVED) {
        return state;
      }

      return {
        reload: action.reload,
        phase: AsyncStatePhase.RESOLVED,
        value: {
          apps: state.value.apps.filter(function (_ref5) {
            var id = _ref5.id;
            return id !== action.appId;
          })
        },
        error: undefined
      };

    case 'failure':
      return {
        reload: action.reload,
        phase: AsyncStatePhase.REJECTED,
        value: undefined,
        error: action.error
      };

    default:
      return state;
  }
};

var AppsProvider = function (_ref6) {
  var children = _ref6.children;

  var _useReducer = useReducer(reducer, {
    phase: AsyncStatePhase.LOADING,
    value: undefined,
    error: undefined,
    reload: function () {
      function _callee3() {
        return _regeneratorRuntime.async(function () {
          function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  return _context3.abrupt("return", undefined);

                case 1:
                case "end":
                  return _context3.stop();
              }
            }
          }

          return _callee3$;
        }(), null, null, null, Promise);
      }

      return _callee3;
    }()
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      marketplaceAppsState = _useReducer2[0],
      dispatchMarketplaceApps = _useReducer2[1];

  var _useReducer3 = useReducer(reducer, {
    phase: AsyncStatePhase.LOADING,
    value: undefined,
    error: undefined,
    reload: function () {
      function _callee4() {
        return _regeneratorRuntime.async(function () {
          function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  return _context4.abrupt("return", undefined);

                case 1:
                case "end":
                  return _context4.stop();
              }
            }
          }

          return _callee4$;
        }(), null, null, null, Promise);
      }

      return _callee4;
    }()
  }),
      _useReducer4 = _slicedToArray(_useReducer3, 2),
      installedAppsState = _useReducer4[0],
      dispatchInstalledApps = _useReducer4[1];

  var fetch = useCallback(function () {
    function _callee7() {
      var installedApps, marketplaceApps, marketplaceError, installedAppsError, installedAppsData, marketplaceAppsData;
      return _regeneratorRuntime.async(function () {
        function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                dispatchMarketplaceApps({
                  type: 'request',
                  reload: function () {
                    function _callee5() {
                      return _regeneratorRuntime.async(function () {
                        function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                return _context5.abrupt("return", undefined);

                              case 1:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }

                        return _callee5$;
                      }(), null, null, null, Promise);
                    }

                    return _callee5;
                  }()
                });
                dispatchInstalledApps({
                  type: 'request',
                  reload: function () {
                    function _callee6() {
                      return _regeneratorRuntime.async(function () {
                        function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                return _context6.abrupt("return", undefined);

                              case 1:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }

                        return _callee6$;
                      }(), null, null, null, Promise);
                    }

                    return _callee6;
                  }()
                });
                installedApps = [];
                marketplaceApps = [];
                marketplaceError = false;
                installedAppsError = false;
                _context7.prev = 6;
                _context7.next = 9;
                return _regeneratorRuntime.awrap(Apps.getAppsFromMarketplace());

              case 9:
                marketplaceApps = _context7.sent;
                _context7.next = 16;
                break;

              case 12:
                _context7.prev = 12;
                _context7.t0 = _context7["catch"](6);
                dispatchMarketplaceApps({
                  type: 'failure',
                  error: _context7.t0,
                  reload: fetch
                });
                marketplaceError = true;

              case 16:
                _context7.prev = 16;
                _context7.next = 19;
                return _regeneratorRuntime.awrap(Apps.getApps().then(function (result) {
                  return result.map(function (current) {
                    return _objectSpread(_objectSpread({}, current), {}, {
                      installed: true,
                      marketplace: false
                    });
                  });
                }));

              case 19:
                installedApps = _context7.sent;
                _context7.next = 26;
                break;

              case 22:
                _context7.prev = 22;
                _context7.t1 = _context7["catch"](16);
                dispatchInstalledApps({
                  type: 'failure',
                  error: _context7.t1,
                  reload: fetch
                });
                installedAppsError = true;

              case 26:
                installedAppsData = [];
                marketplaceAppsData = [];

                if (!marketplaceError) {
                  marketplaceApps.forEach(function (app) {
                    var appIndex = installedApps.findIndex(function (_ref7) {
                      var id = _ref7.id;
                      return id === app.id;
                    });

                    if (!installedApps[appIndex]) {
                      marketplaceAppsData.push(_objectSpread(_objectSpread({}, app), {}, {
                        status: undefined,
                        marketplaceVersion: app.version,
                        bundledIn: app.bundledIn
                      }));
                      return;
                    }

                    var _installedApps$splice = installedApps.splice(appIndex, 1),
                        _installedApps$splice2 = _slicedToArray(_installedApps$splice, 1),
                        installedApp = _installedApps$splice2[0];

                    var appData = _objectSpread(_objectSpread(_objectSpread({}, app), {}, {
                      installed: true
                    }, installedApp && {
                      status: installedApp.status,
                      version: installedApp.version,
                      licenseValidation: installedApp.licenseValidation
                    }), {}, {
                      bundledIn: app.bundledIn,
                      marketplaceVersion: app.version
                    });

                    installedAppsData.push(appData);
                    marketplaceAppsData.push(appData);
                  });
                  dispatchMarketplaceApps({
                    type: 'success',
                    reload: fetch,
                    apps: marketplaceAppsData
                  });
                }

                if (!installedAppsError) {
                  if (installedApps.length) {
                    installedAppsData.push.apply(installedAppsData, _toConsumableArray(installedApps));
                  }

                  dispatchInstalledApps({
                    type: 'success',
                    reload: fetch,
                    apps: installedAppsData
                  });
                }

              case 30:
              case "end":
                return _context7.stop();
            }
          }
        }

        return _callee7$;
      }(), null, null, [[6, 12], [16, 22]], Promise);
    }

    return _callee7;
  }(), []);
  var getCurrentData = useMutableCallback(function () {
    function getCurrentData() {
      return [marketplaceAppsState, installedAppsState];
    }

    return getCurrentData;
  }());
  useEffect(function () {
    var handleAppAddedOrUpdated = function () {
      function _callee8(appId) {
        var marketplaceApp, installedApp, _installedApp, status, version, licenseValidation, record, _getCurrentData, _getCurrentData2, installedApps;

        return _regeneratorRuntime.async(function () {
          function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.prev = 0;
                  _context8.next = 3;
                  return _regeneratorRuntime.awrap(Apps.getApp(appId));

                case 3:
                  installedApp = _context8.sent;
                  _context8.next = 10;
                  break;

                case 6:
                  _context8.prev = 6;
                  _context8.t0 = _context8["catch"](0);
                  handleAPIError(_context8.t0);
                  throw _context8.t0;

                case 10:
                  _context8.prev = 10;
                  _context8.next = 13;
                  return _regeneratorRuntime.awrap(Apps.getAppFromMarketplace(appId, installedApp.version));

                case 13:
                  marketplaceApp = _context8.sent;
                  _context8.next = 19;
                  break;

                case 16:
                  _context8.prev = 16;
                  _context8.t1 = _context8["catch"](10);
                  handleAPIError(_context8.t1);

                case 19:
                  if (!(marketplaceApp !== undefined)) {
                    _context8.next = 29;
                    break;
                  }

                  _installedApp = installedApp, status = _installedApp.status, version = _installedApp.version, licenseValidation = _installedApp.licenseValidation;
                  record = _objectSpread(_objectSpread({}, marketplaceApp), {}, {
                    installed: true,
                    status: status,
                    version: version,
                    licenseValidation: licenseValidation,
                    marketplaceVersion: marketplaceApp.version
                  });
                  _getCurrentData = getCurrentData(), _getCurrentData2 = _slicedToArray(_getCurrentData, 2), installedApps = _getCurrentData2[1];
                  dispatchMarketplaceApps({
                    type: 'update',
                    app: record,
                    reload: fetch
                  });

                  if (!installedApps.value) {
                    _context8.next = 27;
                    break;
                  }

                  dispatchInstalledApps({
                    type: 'success',
                    apps: [].concat(_toConsumableArray(installedApps.value.apps), [record]),
                    reload: fetch
                  });
                  return _context8.abrupt("return");

                case 27:
                  dispatchInstalledApps({
                    type: 'success',
                    apps: [record],
                    reload: fetch
                  });
                  return _context8.abrupt("return");

                case 29:
                  dispatchInstalledApps({
                    type: 'update',
                    app: installedApp,
                    reload: fetch
                  });

                case 30:
                case "end":
                  return _context8.stop();
              }
            }
          }

          return _callee8$;
        }(), null, null, [[0, 6], [10, 16]], Promise);
      }

      return _callee8;
    }();

    var listeners = {
      APP_ADDED: handleAppAddedOrUpdated,
      APP_UPDATED: handleAppAddedOrUpdated,
      APP_REMOVED: function (appId) {
        var _updatedData$value;

        var _getCurrentData3 = getCurrentData(),
            _getCurrentData4 = _slicedToArray(_getCurrentData3, 1),
            updatedData = _getCurrentData4[0];

        var app = (_updatedData$value = updatedData.value) === null || _updatedData$value === void 0 ? void 0 : _updatedData$value.apps.find(function (_ref8) {
          var id = _ref8.id;
          return id === appId;
        });
        dispatchInstalledApps({
          type: 'delete',
          appId: appId,
          reload: fetch
        });

        if (!app) {
          return;
        }

        dispatchMarketplaceApps({
          type: 'update',
          reload: fetch,
          app: _objectSpread(_objectSpread({}, app), {}, {
            version: app === null || app === void 0 ? void 0 : app.marketplaceVersion,
            installed: false,
            marketplaceVersion: app === null || app === void 0 ? void 0 : app.marketplaceVersion
          })
        });
      },
      APP_STATUS_CHANGE: function (_ref9) {
        var _updatedData$value2;

        var appId = _ref9.appId,
            status = _ref9.status;

        var _getCurrentData5 = getCurrentData(),
            _getCurrentData6 = _slicedToArray(_getCurrentData5, 1),
            updatedData = _getCurrentData6[0];

        var app = (_updatedData$value2 = updatedData.value) === null || _updatedData$value2 === void 0 ? void 0 : _updatedData$value2.apps.find(function (_ref10) {
          var id = _ref10.id;
          return id === appId;
        });

        if (!app) {
          return;
        }

        app.status = status;
        dispatchInstalledApps({
          type: 'update',
          app: _objectSpread(_objectSpread({}, app), {}, {
            status: status
          }),
          reload: fetch
        });
        dispatchMarketplaceApps({
          type: 'update',
          app: _objectSpread(_objectSpread({}, app), {}, {
            status: status
          }),
          reload: fetch
        });
      },
      APP_SETTING_UPDATED: function (_ref11) {
        var appId = _ref11.appId;
        dispatchInstalledApps({
          type: 'invalidate',
          appId: appId,
          reload: fetch
        });
        dispatchMarketplaceApps({
          type: 'invalidate',
          appId: appId,
          reload: fetch
        });
      }
    };
    var unregisterListeners = registerListeners(listeners);

    try {
      fetch();
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      return unregisterListeners;
    }
  }, [fetch, getCurrentData]);
  return /*#__PURE__*/React.createElement(AppsContext.Provider, {
    children: children,
    value: {
      installedApps: installedAppsState,
      marketplaceApps: marketplaceAppsState,
      reload: fetch
    }
  });
};

module.exportDefault(AppsProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/403ab8a0b274a5a9bdd05b80daf60009121b8867.map
