function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/InfoPanel/RetentionPolicyCallout.tsx                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Callout;
module.link("@rocket.chat/fuselage", {
  Callout(v) {
    Callout = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let useFormattedRelativeTime;
module.link("../../hooks/useFormattedRelativeTime", {
  useFormattedRelativeTime(v) {
    useFormattedRelativeTime = v;
  }

}, 3);

const RetentionPolicyCallout = _ref => {
  let {
    filesOnlyDefault,
    excludePinnedDefault,
    maxAgeDefault
  } = _ref;
  const t = useTranslation();
  const time = useFormattedRelativeTime(maxAgeDefault * 1000 * 60 * 60 * 24);
  return /*#__PURE__*/React.createElement(Callout, {
    type: "warning"
  }, filesOnlyDefault && excludePinnedDefault && /*#__PURE__*/React.createElement("p", null, t('RetentionPolicy_RoomWarning_FilesOnly', {
    time
  })), filesOnlyDefault && !excludePinnedDefault && /*#__PURE__*/React.createElement("p", null, t('RetentionPolicy_RoomWarning_UnpinnedFilesOnly', {
    time
  })), !filesOnlyDefault && excludePinnedDefault && /*#__PURE__*/React.createElement("p", null, t('RetentionPolicy_RoomWarning', {
    time
  })), !filesOnlyDefault && !excludePinnedDefault && /*#__PURE__*/React.createElement("p", null, t('RetentionPolicy_RoomWarning_Unpinned', {
    time
  })));
};

module.exportDefault(RetentionPolicyCallout);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/InfoPanel/98f898eaca44ee4b4bb2fadb25e20128c55ffd9b.map
