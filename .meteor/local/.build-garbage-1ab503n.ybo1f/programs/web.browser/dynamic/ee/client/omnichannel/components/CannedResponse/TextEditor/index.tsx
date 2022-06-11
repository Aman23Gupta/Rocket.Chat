function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/CannedResponse/TextEditor/index.tsx                                                //
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
let Textarea;
module.link("./Textarea", {
  default(v) {
    Textarea = v;
  }

}, 2);
let Toolbox;
module.link("./Toolbox", {
  default(v) {
    Toolbox = v;
  }

}, 3);

const TextEditor = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    pbs: "12px",
    pi: "16px",
    pbe: "16px",
    "rcx-box--animated": true,
    "rcx-input-box__wrapper": true
  }, children);
};

module.exportDefault(Object.assign(TextEditor, {
  Toolbox,
  Textarea
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/CannedResponse/TextEditor/dc0aaeef11c3e557fc5845674ace4aaad66387dd.map
