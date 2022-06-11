function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomFiles/components/MenuItem.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Box, Menu, Icon;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Menu(v) {
    Menu = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let getURL;
module.link("../../../../../../app/utils/client", {
  getURL(v) {
    getURL = v;
  }

}, 2);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let download;
module.link("../../../../../lib/download", {
  download(v) {
    download = v;
  }

}, 4);

const MenuItem = _ref => {
  let {
    _id,
    name,
    url,
    onClickDelete
  } = _ref;
  const t = useTranslation();

  const menuOptions = _objectSpread({
    downLoad: {
      label: /*#__PURE__*/React.createElement(Box, {
        display: "flex",
        alignItems: "center"
      }, /*#__PURE__*/React.createElement(Icon, {
        mie: "x4",
        name: "download",
        size: "x16"
      }), t('Download')),
      action: () => {
        var _window$webkitURL;

        const URL = (_window$webkitURL = window.webkitURL) !== null && _window$webkitURL !== void 0 ? _window$webkitURL : window.URL;
        const href = getURL(url);
        download(href, name);
        URL.revokeObjectURL(url);
      }
    }
  }, onClickDelete && {
    delete: {
      label: /*#__PURE__*/React.createElement(Box, {
        display: "flex",
        alignItems: "center",
        color: "danger"
      }, /*#__PURE__*/React.createElement(Icon, {
        mie: "x4",
        name: "trash",
        size: "x16"
      }), t('Delete')),
      action: () => onClickDelete(_id)
    }
  });

  return /*#__PURE__*/React.createElement(Menu, {
    options: menuOptions
  });
};

module.exportDefault( /*#__PURE__*/memo(MenuItem));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomFiles/components/18ec5ad1ca317239f4d55e2e3fa6dbeb7b0d5bc3.map
