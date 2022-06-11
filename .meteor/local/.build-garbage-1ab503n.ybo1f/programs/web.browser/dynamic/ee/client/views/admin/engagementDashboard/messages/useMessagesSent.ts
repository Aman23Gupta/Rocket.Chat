function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/messages/useMessagesSent.ts                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
module.export({
  useMessagesSent: () => useMessagesSent
});
let useQuery;
module.link("react-query", {
  useQuery(v) {
    useQuery = v;
  }

}, 0);
let getFromRestApi;
module.link("../../../../lib/getFromRestApi", {
  getFromRestApi(v) {
    getFromRestApi = v;
  }

}, 1);
let getPeriodRange;
module.link("../data/periods", {
  getPeriodRange(v) {
    getPeriodRange = v;
  }

}, 2);

const useMessagesSent = _ref => {
  let {
    period
  } = _ref;
  return useQuery(['admin/engagement-dashboard/messages/messages-sent', {
    period
  }], async () => {
    const {
      start,
      end
    } = getPeriodRange(period);
    const response = await getFromRestApi('/v1/engagement-dashboard/messages/messages-sent')({
      start: start.toISOString(),
      end: end.toISOString()
    });
    return response ? _objectSpread(_objectSpread({}, response), {}, {
      start,
      end
    }) : undefined;
  }, {
    refetchInterval: 5 * 60 * 1000
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/messages/e65f86ee29ba7910f4cf649599436f431b986b6d.map
