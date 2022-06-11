function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/ToolBox/ToolBox.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["label"],
    _excluded2 = ["value"];

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var Menu, Option;
module.link("@rocket.chat/fuselage", {
  Menu: function (v) {
    Menu = v;
  },
  Option: function (v) {
    Option = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, memo, useRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 2);
var Header;
module.link("../../../../components/Header", {
  "default": function (v) {
    Header = v;
  }
}, 3);
var useLayout;
module.link("../../../../contexts/LayoutContext", {
  useLayout: function (v) {
    useLayout = v;
  }
}, 4);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var useToolboxContext;
module.link("../../lib/Toolbox/ToolboxContext", {
  useToolboxContext: function (v) {
    useToolboxContext = v;
  }
}, 6);
var useTab, useTabBarOpen;
module.link("../../providers/ToolboxProvider", {
  useTab: function (v) {
    useTab = v;
  },
  useTabBarOpen: function (v) {
    useTabBarOpen = v;
  }
}, 7);

var renderMenuOption = function (_ref) {
  var _ref$label = _ref.label,
      title = _ref$label.title,
      icon = _ref$label.icon,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Option, _extends({
    label: title,
    icon: icon
  }, props));
};

var ToolBox = function (_ref2) {
  var className = _ref2.className;
  var tab = useTab();
  var openTabBar = useTabBarOpen();

  var _useLayout = useLayout(),
      isMobile = _useLayout.isMobile;

  var t = useTranslation();
  var hiddenActionRenderers = useRef({});

  var _useToolboxContext = useToolboxContext(),
      mapActions = _useToolboxContext.actions;

  var actions = Array.from(mapActions.values()).sort(function (a, b) {
    return (a.order || 0) - (b.order || 0);
  });
  var visibleActions = isMobile ? [] : actions.slice(0, 6);
  var hiddenActions = Object.fromEntries((isMobile ? actions : actions.slice(6)).map(function (item) {
    var _objectSpread2;

    hiddenActionRenderers.current = _objectSpread(_objectSpread({}, hiddenActionRenderers.current), {}, (_objectSpread2 = {}, _objectSpread2[item.id] = item.renderOption || renderMenuOption, _objectSpread2));
    return [item.id, _objectSpread({
      label: {
        title: t(item.title),
        icon: item.icon
      },
      action: function () {
        openTabBar(item.id);
      }
    }, item)];
  }));
  var actionDefault = useMutableCallback(function (e) {
    var index = e.currentTarget.getAttribute('data-toolbox');
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

  return /*#__PURE__*/React.createElement(React.Fragment, null, visibleActions.map(function (_ref3, index) {
    var renderAction = _ref3.renderAction,
        id = _ref3.id,
        icon = _ref3.icon,
        title = _ref3.title,
        _ref3$action = _ref3.action,
        action = _ref3$action === void 0 ? actionDefault : _ref3$action;
    var props = {
      id: id,
      icon: icon,
      'title': t(title),
      className: className,
      index: index,
      'info': id === (tab === null || tab === void 0 ? void 0 : tab.id),
      'data-toolbox': index,
      action: action,
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
    renderItem: function (_ref4) {
      var value = _ref4.value,
          props = _objectWithoutProperties(_ref4, _excluded2);

      return value && hiddenActionRenderers.current[value](props);
    }
  }));
};

module.exportDefault( /*#__PURE__*/memo(ToolBox));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/ToolBox/8979a2233a09cfbd95f0951dbd0724776cfc51ea.map
