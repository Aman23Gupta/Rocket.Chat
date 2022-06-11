function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/lib/Toolbox/defaultActions.ts                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var useMemo, lazy;
module.link("react", {
  useMemo: function (v) {
    useMemo = v;
  },
  lazy: function (v) {
    lazy = v;
  }
}, 0);
var addAction;
module.link(".", {
  addAction: function (v) {
    addAction = v;
  }
}, 1);
var usePermission;
module.link("../../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
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
  template: /*#__PURE__*/lazy(function () {
    return module.dynamicImport('../../MemberListRouter');
  }),
  order: 1
});
addAction('contact-profile', {
  groups: ['live'],
  id: 'contact-profile',
  title: 'Contact_Info',
  icon: 'user',
  template: /*#__PURE__*/lazy(function () {
    return module.dynamicImport('../../../omnichannel/directory/contacts/contextualBar/ContactsContextualBar');
  }),
  order: 1
});
addAction('user-info-group', {
  groups: ['direct_multiple'],
  id: 'user-info-group',
  title: 'Members',
  icon: 'team',
  template: /*#__PURE__*/lazy(function () {
    return module.dynamicImport('../../MemberListRouter');
  }),
  order: 1
});
addAction('members-list', function (_ref) {
  var room = _ref.room;
  var hasPermission = usePermission('view-broadcast-member-list', room._id);
  return useMemo(function () {
    return !room.broadcast || hasPermission ? {
      groups: ['channel', 'group', 'team'],
      id: 'members-list',
      title: room.teamMain ? 'Teams_members' : 'Members',
      icon: 'members',
      template: /*#__PURE__*/lazy(function () {
        return module.dynamicImport('../../MemberListRouter');
      }),
      order: 5
    } : null;
  }, [hasPermission, room.broadcast, room.teamMain]);
});
addAction('uploaded-files-list', {
  groups: ['channel', 'group', 'direct', 'direct_multiple', 'live', 'team'],
  id: 'uploaded-files-list',
  title: 'Files',
  icon: 'clip',
  template: /*#__PURE__*/lazy(function () {
    return module.dynamicImport('../../contextualBar/RoomFiles');
  }),
  order: 7
});
addAction('keyboard-shortcut-list', {
  groups: ['channel', 'group', 'direct', 'direct_multiple', 'team'],
  id: 'keyboard-shortcut-list',
  title: 'Keyboard_Shortcuts_Title',
  icon: 'keyboard',
  template: /*#__PURE__*/lazy(function () {
    return module.dynamicImport('../../contextualBar/KeyboardShortcuts');
  }),
  order: 99
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/lib/Toolbox/9bc53b3c8b58dfe08eefc352f41be492c0cf69a1.map
