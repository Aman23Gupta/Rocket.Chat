function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/hooks/useItemsPerPage.ts                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useItemsPerPage: () => useItemsPerPage
});
let useState;
module.link("react", {
  useState(v) {
    useState = v;
  }

}, 0);

const useItemsPerPage = function () {
  let itemsPerPageInitialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 25;
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageInitialValue);
  return [itemsPerPage, setItemsPerPage];
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/hooks/8fabbc527308e4e0581488e129b0ff8bea819bc3.map
