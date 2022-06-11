function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/contextualBar/CannedResponse/CannedResponseList.tsx                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Button, ButtonGroup, Icon, Margins, Select, TextInput;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  Select: function (v) {
    Select = v;
  },
  TextInput: function (v) {
    TextInput = v;
  }
}, 0);
var useAutoFocus, useResizeObserver;
module.link("@rocket.chat/fuselage-hooks", {
  useAutoFocus: function (v) {
    useAutoFocus = v;
  },
  useResizeObserver: function (v) {
    useResizeObserver = v;
  }
}, 1);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 2);
var Virtuoso;
module.link("react-virtuoso", {
  Virtuoso: function (v) {
    Virtuoso = v;
  }
}, 3);
var ScrollableContentWrapper;
module.link("../../../../../../client/components/ScrollableContentWrapper", {
  "default": function (v) {
    ScrollableContentWrapper = v;
  }
}, 4);
var VerticalBar;
module.link("../../../../../../client/components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 5);
var useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var useTabContext;
module.link("../../../../../../client/views/room/providers/ToolboxProvider", {
  useTabContext: function (v) {
    useTabContext = v;
  }
}, 7);
var Item;
module.link("./Item", {
  "default": function (v) {
    Item = v;
  }
}, 8);
var WrapCannedResponse;
module.link("./WrapCannedResponse", {
  "default": function (v) {
    WrapCannedResponse = v;
  }
}, 9);

var CannedResponseList = function (_ref) {
  var loadMoreItems = _ref.loadMoreItems,
      cannedItems = _ref.cannedItems,
      itemCount = _ref.itemCount,
      onClose = _ref.onClose,
      loading = _ref.loading,
      options = _ref.options,
      text = _ref.text,
      setText = _ref.setText,
      type = _ref.type,
      setType = _ref.setType,
      onClickItem = _ref.onClickItem,
      onClickCreate = _ref.onClickCreate,
      onClickUse = _ref.onClickUse,
      reload = _ref.reload;
  var t = useTranslation();
  var inputRef = useAutoFocus(true);
  var cannedId = useTabContext();

  var _useResizeObserver = useResizeObserver({
    debounceDelay: 200
  }),
      ref = _useResizeObserver.ref,
      _useResizeObserver$co = _useResizeObserver.contentBoxSize;

  _useResizeObserver$co = _useResizeObserver$co === void 0 ? {} : _useResizeObserver$co;
  var _useResizeObserver$co2 = _useResizeObserver$co.inlineSize,
      inlineSize = _useResizeObserver$co2 === void 0 ? 378 : _useResizeObserver$co2;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('Canned_Responses')), /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(VerticalBar.Content, {
    paddingInline: 0,
    ref: ref
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    p: "x24",
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
  })))), /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    display: "flex"
  }, itemCount === 0 && /*#__PURE__*/React.createElement(Box, {
    p: "x24"
  }, t('No_Canned_Responses')), itemCount > 0 && cannedItems.length > 0 && /*#__PURE__*/React.createElement(Virtuoso, {
    style: {
      width: inlineSize
    },
    totalCount: itemCount,
    endReached: loading ? undefined : function (start) {
      return loadMoreItems(start, Math.min(25, itemCount - start));
    },
    overscan: 25,
    data: cannedItems,
    components: {
      Scroller: ScrollableContentWrapper
    },
    itemContent: function (_index, data) {
      return /*#__PURE__*/React.createElement(Item, {
        data: data,
        onClickItem: function () {
          onClickItem(data);
        },
        onClickUse: onClickUse
      });
    }
  }))), cannedId && /*#__PURE__*/React.createElement(VerticalBar.InnerContent, null, /*#__PURE__*/React.createElement(WrapCannedResponse, {
    cannedItem: cannedItems.find(function (canned) {
      return canned._id === cannedId;
    }),
    onClickBack: onClickItem,
    onClickUse: onClickUse,
    reload: reload
  })), /*#__PURE__*/React.createElement(VerticalBar.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onClickCreate
  }, t('Create')))));
};

module.exportDefault( /*#__PURE__*/memo(CannedResponseList));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/contextualBar/CannedResponse/faf34a95d158fe6bfedf39515c5014d2539323ef.map
