function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customSounds/AddCustomSound.js                                                                   //
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
let Field, TextInput, Box, Icon, Margins, Button, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  },

  Margins(v) {
    Margins = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  }

}, 0);
let React, useState, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useCallback(v) {
    useCallback = v;
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
let useFileInput;
module.link("../../../hooks/useFileInput", {
  useFileInput(v) {
    useFileInput = v;
  }

}, 6);
let validate, createSoundData;
module.link("./lib", {
  validate(v) {
    validate = v;
  },

  createSoundData(v) {
    createSoundData = v;
  }

}, 7);

function AddCustomSound(_ref) {
  let {
    goToNew,
    close,
    onChange
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const [name, setName] = useState('');
  const [sound, setSound] = useState();
  const uploadCustomSound = useMethod('uploadCustomSound');
  const insertOrUpdateSound = useMethod('insertOrUpdateSound');
  const handleChangeFile = useCallback(soundFile => {
    setSound(soundFile);
  }, []);
  const [clickUpload] = useFileInput(handleChangeFile, 'audio/mp3');
  const saveAction = useCallback(async (name, soundFile) => {
    const soundData = createSoundData(soundFile, name);
    const validation = validate(soundData, soundFile);

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

      if (soundId) {
        dispatchToastMessage({
          type: 'success',
          message: t('Uploading_file')
        });
        const reader = new FileReader();
        reader.readAsBinaryString(soundFile);

        reader.onloadend = () => {
          try {
            uploadCustomSound(reader.result, soundFile.type, soundData);
            dispatchToastMessage({
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

      return soundId;
    }

    validation.forEach(error => {
      throw new Error({
        type: 'error',
        message: t('error-the-field-is-required', {
          field: t(error)
        })
      });
    });
  }, [dispatchToastMessage, insertOrUpdateSound, t, uploadCustomSound]);
  const handleSave = useCallback(async () => {
    try {
      const result = await saveAction(name, sound);
      dispatchToastMessage({
        type: 'success',
        message: t('Custom_Sound_Saved_Successfully')
      });
      goToNew(result)();
      onChange();
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  }, [dispatchToastMessage, goToNew, name, onChange, saveAction, sound, t]);
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
    mie: "x4",
    onClick: close
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleSave,
    disabled: name === ''
  }, t('Save'))))));
}

module.exportDefault(AddCustomSound);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/customSounds/979515e50b6fad15dce16b8b9c7ea97252b27f30.map
