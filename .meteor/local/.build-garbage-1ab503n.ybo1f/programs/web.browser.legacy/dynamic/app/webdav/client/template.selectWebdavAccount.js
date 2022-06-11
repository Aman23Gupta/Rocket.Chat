function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/webdav/client/template.selectWebdavAccount.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("selectWebdavAccount");
Template["selectWebdavAccount"] = new Template("Template.selectWebdavAccount", (function() {
  var view = this;
  return HTML.DIV({
    class: "flex-tab__result list-view"
  }, "\n\t\t", HTML.UL({
    class: "list clearfix lines"
  }, "\n\t\t\t", Blaze.Each(function() {
    return Spacebars.call(view.lookup("webdavAccounts"));
  }, function() {
    return [ "\n\t\t\t\t", HTML.LI({
      class: "rc-member-list__user webdav-account",
      id: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
      }
    }, "\n\t\t\t\t\t", HTML.DIV({
      class: "rc-member-list__username"
    }, "\n\t\t\t\t\t\t", Blaze.View("lookup:usernamePlusServer", function() {
      return Spacebars.mustache(view.lookup("usernamePlusServer"), view.lookup("."));
    }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t" ];
  }), "\n\t\t"), "\n\t");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/webdav/client/4fff5388fcaa06a187f4f24f44f66052c0702d3e.map
