function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/contactChatHistoryItem.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 0);
module.link("./contactChatHistoryItem.html");
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 1);
let ReactiveVar;
module.link("meteor/reactive-var", {
  ReactiveVar(v) {
    ReactiveVar = v;
  }

}, 2);
Template.contactChatHistoryItem.helpers({
  closedAt() {
    const {
      closedAt
    } = Template.instance().room.get();
    return moment(closedAt).format('lll');
  },

  closingRoomMessage() {
    const closingObj = Template.instance().closingRoomMessage.get();
    return closingObj.msg;
  },

  i18nMessageCounter() {
    const {
      msgs
    } = this;
    return "<span class='message-counter'>".concat(msgs, "</span>");
  }

});
Template.contactChatHistoryItem.onCreated(function () {
  this.room = new ReactiveVar();
  this.autorun(async () => {
    const currentData = Template.currentData();
    this.room.set(currentData);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/6dc8d605e2c3a1d54bb31a65feded66909485058.map
