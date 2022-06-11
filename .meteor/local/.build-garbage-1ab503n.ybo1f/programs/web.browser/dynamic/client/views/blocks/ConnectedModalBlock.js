function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/blocks/ConnectedModalBlock.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["type"];

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
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
let React, useEffect, useReducer, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useReducer(v) {
    useReducer = v;
  },

  useState(v) {
    useState = v;
  }

}, 3);
let ActionManager;
module.link("../../../app/ui-message/client/ActionManager", {
  "*"(v) {
    ActionManager = v;
  }

}, 4);
let ModalBlock;
module.link("./ModalBlock", {
  default(v) {
    ModalBlock = v;
  }

}, 5);
module.link("./textParsers");

const useActionManagerState = initialState => {
  const [state, setState] = useState(initialState);
  const {
    viewId
  } = state;
  useEffect(() => {
    const handleUpdate = _ref => {
      let {
        type
      } = _ref,
          data = _objectWithoutProperties(_ref, _excluded);

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

    ActionManager.on(viewId, handleUpdate);
    return () => {
      ActionManager.off(viewId, handleUpdate);
    };
  }, [viewId]);
  return state;
};

const useValues = view => {
  const reducer = useMutableCallback((values, _ref2) => {
    let {
      actionId,
      payload
    } = _ref2;
    return _objectSpread(_objectSpread({}, values), {}, {
      [actionId]: payload
    });
  });
  const initializer = useMutableCallback(() => {
    const filterInputFields = _ref3 => {
      let {
        element,
        elements = []
      } = _ref3;

      if (element && element.initialValue) {
        return true;
      }

      if (elements.length && elements.map(element => ({
        element
      })).filter(filterInputFields).length) {
        return true;
      }
    };

    const mapElementToState = _ref4 => {
      let {
        element,
        blockId,
        elements = []
      } = _ref4;

      if (elements.length) {
        return elements.map(element => ({
          element,
          blockId
        })).filter(filterInputFields).map(mapElementToState);
      }

      return [element.actionId, {
        value: element.initialValue,
        blockId
      }];
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

function ConnectedModalBlock(props) {
  const state = useActionManagerState(props);
  const {
    appId,
    viewId,
    mid: _mid,
    errors,
    view
  } = state;
  const [values, updateValues] = useValues(view);

  const groupStateByBlockId = obj => Object.entries(obj).reduce((obj, _ref5) => {
    let [key, {
      blockId,
      value
    }] = _ref5;
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
    action: _ref6 => {
      let {
        actionId,
        appId,
        value,
        blockId,
        mid = _mid
      } = _ref6;
      return ActionManager.triggerBlockAction({
        container: {
          type: UIKitIncomingInteractionContainerType.VIEW,
          id: viewId
        },
        actionId,
        appId,
        value,
        blockId,
        mid
      });
    },
    state: _ref7 => {
      let {
        actionId,
        value,

        /* ,appId, */
        blockId = 'default'
      } = _ref7;
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
    ActionManager.triggerSubmitView({
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
    return ActionManager.triggerCancel({
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
    return ActionManager.triggerCancel({
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
//# sourceMappingURL=/dynamic/client/views/blocks/78c66fe2702beb40b6628ad522b8f904cf3da7be.map
