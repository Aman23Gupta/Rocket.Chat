function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/contextualBar/ChatInfo.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Box, Margins, Tag, Button, Icon, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  Tag: function (v) {
    Tag = v;
  },
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 2);
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 3);
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
}, 4);
var hasPermission;
module.link("../../../../../../app/authorization/client", {
  hasPermission: function (v) {
    hasPermission = v;
  }
}, 5);
var VerticalBar;
module.link("../../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 6);
var useRoute;
module.link("../../../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 7);
var useToastMessageDispatch;
module.link("../../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 8);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 9);
var useUserSubscription;
module.link("../../../../../contexts/UserContext", {
  useUserSubscription: function (v) {
    useUserSubscription = v;
  }
}, 10);
var useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 11);
var useFormatDateAndTime;
module.link("../../../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime: function (v) {
    useFormatDateAndTime = v;
  }
}, 12);
var useFormatDuration;
module.link("../../../../../hooks/useFormatDuration", {
  useFormatDuration: function (v) {
    useFormatDuration = v;
  }
}, 13);
var useOmnichannelRoom;
module.link("../../../../room/contexts/RoomContext", {
  useOmnichannelRoom: function (v) {
    useOmnichannelRoom = v;
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
var AgentField;
module.link("./AgentField", {
  "default": function (v) {
    AgentField = v;
  }
}, 19);
var ContactField;
module.link("./ContactField", {
  "default": function (v) {
    ContactField = v;
  }
}, 20);
var DepartmentField;
module.link("./DepartmentField", {
  "default": function (v) {
    DepartmentField = v;
  }
}, 21);
var PriorityField;
module.link("./PriorityField", {
  "default": function (v) {
    PriorityField = v;
  }
}, 22);
var SourceField;
module.link("./SourceField", {
  "default": function (v) {
    SourceField = v;
  }
}, 23);
var VisitorClientInfo;
module.link("./VisitorClientInfo", {
  "default": function (v) {
    VisitorClientInfo = v;
  }
}, 24);

// TODO: Remove moment we are mixing moment and our own formatters :sadface:
function ChatInfo(_ref) {
  var _metrics$response;

  var id = _ref.id,
      route = _ref.route;
  var t = useTranslation();
  var formatDateAndTime = useFormatDateAndTime();

  var _useEndpointData = useEndpointData('livechat/custom-fields'),
      allCustomFields = _useEndpointData.value,
      stateCustomFields = _useEndpointData.phase;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      customFields = _useState2[0],
      setCustomFields = _useState2[1];

  var formatDuration = useFormatDuration();
  var room = useOmnichannelRoom();

  var _ref2 = room || {
    room: {
      v: {}
    }
  },
      ts = _ref2.ts,
      tags = _ref2.tags,
      closedAt = _ref2.closedAt,
      departmentId = _ref2.departmentId,
      v = _ref2.v,
      servedBy = _ref2.servedBy,
      metrics = _ref2.metrics,
      topic = _ref2.topic,
      waitingResponse = _ref2.waitingResponse,
      responseBy = _ref2.responseBy,
      priorityId = _ref2.priorityId,
      livechatData = _ref2.livechatData,
      source = _ref2.source,
      queuedAt = _ref2.queuedAt;

  var routePath = useRoute(route || 'omnichannel-directory'); // TODO: use hook instead

  var canViewCustomFields = function () {
    return hasPermission('view-livechat-room-customfields');
  };

  var subscription = useUserSubscription(id); // TODO: use hook instead

  var hasGlobalEditRoomPermission = hasPermission('save-others-livechat-room-info');
  var hasLocalEditRoomPermission = (servedBy === null || servedBy === void 0 ? void 0 : servedBy._id) === Meteor.userId();
  var visitorId = v === null || v === void 0 ? void 0 : v._id;
  var queueStartedAt = queuedAt || ts;
  var dispatchToastMessage = useToastMessageDispatch();
  useEffect(function () {
    if (allCustomFields) {
      var customFieldsAPI = allCustomFields.customFields;
      setCustomFields(customFieldsAPI);
    }
  }, [allCustomFields, stateCustomFields]);

  var checkIsVisibleAndScopeRoom = function (key) {
    var field = customFields.find(function (_ref3) {
      var _id = _ref3._id;
      return _id === key;
    });

    if (field && field.visibility === 'visible' && field.scope === 'room') {
      return true;
    }

    return false;
  };

  var onEditClick = useMutableCallback(function () {
    var hasEditAccess = !!subscription || hasLocalEditRoomPermission || hasGlobalEditRoomPermission;

    if (!hasEditAccess) {
      return dispatchToastMessage({
        type: 'error',
        message: t('Not_authorized')
      });
    }

    routePath.push(route ? {
      tab: 'room-info',
      context: 'edit',
      id: id
    } : {
      page: 'chats',
      id: id,
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
  }), tags && tags.length > 0 && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Tags')), /*#__PURE__*/React.createElement(Info, null, tags.map(function (tag) {
    return /*#__PURE__*/React.createElement(Box, {
      key: tag,
      mie: "x4",
      display: "inline"
    }, /*#__PURE__*/React.createElement(Tag, {
      style: {
        display: 'inline'
      },
      disabled: true
    }, tag));
  }))), topic && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Topic')), /*#__PURE__*/React.createElement(Info, null, topic)), queueStartedAt && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Queue_Time')), servedBy ? /*#__PURE__*/React.createElement(Info, null, moment(servedBy.ts).from(moment(queueStartedAt), true)) : /*#__PURE__*/React.createElement(Info, null, moment(queueStartedAt).fromNow(true))), closedAt && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Chat_Duration')), /*#__PURE__*/React.createElement(Info, null, moment(closedAt).from(moment(ts), true))), ts && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Created_at')), /*#__PURE__*/React.createElement(Info, null, formatDateAndTime(ts))), closedAt && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Closed_At')), /*#__PURE__*/React.createElement(Info, null, formatDateAndTime(closedAt))), (servedBy === null || servedBy === void 0 ? void 0 : servedBy.ts) && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Taken_at')), /*#__PURE__*/React.createElement(Info, null, formatDateAndTime(servedBy.ts))), (metrics === null || metrics === void 0 ? void 0 : (_metrics$response = metrics.response) === null || _metrics$response === void 0 ? void 0 : _metrics$response.avg) && formatDuration(metrics.response.avg) && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Avg_response_time')), /*#__PURE__*/React.createElement(Info, null, formatDuration(metrics.response.avg))), !waitingResponse && (responseBy === null || responseBy === void 0 ? void 0 : responseBy.lastMessageTs) && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Inactivity_Time')), /*#__PURE__*/React.createElement(Info, null, moment(responseBy.lastMessageTs).fromNow(true))), canViewCustomFields() && livechatData && Object.keys(livechatData).map(function (key) {
    return checkIsVisibleAndScopeRoom(key) && livechatData[key] && /*#__PURE__*/React.createElement(CustomField, {
      key: key,
      id: key,
      value: livechatData[key]
    });
  }), priorityId && /*#__PURE__*/React.createElement(PriorityField, {
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/contextualBar/940d1b7b1af50d5396c09b168fa739147c06edd3.map
