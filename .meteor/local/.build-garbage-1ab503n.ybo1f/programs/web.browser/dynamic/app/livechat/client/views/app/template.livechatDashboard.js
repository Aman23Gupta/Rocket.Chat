function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/template.livechatDashboard.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("livechatDashboard");
Template["livechatDashboard"] = new Template("Template.livechatDashboard", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return "view-livechat-manager";
  }, function() {
    return Spacebars.include(view.lookupTemplate("requiresPermission"), function() {
      return HTML.Raw("\n\t\t<h1>Dashboard</h1>\n\t");
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/7042ad83f80124fc322d98eca0a9aebee540c46c.map
