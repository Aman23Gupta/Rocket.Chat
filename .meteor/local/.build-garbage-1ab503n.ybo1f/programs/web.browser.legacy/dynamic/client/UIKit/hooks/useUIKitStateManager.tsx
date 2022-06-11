function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/UIKit/hooks/useUIKitStateManager.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["type"];

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 2);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 3);
module.export({
  useUIKitStateManager: function () {
    return useUIKitStateManager;
  }
});
var useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useSafely: function (v) {
    useSafely = v;
  }
}, 0);
var useEffect, useState;
module.link("react", {
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var ActionManager;
module.link("../../../app/ui-message/client/ActionManager", {
  "*": function (v) {
    ActionManager = v;
  }
}, 2);
var isErrorType;
module.link("../../../definition/UIKit", {
  isErrorType: function (v) {
    isErrorType = v;
  }
}, 3);

var useUIKitStateManager = function (initialState) {
  var _useSafely = useSafely(useState(initialState)),
      _useSafely2 = _slicedToArray(_useSafely, 2),
      state = _useSafely2[0],
      setState = _useSafely2[1];

  var viewId = state.viewId;
  useEffect(function () {
    var handleUpdate = function (_ref) {
      var data = _extends({}, _ref);

      if (isErrorType(data)) {
        var errors = data.errors;
        setState(function (state) {
          return _objectSpread(_objectSpread({}, state), {}, {
            errors: errors
          });
        });
        return;
      } // eslint-disable-next-line @typescript-eslint/no-unused-vars


      var type = data.type,
          rest = _objectWithoutProperties(data, _excluded);

      setState(rest);
    };

    ActionManager.on(viewId, handleUpdate);
    return function () {
      ActionManager.off(viewId, handleUpdate);
    };
  }, [setState, viewId]);
  return state;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/UIKit/hooks/8d16773f30638112e9f7313c688a9a9e64fce974.map
