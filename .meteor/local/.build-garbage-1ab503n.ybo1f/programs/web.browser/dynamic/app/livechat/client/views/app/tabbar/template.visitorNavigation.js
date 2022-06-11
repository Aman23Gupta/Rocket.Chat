function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/template.visitorNavigation.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("visitorNavigation");
Template["visitorNavigation"] = new Template("Template.visitorNavigation", (function() {
  var view = this;
  return HTML.DIV({
    class: "content"
  }, "\n\t\t", HTML.DIV({
    class: "list-view"
  }, "\n\t\t\t", HTML.H4(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "Navigation_History");
  })), "\n\t\t\t", HTML.DIV({
    class: "visitor-navigation"
  }, "\n\t\t\t\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("loadingNavigation"));
  }, function() {
    return [ "\n\t\t\t\t\t", Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "Loading...");
    }), "\n\t\t\t\t" ];
  }, function() {
    return [ "\n\t\t\t\t\t", HTML.DIV({
      class: "visitor-scroll"
    }, "\n\t\t\t\t\t\t", HTML.UL("\n\t\t\t\t\t\t\t", Blaze.Each(function() {
      return Spacebars.call(view.lookup("pages"));
    }, function() {
      return [ "\n\t\t\t\t\t\t\t\t", HTML.LI(HTML.A({
        href: function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("navigation"), "page", "location", "href"));
        },
        target: "_blank",
        title: function() {
          return Spacebars.mustache(view.lookup("accessDateTime"));
        }
      }, Blaze.View("lookup:pageTitle", function() {
        return Spacebars.mustache(view.lookup("pageTitle"));
      }))), "\n\t\t\t\t\t\t\t" ];
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];
  }), "\n\t\t\t"), "\n\t\t"), "\n\n\t");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/c0c14b1d9b0a8c97b6506bdde3a4524de9d5623c.map
