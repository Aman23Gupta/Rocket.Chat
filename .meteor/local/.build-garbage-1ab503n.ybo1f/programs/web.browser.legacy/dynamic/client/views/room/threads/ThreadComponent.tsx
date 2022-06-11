function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/threads/ThreadComponent.tsx                                                                       //
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
var useLocalStorage;
module.link("@rocket.chat/fuselage-hooks", {
  useLocalStorage: function (v) {
    useLocalStorage = v;
  }
}, 0);
var Blaze;
module.link("meteor/blaze", {
  Blaze: function (v) {
    Blaze = v;
  }
}, 1);
var Template;
module.link("meteor/templating", {
  Template: function (v) {
    Template = v;
  }
}, 2);
var Tracker;
module.link("meteor/tracker", {
  Tracker: function (v) {
    Tracker = v;
  }
}, 3);
var React, useEffect, useRef, useState, useCallback, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useRef: function (v) {
    useRef = v;
  },
  useState: function (v) {
    useState = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 4);
var ChatMessage;
module.link("../../../../app/models/client", {
  ChatMessage: function (v) {
    ChatMessage = v;
  }
}, 5);
var normalizeThreadTitle;
module.link("../../../../app/threads/client/lib/normalizeThreadTitle", {
  normalizeThreadTitle: function (v) {
    normalizeThreadTitle = v;
  }
}, 6);
var roomTypes;
module.link("../../../../app/utils/client", {
  roomTypes: function (v) {
    roomTypes = v;
  }
}, 7);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 8);
var useEndpoint, useMethod;
module.link("../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  },
  useMethod: function (v) {
    useMethod = v;
  }
}, 9);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 10);
var useUserId, useUserSubscription;
module.link("../../../contexts/UserContext", {
  useUserId: function (v) {
    useUserId = v;
  },
  useUserSubscription: function (v) {
    useUserSubscription = v;
  }
}, 11);
var mapMessageFromApi;
module.link("../../../lib/utils/mapMessageFromApi", {
  mapMessageFromApi: function (v) {
    mapMessageFromApi = v;
  }
}, 12);
var useTabBarOpenUserInfo;
module.link("../providers/ToolboxProvider", {
  useTabBarOpenUserInfo: function (v) {
    useTabBarOpenUserInfo = v;
  }
}, 13);
var ThreadSkeleton;
module.link("./ThreadSkeleton", {
  "default": function (v) {
    ThreadSkeleton = v;
  }
}, 14);
var ThreadView;
module.link("./ThreadView", {
  "default": function (v) {
    ThreadView = v;
  }
}, 15);
var subscriptionFields = {};

var useThreadMessage = function (tmid) {
  var _useState = useState(function () {
    return Tracker.nonreactive(function () {
      return ChatMessage.findOne({
        _id: tmid
      });
    });
  }),
      _useState2 = _slicedToArray(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1];

  var getMessage = useEndpoint('GET', 'chat.getMessage');
  var getMessageParsed = useCallback(function () {
    function _callee(params) {
      var _await$getMessage, message;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _regeneratorRuntime.awrap(getMessage(params));

              case 2:
                _await$getMessage = _context.sent;
                message = _await$getMessage.message;
                return _context.abrupt("return", mapMessageFromApi(message));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }(), [getMessage]);
  useEffect(function () {
    var computation = Tracker.autorun(function () {
      function _callee2(computation) {
        var msg;
        return _regeneratorRuntime.async(function () {
          function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.t0 = ChatMessage.findOne({
                    _id: tmid
                  });

                  if (_context2.t0) {
                    _context2.next = 5;
                    break;
                  }

                  _context2.next = 4;
                  return _regeneratorRuntime.awrap(getMessageParsed({
                    msgId: tmid
                  }));

                case 4:
                  _context2.t0 = _context2.sent;

                case 5:
                  msg = _context2.t0;

                  if (!(!msg || computation.stopped)) {
                    _context2.next = 8;
                    break;
                  }

                  return _context2.abrupt("return");

                case 8:
                  setMessage(function (prevMsg) {
                    var _prevMsg$_updatedAt, _msg$_updatedAt;

                    if (!prevMsg || prevMsg._id !== msg._id || ((_prevMsg$_updatedAt = prevMsg._updatedAt) === null || _prevMsg$_updatedAt === void 0 ? void 0 : _prevMsg$_updatedAt.getTime()) !== ((_msg$_updatedAt = msg._updatedAt) === null || _msg$_updatedAt === void 0 ? void 0 : _msg$_updatedAt.getTime())) {
                      return msg;
                    }

                    return prevMsg;
                  });

                case 9:
                case "end":
                  return _context2.stop();
              }
            }
          }

          return _callee2$;
        }(), null, null, null, Promise);
      }

      return _callee2;
    }());
    return function () {
      computation.stop();
    };
  }, [getMessageParsed, tmid]);
  return message;
};

var ThreadComponent = function (_ref) {
  var _threadMessage$replie, _threadMessage$replie2;

  var mid = _ref.mid,
      jump = _ref.jump,
      room = _ref.room,
      onClickBack = _ref.onClickBack;
  var subscription = useUserSubscription(room._id, subscriptionFields);
  var channelRoute = useRoute(roomTypes.getConfig(room.t).route.name);
  var threadMessage = useThreadMessage(mid);
  var openUserInfo = useTabBarOpenUserInfo();
  var ref = useRef(null);
  var uid = useUserId();
  var headerTitle = useMemo(function () {
    return threadMessage ? normalizeThreadTitle(threadMessage) : null;
  }, [threadMessage]);

  var _useLocalStorage = useLocalStorage('expand-threads', false),
      _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
      expanded = _useLocalStorage2[0],
      setExpand = _useLocalStorage2[1];

  var following = !uid ? false : (_threadMessage$replie = threadMessage === null || threadMessage === void 0 ? void 0 : (_threadMessage$replie2 = threadMessage.replies) === null || _threadMessage$replie2 === void 0 ? void 0 : _threadMessage$replie2.includes(uid)) !== null && _threadMessage$replie !== void 0 ? _threadMessage$replie : false;
  var dispatchToastMessage = useToastMessageDispatch();
  var followMessage = useMethod('followMessage');
  var unfollowMessage = useMethod('unfollowMessage');
  var setFollowing = useCallback(function () {
    function _callee3(following) {
      return _regeneratorRuntime.async(function () {
        function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                if (!following) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 4;
                return _regeneratorRuntime.awrap(followMessage({
                  mid: mid
                }));

              case 4:
                return _context3.abrupt("return");

              case 5:
                _context3.next = 7;
                return _regeneratorRuntime.awrap(unfollowMessage({
                  mid: mid
                }));

              case 7:
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context3.t0
                });

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }

        return _callee3$;
      }(), null, null, [[0, 9]], Promise);
    }

    return _callee3;
  }(), [dispatchToastMessage, followMessage, unfollowMessage, mid]);
  var handleClose = useCallback(function () {
    channelRoute.push(room.t === 'd' ? {
      rid: room._id
    } : {
      name: room.name || room._id
    });
  }, [channelRoute, room._id, room.t, room.name]);

  var _useState3 = useState(function () {
    return {
      mainMessage: threadMessage,
      jump: jump,
      following: following,
      subscription: subscription,
      rid: room._id,
      tabBar: {
        openUserInfo: openUserInfo
      }
    };
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      viewData = _useState4[0],
      setViewData = _useState4[1];

  useEffect(function () {
    setViewData(function (viewData) {
      var _viewData$mainMessage;

      if (!threadMessage || ((_viewData$mainMessage = viewData.mainMessage) === null || _viewData$mainMessage === void 0 ? void 0 : _viewData$mainMessage._id) === threadMessage._id) {
        return viewData;
      }

      return {
        mainMessage: threadMessage,
        jump: jump,
        following: following,
        subscription: subscription,
        rid: room._id,
        tabBar: {
          openUserInfo: openUserInfo
        }
      };
    });
  }, [following, jump, openUserInfo, room._id, subscription, threadMessage]);
  useEffect(function () {
    if (!ref.current || !viewData.mainMessage) {
      return;
    }

    var view = Blaze.renderWithData(Template.thread, viewData, ref.current);
    return function () {
      Blaze.remove(view);
    };
  }, [viewData]);

  if (!threadMessage) {
    return /*#__PURE__*/React.createElement(ThreadSkeleton, {
      expanded: expanded,
      onClose: handleClose
    });
  }

  return /*#__PURE__*/React.createElement(ThreadView, {
    ref: ref,
    title: headerTitle,
    expanded: expanded,
    following: following,
    onToggleExpand: function (expanded) {
      return setExpand(!expanded);
    },
    onToggleFollow: function (following) {
      return setFollowing(!following);
    },
    onClose: handleClose,
    onClickBack: onClickBack
  });
};

module.exportDefault(ThreadComponent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/threads/c2061f200f18588c4ce2913fb5a0873a869f514d.map
