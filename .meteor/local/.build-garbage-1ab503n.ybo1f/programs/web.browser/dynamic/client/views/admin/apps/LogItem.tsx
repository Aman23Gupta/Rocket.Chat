function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/LogItem.tsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["entries", "instanceId", "title"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Box, Accordion;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Accordion(v) {
    Accordion = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let LogEntry;
module.link("./LogEntry", {
  default(v) {
    LogEntry = v;
  }

}, 3);

const LogItem = _ref => {
  let {
    entries,
    instanceId,
    title
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  return /*#__PURE__*/React.createElement(Accordion.Item, _extends({
    title: title
  }, props), instanceId && /*#__PURE__*/React.createElement(Box, null, t('Instance'), ": ", instanceId), entries.map((_ref2, i) => {
    let {
      severity,
      timestamp,
      caller,
      args
    } = _ref2;
    return /*#__PURE__*/React.createElement(LogEntry, {
      key: i,
      severity: severity,
      timestamp: timestamp,
      caller: caller,
      args: args
    });
  }));
};

module.exportDefault(LogItem);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/94b2447be5bad62b186ee5cefc61071335c1a644.map
