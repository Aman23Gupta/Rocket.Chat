function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Threads/ThreadList.tsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
module.export({
  ThreadList: () => ThreadList
});
let Box, Icon, TextInput, Select, Margins, Callout, Throbber;
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

  Select(v) {
    Select = v;
  },

  Margins(v) {
    Margins = v;
  },

  Callout(v) {
    Callout = v;
  },

  Throbber(v) {
    Throbber = v;
  }

}, 0);
let useResizeObserver, useMutableCallback, useAutoFocus;
module.link("@rocket.chat/fuselage-hooks", {
  useResizeObserver(v) {
    useResizeObserver = v;
  },

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
let useRoute, useCurrentRoute, useQueryStringParameter;
module.link("../../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  },

  useCurrentRoute(v) {
    useCurrentRoute = v;
  },

  useQueryStringParameter(v) {
    useQueryStringParameter = v;
  }

}, 6);
let useSetting;
module.link("../../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 7);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 8);
let useTabContext;
module.link("../../providers/ToolboxProvider", {
  useTabContext(v) {
    useTabContext = v;
  }

}, 9);
let ThreadComponent;
module.link("../../threads/ThreadComponent", {
  default(v) {
    ThreadComponent = v;
  }

}, 10);
let Row;
module.link("./Row", {
  default(v) {
    Row = v;
  }

}, 11);
let withData;
module.link("./withData", {
  withData(v) {
    withData = v;
  }

}, 12);

const ThreadList = function ThreadList(_ref) {
  let {
    total = 10,
    threads = [],
    room,
    unread = [],
    unreadUser = [],
    unreadGroup = [],
    text,
    type,
    setType,
    loadMoreItems,
    loading,
    onClose,
    error,
    userId = '',
    setText
  } = _ref;
  const showRealNames = Boolean(useSetting('UI_Use_Real_Name'));
  const t = useTranslation();
  const inputRef = useAutoFocus(true);
  const [name] = useCurrentRoute();

  if (!name) {
    throw new Error('No route name');
  }

  const channelRoute = useRoute(name);
  const onClick = useMutableCallback(e => {
    const {
      id: context
    } = e.currentTarget.dataset;
    channelRoute.push(_objectSpread({
      tab: 'thread',
      context,
      rid: room._id
    }, room.name && {
      name: room.name
    }));
  });
  const options = useMemo(() => [['all', t('All')], ['following', t('Following')], ['unread', t('Unread')]], [t]);
  const {
    ref,
    contentBoxSize: {
      inlineSize = 378,
      blockSize = 1
    } = {}
  } = useResizeObserver({
    debounceDelay: 200
  });
  const mid = useTabContext();
  const jump = useQueryStringParameter('jump');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "thread"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('Threads')), /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(VerticalBar.Content, {
    paddingInline: 0,
    ref: ref
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    p: "x24",
    borderBlockEndWidth: "x2",
    borderBlockEndStyle: "solid",
    borderBlockEndColor: "neutral-200",
    flexShrink: 0
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    mi: "neg-x4"
  }, /*#__PURE__*/React.createElement(Margins, {
    inline: "x4"
  }, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: t('Search_Messages'),
    value: text,
    onChange: setText,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "magnifier",
      size: "x20"
    }),
    ref: inputRef
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
  })), error && /*#__PURE__*/React.createElement(Callout, {
    mi: "x24",
    type: "danger"
  }, error.toString()), !loading && total === 0 && /*#__PURE__*/React.createElement(Box, {
    p: "x24",
    color: "neutral-600",
    textAlign: "center",
    width: "full"
  }, t('No_Threads')), /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    display: "flex"
  }, !error && total > 0 && threads.length > 0 && /*#__PURE__*/React.createElement(Virtuoso, {
    style: {
      height: blockSize,
      width: inlineSize
    },
    totalCount: total,
    endReached: loading ? () => undefined : start => loadMoreItems(start, Math.min(50, total - start)),
    overscan: 25,
    data: threads,
    components: {
      Scroller: ScrollableContentWrapper
    },
    itemContent: (_index, data) => /*#__PURE__*/React.createElement(Row, {
      thread: data,
      showRealNames: showRealNames,
      unread: unread,
      unreadUser: unreadUser,
      unreadGroup: unreadGroup,
      userId: userId || '',
      onClick: onClick
    })
  }))), typeof mid === 'string' && /*#__PURE__*/React.createElement(VerticalBar.InnerContent, null, /*#__PURE__*/React.createElement(ThreadComponent, {
    onClickBack: onClick,
    mid: mid,
    jump: jump,
    room: room
  })));
};

module.exportDefault(withData(ThreadList));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Threads/837858c36b3d61534330c44018b82435e76ccc5c.map
