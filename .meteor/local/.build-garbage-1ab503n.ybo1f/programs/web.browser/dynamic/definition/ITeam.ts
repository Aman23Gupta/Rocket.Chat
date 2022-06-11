function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// definition/ITeam.ts                                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  TEAM_TYPE: () => TEAM_TYPE
});
var TEAM_TYPE;

(function (TEAM_TYPE) {
  TEAM_TYPE[TEAM_TYPE["PUBLIC"] = 0] = "PUBLIC";
  TEAM_TYPE[TEAM_TYPE["PRIVATE"] = 1] = "PRIVATE";
})(TEAM_TYPE || module.runSetters(TEAM_TYPE = {}, ["TEAM_TYPE"]));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/definition/7e86734d17980c39a83cd55e315b9f9982467094.map
