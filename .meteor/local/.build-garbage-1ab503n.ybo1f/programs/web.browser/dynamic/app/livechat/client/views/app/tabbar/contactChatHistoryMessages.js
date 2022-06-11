function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/contactChatHistoryMessages.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 0);
module.link("./contactChatHistoryMessages.html");
let ReactiveVar;
module.link("meteor/reactive-var", {
  ReactiveVar(v) {
    ReactiveVar = v;
  }

}, 1);

let _;

module.link("underscore", {
  default(v) {
    _ = v;
  }

}, 2);
let messageContext;
module.link("../../../../../ui-utils/client/lib/messageContext", {
  messageContext(v) {
    messageContext = v;
  }

}, 3);
let APIClient;
module.link("../../../../../utils/client", {
  APIClient(v) {
    APIClient = v;
  }

}, 4);
const MESSAGES_LIMIT = 50;
Template.contactChatHistoryMessages.helpers({
  messages() {
    return Template.instance().messages.get();
  },

  messageContext() {
    const result = messageContext.call(this, {
      rid: Template.instance().rid
    });
    return _objectSpread(_objectSpread({}, result), {}, {
      settings: _objectSpread(_objectSpread({}, result.settings), {}, {
        showReplyButton: false,
        showreply: false,
        hideRoles: true
      })
    });
  },

  hasMore() {
    return Template.instance().hasMore.get();
  },

  isLoading() {
    return Template.instance().isLoading.get();
  },

  isSearching() {
    return Template.instance().searchTerm.get().length > 0;
  },

  empty() {
    return Template.instance().messages.get().length === 0;
  },

  hasError() {
    return Template.instance().hasError.get();
  },

  error() {
    return Template.instance().error.get();
  }

});
Template.contactChatHistoryMessages.events({
  'click .js-back'(e, instance) {
    return instance.clear();
  },

  'scroll .js-list': _.throttle(function (e, instance) {
    if (e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight && instance.hasMore.get()) {
      instance.offset.set(instance.offset.get() + instance.limit.get());
    }
  }, 200),
  'keyup #message-search': _.debounce(function (e, instance) {
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
Template.contactChatHistoryMessages.onCreated(function () {
  const currentData = Template.currentData();
  this.rid = currentData.rid;
  this.messages = new ReactiveVar([]);
  this.hasMore = new ReactiveVar(true);
  this.offset = new ReactiveVar(0);
  this.searchTerm = new ReactiveVar('');
  this.isLoading = new ReactiveVar(true);
  this.limit = new ReactiveVar(MESSAGES_LIMIT);
  this.hasError = new ReactiveVar(false);
  this.error = new ReactiveVar(null);

  this.loadMessages = async url => {
    this.isLoading.set(true);
    const offset = this.offset.get();

    try {
      const {
        messages,
        total
      } = await APIClient.v1.get(url);
      this.messages.set(offset === 0 ? messages : this.messages.get().concat(messages));
      this.hasMore.set(total > this.messages.get().length);
    } catch (e) {
      this.hasError.set(true);
      this.error.set(e);
    } finally {
      this.isLoading.set(false);
    }
  };

  this.autorun(() => {
    const limit = this.limit.get();
    const offset = this.offset.get();
    const searchTerm = this.searchTerm.get();

    if (searchTerm !== '') {
      return this.loadMessages("chat.search/?roomId=".concat(this.rid, "&searchText=").concat(searchTerm, "&count=").concat(limit, "&offset=").concat(offset, "&sort={\"ts\": 1}"));
    }

    this.loadMessages("livechat/".concat(this.rid, "/messages?count=").concat(limit, "&offset=").concat(offset, "&sort={\"ts\": 1}"));
  });
  this.autorun(() => {
    if (currentData.clear != null) {
      this.clear = currentData.clear;
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/d1fcce198202c20321feb0c9b496094ea2d2711f.map
