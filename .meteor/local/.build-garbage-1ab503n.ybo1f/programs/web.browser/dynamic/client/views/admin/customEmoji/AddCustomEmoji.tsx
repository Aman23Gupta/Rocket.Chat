function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customEmoji/AddCustomEmoji.tsx                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["close", "onChange"];

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
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
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useEndpointUpload;
module.link("../../../hooks/useEndpointUpload", {
  useEndpointUpload(v) {
    useEndpointUpload = v;
  }

}, 4);
let useFileInput;
module.link("../../../hooks/useFileInput", {
  useFileInput(v) {
    useFileInput = v;
  }

}, 5);

const AddCustomEmoji = _ref => {
  let {
    close,
    onChange
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const [name, setName] = useState('');
  const [aliases, setAliases] = useState('');
  const [emojiFile, setEmojiFile] = useState();
  const [newEmojiPreview, setNewEmojiPreview] = useState('');
  const [errors, setErrors] = useState({
    name: false,
    emoji: false,
    aliases: false
  });
  const setEmojiPreview = useCallback(async file => {
    setEmojiFile(file);
    setNewEmojiPreview(URL.createObjectURL(file));
    setErrors(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      emoji: false
    }));
  }, [setEmojiFile]);
  const saveAction = useEndpointUpload('emoji-custom.create', {}, t('Custom_Emoji_Added_Successfully'));
  const handleSave = useCallback(async () => {
    if (!name) {
      return setErrors(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        name: true
      }));
    }

    if (name === aliases) {
      return setErrors(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        aliases: true
      }));
    }

    if (!emojiFile) {
      return setErrors(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        emoji: true
      }));
    }

    const formData = new FormData();
    formData.append('emoji', emojiFile);
    formData.append('name', name);
    formData.append('aliases', aliases);
    const result = await saveAction(formData);

    if (result.success) {
      onChange();
      close();
    }
  }, [emojiFile, name, aliases, saveAction, onChange, close]);
  const [clickUpload] = useFileInput(setEmojiPreview, 'emoji');

  const handleChangeName = e => {
    if (e.currentTarget.value !== '') {
      setErrors(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        name: false
      }));
    }

    return setName(e.currentTarget.value);
  };

  const handleChangeAliases = e => {
    if (e.currentTarget.value !== name) {
      setErrors(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        aliases: false
      }));
    }

    return setAliases(e.currentTarget.value);
  };

  return /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, props, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Name')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: name,
    onChange: handleChangeName,
    placeholder: t('Name')
  })), errors.name && /*#__PURE__*/React.createElement(Field.Error, null, t('error-the-field-is-required', {
    field: t('Name')
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Aliases')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: aliases,
    onChange: handleChangeAliases,
    placeholder: t('Aliases')
  })), errors.aliases && /*#__PURE__*/React.createElement(Field.Error, null, t('Custom_Emoji_Error_Same_Name_And_Alias'))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    alignSelf: "stretch",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }, t('Custom_Emoji'), /*#__PURE__*/React.createElement(Button, {
    square: true,
    onClick: clickUpload
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "upload",
    size: "x20"
  }))), errors.emoji && /*#__PURE__*/React.createElement(Field.Error, null, t('error-the-field-is-required', {
    field: t('Custom_Emoji')
  })), newEmojiPreview && /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    mi: "neg-x4",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(Margins, {
    inline: "x4"
  }, /*#__PURE__*/React.createElement(Box, {
    is: "img",
    style: {
      objectFit: 'contain'
    },
    w: "x120",
    h: "x120",
    src: newEmojiPreview
  })))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true,
    w: "full"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: close
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleSave
  }, t('Save'))))));
};

module.exportDefault(AddCustomEmoji);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/customEmoji/af2fb681ce97fe814b9d5fdf4cd4f51b7ef0d62f.map
