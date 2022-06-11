function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/MainLayout/useViewportScrolling.ts                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useViewportScrolling: () => useViewportScrolling
});
let useEffect;
module.link("react", {
  useEffect(v) {
    useEffect = v;
  }

}, 0);

const useViewportScrolling = () => {
  useEffect(() => {
    document.documentElement.classList.remove('scroll');
    document.documentElement.classList.add('noscroll');
    return () => {
      document.documentElement.classList.add('scroll');
      document.documentElement.classList.remove('noscroll');
    };
  }, []);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/MainLayout/df9f27979eda440412664624eec27865e289f695.map
