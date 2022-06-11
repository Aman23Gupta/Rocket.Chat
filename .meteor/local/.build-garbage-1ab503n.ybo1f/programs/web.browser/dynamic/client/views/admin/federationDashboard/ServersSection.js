function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/federationDashboard/ServersSection.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Throbber;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Throbber(v) {
    Throbber = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 2);
let usePolledMethodData;
module.link("../../../hooks/usePolledMethodData", {
  usePolledMethodData(v) {
    usePolledMethodData = v;
  }

}, 3);

function ServersSection() {
  var _serversData$data, _serversData$data2;

  const {
    value: serversData,
    phase: serversStatus
  } = usePolledMethodData('federation:getServers', useMemo(() => [], []), 10000);

  if (serversStatus === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(Throbber, {
      align: "center"
    });
  }

  if ((serversData === null || serversData === void 0 ? void 0 : (_serversData$data = serversData.data) === null || _serversData$data === void 0 ? void 0 : _serversData$data.length) === 0) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Box, {
    withRichContent: true
  }, /*#__PURE__*/React.createElement("ul", null, serversData === null || serversData === void 0 ? void 0 : (_serversData$data2 = serversData.data) === null || _serversData$data2 === void 0 ? void 0 : _serversData$data2.map(_ref => {
    let {
      domain
    } = _ref;
    return /*#__PURE__*/React.createElement("li", {
      key: domain
    }, domain);
  })));
}

module.exportDefault(ServersSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/federationDashboard/a29ad73f467c1268331c45d11a2ea8f19b91d5c3.map
