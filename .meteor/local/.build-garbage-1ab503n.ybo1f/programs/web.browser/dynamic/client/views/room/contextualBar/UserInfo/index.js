function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/UserInfo/index.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let memo;
module.link("react", {
  memo(v) {
    memo = v;
  }

}, 0);
let InfoPanel;
module.link("../../../InfoPanel", {
  default(v) {
    InfoPanel = v;
  }

}, 1);
let Action;
module.link("./Action", {
  default(v) {
    Action = v;
  }

}, 2);
let Avatar;
module.link("./Avatar", {
  default(v) {
    Avatar = v;
  }

}, 3);
let UserInfoWithData;
module.link("./UserInfoWithData", {
  default(v) {
    UserInfoWithData = v;
  }

}, 4);
let Username;
module.link("./Username", {
  default(v) {
    Username = v;
  }

}, 5);
module.exportDefault(Object.assign( /*#__PURE__*/memo(UserInfoWithData), {
  Action,
  Avatar,
  Info: InfoPanel.Text,
  Label: InfoPanel.Label,
  Username
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/UserInfo/55bc85113dee55d36cd31584d0e454268db872ff.map
