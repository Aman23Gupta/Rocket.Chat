function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/UIKit/hooks/useUIKitHandleAction.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useUIKitHandleAction: () => useUIKitHandleAction
});
let UIKitIncomingInteractionContainerType;
module.link("@rocket.chat/apps-engine/definition/uikit/UIKitIncomingInteractionContainer", {
  UIKitIncomingInteractionContainerType(v) {
    UIKitIncomingInteractionContainerType = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let ActionManager;
module.link("../../../app/ui-message/client/ActionManager", {
  "*"(v) {
    ActionManager = v;
  }

}, 2);

const useUIKitHandleAction = state => useMutableCallback(async _ref => {
  let {
    blockId,
    value,
    appId,
    actionId
  } = _ref;

  if (!appId) {
    throw new Error('useUIKitHandleAction - invalid appId');
  }

  return ActionManager.triggerBlockAction({
    container: {
      type: UIKitIncomingInteractionContainerType.VIEW,
      id: state.viewId || state.appId
    },
    actionId,
    appId,
    value,
    blockId
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/UIKit/hooks/198d310fb25e86cad5f562cb636d2c57f8eb4043.map
