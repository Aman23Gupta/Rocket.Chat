function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/channels/BaseTeamsChannels.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Icon, TextInput, Margins, Select, Throbber, ButtonGroup, Button;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  Select: function (v) {
    Select = v;
  },
  Throbber: function (v) {
    Throbber = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  }
}, 0);
var useMutableCallback, useAutoFocus;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  },
  useAutoFocus: function (v) {
    useAutoFocus = v;
  }
}, 1);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 2);
var Virtuoso;
module.link("react-virtuoso", {
  Virtuoso: function (v) {
    Virtuoso = v;
  }
}, 3);
var ScrollableContentWrapper;
module.link("../../../../components/ScrollableContentWrapper", {
  "default": function (v) {
    ScrollableContentWrapper = v;
  }
}, 4);
var VerticalBar;
module.link("../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 5);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var Row;
module.link("./Row", {
  "default": function (v) {
    Row = v;
  }
}, 7);

var BaseTeamsChannels = function (_ref) {
  var loading = _ref.loading,
      _ref$channels = _ref.channels,
      channels = _ref$channels === void 0 ? [] : _ref$channels,
      text = _ref.text,
      type = _ref.type,
      setText = _ref.setText,
      setType = _ref.setType,
      onClickClose = _ref.onClickClose,
      onClickAddExisting = _ref.onClickAddExisting,
      onClickCreateNew = _ref.onClickCreateNew,
      total = _ref.total,
      loadMoreItems = _ref.loadMoreItems,
      onClickView = _ref.onClickView,
      reload = _ref.reload;
  var t = useTranslation();
  var inputRef = useAutoFocus(true);
  var options = useMemo(function () {
    return [['all', t('All')], ['autoJoin', t('Auto-join')]];
  }, [t]);
  var lm = useMutableCallback(function (start) {
    return !loading && loadMoreItems(start);
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "hash"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('Team_Channels')), onClickClose && /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: onClickClose
  })), /*#__PURE__*/React.createElement(VerticalBar.Content, {
    p: "x12"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    p: "x12",
    flexShrink: 0
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    mi: "neg-x4"
  }, /*#__PURE__*/React.createElement(Margins, {
    inline: "x4"
  }, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: t('Search'),
    value: text,
    ref: inputRef,
    onChange: setText,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "magnifier",
      size: "x20"
    })
  }), /*#__PURE__*/React.createElement(Select, {
    flexGrow: 0,
    width: "110px",
    onChange: setType,
    value: type,
    options: options
  })))), loading && /*#__PURE__*/React.createElement(Box, {
    pi: "x24",
    pb: "x12"
  }, /*#__PURE__*/React.createElement(Throbber, {
    size: "x12"
  })), !loading && channels.length === 0 && /*#__PURE__*/React.createElement(Box, {
    textAlign: "center",
    p: "x12",
    color: "neutral-600"
  }, t('No_channels_in_team')), !loading && /*#__PURE__*/React.createElement(Box, {
    w: "full",
    h: "full",
    overflow: "hidden",
    flexShrink: 1
  }, /*#__PURE__*/React.createElement(Virtuoso, {
    totalCount: total,
    endReached: lm,
    data: channels,
    components: {
      Scroller: ScrollableContentWrapper
    },
    itemContent: function (index, data) {
      return /*#__PURE__*/React.createElement(Row, {
        onClickView: onClickView,
        room: data,
        reload: reload
      });
    }
  }))), /*#__PURE__*/React.createElement(VerticalBar.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true
  }, onClickAddExisting && /*#__PURE__*/React.createElement(Button, {
    onClick: onClickAddExisting,
    width: "50%"
  }, t('Team_Add_existing')), onClickCreateNew && /*#__PURE__*/React.createElement(Button, {
    onClick: onClickCreateNew,
    width: "50%"
  }, t('Create_new')))));
};

module.exportDefault(BaseTeamsChannels);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/channels/21c89fbc0297d1470d74fdfc42df9045c5784258.map
