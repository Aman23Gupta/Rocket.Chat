function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/CreateChannelWithData.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let React, memo, useCallback, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let usePermission;
module.link("../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 2);
let useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 3);
let useEndpointActionExperimental;
module.link("../../hooks/useEndpointActionExperimental", {
  useEndpointActionExperimental(v) {
    useEndpointActionExperimental = v;
  }

}, 4);
let useForm;
module.link("../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 5);
let goToRoomById;
module.link("../../lib/utils/goToRoomById", {
  goToRoomById(v) {
    goToRoomById = v;
  }

}, 6);
let CreateChannel;
module.link("./CreateChannel", {
  default(v) {
    CreateChannel = v;
  }

}, 7);

const CreateChannelWithData = _ref => {
  let {
    onClose,
    teamId = '',
    reload
  } = _ref;
  const createChannel = useEndpointActionExperimental('POST', 'channels.create');
  const createPrivateChannel = useEndpointActionExperimental('POST', 'groups.create');
  const canCreateChannel = usePermission('create-c');
  const canCreatePrivateChannel = usePermission('create-p');
  const e2eEnabledForPrivateByDefault = useSetting('E2E_Enabled_Default_PrivateRooms');
  const canOnlyCreateOneType = useMemo(() => {
    if (!canCreateChannel && canCreatePrivateChannel) {
      return 'p';
    }

    if (canCreateChannel && !canCreatePrivateChannel) {
      return 'c';
    }

    return false;
  }, [canCreateChannel, canCreatePrivateChannel]);
  const initialValues = {
    users: [],
    name: '',
    description: '',
    type: canOnlyCreateOneType ? canOnlyCreateOneType === 'p' : true,
    readOnly: false,
    encrypted: e2eEnabledForPrivateByDefault !== null && e2eEnabledForPrivateByDefault !== void 0 ? e2eEnabledForPrivateByDefault : false,
    broadcast: false
  };
  const {
    values,
    handlers,
    hasUnsavedChanges
  } = useForm(initialValues);
  const {
    users,
    name,
    description,
    type,
    readOnly,
    broadcast,
    encrypted
  } = values;
  const {
    handleUsers,
    handleEncrypted,
    handleType,
    handleBroadcast,
    handleReadOnly
  } = handlers;
  const onChangeUsers = useMutableCallback((value, action) => {
    if (!action) {
      if (users.includes(value)) {
        return;
      }

      return handleUsers([...users, value]);
    }

    handleUsers(users.filter(current => current !== value));
  });
  const onChangeType = useMutableCallback(value => {
    handleEncrypted(!value);
    return handleType(value);
  });
  const onChangeBroadcast = useMutableCallback(value => {
    handleEncrypted(!value);
    handleReadOnly(value);
    return handleBroadcast(value);
  });
  const onCreate = useCallback(async () => {
    const goToRoom = rid => {
      goToRoomById(rid);
    };

    const params = {
      name,
      members: users,
      readOnly,
      extraData: _objectSpread({
        description,
        broadcast,
        encrypted
      }, teamId && {
        teamId
      })
    };
    let roomData;

    if (type) {
      roomData = await createPrivateChannel(params);
      !teamId && goToRoom(roomData.group._id);
    } else {
      roomData = await createChannel(params);
      !teamId && goToRoom(roomData.channel._id);
    }

    onClose();
    reload();
  }, [broadcast, createChannel, createPrivateChannel, description, encrypted, name, onClose, readOnly, teamId, type, users, reload]);
  return /*#__PURE__*/React.createElement(CreateChannel, {
    values: values,
    handlers: handlers,
    hasUnsavedChanges: hasUnsavedChanges,
    onChangeUsers: onChangeUsers,
    onChangeType: onChangeType,
    onChangeBroadcast: onChangeBroadcast,
    canOnlyCreateOneType: canOnlyCreateOneType,
    e2eEnabledForPrivateByDefault: e2eEnabledForPrivateByDefault,
    onClose: onClose,
    onCreate: onCreate
  });
};

module.exportDefault( /*#__PURE__*/memo(CreateChannelWithData));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/header/e834119cea0df5668086de3904191601957448ab.map
