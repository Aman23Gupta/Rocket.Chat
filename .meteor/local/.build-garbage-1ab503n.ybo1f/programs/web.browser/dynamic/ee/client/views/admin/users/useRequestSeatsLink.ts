function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/users/useRequestSeatsLink.ts                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useRequestSeatsLink: () => useRequestSeatsLink
});
let useAbsoluteUrl;
module.link("../../../../../client/contexts/ServerContext", {
  useAbsoluteUrl(v) {
    useAbsoluteUrl = v;
  }

}, 0);

const useRequestSeatsLink = () => useAbsoluteUrl()('/requestSeats');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/users/b2e069b3a443bf0939f1132dade40994e4d7d842.map
