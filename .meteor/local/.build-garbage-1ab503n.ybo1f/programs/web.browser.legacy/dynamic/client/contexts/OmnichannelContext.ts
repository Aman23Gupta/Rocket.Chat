function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/contexts/OmnichannelContext.ts                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  OmnichannelContext: function () {
    return OmnichannelContext;
  },
  useOmnichannel: function () {
    return useOmnichannel;
  },
  useOmnichannelShowQueueLink: function () {
    return useOmnichannelShowQueueLink;
  },
  useOmnichannelRouteConfig: function () {
    return useOmnichannelRouteConfig;
  },
  useOmnichannelAgentAvailable: function () {
    return useOmnichannelAgentAvailable;
  },
  useQueuedInquiries: function () {
    return useQueuedInquiries;
  },
  useOmnichannelEnabled: function () {
    return useOmnichannelEnabled;
  }
});
var createContext, useContext;
module.link("react", {
  createContext: function (v) {
    createContext = v;
  },
  useContext: function (v) {
    useContext = v;
  }
}, 0);
var OmnichannelContext = /*#__PURE__*/createContext({
  inquiries: {
    enabled: false
  },
  enabled: false,
  agentAvailable: false,
  showOmnichannelQueueLink: false
});

var useOmnichannel = function () {
  return useContext(OmnichannelContext);
};

var useOmnichannelShowQueueLink = function () {
  return useOmnichannel().showOmnichannelQueueLink;
};

var useOmnichannelRouteConfig = function () {
  return useOmnichannel().routeConfig;
};

var useOmnichannelAgentAvailable = function () {
  return useOmnichannel().agentAvailable;
};

var useQueuedInquiries = function () {
  return useOmnichannel().inquiries;
};

var useOmnichannelEnabled = function () {
  return useOmnichannel().enabled;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/contexts/eb8194ecf3d964fdec702dea1e2b6293b062ebe8.map
