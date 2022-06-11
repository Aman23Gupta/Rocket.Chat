function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Metrics/Broadcast.tsx                                                                     //
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
let useBlockRendered;
module.link("../hooks/useBlockRendered", {
  useBlockRendered(v) {
    useBlockRendered = v;
  }

}, 2);
let Content;
module.link("./Content", {
  default(v) {
    Content = v;
  }

}, 3);
let Reply;
module.link("./Reply", {
  default(v) {
    Reply = v;
  }

}, 4);

const BroadcastMetric = _ref => {
  let {
    username,
    mid,
    replyBroadcast
  } = _ref;
  const t = useTranslation();
  const {
    className,
    ref
  } = useBlockRendered();
  return /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement("div", {
    className: className,
    ref: ref
  }), /*#__PURE__*/React.createElement(Reply, {
    "data-username": username,
    "data-mid": mid,
    onClick: replyBroadcast
  }, t('Reply')));
};

module.exportDefault(BroadcastMetric);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Metrics/699e412c88416e1af829f3c7caa861fec95f3b9d.map
