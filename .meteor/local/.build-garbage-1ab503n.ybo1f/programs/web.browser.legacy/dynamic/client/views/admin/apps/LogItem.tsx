function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/LogItem.tsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["entries", "instanceId", "title"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Box, Accordion;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Accordion: function (v) {
    Accordion = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var LogEntry;
module.link("./LogEntry", {
  "default": function (v) {
    LogEntry = v;
  }
}, 3);

var LogItem = function (_ref) {
  var entries = _ref.entries,
      instanceId = _ref.instanceId,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  return /*#__PURE__*/React.createElement(Accordion.Item, _extends({
    title: title
  }, props), instanceId && /*#__PURE__*/React.createElement(Box, null, t('Instance'), ": ", instanceId), entries.map(function (_ref2, i) {
    var severity = _ref2.severity,
        timestamp = _ref2.timestamp,
        caller = _ref2.caller,
        args = _ref2.args;
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
//# sourceMappingURL=/dynamic/client/views/admin/apps/5280778e7331faf035200b83455fd138717b27f8.map
