function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/components/MessageTemplate/Message.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["className"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
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
let isIterable;
module.link("./isIterable", {
  isIterable(v) {
    isIterable = v;
  }

}, 2);

function Message(_ref) {
  let {
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Box, _extends({
    "rcx-message": true,
    pi: "x20",
    pb: "x16",
    pbs: "x16",
    display: "flex"
  }, props, {
    className: [...(isIterable(className) ? className : [className])].filter(Boolean)
  }));
}

module.exportDefault(Message);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/components/MessageTemplate/966c9f76810c8f6cca34841fa326822b53c975a3.map
