function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/InfoPanel/Avatar.tsx                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Section;
module.link("./Section", {
  default(v) {
    Section = v;
  }

}, 1);

const Avatar = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(Section, {
    display: "flex",
    justifyContent: "center"
  }, children);
};

module.exportDefault(Avatar);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/InfoPanel/171be6f035e76b296c624671092940044db0a67d.map
