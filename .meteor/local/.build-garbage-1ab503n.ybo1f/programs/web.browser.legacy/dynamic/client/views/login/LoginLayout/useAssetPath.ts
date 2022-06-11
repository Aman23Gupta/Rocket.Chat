function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/login/LoginLayout/useAssetPath.ts                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useAssetPath: function () {
    return useAssetPath;
  }
});
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 0);

var useAssetPath = function (assetId) {
  var _window$__meteor_runt, _asset$url;

  var asset = useSetting(assetId);
  var prefix = (_window$__meteor_runt = window.__meteor_runtime_config__.ROOT_URL_PATH_PREFIX) !== null && _window$__meteor_runt !== void 0 ? _window$__meteor_runt : '';
  var url = (_asset$url = asset === null || asset === void 0 ? void 0 : asset.url) !== null && _asset$url !== void 0 ? _asset$url : asset === null || asset === void 0 ? void 0 : asset.defaultUrl;
  return url ? prefix + "/" + url : undefined;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/login/LoginLayout/e4ac11c6c8c97c0e1fdc5baa16d07827bfc49498.map
