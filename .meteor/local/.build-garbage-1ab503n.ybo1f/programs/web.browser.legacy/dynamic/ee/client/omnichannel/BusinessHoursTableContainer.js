function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/BusinessHoursTableContainer.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Callout;
module.link("@rocket.chat/fuselage", {
  Callout: function (v) {
    Callout = v;
  }
}, 0);
var React, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var useTranslation;
module.link("../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var AsyncStatePhase;
module.link("../../../client/hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 3);
var useEndpointData;
module.link("../../../client/hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 4);
var BusinessHoursTable;
module.link("./BusinessHoursTable", {
  "default": function (v) {
    BusinessHoursTable = v;
  }
}, 5);

var BusinessHoursTableContainer = function () {
  var t = useTranslation();

  var _useState = useState(function () {
    return {
      current: 0,
      itemsPerPage: 25,
      text: ''
    };
  }),
      _useState2 = _slicedToArray(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var _useEndpointData = useEndpointData("livechat/business-hours.list?count=" + params.itemsPerPage + "&offset=" + params.current + "&name=" + params.text),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      reload = _useEndpointData.reload;

  if (state === AsyncStatePhase.REJECTED) {
    return /*#__PURE__*/React.createElement(Callout, null, t('Error'), ": error");
  }

  return /*#__PURE__*/React.createElement(BusinessHoursTable, {
    businessHours: data === null || data === void 0 ? void 0 : data.businessHours,
    totalbusinessHours: data === null || data === void 0 ? void 0 : data.total,
    params: params,
    onChangeParams: setParams,
    reload: reload
  });
};

module.exportDefault(BusinessHoursTableContainer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/668dbf48479fc62209581c140f3d6b3436eeef67.map
