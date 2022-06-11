function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/contacts/contextualBar/ContactInfo.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Box, Margins, ButtonGroup, Button, Icon;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useEffect, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var hasPermission;
module.link("../../../../../../app/authorization/client", {
  hasPermission: function (v) {
    hasPermission = v;
  }
}, 3);
var ContactManagerInfo;
module.link("../../../../../../ee/client/omnichannel/ContactManagerInfo", {
  "default": function (v) {
    ContactManagerInfo = v;
  }
}, 4);
var UserCard;
module.link("../../../../../components/UserCard/UserCard", {
  "default": function (v) {
    UserCard = v;
  }
}, 5);
var UserStatus;
module.link("../../../../../components/UserStatus", {
  UserStatus: function (v) {
    UserStatus = v;
  }
}, 6);
var VerticalBar;
module.link("../../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 7);
var UserAvatar;
module.link("../../../../../components/avatar/UserAvatar", {
  "default": function (v) {
    UserAvatar = v;
  }
}, 8);
var useCurrentRoute, useRoute;
module.link("../../../../../contexts/RouterContext", {
  useCurrentRoute: function (v) {
    useCurrentRoute = v;
  },
  useRoute: function (v) {
    useRoute = v;
  }
}, 9);
var useToastMessageDispatch;
module.link("../../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 10);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 11);
var AsyncStatePhase;
module.link("../../../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 12);
var useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 13);
var useFormatDate;
module.link("../../../../../hooks/useFormatDate", {
  useFormatDate: function (v) {
    useFormatDate = v;
  }
}, 14);
var CustomField;
module.link("../../../components/CustomField", {
  "default": function (v) {
    CustomField = v;
  }
}, 15);
var Field;
module.link("../../../components/Field", {
  "default": function (v) {
    Field = v;
  }
}, 16);
var Info;
module.link("../../../components/Info", {
  "default": function (v) {
    Info = v;
  }
}, 17);
var Label;
module.link("../../../components/Label", {
  "default": function (v) {
    Label = v;
  }
}, 18);
var FormSkeleton;
module.link("../../Skeleton", {
  FormSkeleton: function (v) {
    FormSkeleton = v;
  }
}, 19);

var ContactInfo = function (_ref) {
  var id = _ref.id,
      rid = _ref.rid,
      route = _ref.route;
  var t = useTranslation();
  var routePath = useRoute(route || 'omnichannel-directory');

  var _useEndpointData = useEndpointData('livechat/custom-fields'),
      allCustomFields = _useEndpointData.value,
      stateCustomFields = _useEndpointData.phase;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      customFields = _useState2[0],
      setCustomFields = _useState2[1];

  var formatDate = useFormatDate();
  var dispatchToastMessage = useToastMessageDispatch();

  var canViewCustomFields = function () {
    return hasPermission('view-livechat-room-customfields');
  };

  var onEditButtonClick = useMutableCallback(function () {
    if (!hasPermission('edit-omnichannel-contact')) {
      return dispatchToastMessage({
        type: 'error',
        message: t('Not_authorized')
      });
    }

    routePath.push(route ? {
      tab: 'contact-profile',
      context: 'edit',
      id: rid
    } : {
      page: 'contacts',
      id: id,
      bar: 'edit'
    });
  });
  useEffect(function () {
    if (allCustomFields) {
      var customFieldsAPI = allCustomFields.customFields;
      setCustomFields(customFieldsAPI);
    }
  }, [allCustomFields, stateCustomFields]);

  var _useEndpointData2 = useEndpointData("omnichannel/contact?contactId=" + id),
      data = _useEndpointData2.value,
      state = _useEndpointData2.phase,
      error = _useEndpointData2.error;

  var _useCurrentRoute = useCurrentRoute(),
      _useCurrentRoute2 = _slicedToArray(_useCurrentRoute, 1),
      currentRouteName = _useCurrentRoute2[0];

  var liveRoute = useRoute('live');

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(Box, {
      pi: "x24"
    }, /*#__PURE__*/React.createElement(FormSkeleton, null));
  }

  if (error || !data || !data.contact) {
    return /*#__PURE__*/React.createElement(Box, {
      mbs: "x16"
    }, t('Contact_not_found'));
  }

  var _data$contact = data.contact,
      name = _data$contact.name,
      username = _data$contact.username,
      visitorEmails = _data$contact.visitorEmails,
      phone = _data$contact.phone,
      livechatData = _data$contact.livechatData,
      ts = _data$contact.ts,
      lastChat = _data$contact.lastChat,
      contactManager = _data$contact.contactManager;

  var checkIsVisibleAndScopeVisitor = function (key) {
    var field = customFields.find(function (_ref2) {
      var _id = _ref2._id;
      return _id === key;
    });

    if (field && field.visibility === 'visible' && field.scope === 'visitor') {
      return true;
    }

    return false;
  };

  var onChatHistory = function () {
    var _id = lastChat._id;
    liveRoute.push({
      id: _id,
      tab: 'contact-chat-history'
    });
  };

  var showContactHistory = currentRouteName === 'live';
  var displayName = name || username;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, {
    p: "x24"
  }, /*#__PURE__*/React.createElement(Margins, {
    block: "x4"
  }, displayName && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Name') + " / " + t('Username')), /*#__PURE__*/React.createElement(Info, {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(UserAvatar, {
    size: "x40",
    title: username,
    username: username
  }), /*#__PURE__*/React.createElement(UserCard.Username, {
    mis: "x10",
    name: displayName,
    status: /*#__PURE__*/React.createElement(UserStatus, {
      status: status
    })
  }), username && name && /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mis: "x7",
    mb: "x9",
    align: "center",
    justifyContent: "center"
  }, "(", username, ")"))), visitorEmails && visitorEmails.length && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Email')), /*#__PURE__*/React.createElement(Info, null, visitorEmails[0].address)), phone && phone.length && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Phone')), /*#__PURE__*/React.createElement(Info, null, phone[0].phoneNumber)), ts && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Created_at')), /*#__PURE__*/React.createElement(Info, null, formatDate(ts))), lastChat && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Last_Chat')), /*#__PURE__*/React.createElement(Info, null, formatDate(lastChat.ts))), canViewCustomFields() && livechatData && Object.keys(livechatData).map(function (key) {
    return checkIsVisibleAndScopeVisitor(key) && livechatData[key] && /*#__PURE__*/React.createElement(CustomField, {
      key: key,
      id: key,
      value: livechatData[key]
    });
  }), contactManager && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Contact_Manager')), /*#__PURE__*/React.createElement(ContactManagerInfo, {
    username: contactManager.username
  })))), /*#__PURE__*/React.createElement(VerticalBar.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true
  }, showContactHistory && lastChat && /*#__PURE__*/React.createElement(Button, {
    onClick: onChatHistory
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "history",
    size: "x20"
  }), " ", t('Chat_History')), /*#__PURE__*/React.createElement(Button, {
    onClick: onEditButtonClick
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pencil",
    size: "x20"
  }), " ", t('Edit')))));
};

module.exportDefault(ContactInfo);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/contacts/contextualBar/ec574c93d2bf54aa8d41e0d6c2bb56caae68eb1d.map
