function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/invite/InvitePage.tsx                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useQuery;
module.link("react-query", {
  useQuery(v) {
    useQuery = v;
  }

}, 1);
let APIClient;
module.link("../../../app/utils/client", {
  APIClient(v) {
    APIClient = v;
  }

}, 2);
let useRoute, useRouteParameter;
module.link("../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  },

  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 3);
let useSessionDispatch;
module.link("../../contexts/SessionContext", {
  useSessionDispatch(v) {
    useSessionDispatch = v;
  }

}, 4);
let useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 5);
let useToastMessageDispatch;
module.link("../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 6);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
let useUserId;
module.link("../../contexts/UserContext", {
  useUserId(v) {
    useUserId = v;
  }

}, 8);
let PageLoading;
module.link("../root/PageLoading", {
  default(v) {
    PageLoading = v;
  }

}, 9);

const InvitePage = () => {
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const token = useRouteParameter('hash');
  const registrationForm = useSetting('Accounts_RegistrationForm');
  const setLoginDefaultState = useSessionDispatch('loginDefaultState');
  const userId = useUserId();
  const homeRoute = useRoute('/');
  const groupRoute = useRoute('/group/:name/:tab?/:context?');
  const channelRoute = useRoute('/channel/:name/:tab?/:context?');
  const {
    isLoading
  } = useQuery(['invite', token], async () => {
    if (!token) {
      return false;
    }

    try {
      const {
        valid
      } = await APIClient.v1.post('validateInviteToken', {
        token
      });
      return valid;
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: t('Failed_to_validate_invite_token')
      });
      return false;
    }
  }, {
    onSuccess: async valid => {
      if (!token) {
        return;
      }

      if (registrationForm !== 'Disabled') {
        setLoginDefaultState('register');
      } else {
        setLoginDefaultState('login');
      }

      if (!valid || !userId) {
        return;
      }

      try {
        const result = await APIClient.v1.post('useInviteToken', {
          token
        });

        if (!(result !== null && result !== void 0 && result.room.name)) {
          dispatchToastMessage({
            type: 'error',
            message: t('Failed_to_activate_invite_token')
          });
          homeRoute.push();
          return;
        }

        if (result.room.t === 'p') {
          groupRoute.push({
            name: result.room.name
          });
          return;
        }

        channelRoute.push({
          name: result.room.name
        });
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: t('Failed_to_activate_invite_token')
        });
        homeRoute.push();
      }
    }
  });

  if (isLoading) {
    return /*#__PURE__*/React.createElement(PageLoading, null);
  }

  return /*#__PURE__*/React.createElement("section", {
    className: "rc-old full-page color-tertiary-font-color"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("a", {
    className: "logo",
    href: "/"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/logo/logo.svg?v=3"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "attention-message"
  }, /*#__PURE__*/React.createElement("i", {
    className: "icon-attention"
  }), t('Invalid_or_expired_invite_token')))));
};

module.exportDefault(InvitePage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/invite/4b33bfad83df89f8182f37ab46befa87de769077.map
