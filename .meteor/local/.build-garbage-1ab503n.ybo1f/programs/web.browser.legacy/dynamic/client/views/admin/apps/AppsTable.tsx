function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppsTable.tsx                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["current", "itemsPerPage", "setItemsPerPage", "setCurrent"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var Box, States, StatesAction, StatesActions, StatesIcon, StatesSubtitle, StatesSuggestion, StatesSuggestionList, StatesSuggestionListItem, StatesSuggestionText, StatesTitle, Pagination, Icon;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  States: function (v) {
    States = v;
  },
  StatesAction: function (v) {
    StatesAction = v;
  },
  StatesActions: function (v) {
    StatesActions = v;
  },
  StatesIcon: function (v) {
    StatesIcon = v;
  },
  StatesSubtitle: function (v) {
    StatesSubtitle = v;
  },
  StatesSuggestion: function (v) {
    StatesSuggestion = v;
  },
  StatesSuggestionList: function (v) {
    StatesSuggestionList = v;
  },
  StatesSuggestionListItem: function (v) {
    StatesSuggestionListItem = v;
  },
  StatesSuggestionText: function (v) {
    StatesSuggestionText = v;
  },
  StatesTitle: function (v) {
    StatesTitle = v;
  },
  Pagination: function (v) {
    Pagination = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var useDebouncedState;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedState: function (v) {
    useDebouncedState = v;
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
var FilterByText;
module.link("../../../components/FilterByText", {
  "default": function (v) {
    FilterByText = v;
  }
}, 3);
var GenericTable, GenericTableBody, GenericTableHeader, GenericTableHeaderCell, GenericTableLoadingTable;
module.link("../../../components/GenericTable", {
  GenericTable: function (v) {
    GenericTable = v;
  },
  GenericTableBody: function (v) {
    GenericTableBody = v;
  },
  GenericTableHeader: function (v) {
    GenericTableHeader = v;
  },
  GenericTableHeaderCell: function (v) {
    GenericTableHeaderCell = v;
  },
  GenericTableLoadingTable: function (v) {
    GenericTableLoadingTable = v;
  }
}, 4);
var usePagination;
module.link("../../../components/GenericTable/hooks/usePagination", {
  usePagination: function (v) {
    usePagination = v;
  }
}, 5);
var useSort;
module.link("../../../components/GenericTable/hooks/useSort", {
  useSort: function (v) {
    useSort = v;
  }
}, 6);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 7);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 8);
var useResizeInlineBreakpoint;
module.link("../../../hooks/useResizeInlineBreakpoint", {
  useResizeInlineBreakpoint: function (v) {
    useResizeInlineBreakpoint = v;
  }
}, 9);
var AsyncStatePhase;
module.link("../../../lib/asyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 10);
var AppRow;
module.link("./AppRow", {
  "default": function (v) {
    AppRow = v;
  }
}, 11);
var useAppsReload, useAppsResult;
module.link("./AppsContext", {
  useAppsReload: function (v) {
    useAppsReload = v;
  },
  useAppsResult: function (v) {
    useAppsResult = v;
  }
}, 12);
var MarketplaceRow;
module.link("./MarketplaceRow", {
  "default": function (v) {
    MarketplaceRow = v;
  }
}, 13);
var CategoryDropDown;
module.link("./components/CategoryDropDown", {
  "default": function (v) {
    CategoryDropDown = v;
  }
}, 14);
var TagList;
module.link("./components/TagList", {
  "default": function (v) {
    TagList = v;
  }
}, 15);
var useCategories;
module.link("./hooks/useCategories", {
  useCategories: function (v) {
    useCategories = v;
  }
}, 16);
var useFilteredApps;
module.link("./hooks/useFilteredApps", {
  useFilteredApps: function (v) {
    useFilteredApps = v;
  }
}, 17);

var AppsTable = function (_ref) {
  var isMarketplace = _ref.isMarketplace;
  var t = useTranslation();

  var _useResizeInlineBreak = useResizeInlineBreakpoint([800, 600], 200),
      _useResizeInlineBreak2 = _slicedToArray(_useResizeInlineBreak, 3),
      ref = _useResizeInlineBreak2[0],
      onLargeBreakpoint = _useResizeInlineBreak2[1],
      onMediumBreakpoint = _useResizeInlineBreak2[2];

  var _useAppsResult = useAppsResult(),
      marketplaceApps = _useAppsResult.marketplaceApps,
      installedApps = _useAppsResult.installedApps;

  var marketplaceRoute = useRoute('admin-marketplace');
  var Row = isMarketplace ? MarketplaceRow : AppRow;

  var _useDebouncedState = useDebouncedState('', 500),
      _useDebouncedState2 = _slicedToArray(_useDebouncedState, 2),
      text = _useDebouncedState2[0],
      setText = _useDebouncedState2[1];

  var _useSort = useSort('name'),
      sortBy = _useSort.sortBy,
      sortDirection = _useSort.sortDirection,
      setSort = _useSort.setSort;

  var reload = useAppsReload();

  var _usePagination = usePagination(),
      current = _usePagination.current,
      itemsPerPage = _usePagination.itemsPerPage,
      onSetItemsPerPage = _usePagination.setItemsPerPage,
      onSetCurrent = _usePagination.setCurrent,
      paginationProps = _objectWithoutProperties(_usePagination, _excluded);

  var _useCategories = useCategories(),
      _useCategories2 = _slicedToArray(_useCategories, 4),
      categories = _useCategories2[0],
      selectedCategories = _useCategories2[1],
      categoryTagList = _useCategories2[2],
      onSelected = _useCategories2[3];

  var appsResult = useFilteredApps({
    appsData: isMarketplace ? marketplaceApps : installedApps,
    text: text,
    current: current,
    itemsPerPage: itemsPerPage,
    sortDirection: sortDirection,
    categories: useMemo(function () {
      return selectedCategories.map(function (_ref2) {
        var label = _ref2.label;
        return label;
      });
    }, [selectedCategories])
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FilterByText, {
    placeholder: t('Search_Apps'),
    onChange: function (_ref3) {
      var text = _ref3.text;
      return setText(text);
    }
  }, /*#__PURE__*/React.createElement(CategoryDropDown, {
    data: categories,
    onSelected: onSelected
  })), /*#__PURE__*/React.createElement(TagList, {
    categories: categoryTagList,
    onClick: onSelected
  }), (appsResult.phase === AsyncStatePhase.LOADING || appsResult.phase === AsyncStatePhase.RESOLVED && Boolean(appsResult.value.count)) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GenericTable, {
    ref: ref
  }, /*#__PURE__*/React.createElement(GenericTableHeader, null, /*#__PURE__*/React.createElement(GenericTableHeaderCell, {
    direction: sortDirection,
    active: sortBy === 'name',
    sort: "name",
    width: onMediumBreakpoint ? 'x240' : 'x180',
    onClick: setSort
  }, t('Name')), onMediumBreakpoint && /*#__PURE__*/React.createElement(GenericTableHeaderCell, null, t('Details')), isMarketplace && /*#__PURE__*/React.createElement(GenericTableHeaderCell, null, t('Price')), /*#__PURE__*/React.createElement(GenericTableHeaderCell, {
    width: "x160"
  }, t('Status'))), /*#__PURE__*/React.createElement(GenericTableBody, null, appsResult.phase === AsyncStatePhase.LOADING && /*#__PURE__*/React.createElement(GenericTableLoadingTable // eslint-disable-next-line no-nested-ternary
  , {
    headerCells: onMediumBreakpoint ? isMarketplace ? 4 : 3 : 2
  }), appsResult.phase === AsyncStatePhase.RESOLVED && appsResult.value.items.map(function (app) {
    return /*#__PURE__*/React.createElement(Row, _extends({
      key: app.id,
      large: onLargeBreakpoint,
      medium: onMediumBreakpoint
    }, app));
  }))), appsResult.phase === AsyncStatePhase.RESOLVED && /*#__PURE__*/React.createElement(Pagination, _extends({
    current: current,
    itemsPerPage: itemsPerPage,
    count: appsResult.value.total,
    onSetItemsPerPage: onSetItemsPerPage,
    onSetCurrent: onSetCurrent
  }, paginationProps))), appsResult.phase === AsyncStatePhase.RESOLVED && isMarketplace && appsResult.value.count === 0 && /*#__PURE__*/React.createElement(Box, {
    mbs: "x20"
  }, /*#__PURE__*/React.createElement(States, null, /*#__PURE__*/React.createElement(StatesIcon, {
    name: "magnifier"
  }), /*#__PURE__*/React.createElement(StatesTitle, null, t('No_app_matches')), appsResult.value.shouldShowSearchText ? /*#__PURE__*/React.createElement(StatesSubtitle, null, t('No_marketplace_matches_for'), ": ", /*#__PURE__*/React.createElement("strong", null, "\"", text, "\"")) : '', /*#__PURE__*/React.createElement(StatesSuggestion, null, /*#__PURE__*/React.createElement(StatesSuggestionText, null, t('You_can_try_to'), ":"), /*#__PURE__*/React.createElement(StatesSuggestionList, null, /*#__PURE__*/React.createElement(StatesSuggestionListItem, null, t('Search_by_category')), /*#__PURE__*/React.createElement(StatesSuggestionListItem, null, t('Search_for_a_more_general_term')), /*#__PURE__*/React.createElement(StatesSuggestionListItem, null, t('Search_for_a_more_specific_term')), /*#__PURE__*/React.createElement(StatesSuggestionListItem, null, t('Check_if_the_spelling_is_correct')))))), appsResult.phase === AsyncStatePhase.RESOLVED && !isMarketplace && appsResult.value.total === 0 && /*#__PURE__*/React.createElement(Box, {
    mbs: "x20"
  }, /*#__PURE__*/React.createElement(States, null, /*#__PURE__*/React.createElement(StatesIcon, {
    name: "magnifier"
  }), /*#__PURE__*/React.createElement(StatesTitle, null, t('No_apps_installed')), /*#__PURE__*/React.createElement(StatesSubtitle, null, t('Explore_the_marketplace_to_find_awesome_apps')), /*#__PURE__*/React.createElement(StatesActions, null, /*#__PURE__*/React.createElement(StatesAction, {
    onClick: function () {
      return marketplaceRoute.push({
        context: ''
      });
    }
  }, t('Explore_marketplace'))))), appsResult.phase === AsyncStatePhase.RESOLVED && !isMarketplace && appsResult.value.total !== 0 && appsResult.value.count === 0 && /*#__PURE__*/React.createElement(Box, {
    mbs: "x20"
  }, /*#__PURE__*/React.createElement(States, null, /*#__PURE__*/React.createElement(StatesIcon, {
    name: "magnifier"
  }), /*#__PURE__*/React.createElement(StatesTitle, null, t('No_installed_app_matches')), appsResult.value.shouldShowSearchText ? /*#__PURE__*/React.createElement(StatesSubtitle, null, /*#__PURE__*/React.createElement("span", null, t('No_app_matches_for'), " ", /*#__PURE__*/React.createElement("strong", null, "\"", text, "\""))) : '', /*#__PURE__*/React.createElement(StatesSuggestion, null, /*#__PURE__*/React.createElement(StatesSuggestionText, null, t('Try_searching_in_the_marketplace_instead'))), /*#__PURE__*/React.createElement(StatesActions, null, /*#__PURE__*/React.createElement(StatesAction, {
    onClick: function () {
      return marketplaceRoute.push({
        context: ''
      });
    }
  }, t('Search_on_marketplace'))))), appsResult.phase === AsyncStatePhase.REJECTED && /*#__PURE__*/React.createElement(Box, {
    mbs: "x20"
  }, /*#__PURE__*/React.createElement(States, null, /*#__PURE__*/React.createElement(StatesIcon, {
    variation: "danger",
    name: "circle-exclamation"
  }), /*#__PURE__*/React.createElement(StatesTitle, null, t('Connection_error')), /*#__PURE__*/React.createElement(StatesSubtitle, null, t('Marketplace_error')), /*#__PURE__*/React.createElement(StatesActions, null, /*#__PURE__*/React.createElement(StatesAction, {
    onClick: reload
  }, /*#__PURE__*/React.createElement(Icon, {
    mie: "x4",
    size: "x20",
    name: "reload"
  }), t('Reload_page'))))));
};

module.exportDefault(AppsTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/8d37d3efff3f5944b6d0e8496df98237c41ff1da.map
