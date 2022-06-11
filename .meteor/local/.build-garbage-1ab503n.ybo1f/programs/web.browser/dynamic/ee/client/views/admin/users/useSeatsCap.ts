function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/users/useSeatsCap.ts                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useSeatsCap: () => useSeatsCap
});
let useEndpointData;
module.link("../../../../../client/hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 0);

const useSeatsCap = () => {
  var _value$maxActiveUsers;

  const {
    value,
    reload
  } = useEndpointData('licenses.maxActiveUsers');

  if (!value) {
    return undefined;
  }

  return {
    activeUsers: value.activeUsers,
    maxActiveUsers: (_value$maxActiveUsers = value.maxActiveUsers) !== null && _value$maxActiveUsers !== void 0 ? _value$maxActiveUsers : Number.POSITIVE_INFINITY,
    reload
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/users/2e7e8e7e06183a9d49a74a1be1e96c1f7a69f009.map
