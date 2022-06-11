function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/AuditPageBase.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  AuditPageBase: function () {
    return AuditPageBase;
  }
});
var Box, Field, TextInput, ButtonGroup, Button, Margins, Tabs, Flex;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Field: function (v) {
    Field = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  Tabs: function (v) {
    Tabs = v;
  },
  Flex: function (v) {
    Flex = v;
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
var Page;
module.link("../../../client/components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 3);
var useTranslation;
module.link("../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var DateRangePicker;
module.link("./DateRangePicker", {
  "default": function (v) {
    DateRangePicker = v;
  }
}, 5);
var Result;
module.link("./Result", {
  "default": function (v) {
    Result = v;
  }
}, 6);
var ChannelTab;
module.link("./Tabs/ChannelTab", {
  "default": function (v) {
    ChannelTab = v;
  }
}, 7);
var DirectTab;
module.link("./Tabs/DirectTab", {
  "default": function (v) {
    DirectTab = v;
  }
}, 8);
var UsersTab;
module.link("./Tabs/UsersTab", {
  "default": function (v) {
    UsersTab = v;
  }
}, 9);
var VisitorsTab;
module.link("./Tabs/VisitorsTab", {
  "default": function (v) {
    VisitorsTab = v;
  }
}, 10);

var AuditPageBase = function (_ref) {
  var type = _ref.type,
      handleType = _ref.handleType,
      msg = _ref.msg,
      handleMsg = _ref.handleMsg,
      handleDateRange = _ref.handleDateRange,
      errors = _ref.errors,
      rid = _ref.rid,
      handleRid = _ref.handleRid,
      users = _ref.users,
      handleUsers = _ref.handleUsers,
      onChangeUsers = _ref.onChangeUsers,
      visitor = _ref.visitor,
      handleVisitor = _ref.handleVisitor,
      agent = _ref.agent,
      handleAgent = _ref.handleAgent,
      apply = _ref.apply,
      setData = _ref.setData;
  var t = useTranslation();

  var useHandleType = function (type) {
    return useMutableCallback(function () {
      handleVisitor('');
      handleAgent();
      handleRid('');
      handleUsers([]);
      handleType(type);
    });
  };

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
//# sourceMappingURL=/dynamic/ee/client/audit/2ef5cae5d7384d17b86f6dc87c27672ff3cf9cb8.map
