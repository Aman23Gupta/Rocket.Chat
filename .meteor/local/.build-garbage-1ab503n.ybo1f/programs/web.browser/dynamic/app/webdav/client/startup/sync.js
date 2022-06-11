function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/webdav/client/startup/sync.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Tracker;
module.link("meteor/tracker", {
  Tracker(v) {
    Tracker = v;
  }

}, 1);
let APIClient;
module.link("../../../utils/client", {
  APIClient(v) {
    APIClient = v;
  }

}, 2);
let WebdavAccounts;
module.link("../../../models/client", {
  WebdavAccounts(v) {
    WebdavAccounts = v;
  }

}, 3);
let Notifications;
module.link("../../../notifications/client", {
  Notifications(v) {
    Notifications = v;
  }

}, 4);
const events = {
  changed: account => WebdavAccounts.upsert({
    _id: account._id
  }, account),
  removed: _ref => {
    let {
      _id
    } = _ref;
    return WebdavAccounts.remove({
      _id
    });
  }
};
Tracker.autorun(async () => {
  if (!Meteor.userId()) {
    return;
  }

  const {
    accounts
  } = await APIClient.v1.get('webdav.getMyAccounts');
  accounts.forEach(account => WebdavAccounts.insert(account));
  Notifications.onUser('webdav', _ref2 => {
    let {
      type,
      account
    } = _ref2;
    return events[type](account);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/webdav/client/startup/540daeab582423c58ef52a0ed6165e71056a843e.map
