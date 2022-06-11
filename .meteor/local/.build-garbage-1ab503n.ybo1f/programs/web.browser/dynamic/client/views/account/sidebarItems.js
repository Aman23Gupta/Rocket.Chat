function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/sidebarItems.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  registerAccountSidebarItem: () => registerAccountSidebarItem,
  unregisterSidebarItem: () => unregisterSidebarItem,
  itemsSubscription: () => itemsSubscription
});
let hasPermission;
module.link("../../../app/authorization/client", {
  hasPermission(v) {
    hasPermission = v;
  }

}, 0);
let settings;
module.link("../../../app/settings/client", {
  settings(v) {
    settings = v;
  }

}, 1);
let createSidebarItems;
module.link("../../lib/createSidebarItems", {
  createSidebarItems(v) {
    createSidebarItems = v;
  }

}, 2);
const {
  registerSidebarItem: registerAccountSidebarItem,
  unregisterSidebarItem,
  itemsSubscription
} = createSidebarItems([{
  pathSection: 'account',
  pathGroup: 'preferences',
  i18nLabel: 'Preferences',
  icon: 'customize'
}, {
  pathSection: 'account',
  pathGroup: 'profile',
  i18nLabel: 'Profile',
  icon: 'user',
  permissionGranted: () => settings.get('Accounts_AllowUserProfileChange')
}, {
  pathSection: 'account',
  pathGroup: 'security',
  i18nLabel: 'Security',
  icon: 'lock',
  permissionGranted: () => settings.get('Accounts_TwoFactorAuthentication_Enabled') || settings.get('E2E_Enable')
}, {
  pathSection: 'account',
  pathGroup: 'integrations',
  i18nLabel: 'Integrations',
  icon: 'code',
  permissionGranted: () => settings.get('Webdav_Integration_Enabled')
}, {
  pathSection: 'account',
  pathGroup: 'tokens',
  i18nLabel: 'Personal_Access_Tokens',
  icon: 'key',
  permissionGranted: () => hasPermission('create-personal-access-tokens')
}]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/3d59848242e124cfee603442524d3ee3f9031af5.map
