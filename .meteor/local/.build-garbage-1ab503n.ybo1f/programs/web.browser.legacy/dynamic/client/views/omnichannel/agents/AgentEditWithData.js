function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/agents/AgentEditWithData.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var FormSkeleton;
module.link("../../../components/Skeleton", {
  FormSkeleton: function (v) {
    FormSkeleton = v;
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
var AgentEdit;
module.link("./AgentEdit", {
  "default": function (v) {
    AgentEdit = v;
  }
}, 6);

function AgentEditWithData(_ref) {
  var uid = _ref.uid,
      reload = _ref.reload;
  var t = useTranslation();

  var _useEndpointData = useEndpointData("livechat/users/agent/" + uid),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      error = _useEndpointData.error;

  var _useEndpointData2 = useEndpointData("livechat/agents/" + uid + "/departments"),
      userDepartments = _useEndpointData2.value,
      userDepartmentsState = _useEndpointData2.phase,
      userDepartmentsError = _useEndpointData2.error;

  var _useEndpointData3 = useEndpointData('livechat/department'),
      availableDepartments = _useEndpointData3.value,
      availableDepartmentsState = _useEndpointData3.phase,
      availableDepartmentsError = _useEndpointData3.error;

  if ([state, availableDepartmentsState, userDepartmentsState].includes(AsyncStatePhase.LOADING)) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  if (error || userDepartmentsError || availableDepartmentsError || !data || !data.user) {
    return /*#__PURE__*/React.createElement(Box, {
      mbs: "x16"
    }, t('User_not_found'));
  }

  return /*#__PURE__*/React.createElement(AgentEdit, {
    uid: uid,
    data: data,
    userDepartments: userDepartments,
    availableDepartments: availableDepartments,
    reset: reload
  });
}

module.exportDefault(AgentEditWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/agents/84fb4d06b328156fd0a80f15cd11ae3f8c9d136b.map
