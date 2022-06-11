function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/SectionSkeleton.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Accordion, Box, FieldGroup, Skeleton;
module.link("@rocket.chat/fuselage", {
  Accordion(v) {
    Accordion = v;
  },

  Box(v) {
    Box = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  },

  Skeleton(v) {
    Skeleton = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let Setting;
module.link("./Setting", {
  default(v) {
    Setting = v;
  }

}, 2);

function SectionSkeleton() {
  return /*#__PURE__*/React.createElement(Accordion.Item, {
    noncollapsible: true,
    title: /*#__PURE__*/React.createElement(Skeleton, null)
  }, /*#__PURE__*/React.createElement(Box, {
    is: "p",
    color: "hint",
    fontScale: "p2"
  }, /*#__PURE__*/React.createElement(Skeleton, null)), /*#__PURE__*/React.createElement(FieldGroup, null, Array.from({
    length: 10
  }).map((_, i) => /*#__PURE__*/React.createElement(Setting.Skeleton, {
    key: i
  }))));
}

module.exportDefault(SectionSkeleton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/4fcdd3fc923b6a7db812d29eae5b61f1cd8cd046.map
