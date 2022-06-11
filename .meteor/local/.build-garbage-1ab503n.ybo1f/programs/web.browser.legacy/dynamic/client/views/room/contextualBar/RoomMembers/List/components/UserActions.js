function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomMembers/List/components/UserActions.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["label"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Option, Menu;
module.link("@rocket.chat/fuselage", {
  Option: function (v) {
    Option = v;
  },
  Menu: function (v) {
    Menu = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useActionSpread;
module.link("../../../../../hooks/useActionSpread", {
  useActionSpread: function (v) {
    useActionSpread = v;
  }
}, 2);
var useUserInfoActions;
module.link("../../../../hooks/useUserInfoActions", {
  useUserInfoActions: function (v) {
    useUserInfoActions = v;
  }
}, 3);

var UserActions = function (_ref) {
  var username = _ref.username,
      _id = _ref._id,
      rid = _ref.rid,
      reload = _ref.reload;

  var _useActionSpread = useActionSpread(useUserInfoActions({
    _id: _id,
    username: username
  }, rid, reload), 0),
      menuOptions = _useActionSpread.menu;

  if (!menuOptions) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Menu, {
    flexShrink: 0,
    key: "menu",
    tiny: true,
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
    options: menuOptions
  });
};

module.exportDefault(UserActions);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomMembers/List/components/47522aef44eda773cfefd581ac09f8cd9af52459.map
