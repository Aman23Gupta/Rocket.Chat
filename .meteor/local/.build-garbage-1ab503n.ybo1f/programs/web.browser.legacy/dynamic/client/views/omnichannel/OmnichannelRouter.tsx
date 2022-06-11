function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/OmnichannelRouter.tsx                                                                      //
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
var SideNav;
module.link("../../../app/ui-utils/client", {
  SideNav: function (v) {
    SideNav = v;
  }
}, 1);
var PageSkeleton;
module.link("../../components/PageSkeleton", {
  "default": function (v) {
    PageSkeleton = v;
  }
}, 2);
var useCurrentRoute, useRoute;
module.link("../../contexts/RouterContext", {
  useCurrentRoute: function (v) {
    useCurrentRoute = v;
  },
  useRoute: function (v) {
    useRoute = v;
  }
}, 3);

var OmnichannelRouter = function (_ref) {
  var renderRoute = _ref.renderRoute;

  var _useCurrentRoute = useCurrentRoute(),
      _useCurrentRoute2 = _slicedToArray(_useCurrentRoute, 1),
      routeName = _useCurrentRoute2[0];

  var defaultRoute = useRoute('omnichannel-current-chats');
  useEffect(function () {
    if (routeName === 'omnichannel-index') {
      defaultRoute.push();
    }
  }, [defaultRoute, routeName]);
  useEffect(function () {
    SideNav.setFlex('omnichannelFlex');
    SideNav.openFlex(function () {
      return undefined;
    });
  }, []);
  return renderRoute ? /*#__PURE__*/React.createElement(Suspense, {
    fallback: /*#__PURE__*/React.createElement(PageSkeleton, null)
  }, renderRoute()) : /*#__PURE__*/React.createElement(PageSkeleton, null);
};

module.exportDefault(OmnichannelRouter);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/68c55321e2816c6c28074c9fd6895c9560414ec8.map
