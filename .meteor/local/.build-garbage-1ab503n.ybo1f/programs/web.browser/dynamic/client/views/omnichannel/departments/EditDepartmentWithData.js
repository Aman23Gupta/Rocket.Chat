function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/departments/EditDepartmentWithData.js                                                      //
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
let EditDepartment;
module.link("./EditDepartment", {
  default(v) {
    EditDepartment = v;
  }

}, 6);
let EditDepartmentWithAllowedForwardData;
module.link("./EditDepartmentWithAllowedForwardData", {
  default(v) {
    EditDepartmentWithAllowedForwardData = v;
  }

}, 7);
const param = {
  onlyMyDepartments: true
};

function EditDepartmentWithData(_ref) {
  let {
    id,
    reload,
    title
  } = _ref;
  const t = useTranslation();
  const {
    value: data,
    phase: state,
    error
  } = useEndpointData("livechat/department/".concat(id), param);

  if ([state].includes(AsyncStatePhase.LOADING)) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  if (error || id && !(data !== null && data !== void 0 && data.department)) {
    return /*#__PURE__*/React.createElement(Box, {
      mbs: "x16"
    }, t('Department_not_found'));
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, data && data.department && data.department.departmentsAllowedToForward && data.department.departmentsAllowedToForward.length > 0 ? /*#__PURE__*/React.createElement(EditDepartmentWithAllowedForwardData, {
    id: id,
    data: data,
    reload: reload,
    title: title
  }) : /*#__PURE__*/React.createElement(EditDepartment, {
    id: id,
    data: data,
    reload: reload,
    title: title
  }));
}

module.exportDefault(EditDepartmentWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/departments/455b9f4f6aaf70b3649f6281c976b65f99122f5e.map
