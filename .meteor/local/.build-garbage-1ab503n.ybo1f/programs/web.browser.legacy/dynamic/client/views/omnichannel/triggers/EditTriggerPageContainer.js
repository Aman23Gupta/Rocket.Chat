function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/triggers/EditTriggerPageContainer.js                                                       //
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
var PageSkeleton;
module.link("../../../components/PageSkeleton", {
  "default": function (v) {
    PageSkeleton = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 4);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 5);
var EditTriggerPage;
module.link("./EditTriggerPage", {
  "default": function (v) {
    EditTriggerPage = v;
  }
}, 6);

var EditTriggerPageContainer = function (_ref) {
  var id = _ref.id,
      onSave = _ref.onSave;
  var t = useTranslation();

  var _useEndpointData = useEndpointData("livechat/triggers/" + id),
      data = _useEndpointData.value,
      state = _useEndpointData.phase;

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
//# sourceMappingURL=/dynamic/client/views/omnichannel/triggers/16d6351c9efed8282ef944397a142e61d1a6cc77.map
