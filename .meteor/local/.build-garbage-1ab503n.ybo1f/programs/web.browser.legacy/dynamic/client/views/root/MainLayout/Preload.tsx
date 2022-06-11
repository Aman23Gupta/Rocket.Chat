function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/MainLayout/Preload.tsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 0);
var CachedChatSubscription;
module.link("../../../../app/models/client", {
  CachedChatSubscription: function (v) {
    CachedChatSubscription = v;
  }
}, 1);
var settings;
module.link("../../../../app/settings/client", {
  settings: function (v) {
    settings = v;
  }
}, 2);
var CachedCollectionManager;
module.link("../../../../app/ui-cached-collection", {
  CachedCollectionManager: function (v) {
    CachedCollectionManager = v;
  }
}, 3);
var mainReady;
module.link("../../../../app/ui-utils/client", {
  mainReady: function (v) {
    mainReady = v;
  }
}, 4);
var useUserId;
module.link("../../../contexts/UserContext", {
  useUserId: function (v) {
    useUserId = v;
  }
}, 5);
var useReactiveVar;
module.link("../../../hooks/useReactiveVar", {
  useReactiveVar: function (v) {
    useReactiveVar = v;
  }
}, 6);
var isSyncReady;
module.link("../../../lib/userData", {
  isSyncReady: function (v) {
    isSyncReady = v;
  }
}, 7);
var PageLoading;
module.link("../PageLoading", {
  "default": function (v) {
    PageLoading = v;
  }
}, 8);

var Preload = function (_ref) {
  var children = _ref.children;
  var uid = useUserId();
  var subscriptionsReady = useReactiveVar(CachedChatSubscription.ready);
  var settingsReady = useReactiveVar(settings.cachedCollection.ready);
  var userDataReady = useReactiveVar(isSyncReady);
  var ready = !uid || userDataReady && subscriptionsReady && settingsReady;
  useEffect(function () {
    CachedCollectionManager.syncEnabled = ready;
    mainReady.set(ready);
  }, [ready]);

  if (!ready) {
    return /*#__PURE__*/React.createElement(PageLoading, null);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
};

module.exportDefault(Preload);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/MainLayout/485d37ff26245a60f026ae085f9cb09acc62a651.map
