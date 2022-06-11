function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Threads/Row.tsx                                                                     //
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
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 1);
let useTimeAgo;
module.link("../../../../hooks/useTimeAgo", {
  useTimeAgo(v) {
    useTimeAgo = v;
  }

}, 2);
let clickableItem;
module.link("../../../../lib/clickableItem", {
  clickableItem(v) {
    clickableItem = v;
  }

}, 3);
let callWithErrorHandling;
module.link("../../../../lib/utils/callWithErrorHandling", {
  callWithErrorHandling(v) {
    callWithErrorHandling = v;
  }

}, 4);
let ThreadListMessage;
module.link("./components/Message", {
  default(v) {
    ThreadListMessage = v;
  }

}, 5);
let mapProps;
module.link("./mapProps", {
  mapProps(v) {
    mapProps = v;
  }

}, 6);
let normalizeThreadMessage;
module.link("./normalizeThreadMessage", {
  normalizeThreadMessage(v) {
    normalizeThreadMessage = v;
  }

}, 7);
const Thread = /*#__PURE__*/memo(mapProps(clickableItem(ThreadListMessage)));

const handleFollowButton = (e, threadId) => {
  e.preventDefault();
  e.stopPropagation();
  const {
    following
  } = e.currentTarget.dataset;
  following && callWithErrorHandling(![true, 'true'].includes(following) ? 'followMessage' : 'unfollowMessage', {
    mid: threadId
  });
};

const Row = /*#__PURE__*/memo(function Row(_ref) {
  let {
    thread,
    showRealNames,
    unread,
    unreadUser,
    unreadGroup,
    userId,
    onClick
  } = _ref;
  const t = useTranslation();
  const formatDate = useTimeAgo();
  const msg = normalizeThreadMessage(thread);
  const {
    name = thread.u.username
  } = thread.u;
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
    handleFollowButton: e => handleFollowButton(e, thread._id),
    onClick: onClick
  });
});
module.exportDefault(Row);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Threads/6958ceb708964071b24bb9e3048c42642b39727c.map
