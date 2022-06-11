function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/index.ts                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let VerticalBar;
module.link("./VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 0);
let VerticalBarAction;
module.link("./VerticalBarAction", {
  default(v) {
    VerticalBarAction = v;
  }

}, 1);
let VerticalBarActionBack;
module.link("./VerticalBarActionBack", {
  default(v) {
    VerticalBarActionBack = v;
  }

}, 2);
let VerticalBarActions;
module.link("./VerticalBarActions", {
  default(v) {
    VerticalBarActions = v;
  }

}, 3);
let VerticalBarButton;
module.link("./VerticalBarButton", {
  default(v) {
    VerticalBarButton = v;
  }

}, 4);
let VerticalBarClose;
module.link("./VerticalBarClose", {
  default(v) {
    VerticalBarClose = v;
  }

}, 5);
let VerticalBarContent;
module.link("./VerticalBarContent", {
  default(v) {
    VerticalBarContent = v;
  }

}, 6);
let VerticalBarFooter;
module.link("./VerticalBarFooter", {
  default(v) {
    VerticalBarFooter = v;
  }

}, 7);
let VerticalBarHeader;
module.link("./VerticalBarHeader", {
  default(v) {
    VerticalBarHeader = v;
  }

}, 8);
let VerticalBarIcon;
module.link("./VerticalBarIcon", {
  default(v) {
    VerticalBarIcon = v;
  }

}, 9);
let VerticalBarInnerContent;
module.link("./VerticalBarInnerContent", {
  default(v) {
    VerticalBarInnerContent = v;
  }

}, 10);
let VerticalBarScrollableContent;
module.link("./VerticalBarScrollableContent", {
  default(v) {
    VerticalBarScrollableContent = v;
  }

}, 11);
let VerticalBarSkeleton;
module.link("./VerticalBarSkeleton", {
  default(v) {
    VerticalBarSkeleton = v;
  }

}, 12);
let VerticalBarText;
module.link("./VerticalBarText", {
  default(v) {
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
//# sourceMappingURL=/dynamic/client/components/VerticalBar/37ec460843b577c7df261e4f285632d746b0b699.map
