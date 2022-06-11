function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/contactChatHistoryMessages.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);
var Template;
module.link("meteor/templating", {
  Template: function (v) {
    Template = v;
  }
}, 0);
module.link("./contactChatHistoryMessages.html");
var ReactiveVar;
module.link("meteor/reactive-var", {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 1);

var _;

module.link("underscore", {
  "default": function (v) {
    _ = v;
  }
}, 2);
var messageContext;
module.link("../../../../../ui-utils/client/lib/messageContext", {
  messageContext: function (v) {
    messageContext = v;
  }
}, 3);
var APIClient;
module.link("../../../../../utils/client", {
  APIClient: function (v) {
    APIClient = v;
  }
}, 4);
var MESSAGES_LIMIT = 50;
Template.contactChatHistoryMessages.helpers({
  messages: function () {
    return Template.instance().messages.get();
  },
  messageContext: function () {
    var result = messageContext.call(this, {
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
  hasMore: function () {
    return Template.instance().hasMore.get();
  },
  isLoading: function () {
    return Template.instance().isLoading.get();
  },
  isSearching: function () {
    return Template.instance().searchTerm.get().length > 0;
  },
  empty: function () {
    return Template.instance().messages.get().length === 0;
  },
  hasError: function () {
    return Template.instance().hasError.get();
  },
  error: function () {
    return Template.instance().error.get();
  }
});
Template.contactChatHistoryMessages.events({
  'click .js-back': function (e, instance) {
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

    var value = e.target.value;

    if (e.keyCode === 40 || e.keyCode === 38) {
      return e.preventDefault();
    }

    instance.offset.set(0);
    instance.searchTerm.set(value);
  }, 300)
});
Template.contactChatHistoryMessages.onCreated(function () {
  var _this = this;

  var currentData = Template.currentData();
  this.rid = currentData.rid;
  this.messages = new ReactiveVar([]);
  this.hasMore = new ReactiveVar(true);
  this.offset = new ReactiveVar(0);
  this.searchTerm = new ReactiveVar('');
  this.isLoading = new ReactiveVar(true);
  this.limit = new ReactiveVar(MESSAGES_LIMIT);
  this.hasError = new ReactiveVar(false);
  this.error = new ReactiveVar(null);

  this.loadMessages = function () {
    function _callee(url) {
      var offset, _await$APIClient$v1$g, messages, total;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.isLoading.set(true);

                offset = _this.offset.get();
                _context.prev = 2;
                _context.next = 5;
                return _regeneratorRuntime.awrap(APIClient.v1.get(url));

              case 5:
                _await$APIClient$v1$g = _context.sent;
                messages = _await$APIClient$v1$g.messages;
                total = _await$APIClient$v1$g.total;

                _this.messages.set(offset === 0 ? messages : _this.messages.get().concat(messages));

                _this.hasMore.set(total > _this.messages.get().length);

                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);

                _this.hasError.set(true);

                _this.error.set(_context.t0);

              case 16:
                _context.prev = 16;

                _this.isLoading.set(false);

                return _context.finish(16);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[2, 12, 16, 19]], Promise);
    }

    return _callee;
  }();

  this.autorun(function () {
    var limit = _this.limit.get();

    var offset = _this.offset.get();

    var searchTerm = _this.searchTerm.get();

    if (searchTerm !== '') {
      return _this.loadMessages("chat.search/?roomId=" + _this.rid + "&searchText=" + searchTerm + "&count=" + limit + "&offset=" + offset + "&sort={\"ts\": 1}");
    }

    _this.loadMessages("livechat/" + _this.rid + "/messages?count=" + limit + "&offset=" + offset + "&sort={\"ts\": 1}");
  });
  this.autorun(function () {
    if (currentData.clear != null) {
      _this.clear = currentData.clear;
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/f254858b93304866f30cdc9d6f5d7d8d0d765e0f.map
