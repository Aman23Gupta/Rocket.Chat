function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/SettingSkeleton.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Field, Flex, InputBox, Skeleton;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  Flex: function (v) {
    Flex = v;
  },
  InputBox: function (v) {
    InputBox = v;
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

var SettingSkeleton = function () {
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Flex.Item, {
    align: "stretch"
  }, /*#__PURE__*/React.createElement(Field.Label, null, /*#__PURE__*/React.createElement(Skeleton, {
    width: "25%"
  }))), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(InputBox.Skeleton, null)));
};

module.exportDefault(SettingSkeleton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/855042bd0675e8929c1c6b1b4dc43994044a865c.map
