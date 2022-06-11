function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Threads/Row.tsx                                                                     //
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
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 1);
var useTimeAgo;
module.link("../../../../hooks/useTimeAgo", {
  useTimeAgo: function (v) {
    useTimeAgo = v;
  }
}, 2);
var clickableItem;
module.link("../../../../lib/clickableItem", {
  clickableItem: function (v) {
    clickableItem = v;
  }
}, 3);
var callWithErrorHandling;
module.link("../../../../lib/utils/callWithErrorHandling", {
  callWithErrorHandling: function (v) {
    callWithErrorHandling = v;
  }
}, 4);
var ThreadListMessage;
module.link("./components/Message", {
  "default": function (v) {
    ThreadListMessage = v;
  }
}, 5);
var mapProps;
module.link("./mapProps", {
  mapProps: function (v) {
    mapProps = v;
  }
}, 6);
var normalizeThreadMessage;
module.link("./normalizeThreadMessage", {
  normalizeThreadMessage: function (v) {
    normalizeThreadMessage = v;
  }
}, 7);
var Thread = /*#__PURE__*/memo(mapProps(clickableItem(ThreadListMessage)));

var handleFollowButton = function (e, threadId) {
  e.preventDefault();
  e.stopPropagation();
  var following = e.currentTarget.dataset.following;
  following && callWithErrorHandling(![true, 'true'].includes(following) ? 'followMessage' : 'unfollowMessage', {
    mid: threadId
  });
};

var Row = /*#__PURE__*/memo(function () {
  function Row(_ref) {
    var thread = _ref.thread,
        showRealNames = _ref.showRealNames,
        unread = _ref.unread,
        unreadUser = _ref.unreadUser,
        unreadGroup = _ref.unreadGroup,
        userId = _ref.userId,
        onClick = _ref.onClick;
    var t = useTranslation();
    var formatDate = useTimeAgo();
    var msg = normalizeThreadMessage(thread);
    var _thread$u$name = thread.u.name,
        name = _thread$u$name === void 0 ? thread.u.username : _thread$u$name;
    return /*#__PURE__*/React.createElement(Thread, {
      tcount: thread.tcount,
      tlm: thread.tlm,
      ts: thread.ts,
      u: thread.u,
      replies: thread.replies,
      name: showRealNames ? name : thread.u.username,
      username: thread.u.username,
      unread: unread.includes(thread._id),
      mention: unreadUser.includes(thread._id),
      all: unreadGroup.includes(thread._id),
      following: thread.replies && thread.replies.includes(userId),
      "data-id": thread._id,
      msg: msg,
      t: t,
      formatDate: formatDate,
      handleFollowButton: function (e) {
        return handleFollowButton(e, thread._id);
      },
      onClick: onClick
    });
  }

  return Row;
}());
module.exportDefault(Row);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Threads/994a836ddf1c6e118715e180abf716035da08aa9.map
