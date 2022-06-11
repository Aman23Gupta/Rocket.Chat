function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/departments/EditDepartmentWithAllowedForwardData.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["data"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
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
let EditDepartment;
module.link("./EditDepartment", {
  default(v) {
    EditDepartment = v;
  }

}, 6);

function EditDepartmentWithAllowedForwardData(_ref) {
  let {
    data
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const {
    value: allowedToForwardData,
    phase: allowedToForwardState,
    error: allowedToForwardError
  } = useEndpointData('livechat/department.listByIds', useMemo(() => ({
    ids: data && data.department && data.department.departmentsAllowedToForward ? data.department.departmentsAllowedToForward : []
  }), [data]));

  if ([allowedToForwardState].includes(AsyncStatePhase.LOADING)) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  if (allowedToForwardError) {
    return /*#__PURE__*/React.createElement(Box, {
      mbs: "x16"
    }, t('Not_Available'));
  }

  return /*#__PURE__*/React.createElement(EditDepartment, _extends({
    data: data,
    allowedToForwardData: allowedToForwardData
  }, props));
}

module.exportDefault(EditDepartmentWithAllowedForwardData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/departments/8c8eeb7b117df8c3d2198ba90b3c026645f279bf.map
