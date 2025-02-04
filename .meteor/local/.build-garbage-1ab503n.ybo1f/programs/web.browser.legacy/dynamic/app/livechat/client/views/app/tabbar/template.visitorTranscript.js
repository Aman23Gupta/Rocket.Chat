function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/template.visitorTranscript.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("visitorTranscript");
Template["visitorTranscript"] = new Template("Template.visitorTranscript", (function() {
  var view = this;
  return HTML.DIV({
    class: "content"
  }, "\n\t\t", HTML.FORM({
    autocomplete: "off"
  }, "\n\t\t\t", HTML.FIELDSET("\n\t\t\t\t", HTML.DIV({
    class: "rc-input rc-form-group rc-form-group--small"
  }, "\n\t\t\t\t\t", HTML.LABEL({
    class: "rc-input__label"
  }, "\n\t\t\t\t\t\t", HTML.DIV({
    class: "rc-input__title"
  }, Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "Visitor_Email");
  })), "\n\t\t\t\t\t\t", HTML.DIV({
    class: "rc-input__wrapper"
  }, "\n\t\t\t\t\t\t\t", HTML.DIV({
    class: "rc-input__icon"
  }, "\n\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
    return {
      icon: Spacebars.call("mail")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("icon"));
  }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.INPUT({
    class: "rc-input__element",
    type: "text",
    name: "email",
    autocomplete: "off",
    value: function() {
      return Spacebars.mustache(view.lookup("email"));
    },
    disabled: ""
  }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({
    class: "rc-input rc-form-group rc-form-group--small"
  }, "\n\t\t\t\t\t", HTML.LABEL({
    class: "rc-input__label"
  }, "\n\t\t\t\t\t\t", HTML.DIV({
    class: "rc-input__title"
  }, Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "Subject");
  })), "\n\t\t\t\t\t\t", HTML.DIV({
    class: "rc-input__wrapper"
  }, "\n\t\t\t\t\t\t\t", HTML.DIV({
    class: "rc-input__icon"
  }, "\n\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
    return {
      block: Spacebars.call("rc-input__icon-svg rc-icon--default-size"),
      icon: Spacebars.call("edit")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("icon"));
  }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.INPUT({
    class: "rc-input__element",
    type: "text",
    name: "subject",
    autocomplete: "off",
    value: function() {
      return Spacebars.mustache(view.lookup("subject"));
    },
    disabled: function() {
      return Spacebars.mustache(view.lookup("transcriptRequested"));
    }
  }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("errorMessage"));
  }, function() {
    return [ "\n\t\t\t", HTML.DIV({
      class: "mail-messages__instructions mail-messages__instructions--warning"
    }, "\n\t\t\t\t", HTML.DIV({
      class: "mail-messages__instructions-wrapper"
    }, "\n\t\t\t\t\t", HTML.DIV({
      class: "mail-messages__instructions-text"
    }, Blaze.View("lookup:errorMessage", function() {
      return Spacebars.mustache(view.lookup("errorMessage"));
    })), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t" ];
  }), "\n\t\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("infoMessage"));
  }, function() {
    return [ "\n\t\t\t", HTML.DIV({
      class: "mail-messages__instructions mail-messages__instructions--selected"
    }, "\n\t\t\t\t", HTML.DIV({
      class: "mail-messages__instructions-wrapper"
    }, "\n\t\t\t\t\t", HTML.DIV({
      class: "mail-messages__instructions-text"
    }, Blaze.View("lookup:infoMessage", function() {
      return Spacebars.mustache(view.lookup("infoMessage"));
    })), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t" ];
  }), "\n\t\t", HTML.DIV({
    class: "rc-user-info__flex rc-user-info__row"
  }, "\n\t\t\t", HTML.BUTTON({
    class: "rc-button cancel"
  }, HTML.SPAN(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "Cancel");
  }))), "\n\t\t\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("roomOpen"));
  }, function() {
    return [ "\n\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("transcriptRequested"));
    }, function() {
      return [ "\n\t\t\t\t\t", HTML.BUTTON({
        class: "rc-button rc-button--cancel discard",
        type: "button"
      }, HTML.SPAN(Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Discard");
      }))), "\n\t\t\t\t" ];
    }, function() {
      return [ "\n\t\t\t\t\t", HTML.BUTTON({
        class: "rc-button rc-button--primary request"
      }, HTML.SPAN(Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Request");
      }))), "\n\t\t\t\t" ];
    }), "\n\t\t\t" ];
  }, function() {
    return [ "\n\t\t\t\t", HTML.BUTTON({
      class: "rc-button rc-button--primary send"
    }, HTML.SPAN(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "Send");
    }))), "\n\t\t\t" ];
  }), "\n\t\t"), "\n\t");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/ed0a77aabb1ef8939ea7605e801d2cfec72f1cb7.map
