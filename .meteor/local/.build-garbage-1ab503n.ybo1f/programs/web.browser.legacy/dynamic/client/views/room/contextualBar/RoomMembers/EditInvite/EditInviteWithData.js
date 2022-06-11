function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomMembers/EditInvite/EditInviteWithData.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var React, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var useTabBarClose;
module.link("../../../providers/ToolboxProvider", {
  useTabBarClose: function (v) {
    useTabBarClose = v;
  }
}, 2);
var EditInvite;
module.link("./EditInvite", {
  "default": function (v) {
    EditInvite = v;
  }
}, 3);

var EditInviteWithData = function (_ref) {
  var onClickBack = _ref.onClickBack,
      setParams = _ref.setParams,
      linkText = _ref.linkText,
      captionText = _ref.captionText,
      _days = _ref.days,
      _maxUses = _ref.maxUses;
  var onClickClose = useTabBarClose();

  var _useState = useState(_days),
      _useState2 = _slicedToArray(_useState, 2),
      days = _useState2[0],
      setDays = _useState2[1];

  var _useState3 = useState(_maxUses),
      _useState4 = _slicedToArray(_useState3, 2),
      maxUses = _useState4[0],
      setMaxUses = _useState4[1];

  var generateLink = useMutableCallback(function () {
    setParams({
      days: days,
      maxUses: maxUses
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomMembers/EditInvite/aadbf94a2abc46b6512a5bbaff55f7397ec66b49.map
