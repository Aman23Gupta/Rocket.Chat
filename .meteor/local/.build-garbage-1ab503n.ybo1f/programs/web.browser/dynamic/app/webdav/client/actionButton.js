function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/webdav/client/actionButton.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let t, getURL;
module.link("../../utils", {
  t(v) {
    t = v;
  },

  getURL(v) {
    getURL = v;
  }

}, 1);
let WebdavAccounts;
module.link("../../models/client", {
  WebdavAccounts(v) {
    WebdavAccounts = v;
  }

}, 2);
let settings;
module.link("../../settings", {
  settings(v) {
    settings = v;
  }

}, 3);
let MessageAction, modal;
module.link("../../ui-utils", {
  MessageAction(v) {
    MessageAction = v;
  },

  modal(v) {
    modal = v;
  }

}, 4);
let messageArgs;
module.link("../../ui-utils/client/lib/messageArgs", {
  messageArgs(v) {
    messageArgs = v;
  }

}, 5);
Meteor.startup(function () {
  MessageAction.addButton({
    id: 'webdav-upload',
    icon: 'upload',
    label: t('Save_To_Webdav'),
    condition: _ref => {
      let {
        msg: message,
        subscription
      } = _ref;

      if (subscription == null) {
        return false;
      }

      if (WebdavAccounts.findOne() == null) {
        return false;
      }

      if (!message.file) {
        return false;
      }

      return settings.get('Webdav_Integration_Enabled');
    },

    action() {
      const {
        msg: message
      } = messageArgs(this);
      const [attachment] = message.attachments;
      const {
        file
      } = message;
      const url = getURL(attachment.title_link, {
        full: true
      });
      modal.open({
        data: {
          message,
          attachment,
          file,
          url
        },
        title: t('Save_To_Webdav'),
        content: 'selectWebdavAccount',
        showCancelButton: true,
        showConfirmButton: false,
        closeOnCancel: true,
        html: true
      });
    },

    order: 100,
    group: 'menu'
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/webdav/client/8c2cc64010b0827ec0e1071f1d6116b4723ea9d0.map
