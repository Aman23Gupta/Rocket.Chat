function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/MainLayout/MainLayout.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 0);
let BlazeTemplate;
module.link("../BlazeTemplate", {
  default(v) {
    BlazeTemplate = v;
  }

}, 1);
let AuthenticationCheck;
module.link("./AuthenticationCheck", {
  default(v) {
    AuthenticationCheck = v;
  }

}, 2);
let Preload;
module.link("./Preload", {
  default(v) {
    Preload = v;
  }

}, 3);

const MainLayout = _ref => {
  let {
    center
  } = _ref;
  return /*#__PURE__*/React.createElement(Preload, null, /*#__PURE__*/React.createElement(AuthenticationCheck, null, useMemo(() => center ? /*#__PURE__*/React.createElement(BlazeTemplate, {
    template: center
  }) : null, [center])));
};

module.exportDefault(MainLayout);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/MainLayout/f74fe65fa63d784dc681122be41eb863256ab27d.map
