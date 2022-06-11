function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/helpers/filterAppByText.ts                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  filterAppByText: () => filterAppByText
});

const filterAppByText = (name, text) => name.toLowerCase().indexOf(text.toLowerCase()) > -1;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/helpers/5643c20a7197a16a5b31e0e7f8522bf5ec4404a0.map
