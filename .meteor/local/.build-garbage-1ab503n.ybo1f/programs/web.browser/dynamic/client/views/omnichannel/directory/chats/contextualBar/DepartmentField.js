function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/contextualBar/DepartmentField.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 1);
let AsyncStatePhase;
module.link("../../../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 2);
let useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 3);
let Field;
module.link("../../../components/Field", {
  default(v) {
    Field = v;
  }

}, 4);
let Info;
module.link("../../../components/Info", {
  default(v) {
    Info = v;
  }

}, 5);
let Label;
module.link("../../../components/Label", {
  default(v) {
    Label = v;
  }

}, 6);
let FormSkeleton;
module.link("../../Skeleton", {
  FormSkeleton(v) {
    FormSkeleton = v;
  }

}, 7);

const DepartmentField = _ref => {
  let {
    departmentId
  } = _ref;
  const t = useTranslation();
  const {
    value: data,
    phase: state
  } = useEndpointData("livechat/department/".concat(departmentId));

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  const {
    department: {
      name
    } = {}
  } = data || {
    department: {}
  };
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Department')), /*#__PURE__*/React.createElement(Info, null, name || t('Department_not_found')));
};

module.exportDefault(DepartmentField);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/contextualBar/ecb633996eecf35909fa314742f93194eaa66f25.map
