function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/cannedResponses/CannedResponseEditWithDepartmentData.tsx                                      //
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
var CannedResponseEdit;
module.link("./CannedResponseEdit", {
  "default": function (v) {
    CannedResponseEdit = v;
  }
}, 6);

var CannedResponseEditWithData = function (_ref) {
  var data = _ref.data,
      reload = _ref.reload,
      totalDataReload = _ref.totalDataReload;
  var departmentId = useMemo(function () {
    var _data$cannedResponse;

    return data === null || data === void 0 ? void 0 : (_data$cannedResponse = data.cannedResponse) === null || _data$cannedResponse === void 0 ? void 0 : _data$cannedResponse.departmentId;
  }, [data]);

  var _useEndpointData = useEndpointData("livechat/department/" + departmentId),
      departmentData = _useEndpointData.value,
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

  return /*#__PURE__*/React.createElement(CannedResponseEdit, {
    data: data,
    reload: reload,
    totalDataReload: totalDataReload // @ts-expect-error - Path is inferring union type instead of most-specific one
    ,
    departmentData: departmentData
  });
};

module.exportDefault(CannedResponseEditWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/cannedResponses/4e9df5d874ae1d3e5dac337bfcaa4a76298b6e44.map
