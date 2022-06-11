function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/hooks/useWebRTC.ts                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
module.export({
  useWebRTC: function () {
    return useWebRTC;
  }
});
var useCallback, useState;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 0);
var WebRTC;
module.link("../../../../app/webrtc/client", {
  WebRTC: function (v) {
    WebRTC = v;
  }
}, 1);

var useWebRTC = function (rid) {
  var getWebRTCInstance = useCallback(function () {
    return WebRTC.getInstanceByRoomId(rid);
  }, [rid]);
  var webRTCInstance = getWebRTCInstance();
  var videoAvaliable = webRTCInstance != null;

  var _useState = useState('$auto'),
      _useState2 = _slicedToArray(_useState, 2),
      mainVideo = _useState2[0],
      setMainVideo = _useState2[1];

  var getShouldAllowCalls = function () {
    if (!webRTCInstance) {
      return false;
    }

    var localUrl = webRTCInstance.localUrl,
        remoteItems = webRTCInstance.remoteItems;
    var r = remoteItems.get() || [];

    if (localUrl.get() === null && r.length === 0) {
      return false;
    }

    return true;
  };

  var isVideoActive = function () {
    var _getWebRTCInstance = getWebRTCInstance(),
        remoteItems = _getWebRTCInstance.remoteItems;

    var _getWebRTCInstance2 = getWebRTCInstance(),
        localUrl = _getWebRTCInstance2.localUrl;

    remoteItems = remoteItems.get() || [];
    return localUrl.get() != null || remoteItems.length > 0;
  };

  var mainVideoUrl = function () {
    if (mainVideo === '$self') {
      return webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.localUrl.get();
    }

    if (mainVideo === '$auto') {
      var remoteItems = (webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.remoteItems.get()) || [];

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

  var showUserWebRTC = videoAvaliable && isVideoActive();
  var shouldAllowCalls = getShouldAllowCalls();
  var callInProgress = webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.callInProgress.get();
  var overlayEnabled = webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.overlayEnabled.get();
  var audioEnabled = webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.audioEnabled.get();
  var videoEnabled = webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.videoEnabled.get();
  var audioAndVideoEnabled = (webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.audioEnabled.get()) && (webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.videoEnabled.get());
  var screenShareEnabled = webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.screenShareEnabled.get();
  var remoteVideoItems = webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.remoteItems.get();
  var selfVideoUrl = webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.localUrl.get();

  var handleStopCall = function () {
    return webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.stop();
  };

  var toggleOverlay = function () {
    return overlayEnabled ? webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.overlayEnabled.set(false) : webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.overlayEnabled.set(true);
  };

  var toggleScreenShare = function () {
    return screenShareEnabled ? webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.disableScreenShare() : webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.enableScreenShare();
  };

  var toggleVideo = function () {
    return videoEnabled ? webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.disableVideo() : webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.enableVideo();
  };

  var toggleAudio = function () {
    return audioEnabled ? webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.disableAudio() : webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.enableAudio();
  };

  var joinCall = function (params) {
    return webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.joinCall(params);
  };

  var startCall = function (params) {
    return webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.startCall(params);
  };

  return {
    shouldAllowCalls: shouldAllowCalls,
    callInProgress: callInProgress,
    videoAvaliable: videoAvaliable,
    showUserWebRTC: showUserWebRTC,
    mainVideoUrl: mainVideoUrl,
    screenShareEnabled: screenShareEnabled,
    selfVideoUrl: selfVideoUrl,
    audioAndVideoEnabled: audioAndVideoEnabled,
    audioEnabled: audioEnabled,
    videoEnabled: videoEnabled,
    remoteVideoItems: remoteVideoItems,
    isVideoActive: isVideoActive,
    handleStopCall: handleStopCall,
    screenShareAvailable: webRTCInstance === null || webRTCInstance === void 0 ? void 0 : webRTCInstance.screenShareAvailable,
    toggleScreenShare: toggleScreenShare,
    toggleOverlay: toggleOverlay,
    toggleVideo: toggleVideo,
    toggleAudio: toggleAudio,
    overlayEnabled: overlayEnabled,
    joinCall: joinCall,
    startCall: startCall,
    mainVideo: mainVideo,
    setMainVideo: setMainVideo
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/hooks/6c4fb0a5dc17f6b109ab135f8a2ecc00a3a4ea6c.map
