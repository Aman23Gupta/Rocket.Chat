function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserCard/index.ts                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Action;
module.link("./Action", {
  default(v) {
    Action = v;
  }

}, 0);
let Info;
module.link("./Info", {
  default(v) {
    Info = v;
  }

}, 1);
let Role;
module.link("./Role", {
  default(v) {
    Role = v;
  }

}, 2);
let Roles;
module.link("./Roles", {
  default(v) {
    Roles = v;
  }

}, 3);
let UserCard;
module.link("./UserCard", {
  default(v) {
    UserCard = v;
  }

}, 4);
let Username;
module.link("./Username", {
  default(v) {
    Username = v;
  }

}, 5);
module.exportDefault(Object.assign(UserCard, {
  Action,
  Role,
  Roles,
  Info,
  Username
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserCard/47c40c39ffb0a893daa62363862edc216b493c81.map
