function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/OmnichannelProvider.tsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let React, useState, useEffect, useMemo, useCallback, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  memo(v) {
    memo = v;
  }

}, 0);
let LivechatInquiry;
module.link("../../app/livechat/client/collections/LivechatInquiry", {
  LivechatInquiry(v) {
    LivechatInquiry = v;
  }

}, 1);
let initializeLivechatInquiryStream;
module.link("../../app/livechat/client/lib/stream/queueManager", {
  initializeLivechatInquiryStream(v) {
    initializeLivechatInquiryStream = v;
  }

}, 2);
let Notifications;
module.link("../../app/notifications/client", {
  Notifications(v) {
    Notifications = v;
  }

}, 3);
let usePermission;
module.link("../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 4);
let OmnichannelContext;
module.link("../contexts/OmnichannelContext", {
  OmnichannelContext(v) {
    OmnichannelContext = v;
  }

}, 5);
let useMethod;
module.link("../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 6);
let useSetting;
module.link("../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 7);
let useUser;
module.link("../contexts/UserContext", {
  useUser(v) {
    useUser = v;
  }

}, 8);
let useReactiveValue;
module.link("../hooks/useReactiveValue", {
  useReactiveValue(v) {
    useReactiveValue = v;
  }

}, 9);
const emptyContextValue = {
  inquiries: {
    enabled: false
  },
  enabled: false,
  agentAvailable: false,
  showOmnichannelQueueLink: false
};

const OmnichannelProvider = _ref => {
  let {
    children
  } = _ref;
  const omniChannelEnabled = useSetting('Livechat_enabled');
  const omnichannelRouting = useSetting('Livechat_Routing_Method');
  const showOmnichannelQueueLink = useSetting('Livechat_show_queue_list_link');
  const omnichannelPoolMaxIncoming = useSetting('Livechat_guest_pool_max_number_incoming_livechats_displayed');
  const hasAccess = usePermission('view-l-room');
  const canViewOmnichannelQueue = usePermission('view-livechat-queue');
  const user = useUser();
  const agentAvailable = (user === null || user === void 0 ? void 0 : user.statusLivechat) === 'available';
  const getRoutingConfig = useMethod('livechat:getRoutingConfig');
  const [routeConfig, setRouteConfig] = useState(undefined);
  const accessible = hasAccess && omniChannelEnabled;
  useEffect(() => {
    if (!accessible) {
      return;
    }

    const update = async () => {
      try {
        const routeConfig = await getRoutingConfig();
        setRouteConfig(routeConfig);
      } catch (error) {
        console.error(error);
      }
    };

    if (omnichannelRouting || !omnichannelRouting) {
      update();
    }
  }, [accessible, getRoutingConfig, omnichannelRouting]);
  const enabled = accessible && !!user && !!routeConfig;
  const manuallySelected = enabled && canViewOmnichannelQueue && !!routeConfig && routeConfig.showQueue && !routeConfig.autoAssignAgent && agentAvailable;
  useEffect(() => {
    if (!manuallySelected) {
      return;
    }

    const handleDepartmentAgentData = () => {
      initializeLivechatInquiryStream(user === null || user === void 0 ? void 0 : user._id);
    };

    initializeLivechatInquiryStream(user === null || user === void 0 ? void 0 : user._id);
    Notifications.onUser('departmentAgentData', handleDepartmentAgentData);
    return () => {
      Notifications.unUser('departmentAgentData', handleDepartmentAgentData);
    };
  }, [manuallySelected, user === null || user === void 0 ? void 0 : user._id]);
  const queue = useReactiveValue(useCallback(() => {
    if (!manuallySelected) {
      return undefined;
    }

    return LivechatInquiry.find({
      status: 'queued',
      $or: [{
        defaultAgent: {
          $exists: false
        }
      }, {
        'defaultAgent.agentId': user === null || user === void 0 ? void 0 : user._id
      }]
    }, {
      sort: {
        queueOrder: 1,
        estimatedWaitingTimeQueue: 1,
        estimatedServiceTimeAt: 1
      },
      limit: omnichannelPoolMaxIncoming
    }).fetch();
  }, [manuallySelected, omnichannelPoolMaxIncoming, user === null || user === void 0 ? void 0 : user._id]));
  const contextValue = useMemo(() => {
    if (!enabled) {
      return emptyContextValue;
    }

    if (!manuallySelected) {
      return _objectSpread(_objectSpread({}, emptyContextValue), {}, {
        enabled: true,
        agentAvailable,
        routeConfig
      });
    }

    return _objectSpread(_objectSpread({}, emptyContextValue), {}, {
      enabled: true,
      agentAvailable,
      routeConfig,
      inquiries: queue ? {
        enabled: true,
        queue
      } : {
        enabled: false
      },
      showOmnichannelQueueLink: showOmnichannelQueueLink && !!agentAvailable
    });
  }, [agentAvailable, enabled, manuallySelected, queue, routeConfig, showOmnichannelQueueLink]);
  return /*#__PURE__*/React.createElement(OmnichannelContext.Provider, {
    children: children,
    value: contextValue
  });
};

module.exportDefault( /*#__PURE__*/memo(OmnichannelProvider));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/054ff4a38c8272bbcd0b18081fe50d4b2e5db817.map
