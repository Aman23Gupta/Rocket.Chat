function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/EditRolePageContainer.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Callout;
module.link("@rocket.chat/fuselage", {
  Callout: function (v) {
    Callout = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var EditRolePage;
module.link("./EditRolePage", {
  "default": function (v) {
    EditRolePage = v;
  }
}, 3);
var useRole;
module.link("./useRole", {
  useRole: function (v) {
    useRole = v;
  }
}, 4);

var EditRolePageContainer = function (_ref) {
  var _id = _ref._id;
  var t = useTranslation();
  var role = useRole(_id);

  if (!role) {
    return /*#__PURE__*/React.createElement(Callout, {
      type: "danger"
    }, t('error-invalid-role'));
  }

  return /*#__PURE__*/React.createElement(EditRolePage, {
    key: _id,
    data: role
  });
};

module.exportDefault(EditRolePageContainer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/permissions/017a7383230e68b8fd2e24a610c6cd8d442f2829.map
