function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/contactChatHistory.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Tracker;
module.link("meteor/tracker", {
  Tracker(v) {
    Tracker = v;
  }

}, 0);
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 1);
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 2);
let ReactiveVar;
module.link("meteor/reactive-var", {
  ReactiveVar(v) {
    ReactiveVar = v;
  }

}, 3);
module.link("./contactChatHistory.html");
module.link("./contactChatHistoryItem.html");

let _;

module.link("underscore", {
  default(v) {
    _ = v;
  }

}, 4);
let t, APIClient;
module.link("../../../../../utils/client", {
  t(v) {
    t = v;
  },

  APIClient(v) {
    APIClient = v;
  }

}, 5);
const HISTORY_LIMIT = 50;
Template.contactChatHistory.helpers({
  isReady() {
    return Template.instance().isReady.get();
  },

  hasChatHistory() {
    return Template.instance().history.get().length > 0;
  },

  history() {
    return Template.instance().history.get();
  },

  isLoading() {
    return Template.instance().isLoading.get();
  },

  isSearching() {
    return Template.instance().searchTerm.get().length > 0;
  },

  showChatHistoryMessages() {
    return Template.instance().showChatHistoryMessages.get();
  },

  chatHistoryMessagesContext() {
    return _objectSpread({
      tabBar: Template.instance().tabBar,
      clear: Template.instance().returnChatHistoryList
    }, Template.instance().chatHistoryMessagesContext.get());
  },

  canSearch() {
    return Template.instance().canSearch.get();
  }

});
Template.contactChatHistory.onCreated(async function () {
  const currentData = Template.currentData();
  this.offset = new ReactiveVar(0);
  this.visitorId = new ReactiveVar();
  this.history = new ReactiveVar([]);
  this.searchTerm = new ReactiveVar('');
  this.hasMore = new ReactiveVar(true);
  this.isLoading = new ReactiveVar(true);
  this.chatHistoryMessagesContext = new ReactiveVar();
  this.showChatHistoryMessages = new ReactiveVar(false);
  this.limit = new ReactiveVar(HISTORY_LIMIT);
  this.isReady = new ReactiveVar(false);
  this.canSearch = new ReactiveVar(false);
  this.tabBar = currentData.tabBar;

  this.returnChatHistoryList = () => {
    this.showChatHistoryMessages.set(false);
    this.chatHistoryMessagesContext.set();
  };

  this.autorun(async () => {
    if (!this.visitorId.get() || !currentData || !currentData.rid) {
      return;
    }

    const limit = this.limit.get();
    const offset = this.offset.get();
    const searchTerm = this.searchTerm.get();
    let baseUrl = "livechat/visitors.searchChats/room/".concat(currentData.rid, "/visitor/").concat(this.visitorId.get(), "?count=").concat(limit, "&offset=").concat(offset, "&closedChatsOnly=true&servedChatsOnly=true");

    if (searchTerm) {
      baseUrl += "&searchText=".concat(searchTerm);
    }

    this.isLoading.set(true);
    const {
      history,
      total
    } = await APIClient.v1.get(baseUrl);
    this.history.set(offset === 0 ? history : this.history.get().concat(history));
    this.hasMore.set(total > this.history.get().length);
    this.isLoading.set(false);
  });
  this.autorun(async () => {
    const {
      room
    } = await APIClient.v1.get("rooms.info?roomId=".concat(currentData.rid));

    if (room !== null && room !== void 0 && room.v) {
      this.visitorId.set(room.v._id);
    }
  });
});
Template.contactChatHistory.onRendered(function () {
  Tracker.autorun(computation => {
    if (this.isLoading.get()) {
      return;
    }

    const history = this.history.get();
    this.canSearch.set(history && history.length > 0);
    this.isReady.set(true);
    computation.stop();
  });
});
Template.contactChatHistory.events({
  'scroll .js-list': _.throttle(function (e, instance) {
    if (e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight - 10 && instance.hasMore.get()) {
      instance.offset.set(instance.offset.get() + instance.limit.get());
    }
  }, 200),

  'click .chat-history-item'(event, instance) {
    event.preventDefault();
    event.stopPropagation();
    const {
      _id: rid,
      v: {
        name,
        username
      } = {},
      closedAt
    } = this;
    const closedAtLabel = t('Closed_At');
    const closedDay = moment(closedAt).format('MMM D YYYY');
    instance.chatHistoryMessagesContext.set({
      label: "".concat(name || username, ", ").concat(closedAtLabel, " ").concat(closedDay),
      rid
    });
    instance.showChatHistoryMessages.set(true);
  },

  'keyup #chat-search': _.debounce(function (e, instance) {
    if (e.keyCode === 13) {
      return e.preventDefault();
    }

    const {
      value
    } = e.target;

    if (e.keyCode === 40 || e.keyCode === 38) {
      return e.preventDefault();
    }

    instance.offset.set(0);
    instance.searchTerm.set(value);
  }, 300)
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/456120e6e7f04453d843070d73fe0a74faf8a6b5.map
