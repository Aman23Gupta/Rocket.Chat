function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/livechatRoomTagSelector.js                                                            //
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
var ReactiveVar;
module.link("meteor/reactive-var", {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 2);
module.link("./livechatRoomTagSelector.html");
Template.livechatRoomTagSelector.helpers({
  availableTags: function () {
    return Template.instance().availableTags.get();
  },
  hasAvailableTags: function () {
    var tags = Template.instance().availableTags.get();
    return tags && tags.length > 0;
  }
});
Template.livechatRoomTagSelector.onCreated(function () {
  var _this = this;

  this.availableTags = new ReactiveVar([]);
  Meteor.call('livechat:getTagsList', function (err, tagsList) {
    _this.availableTags.set(tagsList);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/4e79fff43e7af1b4a9e932852c3a382ad22d0447.map
