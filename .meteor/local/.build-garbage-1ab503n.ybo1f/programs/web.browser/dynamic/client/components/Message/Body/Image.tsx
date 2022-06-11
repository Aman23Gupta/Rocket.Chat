function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Image.tsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
const style = {
  maxWidth: '100%'
};

const Image = _ref => {
  let {
    value
  } = _ref;
  const {
    src,
    label
  } = value;
  return /*#__PURE__*/React.createElement("a", {
    href: src.value,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("img", {
    src: src.value,
    "data-title": src.value,
    alt: String(label.value),
    style: style
  }));
};

module.exportDefault(Image);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/6481286056442d140f38b30b944a012d091c3aac.map
