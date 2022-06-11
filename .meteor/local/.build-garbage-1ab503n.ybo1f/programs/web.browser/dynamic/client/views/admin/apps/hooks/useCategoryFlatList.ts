function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/hooks/useCategoryFlatList.ts                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useCategoryFlatList: () => useCategoryFlatList
});
let useMemo;
module.link("react", {
  useMemo(v) {
    useMemo = v;
  }

}, 0);

const useCategoryFlatList = data => useMemo(() => data.flatMap(group => group.items).filter(_ref => {
  let {
    id
  } = _ref;
  return id !== 'all';
}), [data]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/hooks/c6beee749e8e41e90b7970901618b77037ae9873.map
