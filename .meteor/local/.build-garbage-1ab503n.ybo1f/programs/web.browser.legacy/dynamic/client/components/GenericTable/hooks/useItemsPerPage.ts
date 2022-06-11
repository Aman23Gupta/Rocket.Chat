function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/hooks/useItemsPerPage.ts                                                             //
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
  useItemsPerPage: function () {
    return useItemsPerPage;
  }
});
var useState;
module.link("react", {
  useState: function (v) {
    useState = v;
  }
}, 0);

var useItemsPerPage = function () {
  var itemsPerPageInitialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 25;

  var _useState = useState(itemsPerPageInitialValue),
      _useState2 = _slicedToArray(_useState, 2),
      itemsPerPage = _useState2[0],
      setItemsPerPage = _useState2[1];

  return [itemsPerPage, setItemsPerPage];
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/hooks/36eafc9f7cd43a2102dfc5da20092995c458dc0a.map
