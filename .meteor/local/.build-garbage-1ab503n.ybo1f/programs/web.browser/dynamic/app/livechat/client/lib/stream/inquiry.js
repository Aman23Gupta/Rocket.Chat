function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/livechat/client/lib/stream/inquiry.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  inquiryDataStream: () => inquiryDataStream
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let LIVECHAT_INQUIRY_QUEUE_STREAM_OBSERVER;
module.link("../../../lib/stream/constants", {
  LIVECHAT_INQUIRY_QUEUE_STREAM_OBSERVER(v) {
    LIVECHAT_INQUIRY_QUEUE_STREAM_OBSERVER = v;
  }

}, 1);
const inquiryDataStream = new Meteor.Streamer(LIVECHAT_INQUIRY_QUEUE_STREAM_OBSERVER);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/livechat/client/lib/stream/91f500c1736573d84a6aba42be80536145223bbd.map
