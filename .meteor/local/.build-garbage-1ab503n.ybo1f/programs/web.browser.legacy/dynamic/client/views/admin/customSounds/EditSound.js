function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customSounds/EditSound.js                                                                        //
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
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
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
var useFileInput;
module.link("../../../hooks/useFileInput", {
  useFileInput: function (v) {
    useFileInput = v;
  }
}, 8);
var validate, createSoundData;
module.link("./lib", {
  validate: function (v) {
    validate = v;
  },
  createSoundData: function (v) {
    createSoundData = v;
  }
}, 9);

function EditSound(_ref) {
  var close = _ref.close,
      onChange = _ref.onChange,
      data = _ref.data,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var setModal = useSetModal();

  var _ref2 = data || {},
      _id = _ref2._id,
      previousName = _ref2.name;

  var previousSound = useMemo(function () {
    return data || {};
  }, [data]);

  var _useState = useState(function () {
    var _data$name;

    return (_data$name = data === null || data === void 0 ? void 0 : data.name) !== null && _data$name !== void 0 ? _data$name : '';
  }),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = useState(function () {
    return data !== null && data !== void 0 ? data : {};
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      sound = _useState4[0],
      setSound = _useState4[1];

  useEffect(function () {
    setName(previousName || '');
    setSound(previousSound || '');
  }, [previousName, previousSound, _id]);
  var deleteCustomSound = useMethod('deleteCustomSound');
  var uploadCustomSound = useMethod('uploadCustomSound');
  var insertOrUpdateSound = useMethod('insertOrUpdateSound');
  var handleChangeFile = useCallback(function (soundFile) {
    setSound(soundFile);
  }, []);
  var hasUnsavedChanges = useMemo(function () {
    return previousName !== name || previousSound !== sound;
  }, [name, previousName, previousSound, sound]);
  var saveAction = useCallback(function () {
    function _callee(sound) {
      var soundData, validation, soundId, reader;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                soundData = createSoundData(sound, name, {
                  previousName: previousName,
                  previousSound: previousSound,
                  _id: _id
                });
                validation = validate(soundData, sound);

                if (!(validation.length === 0)) {
                  _context.next = 15;
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

                if (sound && sound !== previousSound) {
                  dispatchToastMessage({
                    type: 'success',
                    message: t('Uploading_file')
                  });
                  reader = new FileReader();
                  reader.readAsBinaryString(sound);

                  reader.onloadend = function () {
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

              case 15:
                validation.forEach(function (error) {
                  return dispatchToastMessage({
                    type: 'error',
                    message: t('error-the-field-is-required', {
                      field: t(error)
                    })
                  });
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[3, 9]], Promise);
    }

    return _callee;
  }(), [_id, dispatchToastMessage, insertOrUpdateSound, name, previousName, previousSound, t, uploadCustomSound]);
  var handleSave = useCallback(function () {
    function _callee2() {
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                saveAction(sound);
                onChange();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, null, Promise);
    }

    return _callee2;
  }(), [saveAction, sound, onChange]);
  var handleDeleteButtonClick = useCallback(function () {
    var handleClose = function () {
      setModal(null);
      close();
      onChange();
    };

    var handleDelete = function () {
      function _callee3() {
        return _regeneratorRuntime.async(function () {
          function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return _regeneratorRuntime.awrap(deleteCustomSound(_id));

                case 3:
                  setModal(function () {
                    return /*#__PURE__*/React.createElement(GenericModal, {
                      variant: "success",
                      onClose: handleClose,
                      onConfirm: handleClose
                    }, t('Custom_Sound_Has_Been_Deleted'));
                  });
                  _context3.next = 10;
                  break;

                case 6:
                  _context3.prev = 6;
                  _context3.t0 = _context3["catch"](0);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context3.t0
                  });
                  onChange();

                case 10:
                case "end":
                  return _context3.stop();
              }
            }
          }

          return _callee3$;
        }(), null, null, [[0, 6]], Promise);
      }

      return _callee3;
    }();

    var handleCancel = function () {
      setModal(null);
    };

    setModal(function () {
      return /*#__PURE__*/React.createElement(GenericModal, {
        variant: "danger",
        onConfirm: handleDelete,
        onCancel: handleCancel,
        confirmText: t('Delete')
      }, t('Custom_Sound_Delete_Warning'));
    });
  }, [_id, close, deleteCustomSound, dispatchToastMessage, onChange, setModal, t]);

  var _useFileInput = useFileInput(handleChangeFile, 'audio/mp3'),
      _useFileInput2 = _slicedToArray(_useFileInput, 1),
      clickUpload = _useFileInput2[0];

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
//# sourceMappingURL=/dynamic/client/views/admin/customSounds/2355404edbe6d064b1441efafa9a8aab06d6fe01.map
