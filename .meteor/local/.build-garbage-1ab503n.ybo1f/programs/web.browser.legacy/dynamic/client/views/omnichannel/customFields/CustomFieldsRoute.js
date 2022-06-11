function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/customFields/CustomFieldsRoute.js                                                          //
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
var Table;
module.link("@rocket.chat/fuselage", {
  Table: function (v) {
    Table = v;
  }
}, 0);
var useDebouncedValue, useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
  },
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useMemo, useCallback, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var GenericTable;
module.link("../../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 3);
var NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  "default": function (v) {
    NotAuthorizedPage = v;
  }
}, 4);
var usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 5);
var useRouteParameter, useRoute;
module.link("../../../contexts/RouterContext", {
  useRouteParameter: function (v) {
    useRouteParameter = v;
  },
  useRoute: function (v) {
    useRoute = v;
  }
}, 6);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 8);
var CustomFieldsPage;
module.link("./CustomFieldsPage", {
  "default": function (v) {
    CustomFieldsPage = v;
  }
}, 9);
var EditCustomFieldsPage;
module.link("./EditCustomFieldsPageContainer", {
  "default": function (v) {
    EditCustomFieldsPage = v;
  }
}, 10);
var NewCustomFieldsPage;
module.link("./NewCustomFieldsPage", {
  "default": function (v) {
    NewCustomFieldsPage = v;
  }
}, 11);
var RemoveCustomFieldButton;
module.link("./RemoveCustomFieldButton", {
  "default": function (v) {
    RemoveCustomFieldButton = v;
  }
}, 12);

var sortDir = function (sortDir) {
  return sortDir === 'asc' ? 1 : -1;
};

var useQuery = function (_ref, _ref2) {
  var text = _ref.text,
      itemsPerPage = _ref.itemsPerPage,
      current = _ref.current;

  var _ref3 = _slicedToArray(_ref2, 2),
      column = _ref3[0],
      direction = _ref3[1];

  return useMemo(function () {
    var _JSON$stringify;

    return _objectSpread(_objectSpread({
      fields: JSON.stringify({
        label: 1
      }),
      text: text,
      sort: JSON.stringify((_JSON$stringify = {}, _JSON$stringify[column] = sortDir(direction), _JSON$stringify))
    }, itemsPerPage && {
      count: itemsPerPage
    }), current && {
      offset: current
    });
  }, [text, itemsPerPage, current, column, direction]);
};

var CustomFieldsRoute = function () {
  var t = useTranslation();
  var canViewCustomFields = usePermission('view-livechat-customfields');

  var _useState = useState({
    text: '',
    current: 0,
    itemsPerPage: 25
  }),
      _useState2 = _slicedToArray(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var _useState3 = useState(['field', 'asc']),
      _useState4 = _slicedToArray(_useState3, 2),
      sort = _useState4[0],
      setSort = _useState4[1];

  var debouncedParams = useDebouncedValue(params, 500);
  var debouncedSort = useDebouncedValue(sort, 500);
  var query = useQuery(debouncedParams, debouncedSort);
  var departmentsRoute = useRoute('omnichannel-customfields');
  var context = useRouteParameter('context');
  var onHeaderClick = useMutableCallback(function (id) {
    var _sort = _slicedToArray(sort, 2),
        sortBy = _sort[0],
        sortDirection = _sort[1];

    if (sortBy === id) {
      setSort([id, sortDirection === 'asc' ? 'desc' : 'asc']);
      return;
    }

    setSort([id, 'asc']);
  });
  var onRowClick = useMutableCallback(function (id) {
    return function () {
      return departmentsRoute.push({
        context: 'edit',
        id: id
      });
    };
  });

  var _useEndpointData = useEndpointData('livechat/custom-fields', query),
      data = _useEndpointData.value,
      reload = _useEndpointData.reload;

  var header = useMemo(function () {
    return [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'field',
      direction: sort[1],
      active: sort[0] === '_id',
      onClick: onHeaderClick,
      sort: "_id"
    }, t('Field')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'label',
      direction: sort[1],
      active: sort[0] === 'label',
      onClick: onHeaderClick,
      sort: "label"
    }, t('Label')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'scope',
      direction: sort[1],
      active: sort[0] === 'scope',
      onClick: onHeaderClick,
      sort: "scope"
    }, t('Scope')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'visibility',
      direction: sort[1],
      active: sort[0] === 'visibility',
      onClick: onHeaderClick,
      sort: "visibility"
    }, t('Visibility')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'remove',
      w: "x60"
    }, t('Remove'))].filter(Boolean);
  }, [sort, onHeaderClick, t]);
  var renderRow = useCallback(function (_ref4) {
    var label = _ref4.label,
        _id = _ref4._id,
        scope = _ref4.scope,
        visibility = _ref4.visibility;
    return /*#__PURE__*/React.createElement(Table.Row, {
      key: _id,
      tabIndex: 0,
      role: "link",
      onClick: onRowClick(_id),
      action: true,
      "qa-user-id": _id
    }, /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, _id), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, label), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, scope === 'visitor' ? t('Visitor') : t('Room')), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, visibility === 'visible' ? t('Visible') : t('Hidden')), /*#__PURE__*/React.createElement(RemoveCustomFieldButton, {
      _id: _id,
      reload: reload
    }));
  }, [onRowClick, reload, t]);

  if (!canViewCustomFields) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  if (context === 'new') {
    return /*#__PURE__*/React.createElement(NewCustomFieldsPage, {
      reload: reload
    });
  }

  if (context === 'edit') {
    return /*#__PURE__*/React.createElement(EditCustomFieldsPage, {
      reload: reload
    });
  }

  return /*#__PURE__*/React.createElement(CustomFieldsPage, {
    setParams: setParams,
    params: params,
    onHeaderClick: onHeaderClick,
    data: data,
    useQuery: useQuery,
    reload: reload,
    header: header,
    renderRow: renderRow,
    title: t('Custom_Fields')
  });
};

module.exportDefault(CustomFieldsRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/customFields/4838eb8305bb56b7f4b80455c8bc918dc057bd91.map
