function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Call/Jitsi/lib/JitsiBridge.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _inheritsLoose;

module.link("@babel/runtime/helpers/inheritsLoose", {
  default: function (v) {
    _inheritsLoose = v;
  }
}, 0);
module.export({
  JitsiBridge: function () {
    return JitsiBridge;
  }
});
var Emitter;
module.link("@rocket.chat/emitter", {
  Emitter: function (v) {
    Emitter = v;
  }
}, 0);
var JitsiMeetExternalAPI;
module.link("./Jitsi", {
  JitsiMeetExternalAPI: function (v) {
    JitsiMeetExternalAPI = v;
  }
}, 1);

var JitsiBridge = /*#__PURE__*/function (_Emitter) {
  _inheritsLoose(JitsiBridge, _Emitter);

  function JitsiBridge(_ref, heartbeat) {
    var _this;

    var openNewWindow = _ref.openNewWindow,
        ssl = _ref.ssl,
        domain = _ref.domain,
        jitsiRoomName = _ref.jitsiRoomName,
        accessToken = _ref.accessToken,
        desktopSharingChromeExtId = _ref.desktopSharingChromeExtId,
        name = _ref.name;
    _this = _Emitter.call(this) || this;
    _this.openNewWindow = openNewWindow;
    _this.ssl = ssl;
    _this.domain = domain;
    _this.jitsiRoomName = jitsiRoomName;
    _this.accessToken = accessToken;
    _this.desktopSharingChromeExtId = desktopSharingChromeExtId;
    _this.name = name;
    _this.heartbeat = heartbeat;
    _this.window = undefined;
    _this.needsStart = false;
    return _this;
  }

  var _proto = JitsiBridge.prototype;

  _proto.start = function () {
    function start(domTarget) {
      var _this2 = this;

      if (!this.needsStart) {
        return;
      }

      this.needsStart = false;
      var heartbeatTimer = setInterval(function () {
        return _this2.emit('HEARTBEAT', true);
      }, this.heartbeat);
      this.once('dispose', function () {
        return clearTimeout(heartbeatTimer);
      });
      var openNewWindow = this.openNewWindow,
          ssl = this.ssl,
          domain = this.domain,
          jitsiRoomName = this.jitsiRoomName,
          accessToken = this.accessToken,
          desktopSharingChromeExtId = this.desktopSharingChromeExtId,
          name = this.name;
      var protocol = ssl ? 'https://' : 'http://';
      var configOverwrite = {
        desktopSharingChromeExtId: desktopSharingChromeExtId
      };
      var interfaceConfigOverwrite = {};

      if (openNewWindow) {
        var queryString = accessToken ? "?jwt=" + accessToken : '';
        var newWindow = window.open(protocol + domain + "/" + jitsiRoomName + queryString, jitsiRoomName);

        if (!newWindow) {
          return;
        }

        var timer = setInterval(function () {
          if (newWindow.closed) {
            _this2.dispose();
          }
        }, 1000);
        this.once('dispose', function () {
          return clearTimeout(timer);
        });
        this.window = newWindow;
        return newWindow.focus();
      }

      var width = 'auto';
      var height = 500;
      var api = new JitsiMeetExternalAPI(domain, jitsiRoomName, width, height, domTarget, configOverwrite, interfaceConfigOverwrite, !ssl, accessToken); // eslint-disable-line no-undef

      api.executeCommand('displayName', [name]);
      this.once('dispose', function () {
        return api.dispose();
      });
    }

    return start;
  }();

  _proto.dispose = function () {
    function dispose() {
      clearInterval(this.timer);
      this.emit('dispose', true);
    }

    return dispose;
  }();

  return JitsiBridge;
}(Emitter);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Call/Jitsi/lib/329027f62b5070fcd6fa569675d2b48925a39807.map
