function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/webdav/client/selectWebdavAccount.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 1);
let modal;
module.link("../../ui-utils", {
  modal(v) {
    modal = v;
  }

}, 2);
let t;
module.link("../../utils", {
  t(v) {
    t = v;
  }

}, 3);
let WebdavAccounts;
module.link("../../models/client", {
  WebdavAccounts(v) {
    WebdavAccounts = v;
  }

}, 4);
let dispatchToastMessage;
module.link("../../../client/lib/toast", {
  dispatchToastMessage(v) {
    dispatchToastMessage = v;
  }

}, 5);
Template.selectWebdavAccount.helpers({
  webdavAccounts() {
    return WebdavAccounts.find().fetch();
  },

  usernamePlusServer(account) {
    return account.name || "".concat(account.username, "@").concat(account.server_url.replace(/^https?\:\/\//i, ''));
  }

});
Template.selectWebdavAccount.events({
  'click .webdav-account'() {
    modal.close();
    const accountId = this._id;
    const {
      url
    } = Template.instance().data;
    const name = Template.instance().data.attachment.title;
    const fileRequest = new XMLHttpRequest();
    fileRequest.open('GET', url, true);
    fileRequest.responseType = 'arraybuffer';

    fileRequest.onload = function () {
      const arrayBuffer = fileRequest.response;

      if (arrayBuffer) {
        const fileData = new Uint8Array(arrayBuffer);
        Meteor.call('uploadFileToWebdav', accountId, fileData, name, (error, response) => {
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
//# sourceMappingURL=/dynamic/app/webdav/client/aa6d806ef60859c9c7ba4dbf491b7fb1af273573.map
