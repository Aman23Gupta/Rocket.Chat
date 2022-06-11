function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/InfoPanel/RetentionPolicyCallout.tsx                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Callout;
module.link("@rocket.chat/fuselage", {
  Callout: function (v) {
    Callout = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var useFormattedRelativeTime;
module.link("../../hooks/useFormattedRelativeTime", {
  useFormattedRelativeTime: function (v) {
    useFormattedRelativeTime = v;
  }
}, 3);

var RetentionPolicyCallout = function (_ref) {
  var filesOnlyDefault = _ref.filesOnlyDefault,
      excludePinnedDefault = _ref.excludePinnedDefault,
      maxAgeDefault = _ref.maxAgeDefault;
  var t = useTranslation();
  var time = useFormattedRelativeTime(maxAgeDefault * 1000 * 60 * 60 * 24);
  return /*#__PURE__*/React.createElement(Callout, {
    type: "warning"
  }, filesOnlyDefault && excludePinnedDefault && /*#__PURE__*/React.createElement("p", null, t('RetentionPolicy_RoomWarning_FilesOnly', {
    time: time
  })), filesOnlyDefault && !excludePinnedDefault && /*#__PURE__*/React.createElement("p", null, t('RetentionPolicy_RoomWarning_UnpinnedFilesOnly', {
    time: time
  })), !filesOnlyDefault && excludePinnedDefault && /*#__PURE__*/React.createElement("p", null, t('RetentionPolicy_RoomWarning', {
    time: time
  })), !filesOnlyDefault && !excludePinnedDefault && /*#__PURE__*/React.createElement("p", null, t('RetentionPolicy_RoomWarning_Unpinned', {
    time: time
  })));
};

module.exportDefault(RetentionPolicyCallout);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/InfoPanel/9d8d4c77004cdfd09f2380b170a3c4b2cf8eef8a.map
