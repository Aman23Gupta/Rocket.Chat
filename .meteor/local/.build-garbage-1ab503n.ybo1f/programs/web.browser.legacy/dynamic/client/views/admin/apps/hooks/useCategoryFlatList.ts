function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/hooks/useCategoryFlatList.ts                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useCategoryFlatList: function () {
    return useCategoryFlatList;
  }
});
var useMemo;
module.link("react", {
  useMemo: function (v) {
    useMemo = v;
  }
}, 0);

var useCategoryFlatList = function (data) {
  return useMemo(function () {
    return data.flatMap(function (group) {
      return group.items;
    }).filter(function (_ref) {
      var id = _ref.id;
      return id !== 'all';
    });
  }, [data]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/hooks/7206a054838fb7669c493af3d901e7a6b7276f33.map
