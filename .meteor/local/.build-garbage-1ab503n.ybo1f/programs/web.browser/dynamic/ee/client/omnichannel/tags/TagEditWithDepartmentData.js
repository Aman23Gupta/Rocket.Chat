function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/tags/TagEditWithDepartmentData.js                                                             //
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
let Callout;
module.link("@rocket.chat/fuselage", {
  Callout(v) {
    Callout = v;
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
module.link("../../../../client/components/Skeleton", {
  FormSkeleton(v) {
    FormSkeleton = v;
  }

}, 2);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let AsyncStatePhase;
module.link("../../../../client/hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 4);
let useEndpointData;
module.link("../../../../client/hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 5);
let TagEdit;
module.link("./TagEdit", {
  default(v) {
    TagEdit = v;
  }

}, 6);

function TagEditWithDepartmentData(_ref) {
  let {
    data
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const {
    value: currentDepartments,
    phase: currentDepartmentsState,
    error: currentDepartmentsError
  } = useEndpointData('livechat/department.listByIds', useMemo(() => ({
    ids: data && data.departments ? data.departments : []
  }), [data]));

  if ([currentDepartmentsState].includes(AsyncStatePhase.LOADING)) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  if (currentDepartmentsError) {
    return /*#__PURE__*/React.createElement(Callout, {
      m: "x16",
      type: "danger"
    }, t('Not_Available'));
  }

  return /*#__PURE__*/React.createElement(TagEdit, _extends({
    currentDepartments: currentDepartments,
    data: data
  }, props));
}

module.exportDefault(TagEditWithDepartmentData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/tags/59030c27fdef60cefb310399d1ce3009c4fbdf0d.map
