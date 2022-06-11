function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/cloud/WorkspaceRegistrationSection.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["token", "workspaceId", "uniqueId", "onRegisterStatusChange"];

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
let Box, Button, ButtonGroup, Field, Margins, TextInput;
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

  Field(v) {
    Field = v;
  },

  Margins(v) {
    Margins = v;
  },

  TextInput(v) {
    TextInput = v;
  }

}, 0);
let useSafely, useUniqueId;
module.link("@rocket.chat/fuselage-hooks", {
  useSafely(v) {
    useSafely = v;
  },

  useUniqueId(v) {
    useUniqueId = v;
  }

}, 1);
let React, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
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

function WorkspaceRegistrationSection(_ref) {
  let {
    token: initialToken,
    workspaceId,
    uniqueId,
    onRegisterStatusChange
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const connectWorkspace = useMethod('cloud:connectWorkspace');
  const syncWorkspace = useMethod('cloud:syncWorkspace');
  const [isProcessing, setProcessing] = useSafely(useState(false));
  const [token, setToken] = useState(initialToken);

  const handleTokenChange = _ref2 => {
    let {
      currentTarget: {
        value
      }
    } = _ref2;
    setToken(value);
  };

  const handleConnectButtonClick = async () => {
    setProcessing(true);

    try {
      const isConnected = await connectWorkspace(token);

      if (!isConnected) {
        throw Error(t('An error occured connecting'));
      }

      dispatchToastMessage({
        type: 'success',
        message: t('Connected')
      });
      const isSynced = await syncWorkspace();

      if (!isSynced) {
        throw Error(t('An error occured syncing'));
      }
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    } finally {
      await (onRegisterStatusChange && onRegisterStatusChange());
      setProcessing(false);
    }
  };

  const tokenInputId = useUniqueId();
  return /*#__PURE__*/React.createElement(Box, _extends({
    marginBlock: "neg-x24"
  }, props), /*#__PURE__*/React.createElement(Margins, {
    block: "x24"
  }, /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    color: "neutral-800"
  }, /*#__PURE__*/React.createElement("p", null, t('Cloud_token_instructions'))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: tokenInputId
  }, t('Token')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    id: tokenInputId,
    disabled: isProcessing,
    value: token,
    onChange: handleTokenChange
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Cloud_manually_input_token'))), /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: isProcessing,
    onClick: handleConnectButtonClick
  }, t('Connect')))));
}

module.exportDefault(WorkspaceRegistrationSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/cloud/7347bfe080cef44c2fc0f29f0a6df045fd3f08bc.map
