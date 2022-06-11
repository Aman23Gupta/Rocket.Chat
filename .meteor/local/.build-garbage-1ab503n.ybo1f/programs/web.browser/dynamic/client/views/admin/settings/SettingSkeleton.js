function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/SettingSkeleton.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Field, Flex, InputBox, Skeleton;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  Flex(v) {
    Flex = v;
  },

  InputBox(v) {
    InputBox = v;
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

const SettingSkeleton = () => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Flex.Item, {
  align: "stretch"
}, /*#__PURE__*/React.createElement(Field.Label, null, /*#__PURE__*/React.createElement(Skeleton, {
  width: "25%"
}))), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(InputBox.Skeleton, null)));

module.exportDefault(SettingSkeleton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/4af7a7b2d37cf2c6c2723e1d59ff0627c51a492a.map
