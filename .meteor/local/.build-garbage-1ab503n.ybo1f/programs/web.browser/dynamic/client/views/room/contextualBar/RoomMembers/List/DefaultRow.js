function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomMembers/List/DefaultRow.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 0);
let MemberItem;
module.link("./components/MemberItem", {
  MemberItem(v) {
    MemberItem = v;
  }

}, 1);

const DefaultRow = _ref => {
  let {
    user,
    data,
    index,
    reload
  } = _ref;
  const {
    onClickView,
    rid
  } = data;

  if (!user) {
    return /*#__PURE__*/React.createElement(MemberItem.Skeleton, null);
  }

  return /*#__PURE__*/React.createElement(MemberItem, {
    index: index,
    username: user.username,
    _id: user._id,
    rid: rid,
    status: user.status,
    name: user.name,
    onClickView: onClickView,
    reload: reload
  });
};

module.exportDefault( /*#__PURE__*/memo(DefaultRow));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomMembers/List/77decfa459aa7a02ed43e3f0e4893a0088d7a5e3.map
