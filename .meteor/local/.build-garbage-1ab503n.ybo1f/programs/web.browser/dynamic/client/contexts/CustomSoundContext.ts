function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/contexts/CustomSoundContext.ts                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  CustomSoundContext: () => CustomSoundContext,
  useCustomSound: () => useCustomSound
});
let createContext, useContext;
module.link("react", {
  createContext(v) {
    createContext = v;
  },

  useContext(v) {
    useContext = v;
  }

}, 0);
const CustomSoundContext = /*#__PURE__*/createContext({
  play: () => undefined
});

const useCustomSound = () => useContext(CustomSoundContext);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/contexts/61fe1fbff5bcd75ca7fead68b3253c5e662c7aaf.map
