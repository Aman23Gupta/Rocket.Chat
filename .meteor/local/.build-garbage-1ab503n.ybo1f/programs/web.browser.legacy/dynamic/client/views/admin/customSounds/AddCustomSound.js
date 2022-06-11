function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customSounds/AddCustomSound.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["goToNew", "close", "onChange"];

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var Field, TextInput, Box, Icon, Margins, Button, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  }
}, 0);
var React, useState, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 2);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 3);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var useFileInput;
module.link("../../../hooks/useFileInput", {
  useFileInput: function (v) {
    useFileInput = v;
  }
}, 6);
var validate, createSoundData;
module.link("./lib", {
  validate: function (v) {
    validate = v;
  },
  createSoundData: function (v) {
    createSoundData = v;
  }
}, 7);

function AddCustomSound(_ref) {
  var goToNew = _ref.goToNew,
      close = _ref.close,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      sound = _useState4[0],
      setSound = _useState4[1];

  var uploadCustomSound = useMethod('uploadCustomSound');
  var insertOrUpdateSound = useMethod('insertOrUpdateSound');
  var handleChangeFile = useCallback(function (soundFile) {
    setSound(soundFile);
  }, []);

  var _useFileInput = useFileInput(handleChangeFile, 'audio/mp3'),
      _useFileInput2 = _slicedToArray(_useFileInput, 1),
      clickUpload = _useFileInput2[0];

  var saveAction = useCallback(function () {
    function _callee(name, soundFile) {
      var soundData, validation, soundId, reader;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                soundData = createSoundData(soundFile, name);
                validation = validate(soundData, soundFile);

                if (!(validation.length === 0)) {
                  _context.next = 16;
                  break;
                }

                _context.prev = 3;
                _context.next = 6;
                return _regeneratorRuntime.awrap(insertOrUpdateSound(soundData));

              case 6:
                soundId = _context.sent;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](3);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 12:
                soundData._id = soundId;
                soundData.random = Math.round(Math.random() * 1000);

                if (soundId) {
                  dispatchToastMessage({
                    type: 'success',
                    message: t('Uploading_file')
                  });
                  reader = new FileReader();
                  reader.readAsBinaryString(soundFile);

                  reader.onloadend = function () {
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

                return _context.abrupt("return", soundId);

              case 16:
                validation.forEach(function (error) {
                  throw new Error({
                    type: 'error',
                    message: t('error-the-field-is-required', {
                      field: t(error)
                    })
                  });
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[3, 9]], Promise);
    }

    return _callee;
  }(), [dispatchToastMessage, insertOrUpdateSound, t, uploadCustomSound]);
  var handleSave = useCallback(function () {
    function _callee2() {
      var result;
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _regeneratorRuntime.awrap(saveAction(name, sound));

              case 3:
                result = _context2.sent;
                dispatchToastMessage({
                  type: 'success',
                  message: t('Custom_Sound_Saved_Successfully')
                });
                goToNew(result)();
                onChange();
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context2.t0
                });

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, [[0, 9]], Promise);
    }

    return _callee2;
  }(), [dispatchToastMessage, goToNew, name, onChange, saveAction, sound, t]);
  return /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, props, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Name')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: name,
    onChange: function (e) {
      return setName(e.currentTarget.value);
    },
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
//# sourceMappingURL=/dynamic/client/views/admin/customSounds/17c8df7efae89ec930943f82aac263c624055561.map
