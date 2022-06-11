function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/hooks/useSort.ts                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useSort: () => useSort
});
let useCallback, useState;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  }

}, 0);

const useSort = function (by) {
  let initialDirection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';
  const [sort, _setSort] = useState(() => [by, initialDirection]);
  const setSort = useCallback((id, direction) => {
    _setSort(_ref => {
      let [sortBy, sortDirection] = _ref;

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
    setSort
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/hooks/5ca166a5678571b21d77eafaaaebe1aaaab8fc71.map
