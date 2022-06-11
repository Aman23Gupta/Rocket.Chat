function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customUserStatus/EditCustomUserStatus.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["close", "onChange", "data"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
module.export({
  EditCustomUserStatus: () => EditCustomUserStatus
});
let Button, ButtonGroup, TextInput, Field, Select, Icon;
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
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let React, useCallback, useState, useMemo, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 1);
let GenericModal;
module.link("../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 2);
let VerticalBar;
module.link("../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 3);
let useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 4);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 5);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 6);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);

function EditCustomUserStatus(_ref) {
  let {
    close,
    onChange,
    data
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const setModal = useSetModal();
  const {
    _id,
    name: previousName,
    statusType: previousStatusType
  } = data || {};
  const [name, setName] = useState(() => {
    var _data$name;

    return (_data$name = data === null || data === void 0 ? void 0 : data.name) !== null && _data$name !== void 0 ? _data$name : '';
  });
  const [statusType, setStatusType] = useState(() => {
    var _data$statusType;

    return (_data$statusType = data === null || data === void 0 ? void 0 : data.statusType) !== null && _data$statusType !== void 0 ? _data$statusType : '';
  });
  useEffect(() => {
    setName(previousName || '');
    setStatusType(previousStatusType || '');
  }, [previousName, previousStatusType, _id]);
  const saveStatus = useMethod('insertOrUpdateUserStatus');
  const deleteStatus = useMethod('deleteCustomUserStatus');
  const hasUnsavedChanges = useMemo(() => previousName !== name || previousStatusType !== statusType, [name, previousName, previousStatusType, statusType]);
  const handleSave = useCallback(async () => {
    try {
      await saveStatus({
        _id,
        previousName,
        previousStatusType,
        name,
        statusType
      });
      dispatchToastMessage({
        type: 'success',
        message: t('Custom_User_Status_Updated_Successfully')
      });
      onChange();
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  }, [saveStatus, _id, previousName, previousStatusType, name, statusType, dispatchToastMessage, t, onChange]);
  const handleDeleteButtonClick = useCallback(() => {
    const handleClose = () => {
      setModal(null);
      close();
      onChange();
    };

    const handleDelete = async () => {
      try {
        await deleteStatus(_id);
        setModal(() => /*#__PURE__*/React.createElement(GenericModal, {
          variant: "success",
          onClose: handleClose,
          onConfirm: handleClose
        }, t('Custom_User_Status_Has_Been_Deleted')));
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
        onChange();
      }
    };

    const handleCancel = () => {
      setModal(null);
    };

    setModal(() => /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: handleDelete,
      onCancel: handleCancel,
      confirmText: t('Delete')
    }, t('Custom_User_Status_Delete_Warning')));
  }, [_id, close, deleteStatus, dispatchToastMessage, onChange, setModal, t]);
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
    onClick: close
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleSave,
    disabled: !hasUnsavedChanges
  }, t('Save'))))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true,
    w: "full"
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    danger: true,
    onClick: handleDeleteButtonClick
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    mie: "x4"
  }), t('Delete'))))));
}

module.exportDefault(EditCustomUserStatus);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/customUserStatus/19054a446e056ab8bdf4b2884da340d1363a671a.map
