function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/preferences/PreferencesMyDataSection.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onChange"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Accordion, Field, FieldGroup, ButtonGroup, Button, Icon, Box;
module.link("@rocket.chat/fuselage", {
  Accordion(v) {
    Accordion = v;
  },

  Field(v) {
    Field = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  },

  Box(v) {
    Box = v;
  }

}, 0);
let React, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 2);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 3);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let MyDataModal;
module.link("./MyDataModal", {
  default(v) {
    MyDataModal = v;
  }

}, 6);

const PreferencesMyDataSection = _ref => {
  let {
    onChange
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const setModal = useSetModal();
  const requestDataDownload = useMethod('requestDataDownload');
  const dispatchToastMessage = useToastMessageDispatch();
  const closeModal = useCallback(() => setModal(null), [setModal]);
  const downloadData = useCallback(async fullExport => {
    try {
      const result = await requestDataDownload({
        fullExport
      });

      if (result.requested) {
        const text = t('UserDataDownload_Requested_Text', {
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
        return;
      }

      if (result.exportOperation) {
        if (result.exportOperation.status === 'completed') {
          const text = result.url ? t('UserDataDownload_CompletedRequestExistedWithLink_Text', {
            download_link: result.url
          }) : t('UserDataDownload_CompletedRequestExisted_Text');
          setModal( /*#__PURE__*/React.createElement(MyDataModal, {
            title: t('UserDataDownload_Requested'),
            text: /*#__PURE__*/React.createElement(Box, {
              dangerouslySetInnerHTML: {
                __html: text
              }
            }),
            onCancel: closeModal
          }));
          return;
        }

        const text = t('UserDataDownload_RequestExisted_Text', {
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
        return;
      }

      setModal( /*#__PURE__*/React.createElement(MyDataModal, {
        title: t('UserDataDownload_Requested'),
        onCancel: closeModal
      }));
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  }, [closeModal, dispatchToastMessage, requestDataDownload, setModal, t]);
  const handleClickDownload = useCallback(() => downloadData(false), [downloadData]);
  const handleClickExport = useCallback(() => downloadData(true), [downloadData]);
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
//# sourceMappingURL=/dynamic/client/views/account/preferences/00685a6563c18ad54b8b72c4e4911a64c3fad08a.map
