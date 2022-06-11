function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/usePreventProgation.ts                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  usePreventProgation: function () {
    return usePreventProgation;
  }
});
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);

var usePreventProgation = function (fn) {
  var preventClickPropagation = useMutableCallback(function (e) {
    e.stopPropagation();
    fn === null || fn === void 0 ? void 0 : fn(e);
  });
  return preventClickPropagation;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/6504170982cf4792a2c7f3a2cda9cbd368c4c478.map
