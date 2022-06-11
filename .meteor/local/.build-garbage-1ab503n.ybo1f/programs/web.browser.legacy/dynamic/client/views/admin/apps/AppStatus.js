function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppStatus.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["app", "showStatus"];

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 3);
var Box, Button, Icon, Throbber;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Throbber: function (v) {
    Throbber = v;
  }
}, 0);
var useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useSafely: function (v) {
    useSafely = v;
  }
}, 1);
var React, useCallback, useState, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 2);
var Apps;
module.link("../../../../app/apps/client/orchestrator", {
  Apps: function (v) {
    Apps = v;
  }
}, 3);
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 4);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 5);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var AppPermissionsReviewModal;
module.link("./AppPermissionsReviewModal", {
  "default": function (v) {
    AppPermissionsReviewModal = v;
  }
}, 7);
var CloudLoginModal;
module.link("./CloudLoginModal", {
  "default": function (v) {
    CloudLoginModal = v;
  }
}, 8);
var IframeModal;
module.link("./IframeModal", {
  "default": function (v) {
    IframeModal = v;
  }
}, 9);
var appButtonProps, appStatusSpanProps, handleAPIError, warnStatusChange, handleInstallError;
module.link("./helpers", {
  appButtonProps: function (v) {
    appButtonProps = v;
  },
  appStatusSpanProps: function (v) {
    appStatusSpanProps = v;
  },
  handleAPIError: function (v) {
    handleAPIError = v;
  },
  warnStatusChange: function (v) {
    warnStatusChange = v;
  },
  handleInstallError: function (v) {
    handleInstallError = v;
  }
}, 10);

var installApp = function () {
  function _callee(_ref) {
    var id, name, version, permissionsGranted, _await$Apps$installAp, status;

    return _regeneratorRuntime.async(function () {
      function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = _ref.id, name = _ref.name, version = _ref.version, permissionsGranted = _ref.permissionsGranted;
              _context.prev = 1;
              _context.next = 4;
              return _regeneratorRuntime.awrap(Apps.installApp(id, version, permissionsGranted));

            case 4:
              _await$Apps$installAp = _context.sent;
              status = _await$Apps$installAp.status;
              warnStatusChange(name, status);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              handleAPIError(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }

      return _callee$;
    }(), null, null, [[1, 9]], Promise);
  }

  return _callee;
}();

var actions = {
  purchase: installApp,
  install: installApp,
  update: function () {
    function _callee2(_ref2) {
      var id, name, marketplaceVersion, permissionsGranted, _await$Apps$updateApp, status;

      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _ref2.id, name = _ref2.name, marketplaceVersion = _ref2.marketplaceVersion, permissionsGranted = _ref2.permissionsGranted;
                _context2.prev = 1;
                _context2.next = 4;
                return _regeneratorRuntime.awrap(Apps.updateApp(id, marketplaceVersion, permissionsGranted));

              case 4:
                _await$Apps$updateApp = _context2.sent;
                status = _await$Apps$updateApp.status;
                warnStatusChange(name, status);
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);
                handleAPIError(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, [[1, 9]], Promise);
    }

    return _callee2;
  }()
};

var AppStatus = function (_ref3) {
  var app = _ref3.app,
      _ref3$showStatus = _ref3.showStatus,
      showStatus = _ref3$showStatus === void 0 ? true : _ref3$showStatus,
      props = _objectWithoutProperties(_ref3, _excluded);

  var t = useTranslation();

  var _useSafely = useSafely(useState()),
      _useSafely2 = _slicedToArray(_useSafely, 2),
      loading = _useSafely2[0],
      setLoading = _useSafely2[1];

  var _useSafely3 = useSafely(useState(app.isPurchased)),
      _useSafely4 = _slicedToArray(_useSafely3, 2),
      isAppPurchased = _useSafely4[0],
      setPurchased = _useSafely4[1];

  var setModal = useSetModal();
  var button = appButtonProps(app);
  var status = !button && appStatusSpanProps(app);
  var action = (button === null || button === void 0 ? void 0 : button.action) || '';
  var confirmAction = useCallback(function (permissionsGranted) {
    setModal(null);
    actions[action](_objectSpread(_objectSpread({}, app), {}, {
      permissionsGranted: permissionsGranted
    })).then(function () {
      setLoading(false);
    });
  }, [setModal, action, app, setLoading]);
  var cancelAction = useCallback(function () {
    setLoading(false);
    setModal(null);
  }, [setLoading, setModal]);

  var showAppPermissionsReviewModal = function () {
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

  var checkUserLoggedIn = useMethod('cloud:checkUserLoggedIn');

  var handleClick = function () {
    function _callee3(e) {
      var isLoggedIn, data;
      return _regeneratorRuntime.async(function () {
        function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                e.preventDefault();
                e.stopPropagation();
                setLoading(true);
                _context3.next = 5;
                return _regeneratorRuntime.awrap(checkUserLoggedIn());

              case 5:
                isLoggedIn = _context3.sent;

                if (isLoggedIn) {
                  _context3.next = 10;
                  break;
                }

                setLoading(false);
                setModal( /*#__PURE__*/React.createElement(CloudLoginModal, null));
                return _context3.abrupt("return");

              case 10:
                if (!(action === 'purchase' && !isAppPurchased)) {
                  _context3.next = 22;
                  break;
                }

                _context3.prev = 11;
                _context3.next = 14;
                return _regeneratorRuntime.awrap(Apps.buildExternalUrl(app.id, app.purchaseType, false));

              case 14:
                data = _context3.sent;
                setModal( /*#__PURE__*/React.createElement(IframeModal, {
                  url: data.url,
                  cancel: cancelAction,
                  confirm: showAppPermissionsReviewModal
                }));
                _context3.next = 21;
                break;

              case 18:
                _context3.prev = 18;
                _context3.t0 = _context3["catch"](11);
                handleAPIError(_context3.t0);

              case 21:
                return _context3.abrupt("return");

              case 22:
                showAppPermissionsReviewModal();

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }

        return _callee3$;
      }(), null, null, [[11, 18]], Promise);
    }

    return _callee3;
  }();

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
//# sourceMappingURL=/dynamic/client/views/admin/apps/3d05243d10d00e5571d581a19ea4d5654b9033ae.map
