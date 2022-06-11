function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/contextualBar/DepartmentField.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 1);
var AsyncStatePhase;
module.link("../../../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 2);
var useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 3);
var Field;
module.link("../../../components/Field", {
  "default": function (v) {
    Field = v;
  }
}, 4);
var Info;
module.link("../../../components/Info", {
  "default": function (v) {
    Info = v;
  }
}, 5);
var Label;
module.link("../../../components/Label", {
  "default": function (v) {
    Label = v;
  }
}, 6);
var FormSkeleton;
module.link("../../Skeleton", {
  FormSkeleton: function (v) {
    FormSkeleton = v;
  }
}, 7);

var DepartmentField = function (_ref) {
  var departmentId = _ref.departmentId;
  var t = useTranslation();

  var _useEndpointData = useEndpointData("livechat/department/" + departmentId),
      data = _useEndpointData.value,
      state = _useEndpointData.phase;

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  var _ref2 = data || {
    department: {}
  },
      _ref2$department = _ref2.department;

  _ref2$department = _ref2$department === void 0 ? {} : _ref2$department;
  var name = _ref2$department.name;
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Department')), /*#__PURE__*/React.createElement(Info, null, name || t('Department_not_found')));
};

module.exportDefault(DepartmentField);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/contextualBar/d3e2e99c8d5d690b0e9f23975b8c9e6c9d320058.map
