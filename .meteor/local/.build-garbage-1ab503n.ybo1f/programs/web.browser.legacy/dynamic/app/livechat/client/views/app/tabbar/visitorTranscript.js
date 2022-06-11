function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/visitorTranscript.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var ReactiveVar;
module.link("meteor/reactive-var", {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 1);
var Template;
module.link("meteor/templating", {
  Template: function (v) {
    Template = v;
  }
}, 2);
var dispatchToastMessage;
module.link("../../../../../../client/lib/toast", {
  dispatchToastMessage: function (v) {
    dispatchToastMessage = v;
  }
}, 3);
var handleError;
module.link("../../../../../../client/lib/utils/handleError", {
  handleError: function (v) {
    handleError = v;
  }
}, 4);
var t, roomTypes;
module.link("../../../../../utils", {
  t: function (v) {
    t = v;
  },
  roomTypes: function (v) {
    roomTypes = v;
  }
}, 5);
var APIClient;
module.link("../../../../../utils/client", {
  APIClient: function (v) {
    APIClient = v;
  }
}, 6);
module.link("./visitorTranscript.html");
var validateEmail;
module.link("../../../../../../lib/emailValidator", {
  validateEmail: function (v) {
    validateEmail = v;
  }
}, 7);

var validateTranscriptData = function (instance) {
  var subject = instance.$('[name="subject"]').val();
  var email = instance.$('[name="email"]').val();

  if (email === '') {
    instance.errorMessage.set(t('Mail_Message_Missing_to'));
    return false;
  }

  if (!validateEmail(email)) {
    instance.errorMessage.set(t('Mail_Message_Invalid_emails', email));
    return false;
  }

  if (subject === '') {
    instance.errorMessage.set(t('Mail_Message_Missing_subject'));
    return false;
  }

  var visitor = instance.visitor.get();
  var visitorEmail = visitor.visitorEmails[0];

  if (email !== visitorEmail.address) {
    instance.errorMessage.set(t('Livechat_visitor_email_and_transcript_email_do_not_match'));
    return false;
  }

  return true;
};

Template.visitorTranscript.helpers({
  roomOpen: function () {
    var room = Template.instance().room.get();
    return room && room.open === true;
  },
  email: function () {
    var room = Template.instance().room.get();

    if (room !== null && room !== void 0 && room.transcriptRequest) {
      return room.transcriptRequest.email;
    }

    var visitor = Template.instance().visitor.get();

    if (visitor !== null && visitor !== void 0 && visitor.visitorEmails && visitor.visitorEmails.length > 0) {
      return visitor.visitorEmails[0].address;
    }
  },
  subject: function () {
    var room = Template.instance().room.get();

    if (room !== null && room !== void 0 && room.transcriptRequest) {
      return room.transcriptRequest.subject;
    }

    return t('Transcript_of_your_livechat_conversation') || room && roomTypes.getRoomName(room.t, room);
  },
  errorEmail: function () {
    var instance = Template.instance();
    return instance && instance.erroredEmails.get().join(', ');
  },
  errorMessage: function () {
    return Template.instance().errorMessage.get();
  },
  infoMessage: function () {
    return Template.instance().infoMessage.get();
  },
  transcriptRequested: function () {
    var room = Template.instance().room.get();
    return room === null || room === void 0 ? void 0 : room.hasOwnProperty('transcriptRequest');
  }
});
Template.visitorTranscript.events({
  'click .send': function (e, instance) {
    var _this = this;

    event.preventDefault();

    if (!validateTranscriptData(instance)) {
      return;
    }

    var subject = instance.$('[name="subject"]').val();
    var email = instance.$('[name="email"]').val();
    var room = instance.room.get();
    var rid = room._id;
    var visitor = instance.visitor.get();
    var token = visitor.token;
    Meteor.call('livechat:sendTranscript', token, rid, email, subject, function (err) {
      if (err != null) {
        return handleError(err);
      }

      dispatchToastMessage({
        type: 'success',
        message: t('Your_email_has_been_queued_for_sending')
      });

      _this.save();
    });
  },
  'click .request': function (e, instance) {
    var _this2 = this;

    event.preventDefault();

    if (!validateTranscriptData(instance)) {
      return;
    }

    var subject = instance.$('[name="subject"]').val();
    var email = instance.$('[name="email"]').val();
    var room = instance.room.get();
    var rid = room._id;
    Meteor.call('livechat:requestTranscript', rid, email, subject, function (err) {
      if (err != null) {
        return handleError(err);
      }

      dispatchToastMessage({
        type: 'success',
        message: t('Livechat_transcript_has_been_requested')
      });

      _this2.save();
    });
  },
  'click .discard': function (e, instance) {
    var _this3 = this;

    event.preventDefault();
    var room = instance.room.get();
    var rid = room._id;
    Meteor.call('livechat:discardTranscript', rid, function (err) {
      if (err != null) {
        return handleError(err);
      }

      dispatchToastMessage({
        type: 'success',
        message: t('Livechat_transcript_request_has_been_canceled')
      });

      _this3.save();
    });
  },
  'click .cancel': function () {
    this.cancel();
  }
});
Template.visitorTranscript.onCreated(function () {
  function _callee3() {
    var _this4 = this;

    return _regeneratorRuntime.async(function () {
      function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              this.room = new ReactiveVar();
              this.visitor = new ReactiveVar();
              this.errorMessage = new ReactiveVar('');
              this.infoMessage = new ReactiveVar('');
              this.autorun(function () {
                function _callee() {
                  var _await$APIClient$v1$g, visitor;

                  return _regeneratorRuntime.async(function () {
                    function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _regeneratorRuntime.awrap(APIClient.v1.get("livechat/visitors.info?visitorId=" + Template.currentData().visitorId));

                          case 2:
                            _await$APIClient$v1$g = _context.sent;
                            visitor = _await$APIClient$v1$g.visitor;

                            _this4.visitor.set(visitor);

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
              this.autorun(function () {
                function _callee2() {
                  var _await$APIClient$v1$g2, room;

                  return _regeneratorRuntime.async(function () {
                    function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return _regeneratorRuntime.awrap(APIClient.v1.get("rooms.info?roomId=" + Template.currentData().roomId));

                          case 2:
                            _await$APIClient$v1$g2 = _context2.sent;
                            room = _await$APIClient$v1$g2.room;

                            _this4.room.set(room);

                            if (room !== null && room !== void 0 && room.transcriptRequest) {
                              _this4.infoMessage.set(t('Livechat_transcript_already_requested_warning'));
                            }

                          case 6:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }

                    return _callee2$;
                  }(), null, null, null, Promise);
                }

                return _callee2;
              }());

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }

      return _callee3$;
    }(), null, this, null, Promise);
  }

  return _callee3;
}());
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/2c1b9240931a5ee0b562b8cf59166e0e7436d2a8.map
