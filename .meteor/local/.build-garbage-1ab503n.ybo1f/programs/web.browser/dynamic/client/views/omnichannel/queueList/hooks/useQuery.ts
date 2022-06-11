function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/queueList/hooks/useQuery.ts                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useQuery: () => useQuery
});
let useMemo;
module.link("react", {
  useMemo(v) {
    useMemo = v;
  }

}, 0);

const sortDir = sortDir => sortDir === 'asc' ? 1 : -1;

const useQuery = (_ref, _ref2) => {
  let {
    servedBy,
    status,
    departmentId,
    itemsPerPage,
    current
  } = _ref;
  let [column, direction] = _ref2;
  return useMemo(() => {
    const query = {
      sort: JSON.stringify({
        [column]: sortDir(direction)
      }),
      count: itemsPerPage,
      offset: current
    };

    if (status !== 'online') {
      query.includeOflineAgents = true;
    }

    if (servedBy) {
      query.agentId = servedBy;
    }

    if (departmentId) {
      query.departmentId = departmentId;
    }

    return query;
  }, [column, direction, itemsPerPage, current, status, servedBy, departmentId]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/queueList/hooks/b680122594080f109fac69ba5d188b0c9620a05c.map
