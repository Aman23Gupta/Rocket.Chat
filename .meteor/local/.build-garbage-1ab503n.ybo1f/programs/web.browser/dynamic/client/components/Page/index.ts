function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Page/index.ts                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Page;
module.link("./Page", {
  default(v) {
    Page = v;
  }

}, 0);
let PageContent;
module.link("./PageContent", {
  default(v) {
    PageContent = v;
  }

}, 1);
let PageHeader;
module.link("./PageHeader", {
  default(v) {
    PageHeader = v;
  }

}, 2);
let PageScrollableContent;
module.link("./PageScrollableContent", {
  default(v) {
    PageScrollableContent = v;
  }

}, 3);
let PageScrollableContentWithShadow;
module.link("./PageScrollableContentWithShadow", {
  default(v) {
    PageScrollableContentWithShadow = v;
  }

}, 4);
module.exportDefault(Object.assign(Page, {
  Header: PageHeader,
  Content: PageContent,
  ScrollableContent: PageScrollableContent,
  ScrollableContentWithShadow: PageScrollableContentWithShadow
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Page/ebeeacb5aaeb7f7cd2dc90f6dd7740cfb9a54837.map
