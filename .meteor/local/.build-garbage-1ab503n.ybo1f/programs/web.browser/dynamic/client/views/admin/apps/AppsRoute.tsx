function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppsRoute.tsx                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, useState, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 0);
let NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  default(v) {
    NotAuthorizedPage = v;
  }

}, 1);
let PageSkeleton;
module.link("../../../components/PageSkeleton", {
  default(v) {
    PageSkeleton = v;
  }

}, 2);
let usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 3);
let useRouteParameter, useRoute;
module.link("../../../contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  },

  useRoute(v) {
    useRoute = v;
  }

}, 4);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 5);
let AppDetailsPage;
module.link("./AppDetailsPage", {
  default(v) {
    AppDetailsPage = v;
  }

}, 6);
let AppInstallPage;
module.link("./AppInstallPage", {
  default(v) {
    AppInstallPage = v;
  }

}, 7);
let AppLogsPage;
module.link("./AppLogsPage", {
  default(v) {
    AppLogsPage = v;
  }

}, 8);
let AppsPage;
module.link("./AppsPage", {
  default(v) {
    AppsPage = v;
  }

}, 9);
let AppsProvider;
module.link("./AppsProvider", {
  default(v) {
    AppsProvider = v;
  }

}, 10);

const AppsRoute = () => {
  const [isLoading, setLoading] = useState(true);
  const canViewAppsAndMarketplace = usePermission('manage-apps');
  const isAppsEngineEnabled = useMethod('apps/is-enabled');
  const appsWhatIsItRoute = useRoute('admin-apps-disabled');
  useEffect(() => {
    let mounted = true;

    const initialize = async () => {
      if (!canViewAppsAndMarketplace) {
        return;
      }

      if (!(await isAppsEngineEnabled())) {
        appsWhatIsItRoute.push();
        return;
      }

      if (!mounted) {
        return;
      }

      setLoading(false);
    };

    initialize();
    return () => {
      mounted = false;
    };
  }, [canViewAppsAndMarketplace, isAppsEngineEnabled, appsWhatIsItRoute]);
  const context = useRouteParameter('context');
  const isMarketplace = !context;
  const id = useRouteParameter('id');

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
//# sourceMappingURL=/dynamic/client/views/admin/apps/2b1ce10a2023154b2b90cfb029cc92164baf7170.map
