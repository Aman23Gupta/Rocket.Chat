function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/currentChats/RemoveAllClosed.tsx                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["handleClearFilters", "handleRemoveClosed"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 1);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 2);
let Box, Icon, Menu;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  },

  Menu(v) {
    Menu = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

const RemoveAllClosed = _ref => {
  let {
    handleClearFilters,
    handleRemoveClosed
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const canRemove = usePermission('remove-closed-livechat-rooms');

  const menuOptions = _objectSpread({
    clearFilters: {
      label: /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Icon, {
        name: "refresh",
        size: "x16",
        marginInlineEnd: "x4"
      }), t('Clear_filters')),
      action: handleClearFilters
    }
  }, canRemove && {
    removeClosed: {
      label: /*#__PURE__*/React.createElement(Box, {
        color: "danger"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "trash",
        size: "x16",
        marginInlineEnd: "x4"
      }), t('Delete_all_closed_chats')),
      action: handleRemoveClosed
    }
  });

  return /*#__PURE__*/React.createElement(Menu, _extends({
    alignSelf: "flex-end",
    small: false,
    square: true,
    options: menuOptions,
    placement: "bottom-start"
  }, props));
};

module.exportDefault(RemoveAllClosed);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/currentChats/84e4d31d5e21003baa44852b917e3e91ad4191e9.map
