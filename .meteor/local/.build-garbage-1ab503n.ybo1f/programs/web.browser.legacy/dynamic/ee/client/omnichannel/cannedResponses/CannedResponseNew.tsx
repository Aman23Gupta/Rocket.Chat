function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/cannedResponses/CannedResponseNew.tsx                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var CannedResponseEdit;
module.link("./CannedResponseEdit", {
  "default": function (v) {
    CannedResponseEdit = v;
  }
}, 1);

var CannedResponseNew = function (_ref) {
  var reload = _ref.reload,
      totalDataReload = _ref.totalDataReload;
  return /*#__PURE__*/React.createElement(CannedResponseEdit, {
    reload: reload,
    totalDataReload: totalDataReload,
    isNew: true
  });
};

module.exportDefault(CannedResponseNew);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/cannedResponses/22ba9a0251cc121bb6303b6592b8749c7c0b670f.map
