function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/useRole.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useRole: () => useRole
});
let useCallback;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  }

}, 0);
let Roles;
module.link("../../../../app/models/client", {
  Roles(v) {
    Roles = v;
  }

}, 1);
let useReactiveValue;
module.link("../../../hooks/useReactiveValue", {
  useReactiveValue(v) {
    useReactiveValue = v;
  }

}, 2);

const useRole = _id => useReactiveValue(useCallback(() => Roles.findOne({
  _id
}), [_id]));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/permissions/05dcc5368a64e054083c8f76de5ca8203660fdc7.map
