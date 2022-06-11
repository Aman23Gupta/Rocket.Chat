function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserCard/Roles.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Info;
module.link("./Info", {
  default(v) {
    Info = v;
  }

}, 1);

const Roles = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(Info, {
    "rcx-user-card__roles": true,
    m: "neg-x2",
    flexWrap: "wrap",
    display: "flex",
    flexShrink: 0
  }, children);
};

module.exportDefault(Roles);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserCard/3aea06ce1e4245a990aa4c9241e68b2b5f6d49ca.map
