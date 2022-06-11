function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/MainLayout/UsernameCheck.tsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 0);
var Users;
module.link("../../../../app/models/client", {
  Users: function (v) {
    Users = v;
  }
}, 1);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 2);
var useUserId;
module.link("../../../contexts/UserContext", {
  useUserId: function (v) {
    useUserId = v;
  }
}, 3);
var useReactiveValue;
module.link("../../../hooks/useReactiveValue", {
  useReactiveValue: function (v) {
    useReactiveValue = v;
  }
}, 4);
var BlazeTemplate;
module.link("../BlazeTemplate", {
  "default": function (v) {
    BlazeTemplate = v;
  }
}, 5);
var PasswordChangeCheck;
module.link("./PasswordChangeCheck", {
  "default": function (v) {
    PasswordChangeCheck = v;
  }
}, 6);
var useCustomScript;
module.link("./useCustomScript", {
  useCustomScript: function (v) {
    useCustomScript = v;
  }
}, 7);
var useViewportScrolling;
module.link("./useViewportScrolling", {
  useViewportScrolling: function (v) {
    useViewportScrolling = v;
  }
}, 8);

var UsernameCheck = function (_ref) {
  var children = _ref.children;
  useViewportScrolling();
  useCustomScript();
  var uid = useUserId();
  var allowAnonymousRead = useSetting('Accounts_AllowAnonymousRead');
  var hasUsername = useReactiveValue(useCallback(function () {
    var _user$username;

    if (!uid) {
      return allowAnonymousRead;
    }

    var user = uid ? Users.findOneById(uid, {
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
//# sourceMappingURL=/dynamic/client/views/root/MainLayout/fa5e54b8afede308eb37befbe256af73f5fb28fe.map
