function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/TeamsInfoWithData.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let React, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let roomTypes, UiTextContext;
module.link("../../../../../app/utils/client", {
  roomTypes(v) {
    roomTypes = v;
  },

  UiTextContext(v) {
    UiTextContext = v;
  }

}, 2);
let GenericModalDoNotAskAgain;
module.link("../../../../components/GenericModal", {
  GenericModalDoNotAskAgain(v) {
    GenericModalDoNotAskAgain = v;
  }

}, 3);
let MarkdownText;
module.link("../../../../components/MarkdownText", {
  default(v) {
    MarkdownText = v;
  }

}, 4);
let usePermission;
module.link("../../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 5);
let useSetModal;
module.link("../../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 6);
let useRoute;
module.link("../../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 7);
let useMethod;
module.link("../../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 8);
let useSetting;
module.link("../../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 9);
let useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 10);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 11);
let useUserId;
module.link("../../../../contexts/UserContext", {
  useUserId(v) {
    useUserId = v;
  }

}, 12);
let useDontAskAgain;
module.link("../../../../hooks/useDontAskAgain", {
  useDontAskAgain(v) {
    useDontAskAgain = v;
  }

}, 13);
let useEndpointActionExperimental;
module.link("../../../../hooks/useEndpointActionExperimental", {
  useEndpointActionExperimental(v) {
    useEndpointActionExperimental = v;
  }

}, 14);
let useTabBarClose, useTabBarOpen;
module.link("../../../room/providers/ToolboxProvider", {
  useTabBarClose(v) {
    useTabBarClose = v;
  },

  useTabBarOpen(v) {
    useTabBarOpen = v;
  }

}, 15);
let ConvertToChannelModal;
module.link("../../ConvertToChannelModal", {
  default(v) {
    ConvertToChannelModal = v;
  }

}, 16);
let DeleteTeamModal;
module.link("./Delete", {
  default(v) {
    DeleteTeamModal = v;
  }

}, 17);
let LeaveTeamModal;
module.link("./Leave", {
  default(v) {
    LeaveTeamModal = v;
  }

}, 18);
let TeamsInfo;
module.link("./TeamsInfo", {
  default(v) {
    TeamsInfo = v;
  }

}, 19);
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

const TeamsInfoWithLogic = _ref => {
  let {
    room,
    openEditing
  } = _ref;
  const onClickClose = useTabBarClose();
  const openTabbar = useTabBarOpen();
  const t = useTranslation();
  const userId = useUserId();
  room.type = room.t;
  room.rid = room._id;
  const {
    /* type, fname, */
    broadcast,
    archived
    /* , joined = true */

  } = room; // TODO implement joined

  const retentionPolicyEnabled = useSetting('RetentionPolicy_Enabled');
  const retentionPolicy = {
    retentionPolicyEnabled,
    maxAgeDefault: useSetting(retentionPolicyMaxAge[room.t]) || 30,
    retentionEnabledDefault: useSetting(retentionPolicyAppliesTo[room.t]),
    excludePinnedDefault: useSetting('RetentionPolicy_DoNotPrunePinned'),
    filesOnlyDefault: useSetting('RetentionPolicy_FilesOnly')
  };
  const dontAskHideRoom = useDontAskAgain('hideRoom');
  const dispatchToastMessage = useToastMessageDispatch();
  const setModal = useSetModal();
  const closeModal = useMutableCallback(() => setModal());
  const deleteTeam = useEndpointActionExperimental('POST', 'teams.delete');
  const leaveTeam = useEndpointActionExperimental('POST', 'teams.leave');
  const convertTeamToChannel = useEndpointActionExperimental('POST', 'teams.convertToChannel');
  const hideTeam = useMethod('hideRoom');
  const router = useRoute('home');
  const canDelete = usePermission('delete-team', room._id);
  const canEdit = usePermission('edit-team-channel', room._id); // const canLeave = usePermission('leave-team'); /* && room.cl !== false && joined */

  const onClickDelete = useMutableCallback(() => {
    const onConfirm = async deletedRooms => {
      const roomsToRemove = Array.isArray(deletedRooms) && deletedRooms.length > 0 ? deletedRooms : [];

      try {
        await deleteTeam(_objectSpread({
          teamId: room.teamId
        }, roomsToRemove.length && {
          roomsToRemove
        }));
        dispatchToastMessage({
          type: 'success',
          message: t('Team_has_been_deleted')
        });
        router.push({});
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      } finally {
        closeModal();
      }
    };

    setModal( /*#__PURE__*/React.createElement(DeleteTeamModal, {
      onConfirm: onConfirm,
      onCancel: closeModal,
      teamId: room.teamId
    }));
  });
  const onClickLeave = useMutableCallback(() => {
    const onConfirm = async roomsLeft => {
      const roomsToLeave = Array.isArray(roomsLeft) && roomsLeft.length > 0 ? roomsLeft : [];

      try {
        await leaveTeam(_objectSpread({
          teamId: room.teamId
        }, roomsToLeave.length && {
          rooms: roomsToLeave
        }));
        dispatchToastMessage({
          type: 'success',
          message: t('Teams_left_team_successfully')
        });
        router.push({});
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      } finally {
        closeModal();
      }
    };

    setModal( /*#__PURE__*/React.createElement(LeaveTeamModal, {
      onConfirm: onConfirm,
      onCancel: closeModal,
      teamId: room.teamId
    }));
  });
  const handleHide = useMutableCallback(async () => {
    const hide = async () => {
      try {
        await hideTeam(room._id);
        router.push({});
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      } finally {
        closeModal();
      }
    };

    const warnText = roomTypes.getConfig(room.t).getUiText(UiTextContext.HIDE_WARNING);

    if (dontAskHideRoom) {
      return hide();
    }

    setModal( /*#__PURE__*/React.createElement(GenericModalDoNotAskAgain, {
      variant: "danger",
      confirmText: t('Yes_hide_it'),
      cancelText: t('Cancel'),
      onClose: closeModal,
      onCancel: closeModal,
      onConfirm: hide,
      dontAskAgain: {
        action: 'hideRoom',
        label: t('Hide_room')
      }
    }, t(warnText, room.fname)));
  });
  const onClickViewChannels = useCallback(() => openTabbar('team-channels'), [openTabbar]);
  const onClickConvertToChannel = useMutableCallback(() => {
    const onConfirm = async roomsToRemove => {
      try {
        await convertTeamToChannel({
          teamId: room.teamId,
          roomsToRemove: Object.keys(roomsToRemove)
        });
        dispatchToastMessage({
          type: 'success',
          message: t('Success')
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

    setModal( /*#__PURE__*/React.createElement(ConvertToChannelModal, {
      onClose: closeModal,
      onCancel: closeModal,
      onConfirm: onConfirm,
      teamId: room.teamId,
      userId: userId
    }));
  });
  return /*#__PURE__*/React.createElement(TeamsInfo, _extends({}, room, {
    archived: archived,
    broadcast: broadcast,
    icon: 'team',
    retentionPolicy: retentionPolicyEnabled && retentionPolicy,
    onClickEdit: canEdit && openEditing,
    onClickClose: onClickClose,
    onClickDelete: canDelete && onClickDelete,
    onClickLeave:
    /* canLeave && */
    onClickLeave,
    onClickHide:
    /* joined && */
    handleHide,
    onClickViewChannels: onClickViewChannels,
    onClickConvertToChannel: canEdit && onClickConvertToChannel,
    announcement: room.announcement && /*#__PURE__*/React.createElement(MarkdownText, {
      variant: "inline",
      content: room.announcement
    }),
    description: room.description && /*#__PURE__*/React.createElement(MarkdownText, {
      variant: "inline",
      content: room.description
    }),
    topic: room.topic && /*#__PURE__*/React.createElement(MarkdownText, {
      variant: "inline",
      content: room.topic
    })
  }));
};

module.exportDefault(TeamsInfoWithLogic);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/916442a76bb39d1dad7d786a692ab4c15eca2784.map
