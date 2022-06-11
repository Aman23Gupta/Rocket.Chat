function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/getUserEmailAddress.ts                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getUserEmailAddress: () => getUserEmailAddress
});

const getUserEmailAddress = user => {
  var _user$emails$find;

  return Array.isArray(user.emails) ? (_user$emails$find = user.emails.find(_ref => {
    let {
      address
    } = _ref;
    return !!address;
  })) === null || _user$emails$find === void 0 ? void 0 : _user$emails$find.address : undefined;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/lib/e110275f316e44e0a3e3540f90360d5dcc1c26a6.map
