function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Sidebar/index.ts                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Content;
module.link("./Content", {
  "default": function (v) {
    Content = v;
  }
}, 0);
var GenericItem;
module.link("./GenericItem", {
  "default": function (v) {
    GenericItem = v;
  }
}, 1);
var Header;
module.link("./Header", {
  "default": function (v) {
    Header = v;
  }
}, 2);
var ItemsAssembler;
module.link("./ItemsAssembler", {
  "default": function (v) {
    ItemsAssembler = v;
  }
}, 3);
var ListItem;
module.link("./ListItem", {
  "default": function (v) {
    ListItem = v;
  }
}, 4);
var NavigationItem;
module.link("./NavigationItem", {
  "default": function (v) {
    NavigationItem = v;
  }
}, 5);
var Sidebar;
module.link("./Sidebar", {
  "default": function (v) {
    Sidebar = v;
  }
}, 6);
module.exportDefault(Object.assign(Sidebar, {
  Content: Content,
  Header: Header,
  GenericItem: GenericItem,
  NavigationItem: NavigationItem,
  ItemsAssembler: ItemsAssembler,
  ListItem: ListItem
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Sidebar/15edab59337b64bb0278f710c4051dfa90c2e63f.map
