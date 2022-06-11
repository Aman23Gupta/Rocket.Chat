function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/lib/stream/inquiry.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  inquiryDataStream: function () {
    return inquiryDataStream;
  }
});
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var LIVECHAT_INQUIRY_QUEUE_STREAM_OBSERVER;
module.link("../../../lib/stream/constants", {
  LIVECHAT_INQUIRY_QUEUE_STREAM_OBSERVER: function (v) {
    LIVECHAT_INQUIRY_QUEUE_STREAM_OBSERVER = v;
  }
}, 1);
var inquiryDataStream = new Meteor.Streamer(LIVECHAT_INQUIRY_QUEUE_STREAM_OBSERVER);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/lib/stream/338343fba623e2a17b73eb9f5c4957b2e2124197.map
