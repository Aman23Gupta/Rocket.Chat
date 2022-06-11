function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/appearance/AppearancePage.tsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let ButtonGroup, Button, Box;
module.link("@rocket.chat/fuselage", {
  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  Box(v) {
    Box = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
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
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 7);
let AppearanceForm;
module.link("./AppearanceForm", {
  default(v) {
    AppearanceForm = v;
  }

}, 8);

const reduceAppearance = settings => settings.reduce((acc, _ref) => {
  let {
    _id,
    value
  } = _ref;
  acc = _objectSpread(_objectSpread({}, acc), {}, {
    [_id]: value
  });
  return acc;
}, {});

const AppearancePage = _ref2 => {
  let {
    settings
  } = _ref2;
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const save = useMethod('livechat:saveAppearance');
  const {
    values,
    handlers,
    commit,
    reset,
    hasUnsavedChanges
  } = useForm(reduceAppearance(settings));
  const handleSave = useMutableCallback(async () => {
    const mappedAppearance = Object.entries(values).map(_ref3 => {
      let [_id, value] = _ref3;
      return {
        _id,
        value
      };
    });

    try {
      await save(mappedAppearance);
      dispatchToastMessage({
        type: 'success',
        message: t('Settings_updated')
      });
      commit();
    } catch (error) {
      dispatchToastMessage({
        type: 'success',
        message: error
      });
    }
  });

  const handleResetButtonClick = () => {
    reset();
  };

  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Appearance')
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: handleResetButtonClick
  }, t('Reset')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleSave,
    disabled: !hasUnsavedChanges
  }, t('Save')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    maxWidth: "x600",
    w: "full",
    alignSelf: "center"
  }, /*#__PURE__*/React.createElement(AppearanceForm, {
    values: values,
    handlers: handlers
  }))));
};

module.exportDefault(AppearancePage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/appearance/fa7b7850038181ae89840857ae430b1d1d30eacc.map
