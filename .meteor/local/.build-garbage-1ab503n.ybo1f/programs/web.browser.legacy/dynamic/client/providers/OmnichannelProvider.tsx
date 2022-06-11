function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/OmnichannelProvider.tsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var React, useState, useEffect, useMemo, useCallback, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 0);
var LivechatInquiry;
module.link("../../app/livechat/client/collections/LivechatInquiry", {
  LivechatInquiry: function (v) {
    LivechatInquiry = v;
  }
}, 1);
var initializeLivechatInquiryStream;
module.link("../../app/livechat/client/lib/stream/queueManager", {
  initializeLivechatInquiryStream: function (v) {
    initializeLivechatInquiryStream = v;
  }
}, 2);
var Notifications;
module.link("../../app/notifications/client", {
  Notifications: function (v) {
    Notifications = v;
  }
}, 3);
var usePermission;
module.link("../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 4);
var OmnichannelContext;
module.link("../contexts/OmnichannelContext", {
  OmnichannelContext: function (v) {
    OmnichannelContext = v;
  }
}, 5);
var useMethod;
module.link("../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 6);
var useSetting;
module.link("../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 7);
var useUser;
module.link("../contexts/UserContext", {
  useUser: function (v) {
    useUser = v;
  }
}, 8);
var useReactiveValue;
module.link("../hooks/useReactiveValue", {
  useReactiveValue: function (v) {
    useReactiveValue = v;
  }
}, 9);
var emptyContextValue = {
  inquiries: {
    enabled: false
  },
  enabled: false,
  agentAvailable: false,
  showOmnichannelQueueLink: false
};

var OmnichannelProvider = function (_ref) {
  var children = _ref.children;
  var omniChannelEnabled = useSetting('Livechat_enabled');
  var omnichannelRouting = useSetting('Livechat_Routing_Method');
  var showOmnichannelQueueLink = useSetting('Livechat_show_queue_list_link');
  var omnichannelPoolMaxIncoming = useSetting('Livechat_guest_pool_max_number_incoming_livechats_displayed');
  var hasAccess = usePermission('view-l-room');
  var canViewOmnichannelQueue = usePermission('view-livechat-queue');
  var user = useUser();
  var agentAvailable = (user === null || user === void 0 ? void 0 : user.statusLivechat) === 'available';
  var getRoutingConfig = useMethod('livechat:getRoutingConfig');

  var _useState = useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      routeConfig = _useState2[0],
      setRouteConfig = _useState2[1];

  var accessible = hasAccess && omniChannelEnabled;
  useEffect(function () {
    if (!accessible) {
      return;
    }

    var update = function () {
      function _callee() {
        var _routeConfig;

        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _regeneratorRuntime.awrap(getRoutingConfig());

                case 3:
                  _routeConfig = _context.sent;
                  setRouteConfig(_routeConfig);
                  _context.next = 10;
                  break;

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](0);
                  console.error(_context.t0);

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, [[0, 7]], Promise);
      }

      return _callee;
    }();

    if (omnichannelRouting || !omnichannelRouting) {
      update();
    }
  }, [accessible, getRoutingConfig, omnichannelRouting]);
  var enabled = accessible && !!user && !!routeConfig;
  var manuallySelected = enabled && canViewOmnichannelQueue && !!routeConfig && routeConfig.showQueue && !routeConfig.autoAssignAgent && agentAvailable;
  useEffect(function () {
    if (!manuallySelected) {
      return;
    }

    var handleDepartmentAgentData = function () {
      initializeLivechatInquiryStream(user === null || user === void 0 ? void 0 : user._id);
    };

    initializeLivechatInquiryStream(user === null || user === void 0 ? void 0 : user._id);
    Notifications.onUser('departmentAgentData', handleDepartmentAgentData);
    return function () {
      Notifications.unUser('departmentAgentData', handleDepartmentAgentData);
    };
  }, [manuallySelected, user === null || user === void 0 ? void 0 : user._id]);
  var queue = useReactiveValue(useCallback(function () {
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
  var contextValue = useMemo(function () {
    if (!enabled) {
      return emptyContextValue;
    }

    if (!manuallySelected) {
      return _objectSpread(_objectSpread({}, emptyContextValue), {}, {
        enabled: true,
        agentAvailable: agentAvailable,
        routeConfig: routeConfig
      });
    }

    return _objectSpread(_objectSpread({}, emptyContextValue), {}, {
      enabled: true,
      agentAvailable: agentAvailable,
      routeConfig: routeConfig,
      inquiries: queue ? {
        enabled: true,
        queue: queue
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
//# sourceMappingURL=/dynamic/client/providers/e07444126462ab3604fe6c874efe01c108dedd59.map
