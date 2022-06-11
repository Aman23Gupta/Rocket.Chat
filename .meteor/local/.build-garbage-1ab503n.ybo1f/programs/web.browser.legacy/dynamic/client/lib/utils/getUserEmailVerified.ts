function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/utils/getUserEmailVerified.ts                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getUserEmailVerified: function () {
    return getUserEmailVerified;
  }
});

var getUserEmailVerified = function (user) {
  var _user$emails$find;

  return Array.isArray(user.emails) ? (_user$emails$find = user.emails.find(function (_ref) {
    var verified = _ref.verified;
    return !!verified;
  })) === null || _user$emails$find === void 0 ? void 0 : _user$emails$find.verified : undefined;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/utils/24cddd8912ef0528537a0fcfa04bbffd41e3b148.map
