function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomMembers/List/components/UserActions.js                                          //
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
let Option, Menu;
module.link("@rocket.chat/fuselage", {
  Option(v) {
    Option = v;
  },

  Menu(v) {
    Menu = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useActionSpread;
module.link("../../../../../hooks/useActionSpread", {
  useActionSpread(v) {
    useActionSpread = v;
  }

}, 2);
let useUserInfoActions;
module.link("../../../../hooks/useUserInfoActions", {
  useUserInfoActions(v) {
    useUserInfoActions = v;
  }

}, 3);

const UserActions = _ref => {
  let {
    username,
    _id,
    rid,
    reload
  } = _ref;
  const {
    menu: menuOptions
  } = useActionSpread(useUserInfoActions({
    _id,
    username
  }, rid, reload), 0);

  if (!menuOptions) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Menu, {
    flexShrink: 0,
    key: "menu",
    tiny: true,
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
    options: menuOptions
  });
};

module.exportDefault(UserActions);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomMembers/List/components/acd5679e2f88a9bc5b4cc803aeb018d544645d61.map
