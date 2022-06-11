function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/CustomSoundProvider.tsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let CustomSounds;
module.link("../../app/custom-sounds/client/lib/CustomSounds", {
  CustomSounds(v) {
    CustomSounds = v;
  }

}, 1);
let CustomSoundContext;
module.link("../contexts/CustomSoundContext", {
  CustomSoundContext(v) {
    CustomSoundContext = v;
  }

}, 2);

const CustomSoundProvider = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(CustomSoundContext.Provider, {
    children: children,
    value: CustomSounds
  });
};

module.exportDefault(CustomSoundProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/238103fb85885c8f9d5fcf87ad123a9918e83ce4.map
