function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/blocks/ConnectedModalBlock.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["type"];

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
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
var React, useEffect, useReducer, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useReducer: function (v) {
    useReducer = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 3);
var ActionManager;
module.link("../../../app/ui-message/client/ActionManager", {
  "*": function (v) {
    ActionManager = v;
  }
}, 4);
var ModalBlock;
module.link("./ModalBlock", {
  "default": function (v) {
    ModalBlock = v;
  }
}, 5);
module.link("./textParsers");

var useActionManagerState = function (initialState) {
  var _useState = useState(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var viewId = state.viewId;
  useEffect(function () {
    var handleUpdate = function (_ref) {
      var type = _ref.type,
          data = _objectWithoutProperties(_ref, _excluded);

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

    ActionManager.on(viewId, handleUpdate);
    return function () {
      ActionManager.off(viewId, handleUpdate);
    };
  }, [viewId]);
  return state;
};

var useValues = function (view) {
  var reducer = useMutableCallback(function (values, _ref2) {
    var _objectSpread2;

    var actionId = _ref2.actionId,
        payload = _ref2.payload;
    return _objectSpread(_objectSpread({}, values), {}, (_objectSpread2 = {}, _objectSpread2[actionId] = payload, _objectSpread2));
  });
  var initializer = useMutableCallback(function () {
    var filterInputFields = function (_ref3) {
      var element = _ref3.element,
          _ref3$elements = _ref3.elements,
          elements = _ref3$elements === void 0 ? [] : _ref3$elements;

      if (element && element.initialValue) {
        return true;
      }

      if (elements.length && elements.map(function (element) {
        return {
          element: element
        };
      }).filter(filterInputFields).length) {
        return true;
      }
    };

    var mapElementToState = function (_ref4) {
      var element = _ref4.element,
          blockId = _ref4.blockId,
          _ref4$elements = _ref4.elements,
          elements = _ref4$elements === void 0 ? [] : _ref4$elements;

      if (elements.length) {
        return elements.map(function (element) {
          return {
            element: element,
            blockId: blockId
          };
        }).filter(filterInputFields).map(mapElementToState);
      }

      return [element.actionId, {
        value: element.initialValue,
        blockId: blockId
      }];
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

function ConnectedModalBlock(props) {
  var state = useActionManagerState(props);
  var appId = state.appId,
      viewId = state.viewId,
      _mid = state.mid,
      errors = state.errors,
      view = state.view;

  var _useValues = useValues(view),
      _useValues2 = _slicedToArray(_useValues, 2),
      values = _useValues2[0],
      updateValues = _useValues2[1];

  var groupStateByBlockId = function (obj) {
    return Object.entries(obj).reduce(function (obj, _ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
          key = _ref6[0],
          _ref6$ = _ref6[1],
          blockId = _ref6$.blockId,
          value = _ref6$.value;

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
    action: function (_ref7) {
      var actionId = _ref7.actionId,
          appId = _ref7.appId,
          value = _ref7.value,
          blockId = _ref7.blockId,
          _ref7$mid = _ref7.mid,
          mid = _ref7$mid === void 0 ? _mid : _ref7$mid;
      return ActionManager.triggerBlockAction({
        container: {
          type: UIKitIncomingInteractionContainerType.VIEW,
          id: viewId
        },
        actionId: actionId,
        appId: appId,
        value: value,
        blockId: blockId,
        mid: mid
      });
    },
    state: function (_ref8) {
      var actionId = _ref8.actionId,
          value = _ref8.value,
          _ref8$blockId = _ref8.blockId,
          blockId = _ref8$blockId === void 0 ? 'default' : _ref8$blockId;
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
    ActionManager.triggerSubmitView({
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
    return ActionManager.triggerCancel({
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
    return ActionManager.triggerCancel({
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
  }, /*#__PURE__*/React.createElement(ModalBlock, {
    view: view,
    errors: errors,
    appId: appId,
    onSubmit: handleSubmit,
    onCancel: handleCancel,
    onClose: handleClose
  }));
}

module.exportDefault(ConnectedModalBlock);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/blocks/52b79928a2cdd44c38bd37a4ab38b2255e6d0f59.map
