function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/exampleIncomingData.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
module.export({
  useExampleData: () => useExampleData
});
let useMemo;
module.link("react", {
  useMemo(v) {
    useMemo = v;
  }

}, 0);

function useExampleData(_ref) {
  let {
    additionalFields,
    url
  } = _ref;
  return useMemo(() => {
    const exampleData = _objectSpread(_objectSpread({}, additionalFields), {}, {
      text: 'Example message',
      attachments: [{
        title: 'Rocket.Chat',
        title_link: 'https://rocket.chat',
        text: 'Rocket.Chat, the best open source chat',
        image_url: '/images/integration-attachment-example.png',
        color: '#764FA5'
      }]
    });

    return [exampleData, "curl -X POST -H 'Content-Type: application/json' --data '".concat(JSON.stringify(exampleData), "' ").concat(url)];
  }, [additionalFields, url]);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/3c1d90984c1402d34374c79a14d5f802d704ede8.map
