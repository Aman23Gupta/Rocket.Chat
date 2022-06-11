function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/cannedResponses/CannedResponseEditWithDepartmentData.tsx                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Callout;
module.link("@rocket.chat/fuselage", {
  Callout(v) {
    Callout = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let FormSkeleton;
module.link("../../../../client/components/Skeleton", {
  FormSkeleton(v) {
    FormSkeleton = v;
  }

}, 2);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let AsyncStatePhase;
module.link("../../../../client/hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 4);
let useEndpointData;
module.link("../../../../client/hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 5);
let CannedResponseEdit;
module.link("./CannedResponseEdit", {
  default(v) {
    CannedResponseEdit = v;
  }

}, 6);

const CannedResponseEditWithData = _ref => {
  let {
    data,
    reload,
    totalDataReload
  } = _ref;
  const departmentId = useMemo(() => {
    var _data$cannedResponse;

    return data === null || data === void 0 ? void 0 : (_data$cannedResponse = data.cannedResponse) === null || _data$cannedResponse === void 0 ? void 0 : _data$cannedResponse.departmentId;
  }, [data]);
  const {
    value: departmentData,
    phase: state,
    error
  } = useEndpointData("livechat/department/".concat(departmentId));
  const t = useTranslation();

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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/cannedResponses/31f0db9409f4e96217811502d5ee16539f0630c4.map
