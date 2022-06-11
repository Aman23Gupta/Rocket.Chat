function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/SidebarProvider.tsx                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let menu;
module.link("../../app/ui-utils/client", {
  menu(v) {
    menu = v;
  }

}, 1);
let SidebarContext;
module.link("../contexts/SidebarContext", {
  SidebarContext(v) {
    SidebarContext = v;
  }

}, 2);
let useReactiveValue;
module.link("../hooks/useReactiveValue", {
  useReactiveValue(v) {
    useReactiveValue = v;
  }

}, 3);

const getOpen = () => menu.isOpen();

const setOpen = open => {
  if (typeof open === 'function') {
    open = open(menu.isOpen());
  }

  return open ? menu.open() : menu.close();
};

const SidebarProvider = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(SidebarContext.Provider, {
    children: children,
    value: [useReactiveValue(getOpen), setOpen]
  });
};

module.exportDefault(SidebarProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/308fc09d73f74593a685d982d8580c9cb05921a7.map
