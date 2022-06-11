function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/views/app/tabbar/visitorEditCustomField.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 0);
module.link("./visitorEditCustomField.html");
Template.visitorEditCustomField.helpers({
  optionsList() {
    if (!this.options) {
      return [];
    }

    return this.options.split(',');
  },

  selectedField(current) {
    const {
      fieldData: {
        value
      }
    } = Template.currentData();
    return value.trim() === current.trim();
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/views/app/tabbar/b847a12ce31ca97496bf6b2a69c5e9e0e119d8f0.map
