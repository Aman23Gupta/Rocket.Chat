function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Plain.tsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 0);

const Plain = _ref => {
  let {
    value
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, value.type === 'PLAIN_TEXT' && value.value);
};

module.exportDefault( /*#__PURE__*/memo(Plain));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/9f67630b50a6f57f44f17042512bfaa9d0598aed.map
