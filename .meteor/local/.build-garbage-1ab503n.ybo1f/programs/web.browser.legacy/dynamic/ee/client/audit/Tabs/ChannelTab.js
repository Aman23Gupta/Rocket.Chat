function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/Tabs/ChannelTab.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Field;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var RoomAutoComplete;
module.link("../RoomAutoComplete", {
  "default": function (v) {
    RoomAutoComplete = v;
  }
}, 3);

var ChannelTab = function (_ref) {
  var errors = _ref.errors,
      rid = _ref.rid,
      handleRid = _ref.handleRid;
  var t = useTranslation();
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
//# sourceMappingURL=/dynamic/ee/client/audit/Tabs/c3ab4395e768e03932a3048d38ec6478264fa440.map
