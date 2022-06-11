function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customUserStatus/AddCustomUserStatus.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["goToNew", "close", "onChange"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
let Button, ButtonGroup, TextInput, Field, Select;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Field(v) {
    Field = v;
  },

  Select(v) {
    Select = v;
  }

}, 0);
let React, useCallback, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let VerticalBar;
module.link("../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
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

function AddCustomUserStatus(_ref) {
  let {
    goToNew,
    close,
    onChange
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const [name, setName] = useState('');
  const [statusType, setStatusType] = useState('online');
  const saveStatus = useMethod('insertOrUpdateUserStatus');
  const handleSave = useCallback(async () => {
    try {
      const result = await saveStatus({
        name,
        statusType
      });
      dispatchToastMessage({
        type: 'success',
        message: t('Custom_User_Status_Updated_Successfully')
      });
      goToNew(result)();
      onChange();
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  }, [dispatchToastMessage, goToNew, name, onChange, saveStatus, statusType, t]);
  const presenceOptions = [['online', t('Online')], ['busy', t('Busy')], ['away', t('Away')], ['offline', t('Offline')]];
  return /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, props, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Name')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: name,
    onChange: e => setName(e.currentTarget.value),
    placeholder: t('Name')
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Presence')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    value: statusType,
    onChange: value => setStatusType(value),
    placeholder: t('Presence'),
    options: presenceOptions
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true,
    w: "full"
  }, /*#__PURE__*/React.createElement(Button, {
    mie: "x4",
    onClick: close
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleSave,
    disabled: name === ''
  }, t('Save'))))));
}

module.exportDefault(AddCustomUserStatus);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/customUserStatus/5e4336e90dcdd0c08676297b707b403fc5698c5d.map
