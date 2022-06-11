function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/queueList/hooks/useQuery.ts                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
module.export({
  useQuery: function () {
    return useQuery;
  }
});
var useMemo;
module.link("react", {
  useMemo: function (v) {
    useMemo = v;
  }
}, 0);

var sortDir = function (sortDir) {
  return sortDir === 'asc' ? 1 : -1;
};

var useQuery = function (_ref, _ref2) {
  var servedBy = _ref.servedBy,
      status = _ref.status,
      departmentId = _ref.departmentId,
      itemsPerPage = _ref.itemsPerPage,
      current = _ref.current;

  var _ref3 = _slicedToArray(_ref2, 2),
      column = _ref3[0],
      direction = _ref3[1];

  return useMemo(function () {
    var _JSON$stringify;

    var query = {
      sort: JSON.stringify((_JSON$stringify = {}, _JSON$stringify[column] = sortDir(direction), _JSON$stringify)),
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/queueList/hooks/27de125cba3cc717f5d253e27fe02c3d6145437a.map
