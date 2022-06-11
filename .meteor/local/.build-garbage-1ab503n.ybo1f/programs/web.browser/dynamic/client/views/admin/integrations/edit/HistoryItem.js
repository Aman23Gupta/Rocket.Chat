function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/edit/HistoryItem.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["data"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Button, Icon, Box, Accordion, Field, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  },

  Box(v) {
    Box = v;
  },

  Accordion(v) {
    Accordion = v;
  },

  Field(v) {
    Field = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let eventList;
module.link("../../../../../app/integrations/lib/rocketchat", {
  integrations(v) {
    eventList = v;
  }

}, 3);
let useMethod;
module.link("../../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 4);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let useFormatDateAndTime;
module.link("../../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime(v) {
    useFormatDateAndTime = v;
  }

}, 6);
let useHighlightedCode;
module.link("../../../../hooks/useHighlightedCode", {
  useHighlightedCode(v) {
    useHighlightedCode = v;
  }

}, 7);

function HistoryItem(_ref) {
  let {
    data
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const replayOutgoingIntegration = useMethod('replayOutgoingIntegration');
  const {
    _id,
    _createdAt,
    _updatedAt,
    httpResult,
    event,
    step,
    httpCallData,
    data: dataSentToTrigger,
    prepareSentMessage,
    processSentMessage,
    url,
    httpError,
    errorStack,
    error,
    integration: {
      _id: integrationId
    }
  } = data;
  const createdAt = typeof _createdAt === 'string' ? _createdAt : _createdAt.toISOString();
  const updatedAt = typeof _updatedAt === 'string' ? _updatedAt : _updatedAt.toISOString();
  const handleClickReplay = useMutableCallback(e => {
    e.stopPropagation();
    replayOutgoingIntegration({
      integrationId,
      historyId: _id
    });
  });
  const formatDateAndTime = useFormatDateAndTime();
  const dataSentToTriggerCode = useHighlightedCode('json', JSON.stringify(dataSentToTrigger || '', null, 2));
  const prepareSentMessageCode = useHighlightedCode('json', JSON.stringify(prepareSentMessage || '', null, 2));
  const processSentMessageCode = useHighlightedCode('json', JSON.stringify(processSentMessage || '', null, 2));
  const httpCallDataCode = useHighlightedCode('json', JSON.stringify(httpCallData || '', null, 2));
  const httpErrorCode = useHighlightedCode('json', JSON.stringify(httpError || '', null, 2));
  const httpResultCode = useHighlightedCode('json', JSON.stringify(httpResult || '', null, 2));
  const errorStackCode = useHighlightedCode('json', JSON.stringify(errorStack || '', null, 2));
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
//# sourceMappingURL=/dynamic/client/views/admin/integrations/edit/3370b68db648251c27629459dbd8c1cae1478fcf.map
