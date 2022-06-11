function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/contextualBar/SourceField.tsx                                              //
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
var OmnichannelRoomIcon;
module.link("../../../../../components/RoomIcon/OmnichannelRoomIcon", {
  OmnichannelRoomIcon: function (v) {
    OmnichannelRoomIcon = v;
  }
}, 2);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var Field;
module.link("../../../components/Field", {
  "default": function (v) {
    Field = v;
  }
}, 4);
var Info;
module.link("../../../components/Info", {
  "default": function (v) {
    Info = v;
  }
}, 5);
var Label;
module.link("../../../components/Label", {
  "default": function (v) {
    Label = v;
  }
}, 6);

var SourceField = function (_ref) {
  var room = _ref.room;
  var t = useTranslation();
  var roomSource = room.source.alias || room.source.id || room.source.type; // TODO: create a hook that gets the default types values (alias, icons, ids, etc...)
  // so we don't have to write this object again and again

  var defaultTypesLabels = {
    widget: t('Livechat'),
    email: t('Email'),
    sms: t('SMS'),
    app: room.source.alias || t('Custom_Integration'),
    api: room.source.alias || t('Custom_Integration'),
    other: t('Custom_Integration')
  };
  var defaultTypesVisitorData = {
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/contextualBar/4f922741011fc2c8d410ea9ca67fef4f47acd038.map
