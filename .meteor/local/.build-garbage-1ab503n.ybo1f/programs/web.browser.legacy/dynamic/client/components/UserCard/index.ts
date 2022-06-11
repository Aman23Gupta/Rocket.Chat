function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserCard/index.ts                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Action;
module.link("./Action", {
  "default": function (v) {
    Action = v;
  }
}, 0);
var Info;
module.link("./Info", {
  "default": function (v) {
    Info = v;
  }
}, 1);
var Role;
module.link("./Role", {
  "default": function (v) {
    Role = v;
  }
}, 2);
var Roles;
module.link("./Roles", {
  "default": function (v) {
    Roles = v;
  }
}, 3);
var UserCard;
module.link("./UserCard", {
  "default": function (v) {
    UserCard = v;
  }
}, 4);
var Username;
module.link("./Username", {
  "default": function (v) {
    Username = v;
  }
}, 5);
module.exportDefault(Object.assign(UserCard, {
  Action: Action,
  Role: Role,
  Roles: Roles,
  Info: Info,
  Username: Username
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserCard/5f00d6bda21d08ada5bdb5be6d6ccbd0c6defe1b.map
