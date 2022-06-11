function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/login/AppleOauth/AppleOauthButton.tsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
module.export({
  AppleOauthButton: () => AppleOauthButton
});
let Accounts;
module.link("meteor/accounts-base", {
  Accounts(v) {
    Accounts = v;
  }

}, 0);
let React, useCallback, useEffect, useLayoutEffect, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useLayoutEffect(v) {
    useLayoutEffect = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 1);
let useAbsoluteUrl;
module.link("../../../contexts/ServerContext", {
  useAbsoluteUrl(v) {
    useAbsoluteUrl = v;
  }

}, 2);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 3);

const AppleOauthButton = () => {
  const enabled = useSetting('Accounts_OAuth_Apple');
  const absoluteUrl = useAbsoluteUrl();
  const appleClientID = useSetting('Accounts_OAuth_Apple_id');
  const redirectURI = absoluteUrl('_oauth/apple');
  useEffect(() => {
    const success = data => {
      const {
        authorization,
        user
      } = data.detail;
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

    const error = error => {
      // handle error.
      console.error(error);
    };

    document.addEventListener('AppleIDSignInOnSuccess', success); // Listen for authorization failures

    document.addEventListener('AppleIDSignInOnFailure', error);
    return () => {
      document.removeEventListener('AppleIDSignInOnSuccess', success);
      document.removeEventListener('AppleIDSignInOnFailure', error);
    };
  }, []);
  const scriptLoadedHandler = useCallback(() => {
    if (!enabled) {
      return;
    }

    window.AppleID.auth.init({
      clientId: appleClientID,
      scope: 'name email',
      redirectURI,
      usePopup: true
    });
  }, [enabled, appleClientID, redirectURI]);
  const ref = useRef();
  useEffect(() => {
    if (window.AppleID) {
      scriptLoadedHandler();
      return;
    }

    if (!ref.current) {
      return;
    }

    ref.current.onload = scriptLoadedHandler;
  }, [scriptLoadedHandler]);
  useLayoutEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js';
    script.async = true;
    ref.current = script;
    document.body.appendChild(script);
    return () => {
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
//# sourceMappingURL=/dynamic/client/views/login/AppleOauth/fb03db6a2912e91facd383885088a2e7d6eea53b.map
