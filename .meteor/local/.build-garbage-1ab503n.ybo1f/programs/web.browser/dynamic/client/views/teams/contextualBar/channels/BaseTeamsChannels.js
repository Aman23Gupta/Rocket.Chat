function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/channels/BaseTeamsChannels.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Icon, TextInput, Margins, Select, Throbber, ButtonGroup, Button;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Margins(v) {
    Margins = v;
  },

  Select(v) {
    Select = v;
  },

  Throbber(v) {
    Throbber = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  }

}, 0);
let useMutableCallback, useAutoFocus;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  },

  useAutoFocus(v) {
    useAutoFocus = v;
  }

}, 1);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 2);
let Virtuoso;
module.link("react-virtuoso", {
  Virtuoso(v) {
    Virtuoso = v;
  }

}, 3);
let ScrollableContentWrapper;
module.link("../../../../components/ScrollableContentWrapper", {
  default(v) {
    ScrollableContentWrapper = v;
  }

}, 4);
let VerticalBar;
module.link("../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 5);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let Row;
module.link("./Row", {
  default(v) {
    Row = v;
  }

}, 7);

const BaseTeamsChannels = _ref => {
  let {
    loading,
    channels = [],
    text,
    type,
    setText,
    setType,
    onClickClose,
    onClickAddExisting,
    onClickCreateNew,
    total,
    loadMoreItems,
    onClickView,
    reload
  } = _ref;
  const t = useTranslation();
  const inputRef = useAutoFocus(true);
  const options = useMemo(() => [['all', t('All')], ['autoJoin', t('Auto-join')]], [t]);
  const lm = useMutableCallback(start => !loading && loadMoreItems(start));
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
    itemContent: (index, data) => /*#__PURE__*/React.createElement(Row, {
      onClickView: onClickView,
      room: data,
      reload: reload
    })
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
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/channels/d0af10e3baed04cdc1adb5a0c72166a5592f3ecf.map
