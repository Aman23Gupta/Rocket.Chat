function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Omnichannel/modals/CloseChatModalData.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 1);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 2);
var FormSkeleton;
module.link("../Skeleton", {
  FormSkeleton: function (v) {
    FormSkeleton = v;
  }
}, 3);
var CloseChatModal;
module.link("./CloseChatModal", {
  "default": function (v) {
    CloseChatModal = v;
  }
}, 4);

var CloseChatModalData = function (_ref) {
  var departmentId = _ref.departmentId,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm;

  var _useEndpointData = useEndpointData("livechat/department/" + departmentId + "?includeAgents=false"),
      data = _useEndpointData.value,
      state = _useEndpointData.phase;

  if ([state].includes(AsyncStatePhase.LOADING)) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  var _ref2 = data || {},
      department = _ref2.department;

  return /*#__PURE__*/React.createElement(CloseChatModal, {
    onCancel: onCancel,
    onConfirm: onConfirm,
    department: department
  });
};

module.exportDefault(CloseChatModalData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Omnichannel/modals/fd1fcd938df7677b5a6cc5b9441c0ec8f5a843d8.map
