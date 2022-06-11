function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/UsersInRoleTableContainer.js                                                         //
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
var useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
  }
}, 0);
var React, useState, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 2);
var UsersInRoleTable;
module.link("./UsersInRoleTable", {
  "default": function (v) {
    UsersInRoleTable = v;
  }
}, 3);

var UsersInRoleTableContainer = function (_ref) {
  var rid = _ref.rid,
      roleId = _ref.roleId,
      roleName = _ref.roleName,
      description = _ref.description,
      reloadRef = _ref.reloadRef;

  var _useState = useState({
    current: 0,
    itemsPerPage: 25
  }),
      _useState2 = _slicedToArray(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var debouncedParams = useDebouncedValue(params, 500);
  var query = useMemo(function () {
    return _objectSpread(_objectSpread({
      roomId: rid,
      role: roleId
    }, debouncedParams.itemsPerPage && {
      count: debouncedParams.itemsPerPage
    }), debouncedParams.current && {
      offset: debouncedParams.current
    });
  }, [debouncedParams, rid, roleId]);

  var _useEndpointData = useEndpointData('roles.getUsersInRole', query),
      _useEndpointData$valu = _useEndpointData.value,
      data = _useEndpointData$valu === void 0 ? {} : _useEndpointData$valu,
      reload = _useEndpointData.reload;

  reloadRef.current = reload;
  var tableData = (data === null || data === void 0 ? void 0 : data.users) || [];
  return /*#__PURE__*/React.createElement(UsersInRoleTable, {
    data: tableData,
    total: data === null || data === void 0 ? void 0 : data.total,
    reload: reload,
    params: params,
    setParams: setParams,
    roleName: roleName,
    description: description,
    rid: rid
  });
};

module.exportDefault(UsersInRoleTableContainer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/permissions/5968d185ca81c7de6e7d71a3b14dcd8b802ba322.map
