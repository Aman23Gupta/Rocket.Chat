function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/useTooltipHandling.ts                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useTooltipHandling: () => useTooltipHandling
});
let useEffect;
module.link("react", {
  useEffect(v) {
    useEffect = v;
  }

}, 0);
let tooltip;
module.link("../../../app/ui/client/components/tooltip", {
  tooltip(v) {
    tooltip = v;
  }

}, 1);
let useUserPreference;
module.link("../../contexts/UserContext", {
  useUserPreference(v) {
    useUserPreference = v;
  }

}, 2);
let domEvents;
module.link("../../lib/utils/domEvents", {
  "*"(v) {
    domEvents = v;
  }

}, 3);

const useTooltipHandling = () => {
  useEffect(() => {
    tooltip.init();
  }, []);
  const hideUsernames = useUserPreference('hideUsernames', false);
  useEffect(() => {
    if (!hideUsernames) {
      return;
    }

    const detachMouseEnter = domEvents.delegate({
      parent: document.body,
      eventName: 'mouseenter',
      elementSelector: 'button.thumb',
      listener: (event, element) => {
        const username = element instanceof HTMLElement ? element.dataset.username : null;

        if (!username) {
          return;
        }

        event.stopPropagation();
        const span = document.createElement('span');
        span.innerText = username;
        tooltip.showElement(span, element);
      }
    });
    const detachMouseLeave = domEvents.delegate({
      parent: document.body,
      eventName: 'mouseleave',
      elementSelector: 'button.thumb',
      listener: () => {
        tooltip.hide();
      }
    });
    return () => {
      detachMouseEnter();
      detachMouseLeave();
    };
  }, [hideUsernames]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/38344c333a92964bb27c0f6d84ffd93dbbbcd8e2.map
