function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/login/LoginLayout/useAssetPath.ts                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useAssetPath: () => useAssetPath
});
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 0);

const useAssetPath = assetId => {
  var _window$__meteor_runt, _asset$url;

  const asset = useSetting(assetId);
  const prefix = (_window$__meteor_runt = window.__meteor_runtime_config__.ROOT_URL_PATH_PREFIX) !== null && _window$__meteor_runt !== void 0 ? _window$__meteor_runt : '';
  const url = (_asset$url = asset === null || asset === void 0 ? void 0 : asset.url) !== null && _asset$url !== void 0 ? _asset$url : asset === null || asset === void 0 ? void 0 : asset.defaultUrl;
  return url ? "".concat(prefix, "/").concat(url) : undefined;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/login/LoginLayout/7c6d1e619afeb9b989b869f8a3ef4ce300f763e9.map
