function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/hooks/useBodyPosition.ts                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useBodyPosition: () => useBodyPosition
});
let useEffect;
module.link("react", {
  useEffect(v) {
    useEffect = v;
  }

}, 0);

const useBodyPosition = function (position) {
  let enabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const previous = document.body.style.position;
    document.body.style.position = position;
    return () => {
      document.body.style.position = previous;
    };
  }, [position, enabled]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/setupWizard/hooks/4b6476fc668ae4d9c200a8cdbc5b7cd2b69f478b.map
