function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/visitorEditCustomField.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.link("meteor/templating", {
  Template: function (v) {
    Template = v;
  }
}, 0);
module.link("./visitorEditCustomField.html");
Template.visitorEditCustomField.helpers({
  optionsList: function () {
    if (!this.options) {
      return [];
    }

    return this.options.split(',');
  },
  selectedField: function (current) {
    var _Template$currentData = Template.currentData(),
        value = _Template$currentData.fieldData.value;

    return value.trim() === current.trim();
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/66b431fd5f9a757b656b28f954132de34911a0f7.map
