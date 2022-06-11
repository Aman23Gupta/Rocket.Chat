function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/OutgoiongWebhookForm.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["formValues", "formHandlers", "append"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 3);
module.export({
  "default": function () {
    return OutgoingWebhookForm;
  }
});
var Field, TextInput, Box, ToggleSwitch, Icon, TextAreaInput, FieldGroup, Margins, Select, Accordion;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Box: function (v) {
    Box = v;
  },
  ToggleSwitch: function (v) {
    ToggleSwitch = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  TextAreaInput: function (v) {
    TextAreaInput = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  Select: function (v) {
    Select = v;
  },
  Accordion: function (v) {
    Accordion = v;
  }
}, 0);
var React, useMemo, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var eventList;
module.link("../../../../app/integrations/lib/rocketchat", {
  integrations: function (v) {
    eventList = v;
  }
}, 2);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var useHighlightedCode;
module.link("../../../hooks/useHighlightedCode", {
  useHighlightedCode: function (v) {
    useHighlightedCode = v;
  }
}, 5);
var useExampleData;
module.link("./exampleIncomingData", {
  useExampleData: function (v) {
    useExampleData = v;
  }
}, 6);
var _eventList = eventList,
    outgoingEvents = _eventList.outgoingEvents;

function OutgoingWebhookForm(_ref) {
  var formValues = _ref.formValues,
      formHandlers = _ref.formHandlers,
      append = _ref.append,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var enabled = formValues.enabled,
      impersonateUser = formValues.impersonateUser,
      event = formValues.event,
      urls = formValues.urls,
      triggerWords = formValues.triggerWords,
      targetRoom = formValues.targetRoom,
      channel = formValues.channel,
      username = formValues.username,
      name = formValues.name,
      alias = formValues.alias,
      avatarUrl = formValues.avatar,
      emoji = formValues.emoji,
      token = formValues.token,
      scriptEnabled = formValues.scriptEnabled,
      script = formValues.script,
      retryFailedCalls = formValues.retryFailedCalls,
      retryCount = formValues.retryCount,
      retryDelay = formValues.retryDelay,
      triggerWordAnywhere = formValues.triggerWordAnywhere,
      runOnEdits = formValues.runOnEdits;
  var handleEvent = formHandlers.handleEvent,
      handleEnabled = formHandlers.handleEnabled,
      handleName = formHandlers.handleName,
      handleChannel = formHandlers.handleChannel,
      handleTriggerWords = formHandlers.handleTriggerWords,
      handleTargetRoom = formHandlers.handleTargetRoom,
      handleUrls = formHandlers.handleUrls,
      handleImpersonateUser = formHandlers.handleImpersonateUser,
      handleUsername = formHandlers.handleUsername,
      handleAlias = formHandlers.handleAlias,
      handleAvatar = formHandlers.handleAvatar,
      handleEmoji = formHandlers.handleEmoji,
      handleToken = formHandlers.handleToken,
      handleScriptEnabled = formHandlers.handleScriptEnabled,
      handleScript = formHandlers.handleScript,
      handleRetryFailedCalls = formHandlers.handleRetryFailedCalls,
      handleRetryCount = formHandlers.handleRetryCount,
      handleRetryDelay = formHandlers.handleRetryDelay,
      handleTriggerWordAnywhere = formHandlers.handleTriggerWordAnywhere,
      handleRunOnEdits = formHandlers.handleRunOnEdits;
  var retryDelayOptions = useMemo(function () {
    return [['powers-of-ten', t('powers-of-ten')], ['powers-of-two', t('powers-of-two')], ['increments-of-two', t('increments-of-two')]];
  }, [t]);
  var eventOptions = useMemo(function () {
    return Object.entries(outgoingEvents).map(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          key = _ref3[0],
          val = _ref3[1];

      return [key, t(val.label)];
    });
  }, [t]);
  var showChannel = useMemo(function () {
    return outgoingEvents[event].use.channel;
  }, [event]);
  var showTriggerWords = useMemo(function () {
    return outgoingEvents[event].use.triggerWords;
  }, [event]);
  var showTargetRoom = useMemo(function () {
    return outgoingEvents[event].use.targetRoom;
  }, [event]);
  var additionalFields = useMemo(function () {
    return _objectSpread(_objectSpread(_objectSpread({}, alias && {
      alias: alias
    }), emoji && {
      emoji: emoji
    }), avatarUrl && {
      avatar: avatarUrl
    });
  }, [alias, avatarUrl, emoji]);

  var _useExampleData = useExampleData({
    additionalFields: additionalFields,
    url: null
  }),
      _useExampleData2 = _slicedToArray(_useExampleData, 1),
      exampleData = _useExampleData2[0];

  var hilightedExampleJson = useHighlightedCode('json', JSON.stringify(exampleData, null, 2));
  return /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, _extends({
    pb: "x24",
    mi: "neg-x24",
    is: "form",
    onSubmit: useCallback(function (e) {
      return e.preventDefault();
    }, []),
    "qa-admin-user-edit": "form"
  }, props), /*#__PURE__*/React.createElement(Margins, {
    block: "x16"
  }, /*#__PURE__*/React.createElement(Accordion, {
    width: "x600",
    alignSelf: "center"
  }, /*#__PURE__*/React.createElement(FieldGroup, null, useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Event_Trigger')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
      flexGrow: 1,
      value: event,
      options: eventOptions,
      onChange: handleEvent
    })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Event_Trigger_Description')));
  }, [event, eventOptions, handleEvent, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
      display: "flex",
      justifyContent: "space-between",
      w: "full"
    }, t('Enabled'), /*#__PURE__*/React.createElement(ToggleSwitch, {
      checked: enabled,
      onChange: handleEnabled
    })));
  }, [enabled, handleEnabled, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Name_optional')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      flexGrow: 1,
      value: name,
      onChange: handleName
    })), /*#__PURE__*/React.createElement(Field.Hint, null, t('You_should_name_it_to_easily_manage_your_integrations')));
  }, [handleName, name, t]), useMemo(function () {
    return showChannel && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Channel')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
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
    }));
  }, [showChannel, t, channel, handleChannel]), useMemo(function () {
    return showTriggerWords && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Trigger_Words')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      flexGrow: 1,
      value: triggerWords,
      onChange: handleTriggerWords
    })), /*#__PURE__*/React.createElement(Field.Hint, null, t('When_a_line_starts_with_one_of_there_words_post_to_the_URLs_below')), /*#__PURE__*/React.createElement(Field.Hint, null, t('Separate_multiple_words_with_commas')));
  }, [handleTriggerWords, showTriggerWords, t, triggerWords]), useMemo(function () {
    return showTargetRoom && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('TargetRoom')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      flexGrow: 1,
      value: targetRoom,
      onChange: handleTargetRoom
    })), /*#__PURE__*/React.createElement(Field.Hint, null, t('TargetRoom_Description')), /*#__PURE__*/React.createElement(Field.Hint, {
      dangerouslySetInnerHTML: {
        __html: t('Start_with_s_for_user_or_s_for_channel_Eg_s_or_s', '@', '#', '@john', '#general')
      }
    }));
  }, [handleTargetRoom, showTargetRoom, t, targetRoom]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('URLs')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
      rows: 10,
      flexGrow: 1,
      value: urls,
      onChange: handleUrls,
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: "permalink",
        size: "x20"
      })
    })));
  }, [handleUrls, t, urls]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
      display: "flex",
      justifyContent: "space-between",
      w: "full"
    }, t('Impersonate_user'), /*#__PURE__*/React.createElement(ToggleSwitch, {
      checked: impersonateUser,
      onChange: handleImpersonateUser
    })));
  }, [handleImpersonateUser, impersonateUser, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Post_as')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      flexGrow: 1,
      value: username,
      onChange: handleUsername,
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: "user",
        size: "x20"
      })
    })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Choose_the_username_that_this_integration_will_post_as')), /*#__PURE__*/React.createElement(Field.Hint, null, t('Should_exists_a_user_with_this_username')));
  }, [handleUsername, t, username]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Alias') + " (" + t('optional') + ")"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      flexGrow: 1,
      value: alias,
      onChange: handleAlias,
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: "edit",
        size: "x20"
      })
    })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Choose_the_alias_that_will_appear_before_the_username_in_messages')));
  }, [alias, handleAlias, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Avatar_URL') + " (" + t('optional') + ")"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      flexGrow: 1,
      value: avatarUrl,
      onChange: handleAvatar,
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: "user-rounded",
        size: "x20",
        alignSelf: "center"
      })
    })), /*#__PURE__*/React.createElement(Field.Hint, null, t('You_can_change_a_different_avatar_too')), /*#__PURE__*/React.createElement(Field.Hint, null, t('Should_be_a_URL_of_an_image')));
  }, [avatarUrl, handleAvatar, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Emoji') + " (" + t('optional') + ")"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
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
    }));
  }, [emoji, handleEmoji, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Token') + " (" + t('Optional') + ")"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      flexGrow: 1,
      value: token,
      onChange: handleToken,
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: "key",
        size: "x20"
      })
    })));
  }, [handleToken, t, token]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
      display: "flex",
      justifyContent: "space-between",
      w: "full"
    }, t('Script_Enabled'), /*#__PURE__*/React.createElement(ToggleSwitch, {
      checked: scriptEnabled,
      onChange: handleScriptEnabled
    })));
  }, [handleScriptEnabled, scriptEnabled, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Script')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
      rows: 10,
      flexGrow: 1,
      value: script,
      onChange: handleScript,
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: "code",
        size: "x20",
        alignSelf: "center"
      })
    })));
  }, [handleScript, script, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Responding')), /*#__PURE__*/React.createElement(Field.Hint, null, t('Response_description_pre')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
      fontScale: "p2",
      withRichContent: true,
      flexGrow: 1
    }, /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", {
      dangerouslySetInnerHTML: {
        __html: hilightedExampleJson
      }
    })))), /*#__PURE__*/React.createElement(Field.Hint, null, t('Response_description_post')));
  }, [hilightedExampleJson, t])), /*#__PURE__*/React.createElement(Accordion.Item, {
    title: t('Integration_Advanced_Settings')
  }, /*#__PURE__*/React.createElement(FieldGroup, null, useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
      display: "flex",
      justifyContent: "space-between",
      w: "full"
    }, t('Integration_Retry_Failed_Url_Calls'), /*#__PURE__*/React.createElement(ToggleSwitch, {
      checked: retryFailedCalls,
      onChange: handleRetryFailedCalls
    })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Integration_Retry_Failed_Url_Calls_Description')));
  }, [handleRetryFailedCalls, retryFailedCalls, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Retry_Count')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      flexGrow: 1,
      value: retryCount,
      onChange: handleRetryCount
    })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Integration_Retry_Count_Description')));
  }, [handleRetryCount, retryCount, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Integration_Retry_Delay')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
      flexGrow: 1,
      value: retryDelay,
      options: retryDelayOptions,
      onChange: handleRetryDelay
    })), /*#__PURE__*/React.createElement(Field.Hint, {
      dangerouslySetInnerHTML: {
        __html: t('Integration_Retry_Delay_Description')
      }
    }));
  }, [handleRetryDelay, retryDelay, retryDelayOptions, t]), useMemo(function () {
    return event === 'sendMessage' && /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
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
    })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Integration_Run_When_Message_Is_Edited_Description'))));
  }, [event, t, triggerWordAnywhere, handleTriggerWordAnywhere, runOnEdits, handleRunOnEdits]))), append)));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/0b8fa93b8893ab2105b6bb7e861f39f2c58d6a6c.map
