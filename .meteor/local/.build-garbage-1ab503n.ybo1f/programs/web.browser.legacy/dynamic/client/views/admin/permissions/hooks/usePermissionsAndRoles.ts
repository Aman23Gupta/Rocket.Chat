function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/hooks/usePermissionsAndRoles.ts                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  usePermissionsAndRoles: function () {
    return usePermissionsAndRoles;
  }
});
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var useCallback;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var ChatPermissions;
module.link("../../../../../app/authorization/client/lib/ChatPermissions", {
  ChatPermissions: function (v) {
    ChatPermissions = v;
  }
}, 2);
var CONSTANTS;
module.link("../../../../../app/authorization/lib", {
  CONSTANTS: function (v) {
    CONSTANTS = v;
  }
}, 3);
var Roles;
module.link("../../../../../app/models/client", {
  Roles: function (v) {
    Roles = v;
  }
}, 4);
var useReactiveValue;
module.link("../../../../hooks/useReactiveValue", {
  useReactiveValue: function (v) {
    useReactiveValue = v;
  }
}, 5);

var usePermissionsAndRoles = function () {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'permissions';
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 25;
  var skip = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var getPermissions = useCallback(function () {
    var filterRegExp = new RegExp(filter, 'i');
    return ChatPermissions.find({
      level: type === 'permissions' ? {
        $ne: CONSTANTS.SETTINGS_LEVEL
      } : CONSTANTS.SETTINGS_LEVEL,
      _id: filterRegExp
    }, {
      sort: {
        _id: 1
      },
      skip: skip,
      limit: limit
    });
  }, [filter, limit, skip, type]);
  var getRoles = useMutableCallback(function () {
    return Roles.find().fetch();
  });
  var permissions = useReactiveValue(getPermissions);
  var roles = useReactiveValue(getRoles);
  var reloadRoles = getRoles();
  return [permissions.fetch(), permissions.count(false), roles, reloadRoles];
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/permissions/hooks/b8a54cae6ac7baa5977b577b64d761ff8116bc6f.map
