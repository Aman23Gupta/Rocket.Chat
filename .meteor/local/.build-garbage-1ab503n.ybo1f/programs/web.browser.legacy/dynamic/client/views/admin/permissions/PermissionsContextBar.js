function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/PermissionsContextBar.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 2);
var useRouteParameter, useRoute;
module.link("../../../contexts/RouterContext", {
  useRouteParameter: function (v) {
    useRouteParameter = v;
  },
  useRoute: function (v) {
    useRoute = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var EditRolePage;
module.link("./EditRolePageContainer", {
  "default": function (v) {
    EditRolePage = v;
  }
}, 5);
var NewRolePage;
module.link("./NewRolePage", {
  "default": function (v) {
    NewRolePage = v;
  }
}, 6);

var PermissionsContextBar = function () {
  var t = useTranslation();

  var _id = useRouteParameter('_id');

  var context = useRouteParameter('context');
  var router = useRoute('admin-permissions');
  var handleVerticalBarCloseButton = useMutableCallback(function () {
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
//# sourceMappingURL=/dynamic/client/views/admin/permissions/f96c5e291968e9e3d51ccfeb019247ad02b330b5.map
