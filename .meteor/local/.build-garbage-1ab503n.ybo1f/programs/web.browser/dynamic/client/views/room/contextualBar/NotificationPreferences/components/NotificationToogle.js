function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/NotificationPreferences/components/NotificationToogle.js                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Field, FieldGroup, ToggleSwitch;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Field(v) {
    Field = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  },

  ToggleSwitch(v) {
    ToggleSwitch = v;
  }

}, 0);
let useUniqueId;
module.link("@rocket.chat/fuselage-hooks", {
  useUniqueId(v) {
    useUniqueId = v;
  }

}, 1);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 2);

const NotificationToogle = _ref => {
  let {
    label,
    description,
    onChange,
    defaultChecked
  } = _ref;
  const id = useUniqueId();
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/NotificationPreferences/components/5bbc7c02af47364af1c01009b5b1ec593b866e56.map
