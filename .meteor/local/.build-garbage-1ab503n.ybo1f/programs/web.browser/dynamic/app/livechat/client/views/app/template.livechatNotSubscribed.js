function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/template.livechatNotSubscribed.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("livechatNotSubscribed");
Template["livechatNotSubscribed"] = new Template("Template.livechatNotSubscribed", (function() {
  var view = this;
  return HTML.P(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "This_conversation_is_already_closed");
  }));
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/3e5c951410b03b37888a22835fe11c504a42a338.map
