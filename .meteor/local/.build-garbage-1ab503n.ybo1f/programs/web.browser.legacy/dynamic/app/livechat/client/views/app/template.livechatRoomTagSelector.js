function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/template.livechatRoomTagSelector.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("livechatRoomTagSelector");
Template["livechatRoomTagSelector"] = new Template("Template.livechatRoomTagSelector", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("hasAvailableTags"));
  }, function() {
    return [ "\n\t\t", HTML.DIV({
      class: "rc-select"
    }, "\n\t\t\t", HTML.SELECT({
      class: "rc-select__element",
      name: "tags"
    }, "\n\t\t\t\t", HTML.OPTION({
      class: "rc-select__option",
      value: ""
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "All");
    })), "\n\t\t\t\t", Blaze.Each(function() {
      return Spacebars.call(view.lookup("availableTags"));
    }, function() {
      return [ "\n\t\t\t\t\t", HTML.OPTION({
        class: "rc-select__option",
        value: function() {
          return Spacebars.mustache(view.lookup("name"));
        }
      }, Blaze.View("lookup:name", function() {
        return Spacebars.mustache(view.lookup("name"));
      })), "\n\t\t\t\t" ];
    }), "\n\t\t\t"), "\n\t\t\t", Blaze._TemplateWith(function() {
      return {
        block: Spacebars.call("rc-select__arrow"),
        icon: Spacebars.call("arrow-down")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("icon"));
    }), "\n\t\t"), "\n\t" ];
  }, function() {
    return [ "\n\t\t", HTML.DIV({
      class: "rc-input__wrapper"
    }, "\n\t\t\t", HTML.INPUT({
      autocomplete: "off",
      type: "text",
      placeholder: function() {
        return Spacebars.mustache(view.lookup("_"), "Tags");
      },
      class: "rc-input__element",
      name: "tags"
    }), "\n\t\t"), "\n\t" ];
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/c9e765a2237ed97e529d33dd079e967c33524796.map
