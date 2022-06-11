function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/RoomIcon/OmnichannelRoomIcon/OmnichannelRoomIcon.tsx                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  OmnichannelRoomIcon: () => OmnichannelRoomIcon
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let isOmnichannelRoomFromAppSource;
module.link("../../../../definition/IRoom", {
  isOmnichannelRoomFromAppSource(v) {
    isOmnichannelRoomFromAppSource = v;
  }

}, 1);
let OmnichannelAppSourceRoomIcon;
module.link("./OmnichannelAppSourceRoomIcon", {
  OmnichannelAppSourceRoomIcon(v) {
    OmnichannelAppSourceRoomIcon = v;
  }

}, 2);
let OmnichannelCoreSourceRoomIcon;
module.link("./OmnichannelCoreSourceRoomIcon", {
  OmnichannelCoreSourceRoomIcon(v) {
    OmnichannelCoreSourceRoomIcon = v;
  }

}, 3);

const OmnichannelRoomIcon = _ref => {
  let {
    room,
    size,
    placement = 'default'
  } = _ref;

  if (isOmnichannelRoomFromAppSource(room)) {
    return /*#__PURE__*/React.createElement(OmnichannelAppSourceRoomIcon, {
      placement: placement,
      room: room,
      size: size
    });
  }

  return /*#__PURE__*/React.createElement(OmnichannelCoreSourceRoomIcon, {
    room: room,
    size: size
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/RoomIcon/OmnichannelRoomIcon/09b0ab99b1770922a869fa5bc97450d945fa198a.map
