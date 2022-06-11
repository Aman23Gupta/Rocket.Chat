function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/users/useHourlyChatActivity.ts                                            //
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
  useHourlyChatActivity: () => useHourlyChatActivity
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

const useHourlyChatActivity = _ref => {
  let {
    displacement,
    utc
  } = _ref;
  return useQuery(['admin/engagement-dashboard/users/hourly-chat-activity', {
    displacement,
    utc
  }], async () => {
    const day = (utc ? moment.utc().endOf('day') : moment().endOf('day')).subtract(displacement, 'days').toDate();
    const response = await getFromRestApi('/v1/engagement-dashboard/users/chat-busier/hourly-data')({
      start: day.toISOString()
    });
    return response ? _objectSpread(_objectSpread({}, response), {}, {
      day
    }) : undefined;
  }, {
    refetchInterval: 5 * 60 * 1000
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/users/2996303d84a892d526d5e597dd8bcb401f26bb9b.map
