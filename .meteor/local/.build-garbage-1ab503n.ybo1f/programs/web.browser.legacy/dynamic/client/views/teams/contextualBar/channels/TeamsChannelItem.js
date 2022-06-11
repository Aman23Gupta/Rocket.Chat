function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/channels/TeamsChannelItem.js                                                       //
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
var ActionButton, Box, Icon, Option, Tag;
module.link("@rocket.chat/fuselage", {
  ActionButton: function (v) {
    ActionButton = v;
  },
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Option: function (v) {
    Option = v;
  },
  Tag: function (v) {
    Tag = v;
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
var roomTypes;
module.link("../../../../../app/utils/client", {
  roomTypes: function (v) {
    roomTypes = v;
  }
}, 3);
var RoomAvatar;
module.link("../../../../components/avatar/RoomAvatar", {
  "default": function (v) {
    RoomAvatar = v;
  }
}, 4);
var usePermission;
module.link("../../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 5);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var usePreventProgation;
module.link("../../../../hooks/usePreventProgation", {
  usePreventProgation: function (v) {
    usePreventProgation = v;
  }
}, 7);
var RoomActions;
module.link("./RoomActions", {
  "default": function (v) {
    RoomActions = v;
  }
}, 8);

var TeamsChannelItem = function (_ref) {
  var _handleMenuEvent;

  var room = _ref.room,
      onClickView = _ref.onClickView,
      reload = _ref.reload;
  var t = useTranslation();
  var rid = room._id;
  var type = room.t;

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      showButton = _useState2[0],
      setShowButton = _useState2[1];

  var canRemoveTeamChannel = usePermission('remove-team-channel', rid);
  var canEditTeamChannel = usePermission('edit-team-channel', rid);
  var canDeleteTeamChannel = usePermission(type === 'c' ? 'delete-c' : 'delete-p', rid);
  var isReduceMotionEnabled = usePrefersReducedMotion();
  var handleMenuEvent = (_handleMenuEvent = {}, _handleMenuEvent[isReduceMotionEnabled ? 'onMouseEnter' : 'onTransitionEnd'] = setShowButton, _handleMenuEvent);
  var onClick = usePreventProgation();
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
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/channels/aa424b124e2165ff84022ca5e9d759e68e664441.map
