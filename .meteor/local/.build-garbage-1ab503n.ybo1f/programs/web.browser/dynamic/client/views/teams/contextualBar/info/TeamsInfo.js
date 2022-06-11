function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/TeamsInfo.js                                                                  //
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
let Box, Button, Callout, Option, Menu;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  Callout(v) {
    Callout = v;
  },

  Option(v) {
    Option = v;
  },

  Menu(v) {
    Menu = v;
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
let VerticalBar;
module.link("../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 2);
let RoomAvatar;
module.link("../../../../components/avatar/RoomAvatar", {
  default(v) {
    RoomAvatar = v;
  }

}, 3);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let InfoPanel;
module.link("../../../InfoPanel", {
  default(v) {
    InfoPanel = v;
  }

}, 5);
let RetentionPolicyCallout;
module.link("../../../InfoPanel/RetentionPolicyCallout", {
  default(v) {
    RetentionPolicyCallout = v;
  }

}, 6);
let useActionSpread;
module.link("../../../hooks/useActionSpread", {
  useActionSpread(v) {
    useActionSpread = v;
  }

}, 7);

const TeamsInfo = _ref => {
  let {
    name,
    fname,
    description,
    archived,
    broadcast,
    announcement,
    topic,
    type,
    rid,
    icon,
    retentionPolicy = {},
    onClickHide,
    onClickClose,
    onClickLeave,
    onClickEdit,
    onClickDelete,
    onClickViewChannels,
    onClickConvertToChannel
  } = _ref;
  const t = useTranslation();
  const {
    retentionPolicyEnabled,
    filesOnlyDefault,
    excludePinnedDefault,
    maxAgeDefault
  } = retentionPolicy;
  const memoizedActions = useMemo(() => _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, onClickEdit && {
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
  }), [t, onClickHide, onClickLeave, onClickEdit, onClickDelete, onClickConvertToChannel]);
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
      type,
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
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/658f1ba67e807115f781685af1b714fee83146ef.map
