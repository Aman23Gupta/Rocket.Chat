function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Metrics/Reply.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let Button;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let ContentItem;
module.link("./ContentItem", {
  default(v) {
    ContentItem = v;
  }

}, 2);

const Reply = props => /*#__PURE__*/React.createElement(ContentItem, null, /*#__PURE__*/React.createElement(Button, _extends({}, props, {
  small: true,
  primary: true
})));

module.exportDefault(Reply);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Metrics/502b0353931b32ac28308f91a952628ce417965c.map
