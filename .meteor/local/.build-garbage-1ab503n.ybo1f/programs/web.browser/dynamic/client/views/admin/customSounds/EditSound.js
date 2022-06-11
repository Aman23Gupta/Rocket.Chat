function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customSounds/EditSound.js                                                                        //
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
let Box, Button, ButtonGroup, Margins, TextInput, Field, Icon;
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
  },

  TextInput(v) {
    TextInput = v;
  },

  Field(v) {
    Field = v;
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
let useFileInput;
module.link("../../../hooks/useFileInput", {
  useFileInput(v) {
    useFileInput = v;
  }

}, 8);
let validate, createSoundData;
module.link("./lib", {
  validate(v) {
    validate = v;
  },

  createSoundData(v) {
    createSoundData = v;
  }

}, 9);

function EditSound(_ref) {
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
    name: previousName
  } = data || {};
  const previousSound = useMemo(() => data || {}, [data]);
  const [name, setName] = useState(() => {
    var _data$name;

    return (_data$name = data === null || data === void 0 ? void 0 : data.name) !== null && _data$name !== void 0 ? _data$name : '';
  });
  const [sound, setSound] = useState(() => data !== null && data !== void 0 ? data : {});
  useEffect(() => {
    setName(previousName || '');
    setSound(previousSound || '');
  }, [previousName, previousSound, _id]);
  const deleteCustomSound = useMethod('deleteCustomSound');
  const uploadCustomSound = useMethod('uploadCustomSound');
  const insertOrUpdateSound = useMethod('insertOrUpdateSound');
  const handleChangeFile = useCallback(soundFile => {
    setSound(soundFile);
  }, []);
  const hasUnsavedChanges = useMemo(() => previousName !== name || previousSound !== sound, [name, previousName, previousSound, sound]);
  const saveAction = useCallback(async sound => {
    const soundData = createSoundData(sound, name, {
      previousName,
      previousSound,
      _id
    });
    const validation = validate(soundData, sound);

    if (validation.length === 0) {
      let soundId;

      try {
        soundId = await insertOrUpdateSound(soundData);
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }

      soundData._id = soundId;
      soundData.random = Math.round(Math.random() * 1000);

      if (sound && sound !== previousSound) {
        dispatchToastMessage({
          type: 'success',
          message: t('Uploading_file')
        });
        const reader = new FileReader();
        reader.readAsBinaryString(sound);

        reader.onloadend = () => {
          try {
            uploadCustomSound(reader.result, sound.type, soundData);
            return dispatchToastMessage({
              type: 'success',
              message: t('File_uploaded')
            });
          } catch (error) {
            dispatchToastMessage({
              type: 'error',
              message: error
            });
          }
        };
      }
    }

    validation.forEach(error => dispatchToastMessage({
      type: 'error',
      message: t('error-the-field-is-required', {
        field: t(error)
      })
    }));
  }, [_id, dispatchToastMessage, insertOrUpdateSound, name, previousName, previousSound, t, uploadCustomSound]);
  const handleSave = useCallback(async () => {
    saveAction(sound);
    onChange();
  }, [saveAction, sound, onChange]);
  const handleDeleteButtonClick = useCallback(() => {
    const handleClose = () => {
      setModal(null);
      close();
      onChange();
    };

    const handleDelete = async () => {
      try {
        await deleteCustomSound(_id);
        setModal(() => /*#__PURE__*/React.createElement(GenericModal, {
          variant: "success",
          onClose: handleClose,
          onConfirm: handleClose
        }, t('Custom_Sound_Has_Been_Deleted')));
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
    }, t('Custom_Sound_Delete_Warning')));
  }, [_id, close, deleteCustomSound, dispatchToastMessage, onChange, setModal, t]);
  const [clickUpload] = useFileInput(handleChangeFile, 'audio/mp3');
  return /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, props, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Name')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: name,
    onChange: e => setName(e.currentTarget.value),
    placeholder: t('Name')
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    alignSelf: "stretch"
  }, t('Sound_File_mp3')), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    mbs: "none"
  }, /*#__PURE__*/React.createElement(Margins, {
    inline: "x4"
  }, /*#__PURE__*/React.createElement(Button, {
    square: true,
    onClick: clickUpload
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "upload",
    size: "x20"
  })), sound && sound.name || 'none'))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ButtonGroup, {
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

module.exportDefault(EditSound);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/customSounds/28b4dc9d40ac8bc1ec092c0a8e0212b1fb68de39.map
