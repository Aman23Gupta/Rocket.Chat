function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/authorization/lib/index.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getSettingPermissionId: function () {
    return getSettingPermissionId;
  },
  CONSTANTS: function () {
    return CONSTANTS;
  }
});
module.link("./AuthorizationUtils", {
  AuthorizationUtils: "AuthorizationUtils"
}, 0);

var getSettingPermissionId = function (settingId) {
  // setting-based permissions
  return "change-setting-" + settingId;
};

var CONSTANTS = {
  SETTINGS_LEVEL: 'settings'
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/authorization/lib/cbbbc7fc93e527b85a360731fac34331b178c4bf.map
