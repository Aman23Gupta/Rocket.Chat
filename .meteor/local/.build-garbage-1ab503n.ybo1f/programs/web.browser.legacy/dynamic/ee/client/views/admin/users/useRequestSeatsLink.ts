function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/users/useRequestSeatsLink.ts                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useRequestSeatsLink: function () {
    return useRequestSeatsLink;
  }
});
var useAbsoluteUrl;
module.link("../../../../../client/contexts/ServerContext", {
  useAbsoluteUrl: function (v) {
    useAbsoluteUrl = v;
  }
}, 0);

var useRequestSeatsLink = function () {
  return useAbsoluteUrl()('/requestSeats');
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/users/6c68fa2ab0541d0863bfcb39af723d9e4e600c3c.map
