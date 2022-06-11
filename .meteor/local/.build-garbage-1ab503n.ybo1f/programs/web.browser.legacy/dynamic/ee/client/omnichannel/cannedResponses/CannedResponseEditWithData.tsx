function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/cannedResponses/CannedResponseEditWithData.tsx                                                //
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
var CannedResponseEdit;
module.link("./CannedResponseEdit", {
  "default": function (v) {
    CannedResponseEdit = v;
  }
}, 6);
var CannedResponseEditWithDepartmentData;
module.link("./CannedResponseEditWithDepartmentData", {
  "default": function (v) {
    CannedResponseEditWithDepartmentData = v;
  }
}, 7);

var CannedResponseEditWithData = function (_ref) {
  var _data$cannedResponse;

  var cannedResponseId = _ref.cannedResponseId,
      reload = _ref.reload,
      totalDataReload = _ref.totalDataReload;

  var _useEndpointData = useEndpointData("canned-responses/" + cannedResponseId),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      error = _useEndpointData.error;

  var t = useTranslation();

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  if (error) {
    return /*#__PURE__*/React.createElement(Callout, {
      m: "x16",
      type: "danger"
    }, t('Not_Available'));
  }

  if ((data === null || data === void 0 ? void 0 : (_data$cannedResponse = data.cannedResponse) === null || _data$cannedResponse === void 0 ? void 0 : _data$cannedResponse.scope) === 'department') {
    return /*#__PURE__*/React.createElement(CannedResponseEditWithDepartmentData, {
      data: data,
      reload: reload,
      totalDataReload: totalDataReload
    });
  }

  return /*#__PURE__*/React.createElement(CannedResponseEdit, {
    data: data,
    reload: reload,
    totalDataReload: totalDataReload
  });
};

module.exportDefault(CannedResponseEditWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/cannedResponses/ed65d0fa463dc2fbb5e4c2ed4e19300a519a9023.map
