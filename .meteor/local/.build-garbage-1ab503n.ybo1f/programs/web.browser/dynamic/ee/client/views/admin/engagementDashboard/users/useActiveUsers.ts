function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/users/useActiveUsers.ts                                                   //
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
  useActiveUsers: () => useActiveUsers
});
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 0);
let useQuery;
module.link("react-query", {
  useQuery(v) {
    useQuery = v;
  }

}, 1);
let getFromRestApi;
module.link("../../../../lib/getFromRestApi", {
  getFromRestApi(v) {
    getFromRestApi = v;
  }

}, 2);
let getPeriodRange;
module.link("../data/periods", {
  getPeriodRange(v) {
    getPeriodRange = v;
  }

}, 3);

const useActiveUsers = _ref => {
  let {
    utc
  } = _ref;
  return useQuery(['admin/engagement-dashboard/users/active', {
    utc
  }], async () => {
    const {
      start,
      end
    } = getPeriodRange('last 30 days', utc);
    const response = await getFromRestApi('/v1/engagement-dashboard/users/active-users')({
      start: (utc ? moment.utc(start) : moment(start)).subtract(29, 'days').toISOString(),
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/users/719860e51c5954984a015537ca60330df4f83182.map
