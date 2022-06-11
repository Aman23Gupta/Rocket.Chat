function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Metrics/Broadcast.tsx                                                                     //
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
var useBlockRendered;
module.link("../hooks/useBlockRendered", {
  useBlockRendered: function (v) {
    useBlockRendered = v;
  }
}, 2);
var Content;
module.link("./Content", {
  "default": function (v) {
    Content = v;
  }
}, 3);
var Reply;
module.link("./Reply", {
  "default": function (v) {
    Reply = v;
  }
}, 4);

var BroadcastMetric = function (_ref) {
  var username = _ref.username,
      mid = _ref.mid,
      replyBroadcast = _ref.replyBroadcast;
  var t = useTranslation();

  var _useBlockRendered = useBlockRendered(),
      className = _useBlockRendered.className,
      ref = _useBlockRendered.ref;

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
//# sourceMappingURL=/dynamic/client/components/Message/Metrics/790382ad0dab773d4bdb4d964f88771eca7a5c2d.map
