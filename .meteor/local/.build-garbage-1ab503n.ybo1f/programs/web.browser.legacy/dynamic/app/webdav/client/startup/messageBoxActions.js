function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/webdav/client/startup/messageBoxActions.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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
var t;
module.link("../../../utils", {
  t: function (v) {
    t = v;
  }
}, 2);
var settings;
module.link("../../../settings", {
  settings: function (v) {
    settings = v;
  }
}, 3);
var messageBox, modal;
module.link("../../../ui-utils", {
  messageBox: function (v) {
    messageBox = v;
  },
  modal: function (v) {
    modal = v;
  }
}, 4);
var WebdavAccounts;
module.link("../../../models/client", {
  WebdavAccounts: function (v) {
    WebdavAccounts = v;
  }
}, 5);
var imperativeModal;
module.link("../../../../client/lib/imperativeModal", {
  imperativeModal: function (v) {
    imperativeModal = v;
  }
}, 6);
var AddWebdavAccountModal;
module.link("../../../../client/views/room/webdav/AddWebdavAccountModal", {
  "default": function (v) {
    AddWebdavAccountModal = v;
  }
}, 7);
messageBox.actions.add('WebDAV', 'Add Server', {
  id: 'add-webdav',
  icon: 'plus',
  condition: function () {
    return settings.get('Webdav_Integration_Enabled');
  },
  action: function () {
    imperativeModal.open({
      component: AddWebdavAccountModal,
      props: {
        onClose: imperativeModal.close,
        onConfirm: imperativeModal.close
      }
    });
  }
});
Meteor.startup(function () {
  Tracker.autorun(function () {
    var accounts = WebdavAccounts.find();

    if (accounts.count() === 0) {
      return messageBox.actions.remove('WebDAV', /webdav-upload-/gi);
    }

    accounts.forEach(function (account) {
      var name = account.name || account.username + "@" + account.serverURL.replace(/^https?\:\/\//i, '');
      var title = t('Upload_From', {
        name: name
      });
      messageBox.actions.add('WebDAV', name, {
        id: "webdav-upload-" + account._id.toLowerCase(),
        icon: 'cloud-plus',
        condition: function () {
          return settings.get('Webdav_Integration_Enabled');
        },
        action: function () {
          modal.open({
            data: {
              name: name,
              accountId: account._id
            },
            title: title,
            modifier: 'modal',
            content: 'webdavFilePicker',
            showCancelButton: false,
            showFooter: false,
            showConfirmButton: false,
            closeOnCancel: true,
            html: true,
            confirmOnEnter: false
          });
        }
      });
    });
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/webdav/client/startup/961864cdf04c559a3650492bd22b852c2237a5cb.map
