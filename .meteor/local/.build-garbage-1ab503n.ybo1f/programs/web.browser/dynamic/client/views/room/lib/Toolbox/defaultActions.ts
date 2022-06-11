function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/lib/Toolbox/defaultActions.ts                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let useMemo, lazy;
module.link("react", {
  useMemo(v) {
    useMemo = v;
  },

  lazy(v) {
    lazy = v;
  }

}, 0);
let addAction;
module.link(".", {
  addAction(v) {
    addAction = v;
  }

}, 1);
let usePermission;
module.link("../../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 2);
addAction('rocket-search', {
  groups: ['channel', 'group', 'direct', 'direct_multiple', 'live', 'team'],
  id: 'rocket-search',
  title: 'Search_Messages',
  icon: 'magnifier',
  template: 'RocketSearch',
  order: 6
});
addAction('user-info', {
  groups: ['direct'],
  id: 'user-info',
  title: 'User_Info',
  icon: 'user',
  template: /*#__PURE__*/lazy(() => module.dynamicImport('../../MemberListRouter')),
  order: 1
});
addAction('contact-profile', {
  groups: ['live'],
  id: 'contact-profile',
  title: 'Contact_Info',
  icon: 'user',
  template: /*#__PURE__*/lazy(() => module.dynamicImport('../../../omnichannel/directory/contacts/contextualBar/ContactsContextualBar')),
  order: 1
});
addAction('user-info-group', {
  groups: ['direct_multiple'],
  id: 'user-info-group',
  title: 'Members',
  icon: 'team',
  template: /*#__PURE__*/lazy(() => module.dynamicImport('../../MemberListRouter')),
  order: 1
});
addAction('members-list', _ref => {
  let {
    room
  } = _ref;
  const hasPermission = usePermission('view-broadcast-member-list', room._id);
  return useMemo(() => !room.broadcast || hasPermission ? {
    groups: ['channel', 'group', 'team'],
    id: 'members-list',
    title: room.teamMain ? 'Teams_members' : 'Members',
    icon: 'members',
    template: /*#__PURE__*/lazy(() => module.dynamicImport('../../MemberListRouter')),
    order: 5
  } : null, [hasPermission, room.broadcast, room.teamMain]);
});
addAction('uploaded-files-list', {
  groups: ['channel', 'group', 'direct', 'direct_multiple', 'live', 'team'],
  id: 'uploaded-files-list',
  title: 'Files',
  icon: 'clip',
  template: /*#__PURE__*/lazy(() => module.dynamicImport('../../contextualBar/RoomFiles')),
  order: 7
});
addAction('keyboard-shortcut-list', {
  groups: ['channel', 'group', 'direct', 'direct_multiple', 'team'],
  id: 'keyboard-shortcut-list',
  title: 'Keyboard_Shortcuts_Title',
  icon: 'keyboard',
  template: /*#__PURE__*/lazy(() => module.dynamicImport('../../contextualBar/KeyboardShortcuts')),
  order: 99
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/lib/Toolbox/08d0cac529bb5a00b3d58c915795aa01d86621b2.map
