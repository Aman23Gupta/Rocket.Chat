function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/priorities/PriorityNew.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var PriorityEdit;
module.link("./PriorityEdit", {
  "default": function (v) {
    PriorityEdit = v;
  }
}, 1);

function PriorityNew(_ref) {
  var reload = _ref.reload;
  return /*#__PURE__*/React.createElement(PriorityEdit, {
    isNew: true,
    reload: reload
  });
}

module.exportDefault(PriorityNew);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/priorities/023adb96a543481f9ba189912297e5e321e6823c.map
