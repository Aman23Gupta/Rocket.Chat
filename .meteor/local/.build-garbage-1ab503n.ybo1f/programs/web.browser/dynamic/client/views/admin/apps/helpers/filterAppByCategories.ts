function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/helpers/filterAppByCategories.ts                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  filterAppByCategories: () => filterAppByCategories
});

const filterAppByCategories = (app, categories) => !app.categories || categories.length === 0 || app.categories.some(c => categories.includes(c));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/helpers/7e6ad25e3137a1a918866af5c23b5f1d85ee8e80.map
