function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/login/AppleOauth/AppleOauthButton.tsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);
module.export({
  AppleOauthButton: function () {
    return AppleOauthButton;
  }
});
var Accounts;
module.link("meteor/accounts-base", {
  Accounts: function (v) {
    Accounts = v;
  }
}, 0);
var React, useCallback, useEffect, useLayoutEffect, useRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useLayoutEffect: function (v) {
    useLayoutEffect = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 1);
var useAbsoluteUrl;
module.link("../../../contexts/ServerContext", {
  useAbsoluteUrl: function (v) {
    useAbsoluteUrl = v;
  }
}, 2);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 3);

var AppleOauthButton = function () {
  var enabled = useSetting('Accounts_OAuth_Apple');
  var absoluteUrl = useAbsoluteUrl();
  var appleClientID = useSetting('Accounts_OAuth_Apple_id');
  var redirectURI = absoluteUrl('_oauth/apple');
  useEffect(function () {
    var success = function (data) {
      var _data$detail = data.detail,
          authorization = _data$detail.authorization,
          user = _data$detail.user;
      Accounts.callLoginMethod({
        methodArguments: [_objectSpread({
          serviceName: 'apple',
          identityToken: authorization.id_token
        }, user && {
          fullName: {
            givenName: user.name.firstName,
            familyName: user.name.lastName
          },
          email: user.email
        })],
        userCallback: console.log
      });
    };

    var error = function (error) {
      // handle error.
      console.error(error);
    };

    document.addEventListener('AppleIDSignInOnSuccess', success); // Listen for authorization failures

    document.addEventListener('AppleIDSignInOnFailure', error);
    return function () {
      document.removeEventListener('AppleIDSignInOnSuccess', success);
      document.removeEventListener('AppleIDSignInOnFailure', error);
    };
  }, []);
  var scriptLoadedHandler = useCallback(function () {
    if (!enabled) {
      return;
    }

    window.AppleID.auth.init({
      clientId: appleClientID,
      scope: 'name email',
      redirectURI: redirectURI,
      usePopup: true
    });
  }, [enabled, appleClientID, redirectURI]);
  var ref = useRef();
  useEffect(function () {
    if (window.AppleID) {
      scriptLoadedHandler();
      return;
    }

    if (!ref.current) {
      return;
    }

    ref.current.onload = scriptLoadedHandler;
  }, [scriptLoadedHandler]);
  useLayoutEffect(function () {
    var script = document.createElement('script');
    script.src = 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js';
    script.async = true;
    ref.current = script;
    document.body.appendChild(script);
    return function () {
      document.body.removeChild(script);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    id: "appleid-signin",
    "data-height": "40px"
  });
};

module.exportDefault(AppleOauthButton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/login/AppleOauth/07196ab04a87af9c77a985d513f0304eccbbd33a.map
