function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/meet/OngoingCallDuration.tsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React, useEffect, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);

const OngoingCallDuration = _ref => {
  let {
    counter: defaultCounter = 0
  } = _ref;
  const [counter, setCounter] = useState(defaultCounter);
  useEffect(() => {
    setTimeout(() => setCounter(counter + 1), 1000);
  }, [counter]);
  return /*#__PURE__*/React.createElement(Box, {
    color: "#E4E7EA",
    textAlign: "center"
  }, new Date(counter * 1000).toISOString().substr(11, 8));
};

module.exportDefault(OngoingCallDuration);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/meet/50cdc7f696f6723c8e89c2e00a6331db51573127.map
