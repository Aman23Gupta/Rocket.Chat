function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/contextualBar/VisitorData.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var AsyncStatePhase;
module.link("../../../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 3);
var useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 4);
var FormSkeleton;
module.link("../../Skeleton", {
  FormSkeleton: function (v) {
    FormSkeleton = v;
  }
}, 5);
var RoomEdit;
module.link("./RoomEdit", {
  "default": function (v) {
    RoomEdit = v;
  }
}, 6);

function VisitorData(_ref) {
  var room = _ref.room,
      reload = _ref.reload,
      reloadInfo = _ref.reloadInfo,
      close = _ref.close;
  var t = useTranslation();
  var _id = room.room.v._id;

  var _useEndpointData = useEndpointData("livechat/visitors.info?visitorId=" + _id),
      visitor = _useEndpointData.value,
      stateVisitor = _useEndpointData.phase,
      errorVisitor = _useEndpointData.error;

  if ([stateVisitor].includes(AsyncStatePhase.LOADING)) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  if (errorVisitor || !visitor || !visitor.visitor) {
    return /*#__PURE__*/React.createElement(Box, {
      mbs: "x16"
    }, t('Visitor_not_found'));
  }

  var visitorData = visitor.visitor;
  var roomData = room.room;
  return /*#__PURE__*/React.createElement(RoomEdit, {
    room: roomData,
    visitor: visitorData,
    reload: reload,
    reloadInfo: reloadInfo,
    close: close
  });
}

module.exportDefault(VisitorData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/contextualBar/51b1fedcde42cf80a17faa24acef75db8fc0fd90.map
