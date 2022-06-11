function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/cannedResponses/CannedResponsesRoute.tsx                                                      //
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
var Table, Box;
module.link("@rocket.chat/fuselage", {
  Table: function (v) {
    Table = v;
  },
  Box: function (v) {
    Box = v;
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
var PageSkeleton;
module.link("../../../../client/components/PageSkeleton", {
  "default": function (v) {
    PageSkeleton = v;
  }
}, 5);
var UserAvatar;
module.link("../../../../client/components/avatar/UserAvatar", {
  "default": function (v) {
    UserAvatar = v;
  }
}, 6);
var usePermission;
module.link("../../../../client/contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 7);
var useRouteParameter, useRoute;
module.link("../../../../client/contexts/RouterContext", {
  useRouteParameter: function (v) {
    useRouteParameter = v;
  },
  useRoute: function (v) {
    useRoute = v;
  }
}, 8);
var useToastMessageDispatch;
module.link("../../../../client/contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 9);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 10);
var useEndpointData;
module.link("../../../../client/hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 11);
var useForm;
module.link("../../../../client/hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 12);
var useFormatDateAndTime;
module.link("../../../../client/hooks/useFormatDateAndTime", {
  useFormatDateAndTime: function (v) {
    useFormatDateAndTime = v;
  }
}, 13);
var AsyncStatePhase;
module.link("../../../../client/lib/asyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 14);
var CannedResponseEditWithData;
module.link("./CannedResponseEditWithData", {
  "default": function (v) {
    CannedResponseEditWithData = v;
  }
}, 15);
var CannedResponseFilter;
module.link("./CannedResponseFilter", {
  "default": function (v) {
    CannedResponseFilter = v;
  }
}, 16);
var CannedResponseNew;
module.link("./CannedResponseNew", {
  "default": function (v) {
    CannedResponseNew = v;
  }
}, 17);
var CannedResponsesPage;
module.link("./CannedResponsesPage", {
  "default": function (v) {
    CannedResponsesPage = v;
  }
}, 18);
var RemoveCannedResponseButton;
module.link("./RemoveCannedResponseButton", {
  "default": function (v) {
    RemoveCannedResponseButton = v;
  }
}, 19);

var CannedResponsesRoute = function () {
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var canViewCannedResponses = usePermission('manage-livechat-canned-responses');
  var isMonitor = usePermission('save-department-canned-responses');
  var isManager = usePermission('save-all-canned-responses');

  var _useForm = useForm({
    sharing: '',
    createdBy: '',
    tags: [],
    text: ''
  }),
      values = _useForm.values,
      handlers = _useForm.handlers;

  var sharing = values.sharing,
      createdBy = values.createdBy,
      text = values.text;
  var handleSharing = handlers.handleSharing,
      handleCreatedBy = handlers.handleCreatedBy,
      handleText = handlers.handleText;

  var _useState = useState({
    current: 0,
    itemsPerPage: 25
  }),
      _useState2 = _slicedToArray(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var _useState3 = useState(['shortcut', 'asc']),
      _useState4 = _slicedToArray(_useState3, 2),
      sort = _useState4[0],
      setSort = _useState4[1];

  var debouncedParams = useDebouncedValue(params, 500);
  var debouncedSort = useDebouncedValue(sort, 500);
  var debouncedText = useDebouncedValue(text, 500);
  var query = useMemo(function () {
    var _JSON$stringify;

    return _objectSpread(_objectSpread(_objectSpread(_objectSpread({
      text: debouncedText,
      sort: JSON.stringify((_JSON$stringify = {}, _JSON$stringify[debouncedSort[0]] = debouncedSort[1] === 'asc' ? 1 : -1, _JSON$stringify))
    }, sharing && {
      scope: sharing
    }), createdBy && createdBy !== 'all' && {
      createdBy: createdBy
    }), debouncedParams.itemsPerPage && {
      count: debouncedParams.itemsPerPage
    }), debouncedParams.current && {
      offset: debouncedParams.current
    });
  }, [createdBy, debouncedParams, debouncedSort, debouncedText, sharing]);
  var cannedResponsesRoute = useRoute('omnichannel-canned-responses');
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
  var onRowClick = useMutableCallback(function (id, scope) {
    return function () {
      if (scope === 'global' && isMonitor && !isManager) {
        dispatchToastMessage({
          type: 'error',
          message: t('Not_authorized')
        });
        return;
      }

      cannedResponsesRoute.push({
        context: 'edit',
        id: id
      });
    };
  });
  var defaultOptions = useMemo(function () {
    return {
      global: t('Public'),
      department: t('Department'),
      user: t('Private')
    };
  }, [t]);

  var _useEndpointData = useEndpointData('canned-responses', query),
      data = _useEndpointData.value,
      reload = _useEndpointData.reload;

  var _useEndpointData2 = useEndpointData('canned-responses'),
      totalData = _useEndpointData2.value,
      totalDataPhase = _useEndpointData2.phase,
      totalDataReload = _useEndpointData2.reload;

  var getTime = useFormatDateAndTime();
  var header = useMemo(function () {
    return [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'shortcut',
      direction: sort[1],
      active: sort[0] === 'shortcut',
      onClick: onHeaderClick,
      sort: "shortcut"
    }, t('Shortcut')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'sharing',
      direction: sort[1],
      active: sort[0] === 'sharing',
      onClick: onHeaderClick,
      sort: "sharing"
    }, t('Sharing')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'createdBy',
      direction: sort[1],
      active: sort[0] === 'createdBy',
      onClick: onHeaderClick,
      sort: "createdBy"
    }, t('Created_by')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'createdAt',
      direction: sort[1],
      active: sort[0] === 'createdAt',
      onClick: onHeaderClick,
      sort: "createdAt"
    }, t('Created_at')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'tags',
      direction: sort[1],
      active: sort[0] === 'tags',
      onClick: onHeaderClick,
      sort: "tags"
    }, t('Tags')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'remove',
      w: "x60"
    }, t('Remove'))].filter(Boolean);
  }, [sort, onHeaderClick, t]);
  var renderRow = useCallback(function (_ref) {
    var _id = _ref._id,
        shortcut = _ref.shortcut,
        scope = _ref.scope,
        createdBy = _ref.createdBy,
        _createdAt = _ref._createdAt,
        _ref$tags = _ref.tags,
        tags = _ref$tags === void 0 ? [] : _ref$tags;
    return /*#__PURE__*/React.createElement(Table.Row, {
      key: _id,
      tabIndex: 0,
      role: "link",
      onClick: onRowClick(_id, scope),
      action: true,
      "qa-user-id": _id
    }, /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, shortcut), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, defaultOptions[scope]), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, /*#__PURE__*/React.createElement(Box, {
      display: "flex",
      alignItems: "center"
    }, /*#__PURE__*/React.createElement(UserAvatar, {
      size: "x24",
      username: createdBy.username
    }), /*#__PURE__*/React.createElement(Box, {
      display: "flex",
      withTruncatedText: true,
      mi: "x8"
    }, /*#__PURE__*/React.createElement(Box, {
      display: "flex",
      flexDirection: "column",
      alignSelf: "center",
      withTruncatedText: true
    }, /*#__PURE__*/React.createElement(Box, {
      fontScale: "p2m",
      withTruncatedText: true,
      color: "default"
    }, createdBy.username))))), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, getTime(_createdAt)), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, tags.join(', ')), !(scope === 'global' && isMonitor && !isManager) && /*#__PURE__*/React.createElement(RemoveCannedResponseButton, {
      _id: _id,
      reload: reload,
      totalDataReload: totalDataReload
    }));
  }, [getTime, onRowClick, reload, totalDataReload, defaultOptions, isMonitor, isManager]);

  if (context === 'edit' && id) {
    return /*#__PURE__*/React.createElement(CannedResponseEditWithData, {
      reload: reload,
      totalDataReload: totalDataReload,
      cannedResponseId: id
    });
  }

  if (context === 'new') {
    return /*#__PURE__*/React.createElement(CannedResponseNew, {
      reload: reload,
      totalDataReload: totalDataReload
    });
  }

  if (!canViewCannedResponses) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  if (totalDataPhase === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(PageSkeleton, null);
  }

  return /*#__PURE__*/React.createElement(CannedResponsesPage, {
    setParams: setParams,
    renderFilter: function () {
      return /*#__PURE__*/React.createElement(CannedResponseFilter, {
        sharingValue: sharing,
        createdByValue: createdBy,
        shortcutValue: text,
        setSharing: handleSharing,
        setCreatedBy: handleCreatedBy,
        setShortcut: handleText
      });
    },
    params: params,
    data: data,
    header: header,
    renderRow: renderRow,
    title: t('Canned_Responses'),
    totalCannedResponses: (totalData === null || totalData === void 0 ? void 0 : totalData.total) || 0
  });
};

module.exportDefault(CannedResponsesRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/cannedResponses/fcce64300190493f48fe13802a60cb80ae0c3254.map
