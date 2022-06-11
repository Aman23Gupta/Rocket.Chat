function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppStatus.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["app", "showStatus"];

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Box, Button, Icon, Throbber;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
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
let React, useCallback, useState, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  },

  memo(v) {
    memo = v;
  }

}, 2);
let Apps;
module.link("../../../../app/apps/client/orchestrator", {
  Apps(v) {
    Apps = v;
  }

}, 3);
let useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 4);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 5);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let AppPermissionsReviewModal;
module.link("./AppPermissionsReviewModal", {
  default(v) {
    AppPermissionsReviewModal = v;
  }

}, 7);
let CloudLoginModal;
module.link("./CloudLoginModal", {
  default(v) {
    CloudLoginModal = v;
  }

}, 8);
let IframeModal;
module.link("./IframeModal", {
  default(v) {
    IframeModal = v;
  }

}, 9);
let appButtonProps, appStatusSpanProps, handleAPIError, warnStatusChange, handleInstallError;
module.link("./helpers", {
  appButtonProps(v) {
    appButtonProps = v;
  },

  appStatusSpanProps(v) {
    appStatusSpanProps = v;
  },

  handleAPIError(v) {
    handleAPIError = v;
  },

  warnStatusChange(v) {
    warnStatusChange = v;
  },

  handleInstallError(v) {
    handleInstallError = v;
  }

}, 10);

const installApp = async _ref => {
  let {
    id,
    name,
    version,
    permissionsGranted
  } = _ref;

  try {
    const {
      status
    } = await Apps.installApp(id, version, permissionsGranted);
    warnStatusChange(name, status);
  } catch (error) {
    handleAPIError(error);
  }
};

const actions = {
  purchase: installApp,
  install: installApp,
  update: async _ref2 => {
    let {
      id,
      name,
      marketplaceVersion,
      permissionsGranted
    } = _ref2;

    try {
      const {
        status
      } = await Apps.updateApp(id, marketplaceVersion, permissionsGranted);
      warnStatusChange(name, status);
    } catch (error) {
      handleAPIError(error);
    }
  }
};

const AppStatus = _ref3 => {
  let {
    app,
    showStatus = true
  } = _ref3,
      props = _objectWithoutProperties(_ref3, _excluded);

  const t = useTranslation();
  const [loading, setLoading] = useSafely(useState());
  const [isAppPurchased, setPurchased] = useSafely(useState(app.isPurchased));
  const setModal = useSetModal();
  const button = appButtonProps(app);
  const status = !button && appStatusSpanProps(app);
  const action = (button === null || button === void 0 ? void 0 : button.action) || '';
  const confirmAction = useCallback(permissionsGranted => {
    setModal(null);
    actions[action](_objectSpread(_objectSpread({}, app), {}, {
      permissionsGranted
    })).then(() => {
      setLoading(false);
    });
  }, [setModal, action, app, setLoading]);
  const cancelAction = useCallback(() => {
    setLoading(false);
    setModal(null);
  }, [setLoading, setModal]);

  const showAppPermissionsReviewModal = () => {
    if (!isAppPurchased) {
      setPurchased(true);
    }

    if (!app.permissions || app.permissions.length === 0) {
      return confirmAction(app.permissions);
    }

    if (!Array.isArray(app.permissions)) {
      handleInstallError(new Error('The "permissions" property from the app manifest is invalid'));
    }

    return setModal( /*#__PURE__*/React.createElement(AppPermissionsReviewModal, {
      appPermissions: app.permissions,
      cancel: cancelAction,
      confirm: confirmAction
    }));
  };

  const checkUserLoggedIn = useMethod('cloud:checkUserLoggedIn');

  const handleClick = async e => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    const isLoggedIn = await checkUserLoggedIn();

    if (!isLoggedIn) {
      setLoading(false);
      setModal( /*#__PURE__*/React.createElement(CloudLoginModal, null));
      return;
    }

    if (action === 'purchase' && !isAppPurchased) {
      try {
        const data = await Apps.buildExternalUrl(app.id, app.purchaseType, false);
        setModal( /*#__PURE__*/React.createElement(IframeModal, {
          url: data.url,
          cancel: cancelAction,
          confirm: showAppPermissionsReviewModal
        }));
      } catch (error) {
        handleAPIError(error);
      }

      return;
    }

    showAppPermissionsReviewModal();
  };

  return /*#__PURE__*/React.createElement(Box, props, button && /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: loading,
    invisible: !showStatus && !loading,
    minHeight: "x40",
    onClick: handleClick
  }, loading ? /*#__PURE__*/React.createElement(Throbber, {
    inheritColor: true
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, button.icon && /*#__PURE__*/React.createElement(Icon, {
    name: button.icon
  }), t(button.label))), status && /*#__PURE__*/React.createElement(Box, {
    color: status.label === 'Disabled' ? 'warning' : 'hint',
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Icon, {
    size: "x20",
    name: status.icon,
    mie: "x4"
  }), t(status.label)));
};

module.exportDefault( /*#__PURE__*/memo(AppStatus));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/06deaf2630a8288614959253cacdb2138a3b8059.map
