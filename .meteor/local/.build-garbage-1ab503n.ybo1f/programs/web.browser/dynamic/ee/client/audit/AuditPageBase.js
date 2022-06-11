function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/AuditPageBase.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  AuditPageBase: () => AuditPageBase
});
let Box, Field, TextInput, ButtonGroup, Button, Margins, Tabs, Flex;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Field(v) {
    Field = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  Margins(v) {
    Margins = v;
  },

  Tabs(v) {
    Tabs = v;
  },

  Flex(v) {
    Flex = v;
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
let Page;
module.link("../../../client/components/Page", {
  default(v) {
    Page = v;
  }

}, 3);
let useTranslation;
module.link("../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let DateRangePicker;
module.link("./DateRangePicker", {
  default(v) {
    DateRangePicker = v;
  }

}, 5);
let Result;
module.link("./Result", {
  default(v) {
    Result = v;
  }

}, 6);
let ChannelTab;
module.link("./Tabs/ChannelTab", {
  default(v) {
    ChannelTab = v;
  }

}, 7);
let DirectTab;
module.link("./Tabs/DirectTab", {
  default(v) {
    DirectTab = v;
  }

}, 8);
let UsersTab;
module.link("./Tabs/UsersTab", {
  default(v) {
    UsersTab = v;
  }

}, 9);
let VisitorsTab;
module.link("./Tabs/VisitorsTab", {
  default(v) {
    VisitorsTab = v;
  }

}, 10);

const AuditPageBase = _ref => {
  let {
    type,
    handleType,
    msg,
    handleMsg,
    handleDateRange,
    errors,
    rid,
    handleRid,
    users,
    handleUsers,
    onChangeUsers,
    visitor,
    handleVisitor,
    agent,
    handleAgent,
    apply,
    setData
  } = _ref;
  const t = useTranslation();

  const useHandleType = type => useMutableCallback(() => {
    handleVisitor('');
    handleAgent();
    handleRid('');
    handleUsers([]);
    handleType(type);
  });

  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Message_auditing')
  }), /*#__PURE__*/React.createElement(Tabs, null, /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: type === '',
    onClick: useHandleType('')
  }, t('Rooms')), /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: type === 'u',
    onClick: useHandleType('u')
  }, t('Users')), /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: type === 'd',
    onClick: useHandleType('d')
  }, t('Direct_Messages')), /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: type === 'l',
    onClick: useHandleType('l')
  }, t('Omnichannel'))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, {
    mb: "neg-x4"
  }, /*#__PURE__*/React.createElement(Margins, {
    block: "x4"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    mi: "neg-x4",
    justifyContent: "stretch"
  }, /*#__PURE__*/React.createElement(Margins, {
    inline: "x4"
  }, /*#__PURE__*/React.createElement(Flex.Item, {
    shrink: 1
  }, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Message')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: msg,
    onChange: handleMsg,
    placeholder: t('Search')
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Date')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(DateRangePicker, {
    onChange: handleDateRange,
    display: "flex",
    flexGrow: 1
  })))))), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end"
  }, /*#__PURE__*/React.createElement(Flex.Item, {
    shrink: 1
  }, type === '' && /*#__PURE__*/React.createElement(ChannelTab, {
    errors: errors,
    rid: rid,
    handleRid: handleRid
  }), type === 'u' && /*#__PURE__*/React.createElement(UsersTab, {
    errors: errors,
    users: users,
    onChangeUsers: onChangeUsers
  }), type === 'd' && /*#__PURE__*/React.createElement(DirectTab, {
    errors: errors,
    users: users,
    onChangeUsers: onChangeUsers
  }), type === 'l' && /*#__PURE__*/React.createElement(VisitorsTab, {
    errors: errors,
    visitor: visitor,
    handleVisitor: handleVisitor,
    agent: agent,
    handleAgent: handleAgent
  }), /*#__PURE__*/React.createElement(ButtonGroup, {
    mis: "x8",
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: apply
  }, t('Apply'))))), setData && /*#__PURE__*/React.createElement(Result, {
    setDataRef: setData
  }))));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/audit/9ea277eaebc8ff2310fee08645517a902d366fbe.map
