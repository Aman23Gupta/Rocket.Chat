function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/cloud/TroubleshootingSection.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onRegisterStatusChange"];

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
let Box, Button, ButtonGroup, Throbber;
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

  Throbber(v) {
    Throbber = v;
  }

}, 0);
let useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useSafely(v) {
    useSafely = v;
  }

}, 1);
let React, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let Subtitle;
module.link("../../../components/Subtitle", {
  default(v) {
    Subtitle = v;
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
let statusPageUrl;
module.link("./constants", {
  statusPageUrl(v) {
    statusPageUrl = v;
  }

}, 7);

function TroubleshootingSection(_ref) {
  let {
    onRegisterStatusChange
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const [isSyncing, setSyncing] = useSafely(useState(false));
  const syncWorkspace = useMethod('cloud:syncWorkspace');

  const handleSyncButtonClick = async () => {
    setSyncing(true);

    try {
      const isSynced = await syncWorkspace();

      if (!isSynced) {
        throw Error(t('An error occured syncing'));
      }

      dispatchToastMessage({
        type: 'success',
        message: t('Sync Complete')
      });
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    } finally {
      await (onRegisterStatusChange && onRegisterStatusChange());
      setSyncing(false);
    }
  };

  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "section"
  }, props), /*#__PURE__*/React.createElement(Subtitle, null, t('Cloud_troubleshooting')), /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    color: "neutral-800"
  }, /*#__PURE__*/React.createElement("p", null, t('Cloud_workspace_support'))), /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    disabled: isSyncing,
    minHeight: "x40",
    onClick: handleSyncButtonClick
  }, isSyncing ? /*#__PURE__*/React.createElement(Throbber, {
    is: "span",
    inheritColor: true
  }) : t('Sync'))), /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    color: "neutral-800"
  }, /*#__PURE__*/React.createElement("p", null, t('Cloud_status_page_description'), ":", ' ', /*#__PURE__*/React.createElement("a", {
    href: statusPageUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, statusPageUrl))));
}

module.exportDefault(TroubleshootingSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/cloud/b943e7ba4c6d0e22d3e75fc981cb2f762b1ad64f.map
