function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/UsersInRoleTableContainer.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue(v) {
    useDebouncedValue = v;
  }

}, 0);
let React, useState, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 2);
let UsersInRoleTable;
module.link("./UsersInRoleTable", {
  default(v) {
    UsersInRoleTable = v;
  }

}, 3);

const UsersInRoleTableContainer = _ref => {
  let {
    rid,
    roleId,
    roleName,
    description,
    reloadRef
  } = _ref;
  const [params, setParams] = useState({
    current: 0,
    itemsPerPage: 25
  });
  const debouncedParams = useDebouncedValue(params, 500);
  const query = useMemo(() => _objectSpread(_objectSpread({
    roomId: rid,
    role: roleId
  }, debouncedParams.itemsPerPage && {
    count: debouncedParams.itemsPerPage
  }), debouncedParams.current && {
    offset: debouncedParams.current
  }), [debouncedParams, rid, roleId]);
  const {
    value: data = {},
    reload
  } = useEndpointData('roles.getUsersInRole', query);
  reloadRef.current = reload;
  const tableData = (data === null || data === void 0 ? void 0 : data.users) || [];
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
//# sourceMappingURL=/dynamic/client/views/admin/permissions/6721813bfe9de52e28e5ac46831b3edce7d20137.map
