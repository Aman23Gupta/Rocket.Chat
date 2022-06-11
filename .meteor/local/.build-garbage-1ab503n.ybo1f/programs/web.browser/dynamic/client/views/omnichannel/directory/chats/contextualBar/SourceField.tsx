function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/contextualBar/SourceField.tsx                                              //
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
let OmnichannelRoomIcon;
module.link("../../../../../components/RoomIcon/OmnichannelRoomIcon", {
  OmnichannelRoomIcon(v) {
    OmnichannelRoomIcon = v;
  }

}, 2);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let Field;
module.link("../../../components/Field", {
  default(v) {
    Field = v;
  }

}, 4);
let Info;
module.link("../../../components/Info", {
  default(v) {
    Info = v;
  }

}, 5);
let Label;
module.link("../../../components/Label", {
  default(v) {
    Label = v;
  }

}, 6);

const SourceField = _ref => {
  let {
    room
  } = _ref;
  const t = useTranslation();
  const roomSource = room.source.alias || room.source.id || room.source.type; // TODO: create a hook that gets the default types values (alias, icons, ids, etc...)
  // so we don't have to write this object again and again

  const defaultTypesLabels = {
    widget: t('Livechat'),
    email: t('Email'),
    sms: t('SMS'),
    app: room.source.alias || t('Custom_Integration'),
    api: room.source.alias || t('Custom_Integration'),
    other: t('Custom_Integration')
  };
  const defaultTypesVisitorData = {
    widget: '',
    email: room === null || room === void 0 ? void 0 : room.source.id,
    sms: t('External'),
    app: room.source.label || t('External'),
    api: room.source.label || t('External'),
    other: t('External')
  };
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Channel')), /*#__PURE__*/React.createElement(Info, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(OmnichannelRoomIcon, {
    room: room,
    size: "x24",
    placement: "default"
  }), /*#__PURE__*/React.createElement(Label, {
    mi: "x8",
    mbe: "0"
  }, defaultTypesLabels[room.source.type] || roomSource), defaultTypesVisitorData[room.source.type])));
};

module.exportDefault(SourceField);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/contextualBar/78fadd73e7af841a42ccc5025bed3d16836897a6.map
