function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/units/UnitEditWithData.tsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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
let UnitEdit;
module.link("./UnitEdit", {
  default(v) {
    UnitEdit = v;
  }

}, 6);

const UnitEditWithData = function UnitEditWithData(_ref) {
  let {
    unitId,
    reload,
    title
  } = _ref;
  const query = useMemo(() => ({
    unitId
  }), [unitId]);
  const {
    value: data,
    phase: state,
    error
  } = useEndpointData('livechat/units.getOne', query);
  const {
    value: unitMonitors,
    phase: unitMonitorsState,
    error: unitMonitorsError
  } = useEndpointData('livechat/unitMonitors.list', query);
  const {
    value: unitDepartments,
    phase: unitDepartmentsState,
    error: unitDepartmentsError
  } = useEndpointData("livechat/departments.by-unit/".concat(unitId));
  const t = useTranslation();

  if ([state, unitMonitorsState, unitDepartmentsState].includes(AsyncStatePhase.LOADING)) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  if (error || unitMonitorsError || unitDepartmentsError) {
    return /*#__PURE__*/React.createElement(Callout, {
      m: "x16",
      type: "danger"
    }, t('Not_Available'));
  }

  return /*#__PURE__*/React.createElement(UnitEdit, {
    title: title,
    unitId: unitId,
    data: data,
    unitMonitors: unitMonitors,
    unitDepartments: unitDepartments,
    reload: reload,
    isNew: false
  });
};

module.exportDefault(UnitEditWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/units/8baa65ad6eaf24bcc3d1cad6508c318d21d01a5d.map
