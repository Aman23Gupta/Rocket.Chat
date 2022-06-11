function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/OutgoiongWebhookForm.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["formValues", "formHandlers", "append"];

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

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 2);
module.export({
  default: () => OutgoingWebhookForm
});
let Field, TextInput, Box, ToggleSwitch, Icon, TextAreaInput, FieldGroup, Margins, Select, Accordion;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Box(v) {
    Box = v;
  },

  ToggleSwitch(v) {
    ToggleSwitch = v;
  },

  Icon(v) {
    Icon = v;
  },

  TextAreaInput(v) {
    TextAreaInput = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  },

  Margins(v) {
    Margins = v;
  },

  Select(v) {
    Select = v;
  },

  Accordion(v) {
    Accordion = v;
  }

}, 0);
let React, useMemo, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let eventList;
module.link("../../../../app/integrations/lib/rocketchat", {
  integrations(v) {
    eventList = v;
  }

}, 2);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let useHighlightedCode;
module.link("../../../hooks/useHighlightedCode", {
  useHighlightedCode(v) {
    useHighlightedCode = v;
  }

}, 5);
let useExampleData;
module.link("./exampleIncomingData", {
  useExampleData(v) {
    useExampleData = v;
  }

}, 6);
const {
  outgoingEvents
} = eventList;

function OutgoingWebhookForm(_ref) {
  let {
    formValues,
    formHandlers,
    append
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const {
    enabled,
    impersonateUser,
    event,
    urls,
    triggerWords,
    targetRoom,
    channel,
    username,
    name,
    alias,
    avatar: avatarUrl,
    emoji,
    token,
    scriptEnabled,
    script,
    retryFailedCalls,
    retryCount,
    retryDelay,
    triggerWordAnywhere,
    runOnEdits
  } = formValues;
  const {
    handleEvent,
    handleEnabled,
    handleName,
    handleChannel,
    handleTriggerWords,
    handleTargetRoom,
    handleUrls,
    handleImpersonateUser,
    handleUsername,
    handleAlias,
    handleAvatar,
    handleEmoji,
    handleToken,
    handleScriptEnabled,
    handleScript,
    handleRetryFailedCalls,
    handleRetryCount,
    handleRetryDelay,
    handleTriggerWordAnywhere,
    handleRunOnEdits
  } = formHandlers;
  const retryDelayOptions = useMemo(() => [['powers-of-ten', t('powers-of-ten')], ['powers-of-two', t('powers-of-two')], ['increments-of-two', t('increments-of-two')]], [t]);
  const eventOptions = useMemo(() => Object.entries(outgoingEvents).map(_ref2 => {
    let [key, val] = _ref2;
    return [key, t(val.label)];
  }), [t]);
  const showChannel = useMemo(() => outgoingEvents[event].use.channel, [event]);
  const showTriggerWords = useMemo(() => outgoingEvents[event].use.triggerWords, [event]);
  const showTargetRoom = useMemo(() => outgoingEvents[event].use.targetRoom, [event]);
  const additionalFields = useMemo(() => _objectSpread(_objectSpread(_objectSpread({}, alias && {
    alias
  }), emoji && {
    emoji
  }), avatarUrl && {
    avatar: avatarUrl
  }), [alias, avatarUrl, emoji]);
  const [exampleData] = useExampleData({
    additionalFields,
    url: null
  });
  const hilightedExampleJson = useHighlightedCode('json', JSON.stringify(exampleData, null, 2));
  return /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, _extends({
    pb: "x24",
    mi: "neg-x24",
    is: "form",
    onSubmit: useCallback(e => e.preventDefault(), []),
    "qa-admin-user-edit": "form"
  }, props), /*#__PURE__*/React.createElement(Margins, {
    block: "x16"
  }, /*#__PURE__*/React.createElement(Accordion, {
    width: "x600",
    alignSelf: "center"
  }, /*#__PURE__*/React.createElement(FieldGroup, null, useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Event_Trigger')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    flexGrow: 1,
    value: event,
    options: eventOptions,
    onChange: handleEvent
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Event_Trigger_Description'))), [event, eventOptions, handleEvent, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    display: "flex",
    justifyContent: "space-between",
    w: "full"
  }, t('Enabled'), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: enabled,
    onChange: handleEnabled
  }))), [enabled, handleEnabled, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Name_optional')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    value: name,
    onChange: handleName
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('You_should_name_it_to_easily_manage_your_integrations'))), [handleName, name, t]), useMemo(() => showChannel && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Channel')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    value: channel,
    onChange: handleChannel,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "at",
      size: "x20"
    })
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Channel_to_listen_on')), /*#__PURE__*/React.createElement(Field.Hint, {
    dangerouslySetInnerHTML: {
      __html: t('Start_with_s_for_user_or_s_for_channel_Eg_s_or_s', '@', '#', '@john', '#general')
    }
  }), /*#__PURE__*/React.createElement(Field.Hint, {
    dangerouslySetInnerHTML: {
      __html: t('Integrations_for_all_channels')
    }
  })), [showChannel, t, channel, handleChannel]), useMemo(() => showTriggerWords && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Trigger_Words')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    value: triggerWords,
    onChange: handleTriggerWords
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('When_a_line_starts_with_one_of_there_words_post_to_the_URLs_below')), /*#__PURE__*/React.createElement(Field.Hint, null, t('Separate_multiple_words_with_commas'))), [handleTriggerWords, showTriggerWords, t, triggerWords]), useMemo(() => showTargetRoom && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('TargetRoom')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    value: targetRoom,
    onChange: handleTargetRoom
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('TargetRoom_Description')), /*#__PURE__*/React.createElement(Field.Hint, {
    dangerouslySetInnerHTML: {
      __html: t('Start_with_s_for_user_or_s_for_channel_Eg_s_or_s', '@', '#', '@john', '#general')
    }
  })), [handleTargetRoom, showTargetRoom, t, targetRoom]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('URLs')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    rows: 10,
    flexGrow: 1,
    value: urls,
    onChange: handleUrls,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "permalink",
      size: "x20"
    })
  }))), [handleUrls, t, urls]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    display: "flex",
    justifyContent: "space-between",
    w: "full"
  }, t('Impersonate_user'), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: impersonateUser,
    onChange: handleImpersonateUser
  }))), [handleImpersonateUser, impersonateUser, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Post_as')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    value: username,
    onChange: handleUsername,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "user",
      size: "x20"
    })
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Choose_the_username_that_this_integration_will_post_as')), /*#__PURE__*/React.createElement(Field.Hint, null, t('Should_exists_a_user_with_this_username'))), [handleUsername, t, username]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, "".concat(t('Alias'), " (").concat(t('optional'), ")")), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    value: alias,
    onChange: handleAlias,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "edit",
      size: "x20"
    })
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Choose_the_alias_that_will_appear_before_the_username_in_messages'))), [alias, handleAlias, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, "".concat(t('Avatar_URL'), " (").concat(t('optional'), ")")), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    value: avatarUrl,
    onChange: handleAvatar,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "user-rounded",
      size: "x20",
      alignSelf: "center"
    })
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('You_can_change_a_different_avatar_too')), /*#__PURE__*/React.createElement(Field.Hint, null, t('Should_be_a_URL_of_an_image'))), [avatarUrl, handleAvatar, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, "".concat(t('Emoji'), " (").concat(t('optional'), ")")), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    value: emoji,
    onChange: handleEmoji,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "emoji",
      size: "x20",
      alignSelf: "center"
    })
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('You_can_use_an_emoji_as_avatar')), /*#__PURE__*/React.createElement(Field.Hint, {
    dangerouslySetInnerHTML: {
      __html: t('Example_s', ':ghost:')
    }
  })), [emoji, handleEmoji, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, "".concat(t('Token'), " (").concat(t('Optional'), ")")), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    value: token,
    onChange: handleToken,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "key",
      size: "x20"
    })
  }))), [handleToken, t, token]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    display: "flex",
    justifyContent: "space-between",
    w: "full"
  }, t('Script_Enabled'), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: scriptEnabled,
    onChange: handleScriptEnabled
  }))), [handleScriptEnabled, scriptEnabled, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Script')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    rows: 10,
    flexGrow: 1,
    value: script,
    onChange: handleScript,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "code",
      size: "x20",
      alignSelf: "center"
    })
  }))), [handleScript, script, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Responding')), /*#__PURE__*/React.createElement(Field.Hint, null, t('Response_description_pre')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2",
    withRichContent: true,
    flexGrow: 1
  }, /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", {
    dangerouslySetInnerHTML: {
      __html: hilightedExampleJson
    }
  })))), /*#__PURE__*/React.createElement(Field.Hint, null, t('Response_description_post'))), [hilightedExampleJson, t])), /*#__PURE__*/React.createElement(Accordion.Item, {
    title: t('Integration_Advanced_Settings')
  }, /*#__PURE__*/React.createElement(FieldGroup, null, useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    display: "flex",
    justifyContent: "space-between",
    w: "full"
  }, t('Integration_Retry_Failed_Url_Calls'), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: retryFailedCalls,
    onChange: handleRetryFailedCalls
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Integration_Retry_Failed_Url_Calls_Description'))), [handleRetryFailedCalls, retryFailedCalls, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Retry_Count')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    value: retryCount,
    onChange: handleRetryCount
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Integration_Retry_Count_Description'))), [handleRetryCount, retryCount, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Integration_Retry_Delay')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    flexGrow: 1,
    value: retryDelay,
    options: retryDelayOptions,
    onChange: handleRetryDelay
  })), /*#__PURE__*/React.createElement(Field.Hint, {
    dangerouslySetInnerHTML: {
      __html: t('Integration_Retry_Delay_Description')
    }
  })), [handleRetryDelay, retryDelay, retryDelayOptions, t]), useMemo(() => event === 'sendMessage' && /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    display: "flex",
    justifyContent: "space-between",
    w: "full"
  }, t('Integration_Word_Trigger_Placement'), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: triggerWordAnywhere,
    onChange: handleTriggerWordAnywhere
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Integration_Word_Trigger_Placement_Description'))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    display: "flex",
    justifyContent: "space-between",
    w: "full"
  }, t('Integration_Run_When_Message_Is_Edited'), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: runOnEdits,
    onChange: handleRunOnEdits
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Integration_Run_When_Message_Is_Edited_Description')))), [event, t, triggerWordAnywhere, handleTriggerWordAnywhere, runOnEdits, handleRunOnEdits]))), append)));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/97ff74526aa137a7d1a6a065eaf11822216db837.map
