function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// definition/ITeam.ts                                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  TEAM_TYPE: function () {
    return TEAM_TYPE;
  }
});
var TEAM_TYPE;

(function (TEAM_TYPE) {
  TEAM_TYPE[TEAM_TYPE["PUBLIC"] = 0] = "PUBLIC";
  TEAM_TYPE[TEAM_TYPE["PRIVATE"] = 1] = "PRIVATE";
})(TEAM_TYPE || module.runSetters(TEAM_TYPE = {}, ["TEAM_TYPE"]));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/definition/23e0e531209aad6ffbf491885912477e87f47539.map
