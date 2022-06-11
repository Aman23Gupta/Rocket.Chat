function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/contextualBar/RoomEditWithData.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let AsyncStatePhase;
module.link("../../../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 3);
let useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 4);
let FormSkeleton;
module.link("../../Skeleton", {
  FormSkeleton(v) {
    FormSkeleton = v;
  }

}, 5);
let VisitorData;
module.link("./VisitorData", {
  default(v) {
    VisitorData = v;
  }

}, 6);

function RoomEditWithData(_ref) {
  let {
    id,
    reload,
    reloadInfo,
    close
  } = _ref;
  const t = useTranslation();
  const {
    value: roomData,
    phase: state,
    error
  } = useEndpointData("rooms.info?roomId=".concat(id));

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
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/contextualBar/117f2a836bd2a1a6cdf9a7a6f9d00efb62de6345.map
