function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useEmbeddedLayout.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useEmbeddedLayout: function () {
    return useEmbeddedLayout;
  }
});
var useQueryStringParameter;
module.link("../contexts/RouterContext", {
  useQueryStringParameter: function (v) {
    useQueryStringParameter = v;
  }
}, 0);

var useEmbeddedLayout = function () {
  return useQueryStringParameter('layout') === 'embedded';
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/7e5739f22a048656fa0738be87e6cf0d2361aa58.map
