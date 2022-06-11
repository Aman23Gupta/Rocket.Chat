function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/directory/hooks.js                                                                                     //
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
  useQuery: () => useQuery
});
let useMemo;
module.link("react", {
  useMemo(v) {
    useMemo = v;
  }

}, 0);

function useQuery(_ref, _ref2, type) {
  let {
    text,
    itemsPerPage,
    current
  } = _ref;
  let [column, direction] = _ref2;
  let workspace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'local';
  return useMemo(() => _objectSpread(_objectSpread({
    query: JSON.stringify({
      type,
      text,
      workspace
    }),
    sort: JSON.stringify({
      [column]: direction === 'asc' ? 1 : 0
    })
  }, itemsPerPage && {
    count: itemsPerPage
  }), current && {
    offset: current
  }), [itemsPerPage, current, column, direction, type, workspace, text]);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/directory/776d1483ac0ca3201f22567ecdc01dff4ba66c60.map
