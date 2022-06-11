function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Metrics/Thread.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 0);
var useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var useTimeAgo;
module.link("../../../hooks/useTimeAgo", {
  useTimeAgo: function (v) {
    useTimeAgo = v;
  }
}, 3);
var NotificationStatus;
module.link("../NotificationStatus", {
  "*": function (v) {
    NotificationStatus = v;
  }
}, 4);
var followStyle, anchor;
module.link("../helpers/followSyle", {
  followStyle: function (v) {
    followStyle = v;
  },
  anchor: function (v) {
    anchor = v;
  }
}, 5);
var useBlockRendered;
module.link("../hooks/useBlockRendered", {
  useBlockRendered: function (v) {
    useBlockRendered = v;
  }
}, 6);
var Content;
module.link("./Content", {
  "default": function (v) {
    Content = v;
  }
}, 7);
var Reply;
module.link("./Reply", {
  "default": function (v) {
    Reply = v;
  }
}, 8);
var Metrics;
module.link("./index", {
  "default": function (v) {
    Metrics = v;
  }
}, 9);

var ThreadMetric = function (_ref) {
  var unread = _ref.unread,
      mention = _ref.mention,
      all = _ref.all,
      rid = _ref.rid,
      mid = _ref.mid,
      counter = _ref.counter,
      participants = _ref.participants,
      following = _ref.following,
      lm = _ref.lm,
      openThread = _ref.openThread;
  var t = useTranslation();

  var _useBlockRendered = useBlockRendered(),
      className = _useBlockRendered.className,
      ref = _useBlockRendered.ref;

  var followMessage = useEndpoint('POST', 'chat.followMessage');
  var unfollowMessage = useEndpoint('POST', 'chat.unfollowMessage');
  var format = useTimeAgo();
  var handleFollow = useCallback(function () {
    return following ? unfollowMessage({
      mid: mid
    }) : followMessage({
      mid: mid
    });
  }, [followMessage, following, mid, unfollowMessage]);
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
//# sourceMappingURL=/dynamic/client/components/Message/Metrics/551a51f931975e4ac49e89677c8db67b35bcea3b.map
