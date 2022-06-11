function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Metrics/Thread.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 0);
let useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let useTimeAgo;
module.link("../../../hooks/useTimeAgo", {
  useTimeAgo(v) {
    useTimeAgo = v;
  }

}, 3);
let NotificationStatus;
module.link("../NotificationStatus", {
  "*"(v) {
    NotificationStatus = v;
  }

}, 4);
let followStyle, anchor;
module.link("../helpers/followSyle", {
  followStyle(v) {
    followStyle = v;
  },

  anchor(v) {
    anchor = v;
  }

}, 5);
let useBlockRendered;
module.link("../hooks/useBlockRendered", {
  useBlockRendered(v) {
    useBlockRendered = v;
  }

}, 6);
let Content;
module.link("./Content", {
  default(v) {
    Content = v;
  }

}, 7);
let Reply;
module.link("./Reply", {
  default(v) {
    Reply = v;
  }

}, 8);
let Metrics;
module.link("./index", {
  default(v) {
    Metrics = v;
  }

}, 9);

const ThreadMetric = _ref => {
  let {
    unread,
    mention,
    all,
    rid,
    mid,
    counter,
    participants,
    following,
    lm,
    openThread
  } = _ref;
  const t = useTranslation();
  const {
    className,
    ref
  } = useBlockRendered();
  const followMessage = useEndpoint('POST', 'chat.followMessage');
  const unfollowMessage = useEndpoint('POST', 'chat.unfollowMessage');
  const format = useTimeAgo();
  const handleFollow = useCallback(() => following ? unfollowMessage({
    mid
  }) : followMessage({
    mid
  }), [followMessage, following, mid, unfollowMessage]);
  return /*#__PURE__*/React.createElement(Content, {
    className: followStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: className,
    ref: ref
  }), /*#__PURE__*/React.createElement(Reply, {
    "data-rid": rid,
    "data-mid": mid,
    onClick: openThread
  }, t('Reply')), /*#__PURE__*/React.createElement(Metrics, null, /*#__PURE__*/React.createElement(Metrics.Item, {
    title: t('Replies')
  }, /*#__PURE__*/React.createElement(Metrics.Item.Icon, {
    name: "thread"
  }), /*#__PURE__*/React.createElement(Metrics.Item.Label, null, counter)), participants && /*#__PURE__*/React.createElement(Metrics.Item, {
    title: t('Participants')
  }, /*#__PURE__*/React.createElement(Metrics.Item.Icon, {
    name: "user"
  }), /*#__PURE__*/React.createElement(Metrics.Item.Label, null, participants)), /*#__PURE__*/React.createElement(Metrics.Item, {
    title: lm === null || lm === void 0 ? void 0 : lm.toLocaleString()
  }, /*#__PURE__*/React.createElement(Metrics.Item.Icon, {
    name: "clock"
  }), /*#__PURE__*/React.createElement(Metrics.Item.Label, null, format(lm))), /*#__PURE__*/React.createElement(Metrics.Item, {
    className: !following ? anchor : undefined,
    title: t(following ? 'Following' : 'Not_following'),
    "data-rid": rid,
    onClick: handleFollow
  }, /*#__PURE__*/React.createElement(Metrics.Following, {
    name: following ? 'bell' : 'bell-off'
  }), /*#__PURE__*/React.createElement(Metrics.Item.Label, null, mention && /*#__PURE__*/React.createElement(NotificationStatus.Me, {
    t: t
  }) || all && /*#__PURE__*/React.createElement(NotificationStatus.All, {
    t: t
  }) || unread && /*#__PURE__*/React.createElement(NotificationStatus.Unread, {
    t: t
  })))));
};

module.exportDefault(ThreadMetric);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Metrics/3927b7d0deac35a6a908df35a6d9e5db8b915e9d.map
