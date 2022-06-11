function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/facebook/PageToggle.tsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Field, ToggleSwitch;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Field(v) {
    Field = v;
  },

  ToggleSwitch(v) {
    ToggleSwitch = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);

const PageToggle = _ref => {
  let {
    name,
    id,
    subscribed,
    onToggle,
    className
  } = _ref;
  const [isSubscribed, setIsSubscribed] = useState(subscribed);
  const handleToggle = useMutableCallback(() => onToggle(id, isSubscribed, setIsSubscribed));
  return /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Field.Label, null, name), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: isSubscribed,
    onChange: handleToggle
  }))));
};

module.exportDefault(PageToggle);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/facebook/a316cee1375b049d56190772902e9d50894df343.map
