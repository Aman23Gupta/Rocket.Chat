function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/LogEntry.tsx                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box;
module.link("@rocket.chat/fuselage", {
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
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let useHighlightedCode;
module.link("../../../hooks/useHighlightedCode", {
  useHighlightedCode(v) {
    useHighlightedCode = v;
  }

}, 3);

const LogEntry = _ref => {
  let {
    severity,
    timestamp,
    caller,
    args
  } = _ref;
  const t = useTranslation();
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
//# sourceMappingURL=/dynamic/client/views/admin/apps/7e6f363c7edf67f2beb49abe3293a8b281d8d18e.map
