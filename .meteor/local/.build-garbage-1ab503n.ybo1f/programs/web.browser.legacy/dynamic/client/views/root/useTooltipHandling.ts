function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/useTooltipHandling.ts                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useTooltipHandling: function () {
    return useTooltipHandling;
  }
});
var useEffect;
module.link("react", {
  useEffect: function (v) {
    useEffect = v;
  }
}, 0);
var tooltip;
module.link("../../../app/ui/client/components/tooltip", {
  tooltip: function (v) {
    tooltip = v;
  }
}, 1);
var useUserPreference;
module.link("../../contexts/UserContext", {
  useUserPreference: function (v) {
    useUserPreference = v;
  }
}, 2);
var domEvents;
module.link("../../lib/utils/domEvents", {
  "*": function (v) {
    domEvents = v;
  }
}, 3);

var useTooltipHandling = function () {
  useEffect(function () {
    tooltip.init();
  }, []);
  var hideUsernames = useUserPreference('hideUsernames', false);
  useEffect(function () {
    if (!hideUsernames) {
      return;
    }

    var detachMouseEnter = domEvents.delegate({
      parent: document.body,
      eventName: 'mouseenter',
      elementSelector: 'button.thumb',
      listener: function (event, element) {
        var username = element instanceof HTMLElement ? element.dataset.username : null;

        if (!username) {
          return;
        }

        event.stopPropagation();
        var span = document.createElement('span');
        span.innerText = username;
        tooltip.showElement(span, element);
      }
    });
    var detachMouseLeave = domEvents.delegate({
      parent: document.body,
      eventName: 'mouseleave',
      elementSelector: 'button.thumb',
      listener: function () {
        tooltip.hide();
      }
    });
    return function () {
      detachMouseEnter();
      detachMouseLeave();
    };
  }, [hideUsernames]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/bf037a538ac210ed35548d3682a922bed61c0944.map
