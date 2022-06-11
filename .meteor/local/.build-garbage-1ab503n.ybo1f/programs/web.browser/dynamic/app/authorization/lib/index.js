function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/authorization/lib/index.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getSettingPermissionId: () => getSettingPermissionId,
  CONSTANTS: () => CONSTANTS
});
module.link("./AuthorizationUtils", {
  AuthorizationUtils: "AuthorizationUtils"
}, 0);

const getSettingPermissionId = function (settingId) {
  // setting-based permissions
  return "change-setting-".concat(settingId);
};

const CONSTANTS = {
  SETTINGS_LEVEL: 'settings'
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/authorization/lib/0230e00fb9231db81482f46bc1e8a2fb0eeb74e2.map
