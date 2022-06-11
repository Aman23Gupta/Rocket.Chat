function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Metrics/Discussion.tsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 1);
let useTimeAgo;
module.link("../../../hooks/useTimeAgo", {
  useTimeAgo(v) {
    useTimeAgo = v;
  }

}, 2);
let useBlockRendered;
module.link("../hooks/useBlockRendered", {
  useBlockRendered(v) {
    useBlockRendered = v;
  }

}, 3);
let Content;
module.link("./Content", {
  default(v) {
    Content = v;
  }

}, 4);
let Reply;
module.link("./Reply", {
  default(v) {
    Reply = v;
  }

}, 5);
let Metrics;
module.link("./index", {
  default(v) {
    Metrics = v;
  }

}, 6);

const DiscussionMetric = _ref => {
  let {
    lm,
    count,
    rid,
    drid,
    openDiscussion
  } = _ref;
  const t = useTranslation();
  const format = useTimeAgo();
  const {
    className,
    ref
  } = useBlockRendered();
  return /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement("div", {
    className: className,
    ref: ref
  }), /*#__PURE__*/React.createElement(Reply, {
    "data-rid": rid,
    "data-drid": drid,
    onClick: openDiscussion
  }, count ? t('message_counter', {
    counter: count,
    count
  }) : t('Reply')), /*#__PURE__*/React.createElement(Metrics, null, /*#__PURE__*/React.createElement(Metrics.Item, {
    title: lm === null || lm === void 0 ? void 0 : lm.toLocaleString()
  }, /*#__PURE__*/React.createElement(Metrics.Item.Icon, {
    name: "clock"
  }), /*#__PURE__*/React.createElement(Metrics.Item.Label, null, lm ? format(lm) : t('No_messages_yet')))));
};

module.exportDefault(DiscussionMetric);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Metrics/ef55f85ce03a8bd12b49167e2b5b36f7e043e519.map
