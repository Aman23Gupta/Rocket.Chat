function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Page/index.ts                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Page;
module.link("./Page", {
  "default": function (v) {
    Page = v;
  }
}, 0);
var PageContent;
module.link("./PageContent", {
  "default": function (v) {
    PageContent = v;
  }
}, 1);
var PageHeader;
module.link("./PageHeader", {
  "default": function (v) {
    PageHeader = v;
  }
}, 2);
var PageScrollableContent;
module.link("./PageScrollableContent", {
  "default": function (v) {
    PageScrollableContent = v;
  }
}, 3);
var PageScrollableContentWithShadow;
module.link("./PageScrollableContentWithShadow", {
  "default": function (v) {
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
//# sourceMappingURL=/dynamic/client/components/Page/3ae44485fc2e9deba6209df2814b33e5fe66549b.map
