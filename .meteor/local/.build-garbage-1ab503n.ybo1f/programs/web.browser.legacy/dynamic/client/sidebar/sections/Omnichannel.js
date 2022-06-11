function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/sections/Omnichannel.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 1);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 2);
var Sidebar;
module.link("@rocket.chat/fuselage", {
  Sidebar: function (v) {
    Sidebar = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 2);
var hasPermission;
module.link("../../../app/authorization/client", {
  hasPermission: function (v) {
    hasPermission = v;
  }
}, 3);
var useLayout;
module.link("../../contexts/LayoutContext", {
  useLayout: function (v) {
    useLayout = v;
  }
}, 4);
var useOmnichannelShowQueueLink, useOmnichannelAgentAvailable;
module.link("../../contexts/OmnichannelContext", {
  useOmnichannelShowQueueLink: function (v) {
    useOmnichannelShowQueueLink = v;
  },
  useOmnichannelAgentAvailable: function (v) {
    useOmnichannelAgentAvailable = v;
  }
}, 5);
var useRoute;
module.link("../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 6);
var useMethod;
module.link("../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 7);
var useToastMessageDispatch;
module.link("../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 8);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 9);

var OmnichannelSection = function (props) {
  var changeAgentStatus = useMethod('livechat:changeLivechatStatus');
  var t = useTranslation();
  var agentAvailable = useOmnichannelAgentAvailable();
  var showOmnichannelQueueLink = useOmnichannelShowQueueLink();

  var _useLayout = useLayout(),
      sidebar = _useLayout.sidebar;

  var directoryRoute = useRoute('omnichannel-directory');
  var queueListRoute = useRoute('livechat-queue');
  var dispatchToastMessage = useToastMessageDispatch();

  var icon = _objectSpread({
    title: agentAvailable ? t('Available') : t('Not_Available'),
    color: agentAvailable ? 'success' : undefined,
    icon: agentAvailable ? 'message' : 'message-disabled'
  }, agentAvailable && {
    success: 1
  });

  var directoryIcon = {
    title: t('Contact_Center'),
    icon: 'contact'
  };
  var handleStatusChange = useMutableCallback(function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(changeAgentStatus());

              case 3:
                _context.next = 9;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });
                console.log(_context.t0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 5]], Promise);
    }

    return _callee;
  }());
  var handleRoute = useMutableCallback(function (route) {
    sidebar.toggle();

    switch (route) {
      case 'directory':
        directoryRoute.push({});
        break;

      case 'queue':
        queueListRoute.push({});
        break;
    }
  });
  return /*#__PURE__*/React.createElement(Sidebar.TopBar.ToolBox, props, /*#__PURE__*/React.createElement(Sidebar.TopBar.Title, null, t('Omnichannel')), /*#__PURE__*/React.createElement(Sidebar.TopBar.Actions, null, showOmnichannelQueueLink && /*#__PURE__*/React.createElement(Sidebar.TopBar.Action, {
    icon: "queue",
    title: t('Queue'),
    onClick: function () {
      return handleRoute('queue');
    }
  }), /*#__PURE__*/React.createElement(Sidebar.TopBar.Action, _extends({}, icon, {
    onClick: handleStatusChange
  })), hasPermission(['view-omnichannel-contact-center']) && /*#__PURE__*/React.createElement(Sidebar.TopBar.Action, _extends({}, directoryIcon, {
    onClick: function () {
      return handleRoute('directory');
    }
  }))));
};

module.exportDefault(Object.assign( /*#__PURE__*/memo(OmnichannelSection), {
  size: 56
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/sections/061d048b1a8b7c48426bb8a7610ccdd13d0143dc.map
