function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/triggers/EditTriggerPageContainer.js                                                       //
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
let PageSkeleton;
module.link("../../../components/PageSkeleton", {
  default(v) {
    PageSkeleton = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 4);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 5);
let EditTriggerPage;
module.link("./EditTriggerPage", {
  default(v) {
    EditTriggerPage = v;
  }

}, 6);

const EditTriggerPageContainer = _ref => {
  let {
    id,
    onSave
  } = _ref;
  const t = useTranslation();
  const {
    value: data,
    phase: state
  } = useEndpointData("livechat/triggers/".concat(id));

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(PageSkeleton, null);
  }

  if (state === AsyncStatePhase.REJECTED || !(data !== null && data !== void 0 && data.trigger)) {
    return /*#__PURE__*/React.createElement(Callout, null, t('Error'), ": error");
  }

  return /*#__PURE__*/React.createElement(EditTriggerPage, {
    data: data.trigger,
    onSave: onSave
  });
};

module.exportDefault(EditTriggerPageContainer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/triggers/9782fab03cc5f432f45de101da8c35e6a6773735.map
