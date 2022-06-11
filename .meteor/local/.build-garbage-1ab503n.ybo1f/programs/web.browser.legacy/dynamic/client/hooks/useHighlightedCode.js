function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useHighlightedCode.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useHighlightedCode: function () {
    return useHighlightedCode;
  }
});
var hljs;
module.link("highlight.js", {
  "default": function (v) {
    hljs = v;
  }
}, 0);
var useMemo;
module.link("react", {
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);

function useHighlightedCode(language, text) {
  return useMemo(function () {
    return hljs.highlight(language, text).value;
  }, [language, text]);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/4b41ab0bee273f6eb6c3dcb8c99b1be2c455dd1f.map
