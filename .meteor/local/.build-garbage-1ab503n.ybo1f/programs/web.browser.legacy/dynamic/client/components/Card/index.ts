function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Card/index.ts                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  DOUBLE_COLUMN_CARD_WIDTH: function () {
    return DOUBLE_COLUMN_CARD_WIDTH;
  }
});
var Body;
module.link("./Body", {
  "default": function (v) {
    Body = v;
  }
}, 0);
var Card;
module.link("./Card", {
  "default": function (v) {
    Card = v;
  }
}, 1);
var CardDivider;
module.link("./CardDivider", {
  "default": function (v) {
    CardDivider = v;
  }
}, 2);
var CardIcon;
module.link("./CardIcon", {
  "default": function (v) {
    CardIcon = v;
  }
}, 3);
var Col;
module.link("./Col", {
  "default": function (v) {
    Col = v;
  }
}, 4);
var ColSection;
module.link("./ColSection", {
  "default": function (v) {
    ColSection = v;
  }
}, 5);
var ColTitle;
module.link("./ColTitle", {
  "default": function (v) {
    ColTitle = v;
  }
}, 6);
var Footer;
module.link("./Footer", {
  "default": function (v) {
    Footer = v;
  }
}, 7);
var Title;
module.link("./Title", {
  "default": function (v) {
    Title = v;
  }
}, 8);
var DOUBLE_COLUMN_CARD_WIDTH = 552;
module.exportDefault(Object.assign(Card, {
  Title: Title,
  Body: Body,
  Col: Object.assign(Col, {
    Title: ColTitle,
    Section: ColSection
  }),
  Footer: Footer,
  Divider: CardDivider,
  Icon: CardIcon
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Card/1688c7da770dbabb9398d16eb71340889e50e824.map
