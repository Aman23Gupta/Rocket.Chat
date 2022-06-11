function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/departments/EditDepartmentWithData.js                                                      //
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
var EditDepartment;
module.link("./EditDepartment", {
  "default": function (v) {
    EditDepartment = v;
  }
}, 6);
var EditDepartmentWithAllowedForwardData;
module.link("./EditDepartmentWithAllowedForwardData", {
  "default": function (v) {
    EditDepartmentWithAllowedForwardData = v;
  }
}, 7);
var param = {
  onlyMyDepartments: true
};

function EditDepartmentWithData(_ref) {
  var id = _ref.id,
      reload = _ref.reload,
      title = _ref.title;
  var t = useTranslation();

  var _useEndpointData = useEndpointData("livechat/department/" + id, param),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      error = _useEndpointData.error;

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
//# sourceMappingURL=/dynamic/client/views/omnichannel/departments/235968e36c7560280e993fc943eab1757f1571a1.map
