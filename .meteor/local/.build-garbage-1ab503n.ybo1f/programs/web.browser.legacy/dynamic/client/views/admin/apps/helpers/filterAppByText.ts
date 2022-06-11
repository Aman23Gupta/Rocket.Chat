function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/helpers/filterAppByText.ts                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  filterAppByText: function () {
    return filterAppByText;
  }
});

var filterAppByText = function (name, text) {
  return name.toLowerCase().indexOf(text.toLowerCase()) > -1;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/helpers/6299ee1927750eac213a7c20e70c87f35c7daa85.map
