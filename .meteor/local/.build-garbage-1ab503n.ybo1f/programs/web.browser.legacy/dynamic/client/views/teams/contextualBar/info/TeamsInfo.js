function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/TeamsInfo.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["label"];

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 2);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 3);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 4);
var Box, Button, Callout, Option, Menu;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  Callout: function (v) {
    Callout = v;
  },
  Option: function (v) {
    Option = v;
  },
  Menu: function (v) {
    Menu = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var VerticalBar;
module.link("../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 2);
var RoomAvatar;
module.link("../../../../components/avatar/RoomAvatar", {
  "default": function (v) {
    RoomAvatar = v;
  }
}, 3);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var InfoPanel;
module.link("../../../InfoPanel", {
  "default": function (v) {
    InfoPanel = v;
  }
}, 5);
var RetentionPolicyCallout;
module.link("../../../InfoPanel/RetentionPolicyCallout", {
  "default": function (v) {
    RetentionPolicyCallout = v;
  }
}, 6);
var useActionSpread;
module.link("../../../hooks/useActionSpread", {
  useActionSpread: function (v) {
    useActionSpread = v;
  }
}, 7);

var TeamsInfo = function (_ref) {
  var name = _ref.name,
      fname = _ref.fname,
      description = _ref.description,
      archived = _ref.archived,
      broadcast = _ref.broadcast,
      announcement = _ref.announcement,
      topic = _ref.topic,
      type = _ref.type,
      rid = _ref.rid,
      icon = _ref.icon,
      _ref$retentionPolicy = _ref.retentionPolicy,
      retentionPolicy = _ref$retentionPolicy === void 0 ? {} : _ref$retentionPolicy,
      onClickHide = _ref.onClickHide,
      onClickClose = _ref.onClickClose,
      onClickLeave = _ref.onClickLeave,
      onClickEdit = _ref.onClickEdit,
      onClickDelete = _ref.onClickDelete,
      onClickViewChannels = _ref.onClickViewChannels,
      onClickConvertToChannel = _ref.onClickConvertToChannel;
  var t = useTranslation();
  var retentionPolicyEnabled = retentionPolicy.retentionPolicyEnabled,
      filesOnlyDefault = retentionPolicy.filesOnlyDefault,
      excludePinnedDefault = retentionPolicy.excludePinnedDefault,
      maxAgeDefault = retentionPolicy.maxAgeDefault;
  var memoizedActions = useMemo(function () {
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, onClickEdit && {
      edit: {
        label: t('Edit'),
        icon: 'edit',
        action: onClickEdit
      }
    }), onClickDelete && {
      "delete": {
        label: t('Delete'),
        icon: 'trash',
        action: onClickDelete
      }
    }), onClickConvertToChannel && {
      convertToChannel: {
        label: t('Convert_to_channel'),
        action: onClickConvertToChannel,
        icon: 'hash'
      }
    }), onClickHide && {
      hide: {
        label: t('Hide'),
        action: onClickHide,
        icon: 'eye-off'
      }
    }), onClickLeave && {
      leave: {
        label: t('Leave'),
        action: onClickLeave,
        icon: 'sign-out'
      }
    });
  }, [t, onClickHide, onClickLeave, onClickEdit, onClickDelete, onClickConvertToChannel]);

  var _useActionSpread = useActionSpread(memoizedActions),
      actionsDefinition = _useActionSpread.actions,
      menuOptions = _useActionSpread.menu;

  var menu = useMemo(function () {
    if (!menuOptions) {
      return null;
    }

    return /*#__PURE__*/React.createElement(Menu, {
      small: false,
      flexShrink: 0,
      mi: "x2",
      key: "menu",
      ghost: false,
      renderItem: function (_ref2) {
        var _ref2$label = _ref2.label,
            label = _ref2$label.label,
            icon = _ref2$label.icon,
            props = _objectWithoutProperties(_ref2, _excluded);

        return /*#__PURE__*/React.createElement(Option, _extends({}, props, {
          label: label,
          icon: icon
        }));
      },
      options: menuOptions
    });
  }, [menuOptions]);
  var actions = useMemo(function () {
    var mapAction = function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          _ref4$ = _ref4[1],
          label = _ref4$.label,
          icon = _ref4$.icon,
          action = _ref4$.action;

      return /*#__PURE__*/React.createElement(InfoPanel.Action, {
        key: key,
        label: label,
        onClick: action,
        icon: icon
      });
    };

    return [].concat(_toConsumableArray(actionsDefinition.map(mapAction)), [menu]).filter(Boolean);
  }, [actionsDefinition, menu]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "info-circled"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('Teams_Info')), onClickClose && /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: onClickClose
  })), /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, {
    p: "x24"
  }, /*#__PURE__*/React.createElement(InfoPanel, {
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(InfoPanel.Avatar, null, /*#__PURE__*/React.createElement(RoomAvatar, {
    size: 'x332',
    room: {
      _id: rid,
      type: type,
      t: type
    }
  })), /*#__PURE__*/React.createElement(InfoPanel.ActionGroup, null, actions), /*#__PURE__*/React.createElement(InfoPanel.Section, null, archived && /*#__PURE__*/React.createElement(Box, {
    mb: "x16"
  }, /*#__PURE__*/React.createElement(Callout, {
    type: "warning"
  }, t('Room_archived')))), /*#__PURE__*/React.createElement(InfoPanel.Section, null, /*#__PURE__*/React.createElement(InfoPanel.Title, {
    title: fname || name,
    icon: icon
  })), /*#__PURE__*/React.createElement(InfoPanel.Section, null, broadcast && broadcast !== '' && /*#__PURE__*/React.createElement(InfoPanel.Field, null, /*#__PURE__*/React.createElement(InfoPanel.Label, null, /*#__PURE__*/React.createElement("b", null, t('Broadcast_channel')), " ", t('Broadcast_channel_Description'))), description && description !== '' && /*#__PURE__*/React.createElement(InfoPanel.Field, null, /*#__PURE__*/React.createElement(InfoPanel.Label, null, t('Description')), /*#__PURE__*/React.createElement(InfoPanel.Text, {
    withTruncatedText: false
  }, description)), announcement && announcement !== '' && /*#__PURE__*/React.createElement(InfoPanel.Field, null, /*#__PURE__*/React.createElement(InfoPanel.Label, null, t('Announcement')), /*#__PURE__*/React.createElement(InfoPanel.Text, {
    withTruncatedText: false
  }, announcement)), topic && topic !== '' && /*#__PURE__*/React.createElement(InfoPanel.Field, null, /*#__PURE__*/React.createElement(InfoPanel.Label, null, t('Topic')), /*#__PURE__*/React.createElement(InfoPanel.Text, {
    withTruncatedText: false
  }, topic)), onClickViewChannels && /*#__PURE__*/React.createElement(InfoPanel.Field, null, /*#__PURE__*/React.createElement(InfoPanel.Label, null, t('Teams_channels')), /*#__PURE__*/React.createElement(InfoPanel.Text, null, /*#__PURE__*/React.createElement(Button, {
    onClick: onClickViewChannels,
    small: true
  }, t('View_channels')))), retentionPolicyEnabled && /*#__PURE__*/React.createElement(RetentionPolicyCallout, {
    filesOnlyDefault: filesOnlyDefault,
    excludePinnedDefault: excludePinnedDefault,
    maxAgeDefault: maxAgeDefault
  })))));
};

module.exportDefault(TeamsInfo);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/f7fc0889cbe7b68a378c305fd793fa66acea58b4.map
