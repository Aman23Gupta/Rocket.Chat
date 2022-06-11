function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomFiles/RoomFiles.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Icon, TextInput, Select, Throbber, Margins;
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
  Select: function (v) {
    Select = v;
  },
  Throbber: function (v) {
    Throbber = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var useUniqueId, useAutoFocus;
module.link("@rocket.chat/fuselage-hooks", {
  useUniqueId: function (v) {
    useUniqueId = v;
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

function RoomFiles(_ref) {
  var loading = _ref.loading,
      _ref$filesItems = _ref.filesItems,
      filesItems = _ref$filesItems === void 0 ? [] : _ref$filesItems,
      text = _ref.text,
      type = _ref.type,
      setText = _ref.setText,
      setType = _ref.setType,
      onClickClose = _ref.onClickClose,
      onClickDelete = _ref.onClickDelete,
      total = _ref.total,
      loadMoreItems = _ref.loadMoreItems,
      isDeletionAllowed = _ref.isDeletionAllowed;
  var t = useTranslation();
  var options = useMemo(function () {
    return [['all', t('All')], ['image', t('Images')], ['video', t('Videos')], ['audio', t('Audios')], ['text', t('Texts')], ['application', t('Files')]];
  }, [t]);
  var inputRef = useAutoFocus(true);
  var searchId = useUniqueId();
  var itemData = useMemo(function () {
    return {
      onClickDelete: onClickDelete,
      isDeletionAllowed: isDeletionAllowed
    };
  }, [isDeletionAllowed, onClickDelete]);
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
    endReached: loading ? function () {} : function (start) {
      return loadMoreItems(start, Math.min(50, total - start));
    },
    overscan: 50,
    data: filesItems,
    components: {
      Scroller: ScrollableContentWrapper
    },
    itemContent: function (index, data) {
      return /*#__PURE__*/React.createElement(Row, {
        data: itemData,
        index: index,
        item: data
      });
    }
  }))));
}

module.exportDefault(RoomFiles);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomFiles/9abee0041acb3983a4615593c65967ff1ff162f6.map
