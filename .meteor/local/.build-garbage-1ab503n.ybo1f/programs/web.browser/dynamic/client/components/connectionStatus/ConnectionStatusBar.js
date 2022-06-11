function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/connectionStatus/ConnectionStatusBar.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Icon;
module.link("@rocket.chat/fuselage", {
  Icon(v) {
    Icon = v;
  }

}, 0);
let React, useEffect, useRef, useState;
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
  }

}, 1);
let useConnectionStatus;
module.link("../../contexts/ConnectionStatusContext", {
  useConnectionStatus(v) {
    useConnectionStatus = v;
  }

}, 2);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
module.link("./ConnectionStatusBar.css");

const getReconnectCountdown = retryTime => {
  const timeDiff = retryTime - Date.now();
  return timeDiff > 0 && Math.round(timeDiff / 1000) || 0;
};

const useReconnectCountdown = (retryTime, status) => {
  const reconnectionTimerRef = useRef();
  const [reconnectCountdown, setReconnectCountdown] = useState(() => getReconnectCountdown(retryTime));
  useEffect(() => {
    if (status === 'waiting') {
      if (reconnectionTimerRef.current) {
        return;
      }

      reconnectionTimerRef.current = setInterval(() => {
        setReconnectCountdown(getReconnectCountdown(retryTime));
      }, 500);
      return;
    }

    clearInterval(reconnectionTimerRef.current);
    reconnectionTimerRef.current = null;
  }, [retryTime, status]);
  useEffect(() => () => {
    clearInterval(reconnectionTimerRef.current);
  }, []);
  return reconnectCountdown;
};

function ConnectionStatusBar() {
  const {
    connected,
    retryTime,
    status,
    reconnect
  } = useConnectionStatus();
  const reconnectCountdown = useReconnectCountdown(retryTime, status);
  const t = useTranslation();

  if (connected) {
    return null;
  }

  const handleRetryClick = event => {
    event.preventDefault();
    reconnect && reconnect();
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "ConnectionStatusBar",
    role: "alert"
  }, /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement(Icon, {
    name: "warning"
  }), " ", t('meteor_status', {
    context: status
  })), status === 'waiting' && /*#__PURE__*/React.createElement(React.Fragment, null, " ", t('meteor_status_reconnect_in', {
    count: reconnectCountdown
  })), ['waiting', 'offline'].includes(status) && /*#__PURE__*/React.createElement(React.Fragment, null, ' ', /*#__PURE__*/React.createElement("a", {
    className: "ConnectionStatusBar__retry-link",
    href: "#",
    onClick: handleRetryClick
  }, t('meteor_status_try_now', {
    context: status
  }))));
}

module.exportDefault(ConnectionStatusBar);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/connectionStatus/aca08bf949cd6023e35c1b9cfd613c6f76978e74.map
