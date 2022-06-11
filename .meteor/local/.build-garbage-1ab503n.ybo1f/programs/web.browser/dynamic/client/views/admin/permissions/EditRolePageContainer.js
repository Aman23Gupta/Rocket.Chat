function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/EditRolePageContainer.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Callout;
module.link("@rocket.chat/fuselage", {
  Callout(v) {
    Callout = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let EditRolePage;
module.link("./EditRolePage", {
  default(v) {
    EditRolePage = v;
  }

}, 3);
let useRole;
module.link("./useRole", {
  useRole(v) {
    useRole = v;
  }

}, 4);

const EditRolePageContainer = _ref => {
  let {
    _id
  } = _ref;
  const t = useTranslation();
  const role = useRole(_id);

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
//# sourceMappingURL=/dynamic/client/views/admin/permissions/784bec05dd99512a6976ffa28cc9115da4be522a.map
