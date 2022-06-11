function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/users/useNewUsers.ts                                                      //
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
  useNewUsers: () => useNewUsers
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

const useNewUsers = _ref => {
  let {
    period,
    utc
  } = _ref;
  return useQuery(['admin/engagement-dashboard/users/new', {
    period,
    utc
  }], async () => {
    const {
      start,
      end
    } = getPeriodRange(period, utc);
    const response = await getFromRestApi('/v1/engagement-dashboard/users/new-users')({
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/users/47623a007b30cfde85a3996e343a30f42b80928e.map
