function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/template.contactChatHistoryMessages.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("contactChatHistoryMessages");
Template["contactChatHistoryMessages"] = new Template("Template.contactChatHistoryMessages", (function() {
  var view = this;
  return [ HTML.HEADER({
    class: "contextual-bar__header"
  }, "\n        ", HTML.DIV({
    class: "contextual-bar__header-data"
  }, "\n            ", HTML.BUTTON({
    class: "rc-button rc-button--nude contextual-bar__header-back-btn js-back",
    title: function() {
      return Spacebars.mustache(view.lookup("_"), "Return");
    }
  }, HTML.Raw('\n                <i class="icon-angle-left"></i>\n            ')), "\n            ", Blaze._TemplateWith(function() {
    return {
      icon: Spacebars.call("clock"),
      block: Spacebars.call("contextual-bar__header-icon")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("icon"));
  }), "\n            ", HTML.H1({
    class: "contextual-bar__header-title"
  }, Blaze.View("lookup:label", function() {
    return Spacebars.mustache(view.lookup("label"));
  })), "\n        "), "\n        ", HTML.BUTTON({
    class: "contextual-bar__header-close js-close",
    "aria-label": function() {
      return Spacebars.mustache(view.lookup("_"), "Close");
    }
  }, "\n            ", Blaze._TemplateWith(function() {
    return {
      block: Spacebars.call("contextual-bar__header-close-icon"),
      icon: Spacebars.call("plus")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("icon"));
  }), "\n        "), "\n\t"), "\n\t", HTML.SECTION({
    class: "contextual-bar__content flex-tab contact-chat-history-messages"
  }, "\n        ", HTML.DIV({
    class: "control rocket-search-input contact-chat-history-search-wrapper"
  }, "\n            ", HTML.FORM({
    class: "search-form",
    role: "form"
  }, "\n                ", HTML.DIV({
    class: "rc-input"
  }, "\n                    ", HTML.LABEL({
    class: "rc-input__label"
  }, "\n                        ", HTML.DIV({
    class: "rc-input__wrapper"
  }, "\n                            ", HTML.DIV({
    class: "rc-input__icon"
  }, "\n                                ", Blaze._TemplateWith(function() {
    return {
      block: Spacebars.call("rc-input__icon-svg"),
      icon: Spacebars.call("magnifier")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("icon"));
  }), "\n                            "), "\n                            ", HTML.INPUT({
    type: "text",
    class: "rc-input__element",
    name: "message-search",
    id: "message-search",
    placeholder: function() {
      return Spacebars.mustache(view.lookup("_"), "Search_Messages");
    },
    autocomplete: "off",
    "aria-label": function() {
      return Spacebars.mustache(view.lookup("_"), "Search_Messages");
    }
  }), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), "\n        ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("$and"), view.lookup("isSearching"), view.lookup("empty"));
  }, function() {
    return [ "\n            ", HTML.DIV({
      class: "rocket-search-result"
    }, "\n                ", HTML.DIV({
      class: "contact-chat-history-search-empty"
    }, "\n                    ", HTML.H2(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "No_results_found");
    })), "\n                "), "\n            "), "\n        " ];
  }, function() {
    return [ "\n            ", Blaze.If(function() {
      return Spacebars.call(view.lookup("hasError"));
    }, function() {
      return [ "\n                ", HTML.DIV({
        class: "rocket-search-result"
      }, "\n                    ", HTML.DIV({
        class: "contact-chat-history-search-empty"
      }, "\n                        ", HTML.H2(Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Not_found_or_not_allowed");
      })), "\n                    "), "\n                "), "\n            " ];
    }, function() {
      return [ "\n                ", HTML.DIV({
        class: "flex-tab__result js-list"
      }, "\n                    ", HTML.UL({
        class: "list clearfix contact-chat-history-messages-list"
      }, "\n                        ", Spacebars.With(function() {
        return Spacebars.call(view.lookup("messageContext"));
      }, function() {
        return [ "\n                            ", Blaze.Each(function() {
          return {
            _sequence: Spacebars.call(view.lookup("messages")),
            _variable: "msg"
          };
        }, function() {
          return Blaze._TemplateWith(function() {
            return {
              msg: Spacebars.call(view.lookup("msg")),
              room: Spacebars.call(view.lookup("room")),
              subscription: Spacebars.call(view.lookup("subscription")),
              settings: Spacebars.call(view.lookup("settings")),
              u: Spacebars.call(view.lookup("u"))
            };
          }, function() {
            return Spacebars.include(view.lookupTemplate("message"));
          });
        }), "\n                        " ];
      }), "\n\n                        ", Blaze.If(function() {
        return Spacebars.call(view.lookup("isLoading"));
      }, function() {
        return [ "\n                            ", Spacebars.include(view.lookupTemplate("loading")), "\n                        " ];
      }), "\n                    "), "\n                "), "\n            " ];
    }), "\n        " ];
  }), "\n\t") ];
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/4c01c01e3f0dd3e865514dfa4d96caf499795b45.map
