function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/cannedResponses/CannedResponseEditWithData.tsx                                                //
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
let CannedResponseEditWithDepartmentData;
module.link("./CannedResponseEditWithDepartmentData", {
  default(v) {
    CannedResponseEditWithDepartmentData = v;
  }

}, 7);

const CannedResponseEditWithData = _ref => {
  var _data$cannedResponse;

  let {
    cannedResponseId,
    reload,
    totalDataReload
  } = _ref;
  const {
    value: data,
    phase: state,
    error
  } = useEndpointData("canned-responses/".concat(cannedResponseId));
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/cannedResponses/cfa6e93423f25bb359d50470780a8241d3c89005.map
