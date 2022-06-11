function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/viewLogs/ServerLogs.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["ts"];

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

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 3);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 4);
var Box, Icon, Scrollable;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Scrollable: function (v) {
    Scrollable = v;
  }
}, 0);
var React, useEffect, useRef, useState, useCallback;
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
  }
}, 1);
var useEndpoint, useStream;
module.link("../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  },
  useStream: function (v) {
    useStream = v;
  }
}, 2);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var ansispan;
module.link("./ansispan", {
  ansispan: function (v) {
    ansispan = v;
  }
}, 5);

var compareEntries = function (a, b) {
  return a.ts.getTime() - b.ts.getTime();
};

var unserializeEntry = function (_ref) {
  var ts = _ref.ts,
      entry = _objectWithoutProperties(_ref, _excluded);

  return _objectSpread({
    ts: new Date(ts)
  }, entry);
};

var ServerLogs = function () {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      entries = _useState2[0],
      setEntries = _useState2[1];

  var dispatchToastMessage = useToastMessageDispatch();
  var getStdoutQueue = useEndpoint('GET', 'stdout.queue');
  var subscribeToStdout = useStream('stdout');
  useEffect(function () {
    var fetchLines = function () {
      function _callee() {
        var _await$getStdoutQueue, queue;

        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _regeneratorRuntime.awrap(getStdoutQueue(undefined));

                case 3:
                  _await$getStdoutQueue = _context.sent;
                  queue = _await$getStdoutQueue.queue;
                  setEntries(queue.map(unserializeEntry).sort(compareEntries));
                  _context.next = 11;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](0);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context.t0
                  });

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
    }();

    fetchLines();
  }, [dispatchToastMessage, getStdoutQueue]);
  useEffect(function () {
    return subscribeToStdout('stdout', function (entry) {
      setEntries(function (entries) {
        return [].concat(_toConsumableArray(entries), [entry]);
      });
    });
  }, [subscribeToStdout]);
  var t = useTranslation();
  var wrapperRef = useRef();
  var atBottomRef = useRef(false);

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      newLogsVisible = _useState4[0],
      setNewLogsVisible = _useState4[1];

  var isAtBottom = useCallback(function () {
    var scrollThreshold = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var wrapper = wrapperRef.current;

    if (!wrapper) {
      return false;
    }

    if (wrapper.scrollTop + scrollThreshold >= wrapper.scrollHeight - wrapper.clientHeight) {
      setNewLogsVisible(false);
      return true;
    }

    return false;
  }, []);
  var sendToBottom = useCallback(function () {
    var wrapper = wrapperRef.current;

    if (!wrapper) {
      return;
    }

    wrapper.scrollTop = wrapper.scrollHeight - wrapper.clientHeight;
    setNewLogsVisible(false);
  }, []);
  var checkIfScrollIsAtBottom = useCallback(function () {
    atBottomRef.current = isAtBottom(100);
  }, [isAtBottom]);
  var sendToBottomIfNecessary = useCallback(function () {
    if (atBottomRef.current === true && isAtBottom() !== true) {
      sendToBottom();
    } else if (atBottomRef.current === false) {
      setNewLogsVisible(true);
    }
  }, [isAtBottom, sendToBottom]);
  useEffect(function () {
    var wrapper = wrapperRef.current;

    if (!wrapper) {
      return;
    }

    if (window.MutationObserver) {
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function () {
          sendToBottomIfNecessary();
        });
      });
      observer.observe(wrapper, {
        childList: true
      });
      return function () {
        observer.disconnect();
      };
    }

    var handleSubtreeModified = function () {
      sendToBottomIfNecessary();
    };

    wrapper.addEventListener('DOMSubtreeModified', handleSubtreeModified);
    return function () {
      wrapper.removeEventListener('DOMSubtreeModified', handleSubtreeModified);
    };
  }, [sendToBottomIfNecessary]);
  useEffect(function () {
    var handleWindowResize = function () {
      setTimeout(function () {
        sendToBottomIfNecessary();
      }, 100);
    };

    window.addEventListener('resize', handleWindowResize);
    return function () {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [sendToBottomIfNecessary]);
  var handleWheel = useCallback(function () {
    atBottomRef.current = false;
    setTimeout(function () {
      checkIfScrollIsAtBottom();
    }, 100);
  }, [checkIfScrollIsAtBottom]);

  var handleTouchStart = function () {
    atBottomRef.current = false;
  };

  var handleTouchEnd = useCallback(function () {
    setTimeout(function () {
      checkIfScrollIsAtBottom();
    }, 100);
  }, [checkIfScrollIsAtBottom]);
  var handleScroll = useCallback(function () {
    atBottomRef.current = false;
    setTimeout(function () {
      checkIfScrollIsAtBottom();
    }, 100);
  }, [checkIfScrollIsAtBottom]);
  var handleClick = useCallback(function () {
    atBottomRef.current = true;
    sendToBottomIfNecessary();
  }, [sendToBottomIfNecessary]);
  return /*#__PURE__*/React.createElement(Box, {
    width: "full",
    height: "full",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    marginBlock: "x8"
  }, /*#__PURE__*/React.createElement(Scrollable, {
    vertical: true
  }, /*#__PURE__*/React.createElement(Box, {
    ref: wrapperRef,
    display: "flex",
    flexDirection: "column",
    padding: "x8",
    flexGrow: 1,
    fontFamily: "mono",
    color: "alternative",
    backgroundColor: "neutral-800",
    style: {
      wordBreak: 'break-all'
    },
    onWheel: handleWheel,
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
    onScroll: handleScroll
  }, entries.sort(compareEntries).map(function (_ref2, i) {
    var string = _ref2.string;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      dangerouslySetInnerHTML: {
        __html: ansispan(string)
      }
    });
  }))), /*#__PURE__*/React.createElement(Box, {
    position: "absolute",
    insetBlockEnd: "x8",
    insetInlineStart: "50%",
    width: "x132",
    height: "x32",
    marginInline: "neg-x64",
    paddingBlock: "x8",
    fontScale: "c1",
    borderRadius: "full",
    color: "primary-500",
    backgroundColor: "surface",
    onClick: handleClick,
    textAlign: "center",
    style: {
      cursor: 'pointer',
      transition: 'transform 0.3s ease-out',
      transform: newLogsVisible ? 'translateY(0)' : 'translateY(150%)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "jump",
    size: "x16"
  }), " ", t('New_logs')));
};

module.exportDefault(ServerLogs);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/viewLogs/f847f8319342b0d217b6816fd42740262283d5f3.map
