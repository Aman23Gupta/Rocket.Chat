function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/usePreventProgation.ts                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  usePreventProgation: () => usePreventProgation
});
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);

const usePreventProgation = fn => {
  const preventClickPropagation = useMutableCallback(e => {
    e.stopPropagation();
    fn === null || fn === void 0 ? void 0 : fn(e);
  });
  return preventClickPropagation;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/d25256e7030d9105a6695eb1b7b82fbb7b34cb86.map
