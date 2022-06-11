function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/import/NewImportPage.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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
var Box, Button, ButtonGroup, Callout, Chip, Field, Icon, Margins, Select, InputBox, TextInput, Throbber, UrlInput;
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
  Callout: function (v) {
    Callout = v;
  },
  Chip: function (v) {
    Chip = v;
  },
  Field: function (v) {
    Field = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  Select: function (v) {
    Select = v;
  },
  InputBox: function (v) {
    InputBox = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Throbber: function (v) {
    Throbber = v;
  },
  UrlInput: function (v) {
    UrlInput = v;
  }
}, 0);
var useUniqueId, useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useUniqueId: function (v) {
    useUniqueId = v;
  },
  useSafely: function (v) {
    useSafely = v;
  }
}, 1);
var React, useState, useMemo, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
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
}, 2);
var Importers;
module.link("../../../../app/importer/client/index", {
  Importers: function (v) {
    Importers = v;
  }
}, 3);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 4);
var useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  },
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 5);
var useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 6);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 7);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 8);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 9);
var useFormatMemorySize;
module.link("../../../hooks/useFormatMemorySize", {
  useFormatMemorySize: function (v) {
    useFormatMemorySize = v;
  }
}, 10);
var useErrorHandler;
module.link("./useErrorHandler", {
  useErrorHandler: function (v) {
    useErrorHandler = v;
  }
}, 11);

function NewImportPage() {
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var handleError = useErrorHandler();

  var _useSafely = useSafely(useState(false)),
      _useSafely2 = _slicedToArray(_useSafely, 2),
      isLoading = _useSafely2[0],
      setLoading = _useSafely2[1];

  var _useSafely3 = useSafely(useState('upload')),
      _useSafely4 = _slicedToArray(_useSafely3, 2),
      fileType = _useSafely4[0],
      setFileType = _useSafely4[1];

  var importerKey = useRouteParameter('importerKey');
  var importer = useMemo(function () {
    return Importers.get(importerKey);
  }, [importerKey]);
  var maxFileSize = useSetting('FileUpload_MaxFileSize');
  var importHistoryRoute = useRoute('admin-import');
  var newImportRoute = useRoute('admin-import-new');
  var prepareImportRoute = useRoute('admin-import-prepare');
  var uploadImportFile = useEndpoint('POST', 'uploadImportFile');
  var downloadPublicImportFile = useEndpoint('POST', 'downloadPublicImportFile');
  useEffect(function () {
    if (importerKey && !importer) {
      newImportRoute.replace();
    }
  }, [importer, importerKey, newImportRoute]);
  var formatMemorySize = useFormatMemorySize();

  var handleBackToImportsButtonClick = function () {
    importHistoryRoute.push();
  };

  var handleImporterKeyChange = function (importerKey) {
    newImportRoute.replace({
      importerKey: importerKey
    });
  };

  var handleFileTypeChange = function (fileType) {
    setFileType(fileType);
  };

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var handleImportFileChange = function () {
    function _callee(event) {
      var files;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event = event.originalEvent || event;
                files = event.target.files;

                if (!files || files.length === 0) {
                  files = (event.dataTransfer != null ? event.dataTransfer.files : undefined) || [];
                }

                setFiles(Array.from(files));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }();

  var handleFileUploadChipClick = function (file) {
    return function () {
      setFiles(function (files) {
        return files.filter(function (_file) {
          return _file !== file;
        });
      });
    };
  };

  var handleFileUploadImportButtonClick = function () {
    function _callee3() {
      return _regeneratorRuntime.async(function () {
        function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                setLoading(true);
                _context3.prev = 1;
                _context3.next = 4;
                return _regeneratorRuntime.awrap(Promise.all(Array.from(files, function (file) {
                  return new Promise(function (resolve) {
                    var reader = new FileReader();
                    reader.readAsDataURL(file);

                    reader.onloadend = function () {
                      function _callee2() {
                        return _regeneratorRuntime.async(function () {
                          function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  _context2.prev = 0;
                                  _context2.next = 3;
                                  return _regeneratorRuntime.awrap(uploadImportFile({
                                    binaryContent: reader.result.split(';base64,')[1],
                                    contentType: file.type,
                                    fileName: file.name,
                                    importerKey: importerKey
                                  }));

                                case 3:
                                  dispatchToastMessage({
                                    type: 'success',
                                    message: t('File_uploaded_successfully')
                                  });
                                  _context2.next = 9;
                                  break;

                                case 6:
                                  _context2.prev = 6;
                                  _context2.t0 = _context2["catch"](0);
                                  handleError(_context2.t0, t('Failed_To_upload_Import_File'));

                                case 9:
                                  _context2.prev = 9;
                                  resolve();
                                  return _context2.finish(9);

                                case 12:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }

                          return _callee2$;
                        }(), null, null, [[0, 6, 9, 12]], Promise);
                      }

                      return _callee2;
                    }();

                    reader.onerror = function () {
                      return resolve();
                    };
                  });
                })));

              case 4:
                prepareImportRoute.push();

              case 5:
                _context3.prev = 5;
                setLoading(false);
                return _context3.finish(5);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }

        return _callee3$;
      }(), null, null, [[1,, 5, 8]], Promise);
    }

    return _callee3;
  }();

  var _useSafely5 = useSafely(useState('')),
      _useSafely6 = _slicedToArray(_useSafely5, 2),
      fileUrl = _useSafely6[0],
      setFileUrl = _useSafely6[1];

  var handleFileUrlChange = function (event) {
    setFileUrl(event.currentTarget.value);
  };

  var handleFileUrlImportButtonClick = function () {
    function _callee4() {
      return _regeneratorRuntime.async(function () {
        function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                setLoading(true);
                _context4.prev = 1;
                _context4.next = 4;
                return _regeneratorRuntime.awrap(downloadPublicImportFile({
                  importerKey: importerKey,
                  fileUrl: fileUrl
                }));

              case 4:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Import_requested_successfully')
                });
                prepareImportRoute.push();
                _context4.next = 11;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](1);
                handleError(_context4.t0, t('Failed_To_upload_Import_File'));

              case 11:
                _context4.prev = 11;
                setLoading(false);
                return _context4.finish(11);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }

        return _callee4$;
      }(), null, null, [[1, 8, 11, 14]], Promise);
    }

    return _callee4;
  }();

  var _useSafely7 = useSafely(useState('')),
      _useSafely8 = _slicedToArray(_useSafely7, 2),
      filePath = _useSafely8[0],
      setFilePath = _useSafely8[1];

  var handleFilePathChange = function (event) {
    setFilePath(event.currentTarget.value);
  };

  var handleFilePathImportButtonClick = function () {
    function _callee5() {
      return _regeneratorRuntime.async(function () {
        function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                setLoading(true);
                _context5.prev = 1;
                _context5.next = 4;
                return _regeneratorRuntime.awrap(downloadPublicImportFile({
                  importerKey: importerKey,
                  fileUrl: filePath
                }));

              case 4:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Import_requested_successfully')
                });
                prepareImportRoute.push();
                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](1);
                handleError(_context5.t0, t('Failed_To_upload_Import_File'));

              case 11:
                _context5.prev = 11;
                setLoading(false);
                return _context5.finish(11);

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }

        return _callee5$;
      }(), null, null, [[1, 8, 11, 14]], Promise);
    }

    return _callee5;
  }();

  var importerKeySelectId = useUniqueId();
  var fileTypeSelectId = useUniqueId();
  var fileSourceInputId = useUniqueId();
  var handleImportButtonClick = fileType === 'upload' && handleFileUploadImportButtonClick || fileType === 'url' && handleFileUrlImportButtonClick || fileType === 'path' && handleFilePathImportButtonClick;
  return /*#__PURE__*/React.createElement(Page, {
    className: "page-settings"
  }, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Import_New_File')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    ghost: true,
    onClick: handleBackToImportsButtonClick
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "back"
  }), " ", t('Back_to_imports')), importer && /*#__PURE__*/React.createElement(Button, {
    primary: true,
    minHeight: "x40",
    disabled: isLoading,
    onClick: handleImportButtonClick
  }, isLoading ? /*#__PURE__*/React.createElement(Throbber, {
    inheritColor: true
  }) : t('Import')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    marginInline: "auto",
    marginBlock: "neg-x24",
    width: "full",
    maxWidth: "x580"
  }, /*#__PURE__*/React.createElement(Margins, {
    block: "x24"
  }, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    alignSelf: "stretch",
    htmlFor: importerKeySelectId
  }, t('Import_Type')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    id: importerKeySelectId,
    value: importerKey,
    disabled: isLoading,
    placeholder: t('Select_an_option'),
    onChange: handleImporterKeyChange,
    options: Importers.getAll().map(function (_ref) {
      var key = _ref.key,
          name = _ref.name;
      return [key, t(name)];
    })
  })), importer && /*#__PURE__*/React.createElement(Field.Hint, null, importer.name === 'CSV' ? t('Importer_From_Description_CSV') : t('Importer_From_Description', {
    from: t(importer.name)
  }))), importer && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    alignSelf: "stretch",
    htmlFor: fileTypeSelectId
  }, t('File_Type')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    id: fileTypeSelectId,
    value: fileType,
    disabled: isLoading,
    placeholder: t('Select_an_option'),
    onChange: handleFileTypeChange,
    options: [['upload', t('Upload')], ['url', t('Public_URL')], ['path', t('Server_File_Path')]]
  }))), importer && /*#__PURE__*/React.createElement(React.Fragment, null, fileType === 'upload' && /*#__PURE__*/React.createElement(React.Fragment, null, maxFileSize > 0 ? /*#__PURE__*/React.createElement(Callout, {
    type: "warning",
    marginBlock: "x16"
  }, t('Importer_Upload_FileSize_Message', {
    maxFileSize: formatMemorySize(maxFileSize)
  })) : /*#__PURE__*/React.createElement(Callout, {
    type: "info",
    marginBlock: "x16"
  }, t('Importer_Upload_Unlimited_FileSize')), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    alignSelf: "stretch",
    htmlFor: fileSourceInputId
  }, t('Importer_Source_File')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(InputBox, {
    type: "file",
    id: fileSourceInputId,
    onChange: handleImportFileChange
  })), (files === null || files === void 0 ? void 0 : files.length) > 0 && /*#__PURE__*/React.createElement(Field.Row, null, files.map(function (file, i) {
    return /*#__PURE__*/React.createElement(Chip, {
      key: i,
      onClick: handleFileUploadChipClick(file)
    }, file.name);
  })))), fileType === 'url' && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    alignSelf: "stretch",
    htmlFor: fileSourceInputId
  }, t('File_URL')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(UrlInput, {
    id: fileSourceInputId,
    value: fileUrl,
    onChange: handleFileUrlChange
  }))), fileType === 'path' && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    alignSelf: "stretch",
    htmlFor: fileSourceInputId
  }, t('File_Path')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    id: fileSourceInputId,
    value: filePath,
    onChange: handleFilePathChange
  }))))))));
}

module.exportDefault(NewImportPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/import/71463b5674db5377731a5fde0e9095714dd9ccc5.map
