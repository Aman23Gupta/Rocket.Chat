function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/MainLayout/useViewportScrolling.ts                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useViewportScrolling: function () {
    return useViewportScrolling;
  }
});
var useEffect;
module.link("react", {
  useEffect: function (v) {
    useEffect = v;
  }
}, 0);

var useViewportScrolling = function () {
  useEffect(function () {
    document.documentElement.classList.remove('scroll');
    document.documentElement.classList.add('noscroll');
    return function () {
      document.documentElement.classList.add('scroll');
      document.documentElement.classList.remove('noscroll');
    };
  }, []);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/MainLayout/604a9ed6e341d90d187373093fb77fdf416be55f.map
