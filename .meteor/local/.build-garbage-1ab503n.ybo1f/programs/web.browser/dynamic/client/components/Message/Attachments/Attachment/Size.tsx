function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Attachment/Size.tsx                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["size"];

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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useFormatMemorySize;
module.link("../../../../hooks/useFormatMemorySize", {
  useFormatMemorySize(v) {
    useFormatMemorySize = v;
  }

}, 1);
let Title;
module.link("./Title", {
  default(v) {
    Title = v;
  }

}, 2);

const Size = _ref => {
  let {
    size
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const format = useFormatMemorySize();
  return /*#__PURE__*/React.createElement(Title, _extends({
    flexShrink: 0
  }, props), "(", format(size), ")");
};

module.exportDefault(Size);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Attachment/54d59df7b25081178efc91e2d977615cde114c93.map
