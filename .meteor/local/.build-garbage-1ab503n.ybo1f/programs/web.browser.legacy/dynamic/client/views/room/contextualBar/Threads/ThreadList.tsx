function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Threads/ThreadList.tsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
module.export({
  ThreadList: function () {
    return ThreadList;
  }
});
var Box, Icon, TextInput, Select, Margins, Callout, Throbber;
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
  Margins: function (v) {
    Margins = v;
  },
  Callout: function (v) {
    Callout = v;
  },
  Throbber: function (v) {
    Throbber = v;
  }
}, 0);
var useResizeObserver, useMutableCallback, useAutoFocus;
module.link("@rocket.chat/fuselage-hooks", {
  useResizeObserver: function (v) {
    useResizeObserver = v;
  },
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
var useRoute, useCurrentRoute, useQueryStringParameter;
module.link("../../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  },
  useCurrentRoute: function (v) {
    useCurrentRoute = v;
  },
  useQueryStringParameter: function (v) {
    useQueryStringParameter = v;
  }
}, 6);
var useSetting;
module.link("../../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 7);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 8);
var useTabContext;
module.link("../../providers/ToolboxProvider", {
  useTabContext: function (v) {
    useTabContext = v;
  }
}, 9);
var ThreadComponent;
module.link("../../threads/ThreadComponent", {
  "default": function (v) {
    ThreadComponent = v;
  }
}, 10);
var Row;
module.link("./Row", {
  "default": function (v) {
    Row = v;
  }
}, 11);
var withData;
module.link("./withData", {
  withData: function (v) {
    withData = v;
  }
}, 12);

var ThreadList = function () {
  function ThreadList(_ref) {
    var _ref$total = _ref.total,
        total = _ref$total === void 0 ? 10 : _ref$total,
        _ref$threads = _ref.threads,
        threads = _ref$threads === void 0 ? [] : _ref$threads,
        room = _ref.room,
        _ref$unread = _ref.unread,
        unread = _ref$unread === void 0 ? [] : _ref$unread,
        _ref$unreadUser = _ref.unreadUser,
        unreadUser = _ref$unreadUser === void 0 ? [] : _ref$unreadUser,
        _ref$unreadGroup = _ref.unreadGroup,
        unreadGroup = _ref$unreadGroup === void 0 ? [] : _ref$unreadGroup,
        text = _ref.text,
        type = _ref.type,
        setType = _ref.setType,
        loadMoreItems = _ref.loadMoreItems,
        loading = _ref.loading,
        onClose = _ref.onClose,
        error = _ref.error,
        _ref$userId = _ref.userId,
        userId = _ref$userId === void 0 ? '' : _ref$userId,
        setText = _ref.setText;
    var showRealNames = Boolean(useSetting('UI_Use_Real_Name'));
    var t = useTranslation();
    var inputRef = useAutoFocus(true);

    var _useCurrentRoute = useCurrentRoute(),
        _useCurrentRoute2 = _slicedToArray(_useCurrentRoute, 1),
        name = _useCurrentRoute2[0];

    if (!name) {
      throw new Error('No route name');
    }

    var channelRoute = useRoute(name);
    var onClick = useMutableCallback(function (e) {
      var context = e.currentTarget.dataset.id;
      channelRoute.push(_objectSpread({
        tab: 'thread',
        context: context,
        rid: room._id
      }, room.name && {
        name: room.name
      }));
    });
    var options = useMemo(function () {
      return [['all', t('All')], ['following', t('Following')], ['unread', t('Unread')]];
    }, [t]);

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
    var mid = useTabContext();
    var jump = useQueryStringParameter('jump');
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
      endReached: loading ? function () {
        return undefined;
      } : function (start) {
        return loadMoreItems(start, Math.min(50, total - start));
      },
      overscan: 25,
      data: threads,
      components: {
        Scroller: ScrollableContentWrapper
      },
      itemContent: function (_index, data) {
        return /*#__PURE__*/React.createElement(Row, {
          thread: data,
          showRealNames: showRealNames,
          unread: unread,
          unreadUser: unreadUser,
          unreadGroup: unreadGroup,
          userId: userId || '',
          onClick: onClick
        });
      }
    }))), typeof mid === 'string' && /*#__PURE__*/React.createElement(VerticalBar.InnerContent, null, /*#__PURE__*/React.createElement(ThreadComponent, {
      onClickBack: onClick,
      mid: mid,
      jump: jump,
      room: room
    })));
  }

  return ThreadList;
}();

module.exportDefault(withData(ThreadList));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Threads/ec9afb34e34f5438f2ff3bc91ec1f109ebbf00fc.map
