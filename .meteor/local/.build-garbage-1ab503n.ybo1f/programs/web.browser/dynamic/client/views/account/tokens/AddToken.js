function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/tokens/AddToken.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onDidAddToken"];

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
let Box, TextInput, Button, Field, FieldGroup, Margins, CheckBox;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Button(v) {
    Button = v;
  },

  Field(v) {
    Field = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  },

  Margins(v) {
    Margins = v;
  },

  CheckBox(v) {
    CheckBox = v;
  }

}, 0);
let useUniqueId;
module.link("@rocket.chat/fuselage-hooks", {
  useUniqueId(v) {
    useUniqueId = v;
  }

}, 1);
let React, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 2);
let useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 3);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 4);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 5);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let useUserId;
module.link("../../../contexts/UserContext", {
  useUserId(v) {
    useUserId = v;
  }

}, 7);
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 8);
let InfoModal;
module.link("./InfoModal", {
  default(v) {
    InfoModal = v;
  }

}, 9);
const initialValues = {
  name: '',
  bypassTwoFactor: false
};

const AddToken = _ref => {
  let {
    onDidAddToken
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const createTokenFn = useMethod('personalAccessTokens:generateToken');
  const dispatchToastMessage = useToastMessageDispatch();
  const setModal = useSetModal();
  const userId = useUserId();
  const {
    values,
    handlers,
    reset
  } = useForm(initialValues);
  const {
    name,
    bypassTwoFactor
  } = values;
  const {
    handleName,
    handleBypassTwoFactor
  } = handlers;
  const closeModal = useCallback(() => setModal(null), [setModal]);
  const handleAdd = useCallback(async () => {
    try {
      const token = await createTokenFn({
        tokenName: name,
        bypassTwoFactor
      });
      setModal( /*#__PURE__*/React.createElement(InfoModal, {
        title: t('API_Personal_Access_Token_Generated'),
        content: /*#__PURE__*/React.createElement(Box, {
          dangerouslySetInnerHTML: {
            __html: t('API_Personal_Access_Token_Generated_Text_Token_s_UserId_s', {
              token,
              userId
            })
          }
        }),
        confirmText: t('ok'),
        onConfirm: closeModal
      }));
      reset();
      onDidAddToken();
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  }, [bypassTwoFactor, closeModal, createTokenFn, dispatchToastMessage, name, onDidAddToken, reset, setModal, t, userId]);
  const bypassTwoFactorCheckboxId = useUniqueId();
  return /*#__PURE__*/React.createElement(FieldGroup, _extends({
    is: "form",
    marginBlock: "x8"
  }, props), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Margins, {
    inlineEnd: "x4"
  }, /*#__PURE__*/React.createElement(TextInput, {
    value: name,
    onChange: handleName,
    placeholder: t('API_Add_Personal_Access_Token')
  })), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: name.length === 0,
    onClick: handleAdd
  }, t('Add'))), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(CheckBox, {
    id: bypassTwoFactorCheckboxId,
    checked: bypassTwoFactor,
    onChange: handleBypassTwoFactor
  }), /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: bypassTwoFactorCheckboxId
  }, t('Ignore'), " ", t('Two Factor Authentication')))));
};

module.exportDefault(AddToken);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/tokens/4e1153b2c2042d4f9f1dde405f4ddcfd2a8daf84.map
