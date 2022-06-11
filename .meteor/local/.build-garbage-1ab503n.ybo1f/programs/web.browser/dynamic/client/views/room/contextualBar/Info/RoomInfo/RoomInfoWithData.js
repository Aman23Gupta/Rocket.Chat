function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Info/RoomInfo/RoomInfoWithData.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let RoomManager;
module.link("../../../../../../app/ui-utils/client/lib/RoomManager", {
  RoomManager(v) {
    RoomManager = v;
  }

}, 2);
let roomTypes, UiTextContext;
module.link("../../../../../../app/utils/client", {
  roomTypes(v) {
    roomTypes = v;
  },

  UiTextContext(v) {
    UiTextContext = v;
  }

}, 3);
let GenericModal;
module.link("../../../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 4);
let usePermission;
module.link("../../../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 5);
let useSetModal;
module.link("../../../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 6);
let useRoute;
module.link("../../../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 7);
let useEndpoint, useMethod;
module.link("../../../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  },

  useMethod(v) {
    useMethod = v;
  }

}, 8);
let useSetting;
module.link("../../../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 9);
let useToastMessageDispatch;
module.link("../../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 10);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 11);
let useUserRoom;
module.link("../../../../../contexts/UserContext", {
  useUserRoom(v) {
    useUserRoom = v;
  }

}, 12);
let useEndpointActionExperimental;
module.link("../../../../../hooks/useEndpointActionExperimental", {
  useEndpointActionExperimental(v) {
    useEndpointActionExperimental = v;
  }

}, 13);
let WarningModal;
module.link("../../../../admin/apps/WarningModal", {
  default(v) {
    WarningModal = v;
  }

}, 14);
let useTabBarClose;
module.link("../../../providers/ToolboxProvider", {
  useTabBarClose(v) {
    useTabBarClose = v;
  }

}, 15);
let ChannelToTeamModal;
module.link("../ChannelToTeamModal/ChannelToTeamModal", {
  default(v) {
    ChannelToTeamModal = v;
  }

}, 16);
let RoomInfo;
module.link("./RoomInfo", {
  default(v) {
    RoomInfo = v;
  }

}, 17);
const retentionPolicyMaxAge = {
  c: 'RetentionPolicy_MaxAge_Channels',
  p: 'RetentionPolicy_MaxAge_Groups',
  d: 'RetentionPolicy_MaxAge_DMs'
};
const retentionPolicyAppliesTo = {
  c: 'RetentionPolicy_AppliesToChannels',
  p: 'RetentionPolicy_AppliesToGroups',
  d: 'RetentionPolicy_AppliesToDMs'
};

const RoomInfoWithData = _ref => {
  let {
    rid,
    openEditing,
    onClickBack,
    onEnterRoom,
    resetState
  } = _ref;
  const onClickClose = useTabBarClose();
  const t = useTranslation();
  const room = useUserRoom(rid);
  room.type = room.t;
  room.rid = rid;
  const {
    type,
    fname,
    prid,
    joined = true
  } = room; // TODO implement joined

  const retentionPolicyEnabled = useSetting('RetentionPolicy_Enabled');
  const retentionPolicy = {
    retentionPolicyEnabled,
    maxAgeDefault: useSetting(retentionPolicyMaxAge[room.t]) || 30,
    retentionEnabledDefault: useSetting(retentionPolicyAppliesTo[room.t]),
    excludePinnedDefault: useSetting('RetentionPolicy_DoNotPrunePinned'),
    filesOnlyDefault: useSetting('RetentionPolicy_FilesOnly')
  };
  const dispatchToastMessage = useToastMessageDispatch();
  const setModal = useSetModal();
  const closeModal = useMutableCallback(() => setModal());
  const deleteRoom = useEndpoint('POST', room.t === 'c' ? 'channels.delete' : 'groups.delete');
  const hideRoom = useMethod('hideRoom');
  const leaveRoom = useMethod('leaveRoom');
  const router = useRoute('home');
  const moveChannelToTeam = useEndpointActionExperimental('POST', 'teams.addRooms', t('Success'));
  const convertRoomToTeam = useEndpointActionExperimental('POST', type === 'c' ? 'channels.convertToTeam' : 'groups.convertToTeam', t('Success'));
  const canDelete = usePermission(type === 'c' ? 'delete-c' : 'delete-p', rid);
  const canEdit = usePermission('edit-room', rid);
  const canConvertRoomToTeam = usePermission('create-team');
  const canLeave = usePermission(type === 'c' ? 'leave-c' : 'leave-p') && room.cl !== false && joined;
  const handleDelete = useMutableCallback(() => {
    const onConfirm = async () => {
      try {
        resetState && resetState({});
        await deleteRoom({
          roomId: rid
        });
        dispatchToastMessage({
          type: 'success',
          message: t('Room_has_been_deleted')
        });
        !resetState && router.push({});
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }

      closeModal();
    };

    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: onConfirm,
      onCancel: closeModal,
      confirmText: t('Yes_delete_it')
    }, t('Delete_Room_Warning')));
  });
  const handleLeave = useMutableCallback(() => {
    const leave = async () => {
      try {
        await leaveRoom(rid);
        router.push({});
        RoomManager.close(rid);
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }

      closeModal();
    };

    const warnText = roomTypes.getConfig(type).getUiText(UiTextContext.LEAVE_WARNING);
    setModal( /*#__PURE__*/React.createElement(WarningModal, {
      text: t(warnText, fname),
      confirmText: t('Leave_room'),
      close: closeModal,
      cancel: closeModal,
      cancelText: t('Cancel'),
      confirm: leave
    }));
  });
  const handleHide = useMutableCallback(async () => {
    const hide = async () => {
      try {
        await hideRoom(rid);
        router.push({});
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }

      closeModal();
    };

    const warnText = roomTypes.getConfig(type).getUiText(UiTextContext.HIDE_WARNING);
    setModal( /*#__PURE__*/React.createElement(WarningModal, {
      text: t(warnText, fname),
      confirmText: t('Yes_hide_it'),
      close: closeModal,
      cancel: closeModal,
      cancelText: t('Cancel'),
      confirm: hide
    }));
  });
  const onMoveToTeam = useMutableCallback(async () => {
    const onConfirm = async teamId => {
      try {
        await moveChannelToTeam({
          rooms: [rid],
          teamId
        });
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      } finally {
        closeModal();
      }
    };

    setModal( /*#__PURE__*/React.createElement(ChannelToTeamModal, {
      rid: rid,
      onClose: closeModal,
      onCancel: closeModal,
      onConfirm: onConfirm
    }));
  });
  const onConvertToTeam = useMutableCallback(async () => {
    const data = type === 'c' ? {
      channelId: rid
    } : {
      roomId: rid
    };

    const onConfirm = async () => {
      try {
        await convertRoomToTeam(data);
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      } finally {
        closeModal();
      }
    };

    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      title: t('Confirmation'),
      variant: "warning",
      onClose: closeModal,
      onCancel: closeModal,
      onConfirm: onConfirm,
      confirmText: t('Convert')
    }, t('Converting_channel_to_a_team')));
  });
  const onClickEnterRoom = useMutableCallback(() => onEnterRoom(room));
  const allowConvertToTeam = !room.teamId && !prid && canConvertRoomToTeam && canEdit;
  return /*#__PURE__*/React.createElement(RoomInfo, {
    room: room,
    icon: room.t === 'p' ? 'lock' : 'hashtag',
    retentionPolicy: retentionPolicyEnabled && retentionPolicy,
    onClickBack: onClickBack,
    onClickEdit: canEdit && openEditing,
    onClickClose: onClickClose,
    onClickDelete: canDelete && handleDelete,
    onClickLeave: canLeave && handleLeave,
    onClickHide: joined && handleHide,
    onClickMoveToTeam: !room.teamId && !prid && canEdit && onMoveToTeam,
    onClickConvertToTeam: allowConvertToTeam && onConvertToTeam,
    onClickEnterRoom: onEnterRoom && onClickEnterRoom
  });
};

module.exportDefault(RoomInfoWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Info/RoomInfo/0c18249bf95d1f5618493e9a94c8381466b33e5b.map
