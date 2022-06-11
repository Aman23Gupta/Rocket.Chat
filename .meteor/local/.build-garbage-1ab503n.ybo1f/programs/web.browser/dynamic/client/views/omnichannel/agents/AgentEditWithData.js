function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/agents/AgentEditWithData.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let FormSkeleton;
module.link("../../../components/Skeleton", {
  FormSkeleton(v) {
    FormSkeleton = v;
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
let AgentEdit;
module.link("./AgentEdit", {
  default(v) {
    AgentEdit = v;
  }

}, 6);

function AgentEditWithData(_ref) {
  let {
    uid,
    reload
  } = _ref;
  const t = useTranslation();
  const {
    value: data,
    phase: state,
    error
  } = useEndpointData("livechat/users/agent/".concat(uid));
  const {
    value: userDepartments,
    phase: userDepartmentsState,
    error: userDepartmentsError
  } = useEndpointData("livechat/agents/".concat(uid, "/departments"));
  const {
    value: availableDepartments,
    phase: availableDepartmentsState,
    error: availableDepartmentsError
  } = useEndpointData('livechat/department');

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
//# sourceMappingURL=/dynamic/client/views/omnichannel/agents/e25c3a82ecf605fdb0c3db5566fa08399451a678.map
