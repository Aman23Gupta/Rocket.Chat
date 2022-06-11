function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useHighlightedCode.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useHighlightedCode: () => useHighlightedCode
});
let hljs;
module.link("highlight.js", {
  default(v) {
    hljs = v;
  }

}, 0);
let useMemo;
module.link("react", {
  useMemo(v) {
    useMemo = v;
  }

}, 1);

function useHighlightedCode(language, text) {
  return useMemo(() => hljs.highlight(language, text).value, [language, text]);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/6eb9e2e5e0a1a3b55304910ee7ed94829ecef8b4.map
