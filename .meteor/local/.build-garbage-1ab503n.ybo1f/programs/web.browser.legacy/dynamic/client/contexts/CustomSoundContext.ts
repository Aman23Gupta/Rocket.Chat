function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/contexts/CustomSoundContext.ts                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  CustomSoundContext: function () {
    return CustomSoundContext;
  },
  useCustomSound: function () {
    return useCustomSound;
  }
});
var createContext, useContext;
module.link("react", {
  createContext: function (v) {
    createContext = v;
  },
  useContext: function (v) {
    useContext = v;
  }
}, 0);
var CustomSoundContext = /*#__PURE__*/createContext({
  play: function () {
    return undefined;
  }
});

var useCustomSound = function () {
  return useContext(CustomSoundContext);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/contexts/2df6dfb638e161f601226e99b7e33c663e7585f8.map
