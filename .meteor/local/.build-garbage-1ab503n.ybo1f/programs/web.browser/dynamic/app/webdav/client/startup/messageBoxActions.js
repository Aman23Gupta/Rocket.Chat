function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/webdav/client/startup/messageBoxActions.js                                                                      //
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
let t;
module.link("../../../utils", {
  t(v) {
    t = v;
  }

}, 2);
let settings;
module.link("../../../settings", {
  settings(v) {
    settings = v;
  }

}, 3);
let messageBox, modal;
module.link("../../../ui-utils", {
  messageBox(v) {
    messageBox = v;
  },

  modal(v) {
    modal = v;
  }

}, 4);
let WebdavAccounts;
module.link("../../../models/client", {
  WebdavAccounts(v) {
    WebdavAccounts = v;
  }

}, 5);
let imperativeModal;
module.link("../../../../client/lib/imperativeModal", {
  imperativeModal(v) {
    imperativeModal = v;
  }

}, 6);
let AddWebdavAccountModal;
module.link("../../../../client/views/room/webdav/AddWebdavAccountModal", {
  default(v) {
    AddWebdavAccountModal = v;
  }

}, 7);
messageBox.actions.add('WebDAV', 'Add Server', {
  id: 'add-webdav',
  icon: 'plus',
  condition: () => settings.get('Webdav_Integration_Enabled'),

  action() {
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
  Tracker.autorun(() => {
    const accounts = WebdavAccounts.find();

    if (accounts.count() === 0) {
      return messageBox.actions.remove('WebDAV', /webdav-upload-/gi);
    }

    accounts.forEach(account => {
      const name = account.name || "".concat(account.username, "@").concat(account.serverURL.replace(/^https?\:\/\//i, ''));
      const title = t('Upload_From', {
        name
      });
      messageBox.actions.add('WebDAV', name, {
        id: "webdav-upload-".concat(account._id.toLowerCase()),
        icon: 'cloud-plus',
        condition: () => settings.get('Webdav_Integration_Enabled'),

        action() {
          modal.open({
            data: {
              name,
              accountId: account._id
            },
            title,
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
//# sourceMappingURL=/dynamic/app/webdav/client/startup/824bbf3be9192ec7eed04036465ec061da980537.map
