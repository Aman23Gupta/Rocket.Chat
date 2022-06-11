function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/contextualBar/VisitorData.js                                               //
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
let RoomEdit;
module.link("./RoomEdit", {
  default(v) {
    RoomEdit = v;
  }

}, 6);

function VisitorData(_ref) {
  let {
    room,
    reload,
    reloadInfo,
    close
  } = _ref;
  const t = useTranslation();
  const {
    room: {
      v: {
        _id
      }
    }
  } = room;
  const {
    value: visitor,
    phase: stateVisitor,
    error: errorVisitor
  } = useEndpointData("livechat/visitors.info?visitorId=".concat(_id));

  if ([stateVisitor].includes(AsyncStatePhase.LOADING)) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  if (errorVisitor || !visitor || !visitor.visitor) {
    return /*#__PURE__*/React.createElement(Box, {
      mbs: "x16"
    }, t('Visitor_not_found'));
  }

  const {
    visitor: visitorData
  } = visitor;
  const {
    room: roomData
  } = room;
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/contextualBar/5e9c4c8526a2db28eb21fdf59d97c3191681f3f4.map
