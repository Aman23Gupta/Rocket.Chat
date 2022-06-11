function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/GroupSelector.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var useSettingStructure;
module.link("../../../contexts/SettingsContext", {
  useSettingStructure: function (v) {
    useSettingStructure = v;
  }
}, 1);
var GroupPage;
module.link("./GroupPage", {
  "default": function (v) {
    GroupPage = v;
  }
}, 2);
var AssetsGroupPage;
module.link("./groups/AssetsGroupPage", {
  "default": function (v) {
    AssetsGroupPage = v;
  }
}, 3);
var LDAPGroupPage;
module.link("./groups/LDAPGroupPage", {
  "default": function (v) {
    LDAPGroupPage = v;
  }
}, 4);
var OAuthGroupPage;
module.link("./groups/OAuthGroupPage", {
  "default": function (v) {
    OAuthGroupPage = v;
  }
}, 5);
var TabbedGroupPage;
module.link("./groups/TabbedGroupPage", {
  "default": function (v) {
    TabbedGroupPage = v;
  }
}, 6);

var GroupSelector = function (_ref) {
  var groupId = _ref.groupId;
  var group = useSettingStructure(groupId);

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
//# sourceMappingURL=/dynamic/client/views/admin/settings/1cccf48c255e16d3b4819a7e3bbceb47206e504f.map
