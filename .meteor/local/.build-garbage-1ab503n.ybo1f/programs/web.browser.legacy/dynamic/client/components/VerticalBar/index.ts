function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/index.ts                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var VerticalBar;
module.link("./VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 0);
var VerticalBarAction;
module.link("./VerticalBarAction", {
  "default": function (v) {
    VerticalBarAction = v;
  }
}, 1);
var VerticalBarActionBack;
module.link("./VerticalBarActionBack", {
  "default": function (v) {
    VerticalBarActionBack = v;
  }
}, 2);
var VerticalBarActions;
module.link("./VerticalBarActions", {
  "default": function (v) {
    VerticalBarActions = v;
  }
}, 3);
var VerticalBarButton;
module.link("./VerticalBarButton", {
  "default": function (v) {
    VerticalBarButton = v;
  }
}, 4);
var VerticalBarClose;
module.link("./VerticalBarClose", {
  "default": function (v) {
    VerticalBarClose = v;
  }
}, 5);
var VerticalBarContent;
module.link("./VerticalBarContent", {
  "default": function (v) {
    VerticalBarContent = v;
  }
}, 6);
var VerticalBarFooter;
module.link("./VerticalBarFooter", {
  "default": function (v) {
    VerticalBarFooter = v;
  }
}, 7);
var VerticalBarHeader;
module.link("./VerticalBarHeader", {
  "default": function (v) {
    VerticalBarHeader = v;
  }
}, 8);
var VerticalBarIcon;
module.link("./VerticalBarIcon", {
  "default": function (v) {
    VerticalBarIcon = v;
  }
}, 9);
var VerticalBarInnerContent;
module.link("./VerticalBarInnerContent", {
  "default": function (v) {
    VerticalBarInnerContent = v;
  }
}, 10);
var VerticalBarScrollableContent;
module.link("./VerticalBarScrollableContent", {
  "default": function (v) {
    VerticalBarScrollableContent = v;
  }
}, 11);
var VerticalBarSkeleton;
module.link("./VerticalBarSkeleton", {
  "default": function (v) {
    VerticalBarSkeleton = v;
  }
}, 12);
var VerticalBarText;
module.link("./VerticalBarText", {
  "default": function (v) {
    VerticalBarText = v;
  }
}, 13);
module.exportDefault(Object.assign(VerticalBar, {
  InnerContent: VerticalBarInnerContent,
  Icon: VerticalBarIcon,
  Footer: VerticalBarFooter,
  Text: VerticalBarText,
  Action: VerticalBarAction,
  Actions: VerticalBarActions,
  Header: VerticalBarHeader,
  Close: VerticalBarClose,
  Content: VerticalBarContent,
  ScrollableContent: VerticalBarScrollableContent,
  Skeleton: VerticalBarSkeleton,
  Button: VerticalBarButton,
  Back: VerticalBarActionBack
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/VerticalBar/9cc37ce4eee7b915e37b89cc7a8437fd5d3c1518.map
