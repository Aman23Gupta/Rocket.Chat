function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/sidebarItems.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  registerAccountSidebarItem: function () {
    return registerAccountSidebarItem;
  },
  unregisterSidebarItem: function () {
    return unregisterSidebarItem;
  },
  itemsSubscription: function () {
    return itemsSubscription;
  }
});
var hasPermission;
module.link("../../../app/authorization/client", {
  hasPermission: function (v) {
    hasPermission = v;
  }
}, 0);
var settings;
module.link("../../../app/settings/client", {
  settings: function (v) {
    settings = v;
  }
}, 1);
var createSidebarItems;
module.link("../../lib/createSidebarItems", {
  createSidebarItems: function (v) {
    createSidebarItems = v;
  }
}, 2);

var _createSidebarItems = createSidebarItems([{
  pathSection: 'account',
  pathGroup: 'preferences',
  i18nLabel: 'Preferences',
  icon: 'customize'
}, {
  pathSection: 'account',
  pathGroup: 'profile',
  i18nLabel: 'Profile',
  icon: 'user',
  permissionGranted: function () {
    return settings.get('Accounts_AllowUserProfileChange');
  }
}, {
  pathSection: 'account',
  pathGroup: 'security',
  i18nLabel: 'Security',
  icon: 'lock',
  permissionGranted: function () {
    return settings.get('Accounts_TwoFactorAuthentication_Enabled') || settings.get('E2E_Enable');
  }
}, {
  pathSection: 'account',
  pathGroup: 'integrations',
  i18nLabel: 'Integrations',
  icon: 'code',
  permissionGranted: function () {
    return settings.get('Webdav_Integration_Enabled');
  }
}, {
  pathSection: 'account',
  pathGroup: 'tokens',
  i18nLabel: 'Personal_Access_Tokens',
  icon: 'key',
  permissionGranted: function () {
    return hasPermission('create-personal-access-tokens');
  }
}]),
    registerAccountSidebarItem = _createSidebarItems.registerSidebarItem,
    unregisterSidebarItem = _createSidebarItems.unregisterSidebarItem,
    itemsSubscription = _createSidebarItems.itemsSubscription;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/e0c95946d675439f694bb20ab0f328df867c72e3.map
