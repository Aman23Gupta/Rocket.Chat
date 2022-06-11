function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/MainLayout/MainLayout.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 0);
var BlazeTemplate;
module.link("../BlazeTemplate", {
  "default": function (v) {
    BlazeTemplate = v;
  }
}, 1);
var AuthenticationCheck;
module.link("./AuthenticationCheck", {
  "default": function (v) {
    AuthenticationCheck = v;
  }
}, 2);
var Preload;
module.link("./Preload", {
  "default": function (v) {
    Preload = v;
  }
}, 3);

var MainLayout = function (_ref) {
  var center = _ref.center;
  return /*#__PURE__*/React.createElement(Preload, null, /*#__PURE__*/React.createElement(AuthenticationCheck, null, useMemo(function () {
    return center ? /*#__PURE__*/React.createElement(BlazeTemplate, {
      template: center
    }) : null;
  }, [center])));
};

module.exportDefault(MainLayout);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/MainLayout/812a801319c35dbbd9206fc21bbcb5c2422389d5.map
