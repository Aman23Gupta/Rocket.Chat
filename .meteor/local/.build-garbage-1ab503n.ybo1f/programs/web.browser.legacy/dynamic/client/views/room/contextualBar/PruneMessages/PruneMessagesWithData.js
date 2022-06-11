function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/PruneMessages/PruneMessagesWithData.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 1);
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
}, 2);
var GenericModal;
module.link("../../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 3);
var useSetModal;
module.link("../../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 4);
var useEndpoint;
module.link("../../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 5);
var useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 6);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var useUserRoom;
module.link("../../../../contexts/UserContext", {
  useUserRoom: function (v) {
    useUserRoom = v;
  }
}, 8);
var useForm;
module.link("../../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 9);
var PruneMessages;
module.link("./PruneMessages", {
  "default": function (v) {
    PruneMessages = v;
  }
}, 10);

var getTimeZoneOffset = function () {
  var offset = new Date().getTimezoneOffset();
  var absOffset = Math.abs(offset);
  return "" + (offset < 0 ? '+' : '-') + ("00" + Math.floor(absOffset / 60)).slice(-2) + ":" + ("00" + absOffset % 60).slice(-2);
};

var initialValues = {
  newerDate: '',
  newerTime: '',
  olderDate: '',
  olderTime: '',
  users: [],
  inclusive: false,
  pinned: false,
  discussion: false,
  threads: false,
  attached: false
};

var PruneMessagesWithData = function (_ref) {
  var rid = _ref.rid,
      tabBar = _ref.tabBar;
  var t = useTranslation();
  var room = useUserRoom(rid);
  room.type = room.t;
  room.rid = rid;
  var name = room.name,
      usernames = room.usernames;
  var setModal = useSetModal();
  var onClickClose = useMutableCallback(function () {
    return tabBar && tabBar.close();
  });
  var closeModal = useCallback(function () {
    return setModal(null);
  }, [setModal]);
  var dispatchToastMessage = useToastMessageDispatch();
  var pruneMessages = useEndpoint('POST', 'rooms.cleanHistory');

  var _useState = useState(new Date('0001-01-01T00:00:00Z')),
      _useState2 = _slicedToArray(_useState, 2),
      fromDate = _useState2[0],
      setFromDate = _useState2[1];

  var _useState3 = useState(new Date('9999-12-31T23:59:59Z')),
      _useState4 = _slicedToArray(_useState3, 2),
      toDate = _useState4[0],
      setToDate = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      callOutText = _useState6[0],
      setCallOutText = _useState6[1];

  var _useState7 = useState(),
      _useState8 = _slicedToArray(_useState7, 2),
      validateText = _useState8[0],
      setValidateText = _useState8[1];

  var _useState9 = useState(0),
      _useState10 = _slicedToArray(_useState9, 2),
      counter = _useState10[0],
      setCounter = _useState10[1];

  var _useForm = useForm(initialValues),
      values = _useForm.values,
      handlers = _useForm.handlers,
      reset = _useForm.reset;

  var newerDate = values.newerDate,
      newerTime = values.newerTime,
      olderDate = values.olderDate,
      olderTime = values.olderTime,
      users = values.users,
      inclusive = values.inclusive,
      pinned = values.pinned,
      discussion = values.discussion,
      threads = values.threads,
      attached = values.attached;
  var handleNewerDate = handlers.handleNewerDate,
      handleNewerTime = handlers.handleNewerTime,
      handleOlderDate = handlers.handleOlderDate,
      handleOlderTime = handlers.handleOlderTime,
      handleUsers = handlers.handleUsers,
      handleInclusive = handlers.handleInclusive,
      handlePinned = handlers.handlePinned,
      handleDiscussion = handlers.handleDiscussion,
      handleThreads = handlers.handleThreads,
      handleAttached = handlers.handleAttached;
  var onChangeUsers = useMutableCallback(function (value, action) {
    if (!action) {
      if (users.includes(value)) {
        return;
      }

      return handleUsers([].concat(_toConsumableArray(users), [value]));
    }

    handleUsers(users.filter(function (current) {
      return current !== value;
    }));
  });
  var handlePrune = useMutableCallback(function () {
    function _callee() {
      var limit, _await$pruneMessages, count;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                limit = 2000;
                _context.prev = 1;

                if (!(counter === limit)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _context.next = 6;
                return _regeneratorRuntime.awrap(pruneMessages({
                  roomId: rid,
                  latest: toDate,
                  oldest: fromDate,
                  inclusive: inclusive,
                  limit: limit,
                  excludePinned: pinned,
                  filesOnly: attached,
                  ignoreDiscussion: discussion,
                  ignoreThreads: threads,
                  users: users
                }));

              case 6:
                _await$pruneMessages = _context.sent;
                count = _await$pruneMessages.count;
                setCounter(count);

                if (!(count < 1)) {
                  _context.next = 11;
                  break;
                }

                throw new Error(t('No_messages_found_to_prune'));

              case 11:
                dispatchToastMessage({
                  type: 'success',
                  message: count + " " + t('messages_pruned')
                });
                closeModal();
                reset();
                _context.next = 20;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](1);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });
                closeModal();

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[1, 16]], Promise);
    }

    return _callee;
  }());

  var handleModal = function () {
    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onClose: closeModal,
      onCancel: closeModal,
      onConfirm: handlePrune,
      confirmText: t('Yes_prune_them')
    }, t('Prune_Modal')));
  };

  useEffect(function () {
    if (newerDate) {
      setFromDate(new Date(newerDate + "T" + (newerTime || '00:00') + ":00" + getTimeZoneOffset()));
    }

    if (olderDate) {
      setToDate(new Date(olderDate + "T" + (olderTime || '24:00') + ":00" + getTimeZoneOffset()));
    }
  }, [newerDate, newerTime, olderDate, olderTime]);
  useEffect(function () {
    var exceptPinned = pinned ? " " + t('except_pinned', {}) : '';
    var ifFrom = users.length ? " " + t('if_they_are_from', {
      postProcess: 'sprintf',
      sprintf: [users.map(function (element) {
        return element;
      }).join(', ')]
    }) : '';
    var filesOrMessages = t(attached ? 'files' : 'messages', {});

    if (newerDate && olderDate) {
      setCallOutText(t('Prune_Warning_between', {
        postProcess: 'sprintf',
        sprintf: [filesOrMessages, name, moment(fromDate).format('L LT'), moment(toDate).format('L LT')]
      }) + exceptPinned + ifFrom);
    } else if (newerDate) {
      setCallOutText(t('Prune_Warning_after', {
        postProcess: 'sprintf',
        sprintf: [filesOrMessages, name, moment(fromDate).format('L LT')]
      }) + exceptPinned + ifFrom);
    } else if (olderDate) {
      setCallOutText(t('Prune_Warning_before', {
        postProcess: 'sprintf',
        sprintf: [filesOrMessages, name, moment(toDate).format('L LT')]
      }) + exceptPinned + ifFrom);
    } else {
      setCallOutText(t('Prune_Warning_all', {
        postProcess: 'sprintf',
        sprintf: [filesOrMessages, name || (usernames === null || usernames === void 0 ? void 0 : usernames.join(' x '))]
      }) + exceptPinned + ifFrom);
    }

    if (fromDate > toDate) {
      return setValidateText(t('Newer_than_may_not_exceed_Older_than', {
        postProcess: 'sprintf',
        sprintf: []
      }));
    }

    if (isNaN(fromDate.getTime()) || isNaN(toDate.getTime())) {
      return setValidateText(t('error-invalid-date', {
        postProcess: 'sprintf',
        sprintf: []
      }));
    }

    setValidateText();
  }, [newerDate, olderDate, fromDate, toDate, attached, name, t, pinned, users, usernames]);
  return /*#__PURE__*/React.createElement(PruneMessages, {
    callOutText: callOutText,
    validateText: validateText,
    newerDateTime: {
      date: newerDate,
      time: newerTime
    },
    handleNewerDateTime: {
      date: handleNewerDate,
      time: handleNewerTime
    },
    olderDateTime: {
      date: olderDate,
      time: olderTime
    },
    handleOlderDateTime: {
      date: handleOlderDate,
      time: handleOlderTime
    },
    users: users,
    inclusive: inclusive,
    pinned: pinned,
    discussion: discussion,
    threads: threads,
    attached: attached,
    handleInclusive: handleInclusive,
    handlePinned: handlePinned,
    handleDiscussion: handleDiscussion,
    handleThreads: handleThreads,
    handleAttached: handleAttached,
    onClickClose: onClickClose,
    onClickPrune: handleModal,
    onChangeUsers: onChangeUsers
  });
};

module.exportDefault(PruneMessagesWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/PruneMessages/83ad61efc20c63ae92c39cbd8f0d8f2113e8ad3e.map
