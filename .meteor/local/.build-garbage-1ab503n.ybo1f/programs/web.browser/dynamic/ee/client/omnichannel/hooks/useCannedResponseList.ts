function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/hooks/useCannedResponseList.ts                                                                //
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
  useCannedResponseList: () => useCannedResponseList
});
let useCallback, useEffect, useState;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  }

}, 0);
let useEndpoint;
module.link("../../../../client/contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 1);
let useScrollableRecordList;
module.link("../../../../client/hooks/lists/useScrollableRecordList", {
  useScrollableRecordList(v) {
    useScrollableRecordList = v;
  }

}, 2);
let useComponentDidUpdate;
module.link("../../../../client/hooks/useComponentDidUpdate", {
  useComponentDidUpdate(v) {
    useComponentDidUpdate = v;
  }

}, 3);
let CannedResponseList;
module.link("../../../../client/lib/lists/CannedResponseList", {
  CannedResponseList(v) {
    CannedResponseList = v;
  }

}, 4);

const useCannedResponseList = options => {
  const [cannedList, setCannedList] = useState(() => new CannedResponseList(options));
  const reload = useCallback(() => setCannedList(new CannedResponseList(options)), [options]);
  useComponentDidUpdate(() => {
    options && reload();
  }, [options, reload]);
  useEffect(() => {
    if (cannedList.options !== options) {
      cannedList.updateFilters(options);
    }
  }, [cannedList, options]);
  const getCannedResponses = useEndpoint('GET', 'canned-responses');
  const getDepartments = useEndpoint('GET', 'livechat/department');
  const fetchData = useCallback(async (start, end) => {
    const {
      cannedResponses,
      total
    } = await getCannedResponses(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, options.filter && {
      text: options.filter
    }), options.type && ['global', 'user'].find(option => option === options.type) && {
      scope: options.type
    }), options.type && !['global', 'user', 'all'].find(option => option === options.type) && {
      scope: 'department',
      departmentId: options.type
    }), {}, {
      offset: start,
      count: end + start
    }));
    const {
      departments
    } = await getDepartments({
      text: ''
    });
    return {
      items: cannedResponses.map(cannedResponse => {
        if (cannedResponse.departmentId) {
          departments.forEach(department => {
            if (cannedResponse.departmentId === department._id) {
              cannedResponse.departmentName = department.name;
            }
          });
        }

        cannedResponse._updatedAt = new Date(cannedResponse._updatedAt);
        cannedResponse._createdAt = new Date(cannedResponse._createdAt);
        return cannedResponse;
      }),
      itemCount: total
    };
  }, [getCannedResponses, getDepartments, options.filter, options.type]);
  const {
    loadMoreItems,
    initialItemCount
  } = useScrollableRecordList(cannedList, fetchData);
  return {
    reload,
    cannedList,
    loadMoreItems,
    initialItemCount
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/hooks/6cccaefde37f5916140d767a4a12bfec8b8553dc.map
