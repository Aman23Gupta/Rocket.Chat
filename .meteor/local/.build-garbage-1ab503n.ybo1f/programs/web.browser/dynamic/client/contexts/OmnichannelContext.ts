function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/contexts/OmnichannelContext.ts                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  OmnichannelContext: () => OmnichannelContext,
  useOmnichannel: () => useOmnichannel,
  useOmnichannelShowQueueLink: () => useOmnichannelShowQueueLink,
  useOmnichannelRouteConfig: () => useOmnichannelRouteConfig,
  useOmnichannelAgentAvailable: () => useOmnichannelAgentAvailable,
  useQueuedInquiries: () => useQueuedInquiries,
  useOmnichannelEnabled: () => useOmnichannelEnabled
});
let createContext, useContext;
module.link("react", {
  createContext(v) {
    createContext = v;
  },

  useContext(v) {
    useContext = v;
  }

}, 0);
const OmnichannelContext = /*#__PURE__*/createContext({
  inquiries: {
    enabled: false
  },
  enabled: false,
  agentAvailable: false,
  showOmnichannelQueueLink: false
});

const useOmnichannel = () => useContext(OmnichannelContext);

const useOmnichannelShowQueueLink = () => useOmnichannel().showOmnichannelQueueLink;

const useOmnichannelRouteConfig = () => useOmnichannel().routeConfig;

const useOmnichannelAgentAvailable = () => useOmnichannel().agentAvailable;

const useQueuedInquiries = () => useOmnichannel().inquiries;

const useOmnichannelEnabled = () => useOmnichannel().enabled;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/contexts/70b75d48a56d0ba686199be00aea26f48c4a93c5.map
