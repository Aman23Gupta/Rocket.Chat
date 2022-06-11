function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useEmbeddedLayout.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useEmbeddedLayout: () => useEmbeddedLayout
});
let useQueryStringParameter;
module.link("../contexts/RouterContext", {
  useQueryStringParameter(v) {
    useQueryStringParameter = v;
  }

}, 0);

const useEmbeddedLayout = () => useQueryStringParameter('layout') === 'embedded';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/fdf97036ff374192fda04f9ab191c849fbbecbed.map
