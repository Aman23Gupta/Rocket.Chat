function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/PermissionsTable.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Margins, Icon, Tabs, Button;
module.link("@rocket.chat/fuselage", {
  Margins: function (v) {
    Margins = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Tabs: function (v) {
    Tabs = v;
  },
  Button: function (v) {
    Button = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useState, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 2);
var GenericTable;
module.link("../../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 3);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 4);
var usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 5);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 6);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 7);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 8);
var FilterComponent;
module.link("./FilterComponent", {
  "default": function (v) {
    FilterComponent = v;
  }
}, 9);
var PermissionRow;
module.link("./PermissionRow", {
  "default": function (v) {
    PermissionRow = v;
  }
}, 10);
var PermissionsContextBar;
module.link("./PermissionsContextBar", {
  "default": function (v) {
    PermissionsContextBar = v;
  }
}, 11);
var RoleHeader;
module.link("./RoleHeader", {
  "default": function (v) {
    RoleHeader = v;
  }
}, 12);
var usePermissionsAndRoles;
module.link("./hooks/usePermissionsAndRoles", {
  usePermissionsAndRoles: function (v) {
    usePermissionsAndRoles = v;
  }
}, 13);

var PermissionsTable = function () {
  var t = useTranslation();

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var canViewPermission = usePermission('access-permissions');
  var canViewSettingPermission = usePermission('access-setting-permissions');
  var defaultType = canViewPermission ? 'permissions' : 'settings';

  var _useState3 = useState(defaultType),
      _useState4 = _slicedToArray(_useState3, 2),
      type = _useState4[0],
      setType = _useState4[1];

  var _useState5 = useState({
    limit: 25,
    skip: 0
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      params = _useState6[0],
      setParams = _useState6[1];

  var router = useRoute('admin-permissions');
  var grantRole = useMethod('authorization:addPermissionToRole');
  var removeRole = useMethod('authorization:removeRoleFromPermission');
  var permissionsData = usePermissionsAndRoles(type, filter, params.limit, params.skip);

  var _permissionsData = _slicedToArray(permissionsData, 3),
      permissions = _permissionsData[0],
      total = _permissionsData[1],
      roleList = _permissionsData[2];

  var handleParams = useMutableCallback(function (_ref) {
    var current = _ref.current,
        itemsPerPage = _ref.itemsPerPage;
    setParams({
      skip: current,
      limit: itemsPerPage
    });
  });
  var handlePermissionsTab = useMutableCallback(function () {
    if (type === 'permissions') {
      return;
    }

    setType('permissions');
  });
  var handleSettingsTab = useMutableCallback(function () {
    if (type === 'settings') {
      return;
    }

    setType('settings');
  });
  var handleAdd = useMutableCallback(function () {
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
    }, t('Name')), roleList.map(function (_ref2) {
      var _id = _ref2._id,
          name = _ref2.name,
          description = _ref2.description;
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
  }, useCallback(function (permission) {
    return /*#__PURE__*/React.createElement(PermissionRow, {
      key: permission._id,
      permission: permission,
      t: t,
      roleList: roleList,
      onGrant: grantRole,
      onRemove: removeRole
    });
  }, [grantRole, removeRole, roleList, t]))))), /*#__PURE__*/React.createElement(PermissionsContextBar, null));
};

module.exportDefault(PermissionsTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/permissions/fbdf508497eb9820c213201af3468afe4972e852.map
