function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/hooks/useAppInfo.ts                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
module.export({
  useAppInfo: () => useAppInfo
});
let useState, useEffect, useContext;
module.link("react", {
  useState(v) {
    useState = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useContext(v) {
    useContext = v;
  }

}, 0);
let Apps;
module.link("../../../../../app/apps/client/orchestrator", {
  Apps(v) {
    Apps = v;
  }

}, 1);
let AppsContext;
module.link("../AppsContext", {
  AppsContext(v) {
    AppsContext = v;
  }

}, 2);
let handleAPIError;
module.link("../helpers", {
  handleAPIError(v) {
    handleAPIError = v;
  }

}, 3);

const getBundledIn = async (appId, appVersion) => {
  try {
    const {
      bundledIn
    } = await Apps.getLatestAppFromMarketplace(appId, appVersion);

    if (!bundledIn) {
      return [];
    }

    return await Promise.all(bundledIn.map(async bundle => {
      const apps = await Apps.getAppsOnBundle(bundle.bundleId);
      bundle.apps = apps.slice(0, 4);
      return bundle;
    }));
  } catch (e) {
    handleAPIError(e);
    return [];
  }
};

const getSettings = async (appId, installed) => {
  if (!installed) {
    return {};
  }

  try {
    return Apps.getAppSettings(appId);
  } catch (e) {
    handleAPIError(e);
    return {};
  }
};

const getApis = async (appId, installed) => {
  if (!installed) {
    return [];
  }

  try {
    return Apps.getAppApis(appId);
  } catch (e) {
    handleAPIError(e);
    return [];
  }
};

const useAppInfo = appId => {
  const {
    installedApps,
    marketplaceApps
  } = useContext(AppsContext);
  const [appData, setAppData] = useState();
  useEffect(() => {
    const apps = [];

    if (marketplaceApps.value) {
      apps.push(...marketplaceApps.value.apps);
    }

    if (installedApps.value) {
      apps.push(...installedApps.value.apps);
    }

    const fetchAppInfo = async () => {
      var _apps$find;

      if (!(apps !== null && apps !== void 0 && apps.length) || !appId) {
        return;
      }

      const app = (_apps$find = apps.find(app => app.id === appId)) !== null && _apps$find !== void 0 ? _apps$find : _objectSpread(_objectSpread({}, await Apps.getApp(appId)), {}, {
        installed: true,
        marketplace: false
      });
      const [bundledIn, settings, apis] = await Promise.all([app.marketplace === false ? [] : getBundledIn(app.id, app.version), getSettings(app.id, app.installed), getApis(app.id, app.installed)]);
      setAppData(_objectSpread(_objectSpread({}, app), {}, {
        bundledIn,
        settings,
        apis
      }));
    };

    fetchAppInfo();
  }, [appId, installedApps, marketplaceApps]);
  return appData;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/hooks/711f258066c52e291acb45a868c802e0b3124765.map
