function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/UserInfo/index.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var memo;
module.link("react", {
  memo: function (v) {
    memo = v;
  }
}, 0);
var InfoPanel;
module.link("../../../InfoPanel", {
  "default": function (v) {
    InfoPanel = v;
  }
}, 1);
var Action;
module.link("./Action", {
  "default": function (v) {
    Action = v;
  }
}, 2);
var Avatar;
module.link("./Avatar", {
  "default": function (v) {
    Avatar = v;
  }
}, 3);
var UserInfoWithData;
module.link("./UserInfoWithData", {
  "default": function (v) {
    UserInfoWithData = v;
  }
}, 4);
var Username;
module.link("./Username", {
  "default": function (v) {
    Username = v;
  }
}, 5);
module.exportDefault(Object.assign( /*#__PURE__*/memo(UserInfoWithData), {
  Action: Action,
  Avatar: Avatar,
  Info: InfoPanel.Text,
  Label: InfoPanel.Label,
  Username: Username
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/UserInfo/24fc11450049c82267b2fba0c0c8420e77a92106.map
