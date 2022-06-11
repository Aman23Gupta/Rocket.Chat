function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/BusinessHoursTableContainer.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Callout;
module.link("@rocket.chat/fuselage", {
  Callout(v) {
    Callout = v;
  }

}, 0);
let React, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let useTranslation;
module.link("../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let AsyncStatePhase;
module.link("../../../client/hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 3);
let useEndpointData;
module.link("../../../client/hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 4);
let BusinessHoursTable;
module.link("./BusinessHoursTable", {
  default(v) {
    BusinessHoursTable = v;
  }

}, 5);

const BusinessHoursTableContainer = () => {
  const t = useTranslation();
  const [params, setParams] = useState(() => ({
    current: 0,
    itemsPerPage: 25,
    text: ''
  }));
  const {
    value: data,
    phase: state,
    reload
  } = useEndpointData("livechat/business-hours.list?count=".concat(params.itemsPerPage, "&offset=").concat(params.current, "&name=").concat(params.text));

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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/9f6c6d66ab4f7c6ce295d707d4b7bd8bf58a1369.map
