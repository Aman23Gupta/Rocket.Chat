function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Image.tsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var style = {
  maxWidth: '100%'
};

var Image = function (_ref) {
  var value = _ref.value;
  var src = value.src,
      label = value.label;
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
//# sourceMappingURL=/dynamic/client/components/Message/Body/163ebf171487fecb02d8e85b37d5c9babb4db3de.map
