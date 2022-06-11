function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/hooks/useAvatarTemplate.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
module.export({
  useAvatarTemplate: () => useAvatarTemplate
});
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 0);
let RoomAvatar;
module.link("../../components/avatar/RoomAvatar", {
  default(v) {
    RoomAvatar = v;
  }

}, 1);
let useUserPreference;
module.link("../../contexts/UserContext", {
  useUserPreference(v) {
    useUserPreference = v;
  }

}, 2);

const useAvatarTemplate = () => {
  const sidebarViewMode = useUserPreference('sidebarViewMode');
  const sidebarDisplayAvatar = useUserPreference('sidebarDisplayAvatar');
  return useMemo(() => {
    if (!sidebarDisplayAvatar) {
      return null;
    }

    const size = (() => {
      switch (sidebarViewMode) {
        case 'extended':
          return 'x36';

        case 'medium':
          return 'x28';

        case 'condensed':
        default:
          return 'x16';
      }
    })();

    const renderRoomAvatar = room => /*#__PURE__*/React.createElement(RoomAvatar, {
      size: size,
      room: _objectSpread(_objectSpread({}, room), {}, {
        _id: room.rid || room._id,
        type: room.t
      })
    });

    return renderRoomAvatar;
  }, [sidebarDisplayAvatar, sidebarViewMode]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/hooks/56696d10267955a327a98c2b75c37691196b1fcd.map
