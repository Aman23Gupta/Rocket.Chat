function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Metrics/Discussion.tsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 1);
var useTimeAgo;
module.link("../../../hooks/useTimeAgo", {
  useTimeAgo: function (v) {
    useTimeAgo = v;
  }
}, 2);
var useBlockRendered;
module.link("../hooks/useBlockRendered", {
  useBlockRendered: function (v) {
    useBlockRendered = v;
  }
}, 3);
var Content;
module.link("./Content", {
  "default": function (v) {
    Content = v;
  }
}, 4);
var Reply;
module.link("./Reply", {
  "default": function (v) {
    Reply = v;
  }
}, 5);
var Metrics;
module.link("./index", {
  "default": function (v) {
    Metrics = v;
  }
}, 6);

var DiscussionMetric = function (_ref) {
  var lm = _ref.lm,
      count = _ref.count,
      rid = _ref.rid,
      drid = _ref.drid,
      openDiscussion = _ref.openDiscussion;
  var t = useTranslation();
  var format = useTimeAgo();

  var _useBlockRendered = useBlockRendered(),
      className = _useBlockRendered.className,
      ref = _useBlockRendered.ref;

  return /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement("div", {
    className: className,
    ref: ref
  }), /*#__PURE__*/React.createElement(Reply, {
    "data-rid": rid,
    "data-drid": drid,
    onClick: openDiscussion
  }, count ? t('message_counter', {
    counter: count,
    count: count
  }) : t('Reply')), /*#__PURE__*/React.createElement(Metrics, null, /*#__PURE__*/React.createElement(Metrics.Item, {
    title: lm === null || lm === void 0 ? void 0 : lm.toLocaleString()
  }, /*#__PURE__*/React.createElement(Metrics.Item.Icon, {
    name: "clock"
  }), /*#__PURE__*/React.createElement(Metrics.Item.Label, null, lm ? format(lm) : t('No_messages_yet')))));
};

module.exportDefault(DiscussionMetric);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Metrics/c691347280c9e89073cf6de87b2beb959a60a435.map
