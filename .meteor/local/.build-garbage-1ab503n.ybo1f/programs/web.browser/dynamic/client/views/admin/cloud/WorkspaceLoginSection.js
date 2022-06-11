function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/cloud/WorkspaceLoginSection.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onRegisterStatusChange"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Box, Button, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  }

}, 0);
let useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useSafely(v) {
    useSafely = v;
  }

}, 1);
let React, useState, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 2);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 3);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);

function WorkspaceLoginSection(_ref) {
  let {
    onRegisterStatusChange
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const checkUserLoggedIn = useMethod('cloud:checkUserLoggedIn');
  const getOAuthAuthorizationUrl = useMethod('cloud:getOAuthAuthorizationUrl');
  const logout = useMethod('cloud:logout');
  const disconnectWorkspace = useMethod('cloud:disconnectWorkspace');
  const [isLoggedIn, setLoggedIn] = useSafely(useState(false));
  const [isLoading, setLoading] = useSafely(useState(true));

  const handleLoginButtonClick = async () => {
    setLoading(true);

    try {
      const url = await getOAuthAuthorizationUrl();
      window.location.href = url;
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogoutButtonClick = async () => {
    setLoading(true);

    try {
      await logout();
      const isLoggedIn = await checkUserLoggedIn();
      setLoggedIn(isLoggedIn);
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDisconnectButtonClick = async () => {
    setLoading(true);

    try {
      const success = await disconnectWorkspace();

      if (!success) {
        throw Error(t('An error occured disconnecting'));
      }

      dispatchToastMessage({
        type: 'success',
        message: t('Disconnected')
      });
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    } finally {
      await (onRegisterStatusChange && onRegisterStatusChange());
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkLoginState = async () => {
      setLoading(true);

      try {
        const isLoggedIn = await checkUserLoggedIn();
        setLoggedIn(isLoggedIn);
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      } finally {
        setLoading(false);
      }
    };

    checkLoginState();
  }, [checkUserLoggedIn, dispatchToastMessage, setLoading, setLoggedIn]);
  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "section"
  }, props), /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    color: "neutral-800"
  }, /*#__PURE__*/React.createElement("p", null, t('Cloud_workspace_connected'))), /*#__PURE__*/React.createElement(ButtonGroup, null, isLoggedIn ? /*#__PURE__*/React.createElement(Button, {
    primary: true,
    danger: true,
    disabled: isLoading,
    onClick: handleLogoutButtonClick
  }, t('Cloud_logout')) : /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: isLoading,
    onClick: handleLoginButtonClick
  }, t('Cloud_login_to_cloud'))), /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    color: "neutral-800"
  }, /*#__PURE__*/React.createElement("p", null, t('Cloud_workspace_disconnect'))), /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    danger: true,
    disabled: isLoading,
    onClick: handleDisconnectButtonClick
  }, t('Disconnect'))));
}

module.exportDefault(WorkspaceLoginSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/cloud/850294415dbe70f89d12fb19a493b96e85ffbc52.map
