function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/contactChatHistory.js                                                          //
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
var Tracker;
module.link("meteor/tracker", {
  Tracker: function (v) {
    Tracker = v;
  }
}, 0);
var Template;
module.link("meteor/templating", {
  Template: function (v) {
    Template = v;
  }
}, 1);
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 2);
var ReactiveVar;
module.link("meteor/reactive-var", {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 3);
module.link("./contactChatHistory.html");
module.link("./contactChatHistoryItem.html");

var _;

module.link("underscore", {
  "default": function (v) {
    _ = v;
  }
}, 4);
var t, APIClient;
module.link("../../../../../utils/client", {
  t: function (v) {
    t = v;
  },
  APIClient: function (v) {
    APIClient = v;
  }
}, 5);
var HISTORY_LIMIT = 50;
Template.contactChatHistory.helpers({
  isReady: function () {
    return Template.instance().isReady.get();
  },
  hasChatHistory: function () {
    return Template.instance().history.get().length > 0;
  },
  history: function () {
    return Template.instance().history.get();
  },
  isLoading: function () {
    return Template.instance().isLoading.get();
  },
  isSearching: function () {
    return Template.instance().searchTerm.get().length > 0;
  },
  showChatHistoryMessages: function () {
    return Template.instance().showChatHistoryMessages.get();
  },
  chatHistoryMessagesContext: function () {
    return _objectSpread({
      tabBar: Template.instance().tabBar,
      clear: Template.instance().returnChatHistoryList
    }, Template.instance().chatHistoryMessagesContext.get());
  },
  canSearch: function () {
    return Template.instance().canSearch.get();
  }
});
Template.contactChatHistory.onCreated(function () {
  function _callee3() {
    var _this = this;

    var currentData;
    return _regeneratorRuntime.async(function () {
      function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              currentData = Template.currentData();
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

              this.returnChatHistoryList = function () {
                _this.showChatHistoryMessages.set(false);

                _this.chatHistoryMessagesContext.set();
              };

              this.autorun(function () {
                function _callee() {
                  var limit, offset, searchTerm, baseUrl, _await$APIClient$v1$g, history, total;

                  return _regeneratorRuntime.async(function () {
                    function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (!(!_this.visitorId.get() || !currentData || !currentData.rid)) {
                              _context.next = 2;
                              break;
                            }

                            return _context.abrupt("return");

                          case 2:
                            limit = _this.limit.get();
                            offset = _this.offset.get();
                            searchTerm = _this.searchTerm.get();
                            baseUrl = "livechat/visitors.searchChats/room/" + currentData.rid + "/visitor/" + _this.visitorId.get() + "?count=" + limit + "&offset=" + offset + "&closedChatsOnly=true&servedChatsOnly=true";

                            if (searchTerm) {
                              baseUrl += "&searchText=" + searchTerm;
                            }

                            _this.isLoading.set(true);

                            _context.next = 10;
                            return _regeneratorRuntime.awrap(APIClient.v1.get(baseUrl));

                          case 10:
                            _await$APIClient$v1$g = _context.sent;
                            history = _await$APIClient$v1$g.history;
                            total = _await$APIClient$v1$g.total;

                            _this.history.set(offset === 0 ? history : _this.history.get().concat(history));

                            _this.hasMore.set(total > _this.history.get().length);

                            _this.isLoading.set(false);

                          case 16:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }

                    return _callee$;
                  }(), null, null, null, Promise);
                }

                return _callee;
              }());
              this.autorun(function () {
                function _callee2() {
                  var _await$APIClient$v1$g2, room;

                  return _regeneratorRuntime.async(function () {
                    function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return _regeneratorRuntime.awrap(APIClient.v1.get("rooms.info?roomId=" + currentData.rid));

                          case 2:
                            _await$APIClient$v1$g2 = _context2.sent;
                            room = _await$APIClient$v1$g2.room;

                            if (room !== null && room !== void 0 && room.v) {
                              _this.visitorId.set(room.v._id);
                            }

                          case 5:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }

                    return _callee2$;
                  }(), null, null, null, Promise);
                }

                return _callee2;
              }());

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }

      return _callee3$;
    }(), null, this, null, Promise);
  }

  return _callee3;
}());
Template.contactChatHistory.onRendered(function () {
  var _this2 = this;

  Tracker.autorun(function (computation) {
    if (_this2.isLoading.get()) {
      return;
    }

    var history = _this2.history.get();

    _this2.canSearch.set(history && history.length > 0);

    _this2.isReady.set(true);

    computation.stop();
  });
});
Template.contactChatHistory.events({
  'scroll .js-list': _.throttle(function (e, instance) {
    if (e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight - 10 && instance.hasMore.get()) {
      instance.offset.set(instance.offset.get() + instance.limit.get());
    }
  }, 200),
  'click .chat-history-item': function (event, instance) {
    event.preventDefault();
    event.stopPropagation();
    var rid = this._id,
        _this$v = this.v;
    _this$v = _this$v === void 0 ? {} : _this$v;
    var name = _this$v.name,
        username = _this$v.username,
        closedAt = this.closedAt;
    var closedAtLabel = t('Closed_At');
    var closedDay = moment(closedAt).format('MMM D YYYY');
    instance.chatHistoryMessagesContext.set({
      label: (name || username) + ", " + closedAtLabel + " " + closedDay,
      rid: rid
    });
    instance.showChatHistoryMessages.set(true);
  },
  'keyup #chat-search': _.debounce(function (e, instance) {
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/2637582a2a964062f33ed9441e8dbc047b97ab13.map
