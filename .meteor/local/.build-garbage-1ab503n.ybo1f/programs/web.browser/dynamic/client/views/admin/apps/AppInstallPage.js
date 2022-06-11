function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppInstallPage.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Button, ButtonGroup, Icon, Field, FieldGroup, TextInput, Throbber;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Icon(v) {
    Icon = v;
  },

  Field(v) {
    Field = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Throbber(v) {
    Throbber = v;
  }

}, 0);
let React, useCallback, useEffect, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let Apps;
module.link("../../../../app/apps/client/orchestrator", {
  Apps(v) {
    Apps = v;
  }

}, 2);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 3);
let useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 4);
let useRoute, useQueryStringParameter;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  },

  useQueryStringParameter(v) {
    useQueryStringParameter = v;
  }

}, 5);
let useEndpoint, useUpload;
module.link("../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  },

  useUpload(v) {
    useUpload = v;
  }

}, 6);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
let useFileInput;
module.link("../../../hooks/useFileInput", {
  useFileInput(v) {
    useFileInput = v;
  }

}, 8);
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 9);
let AppPermissionsReviewModal;
module.link("./AppPermissionsReviewModal", {
  default(v) {
    AppPermissionsReviewModal = v;
  }

}, 10);
let AppUpdateModal;
module.link("./AppUpdateModal", {
  default(v) {
    AppUpdateModal = v;
  }

}, 11);
let handleInstallError;
module.link("./helpers", {
  handleInstallError(v) {
    handleInstallError = v;
  }

}, 12);
let getManifestFromZippedApp;
module.link("./lib/getManifestFromZippedApp", {
  getManifestFromZippedApp(v) {
    getManifestFromZippedApp = v;
  }

}, 13);
const placeholderUrl = 'https://rocket.chat/apps/package.zip';

function AppInstallPage() {
  const t = useTranslation();
  const appsRoute = useRoute('admin-apps');
  const setModal = useSetModal();
  const appId = useQueryStringParameter('id');
  const queryUrl = useQueryStringParameter('url');
  const [installing, setInstalling] = useState(false);
  const endpointAddress = appId ? "/apps/".concat(appId) : '/apps';
  const downloadApp = useEndpoint('POST', endpointAddress);
  const uploadApp = useUpload(endpointAddress);
  const uploadUpdateApp = useUpload("".concat(endpointAddress, "/update"));
  const {
    values,
    handlers
  } = useForm({
    file: {},
    url: queryUrl
  });
  const {
    file,
    url
  } = values;
  const canSave = !!url || !!file.name;
  const {
    handleFile,
    handleUrl
  } = handlers;
  useEffect(() => {
    queryUrl && handleUrl(queryUrl);
  }, [queryUrl, handleUrl]);
  const [handleUploadButtonClick] = useFileInput(handleFile, 'app');

  const sendFile = async (permissionsGranted, appFile, appId) => {
    let app;
    const fileData = new FormData();
    fileData.append('app', appFile, appFile.name);
    fileData.append('permissions', JSON.stringify(permissionsGranted));

    if (appId) {
      await uploadUpdateApp(fileData);
    } else {
      app = await uploadApp(fileData);
    }

    appsRoute.push({
      context: 'details',
      id: appId || app.app.id
    });
    setModal(null);
  };

  const cancelAction = useCallback(() => {
    setInstalling(false);
    setModal(null);
  }, [setInstalling, setModal]);

  const isAppInstalled = async appId => {
    try {
      const app = await Apps.getApp(appId);
      return !!app || false;
    } catch (e) {
      return false;
    }
  };

  const handleAppPermissionsReview = async (permissions, appFile, appId) => {
    if (!permissions || permissions.length === 0) {
      await sendFile(permissions, appFile, appId);
    } else {
      setModal( /*#__PURE__*/React.createElement(AppPermissionsReviewModal, {
        appPermissions: permissions,
        cancel: cancelAction,
        confirm: permissions => sendFile(permissions, appFile, appId)
      }));
    }
  };

  const install = async () => {
    setInstalling(true);

    try {
      let manifest;
      let appFile;

      if (url) {
        const {
          buff
        } = await downloadApp({
          url,
          downloadOnly: true
        });
        const fileData = Uint8Array.from(buff.data);
        manifest = await getManifestFromZippedApp(fileData);
        appFile = new File([fileData], 'app.zip', {
          type: 'application/zip'
        });
      } else {
        appFile = file;
        manifest = await getManifestFromZippedApp(appFile);
      }

      const {
        permissions,
        id
      } = manifest;
      const isInstalled = await isAppInstalled(id);

      if (isInstalled) {
        setModal( /*#__PURE__*/React.createElement(AppUpdateModal, {
          cancel: cancelAction,
          confirm: () => handleAppPermissionsReview(permissions, appFile, id)
        }));
      } else {
        await handleAppPermissionsReview(permissions, appFile);
      }
    } catch (error) {
      handleInstallError(error);
    } finally {
      setInstalling(false);
    }
  };

  const handleCancel = () => {
    appsRoute.push();
  };

  return /*#__PURE__*/React.createElement(Page, {
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('App_Installation')
  }), /*#__PURE__*/React.createElement(Page.ScrollableContent, null, /*#__PURE__*/React.createElement(FieldGroup, {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    maxWidth: "x600",
    w: "full"
  }, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('App_Url_to_Install_From')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: placeholderUrl,
    value: url,
    onChange: handleUrl,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "permalink",
      size: "x20"
    })
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('App_Url_to_Install_From_File')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: file.name || '',
    addon: /*#__PURE__*/React.createElement(Button, {
      small: true,
      primary: true,
      onClick: handleUploadButtonClick,
      mb: "neg-x4",
      mie: "neg-x8"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: "x12"
    }), t('Browse_Files'))
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    disabled: !canSave || installing,
    onClick: install
  }, !installing && t('Install'), installing && /*#__PURE__*/React.createElement(Throbber, {
    inheritColor: true
  })), /*#__PURE__*/React.createElement(Button, {
    onClick: handleCancel
  }, t('Cancel')))))));
}

module.exportDefault(AppInstallPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/402d4bb079cbd17ca297c8bfbe4b4df4a0ad45df.map
