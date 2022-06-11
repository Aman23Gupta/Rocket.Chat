function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/AdministrationRouter.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var React, Suspense, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  Suspense: function (v) {
    Suspense = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 0);
var PageSkeleton;
module.link("../../components/PageSkeleton", {
  "default": function (v) {
    PageSkeleton = v;
  }
}, 1);
var useCurrentRoute, useRoute;
module.link("../../contexts/RouterContext", {
  useCurrentRoute: function (v) {
    useCurrentRoute = v;
  },
  useRoute: function (v) {
    useRoute = v;
  }
}, 2);
var SettingsProvider;
module.link("../../providers/SettingsProvider", {
  "default": function (v) {
    SettingsProvider = v;
  }
}, 3);
var AdministrationLayout;
module.link("./AdministrationLayout", {
  "default": function (v) {
    AdministrationLayout = v;
  }
}, 4);

function AdministrationRouter(_ref) {
  var renderRoute = _ref.renderRoute;

  var _useCurrentRoute = useCurrentRoute(),
      _useCurrentRoute2 = _slicedToArray(_useCurrentRoute, 1),
      routeName = _useCurrentRoute2[0];

  var defaultRoute = useRoute('admin-info');
  useEffect(function () {
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
//# sourceMappingURL=/dynamic/client/views/admin/f93f0f6d048116596a5cef45fd38ebc260df0cca.map
