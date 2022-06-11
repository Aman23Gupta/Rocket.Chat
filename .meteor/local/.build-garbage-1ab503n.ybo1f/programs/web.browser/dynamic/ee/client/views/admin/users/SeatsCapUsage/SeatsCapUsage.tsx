function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/users/SeatsCapUsage/SeatsCapUsage.tsx                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let ProgressBar, Box;
module.link("@rocket.chat/fuselage", {
  ProgressBar(v) {
    ProgressBar = v;
  },

  Box(v) {
    Box = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);

const SeatsCapUsage = _ref => {
  let {
    limit,
    members
  } = _ref;
  const t = useTranslation();
  const percentage = Math.max(0, Math.min(100 / limit * members, 100));
  const closeToLimit = percentage >= 80;
  const reachedLimit = percentage >= 100;
  const color = closeToLimit ? 'danger-500' : 'success-500';
  const seatsLeft = Math.max(0, limit - members);
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
    seatsLeft
  })), /*#__PURE__*/React.createElement(Box, {
    color: reachedLimit ? color : 'neutral-700'
  }, "".concat(members, "/").concat(limit))), /*#__PURE__*/React.createElement(ProgressBar, {
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/users/SeatsCapUsage/e54adbfbdb16353e103b297e1e14005d389f582b.map
