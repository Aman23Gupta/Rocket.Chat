function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/edit/HistoryItem.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["data"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Button, Icon, Box, Accordion, Field, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Box: function (v) {
    Box = v;
  },
  Accordion: function (v) {
    Accordion = v;
  },
  Field: function (v) {
    Field = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var eventList;
module.link("../../../../../app/integrations/lib/rocketchat", {
  integrations: function (v) {
    eventList = v;
  }
}, 3);
var useMethod;
module.link("../../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 4);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var useFormatDateAndTime;
module.link("../../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime: function (v) {
    useFormatDateAndTime = v;
  }
}, 6);
var useHighlightedCode;
module.link("../../../../hooks/useHighlightedCode", {
  useHighlightedCode: function (v) {
    useHighlightedCode = v;
  }
}, 7);

function HistoryItem(_ref) {
  var data = _ref.data,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var replayOutgoingIntegration = useMethod('replayOutgoingIntegration');
  var _id = data._id,
      _createdAt = data._createdAt,
      _updatedAt = data._updatedAt,
      httpResult = data.httpResult,
      event = data.event,
      step = data.step,
      httpCallData = data.httpCallData,
      dataSentToTrigger = data.data,
      prepareSentMessage = data.prepareSentMessage,
      processSentMessage = data.processSentMessage,
      url = data.url,
      httpError = data.httpError,
      errorStack = data.errorStack,
      error = data.error,
      integrationId = data.integration._id;
  var createdAt = typeof _createdAt === 'string' ? _createdAt : _createdAt.toISOString();
  var updatedAt = typeof _updatedAt === 'string' ? _updatedAt : _updatedAt.toISOString();
  var handleClickReplay = useMutableCallback(function (e) {
    e.stopPropagation();
    replayOutgoingIntegration({
      integrationId: integrationId,
      historyId: _id
    });
  });
  var formatDateAndTime = useFormatDateAndTime();
  var dataSentToTriggerCode = useHighlightedCode('json', JSON.stringify(dataSentToTrigger || '', null, 2));
  var prepareSentMessageCode = useHighlightedCode('json', JSON.stringify(prepareSentMessage || '', null, 2));
  var processSentMessageCode = useHighlightedCode('json', JSON.stringify(processSentMessage || '', null, 2));
  var httpCallDataCode = useHighlightedCode('json', JSON.stringify(httpCallData || '', null, 2));
  var httpErrorCode = useHighlightedCode('json', JSON.stringify(httpError || '', null, 2));
  var httpResultCode = useHighlightedCode('json', JSON.stringify(httpResult || '', null, 2));
  var errorStackCode = useHighlightedCode('json', JSON.stringify(errorStack || '', null, 2));
  return /*#__PURE__*/React.createElement(Accordion.Item, _extends({
    title: /*#__PURE__*/React.createElement(Box, {
      display: "inline-flex",
      w: "full",
      flexDirection: "row",
      justifyContent: "space-between"
    }, /*#__PURE__*/React.createElement(Box, {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "info-circled",
      size: "x16",
      mie: "x4"
    }), formatDateAndTime(_createdAt)), /*#__PURE__*/React.createElement(Button, {
      ghost: true,
      onClick: handleClickReplay
    }, t('Replay')))
  }, props), /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Status')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    w: "full"
  }, /*#__PURE__*/React.createElement("code", null, error ? t('Failure') : t('Success'))))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Integration_Outgoing_WebHook_History_Time_Triggered')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    w: "full"
  }, /*#__PURE__*/React.createElement("code", null, createdAt)))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Integration_Outgoing_WebHook_History_Time_Ended_Or_Error')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    w: "full"
  }, /*#__PURE__*/React.createElement("code", null, updatedAt)))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Event_Trigger')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    w: "full"
  }, /*#__PURE__*/React.createElement("code", null, t(eventList.outgoingEvents[event].label))))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Integration_Outgoing_WebHook_History_Trigger_Step')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    w: "full"
  }, /*#__PURE__*/React.createElement("code", null, step)))), dataSentToTrigger && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Integration_Outgoing_WebHook_History_Data_Passed_To_Trigger')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    w: "full"
  }, /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", {
    dangerouslySetInnerHTML: {
      __html: dataSentToTriggerCode
    }
  }))))), prepareSentMessage && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Integration_Outgoing_WebHook_History_Messages_Sent_From_Prepare_Script')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    w: "full"
  }, /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", {
    dangerouslySetInnerHTML: {
      __html: prepareSentMessageCode
    }
  }))))), processSentMessage && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Integration_Outgoing_WebHook_History_Messages_Sent_From_Process_Script')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    w: "full"
  }, /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", {
    dangerouslySetInnerHTML: {
      __html: processSentMessageCode
    }
  }))))), url && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('URL')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    w: "full"
  }, /*#__PURE__*/React.createElement("code", null, url)))), httpCallData && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Integration_Outgoing_WebHook_History_Data_Passed_To_URL')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    w: "full"
  }, /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", {
    dangerouslySetInnerHTML: {
      __html: httpCallDataCode
    }
  }))))), httpError && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Integration_Outgoing_WebHook_History_Http_Response_Error')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    w: "full"
  }, /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", {
    dangerouslySetInnerHTML: {
      __html: httpErrorCode
    }
  }))))), httpResult && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Integration_Outgoing_WebHook_History_Http_Response')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    w: "full"
  }, /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", {
    dangerouslySetInnerHTML: {
      __html: httpResultCode
    }
  }))))), errorStack && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Integration_Outgoing_WebHook_History_Error_Stacktrace')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    w: "full"
  }, /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", {
    dangerouslySetInnerHTML: {
      __html: errorStackCode
    }
  })))))));
}

module.exportDefault(HistoryItem);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/edit/81e86b76d319e9f8a29c541b362afa79dea4a03d.map
