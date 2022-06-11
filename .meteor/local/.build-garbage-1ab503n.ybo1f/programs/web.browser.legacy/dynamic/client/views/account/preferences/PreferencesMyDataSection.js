function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/preferences/PreferencesMyDataSection.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onChange"];

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var Accordion, Field, FieldGroup, ButtonGroup, Button, Icon, Box;
module.link("@rocket.chat/fuselage", {
  Accordion: function (v) {
    Accordion = v;
  },
  Field: function (v) {
    Field = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Box: function (v) {
    Box = v;
  }
}, 0);
var React, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
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
var MyDataModal;
module.link("./MyDataModal", {
  "default": function (v) {
    MyDataModal = v;
  }
}, 6);

var PreferencesMyDataSection = function (_ref) {
  var onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var setModal = useSetModal();
  var requestDataDownload = useMethod('requestDataDownload');
  var dispatchToastMessage = useToastMessageDispatch();
  var closeModal = useCallback(function () {
    return setModal(null);
  }, [setModal]);
  var downloadData = useCallback(function () {
    function _callee(fullExport) {
      var result, text, _text2, _text;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(requestDataDownload({
                  fullExport: fullExport
                }));

              case 3:
                result = _context.sent;

                if (!result.requested) {
                  _context.next = 8;
                  break;
                }

                text = t('UserDataDownload_Requested_Text', {
                  pending_operations: result.pendingOperationsBeforeMyRequest
                });
                setModal( /*#__PURE__*/React.createElement(MyDataModal, {
                  title: t('UserDataDownload_Requested'),
                  text: /*#__PURE__*/React.createElement(Box, {
                    dangerouslySetInnerHTML: {
                      __html: text
                    }
                  }),
                  onCancel: closeModal
                }));
                return _context.abrupt("return");

              case 8:
                if (!result.exportOperation) {
                  _context.next = 16;
                  break;
                }

                if (!(result.exportOperation.status === 'completed')) {
                  _context.next = 13;
                  break;
                }

                _text2 = result.url ? t('UserDataDownload_CompletedRequestExistedWithLink_Text', {
                  download_link: result.url
                }) : t('UserDataDownload_CompletedRequestExisted_Text');
                setModal( /*#__PURE__*/React.createElement(MyDataModal, {
                  title: t('UserDataDownload_Requested'),
                  text: /*#__PURE__*/React.createElement(Box, {
                    dangerouslySetInnerHTML: {
                      __html: _text2
                    }
                  }),
                  onCancel: closeModal
                }));
                return _context.abrupt("return");

              case 13:
                _text = t('UserDataDownload_RequestExisted_Text', {
                  pending_operations: result.pendingOperationsBeforeMyRequest
                });
                setModal( /*#__PURE__*/React.createElement(MyDataModal, {
                  title: t('UserDataDownload_Requested'),
                  text: /*#__PURE__*/React.createElement(Box, {
                    dangerouslySetInnerHTML: {
                      __html: _text
                    }
                  }),
                  onCancel: closeModal
                }));
                return _context.abrupt("return");

              case 16:
                setModal( /*#__PURE__*/React.createElement(MyDataModal, {
                  title: t('UserDataDownload_Requested'),
                  onCancel: closeModal
                }));
                _context.next = 22;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 19]], Promise);
    }

    return _callee;
  }(), [closeModal, dispatchToastMessage, requestDataDownload, setModal, t]);
  var handleClickDownload = useCallback(function () {
    return downloadData(false);
  }, [downloadData]);
  var handleClickExport = useCallback(function () {
    return downloadData(true);
  }, [downloadData]);
  return /*#__PURE__*/React.createElement(Accordion.Item, _extends({
    title: t('My Data')
  }, props), /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true,
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: handleClickDownload
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 20
  }), t('Download_My_Data')), /*#__PURE__*/React.createElement(Button, {
    onClick: handleClickExport
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 20
  }), t('Export_My_Data')))))));
};

module.exportDefault(PreferencesMyDataSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/preferences/cb82b818a901e6eac3e49fba3314992ad12aa93f.map
