function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/template.visitorEdit.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("visitorEdit");
Template["visitorEdit"] = new Template("Template.visitorEdit", (function() {
  var view = this;
  return HTML.DIV({
    class: "visitor-edit"
  }, "\n\t\t", HTML.FORM({
    autocomplete: "off"
  }, "\n\t\t\t", Spacebars.With(function() {
    return Spacebars.call(view.lookup("visitor"));
  }, function() {
    return [ "\n\t\t\t\t", HTML.H3(Blaze.View("lookup:username", function() {
      return Spacebars.mustache(view.lookup("username"));
    })), "\n\t\t\t\t", HTML.DIV({
      class: "rc-input rc-form-group rc-form-group--small"
    }, "\n\t\t\t\t\t", HTML.LABEL({
      class: "rc-input__label"
    }, "\n\t\t\t\t\t\t", HTML.DIV({
      class: "rc-input__title"
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "Name");
    })), "\n\t\t\t\t\t\t", HTML.DIV({
      class: "rc-input__wrapper"
    }, "\n\t\t\t\t\t\t\t", HTML.INPUT({
      name: "name",
      type: "text",
      class: "rc-input__element",
      autocomplete: "off",
      value: function() {
        return Spacebars.mustache(view.lookup("name"));
      }
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({
      class: "rc-input rc-form-group rc-form-group--small"
    }, "\n\t\t\t\t\t", HTML.LABEL({
      class: "rc-input__label"
    }, "\n\t\t\t\t\t\t", HTML.DIV({
      class: "rc-input__title"
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "Email");
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
      }
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({
      class: "rc-input rc-form-group rc-form-group--small"
    }, "\n\t\t\t\t\t", HTML.LABEL({
      class: "rc-input__label"
    }, "\n\t\t\t\t\t\t", HTML.DIV({
      class: "rc-input__title"
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "Phone");
    })), "\n\t\t\t\t\t\t", HTML.DIV({
      class: "rc-input__wrapper"
    }, "\n\t\t\t\t\t\t\t", HTML.INPUT({
      class: "rc-input__element",
      type: "text",
      name: "phone",
      autocomplete: "off",
      value: function() {
        return Spacebars.mustache(view.lookup("phone"));
      },
      disabled: function() {
        return Spacebars.mustache(view.lookup("isSmsIntegration"));
      }
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("canViewCustomFields"));
    }, function() {
      return [ "\n\t\t\t\t\t", Blaze.Each(function() {
        return {
          _sequence: Spacebars.call(view.lookup("visitorCustomFields")),
          _variable: "field"
        };
      }, function() {
        return [ "\n\t\t\t\t\t\t", Blaze._TemplateWith(function() {
          return Spacebars.call(view.lookup("field"));
        }, function() {
          return Spacebars.include(view.lookupTemplate("visitorEditCustomField"));
        }), "\n\t\t\t\t\t" ];
      }), "\n\t\t\t\t" ];
    }), "\n\t\t\t" ];
  }), "\n\n\t\t\t", Spacebars.With(function() {
    return Spacebars.call(view.lookup("room"));
  }, function() {
    return [ "\n\t\t\t\t", HTML.H3(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "Conversation");
    })), "\n\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("customFieldsTemplate"));
    }, function() {
      return [ "\n\t\t\t\t\t", Blaze._TemplateWith(function() {
        return {
          template: Spacebars.call(view.lookup("customFieldsTemplate")),
          data: Spacebars.call(view.lookup("room"))
        };
      }, function() {
        return Spacebars.include(function() {
          return Spacebars.call(Template.__dynamic);
        });
      }), "\n\t\t\t\t" ];
    }), "\n\t\t\t\t", HTML.DIV({
      class: "rc-input rc-form-group rc-form-group--small"
    }, "\n\t\t\t\t\t", HTML.LABEL({
      class: "rc-input__label"
    }, "\n\t\t\t\t\t\t", HTML.DIV({
      class: "rc-input__title"
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "Topic");
    })), "\n\t\t\t\t\t\t", HTML.DIV({
      class: "rc-input__wrapper"
    }, "\n\t\t\t\t\t\t\t", HTML.INPUT({
      class: "rc-input__element",
      type: "text",
      name: "topic",
      autocomplete: "off",
      value: function() {
        return Spacebars.mustache(view.lookup("topic"));
      }
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("hasAvailableTags"));
    }, function() {
      return [ "\n\t\t\t\t\t", HTML.DIV({
        class: "rc-form-group rc-form-group--small rc-form-group--inline"
      }, "\n\t\t\t\t\t\t", HTML.SELECT({
        id: "tagSelect",
        class: "rc-input rc-input--small rc-form-item-inline"
      }, "\n\t\t\t\t\t\t\t", HTML.OPTION({
        value: "placeholder",
        disabled: "",
        selected: ""
      }, Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Select_tag");
      })), "\n\t\t\t\t\t\t\t", Blaze.Each(function() {
        return Spacebars.call(view.lookup("availableUserTags"));
      }, function() {
        return [ "\n\t\t\t\t\t\t\t\t", HTML.OPTION({
          value: function() {
            return Spacebars.mustache(view.lookup("_id"));
          }
        }, Blaze.View("lookup:.", function() {
          return Spacebars.mustache(view.lookup("."));
        })), "\n\t\t\t\t\t\t\t" ];
      }), "\n\t\t\t\t\t\t"), HTML.Raw('\n\t\t\t\t\t\t<button id="addTag" class="rc-button rc-button--primary rc-form-item-inline"><i class="icon-plus"></i></button>\n\t\t\t\t\t')), "\n\t\t\t\t" ];
    }, function() {
      return [ "\n\t\t\t\t\t", HTML.DIV({
        class: "rc-input rc-form-group rc-form-group--small"
      }, "\n\t\t\t\t\t\t", HTML.LABEL({
        class: "rc-input__label"
      }, "\n\t\t\t\t\t\t\t", HTML.DIV({
        class: "rc-input__title"
      }, Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Tags");
      })), "\n\t\t\t\t\t\t\t", HTML.DIV({
        class: "rc-input__wrapper"
      }, "\n\t\t\t\t\t\t\t\t", HTML.DIV({
        class: "rc-input__icon"
      }, "\n\t\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
        return {
          icon: Spacebars.call("edit")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("icon"));
      }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.INPUT({
        id: "tagInput",
        class: "rc-input__element",
        type: "text",
        name: "tags",
        autocomplete: "off",
        placeholder: function() {
          return Spacebars.mustache(view.lookup("_"), "Enter_a_tag");
        }
      }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];
    }), "\n\t\t\t\t", HTML.DIV({
      class: "rc-form-group rc-form-group--small"
    }, "\n\t\t\t\t\t", HTML.UL({
      id: "tags",
      class: "chip-container current-room-tags"
    }, "\n\t\t\t\t\t\t", Blaze.Each(function() {
      return Spacebars.call(view.lookup("tags"));
    }, function() {
      return [ "\n\t\t\t\t\t\t", HTML.LI({
        class: "remove-tag",
        title: function() {
          return Spacebars.mustache(view.lookup("."));
        }
      }, "\n\t\t\t\t\t\t\t", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("canRemoveTag"), view.lookup("availableUserTags"), view.lookup("."));
      }, function() {
        return HTML.Raw('\n\t\t\t\t\t\t\t\t<i class="icon icon-cancel-circled"></i>\n\t\t\t\t\t\t\t');
      }), "\n\t\t\t\t\t\t\t", Blaze.View("lookup:.", function() {
        return Spacebars.mustache(view.lookup("."));
      }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t" ];
    }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("canViewCustomFields"));
    }, function() {
      return [ "\n\t\t\t\t\t", Blaze.Each(function() {
        return {
          _sequence: Spacebars.call(view.lookup("roomCustomFields")),
          _variable: "field"
        };
      }, function() {
        return [ "\n\t\t\t\t\t\t", Blaze._TemplateWith(function() {
          return Spacebars.call(view.lookup("field"));
        }, function() {
          return Spacebars.include(view.lookupTemplate("visitorEditCustomField"));
        }), "\n\t\t\t\t\t" ];
      }), "\n\t\t\t\t" ];
    }), "\n\t\t\t" ];
  }), "\n\n\t\t\t", HTML.DIV({
    class: "rc-user-info__flex rc-user-info__row"
  }, "\n\t\t\t\t", HTML.BUTTON({
    class: "rc-button cancel",
    type: "button"
  }, HTML.SPAN(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "Cancel");
  }))), "\n\t\t\t\t", HTML.BUTTON({
    class: "rc-button rc-button--primary save"
  }, HTML.SPAN(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "Save");
  }))), "\n\t\t\t"), "\n\t\t"), "\n\t");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/5f2802af6ecc00c59e05444fa71606c8a3fca19e.map
