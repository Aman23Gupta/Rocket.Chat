function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/CustomSoundProvider.tsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var CustomSounds;
module.link("../../app/custom-sounds/client/lib/CustomSounds", {
  CustomSounds: function (v) {
    CustomSounds = v;
  }
}, 1);
var CustomSoundContext;
module.link("../contexts/CustomSoundContext", {
  CustomSoundContext: function (v) {
    CustomSoundContext = v;
  }
}, 2);

var CustomSoundProvider = function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(CustomSoundContext.Provider, {
    children: children,
    value: CustomSounds
  });
};

module.exportDefault(CustomSoundProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/7d3ac62b36862cda12965bfb7263c80d5ac47209.map
