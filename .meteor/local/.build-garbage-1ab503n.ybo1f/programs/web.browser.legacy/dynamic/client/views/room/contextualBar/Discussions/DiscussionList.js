function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Discussions/DiscussionList.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Icon, TextInput, Callout, Throbber;
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
  Callout: function (v) {
    Callout = v;
  },
  Throbber: function (v) {
    Throbber = v;
  }
}, 0);
var useResizeObserver, useAutoFocus;
module.link("@rocket.chat/fuselage-hooks", {
  useResizeObserver: function (v) {
    useResizeObserver = v;
  },
  useAutoFocus: function (v) {
    useAutoFocus = v;
  }
}, 1);
var React, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
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
var useSetting;
module.link("../../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 6);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var goToRoomById;
module.link("../../../../lib/utils/goToRoomById", {
  goToRoomById: function (v) {
    goToRoomById = v;
  }
}, 8);
var Row;
module.link("./Row", {
  "default": function (v) {
    Row = v;
  }
}, 9);
var withData;
module.link("./withData", {
  withData: function (v) {
    withData = v;
  }
}, 10);

function DiscussionList(_ref) {
  var _ref$total = _ref.total,
      total = _ref$total === void 0 ? 10 : _ref$total,
      _ref$discussions = _ref.discussions,
      discussions = _ref$discussions === void 0 ? [] : _ref$discussions,
      loadMoreItems = _ref.loadMoreItems,
      loading = _ref.loading,
      onClose = _ref.onClose,
      error = _ref.error,
      userId = _ref.userId,
      text = _ref.text,
      setText = _ref.setText;
  var showRealNames = useSetting('UI_Use_Real_Name');
  var t = useTranslation();
  var inputRef = useAutoFocus(true);
  var onClick = useCallback(function (e) {
    var drid = e.currentTarget.dataset.drid;
    goToRoomById(drid);
  }, []);

  var _useResizeObserver = useResizeObserver({
    debounceDelay: 200
  }),
      ref = _useResizeObserver.ref,
      _useResizeObserver$co = _useResizeObserver.contentBoxSize;

  _useResizeObserver$co = _useResizeObserver$co === void 0 ? {} : _useResizeObserver$co;
  var _useResizeObserver$co2 = _useResizeObserver$co.inlineSize,
      inlineSize = _useResizeObserver$co2 === void 0 ? 378 : _useResizeObserver$co2,
      _useResizeObserver$co3 = _useResizeObserver$co.blockSize,
      blockSize = _useResizeObserver$co3 === void 0 ? 1 : _useResizeObserver$co3;
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
    endReached: loading ? function () {} : function (start) {
      return loadMoreItems(start, Math.min(50, total - start));
    },
    overscan: 25,
    data: discussions,
    components: {
      Scroller: ScrollableContentWrapper
    },
    itemContent: function (index, data) {
      return /*#__PURE__*/React.createElement(Row, {
        discussion: data,
        showRealNames: showRealNames,
        userId: userId,
        onClick: onClick
      });
    }
  }))));
}

module.exportDefault(withData(DiscussionList));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Discussions/20607becc7c7a359f763af781221b985c522d1b9.map
