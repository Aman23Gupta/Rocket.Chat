function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/departments/EditDepartmentWithAllowedForwardData.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["data"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
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

function EditDepartmentWithAllowedForwardData(_ref) {
  var data = _ref.data,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();

  var _useEndpointData = useEndpointData('livechat/department.listByIds', useMemo(function () {
    return {
      ids: data && data.department && data.department.departmentsAllowedToForward ? data.department.departmentsAllowedToForward : []
    };
  }, [data])),
      allowedToForwardData = _useEndpointData.value,
      allowedToForwardState = _useEndpointData.phase,
      allowedToForwardError = _useEndpointData.error;

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
//# sourceMappingURL=/dynamic/client/views/omnichannel/departments/cd6fb262d0e218ae1138cd8040a45471e1c238de.map
