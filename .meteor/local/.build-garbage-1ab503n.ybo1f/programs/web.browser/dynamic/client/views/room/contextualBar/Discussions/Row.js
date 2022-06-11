function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Discussions/Row.js                                                                  //
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
let DiscussionListMessage;
module.link("./components/Message", {
  default(v) {
    DiscussionListMessage = v;
  }

}, 4);
let mapProps;
module.link("./mapProps", {
  mapProps(v) {
    mapProps = v;
  }

}, 5);
let normalizeThreadMessage;
module.link("./normalizeThreadMessage", {
  normalizeThreadMessage(v) {
    normalizeThreadMessage = v;
  }

}, 6);
const Discussion = /*#__PURE__*/memo(mapProps(clickableItem(DiscussionListMessage)));
const Row = /*#__PURE__*/memo(function Row(_ref) {
  let {
    discussion,
    showRealNames,
    userId,
    onClick
  } = _ref;
  const t = useTranslation();
  const formatDate = useTimeAgo();
  const msg = normalizeThreadMessage(discussion);
  const {
    name = discussion.u.username
  } = discussion.u;
  return /*#__PURE__*/React.createElement(Discussion, {
    replies: discussion.replies,
    dcount: discussion.dcount,
    dlm: discussion.dlm,
    name: showRealNames ? name : discussion.u.username,
    username: discussion.u.username,
    following: discussion.replies && discussion.replies.includes(userId),
    "data-drid": discussion.drid,
    msg: msg,
    t: t,
    formatDate: formatDate,
    onClick: onClick
  });
});
module.exportDefault(Row);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Discussions/ba70e3099f08292a3da5ff971077a9e4b02bc1ab.map
