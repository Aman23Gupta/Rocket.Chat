function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppMenu.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["app"];

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

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 2);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 3);
var Box, Icon, Menu;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Menu: function (v) {
    Menu = v;
  }
}, 0);
var React, useMemo, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
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
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 3);
var useMethod, useEndpoint;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  },
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var CloudLoginModal;
module.link("./CloudLoginModal", {
  "default": function (v) {
    CloudLoginModal = v;
  }
}, 6);
var IframeModal;
module.link("./IframeModal", {
  "default": function (v) {
    IframeModal = v;
  }
}, 7);
var WarningModal;
module.link("./WarningModal", {
  "default": function (v) {
    WarningModal = v;
  }
}, 8);
var appEnabledStatuses, warnStatusChange, handleAPIError;
module.link("./helpers", {
  appEnabledStatuses: function (v) {
    appEnabledStatuses = v;
  },
  warnStatusChange: function (v) {
    warnStatusChange = v;
  },
  handleAPIError: function (v) {
    handleAPIError = v;
  }
}, 9);

function AppMenu(_ref) {
  var app = _ref.app,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var setModal = useSetModal();
  var appsRoute = useRoute('admin-apps');
  var checkUserLoggedIn = useMethod('cloud:checkUserLoggedIn');
  var setAppStatus = useEndpoint('POST', "/apps/" + app.id + "/status");
  var buildExternalUrl = useEndpoint('GET', '/apps');
  var syncApp = useEndpoint('POST', "/apps/" + app.id + "/sync");
  var uninstallApp = useEndpoint('DELETE', "/apps/" + app.id);
  var canAppBeSubscribed = app.purchaseType === 'subscription';
  var isSubscribed = app.subscriptionInfo && ['active', 'trialing'].includes(app.subscriptionInfo.status);
  var isAppEnabled = appEnabledStatuses.includes(app.status);
  var closeModal = useCallback(function () {
    setModal(null);
  }, [setModal]);
  var handleEnable = useCallback(function () {
    function _callee() {
      var _await$setAppStatus, status;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(setAppStatus({
                  status: 'manually_enabled'
                }));

              case 3:
                _await$setAppStatus = _context.sent;
                status = _await$setAppStatus.status;
                warnStatusChange(app.name, status);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                handleAPIError(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 8]], Promise);
    }

    return _callee;
  }(), [app.name, setAppStatus]);
  var handleViewLogs = useCallback(function () {
    appsRoute.push({
      context: 'logs',
      id: app.id
    });
  }, [app.id, appsRoute]);
  var handleSubscription = useCallback(function () {
    function _callee3() {
      var data, confirm;
      return _regeneratorRuntime.async(function () {
        function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _regeneratorRuntime.awrap(checkUserLoggedIn());

              case 2:
                if (_context3.sent) {
                  _context3.next = 5;
                  break;
                }

                setModal( /*#__PURE__*/React.createElement(CloudLoginModal, null));
                return _context3.abrupt("return");

              case 5:
                _context3.prev = 5;
                _context3.next = 8;
                return _regeneratorRuntime.awrap(buildExternalUrl({
                  buildExternalUrl: 'true',
                  appId: app.id,
                  purchaseType: app.purchaseType,
                  details: true
                }));

              case 8:
                data = _context3.sent;
                _context3.next = 15;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](5);
                handleAPIError(_context3.t0);
                return _context3.abrupt("return");

              case 15:
                confirm = function () {
                  function _callee2() {
                    return _regeneratorRuntime.async(function () {
                      function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.prev = 0;
                              _context2.next = 3;
                              return _regeneratorRuntime.awrap(syncApp());

                            case 3:
                              _context2.next = 8;
                              break;

                            case 5:
                              _context2.prev = 5;
                              _context2.t0 = _context2["catch"](0);
                              handleAPIError(_context2.t0);

                            case 8:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }

                      return _callee2$;
                    }(), null, null, [[0, 5]], Promise);
                  }

                  return _callee2;
                }();

                setModal( /*#__PURE__*/React.createElement(IframeModal, {
                  url: data.url,
                  confirm: confirm,
                  cancel: closeModal
                }));

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }

        return _callee3$;
      }(), null, null, [[5, 11]], Promise);
    }

    return _callee3;
  }(), [checkUserLoggedIn, setModal, closeModal, buildExternalUrl, app.id, app.purchaseType, syncApp]);
  var handleDisable = useCallback(function () {
    var confirm = function () {
      function _callee4() {
        var _await$setAppStatus2, status;

        return _regeneratorRuntime.async(function () {
          function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  closeModal();
                  _context4.prev = 1;
                  _context4.next = 4;
                  return _regeneratorRuntime.awrap(setAppStatus({
                    status: 'manually_disabled'
                  }));

                case 4:
                  _await$setAppStatus2 = _context4.sent;
                  status = _await$setAppStatus2.status;
                  warnStatusChange(app.name, status);
                  _context4.next = 12;
                  break;

                case 9:
                  _context4.prev = 9;
                  _context4.t0 = _context4["catch"](1);
                  handleAPIError(_context4.t0);

                case 12:
                case "end":
                  return _context4.stop();
              }
            }
          }

          return _callee4$;
        }(), null, null, [[1, 9]], Promise);
      }

      return _callee4;
    }();

    setModal( /*#__PURE__*/React.createElement(WarningModal, {
      close: closeModal,
      confirm: confirm,
      text: t('Apps_Marketplace_Deactivate_App_Prompt'),
      confirmText: t('Yes')
    }));
  }, [app.name, closeModal, setAppStatus, setModal, t]);
  var handleUninstall = useCallback(function () {
    var uninstall = function () {
      function _callee5() {
        return _regeneratorRuntime.async(function () {
          function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  closeModal();
                  _context5.prev = 1;
                  _context5.next = 4;
                  return _regeneratorRuntime.awrap(uninstallApp());

                case 4:
                  _context5.next = 9;
                  break;

                case 6:
                  _context5.prev = 6;
                  _context5.t0 = _context5["catch"](1);
                  handleAPIError(_context5.t0);

                case 9:
                case "end":
                  return _context5.stop();
              }
            }
          }

          return _callee5$;
        }(), null, null, [[1, 6]], Promise);
      }

      return _callee5;
    }();

    if (isSubscribed) {
      var confirm = function () {
        function _callee6() {
          return _regeneratorRuntime.async(function () {
            function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return _regeneratorRuntime.awrap(handleSubscription());

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }

            return _callee6$;
          }(), null, null, null, Promise);
        }

        return _callee6;
      }();

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
  var menuOptions = useMemo(function () {
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, canAppBeSubscribed && {
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
    });
  }, [canAppBeSubscribed, t, handleSubscription, handleViewLogs, isAppEnabled, handleDisable, handleEnable, handleUninstall]);
  return /*#__PURE__*/React.createElement(Menu, _extends({
    options: menuOptions,
    placement: "bottom-start"
  }, props));
}

module.exportDefault(AppMenu);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/b376e76ffc3369e28bd10432a58cb9ca66df545f.map
