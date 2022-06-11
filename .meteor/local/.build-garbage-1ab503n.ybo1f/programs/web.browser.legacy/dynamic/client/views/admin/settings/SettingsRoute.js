function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/SettingsRoute.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  SettingsRoute: function () {
    return SettingsRoute;
  }
});
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  "default": function (v) {
    NotAuthorizedPage = v;
  }
}, 1);
var useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 2);
var useIsPrivilegedSettingsContext;
module.link("../../../contexts/SettingsContext", {
  useIsPrivilegedSettingsContext: function (v) {
    useIsPrivilegedSettingsContext = v;
  }
}, 3);
var EditableSettingsProvider;
module.link("../../../providers/EditableSettingsProvider", {
  "default": function (v) {
    EditableSettingsProvider = v;
  }
}, 4);
var GroupSelector;
module.link("./GroupSelector", {
  "default": function (v) {
    GroupSelector = v;
  }
}, 5);

function SettingsRoute() {
  var hasPermission = useIsPrivilegedSettingsContext();
  var groupId = useRouteParameter('group');

  if (!hasPermission) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  return /*#__PURE__*/React.createElement(EditableSettingsProvider, null, /*#__PURE__*/React.createElement(GroupSelector, {
    groupId: groupId
  }));
}

module.exportDefault(SettingsRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/c7b2995074c9fd93f413b0d77cbf1ed6e4139b29.map
