function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/webdav/client/selectWebdavAccount.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Template;
module.link("meteor/templating", {
  Template: function (v) {
    Template = v;
  }
}, 1);
var modal;
module.link("../../ui-utils", {
  modal: function (v) {
    modal = v;
  }
}, 2);
var t;
module.link("../../utils", {
  t: function (v) {
    t = v;
  }
}, 3);
var WebdavAccounts;
module.link("../../models/client", {
  WebdavAccounts: function (v) {
    WebdavAccounts = v;
  }
}, 4);
var dispatchToastMessage;
module.link("../../../client/lib/toast", {
  dispatchToastMessage: function (v) {
    dispatchToastMessage = v;
  }
}, 5);
Template.selectWebdavAccount.helpers({
  webdavAccounts: function () {
    return WebdavAccounts.find().fetch();
  },
  usernamePlusServer: function (account) {
    return account.name || account.username + "@" + account.server_url.replace(/^https?\:\/\//i, '');
  }
});
Template.selectWebdavAccount.events({
  'click .webdav-account': function () {
    modal.close();
    var accountId = this._id;
    var url = Template.instance().data.url;
    var name = Template.instance().data.attachment.title;
    var fileRequest = new XMLHttpRequest();
    fileRequest.open('GET', url, true);
    fileRequest.responseType = 'arraybuffer';

    fileRequest.onload = function () {
      var arrayBuffer = fileRequest.response;

      if (arrayBuffer) {
        var fileData = new Uint8Array(arrayBuffer);
        Meteor.call('uploadFileToWebdav', accountId, fileData, name, function (error, response) {
          if (error) {
            return dispatchToastMessage({
              type: 'error',
              message: t(error.error)
            });
          }

          if (!response.success) {
            return dispatchToastMessage({
              type: 'error',
              message: t(response.message)
            });
          }

          return dispatchToastMessage({
            type: 'success',
            message: t('File_uploaded')
          });
        });
      }
    };

    fileRequest.send(null);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/webdav/client/51c29ac4275316448c5fa1f465a6317b6620fda4.map
