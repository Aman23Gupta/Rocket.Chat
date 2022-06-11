function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomMembers/List/components/MemberItem.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
module.export({
  MemberItem: function () {
    return MemberItem;
  }
});
var Option, ActionButton;
module.link("@rocket.chat/fuselage", {
  Option: function (v) {
    Option = v;
  },
  ActionButton: function (v) {
    ActionButton = v;
  }
}, 0);
var usePrefersReducedMotion;
module.link("@rocket.chat/fuselage-hooks", {
  usePrefersReducedMotion: function (v) {
    usePrefersReducedMotion = v;
  }
}, 1);
var React, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var ReactiveUserStatus;
module.link("../../../../../../components/UserStatus", {
  ReactiveUserStatus: function (v) {
    ReactiveUserStatus = v;
  }
}, 3);
var UserAvatar;
module.link("../../../../../../components/avatar/UserAvatar", {
  "default": function (v) {
    UserAvatar = v;
  }
}, 4);
var usePreventProgation;
module.link("../../../../../../hooks/usePreventProgation", {
  usePreventProgation: function (v) {
    usePreventProgation = v;
  }
}, 5);
var UserActions;
module.link("./UserActions", {
  "default": function (v) {
    UserActions = v;
  }
}, 6);

var MemberItem = function (_ref) {
  var _handleMenuEvent;

  var _id = _ref._id,
      status = _ref.status,
      name = _ref.name,
      username = _ref.username,
      onClickView = _ref.onClickView,
      style = _ref.style,
      rid = _ref.rid,
      reload = _ref.reload;

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      showButton = _useState2[0],
      setShowButton = _useState2[1];

  var isReduceMotionEnabled = usePrefersReducedMotion();
  var handleMenuEvent = (_handleMenuEvent = {}, _handleMenuEvent[isReduceMotionEnabled ? 'onMouseEnter' : 'onTransitionEnd'] = setShowButton, _handleMenuEvent);
  var onClick = usePreventProgation();
  return /*#__PURE__*/React.createElement(Option, _extends({
    id: _id,
    style: style,
    "data-username": username,
    presence: status,
    onClick: onClickView
  }, handleMenuEvent), /*#__PURE__*/React.createElement(Option.Avatar, null, /*#__PURE__*/React.createElement(UserAvatar, {
    username: username,
    size: "x28"
  })), /*#__PURE__*/React.createElement(Option.Column, null, /*#__PURE__*/React.createElement(ReactiveUserStatus, {
    uid: _id
  })), /*#__PURE__*/React.createElement(Option.Content, null, name, " ", /*#__PURE__*/React.createElement(Option.Description, null, "(", username, ")")), /*#__PURE__*/React.createElement(Option.Menu, {
    onClick: onClick
  }, showButton ? /*#__PURE__*/React.createElement(UserActions, {
    username: username,
    rid: rid,
    _id: _id,
    reload: reload
  }) : /*#__PURE__*/React.createElement(ActionButton, {
    ghost: true,
    tiny: true,
    icon: "kebab"
  })));
};

MemberItem.Skeleton = Option.Skeleton;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomMembers/List/components/3c69b9b16390f3a1017b4c45f2d5c316a5a0e21a.map
