function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/cloud/CopyStep.tsx                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Button, ButtonGroup, Icon, Scrollable, Modal;
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

  Icon(v) {
    Icon = v;
  },

  Scrollable(v) {
    Scrollable = v;
  },

  Modal(v) {
    Modal = v;
  }

}, 0);
let Clipboard;
module.link("clipboard", {
  default(v) {
    Clipboard = v;
  }

}, 1);
let React, useEffect, useState, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 2);
let MarkdownText;
module.link("../../../components/MarkdownText", {
  default(v) {
    MarkdownText = v;
  }

}, 3);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 4);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 5);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let cloudConsoleUrl;
module.link("./constants", {
  cloudConsoleUrl(v) {
    cloudConsoleUrl = v;
  }

}, 7);

const CopyStep = _ref => {
  let {
    onNextButtonClick
  } = _ref;
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const [clientKey, setClientKey] = useState('');
  const getWorkspaceRegisterData = useMethod('cloud:getWorkspaceRegisterData');
  useEffect(() => {
    const loadWorkspaceRegisterData = async () => {
      const clientKey = await getWorkspaceRegisterData();
      setClientKey(clientKey);
    };

    loadWorkspaceRegisterData();
  }, [getWorkspaceRegisterData]);
  const copyRef = useRef();
  useEffect(() => {
    if (!copyRef.current) {
      return;
    }

    const clipboard = new Clipboard(copyRef.current);
    clipboard.on('success', () => {
      dispatchToastMessage({
        type: 'success',
        message: t('Copied')
      });
    });
    return () => {
      clipboard.destroy();
    };
  }, [dispatchToastMessage, t]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(Box, {
    withRichContent: true
  }, /*#__PURE__*/React.createElement("p", null, t('Cloud_register_offline_helper'))), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    padding: "x16",
    flexGrow: 1,
    backgroundColor: "neutral-800"
  }, /*#__PURE__*/React.createElement(Scrollable, {
    vertical: true
  }, /*#__PURE__*/React.createElement(Box, {
    height: "x108",
    fontFamily: "mono",
    fontScale: "p2",
    color: "alternative",
    style: {
      wordBreak: 'break-all'
    }
  }, clientKey)), /*#__PURE__*/React.createElement(Button, {
    ref: copyRef,
    primary: true,
    "data-clipboard-text": clientKey
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "copy"
  }), " ", t('Copy'))), /*#__PURE__*/React.createElement(MarkdownText, {
    preserveHtml: true,
    content: t('Cloud_click_here', {
      cloudConsoleUrl
    })
  })), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: onNextButtonClick
  }, t('Next')))));
};

module.exportDefault(CopyStep);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/cloud/350ab6a81876f868e61f78eea196ac1ee7372713.map
