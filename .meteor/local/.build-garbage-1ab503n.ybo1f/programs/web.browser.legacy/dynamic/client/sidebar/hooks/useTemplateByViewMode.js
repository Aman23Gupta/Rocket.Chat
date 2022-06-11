function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/hooks/useTemplateByViewMode.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useTemplateByViewMode: function () {
    return useTemplateByViewMode;
  }
});
var useMemo;
module.link("react", {
  useMemo: function (v) {
    useMemo = v;
  }
}, 0);
var useUserPreference;
module.link("../../contexts/UserContext", {
  useUserPreference: function (v) {
    useUserPreference = v;
  }
}, 1);
var Condensed;
module.link("../Item/Condensed", {
  "default": function (v) {
    Condensed = v;
  }
}, 2);
var Extended;
module.link("../Item/Extended", {
  "default": function (v) {
    Extended = v;
  }
}, 3);
var Medium;
module.link("../Item/Medium", {
  "default": function (v) {
    Medium = v;
  }
}, 4);

var useTemplateByViewMode = function () {
  var sidebarViewMode = useUserPreference('sidebarViewMode');
  return useMemo(function () {
    switch (sidebarViewMode) {
      case 'extended':
        return Extended;

      case 'medium':
        return Medium;

      case 'condensed':
      default:
        return Condensed;
    }
  }, [sidebarViewMode]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/hooks/f649a1902e22f91775d8499e0247eb58113c9c85.map
