function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/UIKit/hooks/useUIKitHandleAction.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
module.export({
  useUIKitHandleAction: function () {
    return useUIKitHandleAction;
  }
});
var UIKitIncomingInteractionContainerType;
module.link("@rocket.chat/apps-engine/definition/uikit/UIKitIncomingInteractionContainer", {
  UIKitIncomingInteractionContainerType: function (v) {
    UIKitIncomingInteractionContainerType = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var ActionManager;
module.link("../../../app/ui-message/client/ActionManager", {
  "*": function (v) {
    ActionManager = v;
  }
}, 2);

var useUIKitHandleAction = function (state) {
  return useMutableCallback(function () {
    function _callee(_ref) {
      var blockId, value, appId, actionId;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                blockId = _ref.blockId, value = _ref.value, appId = _ref.appId, actionId = _ref.actionId;

                if (appId) {
                  _context.next = 3;
                  break;
                }

                throw new Error('useUIKitHandleAction - invalid appId');

              case 3:
                return _context.abrupt("return", ActionManager.triggerBlockAction({
                  container: {
                    type: UIKitIncomingInteractionContainerType.VIEW,
                    id: state.viewId || state.appId
                  },
                  actionId: actionId,
                  appId: appId,
                  value: value,
                  blockId: blockId
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }());
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/UIKit/hooks/5e78379a9666b18148f4da5ceb8f14d24ca46bf6.map
