function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Card/index.ts                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  DOUBLE_COLUMN_CARD_WIDTH: () => DOUBLE_COLUMN_CARD_WIDTH
});
let Body;
module.link("./Body", {
  default(v) {
    Body = v;
  }

}, 0);
let Card;
module.link("./Card", {
  default(v) {
    Card = v;
  }

}, 1);
let CardDivider;
module.link("./CardDivider", {
  default(v) {
    CardDivider = v;
  }

}, 2);
let CardIcon;
module.link("./CardIcon", {
  default(v) {
    CardIcon = v;
  }

}, 3);
let Col;
module.link("./Col", {
  default(v) {
    Col = v;
  }

}, 4);
let ColSection;
module.link("./ColSection", {
  default(v) {
    ColSection = v;
  }

}, 5);
let ColTitle;
module.link("./ColTitle", {
  default(v) {
    ColTitle = v;
  }

}, 6);
let Footer;
module.link("./Footer", {
  default(v) {
    Footer = v;
  }

}, 7);
let Title;
module.link("./Title", {
  default(v) {
    Title = v;
  }

}, 8);
const DOUBLE_COLUMN_CARD_WIDTH = 552;
module.exportDefault(Object.assign(Card, {
  Title,
  Body,
  Col: Object.assign(Col, {
    Title: ColTitle,
    Section: ColSection
  }),
  Footer,
  Divider: CardDivider,
  Icon: CardIcon
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Card/32c9f2f0fd8b17fdada669dbf4cf33193a4103ab.map
