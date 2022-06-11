function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/contextualBar/ChatInfo.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Margins, Tag, Button, Icon, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Margins(v) {
    Margins = v;
  },

  Tag(v) {
    Tag = v;
  },

  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 2);
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 3);
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

}, 4);
let hasPermission;
module.link("../../../../../../app/authorization/client", {
  hasPermission(v) {
    hasPermission = v;
  }

}, 5);
let VerticalBar;
module.link("../../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 6);
let useRoute;
module.link("../../../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 7);
let useToastMessageDispatch;
module.link("../../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 8);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 9);
let useUserSubscription;
module.link("../../../../../contexts/UserContext", {
  useUserSubscription(v) {
    useUserSubscription = v;
  }

}, 10);
let useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 11);
let useFormatDateAndTime;
module.link("../../../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime(v) {
    useFormatDateAndTime = v;
  }

}, 12);
let useFormatDuration;
module.link("../../../../../hooks/useFormatDuration", {
  useFormatDuration(v) {
    useFormatDuration = v;
  }

}, 13);
let useOmnichannelRoom;
module.link("../../../../room/contexts/RoomContext", {
  useOmnichannelRoom(v) {
    useOmnichannelRoom = v;
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
let AgentField;
module.link("./AgentField", {
  default(v) {
    AgentField = v;
  }

}, 19);
let ContactField;
module.link("./ContactField", {
  default(v) {
    ContactField = v;
  }

}, 20);
let DepartmentField;
module.link("./DepartmentField", {
  default(v) {
    DepartmentField = v;
  }

}, 21);
let PriorityField;
module.link("./PriorityField", {
  default(v) {
    PriorityField = v;
  }

}, 22);
let SourceField;
module.link("./SourceField", {
  default(v) {
    SourceField = v;
  }

}, 23);
let VisitorClientInfo;
module.link("./VisitorClientInfo", {
  default(v) {
    VisitorClientInfo = v;
  }

}, 24);

// TODO: Remove moment we are mixing moment and our own formatters :sadface:
function ChatInfo(_ref) {
  var _metrics$response;

  let {
    id,
    route
  } = _ref;
  const t = useTranslation();
  const formatDateAndTime = useFormatDateAndTime();
  const {
    value: allCustomFields,
    phase: stateCustomFields
  } = useEndpointData('livechat/custom-fields');
  const [customFields, setCustomFields] = useState([]);
  const formatDuration = useFormatDuration();
  const room = useOmnichannelRoom();
  const {
    ts,
    tags,
    closedAt,
    departmentId,
    v,
    servedBy,
    metrics,
    topic,
    waitingResponse,
    responseBy,
    priorityId,
    livechatData,
    source,
    queuedAt
  } = room || {
    room: {
      v: {}
    }
  };
  const routePath = useRoute(route || 'omnichannel-directory'); // TODO: use hook instead

  const canViewCustomFields = () => hasPermission('view-livechat-room-customfields');

  const subscription = useUserSubscription(id); // TODO: use hook instead

  const hasGlobalEditRoomPermission = hasPermission('save-others-livechat-room-info');
  const hasLocalEditRoomPermission = (servedBy === null || servedBy === void 0 ? void 0 : servedBy._id) === Meteor.userId();
  const visitorId = v === null || v === void 0 ? void 0 : v._id;
  const queueStartedAt = queuedAt || ts;
  const dispatchToastMessage = useToastMessageDispatch();
  useEffect(() => {
    if (allCustomFields) {
      const {
        customFields: customFieldsAPI
      } = allCustomFields;
      setCustomFields(customFieldsAPI);
    }
  }, [allCustomFields, stateCustomFields]);

  const checkIsVisibleAndScopeRoom = key => {
    const field = customFields.find(_ref2 => {
      let {
        _id
      } = _ref2;
      return _id === key;
    });

    if (field && field.visibility === 'visible' && field.scope === 'room') {
      return true;
    }

    return false;
  };

  const onEditClick = useMutableCallback(() => {
    const hasEditAccess = !!subscription || hasLocalEditRoomPermission || hasGlobalEditRoomPermission;

    if (!hasEditAccess) {
      return dispatchToastMessage({
        type: 'error',
        message: t('Not_authorized')
      });
    }

    routePath.push(route ? {
      tab: 'room-info',
      context: 'edit',
      id
    } : {
      page: 'chats',
      id,
      bar: 'edit'
    });
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, {
    p: "x24"
  }, /*#__PURE__*/React.createElement(Margins, {
    block: "x4"
  }, source && /*#__PURE__*/React.createElement(SourceField, {
    room: room
  }), room && v && /*#__PURE__*/React.createElement(ContactField, {
    contact: v,
    room: room
  }), visitorId && /*#__PURE__*/React.createElement(VisitorClientInfo, {
    uid: visitorId
  }), servedBy && /*#__PURE__*/React.createElement(AgentField, {
    agent: servedBy
  }), departmentId && /*#__PURE__*/React.createElement(DepartmentField, {
    departmentId: departmentId
  }), tags && tags.length > 0 && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Tags')), /*#__PURE__*/React.createElement(Info, null, tags.map(tag => /*#__PURE__*/React.createElement(Box, {
    key: tag,
    mie: "x4",
    display: "inline"
  }, /*#__PURE__*/React.createElement(Tag, {
    style: {
      display: 'inline'
    },
    disabled: true
  }, tag))))), topic && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Topic')), /*#__PURE__*/React.createElement(Info, null, topic)), queueStartedAt && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Queue_Time')), servedBy ? /*#__PURE__*/React.createElement(Info, null, moment(servedBy.ts).from(moment(queueStartedAt), true)) : /*#__PURE__*/React.createElement(Info, null, moment(queueStartedAt).fromNow(true))), closedAt && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Chat_Duration')), /*#__PURE__*/React.createElement(Info, null, moment(closedAt).from(moment(ts), true))), ts && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Created_at')), /*#__PURE__*/React.createElement(Info, null, formatDateAndTime(ts))), closedAt && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Closed_At')), /*#__PURE__*/React.createElement(Info, null, formatDateAndTime(closedAt))), (servedBy === null || servedBy === void 0 ? void 0 : servedBy.ts) && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Taken_at')), /*#__PURE__*/React.createElement(Info, null, formatDateAndTime(servedBy.ts))), (metrics === null || metrics === void 0 ? void 0 : (_metrics$response = metrics.response) === null || _metrics$response === void 0 ? void 0 : _metrics$response.avg) && formatDuration(metrics.response.avg) && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Avg_response_time')), /*#__PURE__*/React.createElement(Info, null, formatDuration(metrics.response.avg))), !waitingResponse && (responseBy === null || responseBy === void 0 ? void 0 : responseBy.lastMessageTs) && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Inactivity_Time')), /*#__PURE__*/React.createElement(Info, null, moment(responseBy.lastMessageTs).fromNow(true))), canViewCustomFields() && livechatData && Object.keys(livechatData).map(key => checkIsVisibleAndScopeRoom(key) && livechatData[key] && /*#__PURE__*/React.createElement(CustomField, {
    key: key,
    id: key,
    value: livechatData[key]
  })), priorityId && /*#__PURE__*/React.createElement(PriorityField, {
    id: priorityId
  }))), /*#__PURE__*/React.createElement(VerticalBar.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onEditClick
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pencil",
    size: "x20"
  }), " ", t('Edit')))));
}

module.exportDefault(ChatInfo);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/contextualBar/3665c37ad867bc7cd8225f48ea7683d328b6e04c.map
