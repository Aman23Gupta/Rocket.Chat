function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/livechatReadOnly.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["clientAction"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
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
let FlowRouter;
module.link("meteor/kadira:flow-router", {
  FlowRouter(v) {
    FlowRouter = v;
  }

}, 3);
let ChatRoom, CachedChatRoom;
module.link("../../../../models", {
  ChatRoom(v) {
    ChatRoom = v;
  },

  CachedChatRoom(v) {
    CachedChatRoom = v;
  }

}, 4);
let callWithErrorHandling;
module.link("../../../../../client/lib/utils/callWithErrorHandling", {
  callWithErrorHandling(v) {
    callWithErrorHandling = v;
  }

}, 5);
module.link("./livechatReadOnly.html");
let APIClient;
module.link("../../../../utils/client", {
  APIClient(v) {
    APIClient = v;
  }

}, 6);
let inquiryDataStream;
module.link("../../lib/stream/inquiry", {
  inquiryDataStream(v) {
    inquiryDataStream = v;
  }

}, 7);
Template.livechatReadOnly.helpers({
  inquiryOpen() {
    const inquiry = Template.instance().inquiry.get();
    const room = Template.instance().room.get();
    return inquiry && inquiry.status === 'queued' || !room.servedBy;
  },

  roomOpen() {
    const room = Template.instance().room.get();
    return room && room.open === true;
  },

  showPreview() {
    const config = Template.instance().routingConfig.get();
    return config.previewRoom || Template.currentData().onHold;
  },

  isPreparing() {
    return Template.instance().preparing.get();
  },

  isOnHold() {
    return Template.currentData().onHold;
  }

});
Template.livechatReadOnly.events({
  async 'click .js-take-it'(event, instance) {
    event.preventDefault();
    event.stopPropagation();
    const inquiry = instance.inquiry.get();
    const {
      _id
    } = inquiry;
    await callWithErrorHandling('livechat:takeInquiry', _id, {
      clientAction: true
    });
    instance.loadInquiry(inquiry.rid);
  },

  async 'click .js-resume-it'(event, instance) {
    event.preventDefault();
    event.stopPropagation();
    const room = instance.room.get();
    await callWithErrorHandling('livechat:resumeOnHold', room._id, {
      clientAction: true
    });
  }

});
Template.livechatReadOnly.onCreated(function () {
  this.rid = Template.currentData().rid;
  this.room = new ReactiveVar();
  this.inquiry = new ReactiveVar();
  this.routingConfig = new ReactiveVar({});
  this.preparing = new ReactiveVar(true);

  this.updateInquiry = async _ref => {
    let {
      clientAction
    } = _ref,
        inquiry = _objectWithoutProperties(_ref, _excluded);

    if (clientAction === 'removed') {
      // this will force to refresh the room
      // since the client wont get notified of room changes when chats are on queue (no one assigned)
      // a better approach should be performed when refactoring these templates to use react
      ChatRoom.remove(this.rid);
      CachedChatRoom.save();
      return FlowRouter.go('/home');
    }

    this.inquiry.set(inquiry);
  };

  Meteor.call('livechat:getRoutingConfig', (err, config) => {
    if (config) {
      this.routingConfig.set(config);
    }
  });

  this.loadInquiry = async roomId => {
    this.preparing.set(true);
    const {
      inquiry
    } = await APIClient.v1.get("livechat/inquiries.getOne?roomId=".concat(roomId));
    this.inquiry.set(inquiry);

    if (inquiry && inquiry._id) {
      inquiryDataStream.on(inquiry._id, this.updateInquiry);
    }

    this.preparing.set(false);
  };

  this.autorun(() => this.loadInquiry(this.rid));
  this.autorun(() => {
    this.room.set(ChatRoom.findOne({
      _id: Template.currentData().rid
    }, {
      fields: {
        open: 1,
        servedBy: 1
      }
    }));
  });
});
Template.livechatReadOnly.onDestroyed(function () {
  const inquiry = this.inquiry.get();

  if (inquiry && inquiry._id) {
    inquiryDataStream.removeListener(inquiry._id, this.updateInquiry);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/e2c6c15bced4a0aeb2b59498ad684ec2e8eee7c1.map
