function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/UIKit/hooks/useUIKitHandleClose.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
module.export({
  useUIKitHandleClose: () => useUIKitHandleClose
});
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let ActionManager;
module.link("../../../app/ui-message/client/ActionManager", {
  "*"(v) {
    ActionManager = v;
  }

}, 1);
let useToastMessageDispatch;
module.link("../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 2);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emptyFn = (_error, _result) => undefined;

const useUIKitHandleClose = function (state) {
  let fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : emptyFn;
  const dispatchToastMessage = useToastMessageDispatch();
  return useMutableCallback(() => ActionManager.triggerCancel({
    appId: state.appId,
    viewId: state.viewId,
    view: _objectSpread(_objectSpread({}, state), {}, {
      id: state.viewId // state: groupStateByBlockId(values),

    }),
    isCleared: true
  }).then(result => fn(undefined, result)).catch(error => {
    dispatchToastMessage({
      type: 'error',
      message: error
    });
    fn(error, undefined);
    return Promise.reject(error);
  }));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/UIKit/hooks/ae827a555ce3cdd4035ecf9e294d93bfe7536280.map
