function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/login/ResetPassword/ResetPassword.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Button, TextInput, Field, Modal, Box, Throbber;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Field(v) {
    Field = v;
  },

  Modal(v) {
    Modal = v;
  },

  Box(v) {
    Box = v;
  },

  Throbber(v) {
    Throbber = v;
  }

}, 0);
let useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useSafely(v) {
    useSafely = v;
  }

}, 1);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 2);
let React, useState, useCallback, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 3);
let useRouteParameter, useRoute;
module.link("../../../contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  },

  useRoute(v) {
    useRoute = v;
  }

}, 4);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 5);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let useUser;
module.link("../../../contexts/UserContext", {
  useUser(v) {
    useUser = v;
  }

}, 7);
let useMethodData;
module.link("../../../hooks/useMethodData", {
  useMethodData(v) {
    useMethodData = v;
  }

}, 8);
let LoginLayout;
module.link("../LoginLayout", {
  default(v) {
    LoginLayout = v;
  }

}, 9);

const getChangePasswordReason = function () {
  let {
    requirePasswordChange,
    requirePasswordChangeReason = requirePasswordChange ? 'You_need_to_change_your_password' : 'Please_enter_your_new_password_below'
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return requirePasswordChangeReason;
};

const ResetPassword = () => {
  const user = useUser();
  const t = useTranslation();
  const setUserPassword = useMethod('setUserPassword');
  const resetPassword = useMethod('resetPassword');
  const token = useRouteParameter('token');
  const params = useMemo(() => [{
    token
  }], [token]);
  const {
    value: {
      enabled: policyEnabled,
      policy: policies
    } = {}
  } = useMethodData('getPasswordPolicy', params);
  const router = useRoute('home');
  const changePasswordReason = getChangePasswordReason(user || {});
  const [newPassword, setNewPassword] = useState('');
  const [isLoading, setIsLoading] = useSafely(useState(false));
  const [error, setError] = useSafely(useState());
  const handleOnChange = useCallback(event => setNewPassword(event.currentTarget.value), [setNewPassword]);
  const isSubmitDisabled = !newPassword.trim() || isLoading;
  const handleSubmit = useCallback(async e => {
    e.preventDefault();

    if (isSubmitDisabled) {
      return;
    }

    setIsLoading(true);

    try {
      if (token && resetPassword) {
        const result = await resetPassword(token, newPassword);
        await Meteor.loginWithToken(result.token);
        router.push({});
      } else {
        await setUserPassword(newPassword);
      }
    } catch ({
      error,
      reason = error
    }) {
      setError(reason);
    } finally {
      setIsLoading(false);
    }
  }, [isSubmitDisabled, setIsLoading, token, resetPassword, newPassword, router, setUserPassword, setError]);
  return /*#__PURE__*/React.createElement(LoginLayout, null, /*#__PURE__*/React.createElement(Modal, {
    is: "form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, {
    textAlign: "start"
  }, t('Password'))), /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t(changePasswordReason)), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: t('Type_your_new_password'),
    type: "password",
    name: "newPassword",
    id: "newPassword",
    dir: "auto",
    onChange: handleOnChange,
    autoComplete: "off",
    value: newPassword
  })), error && /*#__PURE__*/React.createElement(Field.Error, null, error), policyEnabled && /*#__PURE__*/React.createElement(Field.Hint, null, policies.map((policy, index) => /*#__PURE__*/React.createElement(Box, {
    is: "p",
    textAlign: "start",
    key: index
  }, t(...policy)))))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: isSubmitDisabled,
    type: "submit"
  }, isLoading ? /*#__PURE__*/React.createElement(Throbber, {
    size: "x12",
    inheritColor: true
  }) : t('Reset')))))));
};

module.exportDefault(ResetPassword);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/login/ResetPassword/f332d6029bb7349cdfa01a2d1bc772d26ac24aaf.map
