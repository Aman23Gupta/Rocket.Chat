function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/components/Image.tsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["previewUrl", "dataSrc", "loadImage", "setLoadImage", "src"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let React, memo, useState, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 0);
let useAttachmentDimensions;
module.link("../context/AttachmentContext", {
  useAttachmentDimensions(v) {
    useAttachmentDimensions = v;
  }

}, 1);
let ImageBox;
module.link("./ImageBox", {
  default(v) {
    ImageBox = v;
  }

}, 2);
let Load;
module.link("./Load", {
  default(v) {
    Load = v;
  }

}, 3);
let Retry;
module.link("./Retry", {
  default(v) {
    Retry = v;
  }

}, 4);

const getDimensions = (originalWidth, originalHeight, limits) => {
  const widthRatio = originalWidth / (limits.width - 4);
  const heightRatio = originalHeight / limits.height;

  if (widthRatio > heightRatio) {
    const width = Math.min(originalWidth, limits.width - 4);
    return {
      width,
      height: width / originalWidth * originalHeight
    };
  }

  const height = Math.min(originalHeight, limits.height);
  return {
    width: height / originalHeight * originalWidth,
    height
  };
};

const Image = _ref => {
  let {
    previewUrl,
    dataSrc,
    loadImage = true,
    setLoadImage,
    src
  } = _ref,
      size = _objectWithoutProperties(_ref, _excluded);

  const limits = useAttachmentDimensions();
  const {
    width = limits.width,
    height = limits.height
  } = size;
  const [error, setError] = useState(false);
  const {
    setHasError,
    setHasNoError
  } = useMemo(() => ({
    setHasError: () => setError(true),
    setHasNoError: () => setError(false)
  }), []);
  const dimensions = getDimensions(width, height, limits);
  const background = previewUrl && "url(".concat(previewUrl, ") center center / cover no-repeat fixed");

  if (!loadImage) {
    return /*#__PURE__*/React.createElement(Load, _extends({}, dimensions, limits, {
      load: setLoadImage
    }));
  }

  if (error) {
    return /*#__PURE__*/React.createElement(Retry, _extends({}, dimensions, {
      retry: setHasNoError
    }));
  }

  return /*#__PURE__*/React.createElement(ImageBox, _extends({
    onError: setHasError
  }, previewUrl && {
    style: {
      background,
      boxSizing: 'content-box'
    }
  }, dimensions, {
    is: "picture"
  }), /*#__PURE__*/React.createElement("img", _extends({
    className: "gallery-item",
    "data-src": dataSrc || src,
    src: src
  }, dimensions)));
};

module.exportDefault( /*#__PURE__*/memo(Image));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/components/8d7bd024ee57f4e5fd91a63c447a9ba346756142.map
