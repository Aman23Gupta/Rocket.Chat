function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomMembers/List/DefaultRow.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 0);
var MemberItem;
module.link("./components/MemberItem", {
  MemberItem: function (v) {
    MemberItem = v;
  }
}, 1);

var DefaultRow = function (_ref) {
  var user = _ref.user,
      data = _ref.data,
      index = _ref.index,
      reload = _ref.reload;
  var onClickView = data.onClickView,
      rid = data.rid;

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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomMembers/List/62e24856c7d6db170bf97189e8d426adc5b7a5ea.map
