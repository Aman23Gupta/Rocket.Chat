function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/webdav/client/actionButton.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var t, getURL;
module.link("../../utils", {
  t: function (v) {
    t = v;
  },
  getURL: function (v) {
    getURL = v;
  }
}, 1);
var WebdavAccounts;
module.link("../../models/client", {
  WebdavAccounts: function (v) {
    WebdavAccounts = v;
  }
}, 2);
var settings;
module.link("../../settings", {
  settings: function (v) {
    settings = v;
  }
}, 3);
var MessageAction, modal;
module.link("../../ui-utils", {
  MessageAction: function (v) {
    MessageAction = v;
  },
  modal: function (v) {
    modal = v;
  }
}, 4);
var messageArgs;
module.link("../../ui-utils/client/lib/messageArgs", {
  messageArgs: function (v) {
    messageArgs = v;
  }
}, 5);
Meteor.startup(function () {
  MessageAction.addButton({
    id: 'webdav-upload',
    icon: 'upload',
    label: t('Save_To_Webdav'),
    condition: function (_ref) {
      var message = _ref.msg,
          subscription = _ref.subscription;

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
    action: function () {
      var _messageArgs = messageArgs(this),
          message = _messageArgs.msg;

      var _message$attachments = _slicedToArray(message.attachments, 1),
          attachment = _message$attachments[0];

      var file = message.file;
      var url = getURL(attachment.title_link, {
        full: true
      });
      modal.open({
        data: {
          message: message,
          attachment: attachment,
          file: file,
          url: url
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
//# sourceMappingURL=/dynamic/app/webdav/client/d6479287f62c6ed4ab6378b91b108eb6ce8a6a0e.map
