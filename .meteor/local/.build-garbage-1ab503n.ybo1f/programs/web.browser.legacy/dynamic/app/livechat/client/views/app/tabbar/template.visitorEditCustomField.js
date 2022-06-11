function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/template.visitorEditCustomField.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("visitorEditCustomField");
Template["visitorEditCustomField"] = new Template("Template.visitorEditCustomField", (function() {
  var view = this;
  return HTML.DIV({
    class: "rc-input rc-form-group rc-form-group--small"
  }, "\n\t\t", HTML.LABEL({
    class: "rc-input__label"
  }, "\n\t\t\t", HTML.DIV({
    class: "rc-input__title"
  }, Blaze.View("lookup:label", function() {
    return Spacebars.mustache(view.lookup("label"));
  })), "\n\t\t\t", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("type"), "select");
  }, function() {
    return [ "\n\t\t\t\t", HTML.DIV({
      class: "rc-select"
    }, "\n\t\t\t\t\t", HTML.SELECT({
      name: function() {
        return Spacebars.mustache(view.lookup("name"));
      },
      class: "rc-select__element",
      "data-visitorlivechatdata": function() {
        return Spacebars.mustache(view.lookup("$eq"), view.lookup("scope"), "visitor");
      },
      "data-roomlivechatdata": function() {
        return Spacebars.mustache(view.lookup("$eq"), view.lookup("scope"), "room");
      },
      disabled: function() {
        return Spacebars.mustache(view.lookup("disabled"));
      }
    }, HTML.Raw('\n\t\t\t\t\t\t<option value=""></option>\n\t\t\t\t\t\t'), Blaze.Each(function() {
      return Spacebars.call(view.lookup("optionsList"));
    }, function() {
      return [ "\n\t\t\t\t\t\t\t", HTML.OPTION({
        value: function() {
          return Spacebars.mustache(view.lookup("."));
        },
        selected: function() {
          return Spacebars.mustache(view.lookup("selectedField"), view.lookup("."), view.lookup(".."));
        }
      }, Blaze.View("lookup:.", function() {
        return Spacebars.mustache(view.lookup("."));
      })), "\n\t\t\t\t\t\t" ];
    }), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", Blaze._TemplateWith(function() {
      return {
        block: Spacebars.call("rc-select__arrow"),
        icon: Spacebars.call("arrow-down")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("icon"));
    }), "\n\t\t\t\t"), "\n\t\t\t" ];
  }, function() {
    return [ "\n\t\t\t\t", HTML.DIV({
      class: "rc-input__wrapper"
    }, "\n\t\t\t\t\t", HTML.INPUT({
      class: "rc-input__element",
      type: "text",
      name: function() {
        return Spacebars.mustache(view.lookup("name"));
      },
      autocomplete: "off",
      "data-visitorlivechatdata": function() {
        return Spacebars.mustache(view.lookup("$eq"), view.lookup("scope"), "visitor");
      },
      "data-roomlivechatdata": function() {
        return Spacebars.mustache(view.lookup("$eq"), view.lookup("scope"), "room");
      },
      disabled: function() {
        return Spacebars.mustache(view.lookup("disabled"));
      },
      value: function() {
        return Spacebars.mustache(view.lookup("value"));
      }
    }), "\n\t\t\t\t"), "\n\t\t\t" ];
  }), "\n\t\t"), "\n\t");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/43478e922045efb2fa7a79d512ae11b00b07300d.map
