function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/PortalsWrapper.tsx                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useSubscription;
module.link("use-subscription", {
  useSubscription(v) {
    useSubscription = v;
  }

}, 1);
let portalsSubscription;
module.link("../../lib/portals/portalsSubscription", {
  portalsSubscription(v) {
    portalsSubscription = v;
  }

}, 2);
let PortalWrapper;
module.link("./PortalWrapper", {
  default(v) {
    PortalWrapper = v;
  }

}, 3);

const PortalsWrapper = () => {
  const portals = useSubscription(portalsSubscription);
  return /*#__PURE__*/React.createElement(React.Fragment, null, portals.map(_ref => {
    let {
      key,
      portal
    } = _ref;
    return /*#__PURE__*/React.createElement(PortalWrapper, {
      key: key,
      portal: portal
    });
  }));
};

module.exportDefault(PortalsWrapper);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/777c49e2adf6629167dd5bb57d4091f933ea7abf.map
