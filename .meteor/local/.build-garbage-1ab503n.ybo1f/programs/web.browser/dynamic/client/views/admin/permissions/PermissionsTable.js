function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/PermissionsTable.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Margins, Icon, Tabs, Button;
module.link("@rocket.chat/fuselage", {
  Margins(v) {
    Margins = v;
  },

  Icon(v) {
    Icon = v;
  },

  Tabs(v) {
    Tabs = v;
  },

  Button(v) {
    Button = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useState, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 2);
let GenericTable;
module.link("../../../components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 3);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 4);
let usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 5);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 6);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 7);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 8);
let FilterComponent;
module.link("./FilterComponent", {
  default(v) {
    FilterComponent = v;
  }

}, 9);
let PermissionRow;
module.link("./PermissionRow", {
  default(v) {
    PermissionRow = v;
  }

}, 10);
let PermissionsContextBar;
module.link("./PermissionsContextBar", {
  default(v) {
    PermissionsContextBar = v;
  }

}, 11);
let RoleHeader;
module.link("./RoleHeader", {
  default(v) {
    RoleHeader = v;
  }

}, 12);
let usePermissionsAndRoles;
module.link("./hooks/usePermissionsAndRoles", {
  usePermissionsAndRoles(v) {
    usePermissionsAndRoles = v;
  }

}, 13);

const PermissionsTable = () => {
  const t = useTranslation();
  const [filter, setFilter] = useState('');
  const canViewPermission = usePermission('access-permissions');
  const canViewSettingPermission = usePermission('access-setting-permissions');
  const defaultType = canViewPermission ? 'permissions' : 'settings';
  const [type, setType] = useState(defaultType);
  const [params, setParams] = useState({
    limit: 25,
    skip: 0
  });
  const router = useRoute('admin-permissions');
  const grantRole = useMethod('authorization:addPermissionToRole');
  const removeRole = useMethod('authorization:removeRoleFromPermission');
  const permissionsData = usePermissionsAndRoles(type, filter, params.limit, params.skip);
  const [permissions, total, roleList] = permissionsData;
  const handleParams = useMutableCallback(_ref => {
    let {
      current,
      itemsPerPage
    } = _ref;
    setParams({
      skip: current,
      limit: itemsPerPage
    });
  });
  const handlePermissionsTab = useMutableCallback(() => {
    if (type === 'permissions') {
      return;
    }

    setType('permissions');
  });
  const handleSettingsTab = useMutableCallback(() => {
    if (type === 'settings') {
      return;
    }

    setType('settings');
  });
  const handleAdd = useMutableCallback(() => {
    router.push({
      context: 'new'
    });
  });
  return /*#__PURE__*/React.createElement(Page, {
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Permissions')
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleAdd,
    "aria-label": t('New')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", t('New_role'))), /*#__PURE__*/React.createElement(Margins, {
    blockEnd: "x16"
  }, /*#__PURE__*/React.createElement(Tabs, null, /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: type === 'permissions',
    onClick: handlePermissionsTab,
    disabled: !canViewPermission
  }, t('Permissions')), /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: type === 'settings',
    onClick: handleSettingsTab,
    disabled: !canViewSettingPermission
  }, t('Settings')))), /*#__PURE__*/React.createElement(Page.Content, {
    mb: "neg-x8"
  }, /*#__PURE__*/React.createElement(Margins, {
    block: "x8"
  }, /*#__PURE__*/React.createElement(FilterComponent, {
    onChange: setFilter
  }), /*#__PURE__*/React.createElement(GenericTable, {
    header: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      width: "x120"
    }, t('Name')), roleList.map(_ref2 => {
      let {
        _id,
        name,
        description
      } = _ref2;
      return /*#__PURE__*/React.createElement(RoleHeader, {
        key: _id,
        _id: _id,
        name: name,
        description: description,
        router: router
      });
    })),
    total: total,
    results: permissions,
    params: params,
    setParams: handleParams,
    fixed: false
  }, useCallback(permission => /*#__PURE__*/React.createElement(PermissionRow, {
    key: permission._id,
    permission: permission,
    t: t,
    roleList: roleList,
    onGrant: grantRole,
    onRemove: removeRole
  }), [grantRole, removeRole, roleList, t]))))), /*#__PURE__*/React.createElement(PermissionsContextBar, null));
};

module.exportDefault(PermissionsTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/permissions/7d0f4d799efc3e3123a70fd6c9dd76905496ca20.map
