function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/InfoPanel/index.ts                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Action;
module.link("./Action", {
  "default": function (v) {
    Action = v;
  }
}, 0);
var ActionGroup;
module.link("./ActionGroup", {
  "default": function (v) {
    ActionGroup = v;
  }
}, 1);
var Avatar;
module.link("./Avatar", {
  "default": function (v) {
    Avatar = v;
  }
}, 2);
var Field;
module.link("./Field", {
  "default": function (v) {
    Field = v;
  }
}, 3);
var InfoPanel;
module.link("./InfoPanel", {
  "default": function (v) {
    InfoPanel = v;
  }
}, 4);
var Label;
module.link("./Label", {
  "default": function (v) {
    Label = v;
  }
}, 5);
var Section;
module.link("./Section", {
  "default": function (v) {
    Section = v;
  }
}, 6);
var Text;
module.link("./Text", {
  "default": function (v) {
    Text = v;
  }
}, 7);
var Title;
module.link("./Title", {
  "default": function (v) {
    Title = v;
  }
}, 8);
module.exportDefault(Object.assign(InfoPanel, {
  Title: Title,
  Label: Label,
  Text: Text,
  Avatar: Avatar,
  Field: Field,
  Action: Action,
  Section: Section,
  ActionGroup: ActionGroup
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/InfoPanel/1c7db7cd3a17be43b1e638035ee30b8ce252818c.map
