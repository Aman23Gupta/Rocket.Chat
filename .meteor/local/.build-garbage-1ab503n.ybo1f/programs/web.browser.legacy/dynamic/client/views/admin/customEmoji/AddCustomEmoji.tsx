function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customEmoji/AddCustomEmoji.tsx                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["close", "onChange"];

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
var Box, Button, ButtonGroup, Margins, TextInput, Field, Icon;
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
  }
}, 0);
var React, useCallback, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useEndpointUpload;
module.link("../../../hooks/useEndpointUpload", {
  useEndpointUpload: function (v) {
    useEndpointUpload = v;
  }
}, 4);
var useFileInput;
module.link("../../../hooks/useFileInput", {
  useFileInput: function (v) {
    useFileInput = v;
  }
}, 5);

var AddCustomEmoji = function (_ref) {
  var close = _ref.close,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      aliases = _useState4[0],
      setAliases = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      emojiFile = _useState6[0],
      setEmojiFile = _useState6[1];

  var _useState7 = useState(''),
      _useState8 = _slicedToArray(_useState7, 2),
      newEmojiPreview = _useState8[0],
      setNewEmojiPreview = _useState8[1];

  var _useState9 = useState({
    name: false,
    emoji: false,
    aliases: false
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      errors = _useState10[0],
      setErrors = _useState10[1];

  var setEmojiPreview = useCallback(function () {
    function _callee(file) {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setEmojiFile(file);
                setNewEmojiPreview(URL.createObjectURL(file));
                setErrors(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    emoji: false
                  });
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }(), [setEmojiFile]);
  var saveAction = useEndpointUpload('emoji-custom.create', {}, t('Custom_Emoji_Added_Successfully'));
  var handleSave = useCallback(function () {
    function _callee2() {
      var formData, result;
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (name) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", setErrors(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    name: true
                  });
                }));

              case 2:
                if (!(name === aliases)) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", setErrors(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    aliases: true
                  });
                }));

              case 4:
                if (emojiFile) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", setErrors(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    emoji: true
                  });
                }));

              case 6:
                formData = new FormData();
                formData.append('emoji', emojiFile);
                formData.append('name', name);
                formData.append('aliases', aliases);
                _context2.next = 12;
                return _regeneratorRuntime.awrap(saveAction(formData));

              case 12:
                result = _context2.sent;

                if (result.success) {
                  onChange();
                  close();
                }

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, null, Promise);
    }

    return _callee2;
  }(), [emojiFile, name, aliases, saveAction, onChange, close]);

  var _useFileInput = useFileInput(setEmojiPreview, 'emoji'),
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

  var handleChangeAliases = function (e) {
    if (e.currentTarget.value !== name) {
      setErrors(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          aliases: false
        });
      });
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
//# sourceMappingURL=/dynamic/client/views/admin/customEmoji/3bedc7b27b438bdfcfab5ceb02253916b198f9e8.map
