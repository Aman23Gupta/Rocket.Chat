function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/hooks/useRoomList.ts                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
module.export({
  useRoomList: function () {
    return useRoomList;
  }
});
var useDebouncedState;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedState: function (v) {
    useDebouncedState = v;
  }
}, 0);
var useEffect;
module.link("react", {
  useEffect: function (v) {
    useEffect = v;
  }
}, 1);
var useQueuedInquiries, useOmnichannelEnabled;
module.link("../../contexts/OmnichannelContext", {
  useQueuedInquiries: function (v) {
    useQueuedInquiries = v;
  },
  useOmnichannelEnabled: function (v) {
    useOmnichannelEnabled = v;
  }
}, 2);
var useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 3);
var useUserPreference, useUserSubscriptions;
module.link("../../contexts/UserContext", {
  useUserPreference: function (v) {
    useUserPreference = v;
  },
  useUserSubscriptions: function (v) {
    useUserSubscriptions = v;
  }
}, 4);
var useQueryOptions;
module.link("./useQueryOptions", {
  useQueryOptions: function (v) {
    useQueryOptions = v;
  }
}, 5);
var query = {
  open: {
    $ne: false
  }
};
var emptyQueue = [];

var useRoomList = function () {
  var _useDebouncedState = useDebouncedState([], 150),
      _useDebouncedState2 = _slicedToArray(_useDebouncedState, 2),
      roomList = _useDebouncedState2[0],
      setRoomList = _useDebouncedState2[1];

  var showOmnichannel = useOmnichannelEnabled();
  var sidebarGroupByType = useUserPreference('sidebarGroupByType');
  var favoritesEnabled = useUserPreference('sidebarShowFavorites');
  var isDiscussionEnabled = useSetting('Discussion_enabled');
  var sidebarShowUnread = useUserPreference('sidebarShowUnread');
  var options = useQueryOptions();
  var rooms = useUserSubscriptions(query, options);
  var inquiries = useQueuedInquiries();
  var queue = emptyQueue;

  if (inquiries.enabled) {
    queue = inquiries.queue;
  }

  useEffect(function () {
    setRoomList(function () {
      var favorite = new Set();
      var team = new Set();
      var omnichannel = new Set();
      var unread = new Set();
      var channels = new Set();
      var direct = new Set();
      var discussion = new Set();
      var conversation = new Set();
      var onHold = new Set();
      rooms.forEach(function (room) {
        if (sidebarShowUnread && (room.alert || room.unread) && !room.hideUnreadStatus) {
          return unread.add(room);
        }

        if (favoritesEnabled && room.f) {
          return favorite.add(room);
        }

        if (sidebarGroupByType && room.teamMain) {
          return team.add(room);
        }

        if (sidebarGroupByType && isDiscussionEnabled && room.prid) {
          return discussion.add(room);
        }

        if (room.t === 'c' || room.t === 'p') {
          channels.add(room);
        }

        if (room.t === 'l' && room.onHold) {
          return showOmnichannel && onHold.add(room);
        }

        if (room.t === 'l') {
          return showOmnichannel && omnichannel.add(room);
        }

        if (room.t === 'd') {
          direct.add(room);
        }

        conversation.add(room);
      });
      var groups = new Map();
      showOmnichannel && groups.set('Omnichannel', []);
      showOmnichannel && inquiries.enabled && queue.length && groups.set('Incoming_Livechats', queue);
      showOmnichannel && omnichannel.size && groups.set('Open_Livechats', omnichannel);
      showOmnichannel && onHold.size && groups.set('On_Hold_Chats', onHold);
      sidebarShowUnread && unread.size && groups.set('Unread', unread);
      favoritesEnabled && favorite.size && groups.set('Favorites', favorite);
      sidebarGroupByType && team.size && groups.set('Teams', team);
      sidebarGroupByType && isDiscussionEnabled && discussion.size && groups.set('Discussions', discussion);
      sidebarGroupByType && channels.size && groups.set('Channels', channels);
      sidebarGroupByType && direct.size && groups.set('Direct_Messages', direct);
      !sidebarGroupByType && groups.set('Conversations', conversation);
      return _toConsumableArray(groups.entries()).flatMap(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            group = _ref2[1];

        return [key].concat(_toConsumableArray(group));
      });
    });
  }, [rooms, showOmnichannel, inquiries.enabled, queue, sidebarShowUnread, favoritesEnabled, sidebarGroupByType, setRoomList, isDiscussionEnabled]);
  return roomList;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/hooks/f40840338f76897a5b750060c654c093a9707197.map
