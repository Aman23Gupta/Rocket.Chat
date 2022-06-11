function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/RawText.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);

const RawText = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: children
    }
  });
};

module.exportDefault(RawText);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/7b6e6fa173190cd9ee8ef05c3abf63032c9e18e3.map
