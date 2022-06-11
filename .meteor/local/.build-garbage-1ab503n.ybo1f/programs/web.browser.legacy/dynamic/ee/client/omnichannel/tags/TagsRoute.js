function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/tags/TagsRoute.js                                                                             //
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
module.link("../../../../client/components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 3);
var NotAuthorizedPage;
module.link("../../../../client/components/NotAuthorizedPage", {
  "default": function (v) {
    NotAuthorizedPage = v;
  }
}, 4);
var usePermission;
module.link("../../../../client/contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 5);
var useRouteParameter, useRoute;
module.link("../../../../client/contexts/RouterContext", {
  useRouteParameter: function (v) {
    useRouteParameter = v;
  },
  useRoute: function (v) {
    useRoute = v;
  }
}, 6);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var useEndpointData;
module.link("../../../../client/hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 8);
var RemoveTagButton;
module.link("./RemoveTagButton", {
  "default": function (v) {
    RemoveTagButton = v;
  }
}, 9);
var TagEditWithData;
module.link("./TagEditWithData", {
  "default": function (v) {
    TagEditWithData = v;
  }
}, 10);
var TagsPage;
module.link("./TagsPage", {
  "default": function (v) {
    TagsPage = v;
  }
}, 11);

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
        name: 1
      }),
      text: text,
      sort: JSON.stringify((_JSON$stringify = {}, _JSON$stringify[column] = sortDir(direction), _JSON$stringify.usernames = column === 'name' ? sortDir(direction) : undefined, _JSON$stringify))
    }, itemsPerPage && {
      count: itemsPerPage
    }), current && {
      offset: current
    });
  }, [text, itemsPerPage, current, column, direction]);
};

function TagsRoute() {
  var t = useTranslation();
  var canViewTags = usePermission('manage-livechat-tags');

  var _useState = useState({
    text: '',
    current: 0,
    itemsPerPage: 25
  }),
      _useState2 = _slicedToArray(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var _useState3 = useState(['name', 'asc']),
      _useState4 = _slicedToArray(_useState3, 2),
      sort = _useState4[0],
      setSort = _useState4[1];

  var debouncedParams = useDebouncedValue(params, 500);
  var debouncedSort = useDebouncedValue(sort, 500);
  var query = useQuery(debouncedParams, debouncedSort);
  var tagsRoute = useRoute('omnichannel-tags');
  var context = useRouteParameter('context');
  var id = useRouteParameter('id');
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
      return tagsRoute.push({
        context: 'edit',
        id: id
      });
    };
  });

  var _useEndpointData = useEndpointData('livechat/tags.list', query),
      _useEndpointData$valu = _useEndpointData.value,
      data = _useEndpointData$valu === void 0 ? {} : _useEndpointData$valu,
      reload = _useEndpointData.reload;

  var header = useMemo(function () {
    return [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'name',
      direction: sort[1],
      active: sort[0] === 'name',
      onClick: onHeaderClick,
      sort: "name"
    }, t('Name')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'description',
      direction: sort[1],
      active: sort[0] === 'description',
      onClick: onHeaderClick,
      sort: "description"
    }, t('Description')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'remove',
      w: "x60"
    }, t('Remove'))].filter(Boolean);
  }, [sort, onHeaderClick, t]);
  var renderRow = useCallback(function (_ref4) {
    var _id = _ref4._id,
        name = _ref4.name,
        description = _ref4.description;
    return /*#__PURE__*/React.createElement(Table.Row, {
      key: _id,
      tabIndex: 0,
      role: "link",
      onClick: onRowClick(_id),
      action: true,
      "qa-user-id": _id
    }, /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, name), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, description), /*#__PURE__*/React.createElement(RemoveTagButton, {
      _id: _id,
      reload: reload
    }));
  }, [reload, onRowClick]);

  if (context === 'edit' || context === 'new') {
    return /*#__PURE__*/React.createElement(TagEditWithData, {
      reload: reload,
      tagId: id,
      title: context === 'edit' ? t('Edit_Tag') : t('New_Tag')
    });
  }

  if (!canViewTags) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  return /*#__PURE__*/React.createElement(TagsPage, {
    setParams: setParams,
    params: params,
    onHeaderClick: onHeaderClick,
    data: data,
    useQuery: useQuery,
    reload: reload,
    header: header,
    renderRow: renderRow,
    title: 'Tags'
  });
}

module.exportDefault(TagsRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/tags/8966dbf3731f1e14bf87a4012d4ff3b353f32c9d.map
