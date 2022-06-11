function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/contactChatHistoryItem.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 0);
module.link("./contactChatHistoryItem.html");
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
Template.contactChatHistoryItem.helpers({
  closedAt: function () {
    var _Template$instance$ro = Template.instance().room.get(),
        closedAt = _Template$instance$ro.closedAt;

    return moment(closedAt).format('lll');
  },
  closingRoomMessage: function () {
    var closingObj = Template.instance().closingRoomMessage.get();
    return closingObj.msg;
  },
  i18nMessageCounter: function () {
    var msgs = this.msgs;
    return "<span class='message-counter'>" + msgs + "</span>";
  }
});
Template.contactChatHistoryItem.onCreated(function () {
  var _this = this;

  this.room = new ReactiveVar();
  this.autorun(function () {
    function _callee() {
      var currentData;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                currentData = Template.currentData();

                _this.room.set(currentData);

              case 2:
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
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/0516e2810e145d66c0b424126eb6d59456fd3aba.map
