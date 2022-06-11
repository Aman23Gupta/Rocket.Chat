function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/contextualBar/RoomEditWithData.js                                          //
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
var VisitorData;
module.link("./VisitorData", {
  "default": function (v) {
    VisitorData = v;
  }
}, 6);

function RoomEditWithData(_ref) {
  var id = _ref.id,
      reload = _ref.reload,
      reloadInfo = _ref.reloadInfo,
      close = _ref.close;
  var t = useTranslation();

  var _useEndpointData = useEndpointData("rooms.info?roomId=" + id),
      roomData = _useEndpointData.value,
      state = _useEndpointData.phase,
      error = _useEndpointData.error;

  if ([state].includes(AsyncStatePhase.LOADING)) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  if (error || !roomData || !roomData.room) {
    return /*#__PURE__*/React.createElement(Box, {
      mbs: "x16"
    }, t('Room_not_found'));
  }

  return /*#__PURE__*/React.createElement(VisitorData, {
    room: roomData,
    reload: reload,
    reloadInfo: reloadInfo,
    close: close
  });
}

module.exportDefault(RoomEditWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/contextualBar/8cdbefda4646421d094551a9f3302ac07a76c802.map
