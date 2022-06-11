function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/visitorInfo.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
var TAPi18n;
module.link("meteor/rocketchat:tap-i18n", {
  TAPi18n: function (v) {
    TAPi18n = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 1);
var ReactiveVar;
module.link("meteor/reactive-var", {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 2);
var FlowRouter;
module.link("meteor/kadira:flow-router", {
  FlowRouter: function (v) {
    FlowRouter = v;
  }
}, 3);
var Session;
module.link("meteor/session", {
  Session: function (v) {
    Session = v;
  }
}, 4);
var Template;
module.link("meteor/templating", {
  Template: function (v) {
    Template = v;
  }
}, 5);

var _;

module.link("underscore", {
  "default": function (v) {
    _ = v;
  }
}, 6);
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 7);
var UAParser;
module.link("ua-parser-js", {
  "default": function (v) {
    UAParser = v;
  }
}, 8);
var modal;
module.link("../../../../../ui-utils", {
  modal: function (v) {
    modal = v;
  }
}, 9);
var Subscriptions;
module.link("../../../../../models", {
  Subscriptions: function (v) {
    Subscriptions = v;
  }
}, 10);
var settings;
module.link("../../../../../settings", {
  settings: function (v) {
    settings = v;
  }
}, 11);
var t, roomTypes;
module.link("../../../../../utils", {
  t: function (v) {
    t = v;
  },
  roomTypes: function (v) {
    roomTypes = v;
  }
}, 12);
var hasRole, hasPermission, hasAtLeastOnePermission;
module.link("../../../../../authorization", {
  hasRole: function (v) {
    hasRole = v;
  },
  hasPermission: function (v) {
    hasPermission = v;
  },
  hasAtLeastOnePermission: function (v) {
    hasAtLeastOnePermission = v;
  }
}, 13);
module.link("./visitorInfo.html");
var APIClient;
module.link("../../../../../utils/client", {
  APIClient: function (v) {
    APIClient = v;
  }
}, 14);
var RoomManager;
module.link("../../../../../ui-utils/client", {
  RoomManager: function (v) {
    RoomManager = v;
  }
}, 15);
var getCustomFormTemplate;
module.link("../customTemplates/register", {
  getCustomFormTemplate: function (v) {
    getCustomFormTemplate = v;
  }
}, 16);
var Markdown;
module.link("../../../../../markdown/client", {
  Markdown: function (v) {
    Markdown = v;
  }
}, 17);
var handleError;
module.link("../../../../../../client/lib/utils/handleError", {
  handleError: function (v) {
    handleError = v;
  }
}, 18);
var formatDateAndTime;
module.link("../../../../../../client/lib/utils/formatDateAndTime", {
  formatDateAndTime: function (v) {
    formatDateAndTime = v;
  }
}, 19);

var isSubscribedToRoom = function () {
  var data = Template.currentData();

  if (!data || !data.rid) {
    return false;
  }

  var subscription = Subscriptions.findOne({
    rid: data.rid
  });
  return subscription !== undefined;
};

var closingDialogRequired = function (department) {
  if (settings.get('Livechat_request_comment_when_closing_conversation')) {
    return true;
  }

  return department && department.requestTagBeforeClosingChat;
};

Template.visitorInfo.helpers({
  user: function () {
    var user = Template.instance().user.get();

    if (user && user.userAgent) {
      var ua = new UAParser();
      ua.setUA(user.userAgent);
      user.os = ua.getOS().name + " " + ua.getOS().version;

      if (['Mac OS', 'iOS'].indexOf(ua.getOS().name) !== -1) {
        user.osIcon = 'icon-apple';
      } else {
        user.osIcon = "icon-" + ua.getOS().name.toLowerCase();
      }

      user.browser = ua.getBrowser().name + " " + ua.getBrowser().version;
      user.browserIcon = "icon-" + ua.getBrowser().name.toLowerCase();
      user.status = roomTypes.getUserStatus('l', this.rid) || 'offline';
    }

    return user;
  },
  room: function () {
    return Template.instance().room.get();
  },
  department: function () {
    return Template.instance().department.get();
  },
  joinTags: function () {
    var tags = Template.instance().tags.get();
    return tags && tags.join(', ');
  },
  customRoomFields: function () {
    var customFields = Template.instance().customFields.get();

    if (!customFields || customFields.length === 0) {
      return [];
    }

    var fields = [];
    var room = Template.instance().room.get();

    var _ref = room || {},
        _ref$livechatData = _ref.livechatData,
        livechatData = _ref$livechatData === void 0 ? {} : _ref$livechatData;

    Object.keys(livechatData).forEach(function (key) {
      var field = _.findWhere(customFields, {
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
  customVisitorFields: function () {
    var customFields = Template.instance().customFields.get();

    if (!hasAtLeastOnePermission(['view-livechat-room-customfields', 'edit-livechat-room-customfields'])) {
      return;
    }

    if (!customFields || customFields.length === 0) {
      return [];
    }

    var fields = [];
    var user = Template.instance().user.get();

    var _ref2 = user || {},
        _ref2$livechatData = _ref2.livechatData,
        livechatData = _ref2$livechatData === void 0 ? {} : _ref2$livechatData;

    Object.keys(livechatData).forEach(function (key) {
      var field = _.findWhere(customFields, {
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
  createdAt: function () {
    if (!this.createdAt) {
      return '';
    }

    return moment(this.createdAt).format('L LTS');
  },
  lastLogin: function () {
    if (!this.lastLogin) {
      return '';
    }

    return moment(this.lastLogin).format('L LTS');
  },
  editing: function () {
    return Template.instance().action.get() === 'edit';
  },
  forwarding: function () {
    return Template.instance().action.get() === 'forward';
  },
  sendingTranscript: function () {
    return Template.instance().action.get() === 'transcript';
  },
  roomInfoData: function () {
    var instance = Template.instance();
    var user = instance.user.get();
    return {
      visitorId: user ? user._id : null,
      roomId: this.rid,
      save: function () {
        instance.action.set();
      },
      cancel: function () {
        instance.action.set();
      }
    };
  },
  roomOpen: function () {
    var room = Template.instance().room.get();
    var uid = Meteor.userId();
    return room && room.open && (room.servedBy && room.servedBy._id === uid || hasRole(uid, 'livechat-manager'));
  },
  canReturnQueue: function () {
    var config = Template.instance().routingConfig.get();
    return config.returnQueue;
  },
  showDetail: function () {
    if (Template.instance().action.get()) {
      return 'hidden';
    }
  },
  canSeeButtons: function () {
    if (hasAtLeastOnePermission(['close-others-livechat-room', 'transfer-livechat-guest'])) {
      return true;
    }

    return isSubscribedToRoom();
  },
  canEditRoom: function () {
    if (hasPermission('save-others-livechat-room-info')) {
      return true;
    }

    return isSubscribedToRoom();
  },
  canCloseRoom: function () {
    if (hasPermission('close-others-livechat-room')) {
      return true;
    }

    return isSubscribedToRoom();
  },
  canForwardGuest: function () {
    return hasPermission('transfer-livechat-guest');
  },
  canSendTranscript: function () {
    var room = Template.instance().room.get();
    return !room.email && hasPermission('send-omnichannel-chat-transcript');
  },
  canPlaceChatOnHold: function () {
    var _room$lastMessage;

    var room = Template.instance().room.get();
    return room.open && !room.onHold && room.servedBy && room.lastMessage && !((_room$lastMessage = room.lastMessage) !== null && _room$lastMessage !== void 0 && _room$lastMessage.token) && settings.get('Livechat_allow_manual_on_hold');
  },
  roomClosedDateTime: function () {
    var closedAt = this.closedAt;
    return formatDateAndTime(closedAt);
  },
  roomClosedBy: function () {
    var _this$closedBy = this.closedBy,
        closedBy = _this$closedBy === void 0 ? {} : _this$closedBy,
        _this$servedBy = this.servedBy,
        servedBy = _this$servedBy === void 0 ? {} : _this$servedBy;
    var closer = this.closer;

    if (closer === 'user') {
      if (servedBy._id !== closedBy._id) {
        return closedBy.username;
      }

      closer = 'agent';
    }

    var closerLabel = closer.charAt(0).toUpperCase() + closer.slice(1);
    return t("" + closerLabel);
  },
  customInfoTemplate: function () {
    return getCustomFormTemplate('livechatVisitorInfo');
  },
  roomDataContext: function () {
    // To make the dynamic template reactive we need to pass a ReactiveVar through the data property
    // because only the dynamic template data will be reloaded
    return Template.instance().room;
  },
  transcriptRequest: function () {
    var room = Template.instance().room.get();
    return room === null || room === void 0 ? void 0 : room.transcriptRequest;
  },
  transcriptRequestedDateTime: function () {
    var requestedAt = this.requestedAt;
    return formatDateAndTime(requestedAt);
  },
  markdown: function (text) {
    return Markdown.parse(text);
  }
});
Template.visitorInfo.events({
  'click .edit-livechat': function (event, instance) {
    event.preventDefault();
    instance.action.set('edit');
  },
  'click .close-livechat': function (event, instance) {
    event.preventDefault();

    if (!closingDialogRequired(instance.department.get())) {
      var comment = TAPi18n.__('Chat_closed_by_agent');

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
  'click .return-inquiry': function (event) {
    var _this = this;

    event.preventDefault();
    modal.open({
      title: t('Would_you_like_to_return_the_inquiry'),
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: t('Yes')
    }, function () {
      Meteor.call('livechat:returnAsInquiry', _this.rid, function (error
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
  'click .forward-livechat': function (event, instance) {
    event.preventDefault();
    instance.action.set('forward');
  },
  'click .send-transcript': function (event, instance) {
    event.preventDefault();
    instance.action.set('transcript');
  },
  'click .on-hold': function (event) {
    var _this2 = this;

    event.preventDefault();
    modal.open({
      title: t('Would_you_like_to_place_chat_on_hold'),
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: t('Yes')
    }, function () {
      function _callee() {
        var _await$APIClient$v1$p, success;

        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _regeneratorRuntime.awrap(APIClient.v1.post('livechat/room.onHold', {
                    roomId: _this2.rid
                  }));

                case 2:
                  _await$APIClient$v1$p = _context.sent;
                  success = _await$APIClient$v1$p.success;

                  if (success) {
                    modal.open({
                      title: t('Chat_On_Hold'),
                      text: t('Chat_On_Hold_Successfully'),
                      type: 'success',
                      timer: 1500,
                      showConfirmButton: false
                    });
                  }

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, null, Promise);
      }

      return _callee;
    }());
  }
});
Template.visitorInfo.onCreated(function () {
  var _this3 = this;

  this.visitorId = new ReactiveVar(null);
  this.customFields = new ReactiveVar([]);
  this.action = new ReactiveVar();
  this.user = new ReactiveVar();
  this.departmentId = new ReactiveVar(null);
  this.tags = new ReactiveVar(null);
  this.routingConfig = new ReactiveVar({});
  this.department = new ReactiveVar({});
  this.room = new ReactiveVar({});

  this.updateVisitor = function () {
    function _callee2(visitorId) {
      var _await$APIClient$v1$g, visitor;

      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _regeneratorRuntime.awrap(APIClient.v1.get("livechat/visitors.info?visitorId=" + visitorId));

              case 2:
                _await$APIClient$v1$g = _context2.sent;
                visitor = _await$APIClient$v1$g.visitor;

                _this3.user.set(visitor);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, null, Promise);
    }

    return _callee2;
  }();

  this.updateRoom = function (room) {
    _this3.departmentId.set(room && room.departmentId);

    _this3.tags.set(room && room.tags);

    _this3.room.set(room);

    var visitorId = room && room.v && room.v._id;

    _this3.visitorId.set(visitorId);

    _this3.updateVisitor(visitorId);
  };

  Meteor.call('livechat:getCustomFields', function (err, customFields) {
    if (customFields) {
      _this3.customFields.set(customFields);
    }
  });

  var _Template$currentData = Template.currentData(),
      rid = _Template$currentData.rid;

  Meteor.call('livechat:getRoutingConfig', function (err, config) {
    if (config) {
      _this3.routingConfig.set(config);
    }
  });

  var loadRoomData = function () {
    function _callee3(rid) {
      var _await$APIClient$v1$g2, room;

      return _regeneratorRuntime.async(function () {
        function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _regeneratorRuntime.awrap(APIClient.v1.get("rooms.info?roomId=" + rid));

              case 2:
                _await$APIClient$v1$g2 = _context3.sent;
                room = _await$APIClient$v1$g2.room;

                _this3.updateRoom(room);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }

        return _callee3$;
      }(), null, null, null, Promise);
    }

    return _callee3;
  }();

  if (rid) {
    RoomManager.roomStream.on(rid, this.updateRoom);
    loadRoomData(rid);
  }

  this.autorun(function () {
    function _callee4() {
      var _await$APIClient$v1$g3, department;

      return _regeneratorRuntime.async(function () {
        function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!_this3.departmentId.get()) {
                  _context4.next = 6;
                  break;
                }

                _context4.next = 3;
                return _regeneratorRuntime.awrap(APIClient.v1.get("livechat/department/" + _this3.departmentId.get() + "?includeAgents=false"));

              case 3:
                _await$APIClient$v1$g3 = _context4.sent;
                department = _await$APIClient$v1$g3.department;

                _this3.department.set(department);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }

        return _callee4$;
      }(), null, null, null, Promise);
    }

    return _callee4;
  }());
  this.autorun(function () {
    var visitorId = _this3.visitorId.get();

    if (visitorId) {
      _this3.updateVisitor(visitorId);
    }
  });
});
Template.visitorInfo.onDestroyed(function () {
  var _Template$currentData2 = Template.currentData(),
      rid = _Template$currentData2.rid;

  RoomManager.roomStream.removeListener(rid, this.updateRoom);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/dff350a319f2b69774b0f9058ba85d33c08c88e0.map
