function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/users/useSeatsCap.ts                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useSeatsCap: function () {
    return useSeatsCap;
  }
});
var useEndpointData;
module.link("../../../../../client/hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 0);

var useSeatsCap = function () {
  var _value$maxActiveUsers;

  var _useEndpointData = useEndpointData('licenses.maxActiveUsers'),
      value = _useEndpointData.value,
      reload = _useEndpointData.reload;

  if (!value) {
    return undefined;
  }

  return {
    activeUsers: value.activeUsers,
    maxActiveUsers: (_value$maxActiveUsers = value.maxActiveUsers) !== null && _value$maxActiveUsers !== void 0 ? _value$maxActiveUsers : Number.POSITIVE_INFINITY,
    reload: reload
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/users/a002500103b1b8fb141faef8bed0cfed34b2b8bc.map
