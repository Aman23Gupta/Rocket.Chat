function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/hooks/useSort.ts                                                                     //
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
  useSort: function () {
    return useSort;
  }
});
var useCallback, useState;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 0);

var useSort = function (by) {
  var initialDirection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';

  var _useState = useState(function () {
    return [by, initialDirection];
  }),
      _useState2 = _slicedToArray(_useState, 2),
      sort = _useState2[0],
      _setSort = _useState2[1];

  var setSort = useCallback(function (id, direction) {
    _setSort(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          sortBy = _ref2[0],
          sortDirection = _ref2[1];

      if (direction) {
        return [id, direction];
      }

      if (sortBy === id) {
        return [id, sortDirection === 'asc' ? 'desc' : 'asc'];
      }

      return [id, 'asc'];
    });
  }, []);
  return {
    sortBy: sort[0],
    sortDirection: sort[1],
    setSort: setSort
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/hooks/b572c48063b03cc0c23f17d673c4c33447fed77e.map
