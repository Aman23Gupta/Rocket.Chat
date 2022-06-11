function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/template.contactChatHistoryItem.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("contactChatHistoryItem");
Template["contactChatHistoryItem"] = new Template("Template.contactChatHistoryItem", (function() {
  var view = this;
  return HTML.LI({
    class: "message chat-history-item",
    id: function() {
      return Spacebars.mustache(view.lookup("_id"));
    }
  }, "\n\t\t", HTML.BUTTON({
    "aria-label": function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("servedBy"), "username"));
    },
    class: "thumb user-card-message",
    "data-username": function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("servedBy"), "username"));
    }
  }, "\n\t\t\t", Blaze._TemplateWith(function() {
    return {
      username: Spacebars.call(Spacebars.dot(view.lookup("servedBy"), "username"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("avatar"));
  }), "\n\t\t"), "\n\t\t", HTML.DIV({
    class: "message-body-wrapper"
  }, "\n\t\t\t", HTML.DIV({
    class: "title border-component-color color-info-font-color"
  }, "\n\t\t\t\t", HTML.BUTTON({
    type: "button",
    class: "user user-card-message color-primary-font-color",
    "data-username": function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("servedBy"), "username"));
    },
    tabindex: "1"
  }, Blaze.View("lookup:servedBy.username", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("servedBy"), "username"));
  })), "\n\t\t\t\t", HTML.TIME({
    class: "time",
    title: function() {
      return [ Spacebars.mustache(view.lookup("date")), " ", Spacebars.mustache(view.lookup("time")) ];
    },
    datetime: function() {
      return [ Spacebars.mustache(view.lookup("date")), " ", Spacebars.mustache(view.lookup("time")) ];
    }
  }, Blaze.View("lookup:closedAt", function() {
    return Spacebars.mustache(view.lookup("closedAt"));
  })), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({
    class: "chat-history-item-count-msg",
    dir: "auto"
  }, "\n\t\t\t\t", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("$gt"), view.lookup("msgs"), 0);
  }, function() {
    return [ "\n\t\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "message_counter", Spacebars.kw({
        counter: view.lookup("i18nMessageCounter"),
        count: view.lookup("msgs")
      })));
    })), "\n\t\t\t\t" ];
  }, function() {
    return [ "\n\t\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "No_messages_yet");
    })), "\n\t\t\t\t" ];
  }), "\n\t\t\t"), "\n\t\t\t", Spacebars.With(function() {
    return Spacebars.call(view.lookup("closingMessage"));
  }, function() {
    return [ "\n\t\t\t\t", HTML.DIV({
      class: "closing-message-body-wrapper"
    }, "\n\t\t\t\t\t", HTML.DIV({
      class: "closing-message-title",
      dir: "auto"
    }, HTML.P(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "Closing_chat_message");
    }), ":")), "\n\t\t\t\t\t", HTML.DIV({
      class: "closing-message-text",
      dir: "auto"
    }, HTML.P('"', Blaze.View("lookup:msg", function() {
      return Spacebars.mustache(view.lookup("msg"));
    }), '"')), "\n\t\t\t\t"), "\n\t\t\t" ];
  }), "\n\t\t"), "\n\t");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/0afba59cc963e4b52d89392708dbe9cd1cb0a62b.map
