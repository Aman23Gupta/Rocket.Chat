function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/AppLayout.tsx                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, Fragment, Suspense;
module.link("react", {
  default(v) {
    React = v;
  },

  Fragment(v) {
    Fragment = v;
  },

  Suspense(v) {
    Suspense = v;
  }

}, 0);
let useSubscription;
module.link("use-subscription", {
  useSubscription(v) {
    useSubscription = v;
  }

}, 1);
let appLayout;
module.link("../../lib/appLayout", {
  appLayout(v) {
    appLayout = v;
  }

}, 2);
let blazePortals;
module.link("../../lib/portals/blazePortals", {
  blazePortals(v) {
    blazePortals = v;
  }

}, 3);
let PageLoading;
module.link("./PageLoading", {
  default(v) {
    PageLoading = v;
  }

}, 4);
let useTooltipHandling;
module.link("./useTooltipHandling", {
  useTooltipHandling(v) {
    useTooltipHandling = v;
  }

}, 5);

const AppLayout = () => {
  useTooltipHandling();
  const layout = useSubscription(appLayout);
  const portals = useSubscription(blazePortals);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Suspense, {
    fallback: /*#__PURE__*/React.createElement(PageLoading, null)
  }, layout), portals.map(_ref => {
    let {
      key,
      node
    } = _ref;
    return /*#__PURE__*/React.createElement(Fragment, {
      key: key,
      children: node
    });
  }));
};

module.exportDefault(AppLayout);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/109ec3534cd00e3d7097c6967d7a106444c82b1f.map
