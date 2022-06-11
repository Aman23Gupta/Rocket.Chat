function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/units/UnitEditWithData.tsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Callout;
module.link("@rocket.chat/fuselage", {
  Callout: function (v) {
    Callout = v;
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
module.link("../../../../client/components/Skeleton", {
  FormSkeleton: function (v) {
    FormSkeleton = v;
  }
}, 2);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var AsyncStatePhase;
module.link("../../../../client/hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 4);
var useEndpointData;
module.link("../../../../client/hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 5);
var UnitEdit;
module.link("./UnitEdit", {
  "default": function (v) {
    UnitEdit = v;
  }
}, 6);

var UnitEditWithData = function () {
  function UnitEditWithData(_ref) {
    var unitId = _ref.unitId,
        reload = _ref.reload,
        title = _ref.title;
    var query = useMemo(function () {
      return {
        unitId: unitId
      };
    }, [unitId]);

    var _useEndpointData = useEndpointData('livechat/units.getOne', query),
        data = _useEndpointData.value,
        state = _useEndpointData.phase,
        error = _useEndpointData.error;

    var _useEndpointData2 = useEndpointData('livechat/unitMonitors.list', query),
        unitMonitors = _useEndpointData2.value,
        unitMonitorsState = _useEndpointData2.phase,
        unitMonitorsError = _useEndpointData2.error;

    var _useEndpointData3 = useEndpointData("livechat/departments.by-unit/" + unitId),
        unitDepartments = _useEndpointData3.value,
        unitDepartmentsState = _useEndpointData3.phase,
        unitDepartmentsError = _useEndpointData3.error;

    var t = useTranslation();

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
  }

  return UnitEditWithData;
}();

module.exportDefault(UnitEditWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/units/d0f98dd6a16acf654ee2d40af2fb5f2782b88246.map
