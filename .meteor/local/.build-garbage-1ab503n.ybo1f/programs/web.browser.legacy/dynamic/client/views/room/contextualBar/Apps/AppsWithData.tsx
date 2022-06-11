function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Apps/AppsWithData.tsx                                                               //
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

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 2);
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
var kitContext;
module.link("@rocket.chat/fuselage-ui-kit", {
  kitContext: function (v) {
    kitContext = v;
  }
}, 2);
var React, memo, useState, useEffect, useReducer;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useState: function (v) {
    useState = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useReducer: function (v) {
    useReducer = v;
  }
}, 3);
var triggerBlockAction, triggerCancel, triggerSubmitView, on, off;
module.link("../../../../../app/ui-message/client/ActionManager", {
  triggerBlockAction: function (v) {
    triggerBlockAction = v;
  },
  triggerCancel: function (v) {
    triggerCancel = v;
  },
  triggerSubmitView: function (v) {
    triggerSubmitView = v;
  },
  on: function (v) {
    on = v;
  },
  off: function (v) {
    off = v;
  }
}, 4);
var useTabBarClose;
module.link("../../providers/ToolboxProvider", {
  useTabBarClose: function (v) {
    useTabBarClose = v;
  }
}, 5);
var Apps;
module.link("./Apps", {
  "default": function (v) {
    Apps = v;
  }
}, 6);

var isInputBlock = function (block) {
  var _block$element;

  return block === null || block === void 0 ? void 0 : (_block$element = block.element) === null || _block$element === void 0 ? void 0 : _block$element.initialValue;
};

var useValues = function (view) {
  var reducer = useMutableCallback(function (values, _ref) {
    var _objectSpread2;

    var actionId = _ref.actionId,
        payload = _ref.payload;
    return _objectSpread(_objectSpread({}, values), {}, (_objectSpread2 = {}, _objectSpread2[actionId] = payload, _objectSpread2));
  });
  var initializer = useMutableCallback(function () {
    var filterInputFields = function (block) {
      var _block$elements;

      if (isInputBlock(block)) {
        return true;
      }

      if ((_block$elements = block.elements) !== null && _block$elements !== void 0 && _block$elements.filter(function (element) {
        return filterInputFields({
          element: element
        });
      }).length) {
        return true;
      }

      return false;
    };

    var mapElementToState = function (block) {
      if (isInputBlock(block)) {
        var element = block.element,
            _blockId = block.blockId;
        return [element.actionId, {
          value: element.initialValue,
          blockId: _blockId
        }];
      }

      var elements = block.elements,
          blockId = block.blockId;
      return elements.filter(function (element) {
        return filterInputFields({
          element: element
        });
      }).map(function (element) {
        return mapElementToState({
          element: element,
          blockId: blockId
        });
      });
    };

    return view.blocks.filter(filterInputFields).map(mapElementToState).reduce(function (obj, el) {
      var _objectSpread3;

      if (Array.isArray(el[0])) {
        return _objectSpread(_objectSpread({}, obj), Object.fromEntries(el));
      }

      var _el = _slicedToArray(el, 2),
          key = _el[0],
          value = _el[1];

      return _objectSpread(_objectSpread({}, obj), {}, (_objectSpread3 = {}, _objectSpread3[key] = value, _objectSpread3));
    }, {});
  });
  return useReducer(reducer, null, initializer);
};

var AppsWithData = function (_ref2) {
  var viewId = _ref2.viewId,
      roomId = _ref2.roomId,
      payload = _ref2.payload,
      appInfo = _ref2.appInfo;
  var closeTabBar = useTabBarClose();
  var appId = appInfo.id,
      appName = appInfo.name;

  var _useState = useState(payload),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var view = state.view;

  var _useValues = useValues(view),
      _useValues2 = _slicedToArray(_useValues, 2),
      values = _useValues2[0],
      updateValues = _useValues2[1];

  useEffect(function () {
    var handleUpdate = function (_ref3) {
      var type = _ref3.type,
          data = _objectWithoutProperties(_ref3, _excluded);

      if (type === 'errors') {
        var errors = data.errors;
        setState(function (state) {
          return _objectSpread(_objectSpread({}, state), {}, {
            errors: errors
          });
        });
        return;
      }

      setState(data);
    };

    on(viewId, handleUpdate);
    return function () {
      off(viewId, handleUpdate);
    };
  }, [state, viewId]);

  var groupStateByBlockId = function (obj) {
    return Object.entries(obj).reduce(function (obj, _ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          key = _ref5[0],
          _ref5$ = _ref5[1],
          blockId = _ref5$.blockId,
          value = _ref5$.value;

      obj[blockId] = obj[blockId] || {};
      obj[blockId][key] = value;
      return obj;
    }, {});
  };

  var prevent = function (e) {
    if (e) {
      (e.nativeEvent || e).stopImmediatePropagation();
      e.stopPropagation();
      e.preventDefault();
    }
  };

  var context = _objectSpread(_objectSpread({
    action: function (_ref6) {
      var actionId = _ref6.actionId,
          appId = _ref6.appId,
          value = _ref6.value,
          blockId = _ref6.blockId;
      return triggerBlockAction({
        container: {
          type: UIKitIncomingInteractionContainerType.VIEW,
          id: viewId
        },
        actionId: actionId,
        appId: appId,
        rid: roomId,
        value: value,
        blockId: blockId
      });
    },
    state: function (_ref7) {
      var actionId = _ref7.actionId,
          value = _ref7.value,
          _ref7$blockId = _ref7.blockId,
          blockId = _ref7$blockId === void 0 ? 'default' : _ref7$blockId;
      updateValues({
        actionId: actionId,
        payload: {
          blockId: blockId,
          value: value
        }
      });
    }
  }, state), {}, {
    values: values
  });

  var handleSubmit = useMutableCallback(function (e) {
    prevent(e);
    closeTabBar(e);
    triggerSubmitView({
      viewId: viewId,
      appId: appId,
      payload: {
        view: _objectSpread(_objectSpread({}, view), {}, {
          id: viewId,
          state: groupStateByBlockId(values)
        })
      }
    });
  });
  var handleCancel = useMutableCallback(function (e) {
    prevent(e);
    closeTabBar(e);
    return triggerCancel({
      appId: appId,
      viewId: viewId,
      view: _objectSpread(_objectSpread({}, view), {}, {
        id: viewId,
        state: groupStateByBlockId(values)
      })
    });
  });
  var handleClose = useMutableCallback(function (e) {
    prevent(e);
    closeTabBar(e);
    return triggerCancel({
      appId: appId,
      viewId: viewId,
      view: _objectSpread(_objectSpread({}, view), {}, {
        id: viewId,
        state: groupStateByBlockId(values)
      }),
      isCleared: true
    });
  });
  return /*#__PURE__*/React.createElement(kitContext.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement(Apps, {
    onClose: handleClose,
    onCancel: handleCancel,
    onSubmit: handleSubmit,
    view: view,
    appInfo: {
      name: appName,
      id: appId
    }
  }));
};

module.exportDefault( /*#__PURE__*/memo(AppsWithData));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Apps/79037c3d07ad5fff9a26ebe49632bb48faa96731.map
