function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/IncomingWebhookForm.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["formValues", "formHandlers", "extraData", "append"];

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
  default: () => IncomingWebhookForm
});
let Field, TextInput, Box, ToggleSwitch, Icon, TextAreaInput, FieldGroup, Margins;
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
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 2);
let useAbsoluteUrl;
module.link("../../../contexts/ServerContext", {
  useAbsoluteUrl(v) {
    useAbsoluteUrl = v;
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

function IncomingWebhookForm(_ref) {
  let {
    formValues,
    formHandlers,
    extraData = {},
    append
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const absoluteUrl = useAbsoluteUrl();
  const {
    enabled,
    channel,
    username,
    name,
    alias,
    avatarUrl,
    emoji,
    scriptEnabled,
    script
  } = formValues;
  const {
    handleEnabled,
    handleChannel,
    handleUsername,
    handleName,
    handleAlias,
    handleAvatarUrl,
    handleEmoji,
    handleScriptEnabled,
    handleScript
  } = formHandlers;
  const url = absoluteUrl("hooks/".concat(extraData._id, "/").concat(extraData.token));
  const additionalFields = useMemo(() => _objectSpread(_objectSpread(_objectSpread({}, alias && {
    alias
  }), emoji && {
    emoji
  }), avatarUrl && {
    avatar: avatarUrl
  }), [alias, avatarUrl, emoji]);
  const [exampleData, curlData] = useExampleData({
    additionalFields,
    url
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
  }, /*#__PURE__*/React.createElement(FieldGroup, {
    width: "x600",
    alignSelf: "center"
  }, useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
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
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('You_should_name_it_to_easily_manage_your_integrations'))), [t, name, handleName]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Post_to_Channel')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
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
  })), [channel, handleChannel, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Post_as')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    value: username,
    onChange: handleUsername,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "user",
      size: "x20"
    })
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Choose_the_username_that_this_integration_will_post_as')), /*#__PURE__*/React.createElement(Field.Hint, null, t('Should_exists_a_user_with_this_username'))), [t, username, handleUsername]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, "".concat(t('Alias'), " (").concat(t('optional'), ")")), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
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
    onChange: handleAvatarUrl,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "user-rounded",
      size: "x20",
      alignSelf: "center"
    })
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('You_can_change_a_different_avatar_too')), /*#__PURE__*/React.createElement(Field.Hint, null, t('Should_be_a_URL_of_an_image'))), [avatarUrl, handleAvatarUrl, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, "".concat(t('Emoji'), " (").concat(t('optional'), ")")), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
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
  })), [emoji, handleEmoji, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    display: "flex",
    justifyContent: "space-between",
    w: "full"
  }, t('Script_Enabled'), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: scriptEnabled,
    onChange: handleScriptEnabled
  }))), [t, scriptEnabled, handleScriptEnabled]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Script')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    rows: 10,
    flexGrow: 1,
    value: script,
    onChange: handleScript,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "code",
      size: "x20",
      alignSelf: "center"
    })
  }))), [t, script, handleScript]), useMemo(() => !extraData._id && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Webhook_URL')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
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
  })))), [extraData._id, t]), useMemo(() => extraData._id && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Webhook_URL')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    value: url,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "permalink",
      size: "x20"
    })
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Send_your_JSON_payloads_to_this_URL'))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Token')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    value: "".concat(extraData._id, "/").concat(extraData.token),
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "key",
      size: "x20"
    })
  })))), [extraData._id, extraData.token, t, url]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Example_payload')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2",
    withRichContent: true,
    flexGrow: 1
  }, /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", {
    dangerouslySetInnerHTML: {
      __html: hilightedExampleJson
    }
  }))))), [hilightedExampleJson, t]), useMemo(() => extraData._id && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Curl')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    value: curlData,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "code",
      size: "x20"
    })
  }))), [curlData, extraData._id, t]), append)));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/924e265bb7cb106ad48a29ea6c81a0673504791e.map
