function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/template.agentEdit.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("agentEdit");
Template["agentEdit"] = new Template("Template.agentEdit", (function() {
  var view = this;
  return Blaze.Unless(function() {
    return Spacebars.call(view.lookup("isReady"));
  }, function() {
    return [ "\n\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t" ];
  }, function() {
    return [ "\n\t\t", HTML.SECTION({
      class: "contextual-bar__content"
    }, "\n\t\t\t", HTML.FORM({
      id: "agent-form",
      "data-id": function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("agent"), "_id"));
      }
    }, "\n\t\t\t\t", HTML.DIV({
      class: "rc-form-group"
    }, "\n\t\t\t\t\t", HTML.LABEL({
      class: "rc-form-label"
    }, "\n\t\t\t\t\t\t", Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "Profile_picture");
    }), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({
      class: "rc-select-avatar"
    }, "\n\t\t\t\t\t\t", HTML.DIV({
      class: "rc-select-avatar__preview"
    }, "\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
      return {
        username: Spacebars.call(Spacebars.dot(view.lookup("agent"), "username"))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("avatar"));
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({
      class: "rc-input rc-form-group"
    }, "\n\t\t\t\t\t", HTML.LABEL({
      class: "rc-input__label"
    }, "\n\t\t\t\t\t\t\t", HTML.DIV({
      class: "rc-input__title"
    }, "\n\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "Name");
    }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({
      class: "rc-input__wrapper"
    }, "\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({
      name: "name",
      type: "text",
      class: "rc-input__element",
      id: "name",
      autocomplete: "off",
      value: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("agent"), "name"));
      },
      disabled: ""
    }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({
      class: "rc-input rc-form-group"
    }, "\n\t\t\t\t\t\t", HTML.LABEL({
      class: "rc-input__label"
    }, "\n\t\t\t\t\t\t\t\t", HTML.DIV({
      class: "rc-input__title"
    }, "\n\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "Username");
    }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV({
      class: "rc-input__wrapper"
    }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({
      class: "rc-input__icon"
    }, "\n\t\t\t\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
      return {
        icon: Spacebars.call("at")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("icon"));
    }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({
      name: "name",
      type: "text",
      class: "rc-input__element",
      id: "username",
      autocomplete: "off",
      value: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("agent"), "username"));
      },
      disabled: ""
    }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("agent"), "emails"));
    }, function() {
      return [ "\n\t\t\t\t\t", HTML.DIV({
        class: "rc-form-group"
      }, "\n\t\t\t\t\t\t", HTML.DIV({
        class: "rc-input"
      }, "\n\t\t\t\t\t\t\t", HTML.LABEL({
        class: "rc-input__label"
      }, "\n\t\t\t\t\t\t\t\t", HTML.DIV({
        class: "rc-input__title"
      }, Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Email");
      })), "\n\t\t\t\t\t\t\t\t", HTML.DIV({
        class: "rc-input__wrapper"
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({
        class: "rc-input__icon"
      }, "\n\t\t\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
        return {
          icon: Spacebars.call("mail")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("icon"));
      }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({
        name: "name",
        type: "text",
        class: "rc-input__element",
        id: "email",
        autocomplete: "off",
        value: function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("agent"), "emails", "0", "address"));
        },
        disabled: ""
      }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];
    }), "\n\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("hasAvailableDepartments"));
    }, function() {
      return [ "\n\t\t\t\t\t", HTML.DIV({
        class: "rc-form-group rc-form-group--inline"
      }, "\n\t\t\t\t\t\t", HTML.SELECT({
        id: "departmentSelect",
        class: "rc-input rc-input--small rc-form-item-inline"
      }, "\n\t\t\t\t\t\t\t", HTML.OPTION({
        value: "placeholder",
        disabled: "",
        selected: ""
      }, Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Select_department");
      })), "\n\t\t\t\t\t\t\t", Blaze.Each(function() {
        return {
          _sequence: Spacebars.call(view.lookup("availableDepartments")),
          _variable: "dept"
        };
      }, function() {
        return [ "\n\t\t\t\t\t\t\t\t", HTML.OPTION({
          value: function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("dept"), "_id"));
          }
        }, Blaze.View("lookup:dept.name", function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("dept"), "name"));
        })), "\n\t\t\t\t\t\t\t" ];
      }), "\n\t\t\t\t\t\t"), HTML.Raw('\n\t\t\t\t\t\t<button id="addDepartment" class="rc-button rc-button--primary rc-form-item-inline"><i class="icon-plus"></i></button>\n\t\t\t\t\t')), "\n\t\t\t\t" ];
    }), "\n\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("hasAgentDepartments"));
    }, function() {
      return [ "\n\t\t\t\t\t", HTML.DIV({
        class: "rc-form-group"
      }, "\n\t\t\t\t\t\t", HTML.DIV({
        class: "rc-input"
      }, "\n\t\t\t\t\t\t\t", HTML.LABEL({
        class: "rc-input__label"
      }, "\n\t\t\t\t\t\t\t\t", HTML.DIV({
        class: "rc-input__title"
      }, Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Departments");
      })), "\n\t\t\t\t\t\t\t\t", HTML.DIV({
        class: "rc-input__wrapper"
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.UL({
        id: "departments",
        class: "chip-container current-agent-departments"
      }, "\n\t\t\t\t\t\t\t\t\t\t", Blaze.Each(function() {
        return {
          _sequence: Spacebars.call(view.lookup("agentDepartments")),
          _variable: "dept"
        };
      }, function() {
        return [ "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.LI({
          "data-id": function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("dept"), "_id"));
          },
          class: "remove-department",
          title: function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("dept"), "name"));
          }
        }, "\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {
          return Spacebars.call(view.lookup("canEditDepartment"));
        }, function() {
          return HTML.Raw('\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon icon-cancel-circled"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t');
        }), "\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:dept.name", function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("dept"), "name"));
        }), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t" ];
      }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];
    }), "\n\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("customFieldsTemplate"));
    }, function() {
      return [ "\n\t\t\t\t\t", Blaze._TemplateWith(function() {
        return {
          template: Spacebars.call(view.lookup("customFieldsTemplate")),
          data: Spacebars.call(view.lookup("agentDataContext"))
        };
      }, function() {
        return Spacebars.include(function() {
          return Spacebars.call(Template.__dynamic);
        });
      }), "\n\t\t\t\t" ];
    }), "\n\t\t\t\t", HTML.DIV({
      class: "rc-user-info__flex rc-user-info__row"
    }, "\n\t\t\t\t\t", HTML.BUTTON({
      class: "rc-button rc-button--cancel cancel",
      type: "button"
    }, HTML.SPAN(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "Cancel");
    }))), "\n\t\t\t\t\t", HTML.BUTTON({
      class: "rc-button rc-button--primary save"
    }, HTML.SPAN(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "Save");
    }))), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t" ];
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/02dc9b909728ead4dff84c249a60dd1f1c92004d.map
