function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Apps/AppsWithData.tsx                                                               //
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
let kitContext;
module.link("@rocket.chat/fuselage-ui-kit", {
  kitContext(v) {
    kitContext = v;
  }

}, 2);
let React, memo, useState, useEffect, useReducer;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useState(v) {
    useState = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useReducer(v) {
    useReducer = v;
  }

}, 3);
let triggerBlockAction, triggerCancel, triggerSubmitView, on, off;
module.link("../../../../../app/ui-message/client/ActionManager", {
  triggerBlockAction(v) {
    triggerBlockAction = v;
  },

  triggerCancel(v) {
    triggerCancel = v;
  },

  triggerSubmitView(v) {
    triggerSubmitView = v;
  },

  on(v) {
    on = v;
  },

  off(v) {
    off = v;
  }

}, 4);
let useTabBarClose;
module.link("../../providers/ToolboxProvider", {
  useTabBarClose(v) {
    useTabBarClose = v;
  }

}, 5);
let Apps;
module.link("./Apps", {
  default(v) {
    Apps = v;
  }

}, 6);

const isInputBlock = block => {
  var _block$element;

  return block === null || block === void 0 ? void 0 : (_block$element = block.element) === null || _block$element === void 0 ? void 0 : _block$element.initialValue;
};

const useValues = view => {
  const reducer = useMutableCallback((values, _ref) => {
    let {
      actionId,
      payload
    } = _ref;
    return _objectSpread(_objectSpread({}, values), {}, {
      [actionId]: payload
    });
  });
  const initializer = useMutableCallback(() => {
    const filterInputFields = block => {
      var _block$elements;

      if (isInputBlock(block)) {
        return true;
      }

      if ((_block$elements = block.elements) !== null && _block$elements !== void 0 && _block$elements.filter(element => filterInputFields({
        element
      })).length) {
        return true;
      }

      return false;
    };

    const mapElementToState = block => {
      if (isInputBlock(block)) {
        const {
          element,
          blockId
        } = block;
        return [element.actionId, {
          value: element.initialValue,
          blockId
        }];
      }

      const {
        elements,
        blockId
      } = block;
      return elements.filter(element => filterInputFields({
        element
      })).map(element => mapElementToState({
        element,
        blockId
      }));
    };

    return view.blocks.filter(filterInputFields).map(mapElementToState).reduce((obj, el) => {
      if (Array.isArray(el[0])) {
        return _objectSpread(_objectSpread({}, obj), Object.fromEntries(el));
      }

      const [key, value] = el;
      return _objectSpread(_objectSpread({}, obj), {}, {
        [key]: value
      });
    }, {});
  });
  return useReducer(reducer, null, initializer);
};

const AppsWithData = _ref2 => {
  let {
    viewId,
    roomId,
    payload,
    appInfo
  } = _ref2;
  const closeTabBar = useTabBarClose();
  const {
    id: appId,
    name: appName
  } = appInfo;
  const [state, setState] = useState(payload);
  const {
    view
  } = state;
  const [values, updateValues] = useValues(view);
  useEffect(() => {
    const handleUpdate = _ref3 => {
      let {
        type
      } = _ref3,
          data = _objectWithoutProperties(_ref3, _excluded);

      if (type === 'errors') {
        const {
          errors
        } = data;
        setState(state => _objectSpread(_objectSpread({}, state), {}, {
          errors
        }));
        return;
      }

      setState(data);
    };

    on(viewId, handleUpdate);
    return () => {
      off(viewId, handleUpdate);
    };
  }, [state, viewId]);

  const groupStateByBlockId = obj => Object.entries(obj).reduce((obj, _ref4) => {
    let [key, {
      blockId,
      value
    }] = _ref4;
    obj[blockId] = obj[blockId] || {};
    obj[blockId][key] = value;
    return obj;
  }, {});

  const prevent = e => {
    if (e) {
      (e.nativeEvent || e).stopImmediatePropagation();
      e.stopPropagation();
      e.preventDefault();
    }
  };

  const context = _objectSpread(_objectSpread({
    action: _ref5 => {
      let {
        actionId,
        appId,
        value,
        blockId
      } = _ref5;
      return triggerBlockAction({
        container: {
          type: UIKitIncomingInteractionContainerType.VIEW,
          id: viewId
        },
        actionId,
        appId,
        rid: roomId,
        value,
        blockId
      });
    },
    state: _ref6 => {
      let {
        actionId,
        value,
        blockId = 'default'
      } = _ref6;
      updateValues({
        actionId,
        payload: {
          blockId,
          value
        }
      });
    }
  }, state), {}, {
    values
  });

  const handleSubmit = useMutableCallback(e => {
    prevent(e);
    closeTabBar(e);
    triggerSubmitView({
      viewId,
      appId,
      payload: {
        view: _objectSpread(_objectSpread({}, view), {}, {
          id: viewId,
          state: groupStateByBlockId(values)
        })
      }
    });
  });
  const handleCancel = useMutableCallback(e => {
    prevent(e);
    closeTabBar(e);
    return triggerCancel({
      appId,
      viewId,
      view: _objectSpread(_objectSpread({}, view), {}, {
        id: viewId,
        state: groupStateByBlockId(values)
      })
    });
  });
  const handleClose = useMutableCallback(e => {
    prevent(e);
    closeTabBar(e);
    return triggerCancel({
      appId,
      viewId,
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Apps/fa5d167c954e183506910cf149fd85911f94bd89.map
