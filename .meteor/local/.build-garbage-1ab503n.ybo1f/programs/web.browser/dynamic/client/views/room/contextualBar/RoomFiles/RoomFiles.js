function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomFiles/RoomFiles.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Icon, TextInput, Select, Throbber, Margins;
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

  Throbber(v) {
    Throbber = v;
  },

  Margins(v) {
    Margins = v;
  }

}, 0);
let useUniqueId, useAutoFocus;
module.link("@rocket.chat/fuselage-hooks", {
  useUniqueId(v) {
    useUniqueId = v;
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

function RoomFiles(_ref) {
  let {
    loading,
    filesItems = [],
    text,
    type,
    setText,
    setType,
    onClickClose,
    onClickDelete,
    total,
    loadMoreItems,
    isDeletionAllowed
  } = _ref;
  const t = useTranslation();
  const options = useMemo(() => [['all', t('All')], ['image', t('Images')], ['video', t('Videos')], ['audio', t('Audios')], ['text', t('Texts')], ['application', t('Files')]], [t]);
  const inputRef = useAutoFocus(true);
  const searchId = useUniqueId();
  const itemData = useMemo(() => ({
    onClickDelete,
    isDeletionAllowed
  }), [isDeletionAllowed, onClickDelete]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "attachment"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('Files')), onClickClose && /*#__PURE__*/React.createElement(VerticalBar.Close, {
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
    "data-qa-files-search": true,
    id: searchId,
    placeholder: t('Search_Files'),
    ref: inputRef,
    value: text,
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
    p: "x12"
  }, /*#__PURE__*/React.createElement(Throbber, {
    size: "x12"
  })), !loading && filesItems.length <= 0 && /*#__PURE__*/React.createElement(Box, {
    textAlign: "center",
    p: "x12",
    color: "neutral-600"
  }, t('No_files_found')), /*#__PURE__*/React.createElement(Box, {
    w: "full",
    h: "full",
    flexShrink: 1,
    overflow: "hidden"
  }, /*#__PURE__*/React.createElement(Virtuoso, {
    style: {
      height: '100%',
      width: '100%'
    },
    totalCount: total,
    endReached: loading ? () => {} : start => loadMoreItems(start, Math.min(50, total - start)),
    overscan: 50,
    data: filesItems,
    components: {
      Scroller: ScrollableContentWrapper
    },
    itemContent: (index, data) => /*#__PURE__*/React.createElement(Row, {
      data: itemData,
      index: index,
      item: data
    })
  }))));
}

module.exportDefault(RoomFiles);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomFiles/77ccfb576d50421fe46fd08446bb51ca0ec0d190.map
