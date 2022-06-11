function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/channels/useChannelsList.ts                                               //
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
  useChannelsList: () => useChannelsList
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

const useChannelsList = _ref => {
  let {
    period,
    offset,
    count
  } = _ref;
  return useQuery(['admin/engagement-dashboard/channels/list', {
    period,
    offset,
    count
  }], async () => {
    const {
      start,
      end
    } = getPeriodRange(period);
    const response = await getFromRestApi('/v1/engagement-dashboard/channels/list')({
      start: start.toISOString(),
      end: end.toISOString(),
      offset,
      count
    });
    return response ? _objectSpread(_objectSpread({}, response), {}, {
      start,
      end
    }) : undefined;
  }, {
    keepPreviousData: true,
    refetchInterval: 5 * 60 * 1000
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/channels/12d65bbd55c10aafc35f644d54b6d6b305920dc0.map
