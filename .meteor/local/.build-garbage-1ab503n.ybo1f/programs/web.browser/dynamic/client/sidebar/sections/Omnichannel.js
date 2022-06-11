function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/sections/Omnichannel.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 1);
let Sidebar;
module.link("@rocket.chat/fuselage", {
  Sidebar(v) {
    Sidebar = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 2);
let hasPermission;
module.link("../../../app/authorization/client", {
  hasPermission(v) {
    hasPermission = v;
  }

}, 3);
let useLayout;
module.link("../../contexts/LayoutContext", {
  useLayout(v) {
    useLayout = v;
  }

}, 4);
let useOmnichannelShowQueueLink, useOmnichannelAgentAvailable;
module.link("../../contexts/OmnichannelContext", {
  useOmnichannelShowQueueLink(v) {
    useOmnichannelShowQueueLink = v;
  },

  useOmnichannelAgentAvailable(v) {
    useOmnichannelAgentAvailable = v;
  }

}, 5);
let useRoute;
module.link("../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 6);
let useMethod;
module.link("../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 7);
let useToastMessageDispatch;
module.link("../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 8);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 9);

const OmnichannelSection = props => {
  const changeAgentStatus = useMethod('livechat:changeLivechatStatus');
  const t = useTranslation();
  const agentAvailable = useOmnichannelAgentAvailable();
  const showOmnichannelQueueLink = useOmnichannelShowQueueLink();
  const {
    sidebar
  } = useLayout();
  const directoryRoute = useRoute('omnichannel-directory');
  const queueListRoute = useRoute('livechat-queue');
  const dispatchToastMessage = useToastMessageDispatch();

  const icon = _objectSpread({
    title: agentAvailable ? t('Available') : t('Not_Available'),
    color: agentAvailable ? 'success' : undefined,
    icon: agentAvailable ? 'message' : 'message-disabled'
  }, agentAvailable && {
    success: 1
  });

  const directoryIcon = {
    title: t('Contact_Center'),
    icon: 'contact'
  };
  const handleStatusChange = useMutableCallback(async () => {
    try {
      await changeAgentStatus();
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
      console.log(error);
    }
  });
  const handleRoute = useMutableCallback(route => {
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
    onClick: () => handleRoute('queue')
  }), /*#__PURE__*/React.createElement(Sidebar.TopBar.Action, _extends({}, icon, {
    onClick: handleStatusChange
  })), hasPermission(['view-omnichannel-contact-center']) && /*#__PURE__*/React.createElement(Sidebar.TopBar.Action, _extends({}, directoryIcon, {
    onClick: () => handleRoute('directory')
  }))));
};

module.exportDefault(Object.assign( /*#__PURE__*/memo(OmnichannelSection), {
  size: 56
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/sections/f94001a0a4763300aad63c5b0c4d08736b36452b.map
