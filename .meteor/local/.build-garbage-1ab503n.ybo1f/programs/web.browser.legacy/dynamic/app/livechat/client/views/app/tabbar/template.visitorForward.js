function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/template.visitorForward.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("visitorForward");
Template["visitorForward"] = new Template("Template.visitorForward", (function() {
  var view = this;
  return HTML.DIV({
    class: "forward-chat"
  }, "\n\t\t", HTML.DIV({
    class: "edit-form"
  }, "\n\t\t\t", HTML.H3(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "Forward_chat");
  })), "\n\t\t\t", Spacebars.With(function() {
    return Spacebars.call(view.lookup("visitor"));
  }, function() {
    return [ "\n\t\t\t\t", HTML.DIV({
      class: "input-line"
    }, "\n\t\t\t\t\t", HTML.LABEL({
      for: "name"
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "Name");
    })), "\n\t\t\t\t\t", HTML.SPAN(Blaze.View("lookup:username", function() {
      return Spacebars.mustache(view.lookup("username"));
    })), "\n\t\t\t\t"), "\n\t\t\t" ];
  }), "\n\t\t\t", HTML.FORM("\n\t\t\t\t", HTML.DIV({
    class: "input-line"
  }, "\n\t\t\t\t\t", HTML.LABEL({
    for: "name"
  }, Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "Forward_to_department");
  })), "\n\t\t\t\t\t", HTML.DIV({
    class: "form-group"
  }, "\n\t\t\t\t\t\t", Blaze._TemplateWith(function() {
    return {
      onClickTag: Spacebars.call(view.lookup("onClickTagDepartment")),
      list: Spacebars.call(view.lookup("selectedDepartments")),
      onSelect: Spacebars.call(view.lookup("onSelectDepartments")),
      collection: Spacebars.call("CachedDepartmentList"),
      endpoint: Spacebars.call("livechat/department.autocomplete"),
      field: Spacebars.call("name"),
      sort: Spacebars.call("name"),
      icon: Spacebars.call("queue"),
      label: Spacebars.call("Enter_a_department_name"),
      placeholder: Spacebars.call("Enter_a_department_name"),
      name: Spacebars.call("department"),
      noMatchTemplate: Spacebars.call("roomSearchEmpty"),
      templateItem: Spacebars.call("popupList_item_channel"),
      template: Spacebars.call("roomSearch"),
      modifier: Spacebars.call(view.lookup("departmentModifier")),
      conditions: Spacebars.call(view.lookup("departmentConditions"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("livechatAutocompleteUser"));
  }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({
    class: "form-divisor"
  }, "\n\t\t\t\t\t", HTML.SPAN(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "or");
  })), "\n\t\t\t\t"), "\n\n\t\t\t\t", HTML.DIV({
    class: "input-line"
  }, "\n\t\t\t\t\t", HTML.LABEL({
    for: "agent"
  }, Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "Forward_to_user");
  })), "\n\t\t\t\t\t", HTML.DIV({
    class: "form-group"
  }, "\n\t\t\t\t\t\t", Blaze._TemplateWith(function() {
    return {
      onClickTag: Spacebars.call(view.lookup("onClickTagAgent")),
      list: Spacebars.call(view.lookup("selectedAgents")),
      onSelect: Spacebars.call(view.lookup("onSelectAgents")),
      collection: Spacebars.call("UserAndRoom"),
      endpoint: Spacebars.call("users.autocomplete"),
      field: Spacebars.call("username"),
      sort: Spacebars.call("username"),
      label: Spacebars.call("Select_a_user"),
      placeholder: Spacebars.call("Select_a_user"),
      name: Spacebars.call("agent"),
      icon: Spacebars.call("at"),
      noMatchTemplate: Spacebars.call("userSearchEmpty"),
      templateItem: Spacebars.call("popupList_item_default"),
      modifier: Spacebars.call(view.lookup("agentModifier")),
      conditions: Spacebars.call(view.lookup("agentConditions"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("livechatAutocompleteUser"));
  }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({
    class: "input-line"
  }, "\n\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "Leave_a_comment");
  }), " (", Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "optional");
  }), ")"), "\n\t\t\t\t\t", HTML.DIV({
    class: "form-group"
  }, "\n\t\t\t\t\t\t", HTML.TEXTAREA({
    name: "comment",
    class: "rc-input__element",
    rows: "6"
  }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({
    class: "rc-user-info__flex rc-user-info__row"
  }, "\n\t\t\t\t\t", HTML.BUTTON({
    class: "rc-button cancel",
    type: "button"
  }, HTML.SPAN(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "Cancel");
  }))), "\n\t\t\t\t\t", HTML.BUTTON({
    class: "rc-button rc-button--primary save"
  }, HTML.SPAN(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "Forward");
  }))), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/1993fc293c90476333f9dab3db144dd2d7017085.map
