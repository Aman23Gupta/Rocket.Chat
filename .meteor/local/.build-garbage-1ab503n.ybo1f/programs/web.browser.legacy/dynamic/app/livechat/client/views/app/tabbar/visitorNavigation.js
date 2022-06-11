function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/visitorNavigation.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
var ReactiveVar;
module.link("meteor/reactive-var", {
  ReactiveVar: function (v) {
    ReactiveVar = v;
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

var _;

module.link("underscore", {
  "default": function (v) {
    _ = v;
  }
}, 3);
var ChatRoom;
module.link("../../../../../models", {
  ChatRoom: function (v) {
    ChatRoom = v;
  }
}, 4);
var t;
module.link("../../../../../utils", {
  t: function (v) {
    t = v;
  }
}, 5);
module.link("./visitorNavigation.html");
var APIClient;
module.link("../../../../../utils/client", {
  APIClient: function (v) {
    APIClient = v;
  }
}, 6);
var ITEMS_COUNT = 50;
Template.visitorNavigation.helpers({
  loadingNavigation: function () {
    return Template.instance().isLoading.get();
  },
  pages: function () {
    var room = ChatRoom.findOne({
      _id: this.rid
    }, {
      fields: {
        'v.token': 1
      }
    });

    if (room) {
      return Template.instance().pages.get();
    }
  },
  onTableScroll: function () {
    var instance = Template.instance();
    return function (currentTarget) {
      if (currentTarget.offsetHeight + currentTarget.scrollTop >= currentTarget.scrollHeight - 100) {
        return instance.limit.set(instance.limit.get() + 50);
      }
    };
  },
  pageTitle: function () {
    return this.navigation.page.title || t('Empty_title');
  },
  accessDateTime: function () {
    return moment(this.ts).format('L LTS');
  }
});
Template.visitorNavigation.events({
  'scroll .visitor-scroll': _.throttle(function (e, instance) {
    if (e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight) {
      var pages = instance.pages.get();

      if (instance.total.get() <= pages.length) {
        return;
      }

      return instance.offset.set(instance.offset.get() + ITEMS_COUNT);
    }
  }, 200)
});
Template.visitorNavigation.onCreated(function () {
  function _callee2() {
    var _this = this;

    var currentData;
    return _regeneratorRuntime.async(function () {
      function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              currentData = Template.currentData();
              this.isLoading = new ReactiveVar(true);
              this.pages = new ReactiveVar([]);
              this.offset = new ReactiveVar(0);
              this.ready = new ReactiveVar(true);
              this.total = new ReactiveVar(0);
              this.autorun(function () {
                function _callee() {
                  var offset, _await$APIClient$v1$g, pages, total;

                  return _regeneratorRuntime.async(function () {
                    function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _this.isLoading.set(true);

                            offset = _this.offset.get();

                            if (!(currentData && currentData.rid)) {
                              _context.next = 11;
                              break;
                            }

                            _context.next = 5;
                            return _regeneratorRuntime.awrap(APIClient.v1.get("livechat/visitors.pagesVisited/" + currentData.rid + "?count=" + ITEMS_COUNT + "&offset=" + offset));

                          case 5:
                            _await$APIClient$v1$g = _context.sent;
                            pages = _await$APIClient$v1$g.pages;
                            total = _await$APIClient$v1$g.total;

                            _this.isLoading.set(false);

                            _this.total.set(total);

                            _this.pages.set(_this.pages.get().concat(pages));

                          case 11:
                            _this.isLoading.set(false);

                          case 12:
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

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }

      return _callee2$;
    }(), null, this, null, Promise);
  }

  return _callee2;
}());
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/88e025678388592c79b3b9e0d6d0a2e598931f12.map
