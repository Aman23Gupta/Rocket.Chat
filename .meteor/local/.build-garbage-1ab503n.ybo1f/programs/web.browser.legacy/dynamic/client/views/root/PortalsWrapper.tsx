function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/PortalsWrapper.tsx                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var useSubscription;
module.link("use-subscription", {
  useSubscription: function (v) {
    useSubscription = v;
  }
}, 1);
var portalsSubscription;
module.link("../../lib/portals/portalsSubscription", {
  portalsSubscription: function (v) {
    portalsSubscription = v;
  }
}, 2);
var PortalWrapper;
module.link("./PortalWrapper", {
  "default": function (v) {
    PortalWrapper = v;
  }
}, 3);

var PortalsWrapper = function () {
  var portals = useSubscription(portalsSubscription);
  return /*#__PURE__*/React.createElement(React.Fragment, null, portals.map(function (_ref) {
    var key = _ref.key,
        portal = _ref.portal;
    return /*#__PURE__*/React.createElement(PortalWrapper, {
      key: key,
      portal: portal
    });
  }));
};

module.exportDefault(PortalsWrapper);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/c2f98f5e0828802a10e678e4746f68292dcade3a.map
