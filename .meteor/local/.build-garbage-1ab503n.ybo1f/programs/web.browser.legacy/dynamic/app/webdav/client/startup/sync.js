function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/webdav/client/startup/sync.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Tracker;
module.link("meteor/tracker", {
  Tracker: function (v) {
    Tracker = v;
  }
}, 1);
var APIClient;
module.link("../../../utils/client", {
  APIClient: function (v) {
    APIClient = v;
  }
}, 2);
var WebdavAccounts;
module.link("../../../models/client", {
  WebdavAccounts: function (v) {
    WebdavAccounts = v;
  }
}, 3);
var Notifications;
module.link("../../../notifications/client", {
  Notifications: function (v) {
    Notifications = v;
  }
}, 4);
var events = {
  changed: function (account) {
    return WebdavAccounts.upsert({
      _id: account._id
    }, account);
  },
  removed: function (_ref) {
    var _id = _ref._id;
    return WebdavAccounts.remove({
      _id: _id
    });
  }
};
Tracker.autorun(function () {
  function _callee() {
    var _await$APIClient$v1$g, accounts;

    return _regeneratorRuntime.async(function () {
      function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (Meteor.userId()) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.next = 4;
              return _regeneratorRuntime.awrap(APIClient.v1.get('webdav.getMyAccounts'));

            case 4:
              _await$APIClient$v1$g = _context.sent;
              accounts = _await$APIClient$v1$g.accounts;
              accounts.forEach(function (account) {
                return WebdavAccounts.insert(account);
              });
              Notifications.onUser('webdav', function (_ref2) {
                var type = _ref2.type,
                    account = _ref2.account;
                return events[type](account);
              });

            case 8:
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/webdav/client/startup/eb75c94332121886c15a499b9dc1de653bccd05f.map
