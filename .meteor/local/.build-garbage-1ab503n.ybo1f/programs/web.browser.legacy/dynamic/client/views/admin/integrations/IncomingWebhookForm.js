function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/IncomingWebhookForm.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["formValues", "formHandlers", "extraData", "append"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
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
    return IncomingWebhookForm;
  }
});
var Field, TextInput, Box, ToggleSwitch, Icon, TextAreaInput, FieldGroup, Margins;
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
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 2);
var useAbsoluteUrl;
module.link("../../../contexts/ServerContext", {
  useAbsoluteUrl: function (v) {
    useAbsoluteUrl = v;
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

function IncomingWebhookForm(_ref) {
  var formValues = _ref.formValues,
      formHandlers = _ref.formHandlers,
      _ref$extraData = _ref.extraData,
      extraData = _ref$extraData === void 0 ? {} : _ref$extraData,
      append = _ref.append,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var absoluteUrl = useAbsoluteUrl();
  var enabled = formValues.enabled,
      channel = formValues.channel,
      username = formValues.username,
      name = formValues.name,
      alias = formValues.alias,
      avatarUrl = formValues.avatarUrl,
      emoji = formValues.emoji,
      scriptEnabled = formValues.scriptEnabled,
      script = formValues.script;
  var handleEnabled = formHandlers.handleEnabled,
      handleChannel = formHandlers.handleChannel,
      handleUsername = formHandlers.handleUsername,
      handleName = formHandlers.handleName,
      handleAlias = formHandlers.handleAlias,
      handleAvatarUrl = formHandlers.handleAvatarUrl,
      handleEmoji = formHandlers.handleEmoji,
      handleScriptEnabled = formHandlers.handleScriptEnabled,
      handleScript = formHandlers.handleScript;
  var url = absoluteUrl("hooks/" + extraData._id + "/" + extraData.token);
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
    url: url
  }),
      _useExampleData2 = _slicedToArray(_useExampleData, 2),
      exampleData = _useExampleData2[0],
      curlData = _useExampleData2[1];

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
  }, /*#__PURE__*/React.createElement(FieldGroup, {
    width: "x600",
    alignSelf: "center"
  }, useMemo(function () {
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
  }, [t, name, handleName]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Post_to_Channel')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      flexGrow: 1,
      value: channel,
      onChange: handleChannel,
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: "at",
        size: "x20"
      })
    })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Messages_that_are_sent_to_the_Incoming_WebHook_will_be_posted_here')), /*#__PURE__*/React.createElement(Field.Hint, {
      dangerouslySetInnerHTML: {
        __html: t('Start_with_s_for_user_or_s_for_channel_Eg_s_or_s', '@', '#', '@john', '#general')
      }
    }));
  }, [channel, handleChannel, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Post_as')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      flexGrow: 1,
      value: username,
      onChange: handleUsername,
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: "user",
        size: "x20"
      })
    })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Choose_the_username_that_this_integration_will_post_as')), /*#__PURE__*/React.createElement(Field.Hint, null, t('Should_exists_a_user_with_this_username')));
  }, [t, username, handleUsername]), useMemo(function () {
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
      onChange: handleAvatarUrl,
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: "user-rounded",
        size: "x20",
        alignSelf: "center"
      })
    })), /*#__PURE__*/React.createElement(Field.Hint, null, t('You_can_change_a_different_avatar_too')), /*#__PURE__*/React.createElement(Field.Hint, null, t('Should_be_a_URL_of_an_image')));
  }, [avatarUrl, handleAvatarUrl, t]), useMemo(function () {
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
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
      display: "flex",
      justifyContent: "space-between",
      w: "full"
    }, t('Script_Enabled'), /*#__PURE__*/React.createElement(ToggleSwitch, {
      checked: scriptEnabled,
      onChange: handleScriptEnabled
    })));
  }, [t, scriptEnabled, handleScriptEnabled]), useMemo(function () {
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
  }, [t, script, handleScript]), useMemo(function () {
    return !extraData._id && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Webhook_URL')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      flexGrow: 1,
      value: t('Will_be_available_here_after_saving'),
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: "permalink",
        size: "x20"
      }),
      disabled: true
    })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Send_your_JSON_payloads_to_this_URL'))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Token')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      flexGrow: 1,
      value: t('Will_be_available_here_after_saving'),
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: "key",
        size: "x20"
      }),
      disabled: true
    }))));
  }, [extraData._id, t]), useMemo(function () {
    return extraData._id && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Webhook_URL')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      flexGrow: 1,
      value: url,
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: "permalink",
        size: "x20"
      })
    })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Send_your_JSON_payloads_to_this_URL'))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Token')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      flexGrow: 1,
      value: extraData._id + "/" + extraData.token,
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: "key",
        size: "x20"
      })
    }))));
  }, [extraData._id, extraData.token, t, url]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Example_payload')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
      fontScale: "p2",
      withRichContent: true,
      flexGrow: 1
    }, /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", {
      dangerouslySetInnerHTML: {
        __html: hilightedExampleJson
      }
    })))));
  }, [hilightedExampleJson, t]), useMemo(function () {
    return extraData._id && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Curl')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      flexGrow: 1,
      value: curlData,
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: "code",
        size: "x20"
      })
    })));
  }, [curlData, extraData._id, t]), append)));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/7c5e13cbe6df8f585017b2e30b362fd138d75769.map
