function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/ToolBox/ToolBox.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["label"],
      _excluded2 = ["value"];

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 1);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 2);
let Menu, Option;
module.link("@rocket.chat/fuselage", {
  Menu(v) {
    Menu = v;
  },

  Option(v) {
    Option = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, memo, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 2);
let Header;
module.link("../../../../components/Header", {
  default(v) {
    Header = v;
  }

}, 3);
let useLayout;
module.link("../../../../contexts/LayoutContext", {
  useLayout(v) {
    useLayout = v;
  }

}, 4);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let useToolboxContext;
module.link("../../lib/Toolbox/ToolboxContext", {
  useToolboxContext(v) {
    useToolboxContext = v;
  }

}, 6);
let useTab, useTabBarOpen;
module.link("../../providers/ToolboxProvider", {
  useTab(v) {
    useTab = v;
  },

  useTabBarOpen(v) {
    useTabBarOpen = v;
  }

}, 7);

const renderMenuOption = _ref => {
  let {
    label: {
      title,
      icon
    }
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Option, _extends({
    label: title,
    icon: icon
  }, props));
};

const ToolBox = _ref2 => {
  let {
    className
  } = _ref2;
  const tab = useTab();
  const openTabBar = useTabBarOpen();
  const {
    isMobile
  } = useLayout();
  const t = useTranslation();
  const hiddenActionRenderers = useRef({});
  const {
    actions: mapActions
  } = useToolboxContext();
  const actions = Array.from(mapActions.values()).sort((a, b) => (a.order || 0) - (b.order || 0));
  const visibleActions = isMobile ? [] : actions.slice(0, 6);
  const hiddenActions = Object.fromEntries((isMobile ? actions : actions.slice(6)).map(item => {
    hiddenActionRenderers.current = _objectSpread(_objectSpread({}, hiddenActionRenderers.current), {}, {
      [item.id]: item.renderOption || renderMenuOption
    });
    return [item.id, _objectSpread({
      label: {
        title: t(item.title),
        icon: item.icon
      },
      action: () => {
        openTabBar(item.id);
      }
    }, item)];
  }));
  const actionDefault = useMutableCallback(e => {
    const index = e.currentTarget.getAttribute('data-toolbox');
    openTabBar(actions[index].id);
  }); // const open = useMutableCallback((index) => {
  // 	openTabBar(actions[index].id);
  // });
  // useEffect(() => {
  // 	if (!visibleActions.length) {
  // 		return;
  // 	}
  // 	const unsubscribe = tinykeys(window, Object.fromEntries(new Array(visibleActions.length).fill(true).map((_, index) => [`$mod+${ index + 1 }`, (): void => { open(index); }])));
  // 	return (): void => {
  // 		unsubscribe();
  // 	};
  // }, [visibleActions.length, open]);

  return /*#__PURE__*/React.createElement(React.Fragment, null, visibleActions.map((_ref3, index) => {
    let {
      renderAction,
      id,
      icon,
      title,
      action = actionDefault
    } = _ref3;
    const props = {
      id,
      icon,
      'title': t(title),
      className,
      index,
      'info': id === (tab === null || tab === void 0 ? void 0 : tab.id),
      'data-toolbox': index,
      action,
      'key': id
    };

    if (renderAction) {
      return renderAction(props);
    }

    return /*#__PURE__*/React.createElement(Header.ToolBoxAction, props);
  }), actions.length > 6 && /*#__PURE__*/React.createElement(Menu, {
    tiny: !isMobile,
    title: t('Options'),
    maxHeight: "initial",
    className: className,
    "aria-keyshortcuts": "alt",
    tabIndex: -1,
    options: hiddenActions,
    renderItem: _ref4 => {
      let {
        value
      } = _ref4,
          props = _objectWithoutProperties(_ref4, _excluded2);

      return value && hiddenActionRenderers.current[value](props);
    }
  }));
};

module.exportDefault( /*#__PURE__*/memo(ToolBox));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/ToolBox/a54c4786ff2445b8b182c60795b8c403b51ad9b5.map
