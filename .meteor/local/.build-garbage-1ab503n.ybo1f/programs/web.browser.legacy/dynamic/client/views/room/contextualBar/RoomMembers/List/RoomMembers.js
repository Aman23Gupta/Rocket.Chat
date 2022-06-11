function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomMembers/List/RoomMembers.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Icon, TextInput, Margins, Select, Throbber, ButtonGroup, Button, Callout;
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
  },
  Callout: function (v) {
    Callout = v;
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
module.link("../../../../../components/ScrollableContentWrapper", {
  "default": function (v) {
    ScrollableContentWrapper = v;
  }
}, 4);
var VerticalBar;
module.link("../../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 5);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var DefaultRow;
module.link("./DefaultRow", {
  "default": function (v) {
    DefaultRow = v;
  }
}, 7);

var RoomMembers = function (_ref) {
  var loading = _ref.loading,
      _ref$members = _ref.members,
      members = _ref$members === void 0 ? [] : _ref$members,
      text = _ref.text,
      type = _ref.type,
      setText = _ref.setText,
      setType = _ref.setType,
      onClickClose = _ref.onClickClose,
      onClickView = _ref.onClickView,
      onClickAdd = _ref.onClickAdd,
      onClickInvite = _ref.onClickInvite,
      total = _ref.total,
      error = _ref.error,
      loadMoreItems = _ref.loadMoreItems,
      _ref$renderRow = _ref.renderRow,
      Row = _ref$renderRow === void 0 ? DefaultRow : _ref$renderRow,
      rid = _ref.rid,
      isTeam = _ref.isTeam,
      isDirect = _ref.isDirect,
      reload = _ref.reload;
  var t = useTranslation();
  var inputRef = useAutoFocus(true);
  var options = useMemo(function () {
    return [['online', t('Online')], ['all', t('All')]];
  }, [t]);
  var itemData = useMemo(function () {
    return {
      onClickView: onClickView,
      rid: rid
    };
  }, [onClickView, rid]);
  var lm = useMutableCallback(function (start) {
    return !loading && loadMoreItems(start);
  });
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
    itemContent: function (index, data) {
      return /*#__PURE__*/React.createElement(Row, {
        data: itemData,
        user: data,
        index: index,
        reload: reload
      });
    }
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomMembers/List/0238b6fea9ec116d0bcb51df2e463ef9760388d2.map
