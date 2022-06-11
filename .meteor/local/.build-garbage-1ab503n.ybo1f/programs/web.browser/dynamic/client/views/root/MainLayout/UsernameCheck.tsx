function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/MainLayout/UsernameCheck.tsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 0);
let Users;
module.link("../../../../app/models/client", {
  Users(v) {
    Users = v;
  }

}, 1);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 2);
let useUserId;
module.link("../../../contexts/UserContext", {
  useUserId(v) {
    useUserId = v;
  }

}, 3);
let useReactiveValue;
module.link("../../../hooks/useReactiveValue", {
  useReactiveValue(v) {
    useReactiveValue = v;
  }

}, 4);
let BlazeTemplate;
module.link("../BlazeTemplate", {
  default(v) {
    BlazeTemplate = v;
  }

}, 5);
let PasswordChangeCheck;
module.link("./PasswordChangeCheck", {
  default(v) {
    PasswordChangeCheck = v;
  }

}, 6);
let useCustomScript;
module.link("./useCustomScript", {
  useCustomScript(v) {
    useCustomScript = v;
  }

}, 7);
let useViewportScrolling;
module.link("./useViewportScrolling", {
  useViewportScrolling(v) {
    useViewportScrolling = v;
  }

}, 8);

const UsernameCheck = _ref => {
  let {
    children
  } = _ref;
  useViewportScrolling();
  useCustomScript();
  const uid = useUserId();
  const allowAnonymousRead = useSetting('Accounts_AllowAnonymousRead');
  const hasUsername = useReactiveValue(useCallback(() => {
    var _user$username;

    if (!uid) {
      return allowAnonymousRead;
    }

    const user = uid ? Users.findOneById(uid, {
      fields: {
        username: 1
      }
    }) : null;
    return (_user$username = user === null || user === void 0 ? void 0 : user.username) !== null && _user$username !== void 0 ? _user$username : false;
  }, [uid, allowAnonymousRead]));

  if (!hasUsername) {
    return /*#__PURE__*/React.createElement(BlazeTemplate, {
      template: "username"
    });
  }

  return /*#__PURE__*/React.createElement(PasswordChangeCheck, null, children);
};

module.exportDefault(UsernameCheck);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/MainLayout/84239f40949fc558a168d4ea057a87c0604a5737.map
