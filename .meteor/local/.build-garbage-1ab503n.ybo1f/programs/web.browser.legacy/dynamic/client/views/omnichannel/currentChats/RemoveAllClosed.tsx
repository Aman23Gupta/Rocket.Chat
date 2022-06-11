function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/currentChats/RemoveAllClosed.tsx                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["handleClearFilters", "handleRemoveClosed"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var Box, Icon, Menu;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Menu: function (v) {
    Menu = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

var RemoveAllClosed = function (_ref) {
  var handleClearFilters = _ref.handleClearFilters,
      handleRemoveClosed = _ref.handleRemoveClosed,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var canRemove = usePermission('remove-closed-livechat-rooms');

  var menuOptions = _objectSpread({
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/currentChats/fbbef05a0944f5a4f21a12485282be71ab81d797.map
