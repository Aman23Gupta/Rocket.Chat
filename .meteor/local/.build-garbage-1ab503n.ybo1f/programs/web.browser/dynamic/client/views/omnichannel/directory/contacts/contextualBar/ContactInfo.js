function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/contacts/contextualBar/ContactInfo.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Margins, ButtonGroup, Button, Icon;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Margins(v) {
    Margins = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useEffect, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let hasPermission;
module.link("../../../../../../app/authorization/client", {
  hasPermission(v) {
    hasPermission = v;
  }

}, 3);
let ContactManagerInfo;
module.link("../../../../../../ee/client/omnichannel/ContactManagerInfo", {
  default(v) {
    ContactManagerInfo = v;
  }

}, 4);
let UserCard;
module.link("../../../../../components/UserCard/UserCard", {
  default(v) {
    UserCard = v;
  }

}, 5);
let UserStatus;
module.link("../../../../../components/UserStatus", {
  UserStatus(v) {
    UserStatus = v;
  }

}, 6);
let VerticalBar;
module.link("../../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 7);
let UserAvatar;
module.link("../../../../../components/avatar/UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 8);
let useCurrentRoute, useRoute;
module.link("../../../../../contexts/RouterContext", {
  useCurrentRoute(v) {
    useCurrentRoute = v;
  },

  useRoute(v) {
    useRoute = v;
  }

}, 9);
let useToastMessageDispatch;
module.link("../../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 10);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 11);
let AsyncStatePhase;
module.link("../../../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 12);
let useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 13);
let useFormatDate;
module.link("../../../../../hooks/useFormatDate", {
  useFormatDate(v) {
    useFormatDate = v;
  }

}, 14);
let CustomField;
module.link("../../../components/CustomField", {
  default(v) {
    CustomField = v;
  }

}, 15);
let Field;
module.link("../../../components/Field", {
  default(v) {
    Field = v;
  }

}, 16);
let Info;
module.link("../../../components/Info", {
  default(v) {
    Info = v;
  }

}, 17);
let Label;
module.link("../../../components/Label", {
  default(v) {
    Label = v;
  }

}, 18);
let FormSkeleton;
module.link("../../Skeleton", {
  FormSkeleton(v) {
    FormSkeleton = v;
  }

}, 19);

const ContactInfo = _ref => {
  let {
    id,
    rid,
    route
  } = _ref;
  const t = useTranslation();
  const routePath = useRoute(route || 'omnichannel-directory');
  const {
    value: allCustomFields,
    phase: stateCustomFields
  } = useEndpointData('livechat/custom-fields');
  const [customFields, setCustomFields] = useState([]);
  const formatDate = useFormatDate();
  const dispatchToastMessage = useToastMessageDispatch();

  const canViewCustomFields = () => hasPermission('view-livechat-room-customfields');

  const onEditButtonClick = useMutableCallback(() => {
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
      id,
      bar: 'edit'
    });
  });
  useEffect(() => {
    if (allCustomFields) {
      const {
        customFields: customFieldsAPI
      } = allCustomFields;
      setCustomFields(customFieldsAPI);
    }
  }, [allCustomFields, stateCustomFields]);
  const {
    value: data,
    phase: state,
    error
  } = useEndpointData("omnichannel/contact?contactId=".concat(id));
  const [currentRouteName] = useCurrentRoute();
  const liveRoute = useRoute('live');

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

  const {
    contact: {
      name,
      username,
      visitorEmails,
      phone,
      livechatData,
      ts,
      lastChat,
      contactManager
    }
  } = data;

  const checkIsVisibleAndScopeVisitor = key => {
    const field = customFields.find(_ref2 => {
      let {
        _id
      } = _ref2;
      return _id === key;
    });

    if (field && field.visibility === 'visible' && field.scope === 'visitor') {
      return true;
    }

    return false;
  };

  const onChatHistory = () => {
    const {
      _id
    } = lastChat;
    liveRoute.push({
      id: _id,
      tab: 'contact-chat-history'
    });
  };

  const showContactHistory = currentRouteName === 'live';
  const displayName = name || username;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, {
    p: "x24"
  }, /*#__PURE__*/React.createElement(Margins, {
    block: "x4"
  }, displayName && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, "".concat(t('Name'), " / ").concat(t('Username'))), /*#__PURE__*/React.createElement(Info, {
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
  }, "(", username, ")"))), visitorEmails && visitorEmails.length && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Email')), /*#__PURE__*/React.createElement(Info, null, visitorEmails[0].address)), phone && phone.length && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Phone')), /*#__PURE__*/React.createElement(Info, null, phone[0].phoneNumber)), ts && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Created_at')), /*#__PURE__*/React.createElement(Info, null, formatDate(ts))), lastChat && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Last_Chat')), /*#__PURE__*/React.createElement(Info, null, formatDate(lastChat.ts))), canViewCustomFields() && livechatData && Object.keys(livechatData).map(key => checkIsVisibleAndScopeVisitor(key) && livechatData[key] && /*#__PURE__*/React.createElement(CustomField, {
    key: key,
    id: key,
    value: livechatData[key]
  })), contactManager && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Contact_Manager')), /*#__PURE__*/React.createElement(ContactManagerInfo, {
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/contacts/contextualBar/835135793b1df5f9505e825c54f2400eaf831b8c.map
