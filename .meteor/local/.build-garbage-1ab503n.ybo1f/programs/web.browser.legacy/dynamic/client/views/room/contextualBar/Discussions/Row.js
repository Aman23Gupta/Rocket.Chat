function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Discussions/Row.js                                                                  //
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
var DiscussionListMessage;
module.link("./components/Message", {
  "default": function (v) {
    DiscussionListMessage = v;
  }
}, 4);
var mapProps;
module.link("./mapProps", {
  mapProps: function (v) {
    mapProps = v;
  }
}, 5);
var normalizeThreadMessage;
module.link("./normalizeThreadMessage", {
  normalizeThreadMessage: function (v) {
    normalizeThreadMessage = v;
  }
}, 6);
var Discussion = /*#__PURE__*/memo(mapProps(clickableItem(DiscussionListMessage)));
var Row = /*#__PURE__*/memo(function () {
  function Row(_ref) {
    var discussion = _ref.discussion,
        showRealNames = _ref.showRealNames,
        userId = _ref.userId,
        onClick = _ref.onClick;
    var t = useTranslation();
    var formatDate = useTimeAgo();
    var msg = normalizeThreadMessage(discussion);
    var _discussion$u$name = discussion.u.name,
        name = _discussion$u$name === void 0 ? discussion.u.username : _discussion$u$name;
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
  }

  return Row;
}());
module.exportDefault(Row);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Discussions/cfb8aded12acdac8e22572d380702061488e64cc.map
