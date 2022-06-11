function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/exampleIncomingData.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);
module.export({
  useExampleData: function () {
    return useExampleData;
  }
});
var useMemo;
module.link("react", {
  useMemo: function (v) {
    useMemo = v;
  }
}, 0);

function useExampleData(_ref) {
  var additionalFields = _ref.additionalFields,
      url = _ref.url;
  return useMemo(function () {
    var exampleData = _objectSpread(_objectSpread({}, additionalFields), {}, {
      text: 'Example message',
      attachments: [{
        title: 'Rocket.Chat',
        title_link: 'https://rocket.chat',
        text: 'Rocket.Chat, the best open source chat',
        image_url: '/images/integration-attachment-example.png',
        color: '#764FA5'
      }]
    });

    return [exampleData, "curl -X POST -H 'Content-Type: application/json' --data '" + JSON.stringify(exampleData) + "' " + url];
  }, [additionalFields, url]);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/c7f91d73e10c3b00f3571e092a03141cf387807e.map
