function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/channels/TeamsChannelItem.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let ActionButton, Box, Icon, Option, Tag;
module.link("@rocket.chat/fuselage", {
  ActionButton(v) {
    ActionButton = v;
  },

  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  },

  Option(v) {
    Option = v;
  },

  Tag(v) {
    Tag = v;
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
let roomTypes;
module.link("../../../../../app/utils/client", {
  roomTypes(v) {
    roomTypes = v;
  }

}, 3);
let RoomAvatar;
module.link("../../../../components/avatar/RoomAvatar", {
  default(v) {
    RoomAvatar = v;
  }

}, 4);
let usePermission;
module.link("../../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 5);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let usePreventProgation;
module.link("../../../../hooks/usePreventProgation", {
  usePreventProgation(v) {
    usePreventProgation = v;
  }

}, 7);
let RoomActions;
module.link("./RoomActions", {
  default(v) {
    RoomActions = v;
  }

}, 8);

const TeamsChannelItem = _ref => {
  let {
    room,
    onClickView,
    reload
  } = _ref;
  const t = useTranslation();
  const rid = room._id;
  const type = room.t;
  const [showButton, setShowButton] = useState();
  const canRemoveTeamChannel = usePermission('remove-team-channel', rid);
  const canEditTeamChannel = usePermission('edit-team-channel', rid);
  const canDeleteTeamChannel = usePermission(type === 'c' ? 'delete-c' : 'delete-p', rid);
  const isReduceMotionEnabled = usePrefersReducedMotion();
  const handleMenuEvent = {
    [isReduceMotionEnabled ? 'onMouseEnter' : 'onTransitionEnd']: setShowButton
  };
  const onClick = usePreventProgation();
  return /*#__PURE__*/React.createElement(Option, _extends({
    id: room._id,
    "data-rid": room._id
  }, handleMenuEvent, {
    onClick: onClickView
  }), /*#__PURE__*/React.createElement(Option.Avatar, null, /*#__PURE__*/React.createElement(RoomAvatar, {
    room: room,
    size: "x28"
  })), /*#__PURE__*/React.createElement(Option.Column, null, room.t === 'c' ? /*#__PURE__*/React.createElement(Icon, {
    name: "hash",
    size: "x15"
  }) : /*#__PURE__*/React.createElement(Icon, {
    name: "hashtag-lock",
    size: "x15"
  })), /*#__PURE__*/React.createElement(Option.Content, null, /*#__PURE__*/React.createElement(Box, {
    display: "inline-flex",
    alignItems: "center"
  }, roomTypes.getRoomName(room.t, room), ' ', room.teamDefault ? /*#__PURE__*/React.createElement(Box, {
    mi: "x4"
  }, /*#__PURE__*/React.createElement(Tag, null, t('Team_Auto-join'))) : '')), (canRemoveTeamChannel || canEditTeamChannel || canDeleteTeamChannel) && /*#__PURE__*/React.createElement(Option.Menu, {
    onClick: onClick
  }, showButton ? /*#__PURE__*/React.createElement(RoomActions, {
    room: room,
    reload: reload
  }) : /*#__PURE__*/React.createElement(ActionButton, {
    ghost: true,
    tiny: true,
    icon: "kebab"
  })));
};

module.exportDefault(Object.assign(TeamsChannelItem, {
  Skeleton: Option.Skeleton
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/channels/8b552b4bdaa3e6a9d86aa83920b38b1a69509071.map
