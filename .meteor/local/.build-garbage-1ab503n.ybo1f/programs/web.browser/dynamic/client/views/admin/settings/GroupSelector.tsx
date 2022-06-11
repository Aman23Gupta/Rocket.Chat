function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/GroupSelector.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useSettingStructure;
module.link("../../../contexts/SettingsContext", {
  useSettingStructure(v) {
    useSettingStructure = v;
  }

}, 1);
let GroupPage;
module.link("./GroupPage", {
  default(v) {
    GroupPage = v;
  }

}, 2);
let AssetsGroupPage;
module.link("./groups/AssetsGroupPage", {
  default(v) {
    AssetsGroupPage = v;
  }

}, 3);
let LDAPGroupPage;
module.link("./groups/LDAPGroupPage", {
  default(v) {
    LDAPGroupPage = v;
  }

}, 4);
let OAuthGroupPage;
module.link("./groups/OAuthGroupPage", {
  default(v) {
    OAuthGroupPage = v;
  }

}, 5);
let TabbedGroupPage;
module.link("./groups/TabbedGroupPage", {
  default(v) {
    TabbedGroupPage = v;
  }

}, 6);

const GroupSelector = _ref => {
  let {
    groupId
  } = _ref;
  const group = useSettingStructure(groupId);

  if (!group) {
    return /*#__PURE__*/React.createElement(GroupPage.Skeleton, null);
  }

  if (groupId === 'Assets') {
    return /*#__PURE__*/React.createElement(AssetsGroupPage, group);
  }

  if (groupId === 'OAuth') {
    return /*#__PURE__*/React.createElement(OAuthGroupPage, group);
  }

  if (groupId === 'LDAP') {
    return /*#__PURE__*/React.createElement(LDAPGroupPage, group);
  }

  return /*#__PURE__*/React.createElement(TabbedGroupPage, group);
};

module.exportDefault(GroupSelector);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/0d8082f6c81c35f74c6e98eb8201831d15ff1cd7.map
