function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppsProvider.tsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let React, useEffect, useReducer, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useReducer(v) {
    useReducer = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let AppEvents;
module.link("../../../../app/apps/client/communication", {
  AppEvents(v) {
    AppEvents = v;
  }

}, 2);
let Apps;
module.link("../../../../app/apps/client/orchestrator", {
  Apps(v) {
    Apps = v;
  }

}, 3);
let AsyncStatePhase;
module.link("../../../lib/asyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 4);
let AppsContext;
module.link("./AppsContext", {
  AppsContext(v) {
    AppsContext = v;
  }

}, 5);
let handleAPIError;
module.link("./helpers", {
  handleAPIError(v) {
    handleAPIError = v;
  }

}, 6);

const registerListeners = listeners => {
  const entries = Object.entries(listeners);

  for (const [event, callback] of entries) {
    var _Apps$getWsListener;

    (_Apps$getWsListener = Apps.getWsListener()) === null || _Apps$getWsListener === void 0 ? void 0 : _Apps$getWsListener.registerListener(AppEvents[event], callback);
  }

  return () => {
    for (const [event, callback] of entries) {
      var _Apps$getWsListener2;

      (_Apps$getWsListener2 = Apps.getWsListener()) === null || _Apps$getWsListener2 === void 0 ? void 0 : _Apps$getWsListener2.unregisterListener(AppEvents[event], callback);
    }
  };
};

const sortByName = apps => apps.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);

const reducer = (state, action) => {
  switch (action.type) {
    case 'invalidate':
      if (state.phase !== AsyncStatePhase.RESOLVED) {
        return state;
      }

      return {
        phase: AsyncStatePhase.RESOLVED,
        reload: action.reload,
        value: {
          apps: sortByName(state.value.apps.map(app => {
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
        reload: async () => undefined,
        value: {
          apps: sortByName(state.value.apps.map(app => {
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
        reload: async () => undefined,
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
          apps: state.value.apps.filter(_ref => {
            let {
              id
            } = _ref;
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

const AppsProvider = _ref2 => {
  let {
    children
  } = _ref2;
  const [marketplaceAppsState, dispatchMarketplaceApps] = useReducer(reducer, {
    phase: AsyncStatePhase.LOADING,
    value: undefined,
    error: undefined,
    reload: async () => undefined
  });
  const [installedAppsState, dispatchInstalledApps] = useReducer(reducer, {
    phase: AsyncStatePhase.LOADING,
    value: undefined,
    error: undefined,
    reload: async () => undefined
  });
  const fetch = useCallback(async () => {
    dispatchMarketplaceApps({
      type: 'request',
      reload: async () => undefined
    });
    dispatchInstalledApps({
      type: 'request',
      reload: async () => undefined
    });
    let installedApps = [];
    let marketplaceApps = [];
    let marketplaceError = false;
    let installedAppsError = false;

    try {
      marketplaceApps = await Apps.getAppsFromMarketplace();
    } catch (e) {
      dispatchMarketplaceApps({
        type: 'failure',
        error: e,
        reload: fetch
      });
      marketplaceError = true;
    }

    try {
      installedApps = await Apps.getApps().then(result => result.map(current => _objectSpread(_objectSpread({}, current), {}, {
        installed: true,
        marketplace: false
      })));
    } catch (e) {
      dispatchInstalledApps({
        type: 'failure',
        error: e,
        reload: fetch
      });
      installedAppsError = true;
    }

    const installedAppsData = [];
    const marketplaceAppsData = [];

    if (!marketplaceError) {
      marketplaceApps.forEach(app => {
        const appIndex = installedApps.findIndex(_ref3 => {
          let {
            id
          } = _ref3;
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

        const [installedApp] = installedApps.splice(appIndex, 1);

        const appData = _objectSpread(_objectSpread(_objectSpread({}, app), {}, {
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
        installedAppsData.push(...installedApps);
      }

      dispatchInstalledApps({
        type: 'success',
        reload: fetch,
        apps: installedAppsData
      });
    }
  }, []);
  const getCurrentData = useMutableCallback(function getCurrentData() {
    return [marketplaceAppsState, installedAppsState];
  });
  useEffect(() => {
    const handleAppAddedOrUpdated = async appId => {
      let marketplaceApp;
      let installedApp;

      try {
        installedApp = await Apps.getApp(appId);
      } catch (error) {
        handleAPIError(error);
        throw error;
      }

      try {
        marketplaceApp = await Apps.getAppFromMarketplace(appId, installedApp.version);
      } catch (error) {
        handleAPIError(error);
      }

      if (marketplaceApp !== undefined) {
        const {
          status,
          version,
          licenseValidation
        } = installedApp;

        const record = _objectSpread(_objectSpread({}, marketplaceApp), {}, {
          installed: true,
          status,
          version,
          licenseValidation,
          marketplaceVersion: marketplaceApp.version
        });

        const [, installedApps] = getCurrentData();
        dispatchMarketplaceApps({
          type: 'update',
          app: record,
          reload: fetch
        });

        if (installedApps.value) {
          dispatchInstalledApps({
            type: 'success',
            apps: [...installedApps.value.apps, record],
            reload: fetch
          });
          return;
        }

        dispatchInstalledApps({
          type: 'success',
          apps: [record],
          reload: fetch
        });
        return;
      }

      dispatchInstalledApps({
        type: 'update',
        app: installedApp,
        reload: fetch
      });
    };

    const listeners = {
      APP_ADDED: handleAppAddedOrUpdated,
      APP_UPDATED: handleAppAddedOrUpdated,
      APP_REMOVED: appId => {
        var _updatedData$value;

        const [updatedData] = getCurrentData();
        const app = (_updatedData$value = updatedData.value) === null || _updatedData$value === void 0 ? void 0 : _updatedData$value.apps.find(_ref4 => {
          let {
            id
          } = _ref4;
          return id === appId;
        });
        dispatchInstalledApps({
          type: 'delete',
          appId,
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
      APP_STATUS_CHANGE: _ref5 => {
        var _updatedData$value2;

        let {
          appId,
          status
        } = _ref5;
        const [updatedData] = getCurrentData();
        const app = (_updatedData$value2 = updatedData.value) === null || _updatedData$value2 === void 0 ? void 0 : _updatedData$value2.apps.find(_ref6 => {
          let {
            id
          } = _ref6;
          return id === appId;
        });

        if (!app) {
          return;
        }

        app.status = status;
        dispatchInstalledApps({
          type: 'update',
          app: _objectSpread(_objectSpread({}, app), {}, {
            status
          }),
          reload: fetch
        });
        dispatchMarketplaceApps({
          type: 'update',
          app: _objectSpread(_objectSpread({}, app), {}, {
            status
          }),
          reload: fetch
        });
      },
      APP_SETTING_UPDATED: _ref7 => {
        let {
          appId
        } = _ref7;
        dispatchInstalledApps({
          type: 'invalidate',
          appId,
          reload: fetch
        });
        dispatchMarketplaceApps({
          type: 'invalidate',
          appId,
          reload: fetch
        });
      }
    };
    const unregisterListeners = registerListeners(listeners);

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
//# sourceMappingURL=/dynamic/client/views/admin/apps/537f134b25eb9c49a44646cd52606807a9971731.map
