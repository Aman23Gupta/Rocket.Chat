function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Card/CardDivider.tsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Divider;
module.link("@rocket.chat/fuselage", {
  Divider(v) {
    Divider = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

const CardDivider = () => /*#__PURE__*/React.createElement(Divider, {
  width: "x1",
  mi: "x24",
  mb: "none",
  alignSelf: "stretch"
});

module.exportDefault(CardDivider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Card/39df1c58e10d9416409820478e7aef0e192d3fa0.map
