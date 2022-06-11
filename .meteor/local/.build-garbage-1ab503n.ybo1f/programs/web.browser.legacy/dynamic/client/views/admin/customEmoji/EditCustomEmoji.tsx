function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customEmoji/EditCustomEmoji.tsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["close", "onChange", "data"];

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 3);
var Box, Button, ButtonGroup, Margins, TextInput, Field, Icon, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Field: function (v) {
    Field = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  }
}, 0);
var React, useCallback, useState, useMemo, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 1);
var GenericModal;
module.link("../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 2);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 3);
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 4);
var useAbsoluteUrl;
module.link("../../../contexts/ServerContext", {
  useAbsoluteUrl: function (v) {
    useAbsoluteUrl = v;
  }
}, 5);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 6);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var useEndpointAction;
module.link("../../../hooks/useEndpointAction", {
  useEndpointAction: function (v) {
    useEndpointAction = v;
  }
}, 8);
var useEndpointUpload;
module.link("../../../hooks/useEndpointUpload", {
  useEndpointUpload: function (v) {
    useEndpointUpload = v;
  }
}, 9);
var useFileInput;
module.link("../../../hooks/useFileInput", {
  useFileInput: function (v) {
    useFileInput = v;
  }
}, 10);

var EditCustomEmoji = function (_ref) {
  var close = _ref.close,
      onChange = _ref.onChange,
      data = _ref.data,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var setModal = useSetModal();
  var absoluteUrl = useAbsoluteUrl();

  var _useState = useState({
    name: false,
    aliases: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      errors = _useState2[0],
      setErrors = _useState2[1];

  var _ref2 = data || {},
      _id = _ref2._id,
      previousName = _ref2.name,
      previousAliases = _ref2.aliases;

  var _useState3 = useState(function () {
    var _data$name;

    return (_data$name = data === null || data === void 0 ? void 0 : data.name) !== null && _data$name !== void 0 ? _data$name : '';
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = useState(function () {
    var _data$aliases$join, _data$aliases;

    return (_data$aliases$join = data === null || data === void 0 ? void 0 : (_data$aliases = data.aliases) === null || _data$aliases === void 0 ? void 0 : _data$aliases.join(', ')) !== null && _data$aliases$join !== void 0 ? _data$aliases$join : '';
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      aliases = _useState6[0],
      setAliases = _useState6[1];

  var _useState7 = useState(),
      _useState8 = _slicedToArray(_useState7, 2),
      emojiFile = _useState8[0],
      setEmojiFile = _useState8[1];

  var newEmojiPreview = useMemo(function () {
    if (emojiFile) {
      return URL.createObjectURL(emojiFile);
    }

    if (data) {
      return absoluteUrl("/emoji-custom/" + encodeURIComponent(data.name) + "." + data.extension);
    }

    return null;
  }, [absoluteUrl, data, emojiFile]);
  useEffect(function () {
    setName(previousName || '');
    setAliases((previousAliases === null || previousAliases === void 0 ? void 0 : previousAliases.join(', ')) || '');
  }, [previousName, previousAliases, _id]);
  var hasUnsavedChanges = useMemo(function () {
    return previousName !== name || aliases !== previousAliases.join(', ') || !!emojiFile;
  }, [previousName, name, aliases, previousAliases, emojiFile]);
  var saveAction = useEndpointUpload('emoji-custom.update', {}, t('Custom_Emoji_Updated_Successfully'));
  var handleSave = useCallback(function () {
    function _callee() {
      var formData, result;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (name) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", setErrors(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    name: true
                  });
                }));

              case 2:
                if (!(name === aliases)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", setErrors(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    aliases: true
                  });
                }));

              case 4:
                if (!(!emojiFile && !newEmojiPreview)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                formData = new FormData();
                emojiFile && formData.append('emoji', emojiFile);
                formData.append('_id', _id);
                formData.append('name', name);
                formData.append('aliases', aliases);
                _context.next = 13;
                return _regeneratorRuntime.awrap(saveAction(formData));

              case 13:
                result = _context.sent;

                if (result.success) {
                  onChange();
                  close();
                }

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }(), [emojiFile, _id, name, aliases, saveAction, onChange, close, newEmojiPreview]);
  var deleteAction = useEndpointAction('POST', 'emoji-custom.delete', useMemo(function () {
    return {
      emojiId: _id
    };
  }, [_id]));
  var handleDeleteButtonClick = useCallback(function () {
    var handleDelete = function () {
      function _callee2() {
        return _regeneratorRuntime.async(function () {
          function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _regeneratorRuntime.awrap(deleteAction());

                case 3:
                  dispatchToastMessage({
                    type: 'success',
                    message: t('Custom_Emoji_Has_Been_Deleted')
                  });
                  _context2.next = 9;
                  break;

                case 6:
                  _context2.prev = 6;
                  _context2.t0 = _context2["catch"](0);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context2.t0
                  });

                case 9:
                  _context2.prev = 9;
                  onChange();
                  setModal(null);
                  close();
                  return _context2.finish(9);

                case 14:
                case "end":
                  return _context2.stop();
              }
            }
          }

          return _callee2$;
        }(), null, null, [[0, 6, 9, 14]], Promise);
      }

      return _callee2;
    }();

    var handleCancel = function () {
      setModal(null);
    };

    setModal(function () {
      return /*#__PURE__*/React.createElement(GenericModal, {
        variant: "danger",
        onConfirm: handleDelete,
        onCancel: handleCancel,
        onClose: handleCancel,
        confirmText: t('Delete')
      }, t('Custom_Emoji_Delete_Warning'));
    });
  }, [deleteAction, close, dispatchToastMessage, onChange, setModal, t]);
  var handleChangeAliases = useCallback(function (e) {
    if (e.currentTarget.value !== name) {
      setErrors(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          aliases: false
        });
      });
    }

    return setAliases(e.currentTarget.value);
  }, [setAliases, name]);

  var _useFileInput = useFileInput(setEmojiFile, 'emoji'),
      _useFileInput2 = _slicedToArray(_useFileInput, 1),
      clickUpload = _useFileInput2[0];

  var handleChangeName = function (e) {
    if (e.currentTarget.value !== '') {
      setErrors(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          name: false
        });
      });
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
//# sourceMappingURL=/dynamic/client/views/admin/customEmoji/69b4637a31a1cb07720f50751af3b787877c4620.map
