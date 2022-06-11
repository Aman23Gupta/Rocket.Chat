function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/SidebarProvider.tsx                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var menu;
module.link("../../app/ui-utils/client", {
  menu: function (v) {
    menu = v;
  }
}, 1);
var SidebarContext;
module.link("../contexts/SidebarContext", {
  SidebarContext: function (v) {
    SidebarContext = v;
  }
}, 2);
var useReactiveValue;
module.link("../hooks/useReactiveValue", {
  useReactiveValue: function (v) {
    useReactiveValue = v;
  }
}, 3);

var getOpen = function () {
  return menu.isOpen();
};

var setOpen = function (open) {
  if (typeof open === 'function') {
    open = open(menu.isOpen());
  }

  return open ? menu.open() : menu.close();
};

var SidebarProvider = function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(SidebarContext.Provider, {
    children: children,
    value: [useReactiveValue(getOpen), setOpen]
  });
};

module.exportDefault(SidebarProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/3b1e081c3740988589bdd4bdecdfc412cb47907b.map
