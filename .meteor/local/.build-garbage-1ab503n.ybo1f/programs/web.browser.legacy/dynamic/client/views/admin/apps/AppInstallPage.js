function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppInstallPage.js                                                                           //
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
var Button, ButtonGroup, Icon, Field, FieldGroup, TextInput, Throbber;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Field: function (v) {
    Field = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Throbber: function (v) {
    Throbber = v;
  }
}, 0);
var React, useCallback, useEffect, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var Apps;
module.link("../../../../app/apps/client/orchestrator", {
  Apps: function (v) {
    Apps = v;
  }
}, 2);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 3);
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 4);
var useRoute, useQueryStringParameter;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  },
  useQueryStringParameter: function (v) {
    useQueryStringParameter = v;
  }
}, 5);
var useEndpoint, useUpload;
module.link("../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  },
  useUpload: function (v) {
    useUpload = v;
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
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 9);
var AppPermissionsReviewModal;
module.link("./AppPermissionsReviewModal", {
  "default": function (v) {
    AppPermissionsReviewModal = v;
  }
}, 10);
var AppUpdateModal;
module.link("./AppUpdateModal", {
  "default": function (v) {
    AppUpdateModal = v;
  }
}, 11);
var handleInstallError;
module.link("./helpers", {
  handleInstallError: function (v) {
    handleInstallError = v;
  }
}, 12);
var getManifestFromZippedApp;
module.link("./lib/getManifestFromZippedApp", {
  getManifestFromZippedApp: function (v) {
    getManifestFromZippedApp = v;
  }
}, 13);
var placeholderUrl = 'https://rocket.chat/apps/package.zip';

function AppInstallPage() {
  var t = useTranslation();
  var appsRoute = useRoute('admin-apps');
  var setModal = useSetModal();
  var appId = useQueryStringParameter('id');
  var queryUrl = useQueryStringParameter('url');

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      installing = _useState2[0],
      setInstalling = _useState2[1];

  var endpointAddress = appId ? "/apps/" + appId : '/apps';
  var downloadApp = useEndpoint('POST', endpointAddress);
  var uploadApp = useUpload(endpointAddress);
  var uploadUpdateApp = useUpload(endpointAddress + "/update");

  var _useForm = useForm({
    file: {},
    url: queryUrl
  }),
      values = _useForm.values,
      handlers = _useForm.handlers;

  var file = values.file,
      url = values.url;
  var canSave = !!url || !!file.name;
  var handleFile = handlers.handleFile,
      handleUrl = handlers.handleUrl;
  useEffect(function () {
    queryUrl && handleUrl(queryUrl);
  }, [queryUrl, handleUrl]);

  var _useFileInput = useFileInput(handleFile, 'app'),
      _useFileInput2 = _slicedToArray(_useFileInput, 1),
      handleUploadButtonClick = _useFileInput2[0];

  var sendFile = function () {
    function _callee(permissionsGranted, appFile, appId) {
      var app, fileData;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fileData = new FormData();
                fileData.append('app', appFile, appFile.name);
                fileData.append('permissions', JSON.stringify(permissionsGranted));

                if (!appId) {
                  _context.next = 8;
                  break;
                }

                _context.next = 6;
                return _regeneratorRuntime.awrap(uploadUpdateApp(fileData));

              case 6:
                _context.next = 11;
                break;

              case 8:
                _context.next = 10;
                return _regeneratorRuntime.awrap(uploadApp(fileData));

              case 10:
                app = _context.sent;

              case 11:
                appsRoute.push({
                  context: 'details',
                  id: appId || app.app.id
                });
                setModal(null);

              case 13:
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

  var cancelAction = useCallback(function () {
    setInstalling(false);
    setModal(null);
  }, [setInstalling, setModal]);

  var isAppInstalled = function () {
    function _callee2(appId) {
      var app;
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _regeneratorRuntime.awrap(Apps.getApp(appId));

              case 3:
                app = _context2.sent;
                return _context2.abrupt("return", !!app || false);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", false);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, [[0, 7]], Promise);
    }

    return _callee2;
  }();

  var handleAppPermissionsReview = function () {
    function _callee3(permissions, appFile, appId) {
      return _regeneratorRuntime.async(function () {
        function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(!permissions || permissions.length === 0)) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 3;
                return _regeneratorRuntime.awrap(sendFile(permissions, appFile, appId));

              case 3:
                _context3.next = 6;
                break;

              case 5:
                setModal( /*#__PURE__*/React.createElement(AppPermissionsReviewModal, {
                  appPermissions: permissions,
                  cancel: cancelAction,
                  confirm: function (permissions) {
                    return sendFile(permissions, appFile, appId);
                  }
                }));

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }

        return _callee3$;
      }(), null, null, null, Promise);
    }

    return _callee3;
  }();

  var install = function () {
    function _callee4() {
      var manifest, appFile, _await$downloadApp, buff, fileData, _manifest, permissions, id, isInstalled;

      return _regeneratorRuntime.async(function () {
        function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                setInstalling(true);
                _context4.prev = 1;

                if (!url) {
                  _context4.next = 14;
                  break;
                }

                _context4.next = 5;
                return _regeneratorRuntime.awrap(downloadApp({
                  url: url,
                  downloadOnly: true
                }));

              case 5:
                _await$downloadApp = _context4.sent;
                buff = _await$downloadApp.buff;
                fileData = Uint8Array.from(buff.data);
                _context4.next = 10;
                return _regeneratorRuntime.awrap(getManifestFromZippedApp(fileData));

              case 10:
                manifest = _context4.sent;
                appFile = new File([fileData], 'app.zip', {
                  type: 'application/zip'
                });
                _context4.next = 18;
                break;

              case 14:
                appFile = file;
                _context4.next = 17;
                return _regeneratorRuntime.awrap(getManifestFromZippedApp(appFile));

              case 17:
                manifest = _context4.sent;

              case 18:
                _manifest = manifest, permissions = _manifest.permissions, id = _manifest.id;
                _context4.next = 21;
                return _regeneratorRuntime.awrap(isAppInstalled(id));

              case 21:
                isInstalled = _context4.sent;

                if (!isInstalled) {
                  _context4.next = 26;
                  break;
                }

                setModal( /*#__PURE__*/React.createElement(AppUpdateModal, {
                  cancel: cancelAction,
                  confirm: function () {
                    return handleAppPermissionsReview(permissions, appFile, id);
                  }
                }));
                _context4.next = 28;
                break;

              case 26:
                _context4.next = 28;
                return _regeneratorRuntime.awrap(handleAppPermissionsReview(permissions, appFile));

              case 28:
                _context4.next = 33;
                break;

              case 30:
                _context4.prev = 30;
                _context4.t0 = _context4["catch"](1);
                handleInstallError(_context4.t0);

              case 33:
                _context4.prev = 33;
                setInstalling(false);
                return _context4.finish(33);

              case 36:
              case "end":
                return _context4.stop();
            }
          }
        }

        return _callee4$;
      }(), null, null, [[1, 30, 33, 36]], Promise);
    }

    return _callee4;
  }();

  var handleCancel = function () {
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
//# sourceMappingURL=/dynamic/client/views/admin/apps/4a8efa4a38281fdb25f40ee74d80fa0faa060ceb.map
