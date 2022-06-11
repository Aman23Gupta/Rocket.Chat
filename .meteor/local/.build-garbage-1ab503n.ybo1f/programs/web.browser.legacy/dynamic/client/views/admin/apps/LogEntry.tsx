function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/LogEntry.tsx                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box;
module.link("@rocket.chat/fuselage", {
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
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var useHighlightedCode;
module.link("../../../hooks/useHighlightedCode", {
  useHighlightedCode: function (v) {
    useHighlightedCode = v;
  }
}, 3);

var LogEntry = function (_ref) {
  var severity = _ref.severity,
      timestamp = _ref.timestamp,
      caller = _ref.caller,
      args = _ref.args;
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Box, null, severity, ": ", timestamp, " ", t('Caller'), ": ", caller), /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    width: "full"
  }, /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", {
    dangerouslySetInnerHTML: {
      __html: useHighlightedCode('json', JSON.stringify(args, null, 2))
    }
  }))));
};

module.exportDefault(LogEntry);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/d21b1f1f6d3d3a00e6c0d69fd2139583656c8ab2.map
