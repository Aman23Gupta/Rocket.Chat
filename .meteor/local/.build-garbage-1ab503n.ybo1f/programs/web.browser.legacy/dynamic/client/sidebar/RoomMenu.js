function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/RoomMenu.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["label"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 2);

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 3);
var Option, Menu;
module.link("@rocket.chat/fuselage", {
  Option: function (v) {
    Option = v;
  },
  Menu: function (v) {
    Menu = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, memo, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 2);
var RoomManager;
module.link("../../app/ui-utils/client/lib/RoomManager", {
  RoomManager: function (v) {
    RoomManager = v;
  }
}, 3);
var roomTypes, UiTextContext;
module.link("../../app/utils/client", {
  roomTypes: function (v) {
    roomTypes = v;
  },
  UiTextContext: function (v) {
    UiTextContext = v;
  }
}, 4);
var GenericModalDoNotAskAgain;
module.link("../components/GenericModal", {
  GenericModalDoNotAskAgain: function (v) {
    GenericModalDoNotAskAgain = v;
  }
}, 5);
var usePermission;
module.link("../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 6);
var useSetModal;
module.link("../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 7);
var useRoute;
module.link("../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 8);
var useMethod;
module.link("../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 9);
var useSetting;
module.link("../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 10);
var useToastMessageDispatch;
module.link("../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 11);
var useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 12);
var useUserSubscription;
module.link("../contexts/UserContext", {
  useUserSubscription: function (v) {
    useUserSubscription = v;
  }
}, 13);
var useDontAskAgain;
module.link("../hooks/useDontAskAgain", {
  useDontAskAgain: function (v) {
    useDontAskAgain = v;
  }
}, 14);
var WarningModal;
module.link("../views/admin/apps/WarningModal", {
  "default": function (v) {
    WarningModal = v;
  }
}, 15);
var fields = {
  f: 1,
  t: 1,
  name: 1
};

var RoomMenu = function (_ref) {
  var rid = _ref.rid,
      unread = _ref.unread,
      threadUnread = _ref.threadUnread,
      alert = _ref.alert,
      roomOpen = _ref.roomOpen,
      type = _ref.type,
      cl = _ref.cl,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name;
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var setModal = useSetModal();
  var closeModal = useMutableCallback(function () {
    return setModal();
  });
  var router = useRoute('home');
  var subscription = useUserSubscription(rid, fields);
  var canFavorite = useSetting('Favorite_Rooms');
  var isFavorite = (subscription != null ? subscription.f : undefined) != null && subscription.f;
  var dontAskHideRoom = useDontAskAgain('hideRoom');
  var hideRoom = useMethod('hideRoom');
  var readMessages = useMethod('readMessages');
  var unreadMessages = useMethod('unreadMessages');
  var toggleFavorite = useMethod('toggleFavorite');
  var leaveRoom = useMethod('leaveRoom');
  var isUnread = alert || unread || threadUnread;
  var canLeaveChannel = usePermission('leave-c');
  var canLeavePrivate = usePermission('leave-p');

  var canLeave = function () {
    if (type === 'c' && !canLeaveChannel) {
      return false;
    }

    if (type === 'p' && !canLeavePrivate) {
      return false;
    }

    return !(cl != null && !cl || ['d', 'l'].includes(type));
  }();

  var handleLeave = useMutableCallback(function () {
    var leave = function () {
      function _callee() {
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _regeneratorRuntime.awrap(leaveRoom(rid));

                case 3:
                  if (roomOpen) {
                    router.push({});
                  }

                  RoomManager.close(rid);
                  _context.next = 10;
                  break;

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](0);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context.t0
                  });

                case 10:
                  closeModal();

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, [[0, 7]], Promise);
      }

      return _callee;
    }();

    var warnText = roomTypes.getConfig(type).getUiText(UiTextContext.LEAVE_WARNING);
    setModal( /*#__PURE__*/React.createElement(WarningModal, {
      text: t(warnText, name),
      confirmText: t('Leave_room'),
      close: closeModal,
      cancel: closeModal,
      cancelText: t('Cancel'),
      confirm: leave
    }));
  });
  var handleHide = useMutableCallback(function () {
    function _callee3() {
      var hide, warnText;
      return _regeneratorRuntime.async(function () {
        function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                hide = function () {
                  function _callee2() {
                    return _regeneratorRuntime.async(function () {
                      function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.prev = 0;
                              _context2.next = 3;
                              return _regeneratorRuntime.awrap(hideRoom(rid));

                            case 3:
                              _context2.next = 8;
                              break;

                            case 5:
                              _context2.prev = 5;
                              _context2.t0 = _context2["catch"](0);
                              dispatchToastMessage({
                                type: 'error',
                                message: _context2.t0
                              });

                            case 8:
                              closeModal();

                            case 9:
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

                warnText = roomTypes.getConfig(type).getUiText(UiTextContext.HIDE_WARNING);

                if (!dontAskHideRoom) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", hide());

              case 4:
                setModal( /*#__PURE__*/React.createElement(GenericModalDoNotAskAgain, {
                  variant: "danger",
                  confirmText: t('Yes_hide_it'),
                  cancelText: t('Cancel'),
                  onClose: closeModal,
                  onCancel: closeModal,
                  onConfirm: hide,
                  dontAskAgain: {
                    action: 'hideRoom',
                    label: t('Hide_room')
                  }
                }, t(warnText, name)));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }

        return _callee3$;
      }(), null, null, null, Promise);
    }

    return _callee3;
  }());
  var handleToggleRead = useMutableCallback(function () {
    function _callee4() {
      return _regeneratorRuntime.async(function () {
        function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;

                if (!isUnread) {
                  _context4.next = 5;
                  break;
                }

                _context4.next = 4;
                return _regeneratorRuntime.awrap(readMessages(rid));

              case 4:
                return _context4.abrupt("return");

              case 5:
                _context4.next = 7;
                return _regeneratorRuntime.awrap(unreadMessages(null, rid));

              case 7:
                if (!(subscription == null)) {
                  _context4.next = 9;
                  break;
                }

                return _context4.abrupt("return");

              case 9:
                RoomManager.close(subscription.t + subscription.name);
                router.push({});
                _context4.next = 16;
                break;

              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context4.t0
                });

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }

        return _callee4$;
      }(), null, null, [[0, 13]], Promise);
    }

    return _callee4;
  }());
  var handleToggleFavorite = useMutableCallback(function () {
    function _callee5() {
      return _regeneratorRuntime.async(function () {
        function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _regeneratorRuntime.awrap(toggleFavorite(rid, !isFavorite));

              case 3:
                _context5.next = 8;
                break;

              case 5:
                _context5.prev = 5;
                _context5.t0 = _context5["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context5.t0
                });

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }

        return _callee5$;
      }(), null, null, [[0, 5]], Promise);
    }

    return _callee5;
  }());
  var menuOptions = useMemo(function () {
    return _objectSpread(_objectSpread({
      hideRoom: {
        label: {
          label: t('Hide'),
          icon: 'eye-off'
        },
        action: handleHide
      },
      toggleRead: {
        label: {
          label: isUnread ? t('Mark_read') : t('Mark_unread'),
          icon: 'flag'
        },
        action: handleToggleRead
      }
    }, canFavorite && {
      toggleFavorite: {
        label: {
          label: isFavorite ? t('Unfavorite') : t('Favorite'),
          icon: isFavorite ? 'star-filled' : 'star'
        },
        action: handleToggleFavorite
      }
    }), canLeave && {
      leaveRoom: {
        label: {
          label: t('Leave_room'),
          icon: 'sign-out'
        },
        action: handleLeave
      }
    });
  }, [t, handleHide, isUnread, handleToggleRead, canFavorite, isFavorite, handleToggleFavorite, canLeave, handleLeave]);
  return /*#__PURE__*/React.createElement(Menu, {
    "rcx-sidebar-item__menu": true,
    mini: true,
    "aria-keyshortcuts": "alt",
    tabIndex: -1,
    options: menuOptions,
    renderItem: function (_ref2) {
      var _ref2$label = _ref2.label,
          label = _ref2$label.label,
          icon = _ref2$label.icon,
          props = _objectWithoutProperties(_ref2, _excluded);

      return /*#__PURE__*/React.createElement(Option, _extends({
        label: label,
        title: label,
        icon: icon
      }, props));
    }
  });
};

module.exportDefault( /*#__PURE__*/memo(RoomMenu));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/ca59b06d0426a96e0eccb045398fa46f6a29e64b.map
