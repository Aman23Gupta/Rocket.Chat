function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/users/useWeeklyChatActivity.ts                                            //
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
  useWeeklyChatActivity: () => useWeeklyChatActivity
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

const useWeeklyChatActivity = _ref => {
  let {
    displacement,
    utc
  } = _ref;
  return useQuery(['admin/engagement-dashboard/users/weekly-chat-activity', {
    displacement,
    utc
  }], async () => {
    const day = (utc ? moment.utc().endOf('day') : moment().endOf('day')).subtract(displacement, 'weeks').toDate();
    const response = await getFromRestApi('/v1/engagement-dashboard/users/chat-busier/weekly-data')({
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/users/3919107b854a8194c8aaf0494e9f768e777af518.map
