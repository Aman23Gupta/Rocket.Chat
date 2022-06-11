function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/UsageCard.tsx                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var ButtonGroup, Button;
module.link("@rocket.chat/fuselage", {
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
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
var useHasLicense;
module.link("../../../../ee/client/hooks/useHasLicense", {
  useHasLicense: function (v) {
    useHasLicense = v;
  }
}, 3);
var Card;
module.link("../../../components/Card", {
  "default": function (v) {
    Card = v;
  }
}, 4);
var UserStatus;
module.link("../../../components/UserStatus", {
  UserStatus: function (v) {
    UserStatus = v;
  }
}, 5);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 6);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var useFormatMemorySize;
module.link("../../../hooks/useFormatMemorySize", {
  useFormatMemorySize: function (v) {
    useFormatMemorySize = v;
  }
}, 8);
var TextSeparator;
module.link("./TextSeparator", {
  "default": function (v) {
    TextSeparator = v;
  }
}, 9);

var UsageCard = function (_ref) {
  var statistics = _ref.statistics,
      vertical = _ref.vertical;
  var t = useTranslation();
  var formatMemorySize = useFormatMemorySize();
  var router = useRoute('engagement-dashboard');
  var handleEngagement = useMutableCallback(function () {
    router.push();
  });
  var canViewEngagement = useHasLicense('engagement-dashboard');
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
//# sourceMappingURL=/dynamic/client/views/admin/info/e0e198b571f4ab99fb4b21b1763f34ad2e1fee86.map
