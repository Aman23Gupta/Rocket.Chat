function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/hooks/useAvatarTemplate.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);
module.export({
  useAvatarTemplate: function () {
    return useAvatarTemplate;
  }
});
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 0);
var RoomAvatar;
module.link("../../components/avatar/RoomAvatar", {
  "default": function (v) {
    RoomAvatar = v;
  }
}, 1);
var useUserPreference;
module.link("../../contexts/UserContext", {
  useUserPreference: function (v) {
    useUserPreference = v;
  }
}, 2);

var useAvatarTemplate = function () {
  var sidebarViewMode = useUserPreference('sidebarViewMode');
  var sidebarDisplayAvatar = useUserPreference('sidebarDisplayAvatar');
  return useMemo(function () {
    if (!sidebarDisplayAvatar) {
      return null;
    }

    var size = function () {
      switch (sidebarViewMode) {
        case 'extended':
          return 'x36';

        case 'medium':
          return 'x28';

        case 'condensed':
        default:
          return 'x16';
      }
    }();

    var renderRoomAvatar = function (room) {
      return /*#__PURE__*/React.createElement(RoomAvatar, {
        size: size,
        room: _objectSpread(_objectSpread({}, room), {}, {
          _id: room.rid || room._id,
          type: room.t
        })
      });
    };

    return renderRoomAvatar;
  }, [sidebarDisplayAvatar, sidebarViewMode]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/hooks/a835d2469edec5dd4dccced634f04a96d3d8228a.map
