function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/MarketplaceRow.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["medium", "large"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
let Box, Table, Tag;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Table(v) {
    Table = v;
  },

  Tag(v) {
    Tag = v;
  }

}, 0);
let React, useState, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let AppAvatar;
module.link("../../../components/avatar/AppAvatar", {
  default(v) {
    AppAvatar = v;
  }

}, 2);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let AppMenu;
module.link("./AppMenu", {
  default(v) {
    AppMenu = v;
  }

}, 5);
let AppStatus;
module.link("./AppStatus", {
  default(v) {
    AppStatus = v;
  }

}, 6);
let PriceDisplay;
module.link("./PriceDisplay", {
  default(v) {
    PriceDisplay = v;
  }

}, 7);

const MarketplaceRow = _ref => {
  let {
    medium,
    large
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    author: {
      name: authorName
    },
    name,
    id,
    description,
    categories,
    purchaseType,
    pricingPlans,
    price,
    iconFileData,
    marketplaceVersion,
    iconFileContent,
    installed
  } = props;
  const t = useTranslation();
  const [isFocused, setFocused] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const isStatusVisible = isFocused || isHovered;
  const marketplaceRoute = useRoute('admin-marketplace');

  const handleClick = () => {
    marketplaceRoute.push({
      context: 'details',
      version: marketplaceVersion,
      id
    });
  };

  const handleKeyDown = e => {
    if (!['Enter', 'Space'].includes(e.nativeEvent.code)) {
      return;
    }

    handleClick();
  };

  const preventClickPropagation = e => {
    e.stopPropagation();
  };

  return /*#__PURE__*/React.createElement(Table.Row, {
    key: id,
    role: "link",
    action: true,
    tabIndex: 0,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true,
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(AppAvatar, {
    size: "x40",
    mie: "x8",
    alignSelf: "center",
    iconFileContent: iconFileContent,
    iconFileData: iconFileData
  }), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start"
  }, /*#__PURE__*/React.createElement(Box, {
    color: "default",
    fontScale: "p2m"
  }, name), /*#__PURE__*/React.createElement(Box, {
    color: "default",
    fontScale: "p2m"
  }, "".concat(t('By'), " ").concat(authorName)))), large && /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Box, {
    color: "default",
    withTruncatedText: true
  }, description), categories && /*#__PURE__*/React.createElement(Box, {
    color: "hint",
    display: "flex",
    "flex-direction": "row",
    withTruncatedText: true
  }, categories.map(current => /*#__PURE__*/React.createElement(Box, {
    key: current,
    mie: "x4"
  }, /*#__PURE__*/React.createElement(Tag, {
    disabled: true
  }, current)))))), medium && /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(PriceDisplay, {
    purchaseType,
    pricingPlans,
    price
  })), /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginInline: "neg-x8",
    onClick: preventClickPropagation
  }, /*#__PURE__*/React.createElement(AppStatus, {
    app: props,
    showStatus: isStatusVisible,
    marginInline: "x8"
  }), installed && /*#__PURE__*/React.createElement(AppMenu, {
    app: props,
    invisible: !isStatusVisible,
    marginInline: "x8"
  }))));
};

module.exportDefault( /*#__PURE__*/memo(MarketplaceRow));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/061e632331fb2fd4d4c6a96d1d6246af522cdf8d.map
