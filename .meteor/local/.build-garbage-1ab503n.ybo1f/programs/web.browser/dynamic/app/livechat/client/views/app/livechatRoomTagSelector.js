function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/livechatRoomTagSelector.js                                                            //
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
let ReactiveVar;
module.link("meteor/reactive-var", {
  ReactiveVar(v) {
    ReactiveVar = v;
  }

}, 2);
module.link("./livechatRoomTagSelector.html");
Template.livechatRoomTagSelector.helpers({
  availableTags() {
    return Template.instance().availableTags.get();
  },

  hasAvailableTags() {
    const tags = Template.instance().availableTags.get();
    return tags && tags.length > 0;
  }

});
Template.livechatRoomTagSelector.onCreated(function () {
  this.availableTags = new ReactiveVar([]);
  Meteor.call('livechat:getTagsList', (err, tagsList) => {
    this.availableTags.set(tagsList);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/64f816dfade89a2e4bdcc40ee3af1111f309aadc.map
