function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/helpers/filterAppByCategories.ts                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  filterAppByCategories: function () {
    return filterAppByCategories;
  }
});

var filterAppByCategories = function (app, categories) {
  return !app.categories || categories.length === 0 || app.categories.some(function (c) {
    return categories.includes(c);
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/helpers/13364f9bc153c5335e88eb17db3a3c71241e5b61.map
