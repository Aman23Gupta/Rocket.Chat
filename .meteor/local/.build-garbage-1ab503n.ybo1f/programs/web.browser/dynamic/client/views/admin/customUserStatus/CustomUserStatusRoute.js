function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customUserStatus/CustomUserStatusRoute.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Button, Icon;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue(v) {
    useDebouncedValue = v;
  }

}, 1);
let React, useMemo, useState, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 2);
let NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  default(v) {
    NotAuthorizedPage = v;
  }

}, 3);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 4);
let VerticalBar;
module.link("../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 5);
let usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 6);
let useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  },

  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 7);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 8);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 9);
let AddCustomUserStatus;
module.link("./AddCustomUserStatus", {
  default(v) {
    AddCustomUserStatus = v;
  }

}, 10);
let CustomUserStatus;
module.link("./CustomUserStatus", {
  default(v) {
    CustomUserStatus = v;
  }

}, 11);
let EditCustomUserStatusWithData;
module.link("./EditCustomUserStatusWithData", {
  default(v) {
    EditCustomUserStatusWithData = v;
  }

}, 12);

function CustomUserStatusRoute() {
  const route = useRoute('custom-user-status');
  const context = useRouteParameter('context');
  const id = useRouteParameter('id');
  const canManageUserStatus = usePermission('manage-user-status');
  const t = useTranslation();
  const [params, setParams] = useState(() => ({
    text: '',
    current: 0,
    itemsPerPage: 25
  }));
  const [sort, setSort] = useState(() => ['name', 'asc']);
  const {
    text,
    itemsPerPage,
    current
  } = useDebouncedValue(params, 500);
  const [column, direction] = useDebouncedValue(sort, 500);
  const query = useMemo(() => _objectSpread(_objectSpread({
    query: JSON.stringify({
      name: {
        $regex: text || '',
        $options: 'i'
      }
    }),
    sort: JSON.stringify({
      [column]: direction === 'asc' ? 1 : -1
    })
  }, itemsPerPage && {
    count: itemsPerPage
  }), current && {
    offset: current
  }), [text, itemsPerPage, current, column, direction]);
  const {
    value: data,
    reload
  } = useEndpointData('custom-user-status.list', query);

  const handleItemClick = _id => () => {
    route.push({
      context: 'edit',
      id: _id
    });
  };

  const handleHeaderClick = id => {
    setSort(_ref => {
      let [sortBy, sortDirection] = _ref;

      if (sortBy === id) {
        return [id, sortDirection === 'asc' ? 'desc' : 'asc'];
      }

      return [id, 'asc'];
    });
  };

  const handleNewButtonClick = useCallback(() => {
    route.push({
      context: 'new'
    });
  }, [route]);
  const handleClose = useCallback(() => {
    route.push({});
  }, [route]);
  const handleChange = useCallback(() => {
    reload();
  }, [reload]);

  if (!canManageUserStatus) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  return /*#__PURE__*/React.createElement(Page, {
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Page, {
    name: "admin-custom-user-status"
  }, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Custom_User_Status')
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleNewButtonClick,
    "aria-label": t('New')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", t('New'))), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(CustomUserStatus, {
    setParams: setParams,
    params: params,
    onHeaderClick: handleHeaderClick,
    data: data,
    onClick: handleItemClick,
    sort: sort
  }))), context && /*#__PURE__*/React.createElement(VerticalBar, {
    flexShrink: 0
  }, /*#__PURE__*/React.createElement(VerticalBar.Header, null, context === 'edit' && t('Custom_User_Status_Edit'), context === 'new' && t('Custom_User_Status_Add'), /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: handleClose
  })), context === 'edit' && /*#__PURE__*/React.createElement(EditCustomUserStatusWithData, {
    _id: id,
    close: handleClose,
    onChange: handleChange
  }), context === 'new' && /*#__PURE__*/React.createElement(AddCustomUserStatus, {
    goToNew: handleItemClick,
    close: handleClose,
    onChange: handleChange
  })));
}

module.exportDefault(CustomUserStatusRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/customUserStatus/547ac037b0c524d8921f3a2c184b04a7efbc78d7.map
