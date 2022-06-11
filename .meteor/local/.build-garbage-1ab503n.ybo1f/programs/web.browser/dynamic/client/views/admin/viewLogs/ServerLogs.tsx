function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/viewLogs/ServerLogs.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["ts"];

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
let Box, Icon, Scrollable;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  },

  Scrollable(v) {
    Scrollable = v;
  }

}, 0);
let React, useEffect, useRef, useState, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useRef(v) {
    useRef = v;
  },

  useState(v) {
    useState = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let useEndpoint, useStream;
module.link("../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  },

  useStream(v) {
    useStream = v;
  }

}, 2);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let ansispan;
module.link("./ansispan", {
  ansispan(v) {
    ansispan = v;
  }

}, 5);

const compareEntries = (a, b) => a.ts.getTime() - b.ts.getTime();

const unserializeEntry = _ref => {
  let {
    ts
  } = _ref,
      entry = _objectWithoutProperties(_ref, _excluded);

  return _objectSpread({
    ts: new Date(ts)
  }, entry);
};

const ServerLogs = () => {
  const [entries, setEntries] = useState([]);
  const dispatchToastMessage = useToastMessageDispatch();
  const getStdoutQueue = useEndpoint('GET', 'stdout.queue');
  const subscribeToStdout = useStream('stdout');
  useEffect(() => {
    const fetchLines = async () => {
      try {
        const {
          queue
        } = await getStdoutQueue(undefined);
        setEntries(queue.map(unserializeEntry).sort(compareEntries));
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }
    };

    fetchLines();
  }, [dispatchToastMessage, getStdoutQueue]);
  useEffect(() => subscribeToStdout('stdout', entry => {
    setEntries(entries => [...entries, entry]);
  }), [subscribeToStdout]);
  const t = useTranslation();
  const wrapperRef = useRef();
  const atBottomRef = useRef(false);
  const [newLogsVisible, setNewLogsVisible] = useState(false);
  const isAtBottom = useCallback(function () {
    let scrollThreshold = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    const wrapper = wrapperRef.current;

    if (!wrapper) {
      return false;
    }

    if (wrapper.scrollTop + scrollThreshold >= wrapper.scrollHeight - wrapper.clientHeight) {
      setNewLogsVisible(false);
      return true;
    }

    return false;
  }, []);
  const sendToBottom = useCallback(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) {
      return;
    }

    wrapper.scrollTop = wrapper.scrollHeight - wrapper.clientHeight;
    setNewLogsVisible(false);
  }, []);
  const checkIfScrollIsAtBottom = useCallback(() => {
    atBottomRef.current = isAtBottom(100);
  }, [isAtBottom]);
  const sendToBottomIfNecessary = useCallback(() => {
    if (atBottomRef.current === true && isAtBottom() !== true) {
      sendToBottom();
    } else if (atBottomRef.current === false) {
      setNewLogsVisible(true);
    }
  }, [isAtBottom, sendToBottom]);
  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) {
      return;
    }

    if (window.MutationObserver) {
      const observer = new MutationObserver(mutations => {
        mutations.forEach(() => {
          sendToBottomIfNecessary();
        });
      });
      observer.observe(wrapper, {
        childList: true
      });
      return () => {
        observer.disconnect();
      };
    }

    const handleSubtreeModified = () => {
      sendToBottomIfNecessary();
    };

    wrapper.addEventListener('DOMSubtreeModified', handleSubtreeModified);
    return () => {
      wrapper.removeEventListener('DOMSubtreeModified', handleSubtreeModified);
    };
  }, [sendToBottomIfNecessary]);
  useEffect(() => {
    const handleWindowResize = () => {
      setTimeout(() => {
        sendToBottomIfNecessary();
      }, 100);
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [sendToBottomIfNecessary]);
  const handleWheel = useCallback(() => {
    atBottomRef.current = false;
    setTimeout(() => {
      checkIfScrollIsAtBottom();
    }, 100);
  }, [checkIfScrollIsAtBottom]);

  const handleTouchStart = () => {
    atBottomRef.current = false;
  };

  const handleTouchEnd = useCallback(() => {
    setTimeout(() => {
      checkIfScrollIsAtBottom();
    }, 100);
  }, [checkIfScrollIsAtBottom]);
  const handleScroll = useCallback(() => {
    atBottomRef.current = false;
    setTimeout(() => {
      checkIfScrollIsAtBottom();
    }, 100);
  }, [checkIfScrollIsAtBottom]);
  const handleClick = useCallback(() => {
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
  }, entries.sort(compareEntries).map((_ref2, i) => {
    let {
      string
    } = _ref2;
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
//# sourceMappingURL=/dynamic/client/views/admin/viewLogs/cd5fdd8a22f47d6c7e83fad1371e6f91606d4882.map
