function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Info/RoomInfo/RoomInfo.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["label"];

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

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 2);
let Box, Callout, Menu, Option;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Callout(v) {
    Callout = v;
  },

  Menu(v) {
    Menu = v;
  },

  Option(v) {
    Option = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let MarkdownText;
module.link("../../../../../components/MarkdownText", {
  default(v) {
    MarkdownText = v;
  }

}, 2);
let VerticalBar;
module.link("../../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 3);
let RoomAvatar;
module.link("../../../../../components/avatar/RoomAvatar", {
  default(v) {
    RoomAvatar = v;
  }

}, 4);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let InfoPanel;
module.link("../../../../InfoPanel", {
  default(v) {
    InfoPanel = v;
  }

}, 6);
let RetentionPolicyCallout;
module.link("../../../../InfoPanel/RetentionPolicyCallout", {
  default(v) {
    RetentionPolicyCallout = v;
  }

}, 7);
let useActionSpread;
module.link("../../../../hooks/useActionSpread", {
  useActionSpread(v) {
    useActionSpread = v;
  }

}, 8);

const RoomInfo = _ref => {
  let {
    room,
    icon,
    retentionPolicy = {},
    onClickBack,
    onClickHide,
    onClickClose,
    onClickLeave,
    onClickEdit,
    onClickDelete,
    onClickMoveToTeam,
    onClickConvertToTeam,
    onClickEnterRoom
  } = _ref;
  const t = useTranslation();
  const {
    name,
    fname,
    description,
    topic,
    archived,
    broadcast,
    announcement
  } = room;
  const {
    retentionPolicyEnabled,
    filesOnlyDefault,
    excludePinnedDefault,
    maxAgeDefault,
    retentionEnabledDefault
  } = retentionPolicy;
  const memoizedActions = useMemo(() => _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, onClickEnterRoom && {
    enter: {
      label: t('Enter'),
      icon: 'login',
      action: onClickEnterRoom
    }
  }), onClickEdit && {
    edit: {
      label: t('Edit'),
      icon: 'edit',
      action: onClickEdit
    }
  }), onClickDelete && {
    delete: {
      label: t('Delete'),
      icon: 'trash',
      action: onClickDelete
    }
  }), onClickMoveToTeam && {
    move: {
      label: t('Teams_move_channel_to_team'),
      icon: 'team-arrow-right',
      action: onClickMoveToTeam
    }
  }), onClickConvertToTeam && {
    convert: {
      label: t('Teams_convert_channel_to_team'),
      icon: 'team',
      action: onClickConvertToTeam
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
  }), [onClickEdit, t, onClickDelete, onClickMoveToTeam, onClickConvertToTeam, onClickHide, onClickLeave, onClickEnterRoom]);
  const {
    actions: actionsDefinition,
    menu: menuOptions
  } = useActionSpread(memoizedActions);
  const menu = useMemo(() => {
    if (!menuOptions) {
      return null;
    }

    return /*#__PURE__*/React.createElement(Menu, {
      small: false,
      flexShrink: 0,
      mi: "x2",
      key: "menu",
      ghost: false,
      renderItem: _ref2 => {
        let {
          label: {
            label,
            icon
          }
        } = _ref2,
            props = _objectWithoutProperties(_ref2, _excluded);

        return /*#__PURE__*/React.createElement(Option, _extends({}, props, {
          label: label,
          icon: icon
        }));
      },
      options: menuOptions
    });
  }, [menuOptions]);
  const actions = useMemo(() => {
    const mapAction = _ref3 => {
      let [key, {
        label,
        icon,
        action
      }] = _ref3;
      return /*#__PURE__*/React.createElement(InfoPanel.Action, {
        key: key,
        label: label,
        onClick: action,
        icon: icon
      });
    };

    return [...actionsDefinition.map(mapAction), menu].filter(Boolean);
  }, [actionsDefinition, menu]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, onClickBack ? /*#__PURE__*/React.createElement(VerticalBar.Back, {
    onClick: onClickBack
  }) : /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "info-circled"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('Room_Info')), onClickClose && /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: onClickClose
  })), /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, {
    p: "x24"
  }, /*#__PURE__*/React.createElement(InfoPanel, {
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(InfoPanel.Avatar, null, /*#__PURE__*/React.createElement(RoomAvatar, {
    size: 'x332',
    room: room
  })), /*#__PURE__*/React.createElement(InfoPanel.ActionGroup, null, actions), /*#__PURE__*/React.createElement(InfoPanel.Section, null, archived && /*#__PURE__*/React.createElement(Box, {
    mb: "x16"
  }, /*#__PURE__*/React.createElement(Callout, {
    type: "warning"
  }, t('Room_archived')))), /*#__PURE__*/React.createElement(InfoPanel.Section, null, /*#__PURE__*/React.createElement(InfoPanel.Title, {
    title: fname || name,
    icon: icon
  })), /*#__PURE__*/React.createElement(InfoPanel.Section, null, broadcast && broadcast !== '' && /*#__PURE__*/React.createElement(InfoPanel.Field, null, /*#__PURE__*/React.createElement(InfoPanel.Label, null, /*#__PURE__*/React.createElement("b", null, t('Broadcast_channel')), " ", t('Broadcast_channel_Description'))), description && description !== '' && /*#__PURE__*/React.createElement(InfoPanel.Field, null, /*#__PURE__*/React.createElement(InfoPanel.Label, null, t('Description')), /*#__PURE__*/React.createElement(InfoPanel.Text, {
    withTruncatedText: false
  }, /*#__PURE__*/React.createElement(MarkdownText, {
    variant: "inline",
    content: description
  }))), announcement && announcement !== '' && /*#__PURE__*/React.createElement(InfoPanel.Field, null, /*#__PURE__*/React.createElement(InfoPanel.Label, null, t('Announcement')), /*#__PURE__*/React.createElement(InfoPanel.Text, {
    withTruncatedText: false
  }, /*#__PURE__*/React.createElement(MarkdownText, {
    variant: "inline",
    content: announcement
  }))), topic && topic !== '' && /*#__PURE__*/React.createElement(InfoPanel.Field, null, /*#__PURE__*/React.createElement(InfoPanel.Label, null, t('Topic')), /*#__PURE__*/React.createElement(InfoPanel.Text, {
    withTruncatedText: false
  }, /*#__PURE__*/React.createElement(MarkdownText, {
    variant: "inline",
    content: topic
  }))), retentionPolicyEnabled && retentionEnabledDefault && /*#__PURE__*/React.createElement(RetentionPolicyCallout, {
    filesOnlyDefault: filesOnlyDefault,
    excludePinnedDefault: excludePinnedDefault,
    maxAgeDefault: maxAgeDefault
  })))));
};

module.exportDefault(RoomInfo);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Info/RoomInfo/c1c473964495cf519528a2a734863685d2ca2d98.map
