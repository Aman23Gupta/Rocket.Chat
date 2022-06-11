function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/AdministrationRouter.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, Suspense, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  Suspense(v) {
    Suspense = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 0);
let PageSkeleton;
module.link("../../components/PageSkeleton", {
  default(v) {
    PageSkeleton = v;
  }

}, 1);
let useCurrentRoute, useRoute;
module.link("../../contexts/RouterContext", {
  useCurrentRoute(v) {
    useCurrentRoute = v;
  },

  useRoute(v) {
    useRoute = v;
  }

}, 2);
let SettingsProvider;
module.link("../../providers/SettingsProvider", {
  default(v) {
    SettingsProvider = v;
  }

}, 3);
let AdministrationLayout;
module.link("./AdministrationLayout", {
  default(v) {
    AdministrationLayout = v;
  }

}, 4);

function AdministrationRouter(_ref) {
  let {
    renderRoute
  } = _ref;
  const [routeName] = useCurrentRoute();
  const defaultRoute = useRoute('admin-info');
  useEffect(() => {
    if (routeName === 'admin-index') {
      defaultRoute.push();
    }
  }, [defaultRoute, routeName]);
  return /*#__PURE__*/React.createElement(AdministrationLayout, null, /*#__PURE__*/React.createElement(SettingsProvider, {
    privileged: true
  }, renderRoute ? /*#__PURE__*/React.createElement(Suspense, {
    fallback: /*#__PURE__*/React.createElement(PageSkeleton, null)
  }, renderRoute()) : /*#__PURE__*/React.createElement(PageSkeleton, null)));
}

module.exportDefault(AdministrationRouter);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/375657815218bf0b10c7a20e7780e52a42e75326.map
