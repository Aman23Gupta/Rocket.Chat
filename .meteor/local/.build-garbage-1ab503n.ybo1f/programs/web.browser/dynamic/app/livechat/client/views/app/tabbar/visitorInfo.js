function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/visitorInfo.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let TAPi18n;
module.link("meteor/rocketchat:tap-i18n", {
  TAPi18n(v) {
    TAPi18n = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
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
let Session;
module.link("meteor/session", {
  Session(v) {
    Session = v;
  }

}, 4);
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 5);

let _;

module.link("underscore", {
  default(v) {
    _ = v;
  }

}, 6);
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 7);
let UAParser;
module.link("ua-parser-js", {
  default(v) {
    UAParser = v;
  }

}, 8);
let modal;
module.link("../../../../../ui-utils", {
  modal(v) {
    modal = v;
  }

}, 9);
let Subscriptions;
module.link("../../../../../models", {
  Subscriptions(v) {
    Subscriptions = v;
  }

}, 10);
let settings;
module.link("../../../../../settings", {
  settings(v) {
    settings = v;
  }

}, 11);
let t, roomTypes;
module.link("../../../../../utils", {
  t(v) {
    t = v;
  },

  roomTypes(v) {
    roomTypes = v;
  }

}, 12);
let hasRole, hasPermission, hasAtLeastOnePermission;
module.link("../../../../../authorization", {
  hasRole(v) {
    hasRole = v;
  },

  hasPermission(v) {
    hasPermission = v;
  },

  hasAtLeastOnePermission(v) {
    hasAtLeastOnePermission = v;
  }

}, 13);
module.link("./visitorInfo.html");
let APIClient;
module.link("../../../../../utils/client", {
  APIClient(v) {
    APIClient = v;
  }

}, 14);
let RoomManager;
module.link("../../../../../ui-utils/client", {
  RoomManager(v) {
    RoomManager = v;
  }

}, 15);
let getCustomFormTemplate;
module.link("../customTemplates/register", {
  getCustomFormTemplate(v) {
    getCustomFormTemplate = v;
  }

}, 16);
let Markdown;
module.link("../../../../../markdown/client", {
  Markdown(v) {
    Markdown = v;
  }

}, 17);
let handleError;
module.link("../../../../../../client/lib/utils/handleError", {
  handleError(v) {
    handleError = v;
  }

}, 18);
let formatDateAndTime;
module.link("../../../../../../client/lib/utils/formatDateAndTime", {
  formatDateAndTime(v) {
    formatDateAndTime = v;
  }

}, 19);

const isSubscribedToRoom = () => {
  const data = Template.currentData();

  if (!data || !data.rid) {
    return false;
  }

  const subscription = Subscriptions.findOne({
    rid: data.rid
  });
  return subscription !== undefined;
};

const closingDialogRequired = department => {
  if (settings.get('Livechat_request_comment_when_closing_conversation')) {
    return true;
  }

  return department && department.requestTagBeforeClosingChat;
};

Template.visitorInfo.helpers({
  user() {
    const user = Template.instance().user.get();

    if (user && user.userAgent) {
      const ua = new UAParser();
      ua.setUA(user.userAgent);
      user.os = "".concat(ua.getOS().name, " ").concat(ua.getOS().version);

      if (['Mac OS', 'iOS'].indexOf(ua.getOS().name) !== -1) {
        user.osIcon = 'icon-apple';
      } else {
        user.osIcon = "icon-".concat(ua.getOS().name.toLowerCase());
      }

      user.browser = "".concat(ua.getBrowser().name, " ").concat(ua.getBrowser().version);
      user.browserIcon = "icon-".concat(ua.getBrowser().name.toLowerCase());
      user.status = roomTypes.getUserStatus('l', this.rid) || 'offline';
    }

    return user;
  },

  room() {
    return Template.instance().room.get();
  },

  department() {
    return Template.instance().department.get();
  },

  joinTags() {
    const tags = Template.instance().tags.get();
    return tags && tags.join(', ');
  },

  customRoomFields() {
    const customFields = Template.instance().customFields.get();

    if (!customFields || customFields.length === 0) {
      return [];
    }

    const fields = [];
    const room = Template.instance().room.get();
    const {
      livechatData = {}
    } = room || {};
    Object.keys(livechatData).forEach(key => {
      const field = _.findWhere(customFields, {
        _id: key
      });

      if (field && field.visibility !== 'hidden' && field.scope === 'room') {
        fields.push({
          label: field.label,
          value: livechatData[key]
        });
      }
    });
    return fields;
  },

  customVisitorFields() {
    const customFields = Template.instance().customFields.get();

    if (!hasAtLeastOnePermission(['view-livechat-room-customfields', 'edit-livechat-room-customfields'])) {
      return;
    }

    if (!customFields || customFields.length === 0) {
      return [];
    }

    const fields = [];
    const user = Template.instance().user.get();
    const {
      livechatData = {}
    } = user || {};
    Object.keys(livechatData).forEach(key => {
      const field = _.findWhere(customFields, {
        _id: key
      });

      if (field && field.visibility !== 'hidden' && field.scope === 'visitor') {
        fields.push({
          label: field.label,
          value: livechatData[key]
        });
      }
    });
    return fields;
  },

  createdAt() {
    if (!this.createdAt) {
      return '';
    }

    return moment(this.createdAt).format('L LTS');
  },

  lastLogin() {
    if (!this.lastLogin) {
      return '';
    }

    return moment(this.lastLogin).format('L LTS');
  },

  editing() {
    return Template.instance().action.get() === 'edit';
  },

  forwarding() {
    return Template.instance().action.get() === 'forward';
  },

  sendingTranscript() {
    return Template.instance().action.get() === 'transcript';
  },

  roomInfoData() {
    const instance = Template.instance();
    const user = instance.user.get();
    return {
      visitorId: user ? user._id : null,
      roomId: this.rid,

      save() {
        instance.action.set();
      },

      cancel() {
        instance.action.set();
      }

    };
  },

  roomOpen() {
    const room = Template.instance().room.get();
    const uid = Meteor.userId();
    return room && room.open && (room.servedBy && room.servedBy._id === uid || hasRole(uid, 'livechat-manager'));
  },

  canReturnQueue() {
    const config = Template.instance().routingConfig.get();
    return config.returnQueue;
  },

  showDetail() {
    if (Template.instance().action.get()) {
      return 'hidden';
    }
  },

  canSeeButtons() {
    if (hasAtLeastOnePermission(['close-others-livechat-room', 'transfer-livechat-guest'])) {
      return true;
    }

    return isSubscribedToRoom();
  },

  canEditRoom() {
    if (hasPermission('save-others-livechat-room-info')) {
      return true;
    }

    return isSubscribedToRoom();
  },

  canCloseRoom() {
    if (hasPermission('close-others-livechat-room')) {
      return true;
    }

    return isSubscribedToRoom();
  },

  canForwardGuest() {
    return hasPermission('transfer-livechat-guest');
  },

  canSendTranscript() {
    const room = Template.instance().room.get();
    return !room.email && hasPermission('send-omnichannel-chat-transcript');
  },

  canPlaceChatOnHold() {
    var _room$lastMessage;

    const room = Template.instance().room.get();
    return room.open && !room.onHold && room.servedBy && room.lastMessage && !((_room$lastMessage = room.lastMessage) !== null && _room$lastMessage !== void 0 && _room$lastMessage.token) && settings.get('Livechat_allow_manual_on_hold');
  },

  roomClosedDateTime() {
    const {
      closedAt
    } = this;
    return formatDateAndTime(closedAt);
  },

  roomClosedBy() {
    const {
      closedBy = {},
      servedBy = {}
    } = this;
    let {
      closer
    } = this;

    if (closer === 'user') {
      if (servedBy._id !== closedBy._id) {
        return closedBy.username;
      }

      closer = 'agent';
    }

    const closerLabel = closer.charAt(0).toUpperCase() + closer.slice(1);
    return t("".concat(closerLabel));
  },

  customInfoTemplate() {
    return getCustomFormTemplate('livechatVisitorInfo');
  },

  roomDataContext() {
    // To make the dynamic template reactive we need to pass a ReactiveVar through the data property
    // because only the dynamic template data will be reloaded
    return Template.instance().room;
  },

  transcriptRequest() {
    const room = Template.instance().room.get();
    return room === null || room === void 0 ? void 0 : room.transcriptRequest;
  },

  transcriptRequestedDateTime() {
    const {
      requestedAt
    } = this;
    return formatDateAndTime(requestedAt);
  },

  markdown(text) {
    return Markdown.parse(text);
  }

});
Template.visitorInfo.events({
  'click .edit-livechat'(event, instance) {
    event.preventDefault();
    instance.action.set('edit');
  },

  'click .close-livechat'(event, instance) {
    event.preventDefault();

    if (!closingDialogRequired(instance.department.get())) {
      const comment = TAPi18n.__('Chat_closed_by_agent');

      return Meteor.call('livechat:closeRoom', this.rid, comment, {
        clientAction: true
      }, function (error
      /* , result*/
      ) {
        if (error) {
          return handleError(error);
        }

        modal.open({
          title: t('Chat_closed'),
          text: t('Chat_closed_successfully'),
          type: 'success',
          timer: 1000,
          showConfirmButton: false
        });
      });
    }

    modal.open({
      title: t('Closing_chat'),
      modifier: 'modal',
      content: 'closeRoom',
      data: {
        rid: this.rid
      },
      confirmOnEnter: false,
      showConfirmButton: false,
      showCancelButton: false
    });
  },

  'click .return-inquiry'(event) {
    event.preventDefault();
    modal.open({
      title: t('Would_you_like_to_return_the_inquiry'),
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: t('Yes')
    }, () => {
      Meteor.call('livechat:returnAsInquiry', this.rid, function (error
      /* , result*/
      ) {
        if (error) {
          handleError(error);
        } else {
          Session.set('openedRoom');
          FlowRouter.go('/home');
        }
      });
    });
  },

  'click .forward-livechat'(event, instance) {
    event.preventDefault();
    instance.action.set('forward');
  },

  'click .send-transcript'(event, instance) {
    event.preventDefault();
    instance.action.set('transcript');
  },

  'click .on-hold'(event) {
    event.preventDefault();
    modal.open({
      title: t('Would_you_like_to_place_chat_on_hold'),
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: t('Yes')
    }, async () => {
      const {
        success
      } = await APIClient.v1.post('livechat/room.onHold', {
        roomId: this.rid
      });

      if (success) {
        modal.open({
          title: t('Chat_On_Hold'),
          text: t('Chat_On_Hold_Successfully'),
          type: 'success',
          timer: 1500,
          showConfirmButton: false
        });
      }
    });
  }

});
Template.visitorInfo.onCreated(function () {
  this.visitorId = new ReactiveVar(null);
  this.customFields = new ReactiveVar([]);
  this.action = new ReactiveVar();
  this.user = new ReactiveVar();
  this.departmentId = new ReactiveVar(null);
  this.tags = new ReactiveVar(null);
  this.routingConfig = new ReactiveVar({});
  this.department = new ReactiveVar({});
  this.room = new ReactiveVar({});

  this.updateVisitor = async visitorId => {
    const {
      visitor
    } = await APIClient.v1.get("livechat/visitors.info?visitorId=".concat(visitorId));
    this.user.set(visitor);
  };

  this.updateRoom = room => {
    this.departmentId.set(room && room.departmentId);
    this.tags.set(room && room.tags);
    this.room.set(room);
    const visitorId = room && room.v && room.v._id;
    this.visitorId.set(visitorId);
    this.updateVisitor(visitorId);
  };

  Meteor.call('livechat:getCustomFields', (err, customFields) => {
    if (customFields) {
      this.customFields.set(customFields);
    }
  });
  const {
    rid
  } = Template.currentData();
  Meteor.call('livechat:getRoutingConfig', (err, config) => {
    if (config) {
      this.routingConfig.set(config);
    }
  });

  const loadRoomData = async rid => {
    const {
      room
    } = await APIClient.v1.get("rooms.info?roomId=".concat(rid));
    this.updateRoom(room);
  };

  if (rid) {
    RoomManager.roomStream.on(rid, this.updateRoom);
    loadRoomData(rid);
  }

  this.autorun(async () => {
    if (this.departmentId.get()) {
      const {
        department
      } = await APIClient.v1.get("livechat/department/".concat(this.departmentId.get(), "?includeAgents=false"));
      this.department.set(department);
    }
  });
  this.autorun(() => {
    const visitorId = this.visitorId.get();

    if (visitorId) {
      this.updateVisitor(visitorId);
    }
  });
});
Template.visitorInfo.onDestroyed(function () {
  const {
    rid
  } = Template.currentData();
  RoomManager.roomStream.removeListener(rid, this.updateRoom);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/1e8e37d443f8677fed288efd349d2f6516e23cd4.map
