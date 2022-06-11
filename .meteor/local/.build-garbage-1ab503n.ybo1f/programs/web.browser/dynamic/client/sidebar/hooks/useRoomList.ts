function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/hooks/useRoomList.ts                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useRoomList: () => useRoomList
});
let useDebouncedState;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedState(v) {
    useDebouncedState = v;
  }

}, 0);
let useEffect;
module.link("react", {
  useEffect(v) {
    useEffect = v;
  }

}, 1);
let useQueuedInquiries, useOmnichannelEnabled;
module.link("../../contexts/OmnichannelContext", {
  useQueuedInquiries(v) {
    useQueuedInquiries = v;
  },

  useOmnichannelEnabled(v) {
    useOmnichannelEnabled = v;
  }

}, 2);
let useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 3);
let useUserPreference, useUserSubscriptions;
module.link("../../contexts/UserContext", {
  useUserPreference(v) {
    useUserPreference = v;
  },

  useUserSubscriptions(v) {
    useUserSubscriptions = v;
  }

}, 4);
let useQueryOptions;
module.link("./useQueryOptions", {
  useQueryOptions(v) {
    useQueryOptions = v;
  }

}, 5);
const query = {
  open: {
    $ne: false
  }
};
const emptyQueue = [];

const useRoomList = () => {
  const [roomList, setRoomList] = useDebouncedState([], 150);
  const showOmnichannel = useOmnichannelEnabled();
  const sidebarGroupByType = useUserPreference('sidebarGroupByType');
  const favoritesEnabled = useUserPreference('sidebarShowFavorites');
  const isDiscussionEnabled = useSetting('Discussion_enabled');
  const sidebarShowUnread = useUserPreference('sidebarShowUnread');
  const options = useQueryOptions();
  const rooms = useUserSubscriptions(query, options);
  const inquiries = useQueuedInquiries();
  let queue = emptyQueue;

  if (inquiries.enabled) {
    queue = inquiries.queue;
  }

  useEffect(() => {
    setRoomList(() => {
      const favorite = new Set();
      const team = new Set();
      const omnichannel = new Set();
      const unread = new Set();
      const channels = new Set();
      const direct = new Set();
      const discussion = new Set();
      const conversation = new Set();
      const onHold = new Set();
      rooms.forEach(room => {
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
      const groups = new Map();
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
      return [...groups.entries()].flatMap(_ref => {
        let [key, group] = _ref;
        return [key, ...group];
      });
    });
  }, [rooms, showOmnichannel, inquiries.enabled, queue, sidebarShowUnread, favoritesEnabled, sidebarGroupByType, setRoomList, isDiscussionEnabled]);
  return roomList;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/hooks/886f5a351b6b3a13e4304bcc9e6c53ea74f18184.map
