function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/utils/getUserEmailVerified.ts                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getUserEmailVerified: () => getUserEmailVerified
});

const getUserEmailVerified = user => {
  var _user$emails$find;

  return Array.isArray(user.emails) ? (_user$emails$find = user.emails.find(_ref => {
    let {
      verified
    } = _ref;
    return !!verified;
  })) === null || _user$emails$find === void 0 ? void 0 : _user$emails$find.verified : undefined;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/utils/54aa446c6330ececf33531f48f0ae157852d637f.map
