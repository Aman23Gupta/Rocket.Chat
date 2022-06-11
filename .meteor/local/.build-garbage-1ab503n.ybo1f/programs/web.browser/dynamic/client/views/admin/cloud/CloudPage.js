function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/cloud/CloudPage.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Button, ButtonGroup, Margins;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Margins(v) {
    Margins = v;
  }

}, 0);
let useMutableCallback, useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  },

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
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 3);
let useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 4);
let useQueryStringParameter, useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useQueryStringParameter(v) {
    useQueryStringParameter = v;
  },

  useRoute(v) {
    useRoute = v;
  },

  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 5);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 6);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 7);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 8);
let ConnectToCloudSection;
module.link("./ConnectToCloudSection", {
  default(v) {
    ConnectToCloudSection = v;
  }

}, 9);
let ManualWorkspaceRegistrationModal;
module.link("./ManualWorkspaceRegistrationModal", {
  default(v) {
    ManualWorkspaceRegistrationModal = v;
  }

}, 10);
let TroubleshootingSection;
module.link("./TroubleshootingSection", {
  default(v) {
    TroubleshootingSection = v;
  }

}, 11);
let WhatIsItSection;
module.link("./WhatIsItSection", {
  default(v) {
    WhatIsItSection = v;
  }

}, 12);
let WorkspaceLoginSection;
module.link("./WorkspaceLoginSection", {
  default(v) {
    WorkspaceLoginSection = v;
  }

}, 13);
let WorkspaceRegistrationSection;
module.link("./WorkspaceRegistrationSection", {
  default(v) {
    WorkspaceRegistrationSection = v;
  }

}, 14);
let cloudConsoleUrl;
module.link("./constants", {
  cloudConsoleUrl(v) {
    cloudConsoleUrl = v;
  }

}, 15);

function CloudPage() {
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const cloudRoute = useRoute('cloud');
  const page = useRouteParameter('page');
  const errorCode = useQueryStringParameter('error_code');
  const code = useQueryStringParameter('code');
  const state = useQueryStringParameter('state');
  const token = useQueryStringParameter('token');
  const finishOAuthAuthorization = useMethod('cloud:finishOAuthAuthorization');
  const checkRegisterStatus = useMethod('cloud:checkRegisterStatus');
  const connectWorkspace = useMethod('cloud:connectWorkspace');
  useEffect(() => {
    const acceptOAuthAuthorization = async () => {
      if (page !== 'oauth-callback') {
        return;
      }

      if (errorCode) {
        dispatchToastMessage({
          type: 'error',
          title: t('Cloud_error_in_authenticating'),
          message: t('Cloud_error_code', {
            errorCode
          })
        });
        cloudRoute.push();
        return;
      }

      try {
        await finishOAuthAuthorization(code, state);
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      } finally {
        cloudRoute.push();
      }
    };

    acceptOAuthAuthorization();
  }, [errorCode, code, state, page, dispatchToastMessage, t, cloudRoute, finishOAuthAuthorization]);
  const [registerStatus, setRegisterStatus] = useSafely(useState());
  const setModal = useSetModal();
  const fetchRegisterStatus = useMutableCallback(async () => {
    try {
      const registerStatus = await checkRegisterStatus();
      setRegisterStatus(registerStatus);
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  });
  useEffect(() => {
    const acceptWorkspaceToken = async () => {
      try {
        if (token) {
          const isConnected = await connectWorkspace(token);

          if (!isConnected) {
            throw Error(t('An error occured connecting'));
          }

          dispatchToastMessage({
            type: 'success',
            message: t('Connected')
          });
        }
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      } finally {
        await fetchRegisterStatus();
      }
    };

    acceptWorkspaceToken();
  }, [connectWorkspace, dispatchToastMessage, fetchRegisterStatus, t, token]);

  const handleManualWorkspaceRegistrationButtonClick = () => {
    const handleModalClose = () => {
      setModal(null);
      fetchRegisterStatus();
    };

    setModal( /*#__PURE__*/React.createElement(ManualWorkspaceRegistrationModal, {
      onClose: handleModalClose
    }));
  };

  const isConnectToCloudDesired = registerStatus === null || registerStatus === void 0 ? void 0 : registerStatus.connectToCloud;
  const isWorkspaceRegistered = registerStatus === null || registerStatus === void 0 ? void 0 : registerStatus.workspaceRegistered;
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Connectivity_Services')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, !isWorkspaceRegistered && /*#__PURE__*/React.createElement(Button, {
    onClick: handleManualWorkspaceRegistrationButtonClick
  }, t('Cloud_Register_manually')), /*#__PURE__*/React.createElement(Button, {
    is: "a",
    primary: true,
    href: cloudConsoleUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, t('Cloud_console')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    marginInline: "auto",
    marginBlock: "neg-x24",
    width: "full",
    maxWidth: "x580"
  }, /*#__PURE__*/React.createElement(Margins, {
    block: "x24"
  }, /*#__PURE__*/React.createElement(WhatIsItSection, null), isConnectToCloudDesired && /*#__PURE__*/React.createElement(React.Fragment, null, isWorkspaceRegistered ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(WorkspaceLoginSection, {
    onRegisterStatusChange: fetchRegisterStatus
  }), /*#__PURE__*/React.createElement(TroubleshootingSection, {
    onRegisterStatusChange: fetchRegisterStatus
  })) : /*#__PURE__*/React.createElement(WorkspaceRegistrationSection, {
    email: registerStatus === null || registerStatus === void 0 ? void 0 : registerStatus.email,
    token: registerStatus === null || registerStatus === void 0 ? void 0 : registerStatus.token,
    workspaceId: registerStatus === null || registerStatus === void 0 ? void 0 : registerStatus.workspaceId,
    uniqueId: registerStatus === null || registerStatus === void 0 ? void 0 : registerStatus.uniqueId,
    onRegisterStatusChange: fetchRegisterStatus
  })), !isConnectToCloudDesired && /*#__PURE__*/React.createElement(ConnectToCloudSection, {
    onRegisterStatusChange: fetchRegisterStatus
  })))));
}

module.exportDefault(CloudPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/cloud/a6f31601fb3650bea533960aaed9f206f1647368.map
