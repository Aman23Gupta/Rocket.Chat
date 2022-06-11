function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/channels/RoomActions.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["label"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 1);
let Box, CheckBox, Menu, Option;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  CheckBox(v) {
    CheckBox = v;
  },

  Menu(v) {
    Menu = v;
  },

  Option(v) {
    Option = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 2);
let roomTypes;
module.link("../../../../../app/utils/client", {
  roomTypes(v) {
    roomTypes = v;
  }

}, 3);
let usePermission;
module.link("../../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 4);
let useSetModal;
module.link("../../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 5);
let useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 6);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
let useEndpointActionExperimental;
module.link("../../../../hooks/useEndpointActionExperimental", {
  useEndpointActionExperimental(v) {
    useEndpointActionExperimental = v;
  }

}, 8);
let ConfirmationModal;
module.link("./ConfirmationModal", {
  default(v) {
    ConfirmationModal = v;
  }

}, 9);

const useReactModal = (Component, props) => {
  const setModal = useSetModal();
  return useMutableCallback(() => {
    const handleClose = () => {
      setModal(null);
    };

    setModal(() => /*#__PURE__*/React.createElement(Component, _extends({
      onClose: handleClose
    }, props)));
  });
};

const RoomActions = _ref => {
  let {
    room,
    reload
  } = _ref;
  const t = useTranslation();
  const rid = room._id;
  const type = room.t;
  const dispatchToastMessage = useToastMessageDispatch();
  const canDeleteTeamChannel = usePermission(type === 'c' ? 'delete-c' : 'delete-p', rid);
  const canEditTeamChannel = usePermission('edit-team-channel', rid);
  const canRemoveTeamChannel = usePermission('remove-team-channel', rid);
  const updateRoomEndpoint = useEndpointActionExperimental('POST', 'teams.updateRoom');
  const removeRoomEndpoint = useEndpointActionExperimental('POST', 'teams.removeRoom', t('Room_has_been_removed'));
  const deleteRoomEndpoint = useEndpointActionExperimental('POST', room.t === 'c' ? 'channels.delete' : 'groups.delete', t('Room_has_been_deleted'));
  const RemoveFromTeamAction = useReactModal(ConfirmationModal, {
    onConfirmAction: async () => {
      try {
        await removeRoomEndpoint({
          teamId: room.teamId,
          roomId: room._id
        });
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }

      reload();
    },
    labelButton: t('Remove'),
    content: /*#__PURE__*/React.createElement(Box, {
      is: "span",
      size: "14px"
    }, t('Team_Remove_from_team_modal_content', {
      teamName: roomTypes.getRoomName(room.t, room)
    }))
  });
  const DeleteChannelAction = useReactModal(ConfirmationModal, {
    onConfirmAction: async () => {
      try {
        await deleteRoomEndpoint({
          roomId: room._id
        });
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }

      reload();
    },
    labelButton: t('Delete'),
    content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
      is: "span",
      size: "14px",
      color: "danger-500",
      fontWeight: "600"
    }, t('Team_Delete_Channel_modal_content_danger')), /*#__PURE__*/React.createElement(Box, {
      is: "span",
      size: "14px"
    }, ' ', t('Team_Delete_Channel_modal_content')))
  });
  const menuOptions = useMemo(() => {
    const AutoJoinAction = async () => {
      try {
        await updateRoomEndpoint({
          roomId: rid,
          isDefault: !room.teamDefault
        });
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }

      reload();
    };

    return [canEditTeamChannel && {
      label: {
        label: t('Team_Auto-join'),
        icon: type === 'c' ? 'hash' : 'hashtag-lock'
      },
      action: AutoJoinAction
    }, canRemoveTeamChannel && {
      label: {
        label: t('Team_Remove_from_team'),
        icon: 'cross'
      },
      action: RemoveFromTeamAction
    }, canDeleteTeamChannel && {
      label: {
        label: t('Delete'),
        icon: 'trash'
      },
      action: DeleteChannelAction
    }].filter(Boolean);
  }, [DeleteChannelAction, RemoveFromTeamAction, rid, type, room.teamDefault, t, updateRoomEndpoint, reload, dispatchToastMessage, canDeleteTeamChannel, canRemoveTeamChannel, canEditTeamChannel]);
  return /*#__PURE__*/React.createElement(Menu, {
    flexShrink: 0,
    key: "menu",
    tiny: true,
    renderItem: _ref2 => {
      let {
        label: {
          label,
          icon
        }
      } = _ref2,
          props = _objectWithoutProperties(_ref2, _excluded);

      return icon.match(/hash/) ? /*#__PURE__*/React.createElement(Option, _extends({}, props, {
        label: label,
        icon: icon
      }), /*#__PURE__*/React.createElement(CheckBox, {
        checked: room.teamDefault
      })) : /*#__PURE__*/React.createElement(Box, {
        color: "danger-600"
      }, /*#__PURE__*/React.createElement(Option, _extends({}, props, {
        label: label,
        icon: icon
      })));
    },
    options: (canEditTeamChannel || canRemoveTeamChannel || canDeleteTeamChannel) && menuOptions
  });
};

module.exportDefault(RoomActions);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/channels/893abcf7792f027c1483212a743003541dd27b7e.map
