function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/users/SeatsCapUsage/SeatsCapUsage.tsx                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var ProgressBar, Box;
module.link("@rocket.chat/fuselage", {
  ProgressBar: function (v) {
    ProgressBar = v;
  },
  Box: function (v) {
    Box = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

var SeatsCapUsage = function (_ref) {
  var limit = _ref.limit,
      members = _ref.members;
  var t = useTranslation();
  var percentage = Math.max(0, Math.min(100 / limit * members, 100));
  var closeToLimit = percentage >= 80;
  var reachedLimit = percentage >= 100;
  var color = closeToLimit ? 'danger-500' : 'success-500';
  var seatsLeft = Math.max(0, limit - members);
  return /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    minWidth: "x180"
  }, /*#__PURE__*/React.createElement(Box, {
    color: reachedLimit ? color : 'default',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontScale: "c1",
    mb: "x8"
  }, /*#__PURE__*/React.createElement("div", null, t('Seats_Available', {
    seatsLeft: seatsLeft
  })), /*#__PURE__*/React.createElement(Box, {
    color: reachedLimit ? color : 'neutral-700'
  }, members + "/" + limit)), /*#__PURE__*/React.createElement(ProgressBar, {
    borderRadius: "x8",
    overflow: "hidden",
    percentage: percentage,
    barColor: color,
    animated: false,
    w: "full"
  }));
};

module.exportDefault(SeatsCapUsage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/users/SeatsCapUsage/f17b904c9960714c620da8b33356869138d5471f.map
