function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Page/PageContext.ts                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let createContext;
module.link("react", {
  createContext(v) {
    createContext = v;
  }

}, 0);
const PageContext = /*#__PURE__*/createContext([false, () => undefined]);
module.exportDefault(PageContext);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Page/a05945a3375cbfdc505d24faa7c2a60ed0dc0255.map
