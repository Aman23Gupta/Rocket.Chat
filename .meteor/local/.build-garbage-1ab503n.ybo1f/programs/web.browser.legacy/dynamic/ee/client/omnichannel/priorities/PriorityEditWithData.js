function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/priorities/PriorityEditWithData.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Callout;
module.link("@rocket.chat/fuselage", {
  Callout: function (v) {
    Callout = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var FormSkeleton;
module.link("../../../../client/components/Skeleton", {
  FormSkeleton: function (v) {
    FormSkeleton = v;
  }
}, 2);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var AsyncStatePhase;
module.link("../../../../client/hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 4);
var useEndpointData;
module.link("../../../../client/hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 5);
var PriorityEdit;
module.link("./PriorityEdit", {
  "default": function (v) {
    PriorityEdit = v;
  }
}, 6);

function PriorityEditWithData(_ref) {
  var priorityId = _ref.priorityId,
      reload = _ref.reload;
  var query = useMemo(function () {
    return {
      priorityId: priorityId
    };
  }, [priorityId]);

  var _useEndpointData = useEndpointData('livechat/priorities.getOne', query),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      error = _useEndpointData.error;

  var t = useTranslation();

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  if (error || !data) {
    return /*#__PURE__*/React.createElement(Callout, {
      m: "x16",
      type: "danger"
    }, t('Not_Available'));
  }

  return /*#__PURE__*/React.createElement(PriorityEdit, {
    priorityId: priorityId,
    data: data,
    reload: reload
  });
}

module.exportDefault(PriorityEditWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/priorities/04f57d3e5e11c442fe8044caac7f8f7d6a81fc2e.map
