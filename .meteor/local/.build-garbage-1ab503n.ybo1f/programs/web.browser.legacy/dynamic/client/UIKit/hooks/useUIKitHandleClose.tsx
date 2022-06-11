function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/UIKit/hooks/useUIKitHandleClose.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);
module.export({
  useUIKitHandleClose: function () {
    return useUIKitHandleClose;
  }
});
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var ActionManager;
module.link("../../../app/ui-message/client/ActionManager", {
  "*": function (v) {
    ActionManager = v;
  }
}, 1);
var useToastMessageDispatch;
module.link("../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 2);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
var emptyFn = function (_error, _result) {
  return undefined;
};

var useUIKitHandleClose = function (state) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : emptyFn;
  var dispatchToastMessage = useToastMessageDispatch();
  return useMutableCallback(function () {
    return ActionManager.triggerCancel({
      appId: state.appId,
      viewId: state.viewId,
      view: _objectSpread(_objectSpread({}, state), {}, {
        id: state.viewId // state: groupStateByBlockId(values),

      }),
      isCleared: true
    }).then(function (result) {
      return fn(undefined, result);
    }).catch(function (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
      fn(error, undefined);
      return Promise.reject(error);
    });
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/UIKit/hooks/49f25d0670c5a7487e4875473264d476edd37782.map
