function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/hooks/useTemplateByViewMode.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useTemplateByViewMode: () => useTemplateByViewMode
});
let useMemo;
module.link("react", {
  useMemo(v) {
    useMemo = v;
  }

}, 0);
let useUserPreference;
module.link("../../contexts/UserContext", {
  useUserPreference(v) {
    useUserPreference = v;
  }

}, 1);
let Condensed;
module.link("../Item/Condensed", {
  default(v) {
    Condensed = v;
  }

}, 2);
let Extended;
module.link("../Item/Extended", {
  default(v) {
    Extended = v;
  }

}, 3);
let Medium;
module.link("../Item/Medium", {
  default(v) {
    Medium = v;
  }

}, 4);

const useTemplateByViewMode = () => {
  const sidebarViewMode = useUserPreference('sidebarViewMode');
  return useMemo(() => {
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
//# sourceMappingURL=/dynamic/client/sidebar/hooks/54a383edc789cd845b99611ddf675e2d995a99ce.map
