function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/Tabs/ChannelTab.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Field;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let RoomAutoComplete;
module.link("../RoomAutoComplete", {
  default(v) {
    RoomAutoComplete = v;
  }

}, 3);

const ChannelTab = _ref => {
  let {
    errors,
    rid,
    handleRid
  } = _ref;
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Channel_name')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(RoomAutoComplete, {
    error: errors.rid,
    value: rid,
    onChange: handleRid,
    placeholder: t('Channel_Name_Placeholder')
  })), errors.rid && /*#__PURE__*/React.createElement(Field.Error, null, errors.rid));
};

module.exportDefault(ChannelTab);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/audit/Tabs/d8f3bf9026d3022b9738c1c3b5ad66978caa621d.map
