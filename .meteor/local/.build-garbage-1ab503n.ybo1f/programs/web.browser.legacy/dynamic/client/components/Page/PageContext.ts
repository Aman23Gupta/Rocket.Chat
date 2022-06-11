function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Page/PageContext.ts                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var createContext;
module.link("react", {
  createContext: function (v) {
    createContext = v;
  }
}, 0);
var PageContext = /*#__PURE__*/createContext([false, function () {
  return undefined;
}]);
module.exportDefault(PageContext);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Page/5abcdfabf937625c316872011b4a251bdec34f7e.map
