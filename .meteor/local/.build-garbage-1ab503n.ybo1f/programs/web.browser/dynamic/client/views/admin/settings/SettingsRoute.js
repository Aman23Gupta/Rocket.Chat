function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/SettingsRoute.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  SettingsRoute: () => SettingsRoute
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  default(v) {
    NotAuthorizedPage = v;
  }

}, 1);
let useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 2);
let useIsPrivilegedSettingsContext;
module.link("../../../contexts/SettingsContext", {
  useIsPrivilegedSettingsContext(v) {
    useIsPrivilegedSettingsContext = v;
  }

}, 3);
let EditableSettingsProvider;
module.link("../../../providers/EditableSettingsProvider", {
  default(v) {
    EditableSettingsProvider = v;
  }

}, 4);
let GroupSelector;
module.link("./GroupSelector", {
  default(v) {
    GroupSelector = v;
  }

}, 5);

function SettingsRoute() {
  const hasPermission = useIsPrivilegedSettingsContext();
  const groupId = useRouteParameter('group');

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
//# sourceMappingURL=/dynamic/client/views/admin/settings/2c3aa64f6c35510e237c45681089284a4b08e7e0.map
