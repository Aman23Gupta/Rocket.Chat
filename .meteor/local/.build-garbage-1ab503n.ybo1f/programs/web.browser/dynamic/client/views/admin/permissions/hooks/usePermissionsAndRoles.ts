function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/hooks/usePermissionsAndRoles.ts                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  usePermissionsAndRoles: () => usePermissionsAndRoles
});
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let useCallback;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  }

}, 1);
let ChatPermissions;
module.link("../../../../../app/authorization/client/lib/ChatPermissions", {
  ChatPermissions(v) {
    ChatPermissions = v;
  }

}, 2);
let CONSTANTS;
module.link("../../../../../app/authorization/lib", {
  CONSTANTS(v) {
    CONSTANTS = v;
  }

}, 3);
let Roles;
module.link("../../../../../app/models/client", {
  Roles(v) {
    Roles = v;
  }

}, 4);
let useReactiveValue;
module.link("../../../../hooks/useReactiveValue", {
  useReactiveValue(v) {
    useReactiveValue = v;
  }

}, 5);

const usePermissionsAndRoles = function () {
  let type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'permissions';
  let filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  let limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 25;
  let skip = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  const getPermissions = useCallback(() => {
    const filterRegExp = new RegExp(filter, 'i');
    return ChatPermissions.find({
      level: type === 'permissions' ? {
        $ne: CONSTANTS.SETTINGS_LEVEL
      } : CONSTANTS.SETTINGS_LEVEL,
      _id: filterRegExp
    }, {
      sort: {
        _id: 1
      },
      skip,
      limit
    });
  }, [filter, limit, skip, type]);
  const getRoles = useMutableCallback(() => Roles.find().fetch());
  const permissions = useReactiveValue(getPermissions);
  const roles = useReactiveValue(getRoles);
  const reloadRoles = getRoles();
  return [permissions.fetch(), permissions.count(false), roles, reloadRoles];
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/permissions/hooks/1967f685cdb518abc0c90d953a046603e3fe1810.map
