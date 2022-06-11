function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/hooks/useWebRTC.ts                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useWebRTC: () => useWebRTC
});
let useCallback, useState;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  }

}, 0);
let WebRTC;
module.link("../../../../app/webrtc/client", {
  WebRTC(v) {
    WebRTC = v;
  }

}, 1);

const useWebRTC = rid => {
  const getWebRTCInstance = useCallback(() => WebRTC.getInstanceByRoomId(rid), [rid]);
  const webRTCInstance = getWebRTCInstance();
  const videoAvaliable = webRTCInstance != null;
  const [mainVideo, setMainVideo] = useState('$auto');

  const getShouldAllowCalls = () => {
    if (!webRTCInstance) {
      return false;
    }

    const {
      localUrl,
      remoteItems
    } = webRTCInstance;
    const r = remoteItems.get() || [];

    if (localUrl.get() === null && r.length === 0) {
      return false;
    }

    return true;
  };

  const isVideoActive = () => {
    let {
      remoteItems
    } = getWebRTCInstance();
    const {
      localUrl
    } = getWebRTCInstance();
    remoteItems = remoteItems.get() || [];
    return localUrl.get() != null || remoteItems.length > 0;
  };

  const mainVideoUrl = () => {
    if (mainVideo === '$self') {
      return webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.localUrl.get();
    }

    if (mainVideo === '$auto') {
      const remoteItems = (webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.remoteItems.get()) || [];

      if (remoteItems.length > 0) {
        return remoteItems[0].url;
      }

      return webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.localUrl.get();
    }

    if ((webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.remoteItemsById.get()[mainVideo]) != null) {
      return webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.remoteItemsById.get()[mainVideo].url;
    }

    setMainVideo('$auto');
  };

  const showUserWebRTC = videoAvaliable && isVideoActive();
  const shouldAllowCalls = getShouldAllowCalls();
  const callInProgress = webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.callInProgress.get();
  const overlayEnabled = webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.overlayEnabled.get();
  const audioEnabled = webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.audioEnabled.get();
  const videoEnabled = webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.videoEnabled.get();
  const audioAndVideoEnabled = (webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.audioEnabled.get()) && (webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.videoEnabled.get());
  const screenShareEnabled = webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.screenShareEnabled.get();
  const remoteVideoItems = webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.remoteItems.get();
  const selfVideoUrl = webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.localUrl.get();

  const handleStopCall = () => webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.stop();

  const toggleOverlay = () => overlayEnabled ? webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.overlayEnabled.set(false) : webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.overlayEnabled.set(true);

  const toggleScreenShare = () => screenShareEnabled ? webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.disableScreenShare() : webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.enableScreenShare();

  const toggleVideo = () => videoEnabled ? webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.disableVideo() : webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.enableVideo();

  const toggleAudio = () => audioEnabled ? webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.disableAudio() : webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.enableAudio();

  const joinCall = params => webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.joinCall(params);

  const startCall = params => webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.startCall(params);

  return {
    shouldAllowCalls,
    callInProgress,
    videoAvaliable,
    showUserWebRTC,
    mainVideoUrl,
    screenShareEnabled,
    selfVideoUrl,
    audioAndVideoEnabled,
    audioEnabled,
    videoEnabled,
    remoteVideoItems,
    isVideoActive,
    handleStopCall,
    screenShareAvailable: webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.screenShareAvailable,
    toggleScreenShare,
    toggleOverlay,
    toggleVideo,
    toggleAudio,
    overlayEnabled,
    joinCall,
    startCall,
    mainVideo,
    setMainVideo
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/hooks/b9fcb378767bbdd45653eb58bb39d9d27f9bc1d3.map
