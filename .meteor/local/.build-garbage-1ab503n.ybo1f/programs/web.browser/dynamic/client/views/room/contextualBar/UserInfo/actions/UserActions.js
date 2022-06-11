function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/UserInfo/actions/UserActions.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["label"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let ButtonGroup, Menu, Option;
module.link("@rocket.chat/fuselage", {
  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Menu(v) {
    Menu = v;
  },

  Option(v) {
    Option = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let UserInfo;
module.link("..", {
  default(v) {
    UserInfo = v;
  }

}, 2);
let useActionSpread;
module.link("../../../../hooks/useActionSpread", {
  useActionSpread(v) {
    useActionSpread = v;
  }

}, 3);
let useUserInfoActions;
module.link("../../../hooks/useUserInfoActions", {
  useUserInfoActions(v) {
    useUserInfoActions = v;
  }

}, 4);

const UserActions = _ref => {
  let {
    user,
    rid,
    backToList
  } = _ref;
  const {
    actions: actionsDefinition,
    menu: menuOptions
  } = useActionSpread(useUserInfoActions(user, rid, backToList));
  const menu = useMemo(() => {
    if (!menuOptions) {
      return null;
    }

    return /*#__PURE__*/React.createElement(Menu, {
      key: "menu",
      mi: "x4",
      ghost: false,
      small: false,
      renderItem: _ref2 => {
        let {
          label: {
            label,
            icon
          }
        } = _ref2,
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
  const actions = useMemo(() => {
    const mapAction = _ref3 => {
      let [key, {
        label,
        icon,
        action
      }] = _ref3;
      return /*#__PURE__*/React.createElement(UserInfo.Action, {
        key: key,
        title: label,
        label: label,
        onClick: action,
        icon: icon
      });
    };

    return [...actionsDefinition.map(mapAction), menu].filter(Boolean);
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/UserInfo/actions/13c62f44ac75e95117da982d410dcb53f9988c24.map
