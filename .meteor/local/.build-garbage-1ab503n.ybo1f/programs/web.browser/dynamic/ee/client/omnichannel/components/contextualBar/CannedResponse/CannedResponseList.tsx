function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/contextualBar/CannedResponse/CannedResponseList.tsx                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Button, ButtonGroup, Icon, Margins, Select, TextInput;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Icon(v) {
    Icon = v;
  },

  Margins(v) {
    Margins = v;
  },

  Select(v) {
    Select = v;
  },

  TextInput(v) {
    TextInput = v;
  }

}, 0);
let useAutoFocus, useResizeObserver;
module.link("@rocket.chat/fuselage-hooks", {
  useAutoFocus(v) {
    useAutoFocus = v;
  },

  useResizeObserver(v) {
    useResizeObserver = v;
  }

}, 1);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 2);
let Virtuoso;
module.link("react-virtuoso", {
  Virtuoso(v) {
    Virtuoso = v;
  }

}, 3);
let ScrollableContentWrapper;
module.link("../../../../../../client/components/ScrollableContentWrapper", {
  default(v) {
    ScrollableContentWrapper = v;
  }

}, 4);
let VerticalBar;
module.link("../../../../../../client/components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 5);
let useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let useTabContext;
module.link("../../../../../../client/views/room/providers/ToolboxProvider", {
  useTabContext(v) {
    useTabContext = v;
  }

}, 7);
let Item;
module.link("./Item", {
  default(v) {
    Item = v;
  }

}, 8);
let WrapCannedResponse;
module.link("./WrapCannedResponse", {
  default(v) {
    WrapCannedResponse = v;
  }

}, 9);

const CannedResponseList = _ref => {
  let {
    loadMoreItems,
    cannedItems,
    itemCount,
    onClose,
    loading,
    options,
    text,
    setText,
    type,
    setType,
    onClickItem,
    onClickCreate,
    onClickUse,
    reload
  } = _ref;
  const t = useTranslation();
  const inputRef = useAutoFocus(true);
  const cannedId = useTabContext();
  const {
    ref,
    contentBoxSize: {
      inlineSize = 378
    } = {}
  } = useResizeObserver({
    debounceDelay: 200
  });
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
    endReached: loading ? undefined : start => loadMoreItems(start, Math.min(25, itemCount - start)),
    overscan: 25,
    data: cannedItems,
    components: {
      Scroller: ScrollableContentWrapper
    },
    itemContent: (_index, data) => /*#__PURE__*/React.createElement(Item, {
      data: data,
      onClickItem: () => {
        onClickItem(data);
      },
      onClickUse: onClickUse
    })
  }))), cannedId && /*#__PURE__*/React.createElement(VerticalBar.InnerContent, null, /*#__PURE__*/React.createElement(WrapCannedResponse, {
    cannedItem: cannedItems.find(canned => canned._id === cannedId),
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/contextualBar/CannedResponse/12a3d58955a5541e01cdfb50dde079e4cd46f996.map
