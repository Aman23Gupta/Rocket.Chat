function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/AppLayout.tsx                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React, Fragment, Suspense;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  Fragment: function (v) {
    Fragment = v;
  },
  Suspense: function (v) {
    Suspense = v;
  }
}, 0);
var useSubscription;
module.link("use-subscription", {
  useSubscription: function (v) {
    useSubscription = v;
  }
}, 1);
var appLayout;
module.link("../../lib/appLayout", {
  appLayout: function (v) {
    appLayout = v;
  }
}, 2);
var blazePortals;
module.link("../../lib/portals/blazePortals", {
  blazePortals: function (v) {
    blazePortals = v;
  }
}, 3);
var PageLoading;
module.link("./PageLoading", {
  "default": function (v) {
    PageLoading = v;
  }
}, 4);
var useTooltipHandling;
module.link("./useTooltipHandling", {
  useTooltipHandling: function (v) {
    useTooltipHandling = v;
  }
}, 5);

var AppLayout = function () {
  useTooltipHandling();
  var layout = useSubscription(appLayout);
  var portals = useSubscription(blazePortals);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Suspense, {
    fallback: /*#__PURE__*/React.createElement(PageLoading, null)
  }, layout), portals.map(function (_ref) {
    var key = _ref.key,
        node = _ref.node;
    return /*#__PURE__*/React.createElement(Fragment, {
      key: key,
      children: node
    });
  }));
};

module.exportDefault(AppLayout);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/10e286ec7cdc624c7a8f68fb314ec003b8ee4a26.map
