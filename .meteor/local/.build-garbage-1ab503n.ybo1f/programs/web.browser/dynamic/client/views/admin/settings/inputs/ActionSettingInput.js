function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/inputs/ActionSettingInput.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Button, Field;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  Field(v) {
    Field = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useMethod;
module.link("../../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 2);
let useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 3);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);

function ActionSettingInput(_ref) {
  let {
    _id,
    actionText,
    value,
    disabled,
    sectionChanged
  } = _ref;
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const actionMethod = useMethod(value);

  const handleClick = async () => {
    try {
      const data = await actionMethod();
      const args = [data.message].concat(data.params);
      dispatchToastMessage({
        type: 'success',
        message: t(...args)
      });
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Button, {
    "data-qa-setting-id": _id,
    children: t(actionText),
    disabled: disabled || sectionChanged,
    primary: true,
    onClick: handleClick
  })), sectionChanged && /*#__PURE__*/React.createElement(Field.Hint, null, t('Save_to_enable_this_action')));
}

module.exportDefault(ActionSettingInput);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/inputs/3f69c667b34035ae595685c9da4218ca81f911d4.map
