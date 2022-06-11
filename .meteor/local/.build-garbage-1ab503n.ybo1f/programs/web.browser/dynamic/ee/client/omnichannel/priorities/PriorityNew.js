function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/priorities/PriorityNew.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let PriorityEdit;
module.link("./PriorityEdit", {
  default(v) {
    PriorityEdit = v;
  }

}, 1);

function PriorityNew(_ref) {
  let {
    reload
  } = _ref;
  return /*#__PURE__*/React.createElement(PriorityEdit, {
    isNew: true,
    reload: reload
  });
}

module.exportDefault(PriorityNew);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/priorities/a3ad9f86d0fce71dfe291fed3b9d3ee1efcbf8ca.map
