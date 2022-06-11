function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/connectionStatus/ConnectionStatusBar.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Icon;
module.link("@rocket.chat/fuselage", {
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var React, useEffect, useRef, useState;
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
  }
}, 1);
var useConnectionStatus;
module.link("../../contexts/ConnectionStatusContext", {
  useConnectionStatus: function (v) {
    useConnectionStatus = v;
  }
}, 2);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
module.link("./ConnectionStatusBar.css");

var getReconnectCountdown = function (retryTime) {
  var timeDiff = retryTime - Date.now();
  return timeDiff > 0 && Math.round(timeDiff / 1000) || 0;
};

var useReconnectCountdown = function (retryTime, status) {
  var reconnectionTimerRef = useRef();

  var _useState = useState(function () {
    return getReconnectCountdown(retryTime);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      reconnectCountdown = _useState2[0],
      setReconnectCountdown = _useState2[1];

  useEffect(function () {
    if (status === 'waiting') {
      if (reconnectionTimerRef.current) {
        return;
      }

      reconnectionTimerRef.current = setInterval(function () {
        setReconnectCountdown(getReconnectCountdown(retryTime));
      }, 500);
      return;
    }

    clearInterval(reconnectionTimerRef.current);
    reconnectionTimerRef.current = null;
  }, [retryTime, status]);
  useEffect(function () {
    return function () {
      clearInterval(reconnectionTimerRef.current);
    };
  }, []);
  return reconnectCountdown;
};

function ConnectionStatusBar() {
  var _useConnectionStatus = useConnectionStatus(),
      connected = _useConnectionStatus.connected,
      retryTime = _useConnectionStatus.retryTime,
      status = _useConnectionStatus.status,
      reconnect = _useConnectionStatus.reconnect;

  var reconnectCountdown = useReconnectCountdown(retryTime, status);
  var t = useTranslation();

  if (connected) {
    return null;
  }

  var handleRetryClick = function (event) {
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
//# sourceMappingURL=/dynamic/client/components/connectionStatus/a8f79758d33ac15ee46addc8a62b257522c3caec.map
