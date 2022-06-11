function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/MarketplaceRow.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["medium", "large"];

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Box, Table, Tag;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Table: function (v) {
    Table = v;
  },
  Tag: function (v) {
    Tag = v;
  }
}, 0);
var React, useState, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var AppAvatar;
module.link("../../../components/avatar/AppAvatar", {
  "default": function (v) {
    AppAvatar = v;
  }
}, 2);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var AppMenu;
module.link("./AppMenu", {
  "default": function (v) {
    AppMenu = v;
  }
}, 5);
var AppStatus;
module.link("./AppStatus", {
  "default": function (v) {
    AppStatus = v;
  }
}, 6);
var PriceDisplay;
module.link("./PriceDisplay", {
  "default": function (v) {
    PriceDisplay = v;
  }
}, 7);

var MarketplaceRow = function (_ref) {
  var medium = _ref.medium,
      large = _ref.large,
      props = _objectWithoutProperties(_ref, _excluded);

  var authorName = props.author.name,
      name = props.name,
      id = props.id,
      description = props.description,
      categories = props.categories,
      purchaseType = props.purchaseType,
      pricingPlans = props.pricingPlans,
      price = props.price,
      iconFileData = props.iconFileData,
      marketplaceVersion = props.marketplaceVersion,
      iconFileContent = props.iconFileContent,
      installed = props.installed;
  var t = useTranslation();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFocused = _useState2[0],
      setFocused = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isHovered = _useState4[0],
      setHovered = _useState4[1];

  var isStatusVisible = isFocused || isHovered;
  var marketplaceRoute = useRoute('admin-marketplace');

  var handleClick = function () {
    marketplaceRoute.push({
      context: 'details',
      version: marketplaceVersion,
      id: id
    });
  };

  var handleKeyDown = function (e) {
    if (!['Enter', 'Space'].includes(e.nativeEvent.code)) {
      return;
    }

    handleClick();
  };

  var preventClickPropagation = function (e) {
    e.stopPropagation();
  };

  return /*#__PURE__*/React.createElement(Table.Row, {
    key: id,
    role: "link",
    action: true,
    tabIndex: 0,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    onFocus: function () {
      return setFocused(true);
    },
    onBlur: function () {
      return setFocused(false);
    },
    onMouseEnter: function () {
      return setHovered(true);
    },
    onMouseLeave: function () {
      return setHovered(false);
    }
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
  }, t('By') + " " + authorName))), large && /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Box, {
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
  }, categories.map(function (current) {
    return /*#__PURE__*/React.createElement(Box, {
      key: current,
      mie: "x4"
    }, /*#__PURE__*/React.createElement(Tag, {
      disabled: true
    }, current));
  })))), medium && /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(PriceDisplay, {
    purchaseType: purchaseType,
    pricingPlans: pricingPlans,
    price: price
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
//# sourceMappingURL=/dynamic/client/views/admin/apps/6368a80dff2be7fc8004b16c043e3857062ebb84.map
