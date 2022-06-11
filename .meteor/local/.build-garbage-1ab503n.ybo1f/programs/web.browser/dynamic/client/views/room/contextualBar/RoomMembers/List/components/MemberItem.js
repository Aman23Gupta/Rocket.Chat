function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomMembers/List/components/MemberItem.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
module.export({
  MemberItem: () => MemberItem
});
let Option, ActionButton;
module.link("@rocket.chat/fuselage", {
  Option(v) {
    Option = v;
  },

  ActionButton(v) {
    ActionButton = v;
  }

}, 0);
let usePrefersReducedMotion;
module.link("@rocket.chat/fuselage-hooks", {
  usePrefersReducedMotion(v) {
    usePrefersReducedMotion = v;
  }

}, 1);
let React, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let ReactiveUserStatus;
module.link("../../../../../../components/UserStatus", {
  ReactiveUserStatus(v) {
    ReactiveUserStatus = v;
  }

}, 3);
let UserAvatar;
module.link("../../../../../../components/avatar/UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 4);
let usePreventProgation;
module.link("../../../../../../hooks/usePreventProgation", {
  usePreventProgation(v) {
    usePreventProgation = v;
  }

}, 5);
let UserActions;
module.link("./UserActions", {
  default(v) {
    UserActions = v;
  }

}, 6);

const MemberItem = _ref => {
  let {
    _id,
    status,
    name,
    username,
    onClickView,
    style,
    rid,
    reload
  } = _ref;
  const [showButton, setShowButton] = useState();
  const isReduceMotionEnabled = usePrefersReducedMotion();
  const handleMenuEvent = {
    [isReduceMotionEnabled ? 'onMouseEnter' : 'onTransitionEnd']: setShowButton
  };
  const onClick = usePreventProgation();
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomMembers/List/components/49235586f0c5f4850a74774f70e780ee05e597df.map
