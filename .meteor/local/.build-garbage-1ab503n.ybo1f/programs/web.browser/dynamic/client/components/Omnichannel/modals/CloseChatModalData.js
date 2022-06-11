function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Omnichannel/modals/CloseChatModalData.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 1);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 2);
let FormSkeleton;
module.link("../Skeleton", {
  FormSkeleton(v) {
    FormSkeleton = v;
  }

}, 3);
let CloseChatModal;
module.link("./CloseChatModal", {
  default(v) {
    CloseChatModal = v;
  }

}, 4);

const CloseChatModalData = _ref => {
  let {
    departmentId,
    onCancel,
    onConfirm
  } = _ref;
  const {
    value: data,
    phase: state
  } = useEndpointData("livechat/department/".concat(departmentId, "?includeAgents=false"));

  if ([state].includes(AsyncStatePhase.LOADING)) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  const {
    department
  } = data || {};
  return /*#__PURE__*/React.createElement(CloseChatModal, {
    onCancel: onCancel,
    onConfirm: onConfirm,
    department: department
  });
};

module.exportDefault(CloseChatModalData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Omnichannel/modals/a921a160794719a11182917841c2bb8ca060343b.map
