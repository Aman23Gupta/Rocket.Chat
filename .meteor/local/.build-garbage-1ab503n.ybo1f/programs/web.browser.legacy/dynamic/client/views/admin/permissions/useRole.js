function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/useRole.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useRole: function () {
    return useRole;
  }
});
var useCallback;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  }
}, 0);
var Roles;
module.link("../../../../app/models/client", {
  Roles: function (v) {
    Roles = v;
  }
}, 1);
var useReactiveValue;
module.link("../../../hooks/useReactiveValue", {
  useReactiveValue: function (v) {
    useReactiveValue = v;
  }
}, 2);

var useRole = function (_id) {
  return useReactiveValue(useCallback(function () {
    return Roles.findOne({
      _id: _id
    });
  }, [_id]));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/permissions/dea0f84512da732e74f867544ac5e977c1f072b8.map
