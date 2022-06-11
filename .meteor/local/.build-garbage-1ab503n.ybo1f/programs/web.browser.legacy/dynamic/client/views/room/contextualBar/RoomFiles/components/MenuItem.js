function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomFiles/components/MenuItem.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);
var Box, Menu, Icon;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Menu: function (v) {
    Menu = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var getURL;
module.link("../../../../../../app/utils/client", {
  getURL: function (v) {
    getURL = v;
  }
}, 2);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var download;
module.link("../../../../../lib/download", {
  download: function (v) {
    download = v;
  }
}, 4);

var MenuItem = function (_ref) {
  var _id = _ref._id,
      name = _ref.name,
      url = _ref.url,
      onClickDelete = _ref.onClickDelete;
  var t = useTranslation();

  var menuOptions = _objectSpread({
    downLoad: {
      label: /*#__PURE__*/React.createElement(Box, {
        display: "flex",
        alignItems: "center"
      }, /*#__PURE__*/React.createElement(Icon, {
        mie: "x4",
        name: "download",
        size: "x16"
      }), t('Download')),
      action: function () {
        var _window$webkitURL;

        var URL = (_window$webkitURL = window.webkitURL) !== null && _window$webkitURL !== void 0 ? _window$webkitURL : window.URL;
        var href = getURL(url);
        download(href, name);
        URL.revokeObjectURL(url);
      }
    }
  }, onClickDelete && {
    "delete": {
      label: /*#__PURE__*/React.createElement(Box, {
        display: "flex",
        alignItems: "center",
        color: "danger"
      }, /*#__PURE__*/React.createElement(Icon, {
        mie: "x4",
        name: "trash",
        size: "x16"
      }), t('Delete')),
      action: function () {
        return onClickDelete(_id);
      }
    }
  });

  return /*#__PURE__*/React.createElement(Menu, {
    options: menuOptions
  });
};

module.exportDefault( /*#__PURE__*/memo(MenuItem));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomFiles/components/e6fd63b2d2ecd995667c2526abff9ba3c67b8240.map
