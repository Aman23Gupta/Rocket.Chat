function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customEmoji/EditCustomEmoji.tsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["close", "onChange", "data"];

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
let Box, Button, ButtonGroup, Margins, TextInput, Field, Icon, FieldGroup;
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
  },

  FieldGroup(v) {
    FieldGroup = v;
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
let useAbsoluteUrl;
module.link("../../../contexts/ServerContext", {
  useAbsoluteUrl(v) {
    useAbsoluteUrl = v;
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
let useEndpointAction;
module.link("../../../hooks/useEndpointAction", {
  useEndpointAction(v) {
    useEndpointAction = v;
  }

}, 8);
let useEndpointUpload;
module.link("../../../hooks/useEndpointUpload", {
  useEndpointUpload(v) {
    useEndpointUpload = v;
  }

}, 9);
let useFileInput;
module.link("../../../hooks/useFileInput", {
  useFileInput(v) {
    useFileInput = v;
  }

}, 10);

const EditCustomEmoji = _ref => {
  let {
    close,
    onChange,
    data
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const setModal = useSetModal();
  const absoluteUrl = useAbsoluteUrl();
  const [errors, setErrors] = useState({
    name: false,
    aliases: false
  });
  const {
    _id,
    name: previousName,
    aliases: previousAliases
  } = data || {};
  const [name, setName] = useState(() => {
    var _data$name;

    return (_data$name = data === null || data === void 0 ? void 0 : data.name) !== null && _data$name !== void 0 ? _data$name : '';
  });
  const [aliases, setAliases] = useState(() => {
    var _data$aliases$join, _data$aliases;

    return (_data$aliases$join = data === null || data === void 0 ? void 0 : (_data$aliases = data.aliases) === null || _data$aliases === void 0 ? void 0 : _data$aliases.join(', ')) !== null && _data$aliases$join !== void 0 ? _data$aliases$join : '';
  });
  const [emojiFile, setEmojiFile] = useState();
  const newEmojiPreview = useMemo(() => {
    if (emojiFile) {
      return URL.createObjectURL(emojiFile);
    }

    if (data) {
      return absoluteUrl("/emoji-custom/".concat(encodeURIComponent(data.name), ".").concat(data.extension));
    }

    return null;
  }, [absoluteUrl, data, emojiFile]);
  useEffect(() => {
    setName(previousName || '');
    setAliases((previousAliases === null || previousAliases === void 0 ? void 0 : previousAliases.join(', ')) || '');
  }, [previousName, previousAliases, _id]);
  const hasUnsavedChanges = useMemo(() => previousName !== name || aliases !== previousAliases.join(', ') || !!emojiFile, [previousName, name, aliases, previousAliases, emojiFile]);
  const saveAction = useEndpointUpload('emoji-custom.update', {}, t('Custom_Emoji_Updated_Successfully'));
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

    if (!emojiFile && !newEmojiPreview) {
      return;
    }

    const formData = new FormData();
    emojiFile && formData.append('emoji', emojiFile);
    formData.append('_id', _id);
    formData.append('name', name);
    formData.append('aliases', aliases);
    const result = await saveAction(formData);

    if (result.success) {
      onChange();
      close();
    }
  }, [emojiFile, _id, name, aliases, saveAction, onChange, close, newEmojiPreview]);
  const deleteAction = useEndpointAction('POST', 'emoji-custom.delete', useMemo(() => ({
    emojiId: _id
  }), [_id]));
  const handleDeleteButtonClick = useCallback(() => {
    const handleDelete = async () => {
      try {
        await deleteAction();
        dispatchToastMessage({
          type: 'success',
          message: t('Custom_Emoji_Has_Been_Deleted')
        });
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      } finally {
        onChange();
        setModal(null);
        close();
      }
    };

    const handleCancel = () => {
      setModal(null);
    };

    setModal(() => /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: handleDelete,
      onCancel: handleCancel,
      onClose: handleCancel,
      confirmText: t('Delete')
    }, t('Custom_Emoji_Delete_Warning')));
  }, [deleteAction, close, dispatchToastMessage, onChange, setModal, t]);
  const handleChangeAliases = useCallback(e => {
    if (e.currentTarget.value !== name) {
      setErrors(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        aliases: false
      }));
    }

    return setAliases(e.currentTarget.value);
  }, [setAliases, name]);
  const [clickUpload] = useFileInput(setEmojiFile, 'emoji');

  const handleChangeName = e => {
    if (e.currentTarget.value !== '') {
      setErrors(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        name: false
      }));
    }

    return setName(e.currentTarget.value);
  };

  return /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, props, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Name')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
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
  }))), newEmojiPreview && /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    mbs: "none",
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
  }))))), /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true,
    w: "full"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: close
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleSave,
    disabled: !hasUnsavedChanges
  }, t('Save'))), /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true,
    w: "full"
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    danger: true,
    onClick: handleDeleteButtonClick
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    mie: "x4"
  }), t('Delete'))));
};

module.exportDefault(EditCustomEmoji);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/customEmoji/352efd4f06e9e5cccdce9c916871461e332f8a4b.map
