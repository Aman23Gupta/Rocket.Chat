function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/InfoPanel/index.ts                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Action;
module.link("./Action", {
  default(v) {
    Action = v;
  }

}, 0);
let ActionGroup;
module.link("./ActionGroup", {
  default(v) {
    ActionGroup = v;
  }

}, 1);
let Avatar;
module.link("./Avatar", {
  default(v) {
    Avatar = v;
  }

}, 2);
let Field;
module.link("./Field", {
  default(v) {
    Field = v;
  }

}, 3);
let InfoPanel;
module.link("./InfoPanel", {
  default(v) {
    InfoPanel = v;
  }

}, 4);
let Label;
module.link("./Label", {
  default(v) {
    Label = v;
  }

}, 5);
let Section;
module.link("./Section", {
  default(v) {
    Section = v;
  }

}, 6);
let Text;
module.link("./Text", {
  default(v) {
    Text = v;
  }

}, 7);
let Title;
module.link("./Title", {
  default(v) {
    Title = v;
  }

}, 8);
module.exportDefault(Object.assign(InfoPanel, {
  Title,
  Label,
  Text,
  Avatar,
  Field,
  Action,
  Section,
  ActionGroup
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/InfoPanel/09908d6e04f4b8507d859b7b9929cd48c5baaced.map
