function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/UserInfo/UserWebRTC/UserWebRTCVideo.tsx                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

let _taggedTemplateLiteral;

module.link("@babel/runtime/helpers/taggedTemplateLiteral", {
  default(v) {
    _taggedTemplateLiteral = v;
  }

}, 0);
let css;
module.link("@rocket.chat/css-in-js", {
  css(v) {
    css = v;
  }

}, 0);
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 1);
let React, useEffect, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 2);

const UserWebRTCVideo = _ref => {
  let {
    url,
    muted,
    ownUser,
    screen,
    isMainVideo
  } = _ref;
  const videoStream = useRef(null);
  const videoFlipStyle = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\ttransform: scaleX(-1);\n\t\tfilter: FlipH;\n\t"])));
  useEffect(() => {
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/UserInfo/UserWebRTC/f866a5add3797ece391c5e6dc182d0926a5b505f.map
