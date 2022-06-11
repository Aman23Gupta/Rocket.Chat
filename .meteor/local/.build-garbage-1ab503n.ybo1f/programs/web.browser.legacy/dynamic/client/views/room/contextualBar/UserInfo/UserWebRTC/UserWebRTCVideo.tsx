function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/UserInfo/UserWebRTC/UserWebRTCVideo.tsx                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

var _taggedTemplateLiteralLoose;

module.link("@babel/runtime/helpers/taggedTemplateLiteralLoose", {
  default: function (v) {
    _taggedTemplateLiteralLoose = v;
  }
}, 0);
var css;
module.link("@rocket.chat/css-in-js", {
  css: function (v) {
    css = v;
  }
}, 0);
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 1);
var React, useEffect, useRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 2);

var UserWebRTCVideo = function (_ref) {
  var url = _ref.url,
      muted = _ref.muted,
      ownUser = _ref.ownUser,
      screen = _ref.screen,
      isMainVideo = _ref.isMainVideo;
  var videoStream = useRef(null);
  var videoFlipStyle = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t\ttransform: scaleX(-1);\n\t\tfilter: FlipH;\n\t"])));
  useEffect(function () {
    if (!videoStream.current) {
      return;
    }

    if (muted) {
      videoStream.current.muted = true;
      videoStream.current.volume = 0;
    }

    if (url) {
      videoStream.current.srcObject = url;
    }
  }, [url, muted]);
  return /*#__PURE__*/React.createElement(Box, {
    width: "full",
    minHeight: isMainVideo ? '300px' : 'auto',
    is: "video",
    ref: videoStream,
    autoPlay: true,
    muted: muted,
    className: ownUser && !screen ? videoFlipStyle : ''
  });
};

module.exportDefault(UserWebRTCVideo);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/UserInfo/UserWebRTC/f46f5ad9125c27edde9ea67faa2485e57077fbb9.map
