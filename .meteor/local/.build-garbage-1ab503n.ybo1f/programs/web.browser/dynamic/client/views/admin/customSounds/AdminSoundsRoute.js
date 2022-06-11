function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customSounds/AdminSoundsRoute.js                                                                 //
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
let AddCustomSound;
module.link("./AddCustomSound", {
  default(v) {
    AddCustomSound = v;
  }

}, 10);
let AdminSounds;
module.link("./AdminSounds", {
  default(v) {
    AdminSounds = v;
  }

}, 11);
let EditCustomSound;
module.link("./EditCustomSound", {
  default(v) {
    EditCustomSound = v;
  }

}, 12);

function CustomSoundsRoute() {
  const route = useRoute('custom-sounds');
  const context = useRouteParameter('context');
  const id = useRouteParameter('id');
  const canManageCustomSounds = usePermission('manage-sounds');
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
  } = useEndpointData('custom-sounds.list', query);
  const handleItemClick = useCallback(_id => () => {
    route.push({
      context: 'edit',
      id: _id
    });
  }, [route]);

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
//# sourceMappingURL=/dynamic/client/views/admin/customSounds/0f378125c47c21532609b5f19cb62aaf72357dc6.map
