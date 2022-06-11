function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppMenu.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["app"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 1);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 2);
let Box, Icon, Menu;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  },

  Menu(v) {
    Menu = v;
  }

}, 0);
let React, useMemo, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
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
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 3);
let useMethod, useEndpoint;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  },

  useEndpoint(v) {
    useEndpoint = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let CloudLoginModal;
module.link("./CloudLoginModal", {
  default(v) {
    CloudLoginModal = v;
  }

}, 6);
let IframeModal;
module.link("./IframeModal", {
  default(v) {
    IframeModal = v;
  }

}, 7);
let WarningModal;
module.link("./WarningModal", {
  default(v) {
    WarningModal = v;
  }

}, 8);
let appEnabledStatuses, warnStatusChange, handleAPIError;
module.link("./helpers", {
  appEnabledStatuses(v) {
    appEnabledStatuses = v;
  },

  warnStatusChange(v) {
    warnStatusChange = v;
  },

  handleAPIError(v) {
    handleAPIError = v;
  }

}, 9);

function AppMenu(_ref) {
  let {
    app
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const setModal = useSetModal();
  const appsRoute = useRoute('admin-apps');
  const checkUserLoggedIn = useMethod('cloud:checkUserLoggedIn');
  const setAppStatus = useEndpoint('POST', "/apps/".concat(app.id, "/status"));
  const buildExternalUrl = useEndpoint('GET', '/apps');
  const syncApp = useEndpoint('POST', "/apps/".concat(app.id, "/sync"));
  const uninstallApp = useEndpoint('DELETE', "/apps/".concat(app.id));
  const canAppBeSubscribed = app.purchaseType === 'subscription';
  const isSubscribed = app.subscriptionInfo && ['active', 'trialing'].includes(app.subscriptionInfo.status);
  const isAppEnabled = appEnabledStatuses.includes(app.status);
  const closeModal = useCallback(() => {
    setModal(null);
  }, [setModal]);
  const handleEnable = useCallback(async () => {
    try {
      const {
        status
      } = await setAppStatus({
        status: 'manually_enabled'
      });
      warnStatusChange(app.name, status);
    } catch (error) {
      handleAPIError(error);
    }
  }, [app.name, setAppStatus]);
  const handleViewLogs = useCallback(() => {
    appsRoute.push({
      context: 'logs',
      id: app.id
    });
  }, [app.id, appsRoute]);
  const handleSubscription = useCallback(async () => {
    if (!(await checkUserLoggedIn())) {
      setModal( /*#__PURE__*/React.createElement(CloudLoginModal, null));
      return;
    }

    let data;

    try {
      data = await buildExternalUrl({
        buildExternalUrl: 'true',
        appId: app.id,
        purchaseType: app.purchaseType,
        details: true
      });
    } catch (error) {
      handleAPIError(error);
      return;
    }

    const confirm = async () => {
      try {
        await syncApp();
      } catch (error) {
        handleAPIError(error);
      }
    };

    setModal( /*#__PURE__*/React.createElement(IframeModal, {
      url: data.url,
      confirm: confirm,
      cancel: closeModal
    }));
  }, [checkUserLoggedIn, setModal, closeModal, buildExternalUrl, app.id, app.purchaseType, syncApp]);
  const handleDisable = useCallback(() => {
    const confirm = async () => {
      closeModal();

      try {
        const {
          status
        } = await setAppStatus({
          status: 'manually_disabled'
        });
        warnStatusChange(app.name, status);
      } catch (error) {
        handleAPIError(error);
      }
    };

    setModal( /*#__PURE__*/React.createElement(WarningModal, {
      close: closeModal,
      confirm: confirm,
      text: t('Apps_Marketplace_Deactivate_App_Prompt'),
      confirmText: t('Yes')
    }));
  }, [app.name, closeModal, setAppStatus, setModal, t]);
  const handleUninstall = useCallback(() => {
    const uninstall = async () => {
      closeModal();

      try {
        await uninstallApp();
      } catch (error) {
        handleAPIError(error);
      }
    };

    if (isSubscribed) {
      const confirm = async () => {
        await handleSubscription();
      };

      setModal( /*#__PURE__*/React.createElement(WarningModal, {
        close: closeModal,
        cancel: uninstall,
        confirm: confirm,
        text: t('Apps_Marketplace_Uninstall_Subscribed_App_Prompt'),
        confirmText: t('Apps_Marketplace_Modify_App_Subscription'),
        cancelText: t('Apps_Marketplace_Uninstall_Subscribed_App_Anyway')
      }));
    }

    setModal( /*#__PURE__*/React.createElement(WarningModal, {
      close: closeModal,
      confirm: uninstall,
      text: t('Apps_Marketplace_Uninstall_App_Prompt'),
      confirmText: t('Yes')
    }));
  }, [closeModal, handleSubscription, isSubscribed, setModal, t, uninstallApp]);
  const menuOptions = useMemo(() => _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, canAppBeSubscribed && {
    subscribe: {
      label: /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Icon, {
        name: "card",
        size: "x16",
        marginInlineEnd: "x4"
      }), t('Subscription')),
      action: handleSubscription
    }
  }), {}, {
    viewLogs: {
      label: /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Icon, {
        name: "list-alt",
        size: "x16",
        marginInlineEnd: "x4"
      }), t('View_Logs')),
      action: handleViewLogs
    }
  }, isAppEnabled && {
    disable: {
      label: /*#__PURE__*/React.createElement(Box, {
        color: "warning"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "ban",
        size: "x16",
        marginInlineEnd: "x4"
      }), t('Disable')),
      action: handleDisable
    }
  }), !isAppEnabled && {
    enable: {
      label: /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: "x16",
        marginInlineEnd: "x4"
      }), t('Enable')),
      action: handleEnable
    }
  }), {}, {
    uninstall: {
      label: /*#__PURE__*/React.createElement(Box, {
        color: "danger"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "trash",
        size: "x16",
        marginInlineEnd: "x4"
      }), t('Uninstall')),
      action: handleUninstall
    }
  }), [canAppBeSubscribed, t, handleSubscription, handleViewLogs, isAppEnabled, handleDisable, handleEnable, handleUninstall]);
  return /*#__PURE__*/React.createElement(Menu, _extends({
    options: menuOptions,
    placement: "bottom-start"
  }, props));
}

module.exportDefault(AppMenu);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/26d3d782104fa499db26674cce0ce18ee45411cc.map
