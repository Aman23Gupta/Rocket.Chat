function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Discussions/DiscussionList.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Icon, TextInput, Callout, Throbber;
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

  Callout(v) {
    Callout = v;
  },

  Throbber(v) {
    Throbber = v;
  }

}, 0);
let useResizeObserver, useAutoFocus;
module.link("@rocket.chat/fuselage-hooks", {
  useResizeObserver(v) {
    useResizeObserver = v;
  },

  useAutoFocus(v) {
    useAutoFocus = v;
  }

}, 1);
let React, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
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
let useSetting;
module.link("../../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 6);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
let goToRoomById;
module.link("../../../../lib/utils/goToRoomById", {
  goToRoomById(v) {
    goToRoomById = v;
  }

}, 8);
let Row;
module.link("./Row", {
  default(v) {
    Row = v;
  }

}, 9);
let withData;
module.link("./withData", {
  withData(v) {
    withData = v;
  }

}, 10);

function DiscussionList(_ref) {
  let {
    total = 10,
    discussions = [],
    loadMoreItems,
    loading,
    onClose,
    error,
    userId,
    text,
    setText
  } = _ref;
  const showRealNames = useSetting('UI_Use_Real_Name');
  const t = useTranslation();
  const inputRef = useAutoFocus(true);
  const onClick = useCallback(e => {
    const {
      drid
    } = e.currentTarget.dataset;
    goToRoomById(drid);
  }, []);
  const {
    ref,
    contentBoxSize: {
      inlineSize = 378,
      blockSize = 1
    } = {}
  } = useResizeObserver({
    debounceDelay: 200
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "discussion"
  }), /*#__PURE__*/React.createElement(Box, {
    flexShrink: 1,
    flexGrow: 1,
    withTruncatedText: true,
    mi: "x8"
  }, t('Discussions')), /*#__PURE__*/React.createElement(VerticalBar.Close, {
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
  }, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: t('Search_Messages'),
    value: text,
    onChange: setText,
    ref: inputRef,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "magnifier",
      size: "x20"
    })
  })), loading && /*#__PURE__*/React.createElement(Box, {
    pi: "x24",
    pb: "x12"
  }, /*#__PURE__*/React.createElement(Throbber, {
    size: "x12"
  })), error && /*#__PURE__*/React.createElement(Callout, {
    mi: "x24",
    type: "danger"
  }, error.toString()), !loading && total === 0 && /*#__PURE__*/React.createElement(Box, {
    width: "full",
    textAlign: "center",
    p: "x24",
    color: "neutral-600"
  }, t('No_Discussions_found')), /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    display: "flex"
  }, !error && total > 0 && discussions.length > 0 && /*#__PURE__*/React.createElement(Virtuoso, {
    style: {
      height: blockSize,
      width: inlineSize,
      overflow: 'hidden'
    },
    totalCount: total,
    endReached: loading ? () => {} : start => loadMoreItems(start, Math.min(50, total - start)),
    overscan: 25,
    data: discussions,
    components: {
      Scroller: ScrollableContentWrapper
    },
    itemContent: (index, data) => /*#__PURE__*/React.createElement(Row, {
      discussion: data,
      showRealNames: showRealNames,
      userId: userId,
      onClick: onClick
    })
  }))));
}

module.exportDefault(withData(DiscussionList));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Discussions/a76ad6e32aa2622aca7d338eb4e758f82ea7325e.map
