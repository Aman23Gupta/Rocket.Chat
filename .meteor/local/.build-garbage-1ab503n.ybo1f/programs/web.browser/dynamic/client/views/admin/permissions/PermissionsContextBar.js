function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/PermissionsContextBar.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let VerticalBar;
module.link("../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 2);
let useRouteParameter, useRoute;
module.link("../../../contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  },

  useRoute(v) {
    useRoute = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let EditRolePage;
module.link("./EditRolePageContainer", {
  default(v) {
    EditRolePage = v;
  }

}, 5);
let NewRolePage;
module.link("./NewRolePage", {
  default(v) {
    NewRolePage = v;
  }

}, 6);

const PermissionsContextBar = () => {
  const t = useTranslation();

  const _id = useRouteParameter('_id');

  const context = useRouteParameter('context');
  const router = useRoute('admin-permissions');
  const handleVerticalBarCloseButton = useMutableCallback(() => {
    router.push({});
  });
  return context && /*#__PURE__*/React.createElement(VerticalBar, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, context === 'new' && t('New_role'), context === 'edit' && t('Role_Editing'), /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: handleVerticalBarCloseButton
  })), context === 'new' && /*#__PURE__*/React.createElement(NewRolePage, null), context === 'edit' && /*#__PURE__*/React.createElement(EditRolePage, {
    _id: _id
  })) || null;
};

module.exportDefault(PermissionsContextBar);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/permissions/fb883a5e735a0a7c13ddeab60cee253c874990e2.map
