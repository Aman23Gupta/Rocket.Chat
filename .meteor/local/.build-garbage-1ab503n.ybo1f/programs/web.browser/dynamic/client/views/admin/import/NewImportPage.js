function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/import/NewImportPage.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Button, ButtonGroup, Callout, Chip, Field, Icon, Margins, Select, InputBox, TextInput, Throbber, UrlInput;
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

  Callout(v) {
    Callout = v;
  },

  Chip(v) {
    Chip = v;
  },

  Field(v) {
    Field = v;
  },

  Icon(v) {
    Icon = v;
  },

  Margins(v) {
    Margins = v;
  },

  Select(v) {
    Select = v;
  },

  InputBox(v) {
    InputBox = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Throbber(v) {
    Throbber = v;
  },

  UrlInput(v) {
    UrlInput = v;
  }

}, 0);
let useUniqueId, useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useUniqueId(v) {
    useUniqueId = v;
  },

  useSafely(v) {
    useSafely = v;
  }

}, 1);
let React, useState, useMemo, useEffect;
module.link("react", {
  default(v) {
    React = v;
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

}, 2);
let Importers;
module.link("../../../../app/importer/client/index", {
  Importers(v) {
    Importers = v;
  }

}, 3);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 4);
let useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  },

  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 5);
let useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 6);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 7);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 8);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 9);
let useFormatMemorySize;
module.link("../../../hooks/useFormatMemorySize", {
  useFormatMemorySize(v) {
    useFormatMemorySize = v;
  }

}, 10);
let useErrorHandler;
module.link("./useErrorHandler", {
  useErrorHandler(v) {
    useErrorHandler = v;
  }

}, 11);

function NewImportPage() {
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const handleError = useErrorHandler();
  const [isLoading, setLoading] = useSafely(useState(false));
  const [fileType, setFileType] = useSafely(useState('upload'));
  const importerKey = useRouteParameter('importerKey');
  const importer = useMemo(() => Importers.get(importerKey), [importerKey]);
  const maxFileSize = useSetting('FileUpload_MaxFileSize');
  const importHistoryRoute = useRoute('admin-import');
  const newImportRoute = useRoute('admin-import-new');
  const prepareImportRoute = useRoute('admin-import-prepare');
  const uploadImportFile = useEndpoint('POST', 'uploadImportFile');
  const downloadPublicImportFile = useEndpoint('POST', 'downloadPublicImportFile');
  useEffect(() => {
    if (importerKey && !importer) {
      newImportRoute.replace();
    }
  }, [importer, importerKey, newImportRoute]);
  const formatMemorySize = useFormatMemorySize();

  const handleBackToImportsButtonClick = () => {
    importHistoryRoute.push();
  };

  const handleImporterKeyChange = importerKey => {
    newImportRoute.replace({
      importerKey
    });
  };

  const handleFileTypeChange = fileType => {
    setFileType(fileType);
  };

  const [files, setFiles] = useState([]);

  const handleImportFileChange = async event => {
    event = event.originalEvent || event;
    let {
      files
    } = event.target;

    if (!files || files.length === 0) {
      files = (event.dataTransfer != null ? event.dataTransfer.files : undefined) || [];
    }

    setFiles(Array.from(files));
  };

  const handleFileUploadChipClick = file => () => {
    setFiles(files => files.filter(_file => _file !== file));
  };

  const handleFileUploadImportButtonClick = async () => {
    setLoading(true);

    try {
      await Promise.all(Array.from(files, file => new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = async () => {
          try {
            await uploadImportFile({
              binaryContent: reader.result.split(';base64,')[1],
              contentType: file.type,
              fileName: file.name,
              importerKey
            });
            dispatchToastMessage({
              type: 'success',
              message: t('File_uploaded_successfully')
            });
          } catch (error) {
            handleError(error, t('Failed_To_upload_Import_File'));
          } finally {
            resolve();
          }
        };

        reader.onerror = () => resolve();
      })));
      prepareImportRoute.push();
    } finally {
      setLoading(false);
    }
  };

  const [fileUrl, setFileUrl] = useSafely(useState(''));

  const handleFileUrlChange = event => {
    setFileUrl(event.currentTarget.value);
  };

  const handleFileUrlImportButtonClick = async () => {
    setLoading(true);

    try {
      await downloadPublicImportFile({
        importerKey,
        fileUrl
      });
      dispatchToastMessage({
        type: 'success',
        message: t('Import_requested_successfully')
      });
      prepareImportRoute.push();
    } catch (error) {
      handleError(error, t('Failed_To_upload_Import_File'));
    } finally {
      setLoading(false);
    }
  };

  const [filePath, setFilePath] = useSafely(useState(''));

  const handleFilePathChange = event => {
    setFilePath(event.currentTarget.value);
  };

  const handleFilePathImportButtonClick = async () => {
    setLoading(true);

    try {
      await downloadPublicImportFile({
        importerKey,
        fileUrl: filePath
      });
      dispatchToastMessage({
        type: 'success',
        message: t('Import_requested_successfully')
      });
      prepareImportRoute.push();
    } catch (error) {
      handleError(error, t('Failed_To_upload_Import_File'));
    } finally {
      setLoading(false);
    }
  };

  const importerKeySelectId = useUniqueId();
  const fileTypeSelectId = useUniqueId();
  const fileSourceInputId = useUniqueId();
  const handleImportButtonClick = fileType === 'upload' && handleFileUploadImportButtonClick || fileType === 'url' && handleFileUrlImportButtonClick || fileType === 'path' && handleFilePathImportButtonClick;
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
    options: Importers.getAll().map(_ref => {
      let {
        key,
        name
      } = _ref;
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
  })), (files === null || files === void 0 ? void 0 : files.length) > 0 && /*#__PURE__*/React.createElement(Field.Row, null, files.map((file, i) => /*#__PURE__*/React.createElement(Chip, {
    key: i,
    onClick: handleFileUploadChipClick(file)
  }, file.name))))), fileType === 'url' && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
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
//# sourceMappingURL=/dynamic/client/views/admin/import/2b1fa56acd836344a16cb119b5e2bd419f706eeb.map
