function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/OmnichannelRouter.tsx                                                                      //
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
let SideNav;
module.link("../../../app/ui-utils/client", {
  SideNav(v) {
    SideNav = v;
  }

}, 1);
let PageSkeleton;
module.link("../../components/PageSkeleton", {
  default(v) {
    PageSkeleton = v;
  }

}, 2);
let useCurrentRoute, useRoute;
module.link("../../contexts/RouterContext", {
  useCurrentRoute(v) {
    useCurrentRoute = v;
  },

  useRoute(v) {
    useRoute = v;
  }

}, 3);

const OmnichannelRouter = _ref => {
  let {
    renderRoute
  } = _ref;
  const [routeName] = useCurrentRoute();
  const defaultRoute = useRoute('omnichannel-current-chats');
  useEffect(() => {
    if (routeName === 'omnichannel-index') {
      defaultRoute.push();
    }
  }, [defaultRoute, routeName]);
  useEffect(() => {
    SideNav.setFlex('omnichannelFlex');
    SideNav.openFlex(() => undefined);
  }, []);
  return renderRoute ? /*#__PURE__*/React.createElement(Suspense, {
    fallback: /*#__PURE__*/React.createElement(PageSkeleton, null)
  }, renderRoute()) : /*#__PURE__*/React.createElement(PageSkeleton, null);
};

module.exportDefault(OmnichannelRouter);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/881a27b8a986c84b5a625519ec76b382c26d15ee.map
