function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/template.livechatReadOnly.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("livechatReadOnly");
Template["livechatReadOnly"] = new Template("Template.livechatReadOnly", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("roomOpen"));
  }, function() {
    return [ "\n\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("isPreparing"));
    }, function() {
      return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t\t" ];
    }, function() {
      return [ "\n\t\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("isOnHold"));
      }, function() {
        return [ "\n\t\t\t\t", HTML.DIV({
          class: "rc-message-box__join"
        }, "\n\t\t\t\t\t", Blaze.View("lookup:_", function() {
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "chat_on_hold_due_to_inactivity"));
        }), "\n\t\t\t\t\t", HTML.BUTTON({
          class: "rc-button rc-button--primary rc-button--small rc-message-box__resume-it-button js-resume-it"
        }, Blaze.View("lookup:_", function() {
          return Spacebars.mustache(view.lookup("_"), "Resume");
        })), "\n\t\t\t\t"), "\n\t\t\t" ];
      }, function() {
        return [ "\n\t\t\t\t", Blaze.If(function() {
          return Spacebars.call(view.lookup("inquiryOpen"));
        }, function() {
          return [ "\n\t\t\t\t\t", HTML.DIV({
            class: "rc-message-box__join"
          }, "\n\t\t\t\t\t\t", Blaze.View("lookup:_", function() {
            return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "you_are_in_preview_mode_of_incoming_livechat"));
          }), "\n\t\t\t\t\t\t", HTML.BUTTON({
            class: "rc-button rc-button--primary rc-button--small rc-message-box__take-it-button js-take-it"
          }, Blaze.View("lookup:_", function() {
            return Spacebars.mustache(view.lookup("_"), "Take_it");
          })), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];
        }, function() {
          return [ "\n\t\t\t\t\t", Blaze.View("lookup:_", function() {
            return Spacebars.mustache(view.lookup("_"), "room_is_read_only");
          }), "\n\t\t\t\t" ];
        }), "\n\t\t\t" ];
      }), "\n\t\t" ];
    }), "\n\t" ];
  }, function() {
    return [ "\n\t\t", HTML.P(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "This_conversation_is_already_closed");
    })), "\n\t" ];
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/a6dc74c94e5ef650c73be78a3d37ef10c2da08b7.map
