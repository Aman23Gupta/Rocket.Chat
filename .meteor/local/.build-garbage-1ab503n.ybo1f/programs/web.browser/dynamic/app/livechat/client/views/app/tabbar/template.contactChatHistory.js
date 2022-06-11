function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/template.contactChatHistory.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("contactChatHistory");
Template["contactChatHistory"] = new Template("Template.contactChatHistory", (function() {
  var view = this;
  return [ Blaze.If(function() {
    return Spacebars.call(view.lookup("isReady"));
  }, function() {
    return [ "\n\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("canSearch"));
    }, function() {
      return [ "\n\t\t\t", HTML.DIV({
        class: "control rocket-search-input contact-chat-history-search-wrapper"
      }, "\n\t\t\t\t", HTML.FORM({
        class: "search-form",
        role: "form"
      }, "\n\t\t\t\t\t", HTML.DIV({
        class: "rc-input"
      }, "\n\t\t\t\t\t\t", HTML.LABEL({
        class: "rc-input__label"
      }, "\n\t\t\t\t\t\t\t", HTML.DIV({
        class: "rc-input__wrapper"
      }, "\n\t\t\t\t\t\t\t\t", HTML.DIV({
        class: "rc-input__icon"
      }, "\n\t\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
        return {
          block: Spacebars.call("rc-input__icon-svg"),
          icon: Spacebars.call("magnifier")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("icon"));
      }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.INPUT({
        type: "text",
        class: "rc-input__element",
        name: "chat-search",
        id: "chat-search",
        placeholder: function() {
          return Spacebars.mustache(view.lookup("_"), "Search_Chat_History");
        },
        autocomplete: "off",
        "aria-label": function() {
          return Spacebars.mustache(view.lookup("_"), "Search_Chat_History");
        }
      }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t" ];
    }), "\n\t\t", HTML.DIV({
      class: "rocket-search-result"
    }, "\n\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("hasChatHistory"));
    }, function() {
      return [ "\n\t\t\t\t", HTML.DIV({
        class: "flex-tab__result js-list"
      }, "\n\t\t\t\t\t", HTML.UL({
        class: "list clearfix"
      }, "\n\t\t\t\t\t\t", Blaze.Each(function() {
        return {
          _sequence: Spacebars.call(view.lookup("history")),
          _variable: "item"
        };
      }, function() {
        return [ "\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
          return Spacebars.call(view.lookup("item"));
        }, function() {
          return Spacebars.include(view.lookupTemplate("contactChatHistoryItem"));
        }), "\n\t\t\t\t\t\t" ];
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t" ];
    }, function() {
      return [ "\n\t\t\t\t", HTML.DIV({
        class: "contact-chat-history-search-empty"
      }, "\n\t\t\t\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("isSearching"));
      }, function() {
        return [ "\n\t\t\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {
          return Spacebars.mustache(view.lookup("_"), "No_results_found");
        })), "\n\t\t\t\t\t" ];
      }, function() {
        return [ "\n\t\t\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {
          return Spacebars.mustache(view.lookup("_"), "No_previous_chat_found");
        })), "\n\t\t\t\t\t" ];
      }), "\n\t\t\t\t"), "\n\t\t\t" ];
    }), "\n\t\t"), "\n\t" ];
  }, function() {
    return [ "\n\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t" ];
  }), "\n\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("showChatHistoryMessages"));
  }, function() {
    return [ "\n\t\t", HTML.DIV({
      class: "rc-user-info-container flex-nav"
    }, "\n\t\t\t", Blaze._TemplateWith(function() {
      return Spacebars.dataMustache(view.lookup("chatHistoryMessagesContext"));
    }, function() {
      return Spacebars.include(view.lookupTemplate("contactChatHistoryMessages"));
    }), "\n\t\t"), "\n\t" ];
  }) ];
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/633405ed983acbb8e1603ab722bc0cf43225fed2.map
