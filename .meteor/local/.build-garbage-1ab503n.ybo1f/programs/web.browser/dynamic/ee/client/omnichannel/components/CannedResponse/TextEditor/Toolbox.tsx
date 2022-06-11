function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/CannedResponse/TextEditor/Toolbox.tsx                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let IconButton;
module.link("./IconButton", {
  default(v) {
    IconButton = v;
  }

}, 2);
let TextButton;
module.link("./TextButton", {
  default(v) {
    TextButton = v;
  }

}, 3);

const Toolbox = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    w: "full",
    justifyContent: "space-between",
    alignItems: "center"
  }, children));
};

module.exportDefault(Object.assign(Toolbox, {
  IconButton,
  TextButton
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/CannedResponse/TextEditor/d5ce0b93b36964f09de833785a2794fa7ecd9297.map
