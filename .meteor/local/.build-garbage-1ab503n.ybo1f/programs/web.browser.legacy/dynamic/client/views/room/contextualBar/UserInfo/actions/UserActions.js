function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/UserInfo/actions/UserActions.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["label"];

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 2);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 3);
var ButtonGroup, Menu, Option;
module.link("@rocket.chat/fuselage", {
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Menu: function (v) {
    Menu = v;
  },
  Option: function (v) {
    Option = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var UserInfo;
module.link("..", {
  "default": function (v) {
    UserInfo = v;
  }
}, 2);
var useActionSpread;
module.link("../../../../hooks/useActionSpread", {
  useActionSpread: function (v) {
    useActionSpread = v;
  }
}, 3);
var useUserInfoActions;
module.link("../../../hooks/useUserInfoActions", {
  useUserInfoActions: function (v) {
    useUserInfoActions = v;
  }
}, 4);

var UserActions = function (_ref) {
  var user = _ref.user,
      rid = _ref.rid,
      backToList = _ref.backToList;

  var _useActionSpread = useActionSpread(useUserInfoActions(user, rid, backToList)),
      actionsDefinition = _useActionSpread.actions,
      menuOptions = _useActionSpread.menu;

  var menu = useMemo(function () {
    if (!menuOptions) {
      return null;
    }

    return /*#__PURE__*/React.createElement(Menu, {
      key: "menu",
      mi: "x4",
      ghost: false,
      small: false,
      renderItem: function (_ref2) {
        var _ref2$label = _ref2.label,
            label = _ref2$label.label,
            icon = _ref2$label.icon,
            props = _objectWithoutProperties(_ref2, _excluded);

        return /*#__PURE__*/React.createElement(Option, _extends({}, props, {
          label: label,
          icon: icon
        }));
      },
      flexShrink: 0,
      options: menuOptions
    });
  }, [menuOptions]);
  var actions = useMemo(function () {
    var mapAction = function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          _ref4$ = _ref4[1],
          label = _ref4$.label,
          icon = _ref4$.icon,
          action = _ref4$.action;

      return /*#__PURE__*/React.createElement(UserInfo.Action, {
        key: key,
        title: label,
        label: label,
        onClick: action,
        icon: icon
      });
    };

    return [].concat(_toConsumableArray(actionsDefinition.map(mapAction)), [menu]).filter(Boolean);
  }, [actionsDefinition, menu]);
  return /*#__PURE__*/React.createElement(ButtonGroup, {
    mi: "neg-x4",
    flexShrink: 0,
    flexWrap: "nowrap",
    withTruncatedText: true,
    justifyContent: "center",
    flexShrink: 0
  }, actions);
};

module.exportDefault(UserActions);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/UserInfo/actions/2796abfd85fa0b2cb345a8f0b9194a0d6cf0239e.map
