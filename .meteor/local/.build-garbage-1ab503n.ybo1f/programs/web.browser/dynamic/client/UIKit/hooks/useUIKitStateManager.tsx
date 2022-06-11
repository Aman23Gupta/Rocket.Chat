function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/UIKit/hooks/useUIKitStateManager.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["type"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 1);

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 2);
module.export({
  useUIKitStateManager: () => useUIKitStateManager
});
let useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useSafely(v) {
    useSafely = v;
  }

}, 0);
let useEffect, useState;
module.link("react", {
  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let ActionManager;
module.link("../../../app/ui-message/client/ActionManager", {
  "*"(v) {
    ActionManager = v;
  }

}, 2);
let isErrorType;
module.link("../../../definition/UIKit", {
  isErrorType(v) {
    isErrorType = v;
  }

}, 3);

const useUIKitStateManager = initialState => {
  const [state, setState] = useSafely(useState(initialState));
  const {
    viewId
  } = state;
  useEffect(() => {
    const handleUpdate = _ref => {
      let data = _extends({}, _ref);

      if (isErrorType(data)) {
        const {
          errors
        } = data;
        setState(state => _objectSpread(_objectSpread({}, state), {}, {
          errors
        }));
        return;
      } // eslint-disable-next-line @typescript-eslint/no-unused-vars


      const {
        type
      } = data,
            rest = _objectWithoutProperties(data, _excluded);

      setState(rest);
    };

    ActionManager.on(viewId, handleUpdate);
    return () => {
      ActionManager.off(viewId, handleUpdate);
    };
  }, [setState, viewId]);
  return state;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/UIKit/hooks/dd7745b0cc624ed5b99d5337259849f25bc468bc.map
