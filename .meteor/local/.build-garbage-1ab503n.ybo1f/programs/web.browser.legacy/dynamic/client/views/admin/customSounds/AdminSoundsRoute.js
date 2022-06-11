function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customSounds/AdminSoundsRoute.js                                                                 //
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
var Button, Icon;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
  }
}, 1);
var React, useMemo, useState, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 2);
var NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  "default": function (v) {
    NotAuthorizedPage = v;
  }
}, 3);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 4);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 5);
var usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 6);
var useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  },
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 7);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 8);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 9);
var AddCustomSound;
module.link("./AddCustomSound", {
  "default": function (v) {
    AddCustomSound = v;
  }
}, 10);
var AdminSounds;
module.link("./AdminSounds", {
  "default": function (v) {
    AdminSounds = v;
  }
}, 11);
var EditCustomSound;
module.link("./EditCustomSound", {
  "default": function (v) {
    EditCustomSound = v;
  }
}, 12);

function CustomSoundsRoute() {
  var route = useRoute('custom-sounds');
  var context = useRouteParameter('context');
  var id = useRouteParameter('id');
  var canManageCustomSounds = usePermission('manage-sounds');
  var t = useTranslation();

  var _useState = useState(function () {
    return {
      text: '',
      current: 0,
      itemsPerPage: 25
    };
  }),
      _useState2 = _slicedToArray(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var _useState3 = useState(function () {
    return ['name', 'asc'];
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      sort = _useState4[0],
      setSort = _useState4[1];

  var _useDebouncedValue = useDebouncedValue(params, 500),
      text = _useDebouncedValue.text,
      itemsPerPage = _useDebouncedValue.itemsPerPage,
      current = _useDebouncedValue.current;

  var _useDebouncedValue2 = useDebouncedValue(sort, 500),
      _useDebouncedValue3 = _slicedToArray(_useDebouncedValue2, 2),
      column = _useDebouncedValue3[0],
      direction = _useDebouncedValue3[1];

  var query = useMemo(function () {
    var _JSON$stringify;

    return _objectSpread(_objectSpread({
      query: JSON.stringify({
        name: {
          $regex: text || '',
          $options: 'i'
        }
      }),
      sort: JSON.stringify((_JSON$stringify = {}, _JSON$stringify[column] = direction === 'asc' ? 1 : -1, _JSON$stringify))
    }, itemsPerPage && {
      count: itemsPerPage
    }), current && {
      offset: current
    });
  }, [text, itemsPerPage, current, column, direction]);

  var _useEndpointData = useEndpointData('custom-sounds.list', query),
      data = _useEndpointData.value,
      reload = _useEndpointData.reload;

  var handleItemClick = useCallback(function (_id) {
    return function () {
      route.push({
        context: 'edit',
        id: _id
      });
    };
  }, [route]);

  var handleHeaderClick = function (id) {
    setSort(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          sortBy = _ref2[0],
          sortDirection = _ref2[1];

      if (sortBy === id) {
        return [id, sortDirection === 'asc' ? 'desc' : 'asc'];
      }

      return [id, 'asc'];
    });
  };

  var handleNewButtonClick = useCallback(function () {
    route.push({
      context: 'new'
    });
  }, [route]);
  var handleClose = useCallback(function () {
    route.push({});
  }, [route]);
  var handleChange = useCallback(function () {
    reload();
  }, [reload]);

  if (!canManageCustomSounds) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  return /*#__PURE__*/React.createElement(Page, {
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Page, {
    name: "admin-custom-sounds"
  }, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Custom_Sounds')
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleNewButtonClick,
    "aria-label": t('New')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", t('New'))), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(AdminSounds, {
    setParams: setParams,
    params: params,
    onHeaderClick: handleHeaderClick,
    data: data,
    onClick: handleItemClick,
    sort: sort
  }))), context && /*#__PURE__*/React.createElement(VerticalBar, {
    flexShrink: 0
  }, /*#__PURE__*/React.createElement(VerticalBar.Header, null, context === 'edit' && t('Custom_Sound_Edit'), context === 'new' && t('Custom_Sound_Add'), /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: handleClose
  })), context === 'edit' && /*#__PURE__*/React.createElement(EditCustomSound, {
    _id: id,
    close: handleClose,
    onChange: handleChange
  }), context === 'new' && /*#__PURE__*/React.createElement(AddCustomSound, {
    goToNew: handleItemClick,
    close: handleClose,
    onChange: handleChange
  })));
}

module.exportDefault(CustomSoundsRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/customSounds/00e3f1876cc2c562a964feacc5b272a2a27f2e2a.map
