function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/federationDashboard/ServersSection.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Throbber;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Throbber: function (v) {
    Throbber = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 2);
var usePolledMethodData;
module.link("../../../hooks/usePolledMethodData", {
  usePolledMethodData: function (v) {
    usePolledMethodData = v;
  }
}, 3);

function ServersSection() {
  var _serversData$data, _serversData$data2;

  var _usePolledMethodData = usePolledMethodData('federation:getServers', useMemo(function () {
    return [];
  }, []), 10000),
      serversData = _usePolledMethodData.value,
      serversStatus = _usePolledMethodData.phase;

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
  }, /*#__PURE__*/React.createElement("ul", null, serversData === null || serversData === void 0 ? void 0 : (_serversData$data2 = serversData.data) === null || _serversData$data2 === void 0 ? void 0 : _serversData$data2.map(function (_ref) {
    var domain = _ref.domain;
    return /*#__PURE__*/React.createElement("li", {
      key: domain
    }, domain);
  })));
}

module.exportDefault(ServersSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/federationDashboard/ef77e90f2ac97a45d3c9ce9e7045476631b2dadd.map
