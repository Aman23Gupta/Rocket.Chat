function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomMembers/List/RoomMembers.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Icon, TextInput, Margins, Select, Throbber, ButtonGroup, Button, Callout;
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
  },

  Callout(v) {
    Callout = v;
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
module.link("../../../../../components/ScrollableContentWrapper", {
  default(v) {
    ScrollableContentWrapper = v;
  }

}, 4);
let VerticalBar;
module.link("../../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 5);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let DefaultRow;
module.link("./DefaultRow", {
  default(v) {
    DefaultRow = v;
  }

}, 7);

const RoomMembers = _ref => {
  let {
    loading,
    members = [],
    text,
    type,
    setText,
    setType,
    onClickClose,
    onClickView,
    onClickAdd,
    onClickInvite,
    total,
    error,
    loadMoreItems,
    renderRow: Row = DefaultRow,
    rid,
    isTeam,
    isDirect,
    reload
  } = _ref;
  const t = useTranslation();
  const inputRef = useAutoFocus(true);
  const options = useMemo(() => [['online', t('Online')], ['all', t('All')]], [t]);
  const itemData = useMemo(() => ({
    onClickView,
    rid
  }), [onClickView, rid]);
  const lm = useMutableCallback(start => !loading && loadMoreItems(start));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "members"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, isTeam ? t('Teams_members') : t('Members')), onClickClose && /*#__PURE__*/React.createElement(VerticalBar.Close, {
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
    placeholder: t('Search_by_username'),
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
  })), error && /*#__PURE__*/React.createElement(Box, {
    pi: "x12",
    pb: "x12"
  }, /*#__PURE__*/React.createElement(Callout, {
    type: "danger"
  }, error.message)), !loading && members.length <= 0 && /*#__PURE__*/React.createElement(Box, {
    textAlign: "center",
    p: "x12",
    color: "neutral-600"
  }, t('No_members_found')), !loading && members.length > 0 && /*#__PURE__*/React.createElement(Box, {
    pi: "x18",
    pb: "x12"
  }, /*#__PURE__*/React.createElement(Box, {
    is: "span",
    color: "info",
    fontScale: "p2"
  }, t('Showing'), ": ", members.length), /*#__PURE__*/React.createElement(Box, {
    is: "span",
    color: "info",
    fontScale: "p2",
    mis: "x8"
  }, t('Total'), ": ", total)), /*#__PURE__*/React.createElement(Box, {
    w: "full",
    h: "full",
    overflow: "hidden",
    flexShrink: 1
  }, !loading && members && members.length > 0 && /*#__PURE__*/React.createElement(Virtuoso, {
    style: {
      height: '100%',
      width: '100%'
    },
    totalCount: total,
    endReached: lm,
    overscan: 50,
    data: members,
    components: {
      Scroller: ScrollableContentWrapper
    },
    itemContent: (index, data) => /*#__PURE__*/React.createElement(Row, {
      data: itemData,
      user: data,
      index: index,
      reload: reload
    })
  }))), !isDirect && (onClickInvite || onClickAdd) && /*#__PURE__*/React.createElement(VerticalBar.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true
  }, onClickInvite && /*#__PURE__*/React.createElement(Button, {
    onClick: onClickInvite,
    width: "50%"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "link",
    size: "x20",
    mie: "x4"
  }), t('Invite_Link')), onClickAdd && /*#__PURE__*/React.createElement(Button, {
    onClick: onClickAdd,
    width: "50%",
    primary: true
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-plus",
    size: "x20",
    mie: "x4"
  }), t('Add')))));
};

module.exportDefault(RoomMembers);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomMembers/List/ab720dd15127eecd7e4406cd8b3080c21efa8f80.map
