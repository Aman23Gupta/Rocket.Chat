function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/NotificationPreferences/components/NotificationToogle.js                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Field, FieldGroup, ToggleSwitch;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Field: function (v) {
    Field = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  ToggleSwitch: function (v) {
    ToggleSwitch = v;
  }
}, 0);
var useUniqueId;
module.link("@rocket.chat/fuselage-hooks", {
  useUniqueId: function (v) {
    useUniqueId = v;
  }
}, 1);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 2);

var NotificationToogle = function (_ref) {
  var label = _ref.label,
      description = _ref.description,
      onChange = _ref.onChange,
      defaultChecked = _ref.defaultChecked;
  var id = useUniqueId();
  return /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: id
  }, label), /*#__PURE__*/React.createElement(Field.Description, null, description)), /*#__PURE__*/React.createElement(ToggleSwitch, {
    id: id,
    onChange: onChange,
    defaultChecked: defaultChecked
  })));
};

module.exportDefault( /*#__PURE__*/memo(NotificationToogle));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/NotificationPreferences/components/e0da344ad83dbf5923e38620b5170d6c71aadcf5.map
