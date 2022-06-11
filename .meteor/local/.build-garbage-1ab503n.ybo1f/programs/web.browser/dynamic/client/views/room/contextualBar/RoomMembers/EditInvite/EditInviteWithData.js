function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomMembers/EditInvite/EditInviteWithData.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let React, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let useTabBarClose;
module.link("../../../providers/ToolboxProvider", {
  useTabBarClose(v) {
    useTabBarClose = v;
  }

}, 2);
let EditInvite;
module.link("./EditInvite", {
  default(v) {
    EditInvite = v;
  }

}, 3);

const EditInviteWithData = _ref => {
  let {
    onClickBack,
    setParams,
    linkText,
    captionText,
    days: _days,
    maxUses: _maxUses
  } = _ref;
  const onClickClose = useTabBarClose();
  const [days, setDays] = useState(_days);
  const [maxUses, setMaxUses] = useState(_maxUses);
  const generateLink = useMutableCallback(() => {
    setParams({
      days,
      maxUses
    });
  });
  return /*#__PURE__*/React.createElement(EditInvite, {
    onClickBack: onClickBack,
    onClickClose: onClickClose,
    onClickNewLink: generateLink,
    setDays: setDays,
    days: days,
    maxUses: maxUses,
    setMaxUses: setMaxUses,
    linkText: linkText,
    captionText: captionText
  });
};

module.exportDefault(EditInviteWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomMembers/EditInvite/93a894ebe5ca1e5e1b11b7ede57a8406a97f5393.map
