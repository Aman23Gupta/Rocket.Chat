function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Call/Jitsi/lib/JitsiBridge.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  JitsiBridge: () => JitsiBridge
});
let Emitter;
module.link("@rocket.chat/emitter", {
  Emitter(v) {
    Emitter = v;
  }

}, 0);
let JitsiMeetExternalAPI;
module.link("./Jitsi", {
  JitsiMeetExternalAPI(v) {
    JitsiMeetExternalAPI = v;
  }

}, 1);

class JitsiBridge extends Emitter {
  constructor(_ref, heartbeat) {
    let {
      openNewWindow,
      ssl,
      domain,
      jitsiRoomName,
      accessToken,
      desktopSharingChromeExtId,
      name
    } = _ref;
    super();
    this.openNewWindow = openNewWindow;
    this.ssl = ssl;
    this.domain = domain;
    this.jitsiRoomName = jitsiRoomName;
    this.accessToken = accessToken;
    this.desktopSharingChromeExtId = desktopSharingChromeExtId;
    this.name = name;
    this.heartbeat = heartbeat;
    this.window = undefined;
    this.needsStart = false;
  }

  start(domTarget) {
    if (!this.needsStart) {
      return;
    }

    this.needsStart = false;
    const heartbeatTimer = setInterval(() => this.emit('HEARTBEAT', true), this.heartbeat);
    this.once('dispose', () => clearTimeout(heartbeatTimer));
    const {
      openNewWindow,
      ssl,
      domain,
      jitsiRoomName,
      accessToken,
      desktopSharingChromeExtId,
      name
    } = this;
    const protocol = ssl ? 'https://' : 'http://';
    const configOverwrite = {
      desktopSharingChromeExtId
    };
    const interfaceConfigOverwrite = {};

    if (openNewWindow) {
      const queryString = accessToken ? "?jwt=".concat(accessToken) : '';
      const newWindow = window.open("".concat(protocol + domain, "/").concat(jitsiRoomName).concat(queryString), jitsiRoomName);

      if (!newWindow) {
        return;
      }

      const timer = setInterval(() => {
        if (newWindow.closed) {
          this.dispose();
        }
      }, 1000);
      this.once('dispose', () => clearTimeout(timer));
      this.window = newWindow;
      return newWindow.focus();
    }

    const width = 'auto';
    const height = 500;
    const api = new JitsiMeetExternalAPI(domain, jitsiRoomName, width, height, domTarget, configOverwrite, interfaceConfigOverwrite, !ssl, accessToken); // eslint-disable-line no-undef

    api.executeCommand('displayName', [name]);
    this.once('dispose', () => api.dispose());
  }

  dispose() {
    clearInterval(this.timer);
    this.emit('dispose', true);
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Call/Jitsi/lib/4664b59d2c378b17a445435ea89663c279b5de26.map
