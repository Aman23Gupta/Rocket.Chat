function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/cannedResponses/CannedResponseNew.tsx                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let CannedResponseEdit;
module.link("./CannedResponseEdit", {
  default(v) {
    CannedResponseEdit = v;
  }

}, 1);

const CannedResponseNew = _ref => {
  let {
    reload,
    totalDataReload
  } = _ref;
  return /*#__PURE__*/React.createElement(CannedResponseEdit, {
    reload: reload,
    totalDataReload: totalDataReload,
    isNew: true
  });
};

module.exportDefault(CannedResponseNew);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/cannedResponses/dff2596fe15e32a02e9a69f24143bbfc47e2b557.map
