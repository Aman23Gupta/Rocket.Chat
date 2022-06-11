function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/components/Image.tsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["previewUrl", "dataSrc", "loadImage", "setLoadImage", "src"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var React, memo, useState, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 0);
var useAttachmentDimensions;
module.link("../context/AttachmentContext", {
  useAttachmentDimensions: function (v) {
    useAttachmentDimensions = v;
  }
}, 1);
var ImageBox;
module.link("./ImageBox", {
  "default": function (v) {
    ImageBox = v;
  }
}, 2);
var Load;
module.link("./Load", {
  "default": function (v) {
    Load = v;
  }
}, 3);
var Retry;
module.link("./Retry", {
  "default": function (v) {
    Retry = v;
  }
}, 4);

var getDimensions = function (originalWidth, originalHeight, limits) {
  var widthRatio = originalWidth / (limits.width - 4);
  var heightRatio = originalHeight / limits.height;

  if (widthRatio > heightRatio) {
    var width = Math.min(originalWidth, limits.width - 4);
    return {
      width: width,
      height: width / originalWidth * originalHeight
    };
  }

  var height = Math.min(originalHeight, limits.height);
  return {
    width: height / originalHeight * originalWidth,
    height: height
  };
};

var Image = function (_ref) {
  var previewUrl = _ref.previewUrl,
      dataSrc = _ref.dataSrc,
      _ref$loadImage = _ref.loadImage,
      loadImage = _ref$loadImage === void 0 ? true : _ref$loadImage,
      setLoadImage = _ref.setLoadImage,
      src = _ref.src,
      size = _objectWithoutProperties(_ref, _excluded);

  var limits = useAttachmentDimensions();
  var _size$width = size.width,
      width = _size$width === void 0 ? limits.width : _size$width,
      _size$height = size.height,
      height = _size$height === void 0 ? limits.height : _size$height;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useMemo = useMemo(function () {
    return {
      setHasError: function () {
        return setError(true);
      },
      setHasNoError: function () {
        return setError(false);
      }
    };
  }, []),
      setHasError = _useMemo.setHasError,
      setHasNoError = _useMemo.setHasNoError;

  var dimensions = getDimensions(width, height, limits);
  var background = previewUrl && "url(" + previewUrl + ") center center / cover no-repeat fixed";

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
      background: background,
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
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/components/bb0ae4ba953e9f1e9142cb94d5a2c68f351483f2.map
