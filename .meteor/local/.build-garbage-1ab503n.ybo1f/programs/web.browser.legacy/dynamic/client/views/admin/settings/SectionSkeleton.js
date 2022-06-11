function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/SectionSkeleton.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Accordion, Box, FieldGroup, Skeleton;
module.link("@rocket.chat/fuselage", {
  Accordion: function (v) {
    Accordion = v;
  },
  Box: function (v) {
    Box = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  Skeleton: function (v) {
    Skeleton = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var Setting;
module.link("./Setting", {
  "default": function (v) {
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
  }).map(function (_, i) {
    return /*#__PURE__*/React.createElement(Setting.Skeleton, {
      key: i
    });
  })));
}

module.exportDefault(SectionSkeleton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/831924a5c8eb2a1d3048432ca2ff58862ae0cb1e.map
