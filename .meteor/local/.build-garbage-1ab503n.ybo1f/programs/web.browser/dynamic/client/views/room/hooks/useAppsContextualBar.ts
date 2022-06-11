function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/hooks/useAppsContextualBar.ts                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useAppsContextualBar: () => useAppsContextualBar
});
let useEffect, useState;
module.link("react", {
  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  }

}, 0);
let Apps;
module.link("../../../../app/apps/client/orchestrator", {
  Apps(v) {
    Apps = v;
  }

}, 1);
let getUserInteractionPayloadByViewId;
module.link("../../../../app/ui-message/client/ActionManager", {
  getUserInteractionPayloadByViewId(v) {
    getUserInteractionPayloadByViewId = v;
  }

}, 2);
let useCurrentRoute;
module.link("../../../contexts/RouterContext", {
  useCurrentRoute(v) {
    useCurrentRoute = v;
  }

}, 3);
let useRoom;
module.link("../contexts/RoomContext", {
  useRoom(v) {
    useRoom = v;
  }

}, 4);

const useAppsContextualBar = () => {
  const [, params] = useCurrentRoute();
  const [payload, setPayload] = useState();
  const [appInfo, setAppInfo] = useState();
  const {
    _id: roomId
  } = useRoom();
  const viewId = params === null || params === void 0 ? void 0 : params.context;
  useEffect(() => {
    async function getAppData(appId) {
      const app = await Apps.getApp(appId);
      setAppInfo(app);
    }

    if (viewId) {
      setPayload(getUserInteractionPayloadByViewId(viewId));
    }

    if (payload !== null && payload !== void 0 && payload.appId) {
      getAppData(payload.appId);
    }

    return () => {
      setPayload(undefined);
      setAppInfo(undefined);
    };
  }, [viewId, payload === null || payload === void 0 ? void 0 : payload.appId]);

  if (viewId && payload && appInfo) {
    return {
      viewId,
      roomId,
      payload,
      appInfo
    };
  }

  return undefined;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/hooks/5e25d7076b8badda22b9c519bbfd486357056e17.map
