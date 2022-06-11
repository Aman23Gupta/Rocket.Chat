function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/hooks/useAppsContextualBar.ts                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
module.export({
  useAppsContextualBar: function () {
    return useAppsContextualBar;
  }
});
var useEffect, useState;
module.link("react", {
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 0);
var Apps;
module.link("../../../../app/apps/client/orchestrator", {
  Apps: function (v) {
    Apps = v;
  }
}, 1);
var getUserInteractionPayloadByViewId;
module.link("../../../../app/ui-message/client/ActionManager", {
  getUserInteractionPayloadByViewId: function (v) {
    getUserInteractionPayloadByViewId = v;
  }
}, 2);
var useCurrentRoute;
module.link("../../../contexts/RouterContext", {
  useCurrentRoute: function (v) {
    useCurrentRoute = v;
  }
}, 3);
var useRoom;
module.link("../contexts/RoomContext", {
  useRoom: function (v) {
    useRoom = v;
  }
}, 4);

var useAppsContextualBar = function () {
  var _useCurrentRoute = useCurrentRoute(),
      _useCurrentRoute2 = _slicedToArray(_useCurrentRoute, 2),
      params = _useCurrentRoute2[1];

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      payload = _useState2[0],
      setPayload = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      appInfo = _useState4[0],
      setAppInfo = _useState4[1];

  var _useRoom = useRoom(),
      roomId = _useRoom._id;

  var viewId = params === null || params === void 0 ? void 0 : params.context;
  useEffect(function () {
    function getAppData(appId) {
      var app;
      return _regeneratorRuntime.async(function () {
        function getAppData$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _regeneratorRuntime.awrap(Apps.getApp(appId));

              case 2:
                app = _context.sent;
                setAppInfo(app);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }

        return getAppData$;
      }(), null, null, null, Promise);
    }

    if (viewId) {
      setPayload(getUserInteractionPayloadByViewId(viewId));
    }

    if (payload !== null && payload !== void 0 && payload.appId) {
      getAppData(payload.appId);
    }

    return function () {
      setPayload(undefined);
      setAppInfo(undefined);
    };
  }, [viewId, payload === null || payload === void 0 ? void 0 : payload.appId]);

  if (viewId && payload && appInfo) {
    return {
      viewId: viewId,
      roomId: roomId,
      payload: payload,
      appInfo: appInfo
    };
  }

  return undefined;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/hooks/991b083ea0373ba9d28c9a865815ab864ca2b8e3.map
