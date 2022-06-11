function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppsTable.tsx                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["current", "itemsPerPage", "setItemsPerPage", "setCurrent"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Box, States, StatesAction, StatesActions, StatesIcon, StatesSubtitle, StatesSuggestion, StatesSuggestionList, StatesSuggestionListItem, StatesSuggestionText, StatesTitle, Pagination, Icon;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  States(v) {
    States = v;
  },

  StatesAction(v) {
    StatesAction = v;
  },

  StatesActions(v) {
    StatesActions = v;
  },

  StatesIcon(v) {
    StatesIcon = v;
  },

  StatesSubtitle(v) {
    StatesSubtitle = v;
  },

  StatesSuggestion(v) {
    StatesSuggestion = v;
  },

  StatesSuggestionList(v) {
    StatesSuggestionList = v;
  },

  StatesSuggestionListItem(v) {
    StatesSuggestionListItem = v;
  },

  StatesSuggestionText(v) {
    StatesSuggestionText = v;
  },

  StatesTitle(v) {
    StatesTitle = v;
  },

  Pagination(v) {
    Pagination = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let useDebouncedState;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedState(v) {
    useDebouncedState = v;
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
let FilterByText;
module.link("../../../components/FilterByText", {
  default(v) {
    FilterByText = v;
  }

}, 3);
let GenericTable, GenericTableBody, GenericTableHeader, GenericTableHeaderCell, GenericTableLoadingTable;
module.link("../../../components/GenericTable", {
  GenericTable(v) {
    GenericTable = v;
  },

  GenericTableBody(v) {
    GenericTableBody = v;
  },

  GenericTableHeader(v) {
    GenericTableHeader = v;
  },

  GenericTableHeaderCell(v) {
    GenericTableHeaderCell = v;
  },

  GenericTableLoadingTable(v) {
    GenericTableLoadingTable = v;
  }

}, 4);
let usePagination;
module.link("../../../components/GenericTable/hooks/usePagination", {
  usePagination(v) {
    usePagination = v;
  }

}, 5);
let useSort;
module.link("../../../components/GenericTable/hooks/useSort", {
  useSort(v) {
    useSort = v;
  }

}, 6);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 7);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 8);
let useResizeInlineBreakpoint;
module.link("../../../hooks/useResizeInlineBreakpoint", {
  useResizeInlineBreakpoint(v) {
    useResizeInlineBreakpoint = v;
  }

}, 9);
let AsyncStatePhase;
module.link("../../../lib/asyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 10);
let AppRow;
module.link("./AppRow", {
  default(v) {
    AppRow = v;
  }

}, 11);
let useAppsReload, useAppsResult;
module.link("./AppsContext", {
  useAppsReload(v) {
    useAppsReload = v;
  },

  useAppsResult(v) {
    useAppsResult = v;
  }

}, 12);
let MarketplaceRow;
module.link("./MarketplaceRow", {
  default(v) {
    MarketplaceRow = v;
  }

}, 13);
let CategoryDropDown;
module.link("./components/CategoryDropDown", {
  default(v) {
    CategoryDropDown = v;
  }

}, 14);
let TagList;
module.link("./components/TagList", {
  default(v) {
    TagList = v;
  }

}, 15);
let useCategories;
module.link("./hooks/useCategories", {
  useCategories(v) {
    useCategories = v;
  }

}, 16);
let useFilteredApps;
module.link("./hooks/useFilteredApps", {
  useFilteredApps(v) {
    useFilteredApps = v;
  }

}, 17);

const AppsTable = _ref => {
  let {
    isMarketplace
  } = _ref;
  const t = useTranslation();
  const [ref, onLargeBreakpoint, onMediumBreakpoint] = useResizeInlineBreakpoint([800, 600], 200);
  const {
    marketplaceApps,
    installedApps
  } = useAppsResult();
  const marketplaceRoute = useRoute('admin-marketplace');
  const Row = isMarketplace ? MarketplaceRow : AppRow;
  const [text, setText] = useDebouncedState('', 500);
  const {
    sortBy,
    sortDirection,
    setSort
  } = useSort('name');
  const reload = useAppsReload();

  const _usePagination = usePagination(),
        {
    current,
    itemsPerPage,
    setItemsPerPage: onSetItemsPerPage,
    setCurrent: onSetCurrent
  } = _usePagination,
        paginationProps = _objectWithoutProperties(_usePagination, _excluded);

  const [categories, selectedCategories, categoryTagList, onSelected] = useCategories();
  const appsResult = useFilteredApps({
    appsData: isMarketplace ? marketplaceApps : installedApps,
    text,
    current,
    itemsPerPage,
    sortDirection,
    categories: useMemo(() => selectedCategories.map(_ref2 => {
      let {
        label
      } = _ref2;
      return label;
    }), [selectedCategories])
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FilterByText, {
    placeholder: t('Search_Apps'),
    onChange: _ref3 => {
      let {
        text
      } = _ref3;
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
  }), appsResult.phase === AsyncStatePhase.RESOLVED && appsResult.value.items.map(app => /*#__PURE__*/React.createElement(Row, _extends({
    key: app.id,
    large: onLargeBreakpoint,
    medium: onMediumBreakpoint
  }, app))))), appsResult.phase === AsyncStatePhase.RESOLVED && /*#__PURE__*/React.createElement(Pagination, _extends({
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
    onClick: () => marketplaceRoute.push({
      context: ''
    })
  }, t('Explore_marketplace'))))), appsResult.phase === AsyncStatePhase.RESOLVED && !isMarketplace && appsResult.value.total !== 0 && appsResult.value.count === 0 && /*#__PURE__*/React.createElement(Box, {
    mbs: "x20"
  }, /*#__PURE__*/React.createElement(States, null, /*#__PURE__*/React.createElement(StatesIcon, {
    name: "magnifier"
  }), /*#__PURE__*/React.createElement(StatesTitle, null, t('No_installed_app_matches')), appsResult.value.shouldShowSearchText ? /*#__PURE__*/React.createElement(StatesSubtitle, null, /*#__PURE__*/React.createElement("span", null, t('No_app_matches_for'), " ", /*#__PURE__*/React.createElement("strong", null, "\"", text, "\""))) : '', /*#__PURE__*/React.createElement(StatesSuggestion, null, /*#__PURE__*/React.createElement(StatesSuggestionText, null, t('Try_searching_in_the_marketplace_instead'))), /*#__PURE__*/React.createElement(StatesActions, null, /*#__PURE__*/React.createElement(StatesAction, {
    onClick: () => marketplaceRoute.push({
      context: ''
    })
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
//# sourceMappingURL=/dynamic/client/views/admin/apps/48bad9d4f16a412d199debf0540fe93d32a8839c.map
