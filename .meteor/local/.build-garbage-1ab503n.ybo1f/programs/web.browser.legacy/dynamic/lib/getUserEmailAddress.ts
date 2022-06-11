function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/getUserEmailAddress.ts                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getUserEmailAddress: function () {
    return getUserEmailAddress;
  }
});

var getUserEmailAddress = function (user) {
  var _user$emails$find;

  return Array.isArray(user.emails) ? (_user$emails$find = user.emails.find(function (_ref) {
    var address = _ref.address;
    return !!address;
  })) === null || _user$emails$find === void 0 ? void 0 : _user$emails$find.address : undefined;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/lib/5c4b10ff4c4899663884d285ee9cfcc49445613b.map
