function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/livechatReadOnly.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["clientAction"];

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 0);

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 1);
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
var FlowRouter;
module.link("meteor/kadira:flow-router", {
  FlowRouter: function (v) {
    FlowRouter = v;
  }
}, 3);
var ChatRoom, CachedChatRoom;
module.link("../../../../models", {
  ChatRoom: function (v) {
    ChatRoom = v;
  },
  CachedChatRoom: function (v) {
    CachedChatRoom = v;
  }
}, 4);
var callWithErrorHandling;
module.link("../../../../../client/lib/utils/callWithErrorHandling", {
  callWithErrorHandling: function (v) {
    callWithErrorHandling = v;
  }
}, 5);
module.link("./livechatReadOnly.html");
var APIClient;
module.link("../../../../utils/client", {
  APIClient: function (v) {
    APIClient = v;
  }
}, 6);
var inquiryDataStream;
module.link("../../lib/stream/inquiry", {
  inquiryDataStream: function (v) {
    inquiryDataStream = v;
  }
}, 7);
Template.livechatReadOnly.helpers({
  inquiryOpen: function () {
    var inquiry = Template.instance().inquiry.get();
    var room = Template.instance().room.get();
    return inquiry && inquiry.status === 'queued' || !room.servedBy;
  },
  roomOpen: function () {
    var room = Template.instance().room.get();
    return room && room.open === true;
  },
  showPreview: function () {
    var config = Template.instance().routingConfig.get();
    return config.previewRoom || Template.currentData().onHold;
  },
  isPreparing: function () {
    return Template.instance().preparing.get();
  },
  isOnHold: function () {
    return Template.currentData().onHold;
  }
});
Template.livechatReadOnly.events({
  'click .js-take-it': function () {
    function _callee(event, instance) {
      var inquiry, _id;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                event.stopPropagation();
                inquiry = instance.inquiry.get();
                _id = inquiry._id;
                _context.next = 6;
                return _regeneratorRuntime.awrap(callWithErrorHandling('livechat:takeInquiry', _id, {
                  clientAction: true
                }));

              case 6:
                instance.loadInquiry(inquiry.rid);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }(),
  'click .js-resume-it': function () {
    function _callee2(event, instance) {
      var room;
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                event.stopPropagation();
                room = instance.room.get();
                _context2.next = 5;
                return _regeneratorRuntime.awrap(callWithErrorHandling('livechat:resumeOnHold', room._id, {
                  clientAction: true
                }));

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
  }()
});
Template.livechatReadOnly.onCreated(function () {
  var _this = this;

  this.rid = Template.currentData().rid;
  this.room = new ReactiveVar();
  this.inquiry = new ReactiveVar();
  this.routingConfig = new ReactiveVar({});
  this.preparing = new ReactiveVar(true);

  this.updateInquiry = function () {
    function _callee3(_ref) {
      var clientAction, inquiry;
      return _regeneratorRuntime.async(function () {
        function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                clientAction = _ref.clientAction, inquiry = _objectWithoutProperties(_ref, _excluded);

                if (!(clientAction === 'removed')) {
                  _context3.next = 5;
                  break;
                }

                // this will force to refresh the room
                // since the client wont get notified of room changes when chats are on queue (no one assigned)
                // a better approach should be performed when refactoring these templates to use react
                ChatRoom.remove(_this.rid);
                CachedChatRoom.save();
                return _context3.abrupt("return", FlowRouter.go('/home'));

              case 5:
                _this.inquiry.set(inquiry);

              case 6:
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

  Meteor.call('livechat:getRoutingConfig', function (err, config) {
    if (config) {
      _this.routingConfig.set(config);
    }
  });

  this.loadInquiry = function () {
    function _callee4(roomId) {
      var _await$APIClient$v1$g, inquiry;

      return _regeneratorRuntime.async(function () {
        function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this.preparing.set(true);

                _context4.next = 3;
                return _regeneratorRuntime.awrap(APIClient.v1.get("livechat/inquiries.getOne?roomId=" + roomId));

              case 3:
                _await$APIClient$v1$g = _context4.sent;
                inquiry = _await$APIClient$v1$g.inquiry;

                _this.inquiry.set(inquiry);

                if (inquiry && inquiry._id) {
                  inquiryDataStream.on(inquiry._id, _this.updateInquiry);
                }

                _this.preparing.set(false);

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }

        return _callee4$;
      }(), null, null, null, Promise);
    }

    return _callee4;
  }();

  this.autorun(function () {
    return _this.loadInquiry(_this.rid);
  });
  this.autorun(function () {
    _this.room.set(ChatRoom.findOne({
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
  var inquiry = this.inquiry.get();

  if (inquiry && inquiry._id) {
    inquiryDataStream.removeListener(inquiry._id, this.updateInquiry);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/af34b7da5633cd0bf68fdf2a5a781e6c0a662a8d.map
