function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/UsageCard.tsx                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let ButtonGroup, Button;
module.link("@rocket.chat/fuselage", {
  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
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
let useHasLicense;
module.link("../../../../ee/client/hooks/useHasLicense", {
  useHasLicense(v) {
    useHasLicense = v;
  }

}, 3);
let Card;
module.link("../../../components/Card", {
  default(v) {
    Card = v;
  }

}, 4);
let UserStatus;
module.link("../../../components/UserStatus", {
  UserStatus(v) {
    UserStatus = v;
  }

}, 5);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 6);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
let useFormatMemorySize;
module.link("../../../hooks/useFormatMemorySize", {
  useFormatMemorySize(v) {
    useFormatMemorySize = v;
  }

}, 8);
let TextSeparator;
module.link("./TextSeparator", {
  default(v) {
    TextSeparator = v;
  }

}, 9);

const UsageCard = _ref => {
  let {
    statistics,
    vertical
  } = _ref;
  const t = useTranslation();
  const formatMemorySize = useFormatMemorySize();
  const router = useRoute('engagement-dashboard');
  const handleEngagement = useMutableCallback(() => {
    router.push();
  });
  const canViewEngagement = useHasLicense('engagement-dashboard');
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Card.Title, null, t('Usage')), /*#__PURE__*/React.createElement(Card.Body, {
    flexDirection: vertical ? 'column' : 'row'
  }, /*#__PURE__*/React.createElement(Card.Col, null, /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(Card.Col.Title, null, t('Users')), /*#__PURE__*/React.createElement(TextSeparator, {
    label: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card.Icon, {
      name: "dialpad"
    }), " ", t('Total')),
    value: statistics.totalUsers
  }), /*#__PURE__*/React.createElement(TextSeparator, {
    label: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card.Icon, null, /*#__PURE__*/React.createElement(UserStatus, {
      status: "online"
    })), ' ', t('Online')),
    value: statistics.onlineUsers
  }), /*#__PURE__*/React.createElement(TextSeparator, {
    label: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card.Icon, null, /*#__PURE__*/React.createElement(UserStatus, {
      status: "busy"
    })), ' ', t('Busy')),
    value: statistics.busyUsers
  }), /*#__PURE__*/React.createElement(TextSeparator, {
    label: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card.Icon, null, /*#__PURE__*/React.createElement(UserStatus, {
      status: "away"
    })), ' ', t('Away')),
    value: statistics.awayUsers
  }), /*#__PURE__*/React.createElement(TextSeparator, {
    label: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card.Icon, null, /*#__PURE__*/React.createElement(UserStatus, {
      status: "offline"
    })), ' ', t('Offline')),
    value: statistics.offlineUsers
  })), /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(Card.Col.Title, null, t('Types_and_Distribution')), /*#__PURE__*/React.createElement(TextSeparator, {
    label: t('Connected'),
    value: statistics.totalConnectedUsers
  }), /*#__PURE__*/React.createElement(TextSeparator, {
    label: t('Stats_Active_Users'),
    value: statistics.activeUsers
  }), /*#__PURE__*/React.createElement(TextSeparator, {
    label: t('Stats_Active_Guests'),
    value: statistics.activeGuests
  }), /*#__PURE__*/React.createElement(TextSeparator, {
    label: t('Stats_Non_Active_Users'),
    value: statistics.nonActiveUsers
  }), /*#__PURE__*/React.createElement(TextSeparator, {
    label: t('Stats_App_Users'),
    value: statistics.appUsers
  })), /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(Card.Col.Title, null, t('Uploads')), /*#__PURE__*/React.createElement(TextSeparator, {
    label: t('Stats_Total_Uploads'),
    value: statistics.uploadsTotal
  }), /*#__PURE__*/React.createElement(TextSeparator, {
    label: t('Stats_Total_Uploads_Size'),
    value: formatMemorySize(statistics.uploadsTotalSize)
  }))), /*#__PURE__*/React.createElement(Card.Divider, null), /*#__PURE__*/React.createElement(Card.Col, null, /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(Card.Col.Title, null, t('Rooms')), /*#__PURE__*/React.createElement(TextSeparator, {
    label: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card.Icon, {
      name: "dialpad",
      size: "x16"
    }), " ", t('Stats_Total_Rooms')),
    value: statistics.totalRooms
  }), /*#__PURE__*/React.createElement(TextSeparator, {
    label: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card.Icon, {
      name: "hash",
      size: "x16"
    }), " ", t('Stats_Total_Channels')),
    value: statistics.totalChannels
  }), /*#__PURE__*/React.createElement(TextSeparator, {
    label: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card.Icon, {
      name: "lock",
      size: "x16"
    }), " ", t('Stats_Total_Private_Groups')),
    value: statistics.totalPrivateGroups
  }), /*#__PURE__*/React.createElement(TextSeparator, {
    label: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card.Icon, {
      name: "balloon",
      size: "x16"
    }), " ", t('Stats_Total_Direct_Messages')),
    value: statistics.totalDirect
  }), /*#__PURE__*/React.createElement(TextSeparator, {
    label: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card.Icon, {
      name: "discussion",
      size: "x16"
    }), " ", t('Total_Discussions')),
    value: statistics.totalDiscussions
  }), /*#__PURE__*/React.createElement(TextSeparator, {
    label: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card.Icon, {
      name: "headset",
      size: "x16"
    }), " ", t('Stats_Total_Livechat_Rooms')),
    value: statistics.totalLivechat
  })), /*#__PURE__*/React.createElement(Card.Col.Section, null, /*#__PURE__*/React.createElement(Card.Col.Title, null, t('Messages')), /*#__PURE__*/React.createElement(TextSeparator, {
    label: t('Stats_Total_Messages'),
    value: statistics.totalMessages
  }), /*#__PURE__*/React.createElement(TextSeparator, {
    label: t('Total_Threads'),
    value: statistics.totalThreads
  }), /*#__PURE__*/React.createElement(TextSeparator, {
    label: t('Stats_Total_Messages_Channel'),
    value: statistics.totalChannelMessages
  }), /*#__PURE__*/React.createElement(TextSeparator, {
    label: t('Stats_Total_Messages_PrivateGroup'),
    value: statistics.totalPrivateGroupMessages
  }), /*#__PURE__*/React.createElement(TextSeparator, {
    label: t('Stats_Total_Messages_Direct'),
    value: statistics.totalDirectMessages
  }), /*#__PURE__*/React.createElement(TextSeparator, {
    label: t('Stats_Total_Messages_Livechat'),
    value: statistics.totalLivechatMessages
  })))), /*#__PURE__*/React.createElement(Card.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    disabled: !canViewEngagement,
    small: true,
    onClick: handleEngagement
  }, t('See_on_Engagement_Dashboard')))));
};

module.exportDefault( /*#__PURE__*/memo(UsageCard));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/1ebc996469104d93d2be0740f72767a1447ff004.map
