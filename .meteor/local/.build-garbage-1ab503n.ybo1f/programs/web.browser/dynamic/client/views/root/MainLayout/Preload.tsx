function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/MainLayout/Preload.tsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 0);
let CachedChatSubscription;
module.link("../../../../app/models/client", {
  CachedChatSubscription(v) {
    CachedChatSubscription = v;
  }

}, 1);
let settings;
module.link("../../../../app/settings/client", {
  settings(v) {
    settings = v;
  }

}, 2);
let CachedCollectionManager;
module.link("../../../../app/ui-cached-collection", {
  CachedCollectionManager(v) {
    CachedCollectionManager = v;
  }

}, 3);
let mainReady;
module.link("../../../../app/ui-utils/client", {
  mainReady(v) {
    mainReady = v;
  }

}, 4);
let useUserId;
module.link("../../../contexts/UserContext", {
  useUserId(v) {
    useUserId = v;
  }

}, 5);
let useReactiveVar;
module.link("../../../hooks/useReactiveVar", {
  useReactiveVar(v) {
    useReactiveVar = v;
  }

}, 6);
let isSyncReady;
module.link("../../../lib/userData", {
  isSyncReady(v) {
    isSyncReady = v;
  }

}, 7);
let PageLoading;
module.link("../PageLoading", {
  default(v) {
    PageLoading = v;
  }

}, 8);

const Preload = _ref => {
  let {
    children
  } = _ref;
  const uid = useUserId();
  const subscriptionsReady = useReactiveVar(CachedChatSubscription.ready);
  const settingsReady = useReactiveVar(settings.cachedCollection.ready);
  const userDataReady = useReactiveVar(isSyncReady);
  const ready = !uid || userDataReady && subscriptionsReady && settingsReady;
  useEffect(() => {
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
//# sourceMappingURL=/dynamic/client/views/root/MainLayout/cf325dee4fa6d0c804bdb8c33a9fe5a83364c36f.map
