function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Sidebar/index.ts                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Content;
module.link("./Content", {
  default(v) {
    Content = v;
  }

}, 0);
let GenericItem;
module.link("./GenericItem", {
  default(v) {
    GenericItem = v;
  }

}, 1);
let Header;
module.link("./Header", {
  default(v) {
    Header = v;
  }

}, 2);
let ItemsAssembler;
module.link("./ItemsAssembler", {
  default(v) {
    ItemsAssembler = v;
  }

}, 3);
let ListItem;
module.link("./ListItem", {
  default(v) {
    ListItem = v;
  }

}, 4);
let NavigationItem;
module.link("./NavigationItem", {
  default(v) {
    NavigationItem = v;
  }

}, 5);
let Sidebar;
module.link("./Sidebar", {
  default(v) {
    Sidebar = v;
  }

}, 6);
module.exportDefault(Object.assign(Sidebar, {
  Content,
  Header,
  GenericItem,
  NavigationItem,
  ItemsAssembler,
  ListItem
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Sidebar/6c03c4b54a183b7436e3f7561f94629111108928.map
